import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { UserDto } from './dto/userDto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}
  async createUser(user: UserDto) {
    return await this.userRepository.create(user);
  }

  async getAllUsers() {
    return await this.userRepository.findAll();
  }
}
