import { Column, Entity, OneToMany } from "typeorm";
import { UtilisateurCentreInterets } from "./UtilisateurCentreInterets";

@Entity("centre_interets", { schema: "ploon" })
export class CentreInterets {
  @Column("int", { primary: true, name: "ID_CENTRE_INTERETS", unsigned: true })
  idCentreInterets: number;

  @Column("varchar", { name: "NOM_CENTRE_INTERET", nullable: true, length: 50 })
  nomCentreInteret: string | null;

  @Column("text", { name: "COMMENTAIRES_CI", nullable: true })
  commentairesCi: string | null;

  @OneToMany(
    () => UtilisateurCentreInterets,
    (utilisateurCentreInterets) => utilisateurCentreInterets.idCentreInterets2
  )
  utilisateurCentreInterets: UtilisateurCentreInterets[];
}
