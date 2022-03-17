import { Controller, Get, Param } from '@nestjs/common';
import { Utilisateur } from 'output/entities/Utilisateur';
import { UtilisateurService } from './utilisateur.service';

@Controller('user')
export class UtilisateurController 
{
    constructor(private readonly utilisateurService: UtilisateurService) 
    {
      let headers = new Headers();

      headers.append('Access-Control-Allow-Origin', 'http://localhost:19006');
      headers.append('Access-Control-Allow-Credentials', 'true');
    }
  
    @Get()
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