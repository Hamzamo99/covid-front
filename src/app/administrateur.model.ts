// administrateur.model.ts
export interface Administrateur {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  centre: { id: number };
}
