import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Utilisateur } from "./Utilisateur";
import { LieuRencontre } from "./LieuRencontre";

@Index("FK_lru_lieu_rencontre", ["idLieuRencontre"], {})
@Index("FK_lru_utilisateur", ["idUtilisateur"], {})
@Entity("lieu_rencontre_utilisateur", { schema: "ploon" })
export class LieuRencontreUtilisateur {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "ID_LIEU_RENCONTRE_UTILISATEUR",
    unsigned: true,
  })
  idLieuRencontreUtilisateur: number;

  @Column("int", {
    name: "ID_UTILISATEUR",
    unsigned: true,
    default: () => "'0'",
  })
  idUtilisateur: number;

  @Column("int", {
    name: "ID_LIEU_RENCONTRE",
    unsigned: true,
    default: () => "'0'",
  })
  idLieuRencontre: number;

  @ManyToOne(
    () => Utilisateur,
    (utilisateur) => utilisateur.lieuRencontreUtilisateurs,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([
    { name: "ID_UTILISATEUR", referencedColumnName: "idUtilisateur" },
  ])
  idUtilisateur2: Utilisateur;

  @ManyToOne(
    () => LieuRencontre,
    (lieuRencontre) => lieuRencontre.lieuRencontreUtilisateurs,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([
    { name: "ID_LIEU_RENCONTRE", referencedColumnName: "idLieuRencontre" },
  ])
  idLieuRencontre2: LieuRencontre;
}
