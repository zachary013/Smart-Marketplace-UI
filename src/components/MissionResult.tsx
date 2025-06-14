"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
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
      <div className="w-full max-w-4xl mx-auto mt-8 animate-in slide-in-from-bottom-4 duration-500">
        <Card>
          <CardContent className="py-12">
            <div className="flex items-center justify-center space-x-2">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <span className="text-lg">Génération de la mission en cours...</span>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!mission) {
    return null;
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 animate-in slide-in-from-bottom-4 duration-500">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary">
            Mission générée
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Titre et Description */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">{mission.title}</h3>
              <p className="text-gray-700 leading-relaxed">{mission.description}</p>
            </div>
          </div>

          {/* Informations principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-gray-600">
                  Années d&apos;expérience requises
                </Label>
                <p className="text-base font-medium">{mission.experienceYear}</p>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-600">
                  Type de contrat
                </Label>
                <p className="text-base font-medium">{mission.contractType}</p>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-600">
                  Mode de travail
                </Label>
                <p className="text-base font-medium">
                  {mission.workMode === 'ONSITE' ? 'Sur site' :
                   mission.workMode === 'REMOTE' ? 'Télétravail' : 'Hybride'}
                </p>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-600">
                  Tarif journalier estimé (DH)
                </Label>
                <p className="text-base font-medium">{mission.estimatedDailyRate.toLocaleString()}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-gray-600">
                  Localisation
                </Label>
                <p className="text-base font-medium">{mission.city}, {mission.country}</p>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-600">
                  Domaine
                </Label>
                <p className="text-base font-medium">{mission.domain}</p>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-600">
                  Poste
                </Label>
                <p className="text-base font-medium">{mission.position}</p>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-600">
                  Durée
                </Label>
                <p className="text-base font-medium">
                  {mission.duration} {mission.durationType === 'MONTH' ? 'mois' :
                   mission.durationType === 'WEEK' ? 'semaines' : 'jours'}
                </p>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-600">
                  Début immédiat
                </Label>
                <p className="text-base font-medium">
                  {mission.startImmediately ? 'Oui' : 'Non'}
                </p>
              </div>
            </div>
          </div>

          {/* Compétences */}
          <div>
            <Label className="text-sm font-medium text-gray-600 mb-3 block">
              Expertises requises
            </Label>
            <div className="flex flex-wrap gap-2">
              {mission.requiredExpertises.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-4 border-t">
            <Button className="flex-1">
              Publier la mission
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={onReset}
            >
              Recommencer
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function Label({ children, className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className={`text-sm font-medium ${className || ''}`} {...props}>
      {children}
    </label>
  );
}
