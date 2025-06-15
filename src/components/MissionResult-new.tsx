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
          <div className="w-full p-3 border border-gray-300 rounded-lg bg-blue-50">
            <span className="text-gray-900 font-medium">{mission.title}</span>
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

        {/* Grille des informations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Pays */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pays
            </label>
            <div className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100">
              <span className="text-gray-900">{mission.country}</span>
            </div>
          </div>

          {/* Ville */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ville
            </label>
            <div className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100">
              <span className="text-gray-900">{mission.city}</span>
            </div>
          </div>

          {/* Mode de travail */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mode de travail
            </label>
            <div className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100">
              <span className="text-gray-900">{mission.workMode}</span>
            </div>
          </div>

          {/* Durée estimée */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Durée estimée
            </label>
            <div className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100">
              <span className="text-gray-900">{mission.duration}</span>
            </div>
          </div>

          {/* Type de durée */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type de durée
            </label>
            <div className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100">
              <span className="text-gray-900">{mission.durationType}</span>
            </div>
          </div>

          {/* Démarrage immédiat */}
          <div className="flex items-center space-x-2 pt-7">
            <input
              type="checkbox"
              checked={mission.startImmediately}
              readOnly
              className="rounded border-gray-300"
            />
            <label className="text-sm font-medium text-gray-700">
              Démarrage immédiat
            </label>
          </div>

          {/* Date de démarrage */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date de démarrage
            </label>
            <div className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100">
              <span className="text-gray-500">
                {mission.startDate || 'Non spécifiée'}
              </span>
            </div>
          </div>

          {/* Type de contrat */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type de contrat
            </label>
            <div className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100">
              <span className="text-gray-900">{mission.contractType}</span>
            </div>
          </div>

          {/* TJM estimé */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              TJM estimé (€)
            </label>
            <div className="w-full p-3 border border-gray-300 rounded-lg bg-red-50">
              <span className="text-gray-900 font-medium">{mission.estimatedDailyRate}</span>
            </div>
          </div>

          {/* Domaine d'intervention */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Domaine d&apos;intervention
            </label>
            <div className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100">
              <span className="text-gray-900">{mission.domain}</span>
            </div>
          </div>

          {/* Fonction visée */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Fonction visée
            </label>
            <div className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100">
              <span className="text-gray-900">{mission.position}</span>
            </div>
          </div>

          {/* Expérience requise */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expérience requise
            </label>
            <div className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100">
              <span className="text-gray-900">{mission.experienceYear}</span>
            </div>
          </div>
        </div>

        {/* Expertises requises */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Expertises requises
          </label>
          <div className="w-full p-4 border border-gray-300 rounded-lg bg-gray-100 min-h-[60px]">
            <div className="flex flex-wrap gap-2">
              {mission.requiredExpertises.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-blue-100 text-blue-800 border-blue-200 px-3 py-1"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Séparez les expertises par des virgules.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <Button
            onClick={() => {/* TODO: Implement save */}}
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3"
          >
            Sauvegarder la mission
          </Button>
          <Button
            variant="outline"
            onClick={onReset}
            className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3"
          >
            Créer une nouvelle mission
          </Button>
        </div>
      </div>
    </div>
  );
}
