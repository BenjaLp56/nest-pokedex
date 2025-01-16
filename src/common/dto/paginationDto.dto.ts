import { IsNumber, IsOptional, IsPositive, Min } from "class-validator"


export class Paginationdto{

    @IsOptional()
    @IsNumber()
    @IsPositive()
    @Min(1)
    limit?: number

    @IsOptional()
    @IsNumber()
    @IsPositive()
    offset?: number

}