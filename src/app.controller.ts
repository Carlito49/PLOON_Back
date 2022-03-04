import { Controller, Get, Param } from '@nestjs/common';
import { Utilisateur } from 'output/entities/Utilisateur';
import { AppService } from './app.service';
import { UtilisateurService } from './utilisateur/utilisateur.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUtilisateurs(): string {
      return this.appService.getHello();
  }

}
