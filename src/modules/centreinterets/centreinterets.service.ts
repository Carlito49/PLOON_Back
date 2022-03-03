import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CentreInterets } from 'output/entities/CentreInterets';
import { CentreInteretsRepository } from './centreInterets.repository';

@Injectable()
export class CentreInteretsService
{
    constructor(
        @InjectRepository(CentreInteretsRepository)
        private readonly userRepository: CentreInteretsRepository
        ) {}

    async findAll(): Promise<CentreInterets[]> {
        return await this.userRepository.findAll();
    }
}