import { Repository, EntityRepository } from "typeorm";
import { Utilisateur } from "output/entities/Utilisateur";

@EntityRepository(Utilisateur)
export class UserRepository extends Repository<Utilisateur> {

    findAll(): Promise<Utilisateur[]> {
        return this.find();
    }

}