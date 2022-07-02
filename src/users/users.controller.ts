import {Body, Controller, Get, Post, Put, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./users.model";
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";
import {AddRoleDto} from "./dto/add-role.dto";
import {BanUserDto} from "./dto/ban-user.dto";
import {ValidationException} from "../exceptions/validation.exception";
import {Validation} from "../pipes/validation";

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}


    @ApiOperation({summary: 'Get all users'})
    @ApiResponse({status: 200, type: [User]})
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Get()
    async getUsers(){
        return this.userService.getUsers()
    }

    @ApiOperation({summary: 'Create user'})
    @ApiResponse({status: 200, type: User})
    @Post()
    async createUser(@Body() userDto: CreateUserDto){
        return this.userService.createUser(userDto)
    }

    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Post('/role')
    async addRole(@Body() roleDto: AddRoleDto){
        return this.userService.addRole(roleDto)
    }

    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Post('/ban')
    async banUser(@Body() dto: BanUserDto){
        return this.userService.banUser(dto)
    }
}
