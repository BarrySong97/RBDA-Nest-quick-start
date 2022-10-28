export class Response<T> {
  data: T;
  status: number;
  extra: Record<string, any>;
  message: string;
  success: boolean;
}
