import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilisateurCentreInteretsRepository } from './utilisateurCentreInterets.repository';
import { UtilisateurCentreInteretsService } from './utilisateurCentreInterets.service';

@Module({
    imports: [TypeOrmModule.forFeature([UtilisateurCentreInteretsRepository])],
    providers: [UtilisateurCentreInteretsService, UtilisateurCentreInteretsRepository],
})
export class UtilisateurCentreInteretsModule {}