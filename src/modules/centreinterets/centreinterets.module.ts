import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CentreInteretsRepository } from './centreInterets.repository';
import { CentreInteretsService } from './centreinterets.service';

@Module({
    imports: [TypeOrmModule.forFeature([CentreInteretsRepository])],
    providers: [CentreInteretsService, CentreInteretsRepository],
})
export class UserModule {}