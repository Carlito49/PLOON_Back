import { Repository, EntityRepository } from "typeorm";
import { CentreInterets } from "output/entities/CentreInterets";
import { LieuRencontre } from "output/entities/LieuRencontre";

@EntityRepository(CentreInterets)
export class LieuRencontreRepository extends Repository<LieuRencontre> {

    findAll(): Promise<LieuRencontre[]> {
        return this.find();
    }

}