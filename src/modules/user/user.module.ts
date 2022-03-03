import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';

@Module({
    imports: [TypeOrmModule.forFeature([UserRepository])],
    providers: [UserService, UserRepository],
})
export class UserModule {}
