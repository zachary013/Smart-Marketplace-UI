import { Mission, MissionFormData, GenerateMissionRequest, ApiResponse } from '@/types/mission';

// Configuration de l'API
const API_BASE_URL = 'https://localhost:5001'; // CORRIGÉ: Port 5001 selon votre doc

// Classe pour gérer les erreurs API
class ApiError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = 'ApiError';
  }
}

// Client API principal
class MissionApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  // Méthode générique pour les requêtes
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new ApiError(
          `HTTP error! status: ${response.status}`,
          response.status
        );
      }

      return await response.json();
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }

      // Erreur de réseau ou autre
      throw new ApiError(
        error instanceof Error ? error.message : 'Une erreur inconnue est survenue'
      );
    }
  }

  // Générer une mission
  async generateMission(formData: MissionFormData): Promise<Mission> {
    const requestData: GenerateMissionRequest = {
      simpleInput: formData.description,
      preferredProvider: formData.preferredProvider
    };

    const response = await this.request<ApiResponse<Mission>>(
      '/api/mission/generate', // MODIFIÉ: Nouveau endpoint selon la doc
      {
        method: 'POST',
        body: JSON.stringify(requestData),
      }
    );

    if (!response.success || !response.data) {
      throw new ApiError(
        response.errorMessage || 'Erreur lors de la génération de la mission'
      );
    }

    return response.data;
  }

  // Sauvegarder une mission
  async saveMission(mission: Mission): Promise<boolean> {
    const response = await this.request<ApiResponse<null>>(
      '/api/Mission/save',
      {
        method: 'POST',
        body: JSON.stringify(mission),
      }
    );

    if (!response.success) {
      throw new ApiError(
        response.errorMessage || 'Erreur lors de la sauvegarde de la mission'
      );
    }

    return true;
  }
}

// Instance singleton du client API
const apiClient = new MissionApiClient();

// Fonctions exportées pour l'utilisation dans les composants
export async function generateMission(formData: MissionFormData): Promise<Mission> {
  return apiClient.generateMission(formData);
}

export async function saveMission(mission: Mission): Promise<boolean> {
  return apiClient.saveMission(mission);
}

// Hook personnalisé pour la génération de mission
export function useMissionGenerator() {
  const generate = async (description: string): Promise<Mission> => {
    return generateMission({ description });
  };

  return { generate };
}

// Utilitaires pour la gestion des erreurs
export function isApiError(error: unknown): error is ApiError {
  return error instanceof ApiError;
}

export function getErrorMessage(error: unknown): string {
  if (isApiError(error)) {
    return error.message;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'Une erreur inconnue est survenue';
}
