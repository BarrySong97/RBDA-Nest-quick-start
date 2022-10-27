const isDev = process.env.RUNNING_ENV === 'dev';
import pino, { DestinationStream } from 'pino';
import { Options } from 'pino-http';

export function pinoHttpOption(): Options | DestinationStream {
  if (!isDev) {
    return pino.destination({
      dest: './log/my-file', // omit for stdout
      minLength: 4096, // Buffer before writing
      sync: false,
    });
  }

  return {
    level: isDev ? 'debug' : 'info',
    customLogLevel(_, res, err) {
      if (res.statusCode >= 400 && res.statusCode < 500) {
        return 'warn';
      } else if (res.statusCode >= 500 || err) {
        return 'error';
      }
      return 'info';
    },
    serializers: {
      req(req) {
        req.httpVersion = req.raw.httpVersion;
        req.params = req.raw.params;
        req.query = req.raw.query;
        req.body = req.raw.body;
        return req;
      },
      err(err) {
        err.params = err.raw.params;
        err.query = err.raw.query;
        err.body = err.raw.body;
        return err;
      },
    },
    transport: {
      target: 'pino-pretty',

      options: {
        singleLine: true,
      },
    },
  };
}
