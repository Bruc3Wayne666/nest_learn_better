import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {CreateUserDto} from "../users/dto/create-user.dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/registration')
    async registration(@Body() userDto: CreateUserDto){
        return this.authService.registration(userDto)
    }

    @Post('/login')
    async login(@Body() userDto: CreateUserDto){
        return this.authService.login(userDto)
    }
}
