# Smart Marketplace UI

## 📋 Description

Smart Marketplace UI est une application web développée avec Next.js qui permet de générer automatiquement des descriptions détaillées de missions freelance à partir d'une simple description textuelle. L'application s'appuie sur plusieurs modèles d'IA (Gemini, DeepSeek R1, Mistral) et s'intègre parfaitement avec un backend ASP.NET Core.

## 🎨 Interface Web

### Captures d'écran


#### Sélection du Provider IA et Formulaire de génération
<img width="1509" alt="Screenshot 2025-06-15 at 04 42 15" src="https://github.com/user-attachments/assets/fb9b396b-23cf-4640-8549-7cb07ae1e343" />

#### Résultats générés
<img width="1510" alt="Screenshot 2025-06-15 at 04 42 34" src="https://github.com/user-attachments/assets/f5d46144-f2ab-47b7-9465-dd6283427e0a" />
<img width="1512" alt="Screenshot 2025-06-15 at 04 42 57" src="https://github.com/user-attachments/assets/5139d640-5472-4445-ad17-63301f7684c1" />

## 🚀 Technologies Utilisées

- **Frontend** : Next.js 14, React 18, TypeScript
- **Styling** : Tailwind CSS, Shadcn/UI
- **Backend** : ASP.NET Core (API REST)
- **IA Providers** : Google Gemini, DeepSeek R1, Mistral AI

## 🤖 Providers IA Disponibles

| Provider | Modèle | Spécialités | API |
|----------|---------|-------------|-----|
| <img src="./public/icons/gimini.svg" width="24" height="24" alt="Gemini"/> **Google Gemini** *(Défaut)* | `gemini-1.5-flash` | • Génération rapide<br>• Texte structuré<br>• Support français | Google Generative Language |
| <img src="./public/icons/deepseek.svg" width="24" height="24" alt="DeepSeek"/> **DeepSeek R1** | `deepseek/deepseek-r1:free` | • Chain-of-Thought<br>• Analyse logique<br>• Missions techniques | OpenRouter (proxy) |
| <img src="./public/icons/mistral.svg" width="24" height="24" alt="Mistral"/> **Mistral AI** | `mistral-small-2503` | • Contexte français<br>• Missions locales<br>• Conformité RGPD | Mistral AI API |


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


## 📦 Installation

### Prérequis

- Node.js 18+
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
   ```

3. **Configuration**
   - Assurez-vous que votre backend ASP.NET Core fonctionne sur `https://localhost:5001`
   - Les endpoints API sont configurés dans `src/lib/api.ts`

4. **Lancer en mode développement**
   ```bash
   npm run dev
   ```

5. **Accéder à l'application**
   - Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur


## 🔧 Configuration API

L'application communique avec un backend ASP.NET Core via l'API REST :

- **Base URL** : `https://localhost:5001/api`
- **Endpoint principal** : `/mission/generate`
- **Format de réponse** : ApiResponse<T> standardisé



## 👥 Team

| Avatar                                                                                                  | Name | GitHub |
|---------------------------------------------------------------------------------------------------------|------|--------|
| <img src="https://github.com/zachary013.png" width="50" height="50" style="border-radius: 50%"/>        | Zakariae Azarkan | [@zachary013](https://github.com/zachary013) |
| <img src="https://github.com/Salahjb.png" width="50" height="50" style="border-radius: 50%"/>          | Salaheddine El Jably | [@Salahjb](https://github.com/Salahjb) |
