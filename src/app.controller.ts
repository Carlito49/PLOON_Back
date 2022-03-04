import { Controller, Get } from '@nestjs/common';
import { Utilisateur } from 'output/entities/Utilisateur';
import { AppService } from './app.service';
import { UtilisateurService } from './utilisateur/utilisateur.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly utilisateurService: UtilisateurService) {}

  @Get()
  getUtilisateurs(): Promise<Utilisateur[]> {
      return this.utilisateurService.findAll();
  }
}
