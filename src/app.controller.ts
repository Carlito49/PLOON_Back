import { Controller, Get } from '@nestjs/common';
import { Utilisateur } from 'entities/entities/Utilisateur';
import { AppService } from './app.service';
import { UtilisateurService } from './user/utilisateur.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly utilisateurService: UtilisateurService) {}

  @Get()
  getHello(): string {
      return this.appService.getHello();
  }
}
