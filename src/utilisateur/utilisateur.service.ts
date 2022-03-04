import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Utilisateur } from "output/entities/Utilisateur";
import { Repository } from "typeorm";

@Injectable()
export class UtilisateurService 
{
    constructor(
        @InjectRepository(Utilisateur)
        private utilisateurRepository: Repository<Utilisateur>
    ) {}

    async findAll(): Promise<Utilisateur[]> {
        return this.utilisateurRepository.find();
    }
}