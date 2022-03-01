import { Module } from '@nestjs/common';
import { Utilisateur } from 'entities/entities/Utilisateur';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilisateurService } from './utilisateur.service';
import { UtilisateurController } from './utilisateur.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Utilisateur])],
    providers: [UtilisateurService],
    controllers: [UtilisateurController]
})

export class UtilisateurModule {}