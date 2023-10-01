// medecin.model.ts
export interface Medecin {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    centre: { id: number };
  }