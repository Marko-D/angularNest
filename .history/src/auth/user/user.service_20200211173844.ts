import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm'
import { User } from '../user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        email: email,
      }
    });
  }

  async findById(id: number): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        id: id,
      }
    });
  }

  async findByPass(pass: string): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        password: pass,
      }
    });
  }

  async findByEmailPass(email: string, pass: string): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        email: email,
        password: pass
      }
    });
  }

  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }
}