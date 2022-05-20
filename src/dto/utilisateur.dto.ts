
export class UtilisateurDTO {

    nomUtilisateur: string;
    
    prenomUtilisateur: string;

    emailUtilisateur: string;

    ageUtilisateur?: number;

    photoUtilisateur?: Buffer | null;

    lieuHabitation?: number;

    lieuNaissance?: number;

    note?: number;

}