import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { CentreInterets } from "output/entities/CentreInterets";
import { Lieu } from "output/entities/Lieu";
import { LieuRencontre } from "output/entities/LieuRencontre";
import { LieuRencontreStyleLieu } from "output/entities/LieuRencontreStyleLieu";
import { LieuRencontreUtilisateur } from "output/entities/LieuRencontreUtilisateur";
import { StyleLieu } from "output/entities/StyleLieu";
import { Utilisateur } from "output/entities/Utilisateur";
import { UtilisateurCentreInterets } from "output/entities/UtilisateurCentreInterets";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mariadb',
    host: 'localhost',
    port: 3600,
    username: 'root',
    password: 'root',
    database: 'ploon',
    entities: [
        Utilisateur,
        CentreInterets,
        Lieu,
        LieuRencontre,
        LieuRencontreStyleLieu,
        LieuRencontreUtilisateur,
        StyleLieu,
        UtilisateurCentreInterets
    ],
    synchronize: true
}



