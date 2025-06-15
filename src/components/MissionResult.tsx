"use client";

import React from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Mission } from '@/types/mission';

interface MissionResultProps {
  mission: Mission | null;
  isLoading: boolean;
  onReset?: () => void;
}

export default function MissionResult({ mission, isLoading, onReset }: MissionResultProps) {
  if (isLoading) {
    return (
      <div className="w-full mt-8 animate-in fade-in duration-300">
        <div className="flex items-center justify-center py-12">
          <div className="flex items-center space-x-3">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
            <span className="text-lg text-muted-foreground">Génération de la mission en cours...</span>
          </div>
        </div>
      </div>
    );
  }

  if (!mission) {
    return null;
  }

  return (
    <div className="w-full mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Détails de la mission</h2>
        </div>

        {/* Titre de la mission */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Titre de la mission
          </label>
          <div className="w-full p-4 border border-gray-300 rounded-lg bg-blue-50">
            <span className="text-gray-900 font-medium text-lg">{mission.title}</span>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <div className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50 min-h-[120px]">
            <div className="whitespace-pre-line text-gray-900 leading-relaxed">
              {mission.description}
            </div>
          </div>
        </div>

        {/* Informations de la mission organisées par sections */}
        <div className="space-y-10 mb-8">
          
          {/* Section 1: Localisation et Mode de travail */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
              📍 Localisation & Mode de travail
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">Pays</label>
                <div className="p-4 bg-muted rounded-lg">
                  <span className="text-foreground font-medium">{mission.country}</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">Ville</label>
                <div className="p-4 bg-muted rounded-lg">
                  <span className="text-foreground font-medium">{mission.city}</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">Mode de travail</label>
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <span className="text-primary font-semibold">{mission.workMode}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Durée et Planning */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
              ⏱️ Durée & Planning
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">Durée estimée</label>
                <div className="p-4 bg-muted rounded-lg">
                  <span className="text-foreground font-medium">{mission.duration}</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">Type de durée</label>
                <div className="p-4 bg-muted rounded-lg">
                  <span className="text-foreground font-medium">{mission.durationType}</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">Démarrage</label>
                <div className="p-4 bg-muted rounded-lg">
                  {mission.startImmediately ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-primary font-medium">Immédiat</span>
                    </div>
                  ) : (
                    <span className="text-foreground font-medium">{mission.startDate || 'À planifier'}</span>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">Date de démarrage</label>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <span className="text-muted-foreground">{mission.startDate || 'Non spécifiée'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Contrat et Rémunération */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
              💰 Contrat & Rémunération
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">Type de contrat</label>
                <div className="p-4 bg-muted rounded-lg">
                  <span className="text-foreground font-medium">{mission.contractType}</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">TJM estimé (€)</label>
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <span className="text-primary font-bold text-lg">{mission.estimatedDailyRate} €</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Profil recherché */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
              👨‍💻 Profil recherché
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">Domaine d&apos;intervention</label>
                <div className="p-4 bg-muted rounded-lg">
                  <span className="text-foreground font-medium">{mission.domain}</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">Fonction visée</label>
                <div className="p-4 bg-muted rounded-lg">
                  <span className="text-foreground font-medium">{mission.position}</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">Expérience requise</label>
                <div className="p-4 bg-accent rounded-lg">
                  <span className="text-accent-foreground font-semibold">{mission.experienceYear} ans</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Expertises requises */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2 mb-4">
            🔧 Expertises requises
          </h3>
          <div className="p-6 bg-muted/50 rounded-lg min-h-[100px]">
            <div className="flex flex-wrap gap-3">
              {mission.requiredExpertises.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            Compétences techniques et fonctionnelles requises pour cette mission.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-border">
          <Button
            onClick={() => {/* TODO: Implement save */}}
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium"
          >
            💾 Sauvegarder la mission
          </Button>
          <Button
            variant="outline"
            onClick={onReset}
            className="flex-1 border-border text-foreground hover:bg-muted px-8 py-4 text-lg font-medium"
          >
            ✨ Créer une nouvelle mission
          </Button>
        </div>
      </div>
    </div>
  );
}
