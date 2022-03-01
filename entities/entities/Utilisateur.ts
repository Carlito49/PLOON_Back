import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { LieuRencontreUtilisateur } from "./LieuRencontreUtilisateur";
import { Lieu } from "./Lieu";
import { UtilisateurCentreInterets } from "./UtilisateurCentreInterets";

@Index("FK_utilisateur_lieu_habitation", ["lieuHabitation"], {})
@Index("FK_utilisateur_lieu_naissance", ["lieuNaissance"], {})
@Entity("utilisateur", { schema: "ploon" })
export class Utilisateur {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "ID_UTILISATEUR",
    unsigned: true,
  })
  idUtilisateur: number;

  @Column("tinytext", { name: "NOM_UTILISATEUR" })
  nomUtilisateur: string;

  @Column("tinytext", { name: "PRENOM_UTILISATEUR" })
  prenomUtilisateur: string;

  @Column("tinyint", {
    name: "AGE_UTILISATEUR",
    unsigned: true,
    default: () => "'0'",
  })
  ageUtilisateur: number;

  @Column("longblob", { name: "PHOTO_UTILISATEUR" })
  photoUtilisateur: Buffer;

  @Column("int", {
    name: "LIEU_HABITATION",
    unsigned: true,
    default: () => "'0'",
  })
  lieuHabitation: number;

  @Column("int", {
    name: "LIEU_NAISSANCE",
    unsigned: true,
    default: () => "'0'",
  })
  lieuNaissance: number;

  @Column("tinyint", { name: "NOTE", unsigned: true, default: () => "'0'" })
  note: number;

  @OneToMany(
    () => LieuRencontreUtilisateur,
    (lieuRencontreUtilisateur) => lieuRencontreUtilisateur.idUtilisateur2
  )
  lieuRencontreUtilisateurs: LieuRencontreUtilisateur[];

  @ManyToOne(() => Lieu, (lieu) => lieu.utilisateurs, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "LIEU_HABITATION", referencedColumnName: "idLieu" }])
  lieuHabitation2: Lieu;

  @ManyToOne(() => Lieu, (lieu) => lieu.utilisateurs2, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "LIEU_NAISSANCE", referencedColumnName: "idLieu" }])
  lieuNaissance2: Lieu;

  @OneToMany(
    () => UtilisateurCentreInterets,
    (utilisateurCentreInterets) => utilisateurCentreInterets.idUtilisateur2
  )
  utilisateurCentreInterets: UtilisateurCentreInterets[];
}
