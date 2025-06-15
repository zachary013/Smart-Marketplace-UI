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
      <div className="w-full max-w-4xl mx-auto mt-8 animate-in fade-in duration-500">
        <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
          {/* Animation de chargement moderne */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="relative">
              {/* Cercles animés */}
              <div className="w-16 h-16 relative">
                <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
                <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
                <div className="absolute inset-2 rounded-full border-2 border-primary/40 border-b-transparent animate-spin animation-delay-150" style={{animationDirection: 'reverse'}}></div>
              </div>
              {/* Particules flottantes */}
              <div className="absolute -top-2 -right-2 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-primary/60 rounded-full animate-pulse animation-delay-300"></div>
              <div className="absolute top-0 -left-3 w-1 h-1 bg-primary/40 rounded-full animate-pulse animation-delay-500"></div>
            </div>

            {/* Texte avec effet de typing */}
            <div className="text-center space-y-2">
              <h3 className="text-xl font-semibold text-primary">Génération en cours</h3>
              <p className="text-muted-foreground animate-pulse">
                L&apos;IA analyse votre demande et crée une mission sur mesure...
              </p>
            </div>

            {/* Barre de progression animée */}
            <div className="w-full max-w-xs bg-muted rounded-full h-2 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full animate-pulse"
                   style={{
                     width: '100%',
                     animation: 'loading-bar 2s ease-in-out infinite alternate'
                   }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!mission) {
    return null;
  }

  return (
    <div className="w-full max-w-5xl mx-auto mt-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
      {/* Header avec gradient */}
      <div className="bg-gradient-to-r from-primary to-primary/80 rounded-t-3xl p-6 text-primary-foreground">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">✨ Mission générée avec succès</h2>
            <p className="text-primary-foreground/90">Voici votre mission personnalisée</p>
          </div>
          <div className="bg-white/20 rounded-full p-3">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="bg-white rounded-b-3xl border border-t-0 border-gray-200 shadow-lg">
        {/* Titre et Description */}
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{mission.title}</h3>
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p className="leading-relaxed whitespace-pre-line">{mission.description}</p>
          </div>
        </div>

        {/* Informations principales en grille moderne */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Localisation */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 border border-blue-200">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-3 text-sm font-medium text-blue-700">Localisation</span>
              </div>
              <p className="text-lg font-bold text-blue-900">{mission.city}</p>
              <p className="text-sm text-blue-600">{mission.country}</p>
            </div>

            {/* Mode de travail */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-4 border border-green-200">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-3 text-sm font-medium text-green-700">Mode</span>
              </div>
              <p className="text-lg font-bold text-green-900">
                {mission.workMode === 'ONSITE' ? '🏢 Sur site' :
                 mission.workMode === 'REMOTE' ? '🏠 Télétravail' : '🔄 Hybride'}
              </p>
            </div>

            {/* Durée */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-4 border border-purple-200">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-3 text-sm font-medium text-purple-700">Durée</span>
              </div>
              <p className="text-lg font-bold text-purple-900">
                {mission.duration} {
                  mission.durationType === 'DAY' ? 'jours' :
                  mission.durationType === 'WEEK' ? 'semaines' :
                  mission.durationType === 'MONTH' ? 'mois' : 'années'
                }
              </p>
            </div>

            {/* Tarif */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-4 border border-amber-200">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-3 text-sm font-medium text-amber-700">TJM</span>
              </div>
              <p className="text-lg font-bold text-amber-900">{mission.estimatedDailyRate.toLocaleString()} €</p>
              <p className="text-sm text-amber-600">par jour</p>
            </div>
          </div>

          {/* Détails supplémentaires */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">📋 Détails du contrat</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type de contrat:</span>
                    <span className="font-medium">{mission.contractType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Expérience requise:</span>
                    <span className="font-medium">{mission.experienceYear} ans</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Début immédiat:</span>
                    <span className="font-medium">{mission.startImmediately ? '✅ Oui' : '❌ Non'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Domaine:</span>
                    <span className="font-medium">{mission.domain}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Position:</span>
                    <span className="font-medium">{mission.position}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-3">🛠️ Compétences requises</h4>
                <div className="flex flex-wrap gap-2">
                  {mission.requiredExpertises.map((skill, index) => (
                    <Badge
                      key={index}
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 px-3 py-1 text-sm font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
            <Button
              onClick={() => {/* TODO: Implement save */}}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl font-medium"
            >
              💾 Sauvegarder la mission
            </Button>
            <Button
              variant="outline"
              onClick={onReset}
              className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-xl font-medium"
            >
              🔄 Créer une nouvelle mission
            </Button>
            <Button
              variant="outline"
              onClick={() => {/* TODO: Implement export */}}
              className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-xl font-medium"
            >
              📄 Exporter PDF
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
