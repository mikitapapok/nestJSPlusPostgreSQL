import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/userDto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  async getAll() {
    return this.userService.getAllUsers();
  }

  @Post()
  async create(@Body() user: UserDto) {
    return await this.userService.createUser(user);
  }
}
