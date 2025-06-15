export interface Mission {
  id?: string;
  title: string;
  description: string;
  country: string;
  city: string;
  workMode: 'ONSITE' | 'REMOTE' | 'HYBRID';
  duration: number;
  durationType: 'DAY' | 'WEEK' | 'MONTH' | 'YEAR'; // CORRIGÉ: Ajout de DAY et WEEK
  startImmediately: boolean;
  startDate?: string; // Format yyyy-MM-dd
  experienceYear: string; // "0-3", "3-7", "7-12", "12+"
  contractType: 'REGIE' | 'FORFAIT' | 'CDI' | 'CDD'; // CORRIGÉ: Ordre inversé
  estimatedDailyRate: number;
  domain: string;
  position: string;
  requiredExpertises: string[];
  createdAt?: Date;
}

export interface MissionFormData {
  description: string;
}

// Types pour l'API Backend
export interface GenerateMissionRequest {
  simpleInput: string;
  preferredProvider?: 'Grok' | 'OpenAI' | 'Mistral'; // Provider IA préféré
}

export interface ApiResponse<T> {
  success: boolean;
  data: T | null;        // CHANGÉ: "data" au lieu de "mission"
  errorMessage: string | null;
  provider: string | null; // AJOUTÉ: Provider IA utilisé
}
