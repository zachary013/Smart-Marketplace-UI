export interface Mission {
  id?: string;
  title: string;
  description: string;
  country: string;
  city: string;
  workMode: 'ONSITE' | 'REMOTE' | 'HYBRID';
  duration: number;
  durationType: 'MONTH' | 'WEEK' | 'DAY';
  startImmediately: boolean;
  experienceYear: string;
  contractType: 'REGIE' | 'FREELANCE' | 'CDI' | 'CDD';
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
}

export interface ApiResponse<T> {
  success: boolean;
  mission: T | null;
  errorMessage: string | null;
}
