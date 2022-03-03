import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UtilisateurCentreInterets } from 'output/entities/UtilisateurCentreInterets';
import { UtilisateurCentreInteretsRepository } from './utilisateurCentreInterets.repository';

@Injectable()
export class UtilisateurCentreInteretsService
{
    constructor(
        @InjectRepository(UtilisateurCentreInteretsRepository)
        private readonly userRepository: UtilisateurCentreInteretsRepository
        ) {}

    async findAll(): Promise<UtilisateurCentreInterets[]> {
        return await this.userRepository.findAll();
    }
}