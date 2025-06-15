# Smart Marketplace UI

Une interface Next.js moderne et intuitive pour la génération automatique de missions freelance à l'aide de l'intelligence artificielle.

## 📋 Description

Smart Marketplace UI est une application web développée avec Next.js qui permet de générer automatiquement des descriptions détaillées de missions freelance à partir d'une simple description textuelle. L'application s'appuie sur plusieurs modèles d'IA (Gemini, DeepSeek R1, Mistral) et s'intègre parfaitement avec un backend ASP.NET Core.

## ✨ Fonctionnalités

## ✨ Fonctionnalités

### 🎯 **Génération Intelligente de Missions**
- **Transformation automatique** : Conversion d'une description simple en mission complète et détaillée
- **Extraction d'informations** : Analyse automatique des mots-clés, technologies, localisation et budget
- **Structuration professionnelle** : Organisation des données selon les standards du marché freelance

### 🤖 **Multi-Provider IA Avancé**
- **Sélection dynamique** : Choix entre 3 modèles IA spécialisés (Gemini, DeepSeek R1, Mistral)
- **Optimisation contextuelle** : Chaque provider adapté à des types de missions spécifiques
- **Fallback intelligent** : Basculement automatique en cas d'indisponibilité d'un provider

### 📊 **Extraction et Analyse de Données**
- **Parsing intelligent** : Extraction automatique du TJM, durée, localisation, expertises
- **Catégorisation** : Classification automatique par domaine (Backend, Frontend, DevOps, etc.)
- **Validation des formats** : Vérification et normalisation des données extraites

## 🚀 Technologies Utilisées

- **Frontend** : Next.js 14, React 18, TypeScript
- **Styling** : Tailwind CSS, Shadcn/UI
- **Backend** : ASP.NET Core (API REST)
- **IA Providers** : Google Gemini, DeepSeek R1, Mistral AI

## 📦 Installation

### Prérequis

- Node.js 18+
- npm ou yarn
- Backend ASP.NET Core (Smart Marketplace API)

### Étapes d'installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/votre-repo/smart-marketplace-ui.git
   cd smart-marketplace-ui
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configuration**
   - Assurez-vous que votre backend ASP.NET Core fonctionne sur `https://localhost:5001`
   - Les endpoints API sont configurés dans `src/lib/api.ts`

4. **Lancer en mode développement**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. **Accéder à l'application**
   - Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur

## 🏗️ Structure du Projet

```
src/
├── app/                    # App Router Next.js
│   ├── globals.css        # Styles globaux
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Page d'accueil
├── components/            # Composants React
│   ├── ui/               # Composants UI (Shadcn)
│   ├── MissionForm.tsx   # Formulaire de génération
│   ├── MissionResult.tsx # Affichage des résultats
│   └── Header.tsx        # En-tête de l'application
├── lib/                  # Utilitaires et API
│   ├── api.ts           # Client API REST
│   └── utils.ts         # Fonctions utilitaires
└── types/               # Types TypeScript
    └── mission.ts       # Types des données de mission
```

## 🔧 Configuration API

L'application communique avec un backend ASP.NET Core via l'API REST :

- **Base URL** : `https://localhost:5001/api`
- **Endpoint principal** : `/mission/generate`
- **Format de réponse** : ApiResponse<T> standardisé

### Exemple de requête

```json
{
  "simpleInput": "Développeur Laravel, Rabat, 8000DH",
  "preferredProvider": "Gemini"
}
```

## 🎨 Interface Web

### Captures d'écran

> **Note** : Cette section sera mise à jour avec des captures d'écran de l'interface

#### Sélection du Provider IA et Formulaire de génération
*Screenshot à venir - Interface de choix du modèle d'IA (Gemini, DeepSeek R1, Mistral)*

#### Résultats générés
*Screenshot à venir - Affichage organisé des détails de la mission*


### Caractéristiques de l'UI

- **Design épuré** : Pas de cards, espacement généreux
- **Couleurs cohérentes** : Utilisation de la palette de l'application
- **Typographie claire** : Hiérarchie visuelle optimisée
- **Interactions fluides** : Transitions et animations subtiles
- **Accessibilité** : Interface accessible et utilisable

## 🤖 Providers IA Disponibles

### Google Gemini (Par défaut)
- **Modèle** : `gemini-1.5-flash`
- **Caractéristiques** :
  - Modèle multimodal rapide et efficace de Google
  - Excellent équilibre entre vitesse et qualité
  - Optimisé pour les tâches de génération de texte structuré
  - Support natif du français et des contextes professionnels
- **API** : Google Generative Language API

### DeepSeek R1
- **Modèle** : `deepseek/deepseek-r1:free`
- **Caractéristiques** :
  - Modèle de raisonnement avancé avec capacités Chain-of-Thought
  - Excellence dans l'analyse logique et la structuration d'informations
  - Spécialisé dans les tâches nécessitant une réflexion étape par étape
  - Très performant pour les descriptions détaillées de missions techniques
- **API** : OpenRouter (proxy)

### Mistral AI
- **Modèle** : `mistral-small-2503`
- **Caractéristiques** :
  - Modèle français développé par Mistral AI
  - Compréhension nuancée du contexte professionnel français
  - Optimisé pour les entreprises européennes
  - Excellent pour les descriptions de postes et missions locales
  - Respect des standards RGPD et souveraineté numérique
- **API** : Mistral AI API


## 📊 Format des Données

### Structure d'une Mission

```typescript
interface Mission {
  id?: string;
  title: string;
  description: string;
  country: string;
  city: string;
  workMode: "REMOTE" | "ONSITE" | "HYBRID";
  duration: number;
  durationType: "MONTH" | "WEEK" | "DAY" | "YEAR";
  startImmediately: boolean;
  startDate?: string;
  experienceYear: "0-3" | "3-7" | "7-12" | "12+";
  contractType: "FORFAIT" | "REGIE" | "CDI" | "CDD";
  estimatedDailyRate: number;
  domain: string;
  position: string;
  requiredExpertises: string[];
  createdAt?: string;
}
```
## 👥 Team

| Avatar                                                                                                  | Name | Role | GitHub |
|---------------------------------------------------------------------------------------------------------|------|------|--------|
| <img src="https://github.com/zachary013.png" width="50" height="50" style="border-radius: 50%"/>        | Zakariae Azarkan | WebCam Object Detection | [@zachary013](https://github.com/zachary013) |
| <img src="https://github.com/Sam-Jab.png" width="50" height="50" style="border-radius: 50%"/>          | Salaheddine El Jably | Model Training | [@Sam-Jab](https://github.com/Sam-Jab) |