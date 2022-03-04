
export class UtilisateurDTO {

    readonly nomUtilisateur: string;
    
    readonly prenomUtilisateur: string;

    readonly ageUtilisateur: number;

    readonly photoUtilisateur: Buffer | null;

    readonly lieuHabitation: number;

    readonly lieuNaissance: number;

    readonly note: number;
}