import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Utilisateur } from 'output/entities/Utilisateur';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService
{
    constructor(
        @InjectRepository(UserRepository)
        private readonly userRepository: UserRepository
        ) {}

    async findAll(): Promise<Utilisateur[]> {
        return await this.userRepository.findAll();
    }
}