import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { LieuRencontre } from "./LieuRencontre";
import { StyleLieu } from "./StyleLieu";

@Index("FK_lrsl_lieu_rencontre", ["idLieuRencontre"], {})
@Index("FK_lrsl_style_lieu", ["idStyleLieu"], {})
@Entity("lieu_rencontre_style_lieu", { schema: "ploon" })
export class LieuRencontreStyleLieu {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "ID_LIEU_R_STYLE",
    unsigned: true,
  })
  idLieuRStyle: number;

  @Column("int", {
    name: "ID_LIEU_RENCONTRE",
    unsigned: true,
    default: () => "'0'",
  })
  idLieuRencontre: number;

  @Column("int", {
    name: "ID_STYLE_LIEU",
    unsigned: true,
    default: () => "'0'",
  })
  idStyleLieu: number;

  @ManyToOne(
    () => LieuRencontre,
    (lieuRencontre) => lieuRencontre.lieuRencontreStyleLieus,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([
    { name: "ID_LIEU_RENCONTRE", referencedColumnName: "idLieuRencontre" },
  ])
  idLieuRencontre2: LieuRencontre;

  @ManyToOne(
    () => StyleLieu,
    (styleLieu) => styleLieu.lieuRencontreStyleLieus,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "ID_STYLE_LIEU", referencedColumnName: "idStyleLieu" }])
  idStyleLieu2: StyleLieu;
}
