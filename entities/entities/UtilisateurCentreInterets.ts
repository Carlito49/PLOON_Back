import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CentreInterets } from "./CentreInterets";
import { Utilisateur } from "./Utilisateur";

@Index("FK_uci_utilisateur", ["idUtilisateur"], {})
@Index("FK_uci_centre_interets", ["idCentreInterets"], {})
@Entity("utilisateur_centre_interets", { schema: "ploon" })
export class UtilisateurCentreInterets {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "ID_UTILISATEUR_CI",
    unsigned: true,
  })
  idUtilisateurCi: number;

  @Column("int", {
    name: "ID_UTILISATEUR",
    unsigned: true,
    default: () => "'0'",
  })
  idUtilisateur: number;

  @Column("int", {
    name: "ID_CENTRE_INTERETS",
    unsigned: true,
    default: () => "'0'",
  })
  idCentreInterets: number;

  @Column("text", { name: "COMMENTAIRES_CI_UTILISATEUR" })
  commentairesCiUtilisateur: string;

  @ManyToOne(
    () => CentreInterets,
    (centreInterets) => centreInterets.utilisateurCentreInterets,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([
    { name: "ID_CENTRE_INTERETS", referencedColumnName: "idCentreInterets" },
  ])
  idCentreInterets2: CentreInterets;

  @ManyToOne(
    () => Utilisateur,
    (utilisateur) => utilisateur.utilisateurCentreInterets,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([
    { name: "ID_UTILISATEUR", referencedColumnName: "idUtilisateur" },
  ])
  idUtilisateur2: Utilisateur;
}
