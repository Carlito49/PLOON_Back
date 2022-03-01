import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Utilisateur } from 'entities/entities/Utilisateur';
import { Repository } from 'typeorm';
 
@Injectable()
export class UtilisateurService {
    constructor(
        @InjectRepository(Utilisateur)
        private readonly utilisateurRepository: Repository<Utilisateur>
    ) {}

    async findAll(): Promise<Utilisateur[]> {
        return await this.utilisateurRepository.find();
    }
}