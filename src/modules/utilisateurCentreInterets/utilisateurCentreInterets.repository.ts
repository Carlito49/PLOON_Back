import { Repository, EntityRepository } from "typeorm";
import { UtilisateurCentreInterets } from "output/entities/UtilisateurCentreInterets";

@EntityRepository(UtilisateurCentreInterets)
export class UtilisateurCentreInteretsRepository extends Repository<UtilisateurCentreInterets> {

    findAll(): Promise<UtilisateurCentreInterets[]> {
        return this.find();
    }

}