import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {RolesService} from "./roles.service";
import {CreateRoleDto} from "./dto/create-role.dto";

@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService) {}

    @Get('/:value')
    async getRoleByValue(@Param('value') value: string){
        return this.roleService.getRoleByValue(value)
    }

    @Post()
    async createRole(@Body() roleDto: CreateRoleDto){
        return this.roleService.createRole(roleDto)
    }
}
