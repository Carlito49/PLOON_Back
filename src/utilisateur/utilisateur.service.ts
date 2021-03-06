import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Utilisateur } from "output/entities/Utilisateur";
import { Repository } from "typeorm";
import { UtilisateurDTO } from "src/dto/utilisateur.dto";

@Injectable()
export class UtilisateurService 
{
    constructor(
        @InjectRepository(Utilisateur)
        private utilisateurRepository: Repository<Utilisateur>
    ) {}

    async findOne(id: number) {
        console.log("Find One service appelé");
        return this.utilisateurRepository.findOne(id);
    }

    async findAll(): Promise<Utilisateur[]> {
        console.log('service utilisateur appelé')
        return this.utilisateurRepository.find();
    }

    async findByName(nomUtilisateur: string): Promise<Utilisateur | undefined> {
        console.log("FindByName appelé")
        return this.utilisateurRepository.findOne({ nomUtilisateur });
    }

    async create(utilisateurDTO: UtilisateurDTO) {
        const utilisateurEntity = new Utilisateur();
        utilisateurEntity.nomUtilisateur = utilisateurDTO.nomUtilisateur;
        utilisateurEntity.prenomUtilisateur = utilisateurDTO.prenomUtilisateur;
        utilisateurEntity.photoUtilisateur = utilisateurDTO.photoUtilisateur;
        utilisateurEntity.ageUtilisateur = utilisateurDTO.ageUtilisateur;
        utilisateurEntity.lieuHabitation = utilisateurDTO.lieuHabitation;
        utilisateurEntity.lieuNaissance = utilisateurDTO.lieuHabitation;
        utilisateurEntity.note = utilisateurDTO.note;
        
        const utilisateurRepo = this.utilisateurRepository.create(utilisateurEntity);
        await this.utilisateurRepository.save(utilisateurRepo);
        return utilisateurRepo;
    }
}