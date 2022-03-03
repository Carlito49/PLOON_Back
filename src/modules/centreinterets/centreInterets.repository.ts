import { Repository, EntityRepository } from "typeorm";
import { CentreInterets } from "output/entities/CentreInterets";

@EntityRepository(CentreInterets)
export class CentreInteretsRepository extends Repository<CentreInterets> {

    findAll(): Promise<CentreInterets[]> {
        return this.find();
    }

}