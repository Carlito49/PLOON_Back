import { Controller, Get, Header, Param } from '@nestjs/common';
import { Utilisateur } from 'output/entities/Utilisateur';
import { UtilisateurService } from './utilisateur.service';

@Controller('user')
export class UtilisateurController 
{
    constructor(private readonly utilisateurService: UtilisateurService) {}
  
    @Get()
    @Header('Access-Control-Allow-Origin', 'http://localhost:19006')
    @Header('Access-Control-Allow-Credentials', 'true')
    getUser(): string {
      return 'Hello tu es bien sur le controller user!!';
    }

    @Get('find')
    getUtilisateurs(): Promise<Utilisateur[]> {
        return this.utilisateurService.findAll();
    }

    @Get('/:id')
    getOneUtilisateur(@Param('id') id: number): Promise<Utilisateur> {
    return this.utilisateurService.findOne(id);
  }
}