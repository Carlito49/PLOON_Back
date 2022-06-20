import { Body, Controller, Get, Header, Param, Post } from '@nestjs/common';
import { Utilisateur } from 'output/entities/Utilisateur';
import { UtilisateurDTO } from 'src/dto/utilisateur.dto';
import { UtilisateurService } from './utilisateur.service';

@Controller('user')
export class UtilisateurController 
{
    constructor(private readonly utilisateurService: UtilisateurService) {}
  
    @Get()
    @Header('Access-Control-Allow-Origin', 'http://localhost:19002')
    @Header('Access-Control-Allow-Credentials', 'true')
    getUser(): string {
        return 'Hello tu es bien sur le controller user!!';
    }

    @Get('find')
    @Header('Access-Control-Allow-Origin', 'http://localhost:19000')
    @Header('Access-Control-Allow-Credentials', 'true')
    getUtilisateurs(): Promise<Utilisateur[]> {
        console.log('controlleur utilisateur appelé')
        return this.utilisateurService.findAll();
    }

    @Get('find/:id')
    getOneUtilisateur(@Param('id') id: number): Promise<Utilisateur> {
        console.log("Find One controlleur appelé")
        return this.utilisateurService.findOne(id);
    }

    @Post()
    addOneUtilisateur(@Body() utilisateurDTO: UtilisateurDTO): Promise<Utilisateur> {
        return this.utilisateurService.create(utilisateurDTO);
    }
}

