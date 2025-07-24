# StackEval

**StackEval** est une application web simple et épurée permettant aux développeurs de tester leurs connaissances en **C#**, **Unity** ou un mélange des deux à travers une série de QCM interactifs.

---

## 🧠 Fonctionnalités

* Sélection de **5 niveaux de difficulté** : Débutant à Expert
* Choix du **thème** : Unity, C#, ou Mixte
* **20 questions aléatoires** par session
* Interface mono-question, simple et rapide à utiliser
* Page de **résultats avec corrections** et explications pédagogiques
* 100% **statique**, sans backend, déployable partout (Netlify, GitHub Pages...)

---

## 🚀 Démarrer localement

```bash
npm install
npm run dev
```

---

## 📁 Structure

```
├── public/               # Assets statiques
├── src/
│   ├── components/       # Composants React (HomePage, QuizPage, ResultsPage...)
│   ├── data/             # Fichiers JSON des questions par thème/difficulté
│   ├── App.tsx           # Navigation logique (home > quiz > résultats)
│   └── index.tsx         # Point d'entrée
├── tailwind.config.js
└── index.css
```

---

## 🔧 Personnalisation

Pour ajouter ou modifier les questions :

* Modifier les fichiers JSON dans `/src/data`
* Le format est simple, exemple :

```json
{
  "difficulty": "beginner",
  "mode": "unity",
  "questions": [
    {
      "id": "unity-beginner-001",
      "question": "À quoi sert la méthode Start() dans Unity ?",
      "options": ["A", "B", "C", "D"],
      "correctAnswer": 2,
      "explanation": "Start() est appelée une fois au lancement du script actif."
    }
  ]
}
```

---

## 🛠 Tech Stack

* **React** + **TypeScript**
* **Tailwind CSS**
* 100% statique

---

## 📄 Licence

Projet open-source sous licence MIT.
