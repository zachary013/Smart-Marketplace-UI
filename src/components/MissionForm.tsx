"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mission } from '@/types/mission';
import { generateMission } from '@/lib/api';

interface MissionFormProps {
  onMissionGenerated: (mission: Mission) => void;
  onLoadingChange: (loading: boolean) => void;
  onError?: (error: unknown) => void;
}

export default function MissionForm({ onMissionGenerated, onLoadingChange, onError }: MissionFormProps) {
  const [description, setDescription] = useState('');
  const [selectedProvider, setSelectedProvider] = useState<'DeepSeek' | 'Gemini' | 'Mistral'>('Gemini');
  const [isLoading, setIsLoading] = useState(false);

  const providers = [
    {
      value: 'Gemini' as const,
      label: 'Google Gemini',
      logo: '/icons/gimini.svg', // Logo Gemini
      description: 'Modèle avancé de Google'
    },
    {
      value: 'DeepSeek' as const,
      label: 'DeepSeek R1',
      logo: '/icons/deepseek.svg', // Logo DeepSeek
      description: 'Modèle de raisonnement avancé'
    },
    {
      value: 'Mistral' as const,
      label: 'Mistral AI',
      logo: '/icons/mistral.svg', // Logo Mistral
      description: 'Modèle français optimisé'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (description.trim()) {
      setIsLoading(true);
      onLoadingChange(true);

      try {
        const mission = await generateMission({
          description: description.trim(),
          preferredProvider: selectedProvider
        });
        onMissionGenerated(mission);
      } catch (error) {
        console.error('Erreur lors de la génération de la mission:', error);
        if (onError) {
          onError(error);
        }
      } finally {
        setIsLoading(false);
        onLoadingChange(false);
      }
    }
  };

  return (
    <div className="w-full space-y-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Sélecteur d'AI Provider */}
        <div className="space-y-3">
          <Label className="text-lg font-medium text-foreground">
            Choisir le modèle d&apos;IA
          </Label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {providers.map((provider) => (
              <button
                key={provider.value}
                type="button"
                onClick={() => setSelectedProvider(provider.value)}
                className={`p-5 rounded-xl border-2 transition-all duration-300 text-left hover:shadow-lg ${
                  selectedProvider === provider.value
                    ? 'border-primary bg-primary/5 shadow-lg ring-2 ring-primary/20'
                    : 'border-border bg-background hover:border-primary/50 hover:bg-muted/30'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <Image
                      src={provider.logo}
                      alt={`${provider.label} logo`}
                      width={48}
                      height={48}
                      className="rounded-lg object-contain"
                      priority
                    />
                  </div>
                  <div className="flex-1">
                    <div className={`font-semibold text-base ${
                      selectedProvider === provider.value
                        ? 'text-primary'
                        : 'text-foreground'
                    }`}>
                      {provider.label}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {provider.description}
                    </div>
                  </div>
                </div>
                {selectedProvider === provider.value && (
                  <div className="mt-3 flex items-center text-primary">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
                    <span className="text-xs font-semibold uppercase tracking-wide">Sélectionné</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Description du besoin */}
        <div className="space-y-3">
          <Label htmlFor="description" className="text-lg font-medium text-foreground">
            Décrivez votre besoin
          </Label>
          <Textarea
            id="description"
            placeholder="Mettre ton Prompt ici :
Exemple : Je cherche un développeur React senior pour créer une application"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="min-h-[120px] text-2xl resize-none bg-muted/50 border-muted-foreground/20 focus:border-primary focus:ring-primary placeholder:text-muted-foreground/60"
            required
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={!description.trim() || isLoading}
          className="w-full py-4 text-lg font-medium bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          🎓 {isLoading ? 'Génération en cours...' : `Générer avec ${providers.find(p => p.value === selectedProvider)?.label}`}
        </Button>
      </form>
    </div>
  );
}
