import { Controller, Get } from "@nestjs/common";
import { Utilisateur } from "entities/entities/Utilisateur";
import { UtilisateurService } from "./utilisateur.service";

@Controller('/utilisateur')
export class UtilisateurController {

    constructor(private readonly utilisateurService: UtilisateurService) {}

    @Get('find')
    getAll(): Promise<Utilisateur[]> {
        return this.utilisateurService.findAll();
    }

}