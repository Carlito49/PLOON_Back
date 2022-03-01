import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Lieu } from "./Lieu";
import { LieuRencontreStyleLieu } from "./LieuRencontreStyleLieu";
import { LieuRencontreUtilisateur } from "./LieuRencontreUtilisateur";

@Index("FK_lieu_rencontre_lieu", ["lieuRencontre"], {})
@Entity("lieu_rencontre", { schema: "ploon" })
export class LieuRencontre {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "ID_LIEU_RENCONTRE",
    unsigned: true,
  })
  idLieuRencontre: number;

  @Column("int", {
    name: "LIEU_RENCONTRE",
    unsigned: true,
    default: () => "'0'",
  })
  lieuRencontre: number;

  @Column("varchar", { name: "NOM_LIEU", length: 150, default: () => "'0'" })
  nomLieu: string;

  @ManyToOne(() => Lieu, (lieu) => lieu.lieuRencontres, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "LIEU_RENCONTRE", referencedColumnName: "idLieu" }])
  lieuRencontre2: Lieu;

  @OneToMany(
    () => LieuRencontreStyleLieu,
    (lieuRencontreStyleLieu) => lieuRencontreStyleLieu.idLieuRencontre2
  )
  lieuRencontreStyleLieus: LieuRencontreStyleLieu[];

  @OneToMany(
    () => LieuRencontreUtilisateur,
    (lieuRencontreUtilisateur) => lieuRencontreUtilisateur.idLieuRencontre2
  )
  lieuRencontreUtilisateurs: LieuRencontreUtilisateur[];
}
