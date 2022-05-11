import { ApiProperty } from '@nestjs/swagger';

export class ErrorDto {
    @ApiProperty({
        example: 'User is not found',
    })
    message: string;

    @ApiProperty({
        minimum: 400,
        maximum: 599,
        type: 'integer',
        example: 404,
    })
    statusCode: number;

    @ApiProperty({
        description: 'the name of error',
        example: 'Not Found',
    })
    error: string | string[];
}
