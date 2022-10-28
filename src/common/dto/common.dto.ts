import { ApiProperty } from '@nestjs/swagger';

export class CommonDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: '2021-12-01 12:32', type: Date })
  updatedDate: Date;

  @ApiProperty({ example: '2021-12-01 12:32', type: Date })
  createdDate: Date;
}
