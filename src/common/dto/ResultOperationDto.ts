import { ApiResponseProperty } from '@nestjs/swagger';

export class ResultOperationDto {
    @ApiResponseProperty()
    message: string;

    @ApiResponseProperty()
    operation: string;
}
