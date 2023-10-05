export interface Inscription {
  id: number; // Ajoutez la propriété id
  nom?: string;
  prenom?: string;
  email?: string;
  telephone?: string;
  dateInscription?: string;
  centre?: { id: number };
}
