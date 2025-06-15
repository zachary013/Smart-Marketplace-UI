'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import MissionForm from '@/components/MissionForm';
import MissionResult from '@/components/MissionResult';
import { Mission } from '@/types/mission';
import { getErrorMessage } from '@/lib/api';

export default function Home() {
  const [mission, setMission] = useState<Mission | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleMissionGenerated = (generatedMission: Mission) => {
    setMission(generatedMission);
    setError(null);
  };

  const handleLoadingChange = (loading: boolean) => {
    setIsLoading(loading);
    if (loading) {
      setError(null);
    }
  };

  const handleError = (error: unknown) => {
    setError(getErrorMessage(error));
    setIsLoading(false);
  };

  const handleReset = () => {
    setMission(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-2 sm:px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Section titre */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">
              Créer une nouvelle mission
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exprimez votre besoin simplement et laissez l&apos;IA générer une mission détaillée pour vous
            </p>
          </div>

          {/* Formulaire - style épuré sans card */}
          <MissionForm
            onMissionGenerated={handleMissionGenerated}
            onLoadingChange={handleLoadingChange}
            onError={handleError}
          />

          {/* Affichage des erreurs */}
          {error && (
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <div className="text-destructive">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-destructive font-medium">Erreur</p>
              </div>
              <p className="text-destructive/80 mt-1">{error}</p>
              <button
                onClick={handleReset}
                className="text-destructive hover:text-destructive/80 underline mt-2 text-sm"
              >
                Réessayer
              </button>
            </div>
          )}

          {/* Résultat */}
          {(isLoading || mission) && (
            <MissionResult
              mission={mission}
              isLoading={isLoading}
              onReset={handleReset}
            />
          )}
        </div>
      </main>
    </div>
  );
}
