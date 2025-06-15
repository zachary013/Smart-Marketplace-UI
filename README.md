# Smart Marketplace UI

Une interface Next.js moderne et intuitive pour la génération automatique de missions freelance à l'aide de l'intelligence artificielle.

## 📋 Description

Smart Marketplace UI est une application web développée avec Next.js qui permet de générer automatiquement des descriptions détaillées de missions freelance à partir d'une simple description textuelle. L'application s'appuie sur plusieurs modèles d'IA (Gemini, DeepSeek R1, Mistral) et s'intègre parfaitement avec un backend ASP.NET Core.

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
<img width="1509" alt="Screenshot 2025-06-15 at 04 42 15" src="https://github.com/user-attachments/assets/fb9b396b-23cf-4640-8549-7cb07ae1e343" />

#### Résultats générés
<img width="1510" alt="Screenshot 2025-06-15 at 04 42 34" src="https://github.com/user-attachments/assets/f5d46144-f2ab-47b7-9465-dd6283427e0a" />
<img width="1512" alt="Screenshot 2025-06-15 at 04 42 57" src="https://github.com/user-attachments/assets/5139d640-5472-4445-ad17-63301f7684c1" />


### Caractéristiques de l'UI

- **Design épuré** : Pas de cards, espacement généreux
- **Couleurs cohérentes** : Utilisation de la palette de l'application
- **Typographie claire** : Hiérarchie visuelle optimisée
- **Interactions fluides** : Transitions et animations subtiles
- **Accessibilité** : Interface accessible et utilisable

## 🤖 Providers IA Disponibles

| Provider | Modèle | Type | Spécialités | API | Points forts |
|----------|---------|------|-------------|-----|--------------|
| 🟢 **Google Gemini** *(Défaut)* | `gemini-1.5-flash` | Multimodal | • Génération rapide<br>• Texte structuré<br>• Support français | Google Generative Language | • Équilibre vitesse/qualité<br>• Contextes professionnels<br>• Fiabilité éprouvée |
| 🧠 **DeepSeek R1** | `deepseek/deepseek-r1:free` | Raisonnement | • Chain-of-Thought<br>• Analyse logique<br>• Missions techniques | OpenRouter (proxy) | • Réflexion étape par étape<br>• Structuration avancée<br>• Détails techniques |
| 🇫🇷 **Mistral AI** | `mistral-small-2503` | Européen | • Contexte français<br>• Missions locales<br>• Conformité RGPD | Mistral AI API | • Souveraineté numérique<br>• Compréhension culturelle<br>• Standards européens |


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
