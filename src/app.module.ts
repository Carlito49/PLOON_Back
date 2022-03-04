import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { UtilisateurService } from './utilisateur/utilisateur.service';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),
    UtilisateurModule,
  ],
  controllers: [AppController,
  ],
  providers: [AppService, 
    UtilisateurService,
  ],
})
export class AppModule {}
