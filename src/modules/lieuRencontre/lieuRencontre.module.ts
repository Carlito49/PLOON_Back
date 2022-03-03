import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LieuRencontreRepository } from './lieuRencontre.repository';
import { LieuRencontreService } from './lieuRencontre.service';

@Module({
    imports: [TypeOrmModule.forFeature([LieuRencontreRepository])],
    providers: [LieuRencontreService, LieuRencontreRepository],
})
export class LieuRencontreModule {}