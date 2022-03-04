import { Controller, Get, Param } from '@nestjs/common';
import { Utilisateur } from 'output/entities/Utilisateur';
import { UtilisateurService } from './utilisateur.service';

@Controller('utilisateur')
export class UtilisateurController 
{
    constructor(private readonly utilisateurService: UtilisateurService) {}

    @Get()
    getUtilisateurs(): Promise<Utilisateur[]> {
        return this.utilisateurService.findAll();
    }

    @Get('/:id')
    getOneUtilisateur(@Param('id') id: number): Promise<Utilisateur> {
    return this.utilisateurService.findOne(id);
  }
}