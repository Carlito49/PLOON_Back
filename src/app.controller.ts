import { Controller, Get } from '@nestjs/common';
import { Utilisateur } from 'output/entities/Utilisateur';
import { AppService } from './app.service';
import { UserService } from './modules/user/user.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly userService: UserService) {}

  @Get()
  getUtilisateurs(): Promise<Utilisateur[]> {
      return this.userService.findAll();
  }
}
