import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Utilisateur } from 'output/entities/Utilisateur';
import { UtilisateurController } from './utilisateur.controller';
import { UtilisateurService } from './utilisateur.service';

@Module({
    imports: [TypeOrmModule.forFeature([Utilisateur])],
    controllers: [UtilisateurController],
    providers: [UtilisateurService],
    exports: [TypeOrmModule]
})
export class UtilisateurModule {}