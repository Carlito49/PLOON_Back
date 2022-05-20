import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { LieuRencontreStyleLieu } from "./LieuRencontreStyleLieu";

@Entity("style_lieu", { schema: "ploon" })
export class StyleLieu {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "ID_STYLE_LIEU",
    unsigned: true,
  })
  idStyleLieu: number;

  @Column("text", { name: "COMMENTAIRE_STYLE" })
  commentaireStyle: string;

  @Column("varchar", { name: "NOM_STYLE", length: 50, default: () => "'0'" })
  nomStyle: string;

  @OneToMany(
    () => LieuRencontreStyleLieu,
    (lieuRencontreStyleLieu) => lieuRencontreStyleLieu.idStyleLieu2
  )
  lieuRencontreStyleLieus: LieuRencontreStyleLieu[];
}
