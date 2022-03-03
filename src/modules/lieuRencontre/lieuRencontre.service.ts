import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LieuRencontre } from 'output/entities/LieuRencontre';
import { LieuRencontreRepository } from './lieuRencontre.repository';

@Injectable()
export class LieuRencontreService
{
    constructor(
        @InjectRepository(LieuRencontreRepository)
        private readonly lieuRencontreRepository: LieuRencontreRepository
        ) {}

    async findAll(): Promise<LieuRencontre[]> {
        return await this.lieuRencontreRepository.findAll();
    }
}