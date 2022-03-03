import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { LieuRencontre } from "./LieuRencontre";
import { Utilisateur } from "./Utilisateur";

@Entity("lieu", { schema: "ploon" })
export class Lieu {
  @PrimaryGeneratedColumn({ type: "int", name: "ID_LIEU", unsigned: true })
  idLieu: number;

  @Column("varchar", { name: "VILLE_LIEU", length: 100, default: () => "'0'" })
  villeLieu: string;

  @Column("varchar", {
    name: "DEPARTEMENT_LIEU",
    length: 100,
    default: () => "'0'",
  })
  departementLieu: string;

  @Column("varchar", { name: "REGION_LIEU", length: 100, default: () => "'0'" })
  regionLieu: string;

  @Column("varchar", {
    name: "COORDONNEES_GEO",
    length: 15,
    default: () => "'0'",
  })
  coordonneesGeo: string;

  @OneToMany(
    () => LieuRencontre,
    (lieuRencontre) => lieuRencontre.lieuRencontre2
  )
  lieuRencontres: LieuRencontre[];

  @OneToMany(() => Utilisateur, (utilisateur) => utilisateur.lieuHabitation2)
  utilisateurs: Utilisateur[];

  @OneToMany(() => Utilisateur, (utilisateur) => utilisateur.lieuNaissance2)
  utilisateurs2: Utilisateur[];
}
