import {ApiProperty} from "@nestjs/swagger";
import {Length, IsString} from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'babra@gmail.com', description: 'Email'})
    @IsString({message: 'Must be a string'})
    readonly email: string;

    @ApiProperty({example: 'qwerty1234)', description: 'Password'})
    @Length(4, 20, {message: 'At least 4 and not more than 20'})
    readonly password: string;
}