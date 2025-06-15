"use client";

import React, { useState } from 'react';
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
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (description.trim()) {
      setIsLoading(true);
      onLoadingChange(true);

      try {
        const mission = await generateMission({ description: description.trim() });
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
            className="min-h-[120px] text-base resize-none bg-muted/50 border-muted-foreground/20 focus:border-primary focus:ring-primary"
            required
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={!description.trim() || isLoading}
          className="w-full py-4 text-lg font-medium bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          🎓 {isLoading ? 'Génération en cours...' : 'Générer la mission'}
        </Button>
      </form>
    </div>
  );
}
