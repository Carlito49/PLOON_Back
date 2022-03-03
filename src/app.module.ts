import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { CentreInteretsRepository } from './modules/centreinterets/centreInterets.repository';
import { CentreInteretsService } from './modules/centreinterets/centreinterets.service';
import { LieuRencontreModule } from './modules/lieuRencontre/lieuRencontre.module';
import { LieuRencontreRepository } from './modules/lieuRencontre/lieuRencontre.repository';
import { LieuRencontreService } from './modules/lieuRencontre/lieuRencontre.service';
import { UserModule } from './modules/user/user.module';
import { UserRepository } from './modules/user/user.repository';
import { UserService } from './modules/user/user.service';
import { UtilisateurCentreInteretsModule } from './modules/utilisateurCentreInterets/utilisateurCentreInterets.module';
import { UtilisateurCentreInteretsRepository } from './modules/utilisateurCentreInterets/utilisateurCentreInterets.repository';
import { UtilisateurCentreInteretsService } from './modules/utilisateurCentreInterets/utilisateurCentreInterets.service';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), 
    UserModule, 
    LieuRencontreModule,
    UtilisateurCentreInteretsModule
  ],
  controllers: [AppController],
  providers: [AppService, 
    UserService, 
    UserRepository,
    LieuRencontreService,
    LieuRencontreRepository,
    CentreInteretsService,
    CentreInteretsRepository,
    UtilisateurCentreInteretsService,
    UtilisateurCentreInteretsRepository
  ],
})
export class AppModule {}
