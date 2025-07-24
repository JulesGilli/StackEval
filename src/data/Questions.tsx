export interface Question {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    category: string; // ex: "UI/UX"
    level: string;    // "user" | "pro" | "expert"
}

export const questionsData: Question[] = [
    // Fundamentals
    {
        id: "fundamentals-01",
        question: "Quel panneau permet de voir tous les objets présents dans la scène actuelle ?",
        options: ["Inspector", "Hierarchy", "Project", "Console"],
        correctAnswer: 1,
        explanation: "Le panneau Hierarchy affiche la liste de tous les GameObjects dans la scène.",
        category: "fundamentals",
        level: "user"
    },
    {
        id: "fundamentals-02",
        question: "Quel composant est toujours présent sur un GameObject dans Unity ?",
        options: ["Rigidbody", "Transform", "MeshRenderer", "Collider"],
        correctAnswer: 1,
        explanation: "Le composant Transform est obligatoire et gère position/rotation/échelle.",
        category: "fundamentals",
        level: "user"
    },
    {
        id: "fundamentals-03",
        question: "Dans quel panneau ajoute-t-on un composant à un GameObject ?",
        options: ["Scene", "Hierarchy", "Inspector", "Console"],
        correctAnswer: 2,
        explanation: "On ajoute des composants via le bouton 'Add Component' dans l'Inspector.",
        category: "fundamentals",
        level: "user"
    },
    {
        id: "fundamentals-04",
        question: "Comment créer un nouvel objet vide dans la scène ?",
        options: [
            "Menu GameObject > Create Empty",
            "Clic droit sur Project > Create Empty",
            "File > New Scene",
            "Inspector > New Object"
        ],
        correctAnswer: 0,
        explanation: "Menu GameObject > Create Empty permet d'ajouter un objet vide à la scène.",
        category: "fundamentals",
        level: "user"
    },
    {
        id: "fundamentals-05",
        question: "Quel raccourci clavier permet de dupliquer un GameObject dans la scène ?",
        options: ["Ctrl + D", "Ctrl + N", "Ctrl + C", "Ctrl + Shift + N"],
        correctAnswer: 0,
        explanation: "Ctrl + D duplique l’objet sélectionné dans Unity.",
        category: "fundamentals",
        level: "user"
    },
    {
        id: "fundamentals-06",
        question: "Où trouve-t-on tous les fichiers assets du projet Unity ?",
        options: ["Inspector", "Hierarchy", "Scene", "Project"],
        correctAnswer: 3,
        explanation: "Le panneau Project contient tous les assets (scripts, textures, prefabs, etc.).",
        category: "fundamentals",
        level: "user"
    },
    {
        id: "fundamentals-07",
        question: "Quel outil est utilisé pour déplacer un objet dans la scène ?",
        options: ["Move Tool", "Rotate Tool", "Scale Tool", "Paint Tool"],
        correctAnswer: 0,
        explanation: "Le Move Tool (raccourci W) permet de déplacer les objets.",
        category: "fundamentals",
        level: "user"
    },
    {
        id: "fundamentals-08",
        question: "Que représente un Prefab dans Unity ?",
        options: [
            "Un modèle réutilisable d’objet",
            "Une texture d’arrière-plan",
            "Un script C#",
            "Un raccourci clavier"
        ],
        correctAnswer: 0,
        explanation: "Un Prefab est un modèle d'objet pouvant être réutilisé dans plusieurs scènes.",
        category: "fundamentals",
        level: "user"
    },
    {
        id: "fundamentals-09",
        question: "Que fait le bouton Play dans l’éditeur Unity ?",
        options: [
            "Lance le jeu dans l’éditeur",
            "Crée un nouveau projet",
            "Ferme la scène",
            "Ajoute un GameObject"
        ],
        correctAnswer: 0,
        explanation: "Le bouton Play permet de tester le jeu en mode éditeur.",
        category: "fundamentals",
        level: "user"
    },
    {
        id: "fundamentals-10",
        question: "Quel format de fichier représente une scène Unity ?",
        options: [".unity", ".cs", ".scene", ".asset"],
        correctAnswer: 0,
        explanation: "Les scènes sont des fichiers .unity.",
        category: "fundamentals",
        level: "user"
    },
    {
        id: "fundamentals-11",
        question: "Comment sauvegarder la scène courante dans Unity ?",
        options: [
            "File > Save Scene",
            "Edit > Save All",
            "Assets > Save Assets",
            "GameObject > Save Scene"
        ],
        correctAnswer: 0,
        explanation: "On utilise File > Save Scene pour enregistrer la scène ouverte.",
        category: "fundamentals",
        level: "user"
    },
    {
        id: "fundamentals-12",
        question: "Comment renommer un GameObject dans la Hierarchy ?",
        options: [
            "Double-clic sur son nom",
            "Bouton droit > Rename",
            "Via l’Inspector",
            "Toutes ces réponses"
        ],
        correctAnswer: 3,
        explanation: "On peut renommer un objet via double-clic, clic droit ou dans l’Inspector.",
        category: "fundamentals",
        level: "user"
    },
    {
        id: "fundamentals-13",
        question: "Quel composant rend visible un objet 3D à l’écran ?",
        options: ["Collider", "MeshRenderer", "Camera", "Light"],
        correctAnswer: 1,
        explanation: "MeshRenderer affiche l'objet à l'écran.",
        category: "fundamentals",
        level: "user"
    },
    {
        id: "fundamentals-14",
        question: "Quel panneau permet d’ouvrir et d’explorer les dossiers du projet Unity ?",
        options: ["Inspector", "Project", "Hierarchy", "Console"],
        correctAnswer: 1,
        explanation: "Le Project browser permet de naviguer dans tous les dossiers/assets du projet.",
        category: "fundamentals",
        level: "user"
    },
    {
        id: "fundamentals-15",
        question: "Quelle action permet d’ajouter un composant à un GameObject ?",
        options: [
            "Sélectionner l’objet puis Add Component dans l’Inspector",
            "Glisser-déposer dans la Hierarchy",
            "File > Add New Component",
            "None"
        ],
        correctAnswer: 0,
        explanation: "Il faut sélectionner le GameObject puis cliquer sur Add Component dans l’Inspector.",
        category: "fundamentals",
        level: "user"
    },
    {
        id: "fundamentals-16",
        question: "Quel type de fichier contient les scripts C# dans Unity ?",
        options: [".shader", ".prefab", ".cs", ".unity"],
        correctAnswer: 2,
        explanation: "Les scripts sont des fichiers .cs.",
        category: "fundamentals",
        level: "user"
    },
    {
        id: "fundamentals-17",
        question: "Quel est le rôle du bouton 'Apply' sur un Prefab modifié ?",
        options: [
            "Appliquer les modifications à toutes les instances du Prefab",
            "Réinitialiser le Prefab",
            "Créer une copie du Prefab",
            "Ajouter un composant"
        ],
        correctAnswer: 0,
        explanation: "Apply pousse les changements de l’instance vers le Prefab original.",
        category: "fundamentals",
        level: "user"
    },
    {
        id: "fundamentals-18",
        question: "Quelle est la différence entre Scene View et Game View ?",
        options: [
            "Scene View pour l’édition, Game View pour le rendu du jeu",
            "Aucune",
            "Game View est pour l’audio",
            "Scene View affiche la console"
        ],
        correctAnswer: 0,
        explanation: "Scene View permet de manipuler la scène, Game View montre le rendu réel.",
        category: "fundamentals",
        level: "user"
    },
    {
        id: "fundamentals-19",
        question: "Quelle propriété permet de rendre un objet invisible dans la scène sans le supprimer ?",
        options: [
            "Active (checkbox dans l’Inspector)",
            "Collider",
            "Material",
            "Parent"
        ],
        correctAnswer: 0,
        explanation: "On peut désactiver l’objet (checkbox Inspector) pour le rendre invisible/inférieur.",
        category: "fundamentals",
        level: "user"
    },
    {
        id: "fundamentals-20",
        question: "Comment accéder rapidement à la documentation officielle Unity pour un composant ou une classe ?",
        options: [
            "Clic droit sur le composant > 'Help' ou 'Documentation'",
            "Chercher sur Google uniquement",
            "Aucune documentation disponible",
            "Envoyer un mail à Unity"
        ],
        correctAnswer: 0,
        explanation: "Clic droit > 'Help' ou 'Documentation' ouvre la doc officielle pour le composant.",
        category: "fundamentals",
        level: "user"
    },
    {
        id: "fundamentals-21",
        question: "Quelle différence fondamentale existe entre un GameObject désactivé et un GameObject actif mais sans MeshRenderer ?",
        options: [
            "Un désactivé ne reçoit plus aucun appel Update ni affichage",
            "Aucune, c'est juste visuel",
            "Le désactivé continue de recevoir les events collisions",
            "Le MeshRenderer détermine si l’objet peut être déplacé"
        ],
        correctAnswer: 0,
        explanation: "Un GameObject désactivé n'existe plus pour Unity (plus d'Update, de collision, etc.), alors qu’un objet actif sans MeshRenderer reste actif mais invisible.",
        category: "fundamentals",
        level: "pro"
    },
    {
        id: "fundamentals-22",
        question: "Quel panneau permet de filtrer les assets par type (Prefab, Material, Script…) dans Unity ?",
        options: [
            "Project",
            "Hierarchy",
            "Inspector",
            "Console"
        ],
        correctAnswer: 0,
        explanation: "Le Project browser possède une barre de filtre (icônes) pour n’afficher que certains types d’assets.",
        category: "fundamentals",
        level: "pro"
    },
    {
        id: "fundamentals-23",
        question: "Comment créer une instance d’un Prefab dans la scène à partir du Project ?",
        options: [
            "Glisser-déposer le Prefab depuis le Project vers la scène ou la Hierarchy",
            "Double-clic sur le Prefab",
            "File > New Instance",
            "Clic droit > Instantiate"
        ],
        correctAnswer: 0,
        explanation: "Le drag & drop du Prefab dans la Hierarchy ou la Scene crée une instance.",
        category: "fundamentals",
        level: "pro"
    },
    {
        id: "fundamentals-24",
        question: "Qu’est-ce qu’un 'Child' dans la hiérarchie Unity ?",
        options: [
            "Un objet parent",
            "Un dossier spécial",
            "Un GameObject dépendant d’un autre (parent/enfant)",
            "Une copie cachée"
        ],
        correctAnswer: 2,
        explanation: "Un 'Child' est un GameObject enfant qui suit la position, rotation et échelle de son parent.",
        category: "fundamentals",
        level: "pro"
    },
    {
        id: "fundamentals-25",
        question: "Quel raccourci permet d’activer/désactiver l’affichage du Gizmo dans la Scene View ?",
        options: [
            "Bouton 'Gizmos' en haut de la Scene View",
            "Ctrl + G",
            "Shift + G",
            "Clic droit sur la Hierarchy"
        ],
        correctAnswer: 0,
        explanation: "Il faut cliquer sur le bouton 'Gizmos' en haut à droite de la Scene View.",
        category: "fundamentals",
        level: "pro"
    },
    {
        id: "fundamentals-26",
        question: "Quand tu modifies une instance de Prefab dans la scène, quelle est la conséquence si tu ne cliques PAS sur 'Apply' ?",
        options: [
            "Seule l’instance en scène garde les modifications",
            "Toutes les instances sont modifiées",
            "Le Prefab original est écrasé",
            "Unity empêche d’enregistrer"
        ],
        correctAnswer: 0,
        explanation: "Les changements restent locaux à cette instance, ils ne sont pas propagés au Prefab source.",
        category: "fundamentals",
        level: "pro"
    },
    {
        id: "fundamentals-27",
        question: "Quel format d’image N’EST PAS importable par défaut dans Unity ?",
        options: [
            ".psd",
            ".png",
            ".gif",
            ".tiff"
        ],
        correctAnswer: 2,
        explanation: "Le format GIF n’est pas pris en charge nativement pour les textures.",
        category: "fundamentals",
        level: "pro"
    },
    {
        id: "fundamentals-28",
        question: "Comment lier un objet à un autre pour qu’il suive ses mouvements automatiquement dans la scène ?",
        options: [
            "Le placer en 'Child' (enfant) dans la Hierarchy",
            "Ajouter le même script aux deux",
            "Utiliser uniquement la physique",
            "Changer le tag"
        ],
        correctAnswer: 0,
        explanation: "Un enfant suit automatiquement son parent pour les mouvements/transformations.",
        category: "fundamentals",
        level: "pro"
    },
    {
        id: "fundamentals-29",
        question: "Que signifie le point d’exclamation devant un GameObject dans la Hierarchy ?",
        options: [
            "L’objet a des composants manquants ou des erreurs",
            "L’objet est désactivé",
            "L’objet est verrouillé",
            "L’objet est caché par un filtre"
        ],
        correctAnswer: 0,
        explanation: "Le point d’exclamation indique qu’il manque un composant ou qu’il y a une erreur sur ce GameObject.",
        category: "fundamentals",
        level: "pro"
    },
    {
        id: "fundamentals-30",
        question: "Que fait le bouton 'Prefab Overrides' visible sur une instance modifiée d’un Prefab ?",
        options: [
            "Affiche les différences entre l’instance et le Prefab original",
            "Rien de particulier",
            "Supprime l’instance",
            "Sauvegarde la scène"
        ],
        correctAnswer: 0,
        explanation: "'Prefab Overrides' liste les modifications locales de l’instance par rapport au Prefab source.",
        category: "fundamentals",
        level: "pro"
    },
    {
        id: "fundamentals-31",
        question: "Comment trouver rapidement un asset spécifique dans un gros projet Unity ?",
        options: [
            "Utiliser la barre de recherche du Project browser",
            "Double-clic dans la Hierarchy",
            "Utiliser Edit > Find",
            "Impossible dans Unity"
        ],
        correctAnswer: 0,
        explanation: "La barre de recherche du Project browser filtre les assets par nom, type ou tag.",
        category: "fundamentals",
        level: "pro"
    },
    {
        id: "fundamentals-32",
        question: "Que se passe-t-il si tu déplaces un asset (ex: texture) dans un autre dossier via le Project browser ?",
        options: [
            "Unity met automatiquement à jour tous les liens/références",
            "L’asset est supprimé",
            "Le script ne compile plus",
            "Il faut corriger à la main toutes les références"
        ],
        correctAnswer: 0,
        explanation: "Unity réactualise les GUID/références pour garder les liens, même si l’asset change de dossier.",
        category: "fundamentals",
        level: "pro"
    },
    {
        id: "fundamentals-33",
        question: "Comment visualiser les layers et tags affectés aux objets de la scène ?",
        options: [
            "En haut de l’Inspector quand un GameObject est sélectionné",
            "Dans le menu File > Project Settings",
            "Dans le Project browser",
            "Dans la Console"
        ],
        correctAnswer: 0,
        explanation: "Les propriétés Layer et Tag sont accessibles tout en haut de l’Inspector.",
        category: "fundamentals",
        level: "pro"
    },
    {
        id: "fundamentals-34",
        question: "Comment éditer plusieurs GameObjects en même temps dans Unity ?",
        options: [
            "Sélectionner plusieurs objets dans la Hierarchy et modifier l’Inspector",
            "Impossible, on doit les modifier un par un",
            "Via le menu Window > Edit All",
            "Avec un script seulement"
        ],
        correctAnswer: 0,
        explanation: "En sélectionnant plusieurs objets, les propriétés communes apparaissent et sont modifiables dans l’Inspector.",
        category: "fundamentals",
        level: "pro"
    },
    {
        id: "fundamentals-35",
        question: "Que se passe-t-il si tu supprimes un asset utilisé dans plusieurs scènes du projet ?",
        options: [
            "Toutes les références vers cet asset sont perdues et génèrent des erreurs/missing",
            "Unity corrige automatiquement partout",
            "L’asset est sauvegardé dans les scènes",
            "Le build fonctionne normalement"
        ],
        correctAnswer: 0,
        explanation: "Supprimer un asset le retire partout, toutes les références deviennent 'missing' ou erreurs.",
        category: "fundamentals",
        level: "pro"
    },
    {
        id: "fundamentals-36",
        question: "Quelle action permet de centrer la vue sur un GameObject sélectionné dans la Scene View ?",
        options: [
            "Touche F",
            "Double-clic sur l’objet dans la Hierarchy",
            "Menu View > Focus",
            "Toutes ces réponses"
        ],
        correctAnswer: 3,
        explanation: "F ou double-clic dans la Hierarchy centre la vue sur l’objet sélectionné.",
        category: "fundamentals",
        level: "pro"
    },
    {
        id: "fundamentals-37",
        question: "Pourquoi est-il recommandé d’utiliser des dossiers organisés dans le Project browser ?",
        options: [
            "Pour éviter les conflits de nom et retrouver les assets rapidement",
            "Pour accélérer le build",
            "Pour réduire la taille des assets",
            "Aucune utilité"
        ],
        correctAnswer: 0,
        explanation: "Une structure claire facilite la maintenance et l’évolution du projet.",
        category: "fundamentals",
        level: "pro"
    },
    {
        id: "fundamentals-38",
        question: "Quel est le but du panneau Console dans Unity ?",
        options: [
            "Afficher logs, erreurs et avertissements lors du play ou du build",
            "Visualiser la hiérarchie",
            "Gérer les prefabs",
            "Ajouter des assets"
        ],
        correctAnswer: 0,
        explanation: "La Console affiche tout le flux de logs, erreurs, warnings du projet.",
        category: "fundamentals",
        level: "pro"
    },
    {
        id: "fundamentals-39",
        question: "Comment activer/désactiver rapidement la visibilité d’un objet dans la Scene View sans l’effacer ?",
        options: [
            "Cliquer l’icône œil dans la Hierarchy (Unity 2020+)",
            "Supprimer l’objet",
            "Changer son tag",
            "Via la Console"
        ],
        correctAnswer: 0,
        explanation: "Depuis Unity 2020+, l’icône œil permet de masquer l’objet dans la Scene View uniquement.",
        category: "fundamentals",
        level: "pro"
    },
    {
        id: "fundamentals-40",
        question: "Pourquoi sauvegarder régulièrement le projet dans Unity (pas seulement la scène) ?",
        options: [
            "Pour ne pas perdre les changements d’assets, paramètres, préférences d’éditeur",
            "Ce n’est pas utile",
            "Unity sauvegarde tout automatiquement en temps réel",
            "Pour améliorer les performances"
        ],
        correctAnswer: 0,
        explanation: "Seule la sauvegarde (File > Save Project) garantit que tout est écrit sur disque, pas juste la scène.",
        category: "fundamentals",
        level: "pro"
    },
    {
        id: "fundamentals-41",
        question: "Quel impact a le fait de modifier un prefab en dehors de la scène (dans le Project) versus sur une instance déjà placée en scène ?",
        options: [
            "La modification du prefab Project s'applique à toutes les instances non modifiées, l’instance modifiée garde ses overrides",
            "Toutes les instances sont écrasées",
            "Le prefab Project ne peut pas être modifié sans instance",
            "Unity bloque la modification"
        ],
        correctAnswer: 0,
        explanation: "Modifier le prefab Project s'applique à toutes les instances sauf celles qui ont des overrides locaux.",
        category: "fundamentals",
        level: "expert"
    },
    {
        id: "fundamentals-42",
        question: "Pourquoi utiliser les ScriptableObjects plutôt que des singletons MonoBehaviour pour les données globales ?",
        options: [
            "Pour gérer la persistance de données entre scènes, éviter le couplage hiérarchique et faciliter l’édition/partage d’assets",
            "Parce qu’ils sont plus rapides",
            "Pour stocker uniquement des assets graphiques",
            "Parce qu’ils se sauvegardent dans la Console"
        ],
        correctAnswer: 0,
        explanation: "Les ScriptableObjects permettent un découplage total des données et facilitent le partage, la sauvegarde, la modularité.",
        category: "fundamentals",
        level: "expert"
    },
    {
        id: "fundamentals-43",
        question: "Dans un gros projet Unity, pourquoi vaut-il mieux éviter de multiplier les scripts Update() vides ou inutiles sur beaucoup de GameObjects ?",
        options: [
            "Chaque Update() vide consomme du CPU à chaque frame, donc baisse les perfs",
            "Unity optimise automatiquement si le script est vide",
            "Ça accélère le chargement des scènes",
            "Ça ne change rien"
        ],
        correctAnswer: 0,
        explanation: "Même vide, chaque méthode Update() est appelée à chaque frame : ça fait un coût CPU cumulatif.",
        category: "fundamentals",
        level: "expert"
    },
    {
        id: "fundamentals-44",
        question: "Quelle précaution faut-il prendre avec les références d’assets (textures, meshes, materials) dans un ScriptableObject ?",
        options: [
            "Ne jamais référencer d’objets de scène, seulement des assets du Project",
            "Tout peut être référencé sans problème",
            "Référencer des objets de scène ne pose aucun risque",
            "Il faut toujours dupliquer les assets"
        ],
        correctAnswer: 0,
        explanation: "Les ScriptableObjects ne doivent référencer que des assets du Project. Les objets de scène sont perdus à la serialization.",
        category: "fundamentals",
        level: "expert"
    },
    {
        id: "fundamentals-45",
        question: "Que permet l’utilisation du LayerMask dans la physique Unity ?",
        options: [
            "Filtrer les interactions physiques, collisions, ou raycasts entre groupes d’objets",
            "Changer la couleur d’un objet",
            "Augmenter la précision du Physics Engine",
            "Optimiser la taille des textures"
        ],
        correctAnswer: 0,
        explanation: "Le LayerMask permet de filtrer très finement ce qui doit interagir ou non, pour la physique, les Raycast, etc.",
        category: "fundamentals",
        level: "expert"
    },
    {
        id: "fundamentals-46",
        question: "Quel risque existe si tu relies un événement static C# à des méthodes d’objets détruits dans Unity ?",
        options: [
            "Fuite mémoire et potentielle NullReferenceException si l’objet cible n’existe plus",
            "Rien, Unity gère automatiquement",
            "Unity empêche ce genre de liaison",
            "L’événement est relancé automatiquement"
        ],
        correctAnswer: 0,
        explanation: "Les static events ne sont pas nettoyés automatiquement par Unity : risque de fuite mémoire ou d’appel de références null.",
        category: "fundamentals",
        level: "expert"
    },
    {
        id: "fundamentals-47",
        question: "Pourquoi l’usage intensif de FindObjectOfType ou GameObject.Find en Update est-il toxique pour les perfs ?",
        options: [
            "Parce que ces fonctions font un scan complet de la scène à chaque appel",
            "Elles sont asynchrones",
            "Unity optimise en cache",
            "Elles fonctionnent uniquement sur les prefabs"
        ],
        correctAnswer: 0,
        explanation: "FindObjectOfType/GameObject.Find font un parcours exhaustif de tous les objets : coût exponentiel sur grosses scènes.",
        category: "fundamentals",
        level: "expert"
    },
    {
        id: "fundamentals-48",
        question: "Quelle solution utiliser pour stocker des configurations partagées entre plusieurs builds ou équipes Unity ?",
        options: [
            "Un ScriptableObject de configuration dans un dossier commun (versionné)",
            "Un PlayerPrefs",
            "Un MonoBehaviour sur une scène dédiée",
            "Un fichier texte à la racine"
        ],
        correctAnswer: 0,
        explanation: "Les ScriptableObjects sont versionnables, partageables, et permettent la configuration multi-builds.",
        category: "fundamentals",
        level: "expert"
    },
    {
        id: "fundamentals-49",
        question: "Comment garantir la compatibilité d’un projet Unity entre plusieurs versions majeures (ex : 2020 et 2022) ?",
        options: [
            "Eviter les packages expérimentaux, faire des backups, lire les notes de version, ne jamais ouvrir le projet dans la nouvelle version sans backup",
            "C’est garanti par Unity",
            "Toujours forcer la dernière version",
            "Juste sauvegarder la scène"
        ],
        correctAnswer: 0,
        explanation: "La compatibilité n’est pas garantie : il faut prendre des précautions, éviter l’upgrade auto, tester sur copie, etc.",
        category: "fundamentals",
        level: "expert"
    },
    {
        id: "fundamentals-50",
        question: "Quel mécanisme Unity permet de garder des objets persistants lors des changements de scène sans passer par le système de prefab ?",
        options: [
            "DontDestroyOnLoad",
            "PlayerPrefs",
            "SceneManager.LoadSceneAdditive",
            "ScriptableObject"
        ],
        correctAnswer: 0,
        explanation: "DontDestroyOnLoad garde le GameObject en mémoire d’une scène à l’autre.",
        category: "fundamentals",
        level: "expert"
    },
    {
        id: "fundamentals-51",
        question: "Comment Unity repère-t-il un asset déplacé ou renommé dans le Project sans perdre les liens ?",
        options: [
            "Il utilise un GUID unique stocké dans le .meta du fichier",
            "Il scanne les noms à chaque build",
            "Il utilise le chemin relatif",
            "Il ne peut pas, il faut re-linker à la main"
        ],
        correctAnswer: 0,
        explanation: "Chaque asset possède un GUID unique dans le .meta, ce qui permet de garder les liens même en cas de renommage/déplacement.",
        category: "fundamentals",
        level: "expert"
    },
    {
        id: "fundamentals-52",
        question: "Pourquoi faut-il préférer l’utilisation de références faibles (weak references) ou de pattern d’abonnement/désabonnement pour les events dans de très gros projets Unity ?",
        options: [
            "Pour éviter les memory leaks liés aux listeners qui ne se désabonnent pas",
            "Pour accélérer l’éditeur",
            "Pour permettre le garbage collector de supprimer les prefabs",
            "Aucune utilité"
        ],
        correctAnswer: 0,
        explanation: "Sans désabonnement, les events gardent les objets en mémoire, ce qui pose des soucis de fuite mémoire.",
        category: "fundamentals",
        level: "expert"
    },
    {
        id: "fundamentals-53",
        question: "Dans Unity, comment s’assurer qu’un asset de configuration est unique et accessible dans tout le projet ?",
        options: [
            "Utiliser un ScriptableObject singleton, stocké dans Resources ou via un asset path connu",
            "Créer un prefab dédié",
            "Le placer dans PlayerPrefs",
            "Aucune solution possible"
        ],
        correctAnswer: 0,
        explanation: "Un ScriptableObject singleton accessible par Resources ou AssetDatabase garantit l’unicité.",
        category: "fundamentals",
        level: "expert"
    },
    {
        id: "fundamentals-54",
        question: "Qu’est-ce qu’un GUID dans le contexte des assets Unity ?",
        options: [
            "Un identifiant unique généré pour chaque asset pour garder la liaison même après déplacement ou renommage",
            "Un format de texture compressé",
            "Un système de navigation dans la scène",
            "Un tag de prefab"
        ],
        correctAnswer: 0,
        explanation: "Le GUID (stocké dans .meta) sert de clé unique pour tous les assets Unity.",
        category: "fundamentals",
        level: "expert"
    },
    {
        id: "fundamentals-55",
        question: "Quelle commande/système utiliser pour vérifier qu’aucun asset du projet n’est orphelin ou inutilisé (sans lien dans les scènes/prefabs) ?",
        options: [
            "Utiliser un plugin d’analyse (Asset Hunter, Project Auditor, etc.)",
            "Vérifier à la main dans la Console",
            "Supprimer tous les dossiers et relancer Unity",
            "Il n’existe aucun moyen"
        ],
        correctAnswer: 0,
        explanation: "Des outils existent pour scanner et signaler les assets orphelins/non utilisés.",
        category: "fundamentals",
        level: "expert"
    },
    {
        id: "fundamentals-56",
        question: "Quel piège concerne la suppression d’un GameObject parent contenant plusieurs enfants avec des scripts dépendants entre eux ?",
        options: [
            "Les enfants et tous leurs scripts sont détruits : attention aux références null dans d’autres objets",
            "Seul le parent est supprimé, les enfants restent",
            "Les scripts enfants sont désactivés mais pas détruits",
            "Rien ne se passe"
        ],
        correctAnswer: 0,
        explanation: "La destruction du parent entraîne la destruction récursive des enfants, ce qui peut casser des systèmes dépendants.",
        category: "fundamentals",
        level: "expert"
    },
    {
        id: "fundamentals-57",
        question: "Pourquoi versionner les fichiers .meta est-il obligatoire dans un projet Unity collaboratif (Git, SVN, etc.) ?",
        options: [
            "Pour garder l’intégrité des GUIDs et la cohérence des liens d’assets entre tous les membres de l’équipe",
            "Parce qu’ils contiennent le code source",
            "Pour sauvegarder plus vite",
            "Aucune importance, Unity les régénère toujours"
        ],
        correctAnswer: 0,
        explanation: "Les .meta sont critiques pour la gestion de liens/assets entre tous les membres. Sans eux, conflits et pertes de références garanties.",
        category: "fundamentals",
        level: "expert"
    },
    {
        id: "fundamentals-58",
        question: "Comment restaurer un asset supprimé par erreur dans un projet Unity versionné ?",
        options: [
            "En récupérant le fichier (et .meta) via le système de version (ex: Git, SVN)",
            "Impossible, c’est perdu",
            "Re-télécharger Unity",
            "Demander au support Unity"
        ],
        correctAnswer: 0,
        explanation: "Git ou autre VCS permet de restaurer tout fichier (asset ou meta) effacé.",
        category: "fundamentals",
        level: "expert"
    },
    {
        id: "fundamentals-59",
        question: "Pour quels usages *PlayerPrefs* ne doit-il JAMAIS servir dans un projet pro ?",
        options: [
            "Stocker des données critiques, sauvegardes de jeu, ou de gros volumes (uniquement pour options simples, scores…)",
            "Stocker le volume sonore",
            "Enregistrer le score local",
            "Mémoriser la résolution écran"
        ],
        correctAnswer: 0,
        explanation: "PlayerPrefs ne doit servir que pour des préférences légères et locales, jamais de la sauvegarde critique (ni multi-user, ni sécurisé).",
        category: "fundamentals",
        level: "expert"
    },
    {
        id: "fundamentals-60",
        question: "Quel est l’intérêt d’organiser les assets par features plutôt que par type dans un gros projet Unity ?",
        options: [
            "Faciliter la maintenance, les merges et la navigation pour de grosses équipes",
            "Réduire la taille du build",
            "Accélérer la compilation",
            "Aucun : c’est pareil"
        ],
        correctAnswer: 0,
        explanation: "Organiser par features (fonctionnalité) rend le projet scalable et facilite le travail en équipe.",
        category: "fundamentals",
        level: "expert"
    },
    // UI/UX
    {
        id: 'ui-user-001',
        question: "Quel composant Unity permet d'afficher du texte en UI ?",
        options: ["TextMeshPro", "Rigidbody", "MeshRenderer", "CanvasGroup"],
        correctAnswer: 0,
        explanation: "TextMeshPro est la solution recommandée pour afficher du texte dans l'UI Unity.",
        category: "UI/UX",
        level: "user",
    },
    {
        id: 'ui-pro-001',
        question: "Quelle méthode permet d'adapter l'UI à différentes résolutions d'écran ?",
        options: [
            "Utiliser des Canvas Scaler et des anchors",
            "Utiliser uniquement des images en 4K",
            "Forcer la résolution dans les settings",
            "Désactiver l'auto scale"
        ],
        correctAnswer: 0,
        explanation: "Le Canvas Scaler et le système d'anchors permettent une UI responsive.",
        category: "UI/UX",
        level: "pro",
    },
    {
        id: 'ui-expert-001',
        question: "Comment optimiser les performances d'une liste scrollable de centaines d'éléments UI dans Unity ?",
        options: [
            "Utiliser un object pooling pour les items visibles uniquement",
            "Utiliser un ScrollView classique sans optimisation",
            "Augmenter la taille du Canvas",
            "Tout mettre dans un seul GameObject"
        ],
        correctAnswer: 0,
        explanation: "L’object pooling/recyclage des items affichés est la seule solution scalable.",
        category: "UI/UX",
        level: "expert",
    },

    // Animation
    {
        id: 'ui-user-1',
        category: 'UI',
        level: 'user',
        question: "Quel composant Unity est obligatoire pour afficher toute interface utilisateur (UI) ?",
        options: ["Canvas", "Sprite Renderer", "Panel", "EventSystem"],
        correctAnswer: 0,
        explanation: "Le Canvas est la racine de toute UI dans Unity. Aucun élément UI n'est affiché sans Canvas."
    },
    {
        id: 'ui-user-2',
        category: 'UI',
        level: 'user',
        question: "Quel composant permet d'afficher du texte dans l'UI Unity ?",
        options: ["TextMeshProUGUI", "MeshRenderer", "Rigidbody", "EventSystem"],
        correctAnswer: 0,
        explanation: "TextMeshProUGUI est le composant standard pour le texte UI depuis 2019."
    },
    {
        id: 'ui-user-3',
        category: 'UI',
        level: 'user',
        question: "Quel composant Unity est utilisé pour rendre l’UI interactive (boutons, sliders, etc.) ?",
        options: ["EventSystem", "PhysicsRaycaster", "Image", "Light"],
        correctAnswer: 0,
        explanation: "EventSystem gère les interactions utilisateur avec les composants UI interactifs."
    },
    {
        id: 'ui-user-4',
        category: 'UI',
        level: 'user',
        question: "Quel composant Unity permet d’afficher une image dans l’UI ?",
        options: ["Image", "Sprite Renderer", "RawImage", "Button"],
        correctAnswer: 0,
        explanation: "Image affiche des sprites dans l’UI Unity. Sprite Renderer ne fonctionne que sur des objets 2D classiques."
    },
    {
        id: 'ui-user-5',
        category: 'UI',
        level: 'user',
        question: "Comment déplacer un élément UI dans Unity ?",
        options: ["En modifiant son RectTransform", "En modifiant son Transform", "Avec un Rigidbody", "En changeant son Canvas"],
        correctAnswer: 0,
        explanation: "RectTransform contrôle la position et la taille d’un élément UI, pas Transform."
    },
    {
        id: 'ui-user-6',
        category: 'UI',
        level: 'user',
        question: "Quel outil de l’éditeur permet de voir et manipuler la hiérarchie de l’UI ?",
        options: ["Hierarchy", "Project", "Scene", "Inspector"],
        correctAnswer: 0,
        explanation: "La fenêtre Hierarchy montre tous les GameObjects de la scène, y compris ceux de l’UI."
    },
    {
        id: 'ui-user-7',
        category: 'UI',
        level: 'user',
        question: "Quel composant doit obligatoirement être sur le GameObject racine d’une UI ?",
        options: ["Canvas", "Image", "TextMeshPro", "RectTransform"],
        correctAnswer: 0,
        explanation: "Sans Canvas, les éléments UI ne sont pas visibles."
    },
    {
        id: 'ui-user-8',
        category: 'UI',
        level: 'user',
        question: "Quelle propriété du Canvas permet de rendre l’UI visible dans le jeu mais pas dans la scène ?",
        options: ["Render Mode", "Sorting Layer", "Order in Layer", "Scale"],
        correctAnswer: 0,
        explanation: "Render Mode gère la façon dont l’UI est affichée (Screen Space/Camera/World Space)."
    },
    {
        id: 'ui-user-9',
        category: 'UI',
        level: 'user',
        question: "Quel composant est nécessaire pour détecter un clic sur un bouton UI ?",
        options: ["Button", "EventSystem", "Canvas", "InputField"],
        correctAnswer: 1,
        explanation: "L’EventSystem capte les interactions globales sur l’UI."
    },
    {
        id: 'ui-user-10',
        category: 'UI',
        level: 'user',
        question: "Quel est le raccourci pour réinitialiser le RectTransform d’un élément UI dans l’Inspector ?",
        options: ["Clic droit > Reset", "Ctrl+R", "Alt+R", "Il n’y en a pas"],
        correctAnswer: 0,
        explanation: "Clic droit sur RectTransform > Reset remet l’élément à zéro."
    },
    {
        id: 'ui-user-11',
        category: 'UI',
        level: 'user',
        question: "Quel composant permet d’afficher une barre de chargement (progress bar) dans l’UI Unity ?",
        options: ["Slider", "Image", "Scrollbar", "Button"],
        correctAnswer: 0,
        explanation: "Slider est le composant natif pour une barre de progression simple."
    },
    {
        id: 'ui-user-12',
        category: 'UI',
        level: 'user',
        question: "Quel composant UI permet de faire défiler du texte ou des images (scroll) ?",
        options: ["ScrollRect", "Slider", "Button", "CanvasScaler"],
        correctAnswer: 0,
        explanation: "ScrollRect permet le défilement d’un contenu UI."
    },
    {
        id: 'ui-user-13',
        category: 'UI',
        level: 'user',
        question: "Que fait la propriété 'Interactable' d’un bouton UI ?",
        options: ["Active ou désactive les interactions utilisateur", "Change la couleur du bouton", "Active le son", "Fait disparaître le bouton"],
        correctAnswer: 0,
        explanation: "Interactable permet de désactiver/activer le clic utilisateur."
    },
    {
        id: 'ui-user-14',
        category: 'UI',
        level: 'user',
        question: "Quel composant Unity permet à l’utilisateur de saisir du texte dans l’UI ?",
        options: ["InputField", "Text", "Dropdown", "Button"],
        correctAnswer: 0,
        explanation: "InputField permet de rentrer du texte depuis le clavier."
    },
    {
        id: 'ui-user-15',
        category: 'UI',
        level: 'user',
        question: "À quoi sert le Canvas Scaler ?",
        options: ["Adapter la taille de l’UI à la résolution", "Changer la couleur de fond", "Ajuster la transparence", "Rendre l’UI flottante"],
        correctAnswer: 0,
        explanation: "Canvas Scaler ajuste automatiquement l’UI selon la taille d’écran."
    },
    {
        id: 'ui-user-16',
        category: 'UI',
        level: 'user',
        question: "Quel composant UI permet de sélectionner un choix parmi plusieurs dans une liste déroulante ?",
        options: ["Dropdown", "InputField", "Button", "Slider"],
        correctAnswer: 0,
        explanation: "Dropdown (ou TMP_Dropdown) permet une sélection dans une liste déroulante."
    },
    {
        id: 'ui-user-17',
        category: 'UI',
        level: 'user',
        question: "Dans quel GameObject doit-on mettre l’EventSystem ?",
        options: ["N’importe où dans la scène", "Toujours dans le Canvas", "Dans le Camera", "Sur le premier bouton"],
        correctAnswer: 0,
        explanation: "L’EventSystem fonctionne où qu’il soit dans la scène."
    },
    {
        id: 'ui-user-18',
        category: 'UI',
        level: 'user',
        question: "Quel est le rôle du RectTransform par rapport au Transform classique ?",
        options: ["Contrôle position, taille et ancrage d’un élément UI", "Change la texture", "Active la physique", "Change le rendu du Canvas"],
        correctAnswer: 0,
        explanation: "RectTransform est dédié à la gestion spatiale des éléments UI."
    },
    {
        id: 'ui-user-19',
        category: 'UI',
        level: 'user',
        question: "Qu’arrive-t-il si un élément UI n’est pas enfant d’un Canvas ?",
        options: ["Il n’apparaît pas à l’écran", "Il apparaît avec un bug", "Il fonctionne comme un objet 3D", "Il s’anime tout seul"],
        correctAnswer: 0,
        explanation: "Les éléments UI hors Canvas ne sont pas rendus par Unity."
    },
    {
        id: 'ui-user-20',
        category: 'UI',
        level: 'user',
        question: "À quoi sert l’option 'Raycast Target' sur un composant Image/Text ?",
        options: ["Permet à l’élément de recevoir les clics/touch", "Augmente la résolution", "Active l’anti-aliasing", "Définit la transparence"],
        correctAnswer: 0,
        explanation: "'Raycast Target' doit être activé pour qu’un élément capte les événements souris/tactile."
    },
    {
        id: 'ui-pro-1',
        category: 'UI',
        level: 'pro',
        question: "Quel composant permet de disposer automatiquement plusieurs éléments UI en colonne ou en ligne ?",
        options: ["Vertical/Horizontal Layout Group", "RectTransform", "CanvasScaler", "Grid System"],
        correctAnswer: 0,
        explanation: "Vertical et Horizontal Layout Group gèrent la disposition automatique des enfants selon l’axe choisi."
    },
    {
        id: 'ui-pro-2',
        category: 'UI',
        level: 'pro',
        question: "Quel composant permet de créer une grille automatique d’éléments UI (par exemple, pour des inventaires) ?",
        options: ["Grid Layout Group", "Grid System", "ScrollRect", "Canvas"],
        correctAnswer: 0,
        explanation: "Grid Layout Group arrange automatiquement ses enfants en grille."
    },
    {
        id: 'ui-pro-3',
        category: 'UI',
        level: 'pro',
        question: "Comment garantir que votre interface reste lisible et cohérente sur tous types d’écrans et résolutions ?",
        options: [
            "Utiliser le Canvas Scaler en mode Scale With Screen Size",
            "Changer la taille des images à la main",
            "Créer un Canvas par résolution",
            "Utiliser uniquement des ancres fixes"
        ],
        correctAnswer: 0,
        explanation: "Le mode Scale With Screen Size adapte l’UI à tous les ratios d’écran automatiquement."
    },
    {
        id: 'ui-pro-4',
        category: 'UI',
        level: 'pro',
        question: "Quelle option du RectTransform permet de positionner un élément UI de façon relative à son parent (ancrage flexible) ?",
        options: ["Anchor Min/Max", "Pivot", "Offset", "Scale"],
        correctAnswer: 0,
        explanation: "Anchor Min/Max définissent la position et la taille relative par rapport au parent, essentiel pour l’adaptabilité."
    },
    {
        id: 'ui-pro-5',
        category: 'UI',
        level: 'pro',
        question: "Quelle bonne pratique pour les animations UI assure de bonnes performances et un rendu fluide ?",
        options: [
            "Préférer les animations de CanvasGroup/RectTransform",
            "Animer avec des coroutines Update() sur chaque bouton",
            "Animer avec des Rigidbody",
            "Recréer le Canvas à chaque frame"
        ],
        correctAnswer: 0,
        explanation: "L’animation de CanvasGroup (alpha) ou RectTransform (position/scale) est efficace et fluide pour l’UI."
    },
    {
        id: 'ui-pro-6',
        category: 'UI',
        level: 'pro',
        question: "Quel composant permet d’afficher des listes dynamiques d’éléments UI avec scroll vertical ou horizontal ?",
        options: ["ScrollRect", "LayoutElement", "Canvas", "EventSystem"],
        correctAnswer: 0,
        explanation: "ScrollRect permet le défilement de contenu UI dynamique (liste, inventaire, etc.)."
    },
    {
        id: 'ui-pro-7',
        category: 'UI',
        level: 'pro',
        question: "À quoi sert le composant 'Content Size Fitter' dans un layout UI ?",
        options: [
            "Ajuste automatiquement la taille d’un élément selon son contenu",
            "Change la couleur du Canvas",
            "Gère les interactions utilisateurs",
            "Rend l’UI responsive"
        ],
        correctAnswer: 0,
        explanation: "Content Size Fitter ajuste la taille de l’objet UI pour s’adapter à la taille de ses enfants/contenu."
    },
    {
        id: 'ui-pro-8',
        category: 'UI',
        level: 'pro',
        question: "Quelle propriété permet de contrôler l’ordre de superposition des éléments UI sur un même Canvas ?",
        options: ["Order in Hierarchy", "Sorting Order", "Z position", "Sibling Index"],
        correctAnswer: 3,
        explanation: "L’ordre de superposition dépend de l’ordre dans la hiérarchie (Sibling Index) sur un Canvas."
    },
    {
        id: 'ui-pro-9',
        category: 'UI',
        level: 'pro',
        question: "Quel type d’UI Unity est le plus performant pour afficher un très grand nombre d’éléments réutilisés (ex: leaderboard, inventaire) ?",
        options: [
            "UI poolée/recyclée (object pooling)",
            "Créer tous les objets à chaque changement de page",
            "Canvas Overlay unique avec tous les objets",
            "Créer un nouveau Canvas par élément"
        ],
        correctAnswer: 0,
        explanation: "Pooler/recycler les éléments UI (object pooling) évite les instanciations/destructions coûteuses."
    },
    {
        id: 'ui-pro-10',
        category: 'UI',
        level: 'pro',
        question: "Quel composant permet de regrouper plusieurs éléments UI pour appliquer des transformations ou masques globaux ?",
        options: ["RectTransform", "CanvasGroup", "Panel", "Mask"],
        correctAnswer: 1,
        explanation: "CanvasGroup permet de contrôler l’alpha, l’interactivité, et le blocage des raycasts sur tout un groupe."
    },
    {
        id: 'ui-pro-11',
        category: 'UI',
        level: 'pro',
        question: "Quel composant UI permet de cacher/montrer une partie du contenu d’un ScrollRect ?",
        options: ["Mask", "Image", "RectTransform", "Canvas"],
        correctAnswer: 0,
        explanation: "Mask masque tout ce qui dépasse les bords définis sur le ScrollRect (ou tout autre conteneur)."
    },
    {
        id: 'ui-pro-12',
        category: 'UI',
        level: 'pro',
        question: "Comment attacher une action personnalisée à un bouton UI dans l’éditeur Unity ?",
        options: [
            "Glisser un objet et assigner une fonction publique dans l’Inspector du Button",
            "Modifier le script du Canvas",
            "Créer un nouveau Canvas",
            "Changer le Tag du bouton"
        ],
        correctAnswer: 0,
        explanation: "On assigne une fonction publique (void, sans argument ou avec un argument simple) via l’Inspector."
    },
    {
        id: 'ui-pro-13',
        category: 'UI',
        level: 'pro',
        question: "Quel composant UI doit impérativement être unique par Canvas pour garantir le fonctionnement de tous les éléments interactifs ?",
        options: ["EventSystem", "CanvasScaler", "Panel", "TextMeshProUGUI"],
        correctAnswer: 0,
        explanation: "Un seul EventSystem suffit par scène ; il gère tous les événements d’UI."
    },
    {
        id: 'ui-pro-14',
        category: 'UI',
        level: 'pro',
        question: "Quelle est la principale différence entre les modes de rendu 'Screen Space - Overlay' et 'Screen Space - Camera' du Canvas ?",
        options: [
            "Overlay ne nécessite pas de caméra et rend l’UI toujours au-dessus, Camera peut gérer le depth/layer avec la caméra",
            "Camera est plus rapide",
            "Overlay permet l’UI 3D",
            "Camera empêche l’UI de s’afficher"
        ],
        correctAnswer: 0,
        explanation: "Screen Space Overlay affiche l’UI au-dessus de tout, sans caméra dédiée. Camera permet de mixer l’UI et les layers caméra."
    },
    {
        id: 'ui-pro-15',
        category: 'UI',
        level: 'pro',
        question: "Comment créer une animation de transition fluide entre deux menus UI dans Unity ?",
        options: [
            "Utiliser Animator/Animation sur le CanvasGroup ou le RectTransform des menus",
            "Changer la position X/Y d’un coup dans Update",
            "Désactiver/Activer directement le GameObject",
            "Changer le Z-order"
        ],
        correctAnswer: 0,
        explanation: "Animator permet des transitions fluides (fade, move, scale) sur des CanvasGroup/RectTransform."
    },
    {
        id: 'ui-pro-16',
        category: 'UI',
        level: 'pro',
        question: "Quel composant UI permet de contrôler la transparence d’un groupe d’éléments sans modifier chacun individuellement ?",
        options: ["CanvasGroup", "Mask", "Image", "Panel"],
        correctAnswer: 0,
        explanation: "CanvasGroup permet de changer l’alpha (transparence) de tous ses enfants d’un coup."
    },
    {
        id: 'ui-pro-17',
        category: 'UI',
        level: 'pro',
        question: "Quelle méthode pour lier dynamiquement un événement bouton à une fonction C# dans un script ?",
        options: [
            "button.onClick.AddListener(MaFonction);",
            "button.OnPointerClick = MaFonction;",
            "button.setCallback(MaFonction);",
            "button.addClickEvent(MaFonction);"
        ],
        correctAnswer: 0,
        explanation: "La bonne méthode est onClick.AddListener pour enregistrer un callback sur le bouton."
    },
    {
        id: 'ui-pro-18',
        category: 'UI',
        level: 'pro',
        question: "Quel est l’impact de créer plusieurs Canvas dans une même scène (par exemple, un par popup) ?",
        options: [
            "Chaque Canvas est rendu séparément, donc plus coûteux en draw calls",
            "Cela réduit les performances du CPU",
            "Cela accélère le rendu de l’UI",
            "Aucun impact"
        ],
        correctAnswer: 0,
        explanation: "Chaque Canvas déclenche son propre batch de rendu, donc attention à ne pas multiplier inutilement les Canvas."
    },
    {
        id: 'ui-pro-19',
        category: 'UI',
        level: 'pro',
        question: "Comment optimiser l’UI sur mobile pour éviter le drop de FPS dû au Canvas ?",
        options: [
            "Limiter les Canvas, éviter les effets de transparence et batcher les éléments statiques",
            "Créer un Canvas par bouton",
            "Utiliser des images très grandes en PNG",
            "Animer le Canvas entier"
        ],
        correctAnswer: 0,
        explanation: "Moins de Canvas, moins de transparence, et batching manuel améliorent la perf sur mobile."
    },
    {
        id: 'ui-pro-20',
        category: 'UI',
        level: 'pro',
        question: "Quelle structure de projet UI facilite la localisation (traduction) ?",
        options: [
            "Séparer les textes dans des fichiers/dictionnaires externes et utiliser TextMeshProUGUI dynamiquement",
            "Ecrire tous les textes en dur dans les composants",
            "Créer un Canvas par langue",
            "Utiliser uniquement des images"
        ],
        correctAnswer: 0,
        explanation: "Séparer le contenu des textes dans des fichiers/dictionnaires, puis lier dynamiquement dans le code, rend la localisation rapide et scalable."
    },
    {
        id: 'ui-expert-1',
        category: 'UI',
        level: 'expert',
        question: "Comment réduire au maximum les draw calls générés par une interface Unity complexe ?",
        options: [
            "Regrouper les éléments statiques dans un même Canvas et éviter les changements de propriétés (ex: alpha, sorting)",
            "Utiliser un Canvas par élément",
            "Activer/désactiver constamment l’UI",
            "Utiliser des images PNG uniquement"
        ],
        correctAnswer: 0,
        explanation: "Un seul Canvas pour les statiques, et peu de changements de propriétés, minimise les batches."
    },
    {
        id: 'ui-expert-2',
        category: 'UI',
        level: 'expert',
        question: "Quelle est la conséquence d’un changement fréquent de la hiérarchie UI (ex: ajouter/retirer des enfants dynamiquement) sur la perf ?",
        options: [
            "Cela force un recalcul complet du layout et du mesh, donc un pic CPU",
            "Aucune, c’est instantané",
            "Seul l’élément modifié est recalculé",
            "Impacte seulement la RAM"
        ],
        correctAnswer: 0,
        explanation: "Toute modif hiérarchie UI force un relayout du Canvas = pic CPU, surtout sur mobile."
    },
    {
        id: 'ui-expert-3',
        category: 'UI',
        level: 'expert',
        question: "Quel bug courant peut survenir en utilisant des masques (Mask, RectMask2D) imbriqués sur plusieurs niveaux de Canvas ?",
        options: [
            "Des éléments UI peuvent devenir invisibles ou mal masqués selon l’ordre de composition",
            "Le build ne compile plus",
            "Les événements ne fonctionnent plus sur tous les boutons",
            "Les polices sont corrompues"
        ],
        correctAnswer: 0,
        explanation: "Masques imbriqués = bugs visuels fréquents si overlap/multiples Canvas/CanvasGroup."
    },
    {
        id: 'ui-expert-4',
        category: 'UI',
        level: 'expert',
        question: "Comment profiler précisément un problème de lag UI sur mobile (ex: freeze lors de l’ouverture d’un menu) ?",
        options: [
            "Utiliser le Profiler (Deep Profile), observer le Layout/Canvas.Rebuild et le batching dans Timeline",
            "Augmenter la RAM",
            "Changer la couleur du Canvas",
            "Redémarrer l’éditeur"
        ],
        correctAnswer: 0,
        explanation: "Le Profiler permet de repérer les bottlenecks, en particulier Canvas.Rebuild/Layout."
    },
    {
        id: 'ui-expert-5',
        category: 'UI',
        level: 'expert',
        question: "Quelle méthode permet d’optimiser des listes UI dynamiques (ex: chat, leaderboard) avec plusieurs milliers d’éléments ?",
        options: [
            "Object Pooling des éléments UI et Virtualisation (afficher que le visible)",
            "Créer tous les objets à l’avance",
            "Changer de Canvas pour chaque page",
            "Augmenter la taille du Canvas"
        ],
        correctAnswer: 0,
        explanation: "Object Pooling et Virtualisation évitent d’avoir 1000+ objets UI actifs, énorme gain perf."
    },
    {
        id: 'ui-expert-6',
        category: 'UI',
        level: 'expert',
        question: "Comment rendre l’UI responsive pour les écrans ultra-wide, pliables ou formats non standards ?",
        options: [
            "Utiliser des anchors et layouts flexibles + tester sur plusieurs ratios d’aspect dans le GameView",
            "Fixer la résolution à 16:9",
            "Créer un Canvas par device",
            "Définir la taille en pixels uniquement"
        ],
        correctAnswer: 0,
        explanation: "Seul un layout flexible (anchor/auto layout) assure la compatibilité sur tous formats."
    },
    {
        id: 'ui-expert-7',
        category: 'UI',
        level: 'expert',
        question: "Quel est l’avantage d’utiliser un système de signal/event centralisé (EventBus) pour l’UI dans un gros projet ?",
        options: [
            "Découpler les composants et éviter le spaghetti code de callbacks entre objets",
            "Ça accélère les animations UI",
            "Obligatoire pour utiliser TextMeshPro",
            "Permet d’animer le Canvas en Update"
        ],
        correctAnswer: 0,
        explanation: "Un EventBus centralisé évite le couplage fort entre scripts et facilite la maintenance."
    },
    {
        id: 'ui-expert-8',
        category: 'UI',
        level: 'expert',
        question: "Quel est le risque d’utiliser intensivement des images UI très grandes ou non packées dans un atlas ?",
        options: [
            "Explosion de la mémoire vidéo et du nombre de draw calls",
            "L’UI devient floue",
            "Impossible de builder pour mobile",
            "Risque de déformation du Canvas"
        ],
        correctAnswer: 0,
        explanation: "Images non packées = draw calls, mémoire, loading. Utiliser Sprite Atlas est essentiel."
    },
    {
        id: 'ui-expert-9',
        category: 'UI',
        level: 'expert',
        question: "Quelle solution adopter pour afficher des notifications/toasts UI sans impacter la perf et la navigation principale ?",
        options: [
            "Utiliser un Canvas dédié, indépendant, et pooler les notifications",
            "Afficher tout dans le Canvas principal",
            "Créer un prefab à chaque notification et le détruire",
            "Forcer un rebuild du layout principal"
        ],
        correctAnswer: 0,
        explanation: "Notifications = Canvas séparé pour éviter les relayouts/rebuilds du menu principal."
    },
    {
        id: 'ui-expert-10',
        category: 'UI',
        level: 'expert',
        question: "Quel bug UI peut apparaître sur certaines plateformes (WebGL, Android) lors d’un changement de langue en runtime ?",
        options: [
            "Le texte n’est pas rafraîchi ou TextMeshPro n’update pas ses glyphes",
            "Le Canvas disparaît",
            "L’application crash",
            "La police devient blanche"
        ],
        correctAnswer: 0,
        explanation: "Certaines plateformes gèrent mal le changement de police/texte en live, forcer un rebuild."
    },
    {
        id: 'ui-expert-11',
        category: 'UI',
        level: 'expert',
        question: "Comment structurer un projet UI pour une localisation ultra-rapide en production ?",
        options: [
            "Séparer tous les textes dans des assets/localisation tables et utiliser des IDs dynamiques",
            "Avoir un script par langue",
            "Stocker tous les textes dans un seul script",
            "Utiliser Google Translate intégré"
        ],
        correctAnswer: 0,
        explanation: "Localisation pro = assets externes, update dynamique sans rebuild du projet."
    },
    {
        id: 'ui-expert-12',
        category: 'UI',
        level: 'expert',
        question: "Quel comportement inattendu peut apparaître si tu animes la propriété alpha d’un CanvasGroup tout en animant la transparence des enfants individuellement ?",
        options: [
            "Effet cumulé, alpha final = alpha parent * alpha enfant, donc possible disparition totale",
            "Aucun, c’est indépendant",
            "L’animation du CanvasGroup annule celle des enfants",
            "Les events UI ne sont plus détectés"
        ],
        correctAnswer: 0,
        explanation: "CanvasGroup alpha s’applique multiplicativement sur tous les enfants."
    },
    {
        id: 'ui-expert-13',
        category: 'UI',
        level: 'expert',
        question: "Sur une UI très complexe, pourquoi est-il souvent préférable de faire du batching manuel de l’UI (SetPass batching, Sprite Atlas) ?",
        options: [
            "Réduire au maximum les draw calls, donc la consommation CPU/GPU et la chauffe sur mobile",
            "Permettre l’UI 3D",
            "Simplifier le design",
            "Activer le HDR"
        ],
        correctAnswer: 0,
        explanation: "Batcher manuellement = moins de passes de rendu, perf boost énorme sur device limité."
    },
    {
        id: 'ui-expert-14',
        category: 'UI',
        level: 'expert',
        question: "Comment gérer les UI dynamiques instanciées à runtime (popups, menus contextuels) tout en gardant de bonnes perfs ?",
        options: [
            "Pooler les prefabs UI, ne pas détruire/recréer à chaque fois",
            "Instancier/détruire à chaque ouverture",
            "Mettre chaque popup dans un Canvas séparé avec WorldSpace",
            "Tout garder actif en permanence"
        ],
        correctAnswer: 0,
        explanation: "Pooling évite la recréation/déstruction, limitant les coûts de CPU et le GC spikes."
    },
    {
        id: 'ui-expert-15',
        category: 'UI',
        level: 'expert',
        question: "Quel piège classique du RectMask2D peut faire disparaître ton UI sur certains devices ?",
        options: [
            "RectMask2D ignore les overflow/clipping sur des layouts imbriqués ou nested scroll",
            "Il bloque les events UI",
            "Il rend tout transparent",
            "Il augmente le Z-order"
        ],
        correctAnswer: 0,
        explanation: "Bugs de RectMask2D sur scroll imbriqué ou sur layouts non carrés."
    },
    {
        id: 'ui-expert-16',
        category: 'UI',
        level: 'expert',
        question: "Pourquoi il est fortement déconseillé d’avoir un script qui appelle continuellement SetActive(true/false) sur des objets UI à chaque frame ?",
        options: [
            "Cela force la reconstruction du layout/Canvas et peut causer des freezes",
            "Aucun risque, c’est safe",
            "Ça améliore les performances",
            "Oblige le garbage collector à agir"
        ],
        correctAnswer: 0,
        explanation: "SetActive = relayout + rebuild. Jamais dans Update, seulement lors des vrais changements d’état."
    },
    {
        id: 'ui-expert-17',
        category: 'UI',
        level: 'expert',
        question: "Quelle approche pour personnaliser le rendu d’un bouton UI (shader, effets spéciaux) sans casser la compatibilité mobile ?",
        options: [
            "Créer un custom shader mobile-friendly et l’appliquer sur l’Image du bouton, tester sur device",
            "Utiliser uniquement le Material Standard",
            "Utiliser ParticleSystem sur le bouton",
            "Toujours tout rendre en Canvas Overlay"
        ],
        correctAnswer: 0,
        explanation: "Custom shader optimisé mobile, assigné à Image, testé sur tous device cibles."
    },
    {
        id: 'ui-expert-18',
        category: 'UI',
        level: 'expert',
        question: "Quel est le risque d’utiliser TextMeshProUGUI avec de très grandes tailles de police dynamiquement sur mobile ?",
        options: [
            "Génère beaucoup de glyphes dans l’atlas, gros pics mémoire, chargement lent",
            "Rend le texte illisible",
            "L’UI clignote",
            "Aucun"
        ],
        correctAnswer: 0,
        explanation: "Gros texte = gros atlas TMP = perf, mémoire, lag, bugs d’affichage."
    },
    {
        id: 'ui-expert-19',
        category: 'UI',
        level: 'expert',
        question: "Quelle méthode permet de rendre un élément UI interactif même s’il est masqué visuellement ?",
        options: [
            "Désactiver le Raycast Target sur l’image, laisser l’objet actif",
            "Passer alpha à zéro",
            "Mettre l’objet hors du Canvas",
            "Supprimer le GameObject"
        ],
        correctAnswer: 0,
        explanation: "Raycast Target = clickable même invisible si laissé actif. Piège UI courant."
    },
    {
        id: 'ui-expert-20',
        category: 'UI',
        level: 'expert',
        question: "Comment documenter efficacement un système UI complexe pour faciliter la maintenance dans une équipe ?",
        options: [
            "Rédiger une doc détaillée (composants, events, flow, pooling) et intégrer des schémas/diagrammes UML ou Figma",
            "Écrire du code uniquement",
            "Ajouter des TODO partout",
            "Faire des captures d’écran"
        ],
        correctAnswer: 0,
        explanation: "Une vraie doc (texte + schéma) = onboarding rapide, bugfix, évolutions facilitées."
    },
    // XR/AR
    {
        id: 'xr-user-1',
        category: 'XR',
        level: 'user',
        question: "Que signifie XR dans l’écosystème Unity ?",
        options: [
            "Extended Reality (inclut AR, VR, MR)",
            "Extra Render",
            "Extreme Rendering",
            "External Resources"
        ],
        correctAnswer: 0,
        explanation: "XR = Extended Reality, terme générique pour AR, VR, MR dans l’univers Unity."
    },
    {
        id: 'xr-user-2',
        category: 'XR',
        level: 'user',
        question: "Quel package Unity faut-il installer pour commencer un projet XR/AR ?",
        options: [
            "XR Plugin Management",
            "Standard Assets",
            "Post Processing",
            "Timeline"
        ],
        correctAnswer: 0,
        explanation: "XR Plugin Management gère les plateformes XR officielles dans Unity."
    },
    {
        id: 'xr-user-3',
        category: 'XR',
        level: 'user',
        question: "Dans Unity, à quoi sert le composant XR Rig ou XROrigin ?",
        options: [
            "Il représente la position et l’orientation du joueur/utilisateur XR dans la scène",
            "Il ajoute de la lumière",
            "Il gère les textures",
            "Il optimise les builds WebGL"
        ],
        correctAnswer: 0,
        explanation: "XR Rig/XROrigin définit la “tête” et les mains dans l’espace XR/AR."
    },
    {
        id: 'xr-user-4',
        category: 'XR',
        level: 'user',
        question: "Quel composant est utilisé pour suivre le mouvement d’un contrôleur ou d’une main en XR ?",
        options: [
            "XR Controller",
            "Rigidbody",
            "Transform uniquement",
            "Mesh Renderer"
        ],
        correctAnswer: 0,
        explanation: "XR Controller (ou Action-Based Controller) permet le suivi précis des mains/contrôleurs XR."
    },
    {
        id: 'xr-user-5',
        category: 'XR',
        level: 'user',
        question: "Quelle plateforme XR/AR n’est PAS supportée nativement par Unity ?",
        options: [
            "Google Cardboard (2024+)",
            "Meta Quest",
            "HoloLens",
            "HTC Vive"
        ],
        correctAnswer: 0,
        explanation: "Google Cardboard n’a plus de support officiel Unity récent."
    },
    {
        id: 'xr-user-6',
        category: 'XR',
        level: 'user',
        question: "Quel outil de l’éditeur Unity permet de simuler une caméra AR directement dans la scène ?",
        options: [
            "AR Simulation (via AR Foundation)",
            "Console",
            "Animator",
            "Build Settings"
        ],
        correctAnswer: 0,
        explanation: "AR Foundation propose l’AR Simulation pour tester les scénarios AR dans l’éditeur."
    },
    {
        id: 'xr-user-7',
        category: 'XR',
        level: 'user',
        question: "Pour un projet AR mobile, quelle permission est nécessaire sur Android/iOS ?",
        options: [
            "Accès à la caméra",
            "Accès Bluetooth",
            "Lecture de fichiers",
            "Accès au microphone"
        ],
        correctAnswer: 0,
        explanation: "La caméra est indispensable pour l’AR mobile (image tracking, plane tracking…)."
    },
    {
        id: 'xr-user-8',
        category: 'XR',
        level: 'user',
        question: "Quelle action doit-on faire pour afficher un objet 3D sur un plan détecté en AR ?",
        options: [
            "Instancier l’objet à la position du plan détecté par le système AR",
            "Utiliser uniquement le Transform",
            "Mettre l’objet en Canvas Overlay",
            "Définir un material transparent"
        ],
        correctAnswer: 0,
        explanation: "On récupère la position du plan détecté pour placer/spawn l’objet 3D."
    },
    {
        id: 'xr-user-9',
        category: 'XR',
        level: 'user',
        question: "Comment activer/désactiver rapidement la fonctionnalité XR dans un projet Unity ?",
        options: [
            "Via le menu Project Settings > XR Plug-in Management",
            "Dans le panneau Console",
            "Dans la hiérarchie",
            "Dans le material de la caméra"
        ],
        correctAnswer: 0,
        explanation: "XR Plug-in Management centralise l’activation XR par plateforme dans Project Settings."
    },
    {
        id: 'xr-user-10',
        category: 'XR',
        level: 'user',
        question: "Quelle librairie est recommandée pour gérer la réalité augmentée multiplateforme dans Unity ?",
        options: [
            "AR Foundation",
            "Shader Graph",
            "TextMeshPro",
            "UI Toolkit"
        ],
        correctAnswer: 0,
        explanation: "AR Foundation fait le pont entre ARKit (iOS), ARCore (Android) et Unity."
    },
    {
        id: 'xr-user-11',
        category: 'XR',
        level: 'user',
        question: "Quel élément est OBLIGATOIRE dans une scène XR pour qu’elle fonctionne ?",
        options: [
            "Camera (avec XR ou AR Camera script)",
            "Directional Light",
            "NavMesh",
            "EventSystem"
        ],
        correctAnswer: 0,
        explanation: "Sans camera XR ou AR Camera, rien ne s’affiche ni ne track."
    },
    {
        id: 'xr-user-12',
        category: 'XR',
        level: 'user',
        question: "Comment l’utilisateur interagit-il avec les objets en VR sur Unity (ex: saisir, déplacer) ?",
        options: [
            "Via les XR Interactors et les événements d’input configurés",
            "Avec un collider uniquement",
            "En changeant la scène",
            "Avec la souris obligatoirement"
        ],
        correctAnswer: 0,
        explanation: "XR Interactor (Direct/Distance) et input map facilitent les interactions."
    },
    {
        id: 'xr-user-13',
        category: 'XR',
        level: 'user',
        question: "Pour la Réalité Augmentée (AR), quelle est la fonction d’un Anchor ?",
        options: [
            "Fixer la position d’un objet virtuel à un point précis dans le monde réel détecté",
            "Changer la couleur d’un objet",
            "Ajouter de l’audio",
            "Afficher un menu"
        ],
        correctAnswer: 0,
        explanation: "Anchor = ancrer la position dans le monde réel (suivi précis)."
    },
    {
        id: 'xr-user-14',
        category: 'XR',
        level: 'user',
        question: "Quelle option Unity permet de déployer sur Meta Quest depuis l’éditeur ?",
        options: [
            "Build Settings > Platform: Android",
            "Platform: WebGL",
            "Platform: Windows",
            "Platform: iOS"
        ],
        correctAnswer: 0,
        explanation: "Meta Quest est basé sur Android, build cible Android."
    },
    {
        id: 'xr-user-15',
        category: 'XR',
        level: 'user',
        question: "À quoi sert le composant AR Plane Manager dans AR Foundation ?",
        options: [
            "Détecter les surfaces planes (sol, table, mur) et générer des mesh de plan",
            "Ajouter un effet audio spatial",
            "Gérer les caméras de sécurité",
            "Optimiser le build"
        ],
        correctAnswer: 0,
        explanation: "AR Plane Manager gère la détection et le suivi des surfaces planes."
    },
    {
        id: 'xr-user-16',
        category: 'XR',
        level: 'user',
        question: "Sur un device XR, comment gérer l’orientation de la caméra pour éviter les problèmes de perspective ?",
        options: [
            "Toujours utiliser la caméra XR avec le script XR Camera ou TrackedPoseDriver",
            "Déplacer la caméra manuellement dans la scène",
            "Utiliser la caméra main sans script XR",
            "Fixer le champ de vision à 60"
        ],
        correctAnswer: 0,
        explanation: "TrackedPoseDriver synchronise la caméra avec le device utilisateur."
    },
    {
        id: 'xr-user-17',
        category: 'XR',
        level: 'user',
        question: "Quel paramètre doit être vérifié pour éviter le clipping ou la disparition d’objets proches/lointains en XR/AR ?",
        options: [
            "Les paramètres Near/Far Clip Plane de la caméra",
            "La couleur du background",
            "La résolution de texture",
            "Le nom du GameObject"
        ],
        correctAnswer: 0,
        explanation: "Near/Far Clip Plane définit la plage de rendu (proche/loin) de la caméra XR."
    },
    {
        id: 'xr-user-18',
        category: 'XR',
        level: 'user',
        question: "Quelle fonctionnalité permet d’ancrer un objet 3D sur une image reconnue en AR ?",
        options: [
            "Image Tracking (AR Tracked Image Manager)",
            "Light Probes",
            "Mesh Collider",
            "Terrain System"
        ],
        correctAnswer: 0,
        explanation: "AR Tracked Image Manager gère l’association d’images réelles à du contenu virtuel."
    },
    {
        id: 'xr-user-19',
        category: 'XR',
        level: 'user',
        question: "Que doit-on faire pour que les contrôleurs VR soient détectés dans Unity XR Interaction Toolkit ?",
        options: [
            "Configurer l’Input Actions et associer les contrôleurs dans XR Interaction Manager",
            "Créer un cube dans la scène",
            "Mettre les contrôleurs dans le dossier Resources",
            "Activer le mode 2D"
        ],
        correctAnswer: 0,
        explanation: "XR Interaction Manager + Input Actions = prise en charge des contrôleurs."
    },
    {
        id: 'xr-user-20',
        category: 'XR',
        level: 'user',
        question: "Que permet la fonction “Passthrough” sur certains devices XR (ex: Quest, HoloLens) ?",
        options: [
            "Afficher la vue réelle de la caméra dans le casque (réalité mixte)",
            "Accélérer les FPS",
            "Désactiver l’UI",
            "Sauvegarder la scène"
        ],
        correctAnswer: 0,
        explanation: "Passthrough = mix AR/VR, permet de voir l’environnement réel à travers le device."
    },
    {
        id: 'xr-pro-1',
        category: 'XR',
        level: 'pro',
        question: "Quelle différence entre l’AR Foundation et le package ARCore/ARKit natif dans Unity ?",
        options: [
            "AR Foundation unifie l’API pour plusieurs plateformes, ARCore/ARKit ne gèrent qu’une seule plateforme",
            "Aucune différence",
            "AR Foundation ne fonctionne pas sur Android",
            "ARCore/ARKit sont plus simples à utiliser pour le cross-platform"
        ],
        correctAnswer: 0,
        explanation: "AR Foundation fournit une abstraction multiplateforme sur ARKit (iOS) et ARCore (Android)."
    },
    {
        id: 'xr-pro-2',
        category: 'XR',
        level: 'pro',
        question: "Quel est le rôle du XR Interaction Manager dans l’XR Interaction Toolkit ?",
        options: [
            "Gérer la communication entre interactors et interactables (inputs, événements, états)",
            "Optimiser le build",
            "Changer le champ de vision",
            "Sert uniquement pour l’audio spatial"
        ],
        correctAnswer: 0,
        explanation: "Le XR Interaction Manager centralise et synchronise les interactions XR."
    },
    {
        id: 'xr-pro-3',
        category: 'XR',
        level: 'pro',
        question: "Pour une application VR multiplateforme (Quest, Vive), que faut-il vérifier avant le build final ?",
        options: [
            "Que tous les input actions et profiles XR sont compatibles avec chaque device ciblé",
            "Désactiver la gestion des collisions",
            "Passer en mode 2D",
            "Utiliser exclusivement URP"
        ],
        correctAnswer: 0,
        explanation: "Les profils d’input et de device doivent être vérifiés et testés sur chaque cible (ex: mapping contrôleur, actions)."
    },
    {
        id: 'xr-pro-4',
        category: 'XR',
        level: 'pro',
        question: "Quel est l’intérêt du TrackedPoseDriver dans une scène XR ?",
        options: [
            "Synchroniser la pose de la caméra (ou contrôleur) avec le matériel XR",
            "Générer des meshes dynamiquement",
            "Afficher du texte en 3D",
            "Créer un bake de lumière"
        ],
        correctAnswer: 0,
        explanation: "Le TrackedPoseDriver suit en temps réel la pose (position/rotation) de la tête ou des mains."
    },
    {
        id: 'xr-pro-5',
        category: 'XR',
        level: 'pro',
        question: "Comment tester efficacement un projet XR/AR sans device physique ?",
        options: [
            "Utiliser les simulateurs XR ou AR de l’éditeur Unity (XR Device Simulator, AR Simulation, Input Debugger)",
            "Impossible sans casque",
            "Utiliser uniquement le Game view",
            "Construire pour Windows puis tester en mode fenêtré"
        ],
        correctAnswer: 0,
        explanation: "Les simulateurs XR et AR de Unity permettent de mocker inputs, position, plans, images, etc."
    },
    {
        id: 'xr-pro-6',
        category: 'XR',
        level: 'pro',
        question: "Quel composant permet de “gripper” des objets 3D avec un contrôleur en VR ?",
        options: [
            "XR Grab Interactable",
            "Rigidbody",
            "Canvas Group",
            "Post Processing Volume"
        ],
        correctAnswer: 0,
        explanation: "XR Grab Interactable rend un objet saisissable par les contrôleurs."
    },
    {
        id: 'xr-pro-7',
        category: 'XR',
        level: 'pro',
        question: "Pourquoi faut-il faire attention à la fréquence de rafraîchissement en VR ?",
        options: [
            "Un framerate trop bas provoque du motion sickness et ruine l’expérience utilisateur",
            "Ça n’a aucun impact",
            "Ça ne concerne que l’audio",
            "Seule la résolution compte"
        ],
        correctAnswer: 0,
        explanation: "La VR exige au minimum 72Hz (souvent 90Hz/120Hz) pour éviter la nausée et les effets négatifs."
    },
    {
        id: 'xr-pro-8',
        category: 'XR',
        level: 'pro',
        question: "Pour faire du hand tracking sur Meta Quest, que doit-on activer/configurer dans Unity ?",
        options: [
            "Le Hand Tracking dans les settings XR Plug-in Management et utiliser les prefabs Hand en scène",
            "Rien, c’est automatique",
            "Créer un collider sur chaque doigt",
            "Changer le material du XR Rig"
        ],
        correctAnswer: 0,
        explanation: "Le hand tracking nécessite activation côté Quest ET utilisation des bons prefab/controllers Unity."
    },
    {
        id: 'xr-pro-9',
        category: 'XR',
        level: 'pro',
        question: "Quel outil utiliser pour détecter des images ou des QR codes en AR Foundation ?",
        options: [
            "AR Tracked Image Manager",
            "XR Grab Interactable",
            "Canvas Group",
            "Timeline"
        ],
        correctAnswer: 0,
        explanation: "AR Tracked Image Manager permet le suivi d’images/références dans l’AR."
    },
    {
        id: 'xr-pro-10',
        category: 'XR',
        level: 'pro',
        question: "Pour une appli XR multi-plateforme, quel piège faut-il ABSOLUMENT éviter côté asset workflow ?",
        options: [
            "Utiliser des assets très lourds (textures 4K, mesh non optimisés) qui ruinent les perfs sur mobile",
            "Avoir trop de scripts",
            "Utiliser URP",
            "Tout packager en AssetBundle"
        ],
        correctAnswer: 0,
        explanation: "Les assets non optimisés explosent les performances, surtout sur mobile/Quest."
    },
    {
        id: 'xr-pro-11',
        category: 'XR',
        level: 'pro',
        question: "Comment synchroniser la position d’un objet entre plusieurs utilisateurs en XR ?",
        options: [
            "Utiliser un système de networking compatible XR (ex : Photon, Netcode, Mirror…) et synchroniser les données critiques",
            "Activer le gravity",
            "Créer un script d’animation",
            "Changer le color space"
        ],
        correctAnswer: 0,
        explanation: "La synchronisation réseau doit être pensée pour la XR (latence, autorité, positions head/hands…)."
    },
    {
        id: 'xr-pro-12',
        category: 'XR',
        level: 'pro',
        question: "Quelle technique d’interaction faut-il privilégier pour limiter la fatigue bras/épaules en VR ?",
        options: [
            "Pointer ou déplacer avec les contrôleurs plutôt qu’uniquement des mouvements larges de bras",
            "Faire du “drag & drop” uniquement",
            "Forcer l’utilisateur à rester debout",
            "Utiliser uniquement la voix"
        ],
        correctAnswer: 0,
        explanation: "La fatigue physique en VR est un problème : privilégier des interactions adaptées."
    },
    {
        id: 'xr-pro-13',
        category: 'XR',
        level: 'pro',
        question: "Dans Unity, comment gérer un repositionnement (recenter) du XR Rig pour réaligner l’utilisateur dans la scène ?",
        options: [
            "Déplacer le GameObject parent du XR Rig/XROrigin",
            "Appeler Camera.main.Reset()",
            "Changer le Layer",
            "Supprimer tous les enfants du XR Rig"
        ],
        correctAnswer: 0,
        explanation: "Le repositionnement s’effectue en déplaçant le parent du Rig."
    },
    {
        id: 'xr-pro-14',
        category: 'XR',
        level: 'pro',
        question: "Quel outil Unity permet de profiler précisément les performances sur un device XR physique ?",
        options: [
            "Le Profiler Unity connecté au device via réseau ou USB",
            "Le panneau Lighting",
            "Le Sprite Renderer",
            "L’Animator Controller"
        ],
        correctAnswer: 0,
        explanation: "Le Profiler peut s’attacher à un device XR en temps réel pour profiler l’usage CPU/GPU/mémoire."
    },
    {
        id: 'xr-pro-15',
        category: 'XR',
        level: 'pro',
        question: "Pourquoi utiliser le “Late Latching” dans une appli VR/AR ?",
        options: [
            "Réduire la latence d’affichage entre le tracking et le rendu visuel",
            "Rendre la lumière plus réaliste",
            "Réduire la taille du build",
            "Aucune utilité"
        ],
        correctAnswer: 0,
        explanation: "Late Latching synchronise le tracking du device au plus près de l’affichage → moins de décalage visuel."
    },
    {
        id: 'xr-pro-16',
        category: 'XR',
        level: 'pro',
        question: "Sur Meta Quest, comment gérer l’accès aux permissions caméra et micro pour une appli AR avancée ?",
        options: [
            "Déclarer explicitement les permissions dans AndroidManifest.xml via le projet Unity",
            "Activer le HDR",
            "Changer le Tag du GameObject",
            "Aucune action requise"
        ],
        correctAnswer: 0,
        explanation: "Android requiert des permissions explicites, même via Unity."
    },
    {
        id: 'xr-pro-17',
        category: 'XR',
        level: 'pro',
        question: "Comment intégrer du Passthrough (réalité mixte) sur Quest 2/3 dans Unity ?",
        options: [
            "Utiliser l’API OVR Passthrough, activer la couche passthrough et placer les caméras comme il faut",
            "Utiliser un shader transparent",
            "Changer le color space",
            "Mettre un Skybox noir"
        ],
        correctAnswer: 0,
        explanation: "Il faut intégrer l’API OVR ou OpenXR et gérer la couche passthrough côté Unity + casque."
    },
    {
        id: 'xr-pro-18',
        category: 'XR',
        level: 'pro',
        question: "Que permet la fonction d’“Occlusion” en AR mobile ?",
        options: [
            "Cacher des objets 3D derrière des objets réels capturés par la caméra",
            "Afficher uniquement du texte",
            "Activer les ombres",
            "Limiter la vitesse du tracking"
        ],
        correctAnswer: 0,
        explanation: "Occlusion = objets virtuels cachés derrière du réel → effet de profondeur crédible."
    },
    {
        id: 'xr-pro-19',
        category: 'XR',
        level: 'pro',
        question: "Quel est le workflow recommandé pour gérer les updates de XR Interaction Toolkit dans un projet pro ?",
        options: [
            "Tester sur une branche isolée, vérifier la compatibilité des scripts et assets avant merge",
            "Faire l’update directement sur la branche principale",
            "Supprimer le dossier Library",
            "Tout recompiler en mode Release"
        ],
        correctAnswer: 0,
        explanation: "Comme tous les packages majeurs, il faut isoler l’update et tester avant de merger."
    },
    {
        id: 'xr-pro-20',
        category: 'XR',
        level: 'pro',
        question: "Comment s’assurer que le tracking spatial reste précis en AR Foundation ?",
        options: [
            "Vérifier l’éclairage réel, la qualité de caméra et éviter les surfaces réfléchissantes",
            "Activer le mode debug",
            "Désactiver le depth buffer",
            "Aucune importance"
        ],
        correctAnswer: 0,
        explanation: "Le tracking AR dépend beaucoup de la caméra et de l’environnement physique."
    },{
        id: 'xr-expert-1',
        category: 'XR',
        level: 'expert',
        question: "Dans un projet XR cross-platform (PCVR, Meta Quest, iOS ARKit), quel pattern d’architecture permet de partager au maximum la logique tout en gérant les spécificités hardware ?",
        options: [
            "Utiliser des interfaces/services d’abstraction et des providers de plateforme, injection de dépendance",
            "Tout mettre dans un seul MonoBehaviour",
            "Créer une scène par device",
            "Désactiver la XR sur PC"
        ],
        correctAnswer: 0,
        explanation: "Abstraire la logique XR via des interfaces/services et des providers par plateforme permet un code maintenable et réutilisable."
    },
    {
        id: 'xr-expert-2',
        category: 'XR',
        level: 'expert',
        question: "Pourquoi le support du multiview/stereo instancing est-il critique sur mobile XR ?",
        options: [
            "Permet de dessiner les deux yeux en un seul draw call pour optimiser les performances",
            "Augmente la qualité des textures",
            "N’a d’intérêt que sur PC",
            "Désactive le rendu du second œil"
        ],
        correctAnswer: 0,
        explanation: "Le multiview/stereo instancing divise par deux le coût GPU sur mobile pour la stéréo."
    },
    {
        id: 'xr-expert-3',
        category: 'XR',
        level: 'expert',
        question: "Comment profiler précisément les allocations mémoire transitoires dans une appli VR sur Quest ?",
        options: [
            "Utiliser le Profiler Unity en mode Deep Profile connecté au device + Memory Profiler package",
            "Juste regarder la console",
            "Utiliser uniquement la stat FPS",
            "Ne pas profiler, attendre les crash"
        ],
        correctAnswer: 0,
        explanation: "Le Deep Profile Unity + Memory Profiler permet d’identifier les pics d’allocation, fuites ou GC spikes."
    },
    {
        id: 'xr-expert-4',
        category: 'XR',
        level: 'expert',
        question: "Quel est l’impact de la persistance spatiale (Spatial Anchors, World Anchors) en AR/VR sur le design applicatif ?",
        options: [
            "Impose de gérer la sauvegarde/restauration des ancres et la robustesse face aux pertes réseau ou de contexte spatial",
            "Permet d’optimiser la physique",
            "Change uniquement la couleur des objets",
            "Aucun impact particulier"
        ],
        correctAnswer: 0,
        explanation: "La persistance spatiale oblige à concevoir une gestion robuste des anchors, surtout en multiuser/cloud."
    },
    {
        id: 'xr-expert-5',
        category: 'XR',
        level: 'expert',
        question: "Quelle contrainte majeure du pipeline graphique sur Quest 2/3/Pro doit être anticipée dès le design de l’application ?",
        options: [
            "La limite très basse de la bande passante mémoire et la nécessité de limiter draw calls/textures",
            "La gestion du HDR",
            "L’absence de physique",
            "Le manque de son stéréo"
        ],
        correctAnswer: 0,
        explanation: "Les chipsets mobile VR sont limités (bandwidth mémoire, drawcalls, fillrate, etc.)"
    },
    {
        id: 'xr-expert-6',
        category: 'XR',
        level: 'expert',
        question: "Pour une appli AR partagée en temps réel (multiplayer), quel problème doit-on résoudre côté tracking spatial ?",
        options: [
            "Synchroniser et recalibrer le référentiel spatial des devices clients pour que tous partagent le même espace AR",
            "Augmenter le nombre d’images par seconde",
            "Changer le DPI de l’écran",
            "Activer le cloud save"
        ],
        correctAnswer: 0,
        explanation: "Sans recalibrage commun, les objets ne seront jamais alignés dans le même espace pour tous les users."
    },
    {
        id: 'xr-expert-7',
        category: 'XR',
        level: 'expert',
        question: "Quelles limitations matérielles doivent guider le choix des shaders en XR mobile ?",
        options: [
            "Eviter les calculs complexes, les shadows temps réel, préférer l’unlit/simple lit, limiter les textures, pas de transparence massive",
            "Tout fonctionne pareil que sur PC",
            "Les shaders n’ont pas d’impact en XR",
            "Préférer les shaders tessellation partout"
        ],
        correctAnswer: 0,
        explanation: "Les shaders trop complexes tuent les perfs sur mobile/standalone VR (Quest, Pico, etc.)."
    },
    {
        id: 'xr-expert-8',
        category: 'XR',
        level: 'expert',
        question: "Quelle stratégie appliquer pour le déploiement OTA (Over The Air) de builds XR sur un parc de devices Quest en entreprise ?",
        options: [
            "Gérer un système MDM/MCM (Mobile Device Management) ou un pipeline OTA automatisé avec sideload",
            "Envoyer les APK par email",
            "Passer par l’App Store uniquement",
            "Installer les builds à la main sur chaque device"
        ],
        correctAnswer: 0,
        explanation: "En contexte pro, il faut industrialiser le déploiement via MDM/MCM, ADB/OTA, etc."
    },
    {
        id: 'xr-expert-9',
        category: 'XR',
        level: 'expert',
        question: "Pour garantir la compatibilité d’une appli XR sur plusieurs casques et OS, quel workflow appliquer côté build ?",
        options: [
            "Automatiser le build avec des build targets séparés, config spécifiques et tests QA pour chaque device",
            "Tout exporter en APK",
            "Forcer OpenGL sur toutes les plateformes",
            "Ignorer les warnings"
        ],
        correctAnswer: 0,
        explanation: "Chaque device/casque/platforme nécessite des builds/config/test adaptés."
    },
    {
        id: 'xr-expert-10',
        category: 'XR',
        level: 'expert',
        question: "Comment réduire le jitter visuel en VR lors des mouvements rapides de tête ?",
        options: [
            "Utiliser l’anti-aliasing temporel (TAA), le Late Latching, et optimiser la frame latency",
            "Augmenter la luminosité",
            "Baisser la résolution",
            "Changer de render pipeline"
        ],
        correctAnswer: 0,
        explanation: "La réduction du jitter passe par une bonne synchronisation tracking/rendu et des optimisations perf."
    },
    {
        id: 'xr-expert-11',
        category: 'XR',
        level: 'expert',
        question: "Pourquoi éviter les scripts Update() sur chaque objet interactif en XR ?",
        options: [
            "Ça provoque une explosion du coût CPU sur les devices limités",
            "C’est nécessaire pour le networking",
            "Ça améliore la perf GPU",
            "C’est recommandé pour l’audio"
        ],
        correctAnswer: 0,
        explanation: "Un Update() par objet = coût CPU énorme sur de grosses scènes (XR = optimisation obligatoire)."
    },
    {
        id: 'xr-expert-12',
        category: 'XR',
        level: 'expert',
        question: "En AR mobile, comment fiabiliser l’occlusion réelle/virtuelle sur des devices variés ?",
        options: [
            "Détecter la capacité du device et fallback si occlusion hardware/software indisponible",
            "Forcer le mode AR",
            "Désactiver la caméra",
            "Tout hardcoder en shader"
        ],
        correctAnswer: 0,
        explanation: "La prise en charge de l’occlusion dépend du matériel, il faut prévoir les fallback."
    },
    {
        id: 'xr-expert-13',
        category: 'XR',
        level: 'expert',
        question: "Sur une appli XR critique, comment gérer la récupération après un crash à cause du manque mémoire device ?",
        options: [
            "Implémenter une détection de low memory (Application.lowMemory) et mécanismes de sauvegarde/restauration",
            "Ignorer les crashs",
            "Baisser le volume audio",
            "Forcer un restart de l’OS"
        ],
        correctAnswer: 0,
        explanation: "Unity propose un event lowMemory, on peut y adosser des sauvegardes de l’état critique."
    },
    {
        id: 'xr-expert-14',
        category: 'XR',
        level: 'expert',
        question: "En XR, pourquoi l’usage des Singletons globaux peut poser problème sur la durée ?",
        options: [
            "Induit du couplage fort, des leaks mémoire et des problèmes de reset entre scènes ou reloads",
            "Améliore la perf CPU",
            "Permet le hot reload",
            "Gère la physique plus vite"
        ],
        correctAnswer: 0,
        explanation: "Les singletons mal gérés font exploser la dette technique et les bugs sur le long terme."
    },
    {
        id: 'xr-expert-15',
        category: 'XR',
        level: 'expert',
        question: "Quelle bonne pratique pour intégrer un plugin natif Android/iOS dans un projet Unity XR pro ?",
        options: [
            "Isoler les appels natifs via des wrappers C# + doc claire, tests unitaires, fallback si indispo",
            "Tout appeler en static depuis Update",
            "Ne rien documenter",
            "Faire des try/catch partout"
        ],
        correctAnswer: 0,
        explanation: "L’isolation/fallback/test des wrappers natifs est critique en cross-platform Unity."
    },
    {
        id: 'xr-expert-16',
        category: 'XR',
        level: 'expert',
        question: "Pour implémenter du gaze-based interaction en VR sans contrôleur, que faut-il prendre en compte ?",
        options: [
            "Gérer la calibration du regard, le raycast caméra, et l’accessibilité (durée, feedback visuel…)",
            "Juste utiliser le mouse pointer",
            "Forcer les utilisateurs à rester debout",
            "Augmenter la vitesse du raycast"
        ],
        correctAnswer: 0,
        explanation: "Le gaze input nécessite calibration, UX, raycast et feedbacks adaptés."
    },
    {
        id: 'xr-expert-17',
        category: 'XR',
        level: 'expert',
        question: "Comment garantir la confidentialité des flux vidéo en AR avec accès caméra ?",
        options: [
            "Protéger l’accès caméra avec les permissions système et chiffrer le stockage des images en local",
            "Désactiver le WiFi",
            "Rendre la caméra transparente",
            "Changer le port USB"
        ],
        correctAnswer: 0,
        explanation: "Sécurité = permissions Android/iOS et chiffrage local éventuel des images/videos."
    },
    {
        id: 'xr-expert-18',
        category: 'XR',
        level: 'expert',
        question: "Pour garantir la robustesse d’un système XR en conditions instables (WiFi faible, capteurs perturbés…), que prévoir ?",
        options: [
            "Des fallback offline, des modes dégradés, des tests d’erreur systématiques et une UX adaptée",
            "Rien, le cloud gère tout",
            "Changer de device",
            "Passer tout en mode débug"
        ],
        correctAnswer: 0,
        explanation: "Robustesse = dégradé, fallback, détection d’erreur, feedback UX."
    },
    {
        id: 'xr-expert-19',
        category: 'XR',
        level: 'expert',
        question: "En WebXR (Unity WebGL), quel obstacle majeur rend certains projets XR irréalistes sur navigateur ?",
        options: [
            "L’absence de support natif pour tous les devices/capteurs, les limitations sécurité, le perf/ram",
            "Tout marche pareil",
            "La gestion des lumières",
            "Le multi-threading amélioré"
        ],
        correctAnswer: 0,
        explanation: "WebXR/WebGL a de fortes limitations device/API/perf qui rendent certains projets impossibles."
    },
    {
        id: 'xr-expert-20',
        category: 'XR',
        level: 'expert',
        question: "Quelle méthodologie employer pour auditer les performances et bugs sur un parc de casques XR hétérogènes ?",
        options: [
            "Automatiser le test sur device farm, utiliser des analytics de crash, profiler les logs/retours d’utilisateurs",
            "Faire un seul test sur PC",
            "Ignorer les modèles peu utilisés",
            "Regarder la RAM uniquement"
        ],
        correctAnswer: 0,
        explanation: "Un projet XR pro nécessite du test massif sur chaque device cible, logging et retours terrain."
    },

    // Scripting
    {
        id: 'scripting-user-1',
        category: 'Scripting',
        level: 'user',
        question: "Quel mot-clé permet de définir une nouvelle classe C# dans Unity ?",
        options: [
            "class",
            "object",
            "define",
            "struct"
        ],
        correctAnswer: 0,
        explanation: "En C#, le mot-clé 'class' est utilisé pour définir une classe."
    },
    {
        id: 'scripting-user-2',
        category: 'Scripting',
        level: 'user',
        question: "Quelle méthode Unity est appelée automatiquement au lancement d’un script attaché à un GameObject ?",
        options: [
            "Start()",
            "Init()",
            "Begin()",
            "Main()"
        ],
        correctAnswer: 0,
        explanation: "Start() est appelée une fois au lancement du script sur le GameObject actif."
    },
    {
        id: 'scripting-user-3',
        category: 'Scripting',
        level: 'user',
        question: "Comment accède-t-on à un autre composant du même GameObject depuis un script ?",
        options: [
            "GetComponent<Type>()",
            "FindObjectOfType<Type>()",
            "this.Type",
            "new Type()"
        ],
        correctAnswer: 0,
        explanation: "GetComponent<Type>() permet d’accéder à un composant attaché au même GameObject."
    },
    {
        id: 'scripting-user-4',
        category: 'Scripting',
        level: 'user',
        question: "Quelle syntaxe est correcte pour déclarer une variable entière nommée ‘score’ en C# ?",
        options: [
            "int score;",
            "var score = ‘entier’;",
            "integer score;",
            "score = 0;"
        ],
        correctAnswer: 0,
        explanation: "int score; déclare une variable entière en C#."
    },
    {
        id: 'scripting-user-5',
        category: 'Scripting',
        level: 'user',
        question: "Quelle méthode est appelée à chaque frame dans un script MonoBehaviour ?",
        options: [
            "Update()",
            "Start()",
            "Awake()",
            "Loop()"
        ],
        correctAnswer: 0,
        explanation: "Update() s’exécute à chaque frame tant que l’objet est actif."
    },
    {
        id: 'scripting-user-6',
        category: 'Scripting',
        level: 'user',
        question: "Quel mot-clé permet de déclarer une constante dont la valeur ne changera jamais ?",
        options: [
            "const",
            "static",
            "readonly",
            "final"
        ],
        correctAnswer: 0,
        explanation: "const permet de déclarer une constante en C#."
    },
    {
        id: 'scripting-user-7',
        category: 'Scripting',
        level: 'user',
        question: "Comment afficher un message dans la console Unity depuis un script ?",
        options: [
            "Debug.Log(“message”);",
            "print(message);",
            "Console.Write(message);",
            "log(“message”);"
        ],
        correctAnswer: 0,
        explanation: "Debug.Log() affiche un message dans la console Unity."
    },
    {
        id: 'scripting-user-8',
        category: 'Scripting',
        level: 'user',
        question: "Que permet la méthode Destroy(gameObject) dans un script ?",
        options: [
            "Détruire le GameObject auquel le script est attaché",
            "Redémarrer le jeu",
            "Sauvegarder la scène",
            "Arrêter le script"
        ],
        correctAnswer: 0,
        explanation: "Destroy(gameObject) détruit l’objet en cours."
    },
    {
        id: 'scripting-user-9',
        category: 'Scripting',
        level: 'user',
        question: "Quel type permet de stocker du texte en C# ?",
        options: [
            "string",
            "text",
            "char",
            "word"
        ],
        correctAnswer: 0,
        explanation: "Le type string permet de stocker des chaînes de caractères."
    },
    {
        id: 'scripting-user-10',
        category: 'Scripting',
        level: 'user',
        question: "Quelle est la bonne syntaxe pour un test de condition en C# ?",
        options: [
            "if (score > 10)",
            "if score > 10 then",
            "if (score > 10):",
            "if score > 10"
        ],
        correctAnswer: 0,
        explanation: "La syntaxe correcte est if (score > 10)."
    },
    {
        id: 'scripting-user-11',
        category: 'Scripting',
        level: 'user',
        question: "Quel opérateur sert à additionner deux variables numériques en C# ?",
        options: [
            "+",
            "-",
            "*",
            "/"
        ],
        correctAnswer: 0,
        explanation: "L’opérateur + effectue une addition."
    },
    {
        id: 'scripting-user-12',
        category: 'Scripting',
        level: 'user',
        question: "Que fait la méthode Instantiate(prefab) dans un script Unity ?",
        options: [
            "Crée une nouvelle instance du prefab dans la scène",
            "Supprime le prefab",
            "Copie un script",
            "Change le nom du prefab"
        ],
        correctAnswer: 0,
        explanation: "Instantiate permet d’ajouter dynamiquement une copie d’un prefab."
    },
    {
        id: 'scripting-user-13',
        category: 'Scripting',
        level: 'user',
        question: "Quelle extension de fichier correspond à un script C# dans Unity ?",
        options: [
            ".cs",
            ".unity",
            ".txt",
            ".js"
        ],
        correctAnswer: 0,
        explanation: "Les scripts C# Unity portent l’extension .cs."
    },
    {
        id: 'scripting-user-14',
        category: 'Scripting',
        level: 'user',
        question: "Que permet l’instruction return dans une fonction C# ?",
        options: [
            "Renvoyer une valeur ou terminer l’exécution de la fonction",
            "Créer un GameObject",
            "Changer la couleur d’un objet",
            "Passer à la question suivante"
        ],
        correctAnswer: 0,
        explanation: "return termine la fonction et renvoie éventuellement une valeur."
    },
    {
        id: 'scripting-user-15',
        category: 'Scripting',
        level: 'user',
        question: "Comment attacher un script à un GameObject dans Unity ?",
        options: [
            "Le glisser dans l’Inspector du GameObject",
            "Faire double clic dessus",
            "Le renommer en .unity",
            "Cliquer droit dans la console"
        ],
        correctAnswer: 0,
        explanation: "Il faut glisser le script sur un GameObject ou utiliser Add Component."
    },
    {
        id: 'scripting-user-16',
        category: 'Scripting',
        level: 'user',
        question: "Quel mot-clé permet de définir une méthode en C# qui ne retourne rien ?",
        options: [
            "void",
            "none",
            "empty",
            "blank"
        ],
        correctAnswer: 0,
        explanation: "void indique qu’une méthode ne retourne pas de valeur."
    },
    {
        id: 'scripting-user-17',
        category: 'Scripting',
        level: 'user',
        question: "Que permet la méthode GetComponentInChildren<T>() dans un script Unity ?",
        options: [
            "Trouver un composant sur un GameObject enfant",
            "Créer un nouveau GameObject enfant",
            "Détruire tous les enfants",
            "Trouver un parent"
        ],
        correctAnswer: 0,
        explanation: "GetComponentInChildren<T>() cherche un composant sur les enfants du GameObject courant."
    },
    {
        id: 'scripting-user-18',
        category: 'Scripting',
        level: 'user',
        question: "Quelle boucle permet de répéter une action un nombre défini de fois en C# ?",
        options: [
            "for",
            "repeat",
            "until",
            "loop"
        ],
        correctAnswer: 0,
        explanation: "La boucle for est adaptée à un nombre d’itérations défini."
    },
    {
        id: 'scripting-user-19',
        category: 'Scripting',
        level: 'user',
        question: "Que signifie le message d’erreur 'NullReferenceException' dans un script Unity ?",
        options: [
            "On tente d’accéder à une référence qui vaut null",
            "On a une variable en double",
            "Il manque un point-virgule",
            "On dépasse la mémoire vive"
        ],
        correctAnswer: 0,
        explanation: "Une NullReferenceException survient si on accède à un objet qui n’est pas instancié."
    },
    {
        id: 'scripting-user-20',
        category: 'Scripting',
        level: 'user',
        question: "Quelle méthode est appelée avant Start() lors de l’initialisation d’un script Unity ?",
        options: [
            "Awake()",
            "OnInit()",
            "Main()",
            "Load()"
        ],
        correctAnswer: 0,
        explanation: "Awake() est appelée avant Start(), pour l’initialisation de base du script."
    },
    {
        id: "scripting-pro-1",
        category: "Scripting",
        level: "pro",
        question: "Quel est l’intérêt principal d’utiliser des propriétés (get/set) plutôt que des champs publics dans une classe C# ?",
        options: [
            "Encapsuler la logique d’accès/validation",
            "Augmenter la performance",
            "Réduire la taille du code",
            "Faciliter le renommage"
        ],
        correctAnswer: 0,
        explanation: "Les propriétés permettent d’ajouter des règles lors de la lecture/l’écriture et de garantir l’encapsulation."
    },
    {
        id: "scripting-pro-2",
        category: "Scripting",
        level: "pro",
        question: "Quelle méthode Unity utiliser pour charger une autre scène par code ?",
        options: [
            "SceneManager.LoadScene()",
            "Application.LoadLevel()",
            "GameObject.LoadScene()",
            "Editor.LoadScene()"
        ],
        correctAnswer: 0,
        explanation: "SceneManager.LoadScene() est la méthode standard depuis Unity 5.3."
    },
    {
        id: "scripting-pro-3",
        category: "Scripting",
        level: "pro",
        question: "Quel est le mot-clé pour empêcher une classe d’être héritée en C# ?",
        options: [
            "sealed",
            "static",
            "final",
            "locked"
        ],
        correctAnswer: 0,
        explanation: "Le mot-clé sealed empêche l’héritage de la classe."
    },
    {
        id: "scripting-pro-4",
        category: "Scripting",
        level: "pro",
        question: "Quelle méthode permet d’exécuter du code à la désactivation d’un GameObject (ou script) dans Unity ?",
        options: [
            "OnDisable()",
            "OnEnd()",
            "Deactivate()",
            "Stop()"
        ],
        correctAnswer: 0,
        explanation: "OnDisable() est appelée automatiquement lors de la désactivation du GameObject/script."
    },
    {
        id: "scripting-pro-5",
        category: "Scripting",
        level: "pro",
        question: "Quel est le principal avantage d’utiliser des ScriptableObject pour la gestion de données dans Unity ?",
        options: [
            "Permet le partage et la persistance de données entre plusieurs objets/scènes",
            "Permet de générer du code C# automatiquement",
            "Optimise les calculs GPU",
            "Accélère la compilation"
        ],
        correctAnswer: 0,
        explanation: "Un ScriptableObject permet de stocker et partager des données de façon centralisée, indépendamment des GameObjects en scène."
    },
    {
        id: "scripting-pro-6",
        category: "Scripting",
        level: "pro",
        question: "Que se passe-t-il si on oublie d’enlever un abonnement à un événement static en C# ?",
        options: [
            "On risque une fuite mémoire (références non libérées)",
            "L’événement ne sera jamais déclenché",
            "Le projet ne compile plus",
            "La variable devient nulle"
        ],
        correctAnswer: 0,
        explanation: "L’objet abonné reste référencé et n’est pas garbage collecté, provoquant un leak."
    },
    {
        id: "scripting-pro-7",
        category: "Scripting",
        level: "pro",
        question: "Quel mot-clé permet d’indiquer qu’une méthode remplace une version virtuelle de la classe parente ?",
        options: [
            "override",
            "virtual",
            "base",
            "extends"
        ],
        correctAnswer: 0,
        explanation: "override indique que la méthode redéfinit une méthode virtuelle héritée."
    },
    {
        id: "scripting-pro-8",
        category: "Scripting",
        level: "pro",
        question: "Quel design pattern est le plus adapté pour limiter la création de multiples gestionnaires globaux (GameManager, AudioManager, etc.) ?",
        options: [
            "Singleton",
            "Factory",
            "Observer",
            "Decorator"
        ],
        correctAnswer: 0,
        explanation: "Le Singleton limite la création à une seule instance globale (à manier avec précaution !)."
    },
    {
        id: "scripting-pro-9",
        category: "Scripting",
        level: "pro",
        question: "Quelle différence majeure entre Update() et FixedUpdate() dans Unity ?",
        options: [
            "FixedUpdate() est appelé à intervalle fixe pour la physique, Update() à chaque frame pour la logique jeu",
            "Update() gère les collisions, FixedUpdate() les rendus graphiques",
            "Update() est appelé avant l’affichage, FixedUpdate() après",
            "Aucune différence"
        ],
        correctAnswer: 0,
        explanation: "Update() = frame logique, FixedUpdate() = simulation physique à intervalle fixe."
    },
    {
        id: "scripting-pro-10",
        category: "Scripting",
        level: "pro",
        question: "Pourquoi faut-il éviter d’appeler GetComponent<> dans Update() ?",
        options: [
            "C’est coûteux en performance car la recherche a lieu à chaque frame",
            "Cela peut provoquer une NullReferenceException",
            "GetComponent supprime le composant",
            "GetComponent fonctionne uniquement au démarrage"
        ],
        correctAnswer: 0,
        explanation: "GetComponent est lent, il vaut mieux stocker la référence."
    },
    {
        id: "scripting-pro-11",
        category: "Scripting",
        level: "pro",
        question: "Quelle méthode permet de détecter un clic souris sur un objet 3D avec collider ?",
        options: [
            "OnMouseDown()",
            "OnClick()",
            "Input.GetMouseButton()",
            "OnPointerDown()"
        ],
        correctAnswer: 0,
        explanation: "OnMouseDown() est appelée quand on clique sur un collider avec la souris."
    },
    {
        id: "scripting-pro-12",
        category: "Scripting",
        level: "pro",
        question: "Que permet l’utilisation du mot-clé 'readonly' sur un champ dans une classe C# ?",
        options: [
            "Empêcher la modification du champ hors constructeur ou initialisation",
            "Rendre le champ visible dans l’Inspector",
            "Empêcher l’accès depuis d’autres scripts",
            "Rendre le champ accessible uniquement en lecture publique"
        ],
        correctAnswer: 0,
        explanation: "readonly permet de n’assigner une valeur qu’à la déclaration ou dans le constructeur."
    },
    {
        id: "scripting-pro-13",
        category: "Scripting",
        level: "pro",
        question: "Comment faire communiquer deux GameObjects sans référence directe (couplage faible) ?",
        options: [
            "En passant par des événements (C# events, UnityEvent)",
            "En utilisant GameObject.Find() partout",
            "En passant tous les scripts en static",
            "En accédant par index dans la hiérarchie"
        ],
        correctAnswer: 0,
        explanation: "L’événement permet un découplage entre l’émetteur et l’écouteur."
    },
    {
        id: "scripting-pro-14",
        category: "Scripting",
        level: "pro",
        question: "Que fait OnTriggerEnter(Collider other) dans un script MonoBehaviour ?",
        options: [
            "Détecte l’entrée d’un autre collider dans un trigger (collision non physique)",
            "Appelle la fonction à chaque frame",
            "Modifie la gravité",
            "Rend le GameObject visible"
        ],
        correctAnswer: 0,
        explanation: "OnTriggerEnter détecte l’entrée d’un autre collider sur un objet marqué isTrigger."
    },
    {
        id: "scripting-pro-15",
        category: "Scripting",
        level: "pro",
        question: "Quel est le rôle de la méthode Awake() dans le cycle de vie d’un MonoBehaviour Unity ?",
        options: [
            "Initialiser le script avant Start(), une seule fois, même si le GameObject est désactivé",
            "Initialiser à chaque frame",
            "Gérer la physique",
            "Appeler la scène suivante"
        ],
        correctAnswer: 0,
        explanation: "Awake() s’exécute une seule fois, avant Start(), même si l’objet est désactivé."
    },
    {
        id: "scripting-pro-16",
        category: "Scripting",
        level: "pro",
        question: "Que permet l’interface IEnumerable en C# (par exemple dans une coroutine Unity) ?",
        options: [
            "Permet d’itérer sur une collection ou d’utiliser yield return",
            "Sauvegarder un GameObject",
            "Stocker plusieurs types de données",
            "Initialiser une coroutine"
        ],
        correctAnswer: 0,
        explanation: "IEnumerable est utilisée pour itérer dans les boucles foreach et pour les coroutines."
    },
    {
        id: "scripting-pro-17",
        category: "Scripting",
        level: "pro",
        question: "Quel est le risque principal d’utiliser un Singleton partout dans un projet Unity ?",
        options: [
            "Créer du couplage global et nuire à la testabilité/maintenance",
            "Aucun, c’est toujours mieux",
            "Réduire la taille du build",
            "Augmenter la vitesse du jeu"
        ],
        correctAnswer: 0,
        explanation: "Singleton = dépendance globale = code difficile à tester, à maintenir, et à migrer."
    },
    {
        id: "scripting-pro-18",
        category: "Scripting",
        level: "pro",
        question: "Que permet l’opérateur null-coalescent ?? en C# ?",
        options: [
            "Retourner la première valeur non nulle",
            "Comparer deux nombres",
            "Déclarer une variable locale",
            "Rendre une variable readonly"
        ],
        correctAnswer: 0,
        explanation: "a ?? b retourne b si a est null, sinon a."
    },
    {
        id: "scripting-pro-19",
        category: "Scripting",
        level: "pro",
        question: "Quel attribut Unity faut-il utiliser pour exposer un champ privé dans l’Inspector ?",
        options: [
            "[SerializeField]",
            "[Public]",
            "[ReadOnly]",
            "[Exposed]"
        ],
        correctAnswer: 0,
        explanation: "[SerializeField] rend un champ privé visible dans l’Inspector Unity."
    },
    {
        id: "scripting-pro-20",
        category: "Scripting",
        level: "pro",
        question: "Quelle méthode Unity est la plus adaptée pour appliquer un effet toutes les X secondes (ex : spawn d’ennemi) ?",
        options: [
            "Utiliser une coroutine (IEnumerator/yield return WaitForSeconds)",
            "Placer le code dans FixedUpdate()",
            "Utiliser Update() + Time.deltaTime",
            "Redéfinir Start() à chaque fois"
        ],
        correctAnswer: 0,
        explanation: "Les coroutines sont idéales pour les délais et temporisations propres."
    },

    // Physique
    {
        id: "scripting-expert-1",
        category: "Scripting",
        level: "expert",
        question: "Quel est l’inconvénient principal d’un MonoBehaviour qui référence un autre objet par GameObject.Find() dans Start() ?",
        options: [
            "Couplage fort, recherche coûteuse à l’exécution, fragile en cas de renommage",
            "Oblige l’objet trouvé à être public",
            "Ne fonctionne pas en build",
            "Lance une exception si l’objet n’existe pas"
        ],
        correctAnswer: 0,
        explanation: "GameObject.Find() est lent, crée un couplage fort et échoue silencieusement si le nom change ou l’objet n’existe plus."
    },
    {
        id: "scripting-expert-2",
        category: "Scripting",
        level: "expert",
        question: "Quelle est la différence entre Awake() et OnEnable() dans Unity ?",
        options: [
            "Awake() ne s’exécute qu’une fois à la création, OnEnable() à chaque activation",
            "Aucune différence",
            "OnEnable() est appelée avant Awake()",
            "Awake() est appelée plusieurs fois si l’objet est désactivé"
        ],
        correctAnswer: 0,
        explanation: "Awake() = 1 fois à l’instanciation. OnEnable() = à chaque SetActive(true)."
    },
    {
        id: "scripting-expert-3",
        category: "Scripting",
        level: "expert",
        question: "Pourquoi la désérialisation automatique de Unity peut poser problème avec des champs non serializables dans un ScriptableObject ?",
        options: [
            "Les champs non serializables sont ignorés silencieusement à la sauvegarde/chargement",
            "Unity lance une erreur à la compilation",
            "Unity ne charge plus l’asset",
            "Les valeurs sont forcées à zéro"
        ],
        correctAnswer: 0,
        explanation: "Tout champ non serializable n’est pas sauvegardé par Unity, ce qui crée des bugs subtils si on l’oublie."
    },
    {
        id: "scripting-expert-4",
        category: "Scripting",
        level: "expert",
        question: "Dans quel cas utiliser l’attribut [ExecuteInEditMode] sur un MonoBehaviour ?",
        options: [
            "Pour exécuter des méthodes même en mode éditeur (ex : outils d’édition custom, visualisation temps réel)",
            "Pour optimiser la physique",
            "Pour exécuter plus vite la fonction Update()",
            "Pour désactiver la compilation automatique"
        ],
        correctAnswer: 0,
        explanation: "[ExecuteInEditMode] permet de faire tourner le script dans l’éditeur pour du tooling, des gizmos ou de la génération de données."
    },
    {
        id: "scripting-expert-5",
        category: "Scripting",
        level: "expert",
        question: "Pourquoi faut-il toujours rendre une coroutine stoppable (utiliser StopCoroutine, check sur un flag) ?",
        options: [
            "Sinon elle tourne à l’infini, fuite mémoire ou comportements indésirables à la destruction du GameObject",
            "Sinon le code s’exécute trop rapidement",
            "La coroutine est détruite automatiquement",
            "Unity bloque le jeu"
        ],
        correctAnswer: 0,
        explanation: "Une coroutine continue même si le contexte a disparu, sauf si on l’arrête explicitement."
    },
    {
        id: "scripting-expert-6",
        category: "Scripting",
        level: "expert",
        question: "Quel piège avec les closures dans une boucle for sur des delegates en C# (par exemple, bouton.OnClick) ?",
        options: [
            "La variable capturée par la closure pointe sur la dernière valeur de la boucle, pas la valeur à l’itération",
            "La closure duplique chaque delegate",
            "Cela empêche l’utilisation de static",
            "Aucun, C# gère tout automatiquement"
        ],
        correctAnswer: 0,
        explanation: "Piège classique : la closure capture la variable de boucle, pas sa valeur. Résultat inattendu."
    },
    {
        id: "scripting-expert-7",
        category: "Scripting",
        level: "expert",
        question: "Comment optimiser la gestion de centaines d’objets (ennemis, projectiles) créés/détruits fréquemment en runtime ?",
        options: [
            "Utiliser un object pooling (pool d’objets réutilisables)",
            "Utiliser Destroy() à chaque fois",
            "Instancier un GameObject pour chaque ennemi",
            "Stocker tous les objets dans une ArrayList"
        ],
        correctAnswer: 0,
        explanation: "L’object pooling limite les instanciations/destructions, très coûteuses pour Unity."
    },
    {
        id: "scripting-expert-8",
        category: "Scripting",
        level: "expert",
        question: "Quelle est la conséquence d’avoir de nombreuses méthodes Update() vides dans plusieurs MonoBehaviour sur une scène ?",
        options: [
            "Impact sur les performances car Unity appelle chaque Update() même vide",
            "Aucune, Unity les ignore",
            "Seul le premier script Update() est appelé",
            "Unity regroupe automatiquement tous les Update()"
        ],
        correctAnswer: 0,
        explanation: "Unity fait le tour de chaque script pour chaque Update(), même s’il n’y a rien à exécuter."
    },
    {
        id: "scripting-expert-9",
        category: "Scripting",
        level: "expert",
        question: "Quel est le risque d’utiliser des static events (événements statiques) partout dans un gros projet ?",
        options: [
            "Risques de fuites mémoire si les abonnements ne sont jamais supprimés",
            "Les événements ne seront jamais appelés",
            "Unity interdit leur utilisation en build",
            "Ils ralentissent la compilation"
        ],
        correctAnswer: 0,
        explanation: "Les abonnements non supprimés empêchent le GC des objets concernés, d’où memory leaks et bugs très chiants à tracer."
    },
    {
        id: "scripting-expert-10",
        category: "Scripting",
        level: "expert",
        question: "Quelle méthode utiliser pour profiler efficacement les pics mémoire lors d’un chargement de scène complexe dans Unity ?",
        options: [
            "Utiliser le Profiler Memory de l’Editor, en Deep Profile, pendant le chargement",
            "Logger la RAM en C# avec Debug.Log",
            "Relancer Unity",
            "Utiliser uniquement la console"
        ],
        correctAnswer: 0,
        explanation: "Seul le profiler donne la stack, l’asset, le détail en temps réel."
    },
    {
        id: "scripting-expert-11",
        category: "Scripting",
        level: "expert",
        question: "Quelle propriété de Rigidbody faut-il manipuler pour déplacer un objet via la physique (et non juste son Transform) ?",
        options: [
            "MovePosition()",
            "position",
            "transform.position",
            "SetPosition()"
        ],
        correctAnswer: 0,
        explanation: "Seule MovePosition() respecte le moteur physique, transform.position casse les calculs physiques."
    },
    {
        id: "scripting-expert-12",
        category: "Scripting",
        level: "expert",
        question: "Quel attribut permet de rendre un champ visible dans l’Inspector mais non modifiable dans le code (hors constructeur) ?",
        options: [
            "[SerializeField] private readonly",
            "[ReadOnly]",
            "[NonEditable]",
            "const"
        ],
        correctAnswer: 0,
        explanation: "[SerializeField] + readonly = modifiable uniquement à la création, visible dans l’Inspector."
    },
    {
        id: "scripting-expert-13",
        category: "Scripting",
        level: "expert",
        question: "Pourquoi l’utilisation massive de FindObjectOfType<> dans un projet à grande échelle pose-t-elle problème ?",
        options: [
            "Ça scanne toute la scène à chaque appel, tueur de perf en prod",
            "Cela empêche la sérialisation",
            "La méthode est dépréciée",
            "Unity refuse de build"
        ],
        correctAnswer: 0,
        explanation: "FindObjectOfType<> fait un parcours complet de la hiérarchie, donc à bannir en Update() ou boucle."
    },
    {
        id: "scripting-expert-14",
        category: "Scripting",
        level: "expert",
        question: "Quel est le principal intérêt du pattern ScriptableObject pour les systèmes d’inventaire, paramètres ou gestion globale ?",
        options: [
            "Découpler totalement la donnée de la scène, réutilisable, éditable sans instance en runtime",
            "Accélérer les accès réseau",
            "Rendre les objets non sérialisables",
            "Permettre les accès concurrents multithread"
        ],
        correctAnswer: 0,
        explanation: "ScriptableObject = gestion centralisée, partageable, persistante des data."
    },
    {
        id: "scripting-expert-15",
        category: "Scripting",
        level: "expert",
        question: "Quelle syntaxe permet d’implémenter explicitement une interface (masquer la méthode hors cast) ?",
        options: [
            "void IFoo.DoSomething()",
            "override void DoSomething()",
            "virtual void DoSomething()",
            "private void DoSomething()"
        ],
        correctAnswer: 0,
        explanation: "L’implémentation explicite cache la méthode sauf via le cast vers l’interface."
    },
    {
        id: "scripting-expert-16",
        category: "Scripting",
        level: "expert",
        question: "Pourquoi faut-il limiter l’utilisation du mot-clé 'public' sur les champs de struct dans une librairie publique ?",
        options: [
            "Cela bloque tout changement futur sans breaking change (contract immuable)",
            "Cela augmente la taille du build",
            "Cela crée des références cycliques",
            "Aucune conséquence"
        ],
        correctAnswer: 0,
        explanation: "Un champ public dans une struct ne peut plus jamais être supprimé ou modifié, sous peine de casser tous les consommateurs."
    },
    {
        id: "scripting-expert-17",
        category: "Scripting",
        level: "expert",
        question: "Quel pattern est le plus adapté pour ajouter dynamiquement des fonctionnalités à un objet sans modifier sa classe ?",
        options: [
            "Decorator",
            "Strategy",
            "Singleton",
            "Factory"
        ],
        correctAnswer: 0,
        explanation: "Decorator empile des comportements de manière modulaire à l’exécution."
    },
    {
        id: "scripting-expert-18",
        category: "Scripting",
        level: "expert",
        question: "Que permet l’utilisation de Span<T> ou Memory<T> en C# moderne (Unity 2022+) ?",
        options: [
            "Optimiser la gestion mémoire, manipuler des buffers sans allocation et sans GC",
            "Créer des threads",
            "Optimiser la physique",
            "Remplacer les List<T>"
        ],
        correctAnswer: 0,
        explanation: "Span<T> = manipulation directe du buffer, pas d’allocation ni de garbage, ultra performant pour le parsing/processing."
    },
    {
        id: "scripting-expert-19",
        category: "Scripting",
        level: "expert",
        question: "À quoi sert le mot-clé 'yield return' dans une coroutine Unity ?",
        options: [
            "Suspendre l’exécution pour la reprendre plus tard (pauser la coroutine)",
            "Faire un return classique",
            "Stopper définitivement la coroutine",
            "Créer une variable"
        ],
        correctAnswer: 0,
        explanation: "yield return permet d’attendre une condition ou un temps avant de continuer la coroutine."
    },
    {
        id: "scripting-expert-20",
        category: "Scripting",
        level: "expert",
        question: "Comment garantir la bonne synchronisation de l’accès à une ressource partagée entre plusieurs threads en C# (ex : fichier log) ?",
        options: [
            "En utilisant le mot-clé lock autour du code critique",
            "Avec static",
            "Avec readonly",
            "En multipliant les coroutines"
        ],
        correctAnswer: 0,
        explanation: "lock sécurise la section pour éviter les accès concurrents et les corruptions de données."
    },
    {
        id: "physics-user-1",
        category: "Physique",
        level: "user",
        question: "Quel composant faut-il ajouter à un GameObject pour qu'il soit affecté par la gravité ?",
        options: ["Rigidbody", "Collider", "Light", "Camera"],
        correctAnswer: 0,
        explanation: "Le Rigidbody permet à l'objet d'être affecté par la physique, y compris la gravité."
    },
    {
        id: "physics-user-2",
        category: "Physique",
        level: "user",
        question: "À quoi sert un Collider dans Unity ?",
        options: [
            "Détecter les collisions et interactions physiques",
            "Éclairer la scène",
            "Contrôler l'audio",
            "Afficher du texte"
        ],
        correctAnswer: 0,
        explanation: "Les Colliders définissent les zones de collision pour détecter les contacts entre objets."
    },
    {
        id: "physics-user-3",
        category: "Physique",
        level: "user",
        question: "Comment rendre un objet détectable aux collisions sans qu'il bloque le passage ?",
        options: [
            "Cocher 'Is Trigger' sur le Collider",
            "Ajouter un Rigidbody",
            "Changer le matériau en transparent",
            "Désactiver le GameObject"
        ],
        correctAnswer: 0,
        explanation: "Le mode Trigger permet de détecter le passage sans collision physique réelle."
    },
    {
        id: "physics-user-4",
        category: "Physique",
        level: "user",
        question: "Quel composant utiliser pour des collisions en 2D ?",
        options: ["BoxCollider2D", "BoxCollider", "MeshCollider", "AudioSource"],
        correctAnswer: 0,
        explanation: "BoxCollider2D (et les autres Collider2D) sont faits pour la physique 2D."
    },
    {
        id: "physics-user-5",
        category: "Physique",
        level: "user",
        question: "Que se passe-t-il si un objet a un Collider mais pas de Rigidbody ?",
        options: [
            "Il reste statique et ne bouge pas avec la physique",
            "Il est affecté par la gravité",
            "Il disparaît de la scène",
            "Il joue un son"
        ],
        correctAnswer: 0,
        explanation: "Sans Rigidbody, l’objet n’est pas affecté par la gravité ni les forces, il sert d'obstacle statique."
    },
    {
        id: "physics-user-6",
        category: "Physique",
        level: "user",
        question: "Comment empêcher un objet physique de tomber sous l’effet de la gravité ?",
        options: [
            "Décocher 'Use Gravity' sur le Rigidbody",
            "Supprimer le Collider",
            "Changer la couleur",
            "Réduire la taille de l’objet"
        ],
        correctAnswer: 0,
        explanation: "'Use Gravity' permet de désactiver la gravité sur l'objet."
    },
    {
        id: "physics-user-7",
        category: "Physique",
        level: "user",
        question: "Quel composant permet de détecter les collisions dans un jeu 3D ?",
        options: ["Collider", "Animator", "AudioSource", "Canvas"],
        correctAnswer: 0,
        explanation: "Tous les types de Collider (Box, Sphere, Mesh...) servent à détecter les collisions en 3D."
    },
    {
        id: "physics-user-8",
        category: "Physique",
        level: "user",
        question: "Quelle fonction Unity détecte l'entrée d'un objet dans un Trigger ?",
        options: [
            "OnTriggerEnter",
            "OnCollisionEnter",
            "Start",
            "Update"
        ],
        correctAnswer: 0,
        explanation: "OnTriggerEnter est appelée lors de l'entrée dans un Trigger."
    },
    {
        id: "physics-user-9",
        category: "Physique",
        level: "user",
        question: "Qu'est-ce qu'un Rigidbody 'Kinematic' ?",
        options: [
            "Il n'est pas affecté par la physique, on le déplace uniquement par script",
            "Il rebondit plus fort",
            "Il s’efface automatiquement",
            "Il gère l'audio"
        ],
        correctAnswer: 0,
        explanation: "Un Rigidbody Kinematic ignore la physique et doit être déplacé à la main."
    },
    {
        id: "physics-user-10",
        category: "Physique",
        level: "user",
        question: "Quel composant utiliser pour simuler un sol sur lequel les objets peuvent tomber ?",
        options: [
            "BoxCollider",
            "Light",
            "Animator",
            "AudioSource"
        ],
        correctAnswer: 0,
        explanation: "BoxCollider (ou tout Collider) peut simuler le sol pour réceptionner des objets physiques."
    },
    {
        id: "physics-user-11",
        category: "Physique",
        level: "user",
        question: "Comment empêcher deux objets de se traverser sans interaction ?",
        options: [
            "Ajouter un Collider sur chaque objet",
            "Mettre un Canvas sur les objets",
            "Utiliser une animation",
            "Changer le nom de l'objet"
        ],
        correctAnswer: 0,
        explanation: "Un Collider sur chaque objet les rendra solides et empêchera la traversée."
    },
    {
        id: "physics-user-12",
        category: "Physique",
        level: "user",
        question: "Que fait la propriété 'mass' sur un Rigidbody ?",
        options: [
            "Définit la masse de l'objet pour les calculs de physique",
            "Change la couleur de l’objet",
            "Définit la luminosité",
            "Modifie le son joué"
        ],
        correctAnswer: 0,
        explanation: "La masse influence la force nécessaire pour déplacer l’objet et les réactions aux collisions."
    },
    {
        id: "physics-user-13",
        category: "Physique",
        level: "user",
        question: "Quelle différence entre OnCollisionEnter et OnTriggerEnter ?",
        options: [
            "OnCollisionEnter = collision physique réelle, OnTriggerEnter = simple détection de passage",
            "Aucune différence",
            "OnTriggerEnter s'utilise en 2D seulement",
            "OnCollisionEnter nécessite un AudioSource"
        ],
        correctAnswer: 0,
        explanation: "Collision = contact physique ; Trigger = détection sans bloquer le passage."
    },
    {
        id: "physics-user-14",
        category: "Physique",
        level: "user",
        question: "Pour un jeu 2D avec des collisions, quels composants sont essentiels ?",
        options: [
            "Rigidbody2D + Collider2D",
            "Rigidbody + Collider",
            "Animator + AudioSource",
            "Camera + Light"
        ],
        correctAnswer: 0,
        explanation: "Unity 2D nécessite la version 2D des Rigidbody et Colliders."
    },
    {
        id: "physics-user-15",
        category: "Physique",
        level: "user",
        question: "Comment augmenter le rebond d'un objet qui touche un sol ?",
        options: [
            "Changer le Physic Material sur le Collider et augmenter le 'bounciness'",
            "Changer sa couleur",
            "Réduire sa masse",
            "Décocher Use Gravity"
        ],
        correctAnswer: 0,
        explanation: "Le Physic Material permet d’ajuster le rebond (bounciness) et le frottement."
    },
    {
        id: "physics-user-16",
        category: "Physique",
        level: "user",
        question: "Quel paramètre ajuster pour rendre un objet moins glissant sur un sol ?",
        options: [
            "Augmenter le 'friction' du Physic Material",
            "Changer sa taille",
            "Mettre plus de lumière",
            "Baisser sa masse"
        ],
        correctAnswer: 0,
        explanation: "Le Physic Material permet d’ajuster la friction pour éviter de glisser."
    },
    {
        id: "physics-user-17",
        category: "Physique",
        level: "user",
        question: "Quel composant utiliser pour une interaction physique entre deux objets reliés (ex : une porte pivotante) ?",
        options: [
            "Un Joint (ex : HingeJoint, FixedJoint)",
            "Un Camera",
            "Un Canvas",
            "Un SpriteRenderer"
        ],
        correctAnswer: 0,
        explanation: "Les Joints permettent de relier des objets pour des interactions mécaniques (charnière, ressort, etc.)."
    },
    {
        id: "physics-user-18",
        category: "Physique",
        level: "user",
        question: "Que faut-il faire pour que deux objets n'interagissent pas entre eux malgré la physique ?",
        options: [
            "Utiliser les Layer et Layer Collision Matrix pour désactiver les interactions",
            "Supprimer les Colliders",
            "Augmenter la masse",
            "Changer la couleur"
        ],
        correctAnswer: 0,
        explanation: "La matrice de collision permet d’ignorer les collisions entre certains layers."
    },
    {
        id: "physics-user-19",
        category: "Physique",
        level: "user",
        question: "Quelle méthode déplacer un objet physiquement dans un script (sans casser la physique) ?",
        options: [
            "Utiliser Rigidbody.MovePosition()",
            "Modifier transform.position directement",
            "Changer le nom de l'objet",
            "Changer le Parent"
        ],
        correctAnswer: 0,
        explanation: "MovePosition respecte le moteur physique et évite les bugs de collision."
    },
    {
        id: "physics-user-20",
        category: "Physique",
        level: "user",
        question: "Quel composant permet de simuler la gravité sur un objet 2D ?",
        options: [
            "Rigidbody2D",
            "Collider2D",
            "Camera2D",
            "SpriteRenderer"
        ],
        correctAnswer: 0,
        explanation: "C'est le Rigidbody2D qui permet la gravité et la physique en 2D."
    },
    {
        id: "physics-pro-1",
        category: "Physique",
        level: "pro",
        question: "Quel est le rôle de la 'Collision Matrix' dans les project settings Unity ?",
        options: [
            "Définir quelles layers peuvent interagir par collision",
            "Optimiser le rendu graphique",
            "Limiter la taille des textures",
            "Définir le chemin du build"
        ],
        correctAnswer: 0,
        explanation: "La matrice de collision permet de contrôler quelles layers peuvent entrer en collision entre elles, essentiel pour les perfs et la logique."
    },
    {
        id: "physics-pro-2",
        category: "Physique",
        level: "pro",
        question: "Quel type de Joint utiliser pour relier deux objets comme une corde souple ?",
        options: [
            "Spring Joint",
            "Fixed Joint",
            "Hinge Joint",
            "Character Joint"
        ],
        correctAnswer: 0,
        explanation: "Le Spring Joint permet une liaison souple avec amortissement, parfait pour simuler une corde ou un ressort."
    },
    {
        id: "physics-pro-3",
        category: "Physique",
        level: "pro",
        question: "Comment optimiser les performances d’une scène contenant beaucoup d’objets statiques ?",
        options: [
            "Cocher 'Static' sur les objets concernés",
            "Augmenter la masse de chaque objet",
            "Utiliser le mode kinematic partout",
            "Mettre tous les objets sur un seul layer"
        ],
        correctAnswer: 0,
        explanation: "Marquer les objets 'Static' permet à Unity d’optimiser les calculs de physique et de rendu."
    },
    {
        id: "physics-pro-4",
        category: "Physique",
        level: "pro",
        question: "Quel paramètre de Rigidbody permet de simuler la résistance de l’air (freinage progressif) ?",
        options: [
            "Drag",
            "Mass",
            "Angular Drag",
            "Friction"
        ],
        correctAnswer: 0,
        explanation: "'Drag' freine la vitesse linéaire d'un objet, simulant une résistance (air/eau…)."
    },
    {
        id: "physics-pro-5",
        category: "Physique",
        level: "pro",
        question: "Quelle méthode privilégier pour appliquer une force instantanée à un objet ?",
        options: [
            "Rigidbody.AddForce avec ForceMode.Impulse",
            "Modifier directement transform.position",
            "Utiliser Rigidbody.MoveRotation",
            "Rigidbody.AddTorque"
        ],
        correctAnswer: 0,
        explanation: "ForceMode.Impulse applique un coup sec, AddForce en mode normal simule une poussée continue."
    },
    {
        id: "physics-pro-6",
        category: "Physique",
        level: "pro",
        question: "Quel est l’intérêt d’utiliser des 'Physics Material' sur les Colliders ?",
        options: [
            "Définir le frottement et le rebond de la surface",
            "Changer la couleur",
            "Optimiser le chargement de la scène",
            "Désactiver les collisions"
        ],
        correctAnswer: 0,
        explanation: "Physics Material permet de définir friction et bounciness (rebond) des surfaces."
    },
    {
        id: "physics-pro-7",
        category: "Physique",
        level: "pro",
        question: "Comment empêcher un objet Rigidbody de tourner autour d’un axe spécifique ?",
        options: [
            "Verrouiller l’axe correspondant dans Rigidbody Constraints",
            "Mettre le Rigidbody en kinematic",
            "Supprimer tous les Colliders",
            "Changer la masse à 0"
        ],
        correctAnswer: 0,
        explanation: "Rigidbody Constraints permet de bloquer la rotation sur X, Y ou Z indépendamment."
    },
    {
        id: "physics-pro-8",
        category: "Physique",
        level: "pro",
        question: "Quelle différence entre un 'Collider' et un 'Trigger' ?",
        options: [
            "Un Trigger ne bloque pas, il détecte seulement les passages",
            "Un Collider n’a pas de forme",
            "Les Triggers n’existent qu’en 2D",
            "Un Collider joue toujours un son"
        ],
        correctAnswer: 0,
        explanation: "Un Trigger permet la détection sans interaction physique."
    },
    {
        id: "physics-pro-9",
        category: "Physique",
        level: "pro",
        question: "Comment ajuster le rebond d’un objet lors des collisions ?",
        options: [
            "Changer la propriété 'bounciness' du Physics Material associé",
            "Augmenter la masse du Rigidbody",
            "Changer le layer",
            "Réduire la friction"
        ],
        correctAnswer: 0,
        explanation: "Le rebond se règle dans le Physics Material appliqué au Collider."
    },
    {
        id: "physics-pro-10",
        category: "Physique",
        level: "pro",
        question: "Quelle est la bonne façon de déplacer un Rigidbody avec la physique dans FixedUpdate ?",
        options: [
            "Utiliser Rigidbody.MovePosition",
            "Modifier transform.position",
            "Utiliser Lerp sur la position",
            "Modifier localScale"
        ],
        correctAnswer: 0,
        explanation: "MovePosition respecte les collisions et la physique ; transform.position casse la simulation."
    },
    {
        id: "physics-pro-11",
        category: "Physique",
        level: "pro",
        question: "Comment détecter une collision entre deux objets en 2D uniquement ?",
        options: [
            "Utiliser OnCollisionEnter2D",
            "OnTriggerEnter",
            "OnCollisionEnter",
            "OnMouseDown"
        ],
        correctAnswer: 0,
        explanation: "La version 2D est adaptée à la physique 2D de Unity."
    },
    {
        id: "physics-pro-12",
        category: "Physique",
        level: "pro",
        question: "Quel composant utiliser pour relier deux objets avec une contrainte rigide (pas de mouvement relatif possible) ?",
        options: [
            "Fixed Joint",
            "Spring Joint",
            "Hinge Joint",
            "Configurable Joint"
        ],
        correctAnswer: 0,
        explanation: "Fixed Joint soude deux objets ensemble, sans mouvement relatif."
    },
    {
        id: "physics-pro-13",
        category: "Physique",
        level: "pro",
        question: "Quel impact a l’activation de 'Interpolate' sur un Rigidbody ?",
        options: [
            "Lisse le mouvement du Rigidbody entre les frames, utile pour les caméras ou visuels",
            "Double la gravité",
            "Bloque les collisions",
            "Augmente le son"
        ],
        correctAnswer: 0,
        explanation: "Interpolate améliore le rendu visuel des objets déplacés par la physique."
    },
    {
        id: "physics-pro-14",
        category: "Physique",
        level: "pro",
        question: "Quel composant utiliser pour limiter la rotation d’un objet à une plage précise (ex : porte qui ne s’ouvre qu’à 90°) ?",
        options: [
            "Hinge Joint avec angle limits",
            "Spring Joint",
            "Configurable Joint",
            "Character Joint"
        ],
        correctAnswer: 0,
        explanation: "Hinge Joint permet de définir des limites d’angle."
    },
    {
        id: "physics-pro-15",
        category: "Physique",
        level: "pro",
        question: "Comment détecter toutes les collisions d’un objet en script ?",
        options: [
            "Implémenter OnCollisionEnter, OnCollisionStay et OnCollisionExit",
            "Utiliser uniquement OnTriggerEnter",
            "Modifier transform.parent",
            "Changer le layer"
        ],
        correctAnswer: 0,
        explanation: "Ces trois méthodes couvrent tous les événements de collision."
    },
    {
        id: "physics-pro-16",
        category: "Physique",
        level: "pro",
        question: "Pourquoi utiliser Rigidbody2D plutôt que Rigidbody sur un projet 2D ?",
        options: [
            "Le moteur 2D est optimisé et séparé du 3D pour les performances et la gestion des collisions",
            "Aucun intérêt, c’est identique",
            "Pour avoir plus de couleurs",
            "Pour supporter l’audio spatial"
        ],
        correctAnswer: 0,
        explanation: "Rigidbody2D utilise le moteur physique Box2D, beaucoup plus adapté aux jeux 2D."
    },
    {
        id: "physics-pro-17",
        category: "Physique",
        level: "pro",
        question: "Quel outil Unity permet de visualiser les contacts et collisions en runtime ?",
        options: [
            "Physics Debugger",
            "Profiler",
            "Animator Window",
            "Lighting Explorer"
        ],
        correctAnswer: 0,
        explanation: "Physics Debugger affiche les colliders, joints, contacts, etc. en temps réel."
    },
    {
        id: "physics-pro-18",
        category: "Physique",
        level: "pro",
        question: "Que permet la propriété 'Is Kinematic' sur un Rigidbody ?",
        options: [
            "Empêcher que la physique déplace l’objet : le déplacer uniquement via script",
            "Augmenter la masse automatiquement",
            "Doubler la friction",
            "Jouer une animation"
        ],
        correctAnswer: 0,
        explanation: "Is Kinematic désactive les forces/gravité, seul le code déplace l’objet."
    },
    {
        id: "physics-pro-19",
        category: "Physique",
        level: "pro",
        question: "Comment empêcher un objet de sortir d’une zone définie par des Colliders ?",
        options: [
            "Placer des Colliders en mode 'static' tout autour de la zone",
            "Augmenter le drag",
            "Ajouter un Canvas",
            "Changer le tag"
        ],
        correctAnswer: 0,
        explanation: "Les Colliders statiques définissent la limite physique infranchissable."
    },
    {
        id: "physics-pro-20",
        category: "Physique",
        level: "pro",
        question: "Quelle est la différence majeure entre 'Continuous' et 'Discrete' collision detection sur Rigidbody ?",
        options: [
            "Continuous permet de détecter les collisions à haute vitesse et éviter le tunneling, Discrete est plus rapide mais moins précis",
            "Discrete double la gravité",
            "Continuous supprime les collisions",
            "Discrete n’existe que sur Rigidbody2D"
        ],
        correctAnswer: 0,
        explanation: "Continuous évite que les objets rapides traversent les autres sans collision (effet tunneling)."
    },
    {
        id: "physics-expert-1",
        category: "Physique",
        level: "expert",
        question: "Quelle est la principale limitation du système de collision de Unity sur des MeshCollider en mode non-convexe ?",
        options: [
            "Non supporté pour les objets dynamiques (Rigidbody non kinematic)",
            "N’accepte pas les materials",
            "N'est pas compatible avec les joints",
            "Ne gère pas le raycast"
        ],
        correctAnswer: 0,
        explanation: "MeshCollider non-convexe ne peut pas être utilisé sur un objet avec Rigidbody dynamique (risque de crash/perf)."
    },
    {
        id: "physics-expert-2",
        category: "Physique",
        level: "expert",
        question: "Que provoque l'utilisation massive de FixedUpdate() avec du code lourd dans chaque script d'une grosse scène ?",
        options: [
            "Des problèmes de performance majeurs et des frames irrégulières",
            "Augmentation de la friction",
            "Des collisions ignorées",
            "L'UI ne se rafraîchit plus"
        ],
        correctAnswer: 0,
        explanation: "FixedUpdate est appelée à fréquence constante sur chaque script : trop de code ici tue le CPU et provoque du jitter."
    },
    {
        id: "physics-expert-3",
        category: "Physique",
        level: "expert",
        question: "Comment gérer un système de ragdoll performant et stable sur un personnage avec Animator actif ?",
        options: [
            "Désactiver l’Animator et activer tous les Rigidbody du ragdoll lors du passage en mode physique",
            "Utiliser uniquement le collider racine",
            "Rendre le personnage kinematic",
            "Doubler la masse des membres"
        ],
        correctAnswer: 0,
        explanation: "Pour éviter les conflits Animator/physique, il faut désactiver l’Animator et activer les Rigidbody lors du switch."
    },
    {
        id: "physics-expert-4",
        category: "Physique",
        level: "expert",
        question: "Quel est le risque de cumuler plusieurs joints physiques contradictoires (ex : Spring et Fixed Joint sur le même objet) ?",
        options: [
            "Comportement instable, oscillations ou ruptures physiques imprévisibles",
            "Augmentation automatique de la friction",
            "Aucun, Unity gère tout",
            "Les joints s’annulent entre eux"
        ],
        correctAnswer: 0,
        explanation: "Des contraintes contradictoires rendent le solver instable, menant à des explosions ou glitches physiques."
    },
    {
        id: "physics-expert-5",
        category: "Physique",
        level: "expert",
        question: "Comment profiler précisément les calculs de physique (CPU et collision) dans Unity ?",
        options: [
            "En utilisant le module Physics du Profiler en Deep Profile",
            "En regardant uniquement les logs de la console",
            "En utilisant l’Animator Controller",
            "En augmentant la fréquence du FixedUpdate"
        ],
        correctAnswer: 0,
        explanation: "Le Profiler détaille les coûts collisions, solver, contacts, etc. en Deep Profile."
    },
    {
        id: "physics-expert-6",
        category: "Physique",
        level: "expert",
        question: "Comment optimiser la physique pour un jeu réseau à tick élevé (100+ Hz) sans désynchronisation majeure ?",
        options: [
            "Synchroniser le tick réseau avec la physique et limiter la complexité des collisions",
            "Utiliser transform.position uniquement",
            "Tout basculer en kinematic",
            "Désactiver la Collision Matrix"
        ],
        correctAnswer: 0,
        explanation: "Physique et réseau doivent rester en phase : il faut gérer la synchro, limiter le nombre d’entités, utiliser des layers."
    },
    {
        id: "physics-expert-7",
        category: "Physique",
        level: "expert",
        question: "Quel est le principal risque à augmenter massivement 'Solver Iterations' sur le Rigidbody ou Project Settings ?",
        options: [
            "Explosion du coût CPU sans gain de précision notable au-delà d’un certain seuil",
            "Augmentation du drag",
            "Ignorer les collisions",
            "Lenteur du build"
        ],
        correctAnswer: 0,
        explanation: "Plus d’itérations = plus de CPU, mais returns quickly diminish : 6–10 c’est safe, au-delà inutile dans 99 % des cas."
    },
    {
        id: "physics-expert-8",
        category: "Physique",
        level: "expert",
        question: "Quelle technique pour réduire le 'tunneling' d’objets rapides malgré le mode Continuous Dynamic sur le Rigidbody ?",
        options: [
            "Réduire la taille du collider et augmenter la fréquence Fixed Timestep",
            "Augmenter la friction",
            "Doubler la masse",
            "Changer le tag de l’objet"
        ],
        correctAnswer: 0,
        explanation: "Collider petit et timestep plus rapide = moins de risques de traversée (tunneling) à très haute vitesse."
    },
    {
        id: "physics-expert-9",
        category: "Physique",
        level: "expert",
        question: "Dans quel cas le moteur PhysX de Unity bascule-t-il une collision en mode 'Sleeping' ?",
        options: [
            "Quand aucun mouvement/force n’a été appliqué depuis un certain temps",
            "Si la gravité est désactivée",
            "Si l’objet est kinematic",
            "Si le mesh est trop grand"
        ],
        correctAnswer: 0,
        explanation: "PhysX 'endort' les Rigidbody inactifs pour économiser du CPU."
    },
    {
        id: "physics-expert-10",
        category: "Physique",
        level: "expert",
        question: "Comment détecter une collision entre deux colliders spécifiques dans une scène complexe sans callback global ?",
        options: [
            "Analyser les collisions dans OnCollisionEnter et filtrer par reference d’objet",
            "Changer les layers dynamiquement",
            "Désactiver la Collision Matrix",
            "Utiliser uniquement OnTriggerEnter"
        ],
        correctAnswer: 0,
        explanation: "OnCollisionEnter donne la référence du collider touché : filtrer explicitement évite le bruit."
    },
    {
        id: "physics-expert-11",
        category: "Physique",
        level: "expert",
        question: "Quel est l’effet secondaire d’utiliser trop de MeshCollider même en mode Convex sur une scène mobile ?",
        options: [
            "Coût CPU élevé : privilégier des colliders primitifs (Box/Sphere/…) pour le runtime",
            "Augmentation du drag",
            "Double la gravité",
            "Aucun, Convex est toujours rapide"
        ],
        correctAnswer: 0,
        explanation: "MeshCollider même convex coûte cher en perf par rapport aux primitives (Box/Sphere/…) surtout sur mobile."
    },
    {
        id: "physics-expert-12",
        category: "Physique",
        level: "expert",
        question: "Comment gérer l’optimisation physique pour des mondes ouverts à grande échelle (ex : MMO, sandbox) ?",
        options: [
            "Activer/désactiver dynamiquement les Rigidbody/colliders hors caméra/joueur (LOD physique)",
            "Tout mettre sur le layer 'Ignore Raycast'",
            "Mettre tous les objets en kinematic",
            "Augmenter le drag global"
        ],
        correctAnswer: 0,
        explanation: "Le LOD physique : désactiver la physique des objets hors de portée, et réactiver à l’approche."
    },
    {
        id: "physics-expert-13",
        category: "Physique",
        level: "expert",
        question: "Quel est le but du 'Contact Offset' dans les Project Settings de la physique ?",
        options: [
            "Éviter les vibrations/spikes lors des contacts entre colliders",
            "Rendre le contact plus fort",
            "Multiplier la friction",
            "Changer la masse"
        ],
        correctAnswer: 0,
        explanation: "Contact Offset = tolérance sur la détection des contacts, éviter les tremblements sur les surfaces planaires."
    },
    {
        id: "physics-expert-14",
        category: "Physique",
        level: "expert",
        question: "Pourquoi faut-il éviter les scale non-uniformes (par ex : (2,1,1)) sur les objets porteurs de Rigidbody ?",
        options: [
            "Cela cause des imprécisions et bugs sur les collisions/joints (non supporté par PhysX)",
            "Augmente la friction",
            "Double la masse",
            "Aucun impact"
        ],
        correctAnswer: 0,
        explanation: "PhysX ne supporte pas les scale non-uniformes sur les Rigidbody, comportements indéterministes, collisions foireuses."
    },
    {
        id: "physics-expert-15",
        category: "Physique",
        level: "expert",
        question: "Comment éviter que la physique 2D interfère avec la physique 3D sur un projet hybride (2D+3D) ?",
        options: [
            "Ne jamais mixer Rigidbody/Rigidbody2D ou Collider/Collider2D sur les mêmes objets",
            "Activer le multi-physics mode",
            "Passer tous les objets en trigger",
            "Augmenter la gravité"
        ],
        correctAnswer: 0,
        explanation: "2D et 3D sont totalement séparés, ne pas mélanger les deux types de Rigidbody/collider sur un même GameObject."
    },
    {
        id: "physics-expert-16",
        category: "Physique",
        level: "expert",
        question: "Dans quel cas la friction dynamique n’est pas prise en compte lors d’un contact en physique 3D ?",
        options: [
            "Lorsque la friction combinée est à zéro sur au moins un des deux materials",
            "Quand la masse est trop élevée",
            "Si le solver est en mode Fast",
            "Quand l’objet est en sleeping"
        ],
        correctAnswer: 0,
        explanation: "Si un des deux materials a friction=0, c’est 0 pour l’ensemble du contact."
    },
    {
        id: "physics-expert-17",
        category: "Physique",
        level: "expert",
        question: "Que permet le mode 'CCD' sur les joints physiques avancés (Configurable Joint, ArticulationBody…) ?",
        options: [
            "Limiter le tunneling sur des chaînes d’objets rapides ou multi-articulés",
            "Multiplier la friction",
            "Supprimer la masse",
            "Activer la gravité uniquement sur la racine"
        ],
        correctAnswer: 0,
        explanation: "CCD (Continuous Collision Detection) évite le tunneling sur des systèmes articulés complexes."
    },
    {
        id: "physics-expert-18",
        category: "Physique",
        level: "expert",
        question: "Quel est l’avantage d’utiliser un 'ArticulationBody' plutôt qu’une chaîne de Rigidbody classique ?",
        options: [
            "ArticulationBody gère mieux les chaînes cinématiques complexes, moins d’instabilité et de bugs sur les articulations robotiques",
            "Permet de doubler la gravité",
            "Optimise la lumière",
            "Change le matériau"
        ],
        correctAnswer: 0,
        explanation: "ArticulationBody (Unity 2019+) = motorisation/contrainte avancée, moins d’effets de “spaghetti” que les Rigidbody/Joints classiques."
    },
    {
        id: "physics-expert-19",
        category: "Physique",
        level: "expert",
        question: "Comment investiguer et corriger des collisions fantômes (ghost collision) qui ne devraient pas arriver sur un projet Unity ?",
        options: [
            "Vérifier la collision matrix, les layers, la taille des Colliders et le contact offset",
            "Changer la masse de l’objet",
            "Activer la gravité",
            "Utiliser OnTriggerExit"
        ],
        correctAnswer: 0,
        explanation: "La plupart des ghost collisions viennent d’erreurs de config matrix, layers, offset ou bugs de scaling/collider."
    },
    {
        id: "physics-expert-20",
        category: "Physique",
        level: "expert",
        question: "Pourquoi faut-il éviter de modifier transform.position d’un Rigidbody dynamique dans Update() ?",
        options: [
            "Casse le moteur de physique : ignore collisions, interpolation, triggers, etc.",
            "Augmente la friction",
            "Rend l’objet invisible",
            "Cela change le layer"
        ],
        correctAnswer: 0,
        explanation: "Déplacer un Rigidbody via transform.position outrepasse le moteur physique, résultat : bugs, pas de collisions."
    },
    // Asset Management
    {
        id: "asset-user-1",
        category: "Asset Management",
        level: "user",
        question: "Quel dossier est utilisé par défaut pour stocker les fichiers d’assets dans un projet Unity ?",
        options: [
            "Assets",
            "Resources",
            "Editor",
            "Library"
        ],
        correctAnswer: 0,
        explanation: "Le dossier 'Assets' contient tout le contenu importé/managé par Unity pour le projet."
    },
    {
        id: "asset-user-2",
        category: "Asset Management",
        level: "user",
        question: "Quel format d’image est généralement utilisé pour les textures dans Unity ?",
        options: [
            ".png et .jpg",
            ".exe",
            ".psd uniquement",
            ".txt"
        ],
        correctAnswer: 0,
        explanation: "Unity accepte .png, .jpg, .tga, .psd et d’autres formats courants pour les textures."
    },
    {
        id: "asset-user-3",
        category: "Asset Management",
        level: "user",
        question: "Comment importer un fichier audio dans Unity ?",
        options: [
            "Le glisser dans le dossier 'Assets'",
            "Copier dans 'Library'",
            "Le renommer en .wav",
            "Utiliser 'Build Settings'"
        ],
        correctAnswer: 0,
        explanation: "Glisser-déposer dans 'Assets' suffit, Unity l’importe et le convertit si besoin."
    },
    {
        id: "asset-user-4",
        category: "Asset Management",
        level: "user",
        question: "Quel est le rôle d’un prefab dans Unity ?",
        options: [
            "Stocker une configuration d’objet réutilisable",
            "Importer des textures",
            "Remplacer les scripts",
            "Créer un dossier"
        ],
        correctAnswer: 0,
        explanation: "Un prefab permet d’enregistrer un GameObject pour l’instance et la réutilisation."
    },
    {
        id: "asset-user-5",
        category: "Asset Management",
        level: "user",
        question: "Quelle action provoque une réimportation automatique d’un asset ?",
        options: [
            "Modifier le fichier source dans le dossier 'Assets'",
            "Changer le nom du projet",
            "Supprimer 'Library'",
            "Ouvrir la scène"
        ],
        correctAnswer: 0,
        explanation: "Toute modification d’un asset source entraîne sa réimportation par Unity."
    },
    {
        id: "asset-user-6",
        category: "Asset Management",
        level: "user",
        question: "Pourquoi faut-il éviter de manipuler directement les fichiers dans le dossier 'Library' ?",
        options: [
            "Ce dossier est généré automatiquement par Unity et ne doit jamais être modifié manuellement",
            "Il contient les textures",
            "Il contient les scripts C#",
            "C'est le dossier des Builds"
        ],
        correctAnswer: 0,
        explanation: "‘Library’ contient le cache local généré par Unity, le toucher casse le projet."
    },
    {
        id: "asset-user-7",
        category: "Asset Management",
        level: "user",
        question: "Si vous supprimez un asset dans Unity, que se passe-t-il ?",
        options: [
            "Il est supprimé du disque et du projet",
            "Il est mis à la corbeille Unity uniquement",
            "Il est archivé dans 'Library'",
            "Il devient invisible mais reste utilisé"
        ],
        correctAnswer: 0,
        explanation: "Supprimer un asset le retire du projet ET du disque."
    },
    {
        id: "asset-user-8",
        category: "Asset Management",
        level: "user",
        question: "Quel type de fichier est généralement utilisé pour les modèles 3D dans Unity ?",
        options: [
            ".fbx",
            ".docx",
            ".png",
            ".html"
        ],
        correctAnswer: 0,
        explanation: ".fbx est le format standard pour l’import de modèles 3D."
    },
    {
        id: "asset-user-9",
        category: "Asset Management",
        level: "user",
        question: "À quoi sert le dossier 'Resources' dans Unity ?",
        options: [
            "Charger dynamiquement des assets à l’exécution",
            "Optimiser les textures",
            "Stocker les scripts C#",
            "Créer des builds"
        ],
        correctAnswer: 0,
        explanation: "‘Resources’ permet le chargement dynamique via Resources.Load mais doit être utilisé avec parcimonie."
    },
    {
        id: "asset-user-10",
        category: "Asset Management",
        level: "user",
        question: "Quelle est la bonne pratique pour organiser ses assets dans un projet Unity ?",
        options: [
            "Créer des sous-dossiers par type ou usage (Textures, Models, Audio, Prefabs…)",
            "Tout mettre à la racine d’Assets",
            "Utiliser le dossier 'Temp'",
            "Renommer 'Assets' en 'Content'"
        ],
        correctAnswer: 0,
        explanation: "L’organisation en sous-dossiers (Assets/Textures, /Audio, etc.) est essentielle pour la clarté du projet."
    },
    {
        id: "asset-user-11",
        category: "Asset Management",
        level: "user",
        question: "Si un asset a disparu dans la scène après une suppression, que faut-il faire ?",
        options: [
            "Vérifier le dossier 'Assets' ou restaurer depuis le contrôle de version",
            "Fermer et rouvrir Unity",
            "Changer le shader",
            "Redémarrer l’ordinateur"
        ],
        correctAnswer: 0,
        explanation: "Si un asset disparaît, c’est qu’il a été supprimé du dossier : restaurer ou versionner."
    },
    {
        id: "asset-user-12",
        category: "Asset Management",
        level: "user",
        question: "Quel est l'intérêt d'utiliser le contrôle de version (ex: Git) pour les assets d’un projet Unity ?",
        options: [
            "Suivre les modifications et restaurer les fichiers perdus",
            "Augmenter la vitesse du projet",
            "Accélérer les builds",
            "Changer le format des textures"
        ],
        correctAnswer: 0,
        explanation: "Versionner ses assets = rollback, historique, partage d’équipe."
    },
    {
        id: "asset-user-13",
        category: "Asset Management",
        level: "user",
        question: "Quel est le risque à déplacer un asset en dehors de l’éditeur Unity (via l’explorateur de fichiers) ?",
        options: [
            "Casser les références et provoquer des erreurs de missing dans la scène",
            "Aucun, c’est recommandé",
            "Optimise les builds",
            "Supprime le GUID"
        ],
        correctAnswer: 0,
        explanation: "Déplacer hors Unity = pertes de liens, d’où l’importance de tout gérer par l’éditeur."
    },
    {
        id: "asset-user-14",
        category: "Asset Management",
        level: "user",
        question: "Qu’est-ce qu’un .meta file dans Unity ?",
        options: [
            "Un fichier qui stocke les infos de référence (GUID, settings…) pour chaque asset",
            "Un backup du fichier",
            "Un log d’erreur",
            "Un script caché"
        ],
        correctAnswer: 0,
        explanation: ".meta = identifiant unique + settings asset. Ne JAMAIS supprimer sans raison."
    },
    {
        id: "asset-user-15",
        category: "Asset Management",
        level: "user",
        question: "Que se passe-t-il si vous importez deux assets avec le même nom mais dans des dossiers différents ?",
        options: [
            "Unity les considère comme distincts (le chemin complet + GUID fait foi)",
            "Le premier écrase le second",
            "Unity refuse l’import",
            "Ils fusionnent automatiquement"
        ],
        correctAnswer: 0,
        explanation: "Nom identique ok si chemin différent, car chaque asset a son propre GUID et path."
    },
    {
        id: "asset-user-16",
        category: "Asset Management",
        level: "user",
        question: "Quel format est généralement utilisé pour les fichiers audio dans Unity ?",
        options: [
            ".wav et .mp3",
            ".avi",
            ".psd",
            ".dll"
        ],
        correctAnswer: 0,
        explanation: "Unity prend en charge .wav, .mp3, .ogg, etc. pour l’import audio."
    },
    {
        id: "asset-user-17",
        category: "Asset Management",
        level: "user",
        question: "Comment ajouter rapidement plusieurs assets téléchargés dans Unity ?",
        options: [
            "Drag’n’drop tous les fichiers dans le dossier 'Assets'",
            "Copier dans 'Library'",
            "Tout mettre dans 'Temp'",
            "Les convertir en prefab"
        ],
        correctAnswer: 0,
        explanation: "Drag’n’drop dans 'Assets' importe tout d’un coup, quel que soit le type de fichier compatible."
    },
    {
        id: "asset-user-18",
        category: "Asset Management",
        level: "user",
        question: "Comment référencer un asset dans un script C# (ex: prefab ou texture) ?",
        options: [
            "Exposer une variable publique/serializable et l’assigner dans l’inspecteur",
            "Utiliser 'import()' comme en JS",
            "Stocker le chemin absolu",
            "Passer par Resources.Load obligatoirement"
        ],
        correctAnswer: 0,
        explanation: "Pour qu’un script référence un asset, il doit être public ou [SerializeField] puis assigné dans l’inspecteur."
    },
    {
        id: "asset-user-19",
        category: "Asset Management",
        level: "user",
        question: "Que permet le package manager de Unity ?",
        options: [
            "Ajouter, mettre à jour ou retirer des packages (fonctionnalités, assets, outils…) au projet",
            "Changer le thème de l’éditeur",
            "Importer des textures",
            "Exporter en .fbx"
        ],
        correctAnswer: 0,
        explanation: "Le package manager gère l’ajout/suppression de packages et d’assets du store."
    },
    {
        id: "asset-user-20",
        category: "Asset Management",
        level: "user",
        question: "Quel dossier contient le cache local généré par Unity, que l’on peut supprimer pour forcer une recompilation des assets ?",
        options: [
            "Library",
            "Assets",
            "Temp",
            "Editor"
        ],
        correctAnswer: 0,
        explanation: "'Library' est le cache local : on peut le supprimer pour forcer la recompilation complète (au prix d’un temps de reload élevé)."
    },
    {
        id: "asset-pro-1",
        category: "Asset Management",
        level: "pro",
        question: "Quel est l'intérêt principal des 'Addressables' par rapport au dossier 'Resources' ?",
        options: [
            "Charger/décharger dynamiquement les assets sans tout embarquer en mémoire",
            "Permettre l’édition directe dans l’Inspector",
            "Obtenir des textures plus compressées",
            "Remplacer les shaders automatiquement"
        ],
        correctAnswer: 0,
        explanation: "Addressables offrent une gestion mémoire/charge dynamique, là où Resources charge tout et ne permet pas de déchargement ciblé."
    },
    {
        id: "asset-pro-2",
        category: "Asset Management",
        level: "pro",
        question: "Qu'est-ce qu'un AssetBundle dans Unity ?",
        options: [
            "Un package d’assets compressé, exportable et chargeable à la volée",
            "Un type de prefab",
            "Un dossier spécial pour les textures",
            "Un script C# dédié"
        ],
        correctAnswer: 0,
        explanation: "Les AssetBundles servent à livrer des assets séparés du build, téléchargeables ou non."
    },
    {
        id: "asset-pro-3",
        category: "Asset Management",
        level: "pro",
        question: "Quel est le risque à merger deux branches qui ont modifié le même prefab dans Git ?",
        options: [
            "Conflit dans le fichier .prefab et risque de perte de références ou corruption",
            "Unity corrige automatiquement le prefab",
            "Aucun risque, les GUID règlent tout",
            "Le projet plante au démarrage"
        ],
        correctAnswer: 0,
        explanation: "Les fichiers .prefab sont du texte mais non humains : fusion = conflit/détruire des références, toujours valider en équipe."
    },
    {
        id: "asset-pro-4",
        category: "Asset Management",
        level: "pro",
        question: "Pourquoi faut-il versionner les fichiers .meta dans un projet collaboratif ?",
        options: [
            "Ils contiennent le GUID des assets, essentiel pour garder les liens de références",
            "Pour éviter les virus",
            "Pour améliorer les temps de build",
            "Pour accélérer l’éditeur"
        ],
        correctAnswer: 0,
        explanation: "Un .meta absent = GUID changé, liens cassés. Toujours versionner les .meta."
    },
    {
        id: "asset-pro-5",
        category: "Asset Management",
        level: "pro",
        question: "Quel outil de Unity permet d’automatiser la compression des textures à l’import ?",
        options: [
            "Asset Importer avec presets",
            "Build Settings",
            "Project Settings > Quality",
            "Editor.log"
        ],
        correctAnswer: 0,
        explanation: "L’Asset Importer et les presets permettent d’appliquer automatiquement des réglages (compression, mipmaps…) à l’import."
    },
    {
        id: "asset-pro-6",
        category: "Asset Management",
        level: "pro",
        question: "Quel pipeline est recommandé pour gérer les assets d’un gros projet multi-plateformes ?",
        options: [
            "Utiliser des Addressables et organiser les assets par groupes et labels",
            "Tout mettre dans 'Resources'",
            "Déplacer tout à la racine",
            "Utiliser uniquement des AssetBundles"
        ],
        correctAnswer: 0,
        explanation: "Pour les gros projets : Addressables, groupes/logique de chargement, labels pour la granularité et l’optimisation."
    },
    {
        id: "asset-pro-7",
        category: "Asset Management",
        level: "pro",
        question: "Comment garantir qu’une texture n’est pas réimportée inutilement lors d’un pull Git ?",
        options: [
            "Ne pas toucher au fichier .meta lié",
            "Toujours renommer la texture",
            "Déplacer le fichier dans Library",
            "Effacer les GUID"
        ],
        correctAnswer: 0,
        explanation: "Tant que le .meta est inchangé, la texture garde son GUID, Unity n’a pas à réimporter ou tout relinker."
    },
    {
        id: "asset-pro-8",
        category: "Asset Management",
        level: "pro",
        question: "Quelle propriété dans l’Asset Importer permet d’optimiser la mémoire d’une texture pour mobile ?",
        options: [
            "Format de compression (par exemple ETC pour Android)",
            "Renommer le fichier",
            "Activer 'Read/Write Enabled'",
            "Changer le dossier d’asset"
        ],
        correctAnswer: 0,
        explanation: "Le choix du format de compression (ETC, ASTC, PVRTC…) est crucial pour optimiser la mémoire sur mobile."
    },
    {
        id: "asset-pro-9",
        category: "Asset Management",
        level: "pro",
        question: "Quel est l’effet de 'Read/Write Enabled' sur une texture importée ?",
        options: [
            "Permet l’accès/modification du contenu en script, mais augmente la consommation mémoire",
            "Améliore la compression",
            "Oblige le passage en HDR",
            "Active le mipmapping"
        ],
        correctAnswer: 0,
        explanation: "Read/Write Enabled : deux copies mémoire, utile seulement si modification à runtime (sinon, à désactiver)."
    },
    {
        id: "asset-pro-10",
        category: "Asset Management",
        level: "pro",
        question: "Que se passe-t-il si vous supprimez accidentellement un .meta et poussez sur le repo ?",
        options: [
            "Unity crée un nouveau GUID, ce qui casse tous les liens/references d’asset",
            "Unity restaure automatiquement le .meta",
            "Les textures disparaissent seulement de la scène",
            "Aucun impact"
        ],
        correctAnswer: 0,
        explanation: "Un .meta manquant = Unity en recrée un = GUID différent = toutes les références sont cassées."
    },
    {
        id: "asset-pro-11",
        category: "Asset Management",
        level: "pro",
        question: "Qu'est-ce qu'une dépendance d’asset ?",
        options: [
            "Un asset qui en référence un autre (ex: prefab qui utilise un matériel, un script, etc.)",
            "Un dossier qui contient un asset",
            "Un script qui n’est pas utilisé",
            "Une texture compressée"
        ],
        correctAnswer: 0,
        explanation: "Une dépendance = un asset référencé par un autre, géré par le système de meta GUID."
    },
    {
        id: "asset-pro-12",
        category: "Asset Management",
        level: "pro",
        question: "Comment l’outil 'Profiler' peut-il aider à l’optimisation d’un projet lié aux assets ?",
        options: [
            "Repérer les pics de mémoire liés à des assets mal déchargés ou trop volumineux",
            "Changer la compression d’un asset",
            "Renommer les assets à la volée",
            "Modifier le script C# d’un asset"
        ],
        correctAnswer: 0,
        explanation: "Le Profiler permet de voir l’impact de chaque asset (textures, audio, mesh) sur la mémoire/CPU."
    },
    {
        id: "asset-pro-13",
        category: "Asset Management",
        level: "pro",
        question: "Quelle solution permet de réduire la taille d’un build Unity causée par trop d’assets embarqués ?",
        options: [
            "Supprimer les assets inutilisés ou utiliser les Addressables pour charger à la demande",
            "Activer le 'Read/Write' sur toutes les textures",
            "Renommer les assets",
            "Passer en HDR"
        ],
        correctAnswer: 0,
        explanation: "Moins d’assets inutiles = plus petit build. Les Addressables permettent d’externaliser et charger à la demande."
    },
    {
        id: "asset-pro-14",
        category: "Asset Management",
        level: "pro",
        question: "Quel est le rôle d’un 'AssetDatabase.Refresh()' dans un script d’outil éditeur ?",
        options: [
            "Forcer Unity à rescanner tous les assets et mettre à jour la base",
            "Réinitialiser le dossier Library",
            "Compresser les textures",
            "Créer un .meta"
        ],
        correctAnswer: 0,
        explanation: "AssetDatabase.Refresh() (API Editor) force Unity à prendre en compte tous les changements d’assets."
    },
    {
        id: "asset-pro-15",
        category: "Asset Management",
        level: "pro",
        question: "Quel format d’asset Unity est utilisé pour les ressources de configuration partagée (paramètres, tables…) ?",
        options: [
            "ScriptableObject",
            "MonoBehaviour",
            "Prefab",
            "Texture2D"
        ],
        correctAnswer: 0,
        explanation: "Les ScriptableObjects servent de containers de data partagée/config (tables, settings, configs)."
    },
    {
        id: "asset-pro-16",
        category: "Asset Management",
        level: "pro",
        question: "Quelle pratique est à éviter avec les assets volumineux (textures 4K, mesh lourds) ?",
        options: [
            "Les stocker sans compression et sans mipmaps",
            "Les importer via le Store",
            "Les utiliser dans un prefab",
            "Les déplacer dans un dossier"
        ],
        correctAnswer: 0,
        explanation: "Des assets lourds sans compression ni mipmaps = explosion mémoire/perf."
    },
    {
        id: "asset-pro-17",
        category: "Asset Management",
        level: "pro",
        question: "Quel outil permet de voir quelles scènes utilisent un asset précis ?",
        options: [
            "L’outil 'Find References In Scene' (clic droit dans Project)",
            "La console",
            "Le Build Settings",
            "Le Profiler"
        ],
        correctAnswer: 0,
        explanation: "Clic droit > Find References In Scene montre où l’asset est utilisé."
    },
    {
        id: "asset-pro-18",
        category: "Asset Management",
        level: "pro",
        question: "Que signifie l’erreur 'Missing Prefab' dans une scène ?",
        options: [
            "Le prefab référencé a été supprimé ou déplacé sans update du lien",
            "Le script C# n’existe plus",
            "Il manque une texture",
            "Le build a échoué"
        ],
        correctAnswer: 0,
        explanation: "'Missing Prefab' = référence cassée : prefab déplacé/supprimé, lien perdu."
    },
    {
        id: "asset-pro-19",
        category: "Asset Management",
        level: "pro",
        question: "Quelle propriété d’un prefab est conservée lors d’une modification sur une instance en scène ?",
        options: [
            "Les 'overrides' explicitement modifiés sur l’instance",
            "Tous les composants",
            "Uniquement le transform",
            "Aucune, tout est perdu"
        ],
        correctAnswer: 0,
        explanation: "Seules les valeurs modifiées sur l’instance (overrides) restent, le reste suit le prefab d’origine."
    },
    {
        id: "asset-pro-20",
        category: "Asset Management",
        level: "pro",
        question: "Comment Unity gère-t-il les références d’assets lors d’un build multiplateforme (iOS/Android/PC) ?",
        options: [
            "Il convertit/comprime les assets au format optimal selon la plateforme buildée",
            "Il utilise le même format partout",
            "Il laisse les assets en brut",
            "Il ne fait aucune conversion"
        ],
        correctAnswer: 0,
        explanation: "Au build, Unity ajuste la compression/format de chaque asset selon la cible (texture, mesh, audio, etc)."
    },
    {
        id: "asset-expert-1",
        category: "Asset Management",
        level: "expert",
        question: "Quel est le principal risque à référencer un asset de type ScriptableObject dans un AssetBundle ou Addressable destiné à être déchargé dynamiquement ?",
        options: [
            "Références nulles ou erreurs runtime si l’asset est déchargé alors que d’autres objets l’utilisent encore",
            "Le ScriptableObject disparaît de l’Inspector",
            "Les scènes sont supprimées",
            "Aucun risque, Unity gère tout automatiquement"
        ],
        correctAnswer: 0,
        explanation: "Si un ScriptableObject est déchargé alors qu'il est utilisé, toute référence provoque NullReferenceException. Gestion manuelle impérative."
    },
    {
        id: "asset-expert-2",
        category: "Asset Management",
        level: "expert",
        question: "Pourquoi est-il déconseillé de dupliquer des textures partagées dans plusieurs AssetBundles ?",
        options: [
            "La texture sera chargée en double en mémoire, explosant la RAM à runtime",
            "Unity fusionne automatiquement les textures",
            "Le build échoue",
            "Les GUID changent"
        ],
        correctAnswer: 0,
        explanation: "Chaque bundle possède sa copie : duplication mémoire, waste, crash sur mobile/tablette si non maîtrisé."
    },
    {
        id: "asset-expert-3",
        category: "Asset Management",
        level: "expert",
        question: "Quel est le problème des 'circular dependencies' entre Addressables ou AssetBundles ?",
        options: [
            "Peut entraîner des cycles de chargement infinis ou des leaks mémoire",
            "Ne pose aucun souci",
            "Cela bloque la compilation",
            "Les assets deviennent en lecture seule"
        ],
        correctAnswer: 0,
        explanation: "Les cycles de dépendance sont le cauchemar du pipeline asset, peuvent bloquer chargement/déchargement propre, générer des leaks, et sont difficiles à debugger."
    },
    {
        id: "asset-expert-4",
        category: "Asset Management",
        level: "expert",
        question: "Comment garantir que deux builds différents partagent une base d’assets (textures, scripts, data) sans risque de corruption ou mismatch ?",
        options: [
            "Externaliser ces assets dans un bundle partagé versionné, référencé depuis chaque build",
            "Utiliser Resources",
            "Copier/coller les assets dans chaque projet",
            "Changer les GUID manuellement"
        ],
        correctAnswer: 0,
        explanation: "L’approche pro : bundle partagé, versionné, géré avec un pipeline CI/CD et signature d’intégrité si critique."
    },
    {
        id: "asset-expert-5",
        category: "Asset Management",
        level: "expert",
        question: "Pourquoi certains assets restent-ils en mémoire même après un appel explicite à Resources.UnloadUnusedAssets() ?",
        options: [
            "Ils sont toujours référencés, explicitement ou implicitement, par un objet en mémoire",
            "Il faut relancer l’éditeur",
            "Le build est corrompu",
            "La texture est compressée"
        ],
        correctAnswer: 0,
        explanation: "Si un asset est référencé (même indirectement), Unity ne peut pas le libérer, même avec UnloadUnusedAssets()."
    },
    {
        id: "asset-expert-6",
        category: "Asset Management",
        level: "expert",
        question: "Comment traquer une fuite mémoire asset (texture, mesh, audio) survenant après un cycle scène > déchargement > nouvelle scène ?",
        options: [
            "Profiler Memory + capture de snapshot avant/après, recherche des objets toujours présents",
            "Changer les GUID",
            "Effacer Library",
            "Activer le mode production"
        ],
        correctAnswer: 0,
        explanation: "Profiler Memory, snapshot avant/après, différence = leak. Analyse des liens/références pour identifier la source."
    },
    {
        id: "asset-expert-7",
        category: "Asset Management",
        level: "expert",
        question: "Quelle méthode garantit l’intégrité des liens d’assets lors d’une migration ou restructuration de projet Unity ?",
        options: [
            "Toujours déplacer les assets via l’éditeur Unity pour que les .meta suivent et gardent leurs GUID",
            "Renommer les dossiers dans l’OS",
            "Supprimer les .meta",
            "Utiliser exclusivement Resources"
        ],
        correctAnswer: 0,
        explanation: "Seul l’éditeur maintient les GUID et liens : déplacer dans le Finder/Explorer casse tout."
    },
    {
        id: "asset-expert-8",
        category: "Asset Management",
        level: "expert",
        question: "Comment éviter que des assets inutilisés grossissent le build final lors de refactorings massifs ?",
        options: [
            "Lancer un build report, analyser les assets embarqués, supprimer ceux non utilisés",
            "Changer les GUID",
            "Réinitialiser le cache Library",
            "Tout passer en Read/Write"
        ],
        correctAnswer: 0,
        explanation: "Build report = assets présents dans le build. Purge tout ce qui ne sert plus, ça économise vite plusieurs dizaines de Mo."
    },
    {
        id: "asset-expert-9",
        category: "Asset Management",
        level: "expert",
        question: "Pourquoi est-il dangereux d’utiliser une logique d’override prefab mal maîtrisée dans des scènes de production ?",
        options: [
            "Un override mal reset = comportement inattendu ou bug subtil à l’exécution",
            "Les scripts disparaissent",
            "Le prefab n’est plus accessible dans l’Inspector",
            "Unity refuse de lancer la scène"
        ],
        correctAnswer: 0,
        explanation: "Overrides = modifications locales. Si on oublie de les reset ou de les valider, bug subtil à runtime, effet papillon en prod."
    },
    {
        id: "asset-expert-10",
        category: "Asset Management",
        level: "expert",
        question: "Quel pattern architecture permet une mise à jour sans patch de la data de configuration utilisée par plusieurs builds Unity déployés ?",
        options: [
            "Utiliser des ScriptableObjects ou JSON externes chargés dynamiquement (via Addressables, web, etc.)",
            "Compiler en dur tous les assets",
            "Tout passer dans Resources",
            "N’utiliser que des PlayerPrefs"
        ],
        correctAnswer: 0,
        explanation: "Data/config = ScriptableObject/JSON séparé, update via Addressables, sans rebuild de l’appli."
    },
    {
        id: "asset-expert-11",
        category: "Asset Management",
        level: "expert",
        question: "Que permet l’option 'Force Text' dans Project Settings > Editor ?",
        options: [
            "Sauver tous les assets Unity au format texte pour les diff/merge dans un VCS",
            "Forcer la compilation en mode debug",
            "Compresser les textures",
            "Changer les GUID des assets"
        ],
        correctAnswer: 0,
        explanation: "'Force Text' rend les fichiers .unity/.prefab lisibles et mergeables (git/svn) : pratique pro obligatoire en équipe."
    },
    {
        id: "asset-expert-12",
        category: "Asset Management",
        level: "expert",
        question: "Pourquoi Unity ne peut pas toujours optimiser automatiquement les duplicatas d’assets dans un build (ex: textures dupliquées) ?",
        options: [
            "Les assets avec GUID différents ou modifiés dans plusieurs bundles sont vus comme distincts",
            "Unity fusionne tout automatiquement",
            "C’est un bug de la version LTS",
            "Les assets doivent être compressés en ZIP"
        ],
        correctAnswer: 0,
        explanation: "Même asset, GUID distinct ou modif = plusieurs copies dans le build, aucune détection automatique fiable possible."
    },
    {
        id: "asset-expert-13",
        category: "Asset Management",
        level: "expert",
        question: "Quel pipeline permet de garantir la livraison d’un DLC (nouvelles scènes/assets) sans repack du jeu principal ?",
        options: [
            "DLC en Addressables/AssetBundles hébergés, chargés dynamiquement par la version live",
            "Tout compiler à l’avance dans le build principal",
            "Utiliser uniquement Resources",
            "Remplacer le dossier Library"
        ],
        correctAnswer: 0,
        explanation: "Un vrai pipeline pro isole les DLC (Addressables/AssetBundle) téléchargeables ou updatables sans rebuild complet."
    },
    {
        id: "asset-expert-14",
        category: "Asset Management",
        level: "expert",
        question: "Quel problème majeur Unity peut-il rencontrer lors de la migration d’un projet URP/HDRP entre différentes versions de l’éditeur ?",
        options: [
            "Certains assets natifs (shaders, matériaux) deviennent incompatibles ou nécessitent une réimportation/fix",
            "Les GUID changent systématiquement",
            "Les prefabs sont effacés",
            "Les scènes sont supprimées"
        ],
        correctAnswer: 0,
        explanation: "Les assets natifs pipeline dépendent des versions, certaines fonctionnalités deviennent non compatibles."
    },
    {
        id: "asset-expert-15",
        category: "Asset Management",
        level: "expert",
        question: "Quel signal dans un Build Report doit alerter sur un problème de gestion asset ?",
        options: [
            "Assets dupliqués, assets volumineux, assets inclus alors qu’ils ne devraient pas l’être",
            "Temps de compilation élevé",
            "GUIDs modifiés",
            "Assets en lecture seule"
        ],
        correctAnswer: 0,
        explanation: "Build report : chercher duplicata, taille, présence inattendue d’assets dans le build."
    },
    {
        id: "asset-expert-16",
        category: "Asset Management",
        level: "expert",
        question: "Comment Unity gère-t-il la migration d’un asset utilisé dans un Addressable si le groupe change de paramètres (compression, chemin) ?",
        options: [
            "Il doit re-baker le bundle/groupe concerné, tous les liens restent via GUID mais le hash change",
            "Le projet échoue à la compilation",
            "Il perd le lien avec la scène",
            "Les .meta sont effacés"
        ],
        correctAnswer: 0,
        explanation: "Un changement de settings d’un groupe Addressable nécessite un re-bake pour prendre en compte les modifs, les GUID restent valides mais le bundle est différent."
    },
    {
        id: "asset-expert-17",
        category: "Asset Management",
        level: "expert",
        question: "Que risque-t-on à exporter/importer des assets d’un projet Unity à un autre en oubliant les fichiers .meta ?",
        options: [
            "Perte de GUID, toutes les références sont cassées (matériaux, prefabs, scripts, etc.)",
            "Les shaders ne se compilent plus",
            "Les assets deviennent en lecture seule",
            "Le projet plante à l’ouverture"
        ],
        correctAnswer: 0,
        explanation: "Sans .meta = nouveau GUID = toutes les références perdues. Erreur de junior."
    },
    {
        id: "asset-expert-18",
        category: "Asset Management",
        level: "expert",
        question: "Quelle stratégie permet d’optimiser la réutilisation des textures partagées dans plusieurs bundles sans duplication mémoire ?",
        options: [
            "Créer un bundle ou Addressable partagé contenant les assets communs et référencé par les autres groupes",
            "Tout mettre dans Resources",
            "Changer les GUID à la main",
            "Compresser les textures"
        ],
        correctAnswer: 0,
        explanation: "Bundle partagé = une seule instance mémoire, utilisé partout où nécessaire, aucun doublon à la charge."
    },
    {
        id: "asset-expert-19",
        category: "Asset Management",
        level: "expert",
        question: "Pourquoi est-il critique de documenter précisément la structure et les conventions d’asset dans un projet Unity pro ?",
        options: [
            "Pour permettre l’onboarding, éviter les erreurs et accélérer la maintenance/collaboration",
            "Pour augmenter la compression",
            "Pour réduire le temps de build",
            "Pour empêcher les bugs"
        ],
        correctAnswer: 0,
        explanation: "Sans doc, c’est l’enfer en équipe. Structure claire : onboarding rapide, erreurs évitées, maintenance pro."
    },
    {
        id: "asset-expert-20",
        category: "Asset Management",
        level: "expert",
        question: "Quel cas nécessite un nettoyage du dossier Library et une réimportation complète des assets ?",
        options: [
            "Migration de Unity majeure, corruption du cache, incohérence persistante d’import ou d’affichage",
            "À chaque build",
            "Après chaque push Git",
            "À chaque import de texture"
        ],
        correctAnswer: 0,
        explanation: "Réimport complet (delete Library) : uniquement si migration majeure, cache corrompu ou bug asset inexplicable."
    },
    

// Lighting/Rendering
    {
        id: "light-user-1",
        category: "Lighting/Rendering",
        level: "user",
        question: "Quel composant est nécessaire pour qu’un objet soit visible par la caméra dans Unity ?",
        options: [
            "Un Renderer (MeshRenderer ou SpriteRenderer)",
            "Un Rigidbody",
            "Un Collider",
            "Un Animator"
        ],
        correctAnswer: 0,
        explanation: "Sans Renderer, l’objet ne sera jamais affiché, peu importe sa présence dans la scène."
    },
    {
        id: "light-user-2",
        category: "Lighting/Rendering",
        level: "user",
        question: "Quel type d’éclairage éclaire dans toutes les directions à partir d’un point donné ?",
        options: [
            "Point Light",
            "Directional Light",
            "Spot Light",
            "Area Light"
        ],
        correctAnswer: 0,
        explanation: "La Point Light émet de la lumière de façon sphérique autour d’elle."
    },
    {
        id: "light-user-3",
        category: "Lighting/Rendering",
        level: "user",
        question: "Quelle propriété contrôle la couleur de la lumière émise par une Light dans Unity ?",
        options: [
            "Color",
            "Intensity",
            "Range",
            "Spot Angle"
        ],
        correctAnswer: 0,
        explanation: "La propriété 'Color' permet de choisir la teinte de la lumière."
    },
    {
        id: "light-user-4",
        category: "Lighting/Rendering",
        level: "user",
        question: "Quel composant est utilisé pour afficher une image ou une texture sur un objet 3D ?",
        options: [
            "Material",
            "Rigidbody",
            "Collider",
            "ScriptableObject"
        ],
        correctAnswer: 0,
        explanation: "Un Material applique une texture, une couleur ou un shader à un objet."
    },
    {
        id: "light-user-5",
        category: "Lighting/Rendering",
        level: "user",
        question: "Quel type de lumière simule le soleil dans Unity ?",
        options: [
            "Directional Light",
            "Point Light",
            "Spot Light",
            "Area Light"
        ],
        correctAnswer: 0,
        explanation: "La Directional Light simule le soleil ou toute lumière très lointaine."
    },
    {
        id: "light-user-6",
        category: "Lighting/Rendering",
        level: "user",
        question: "À quoi sert la propriété 'Intensity' sur une Light ?",
        options: [
            "Ajuster la puissance/force de la lumière",
            "Changer la direction de la lumière",
            "Modifier la couleur du matériau",
            "Changer la taille de l’objet"
        ],
        correctAnswer: 0,
        explanation: "L’intensité règle la puissance lumineuse émise."
    },
    {
        id: "light-user-7",
        category: "Lighting/Rendering",
        level: "user",
        question: "Dans l’onglet Lighting, à quoi sert le bouton 'Generate Lighting' ?",
        options: [
            "Calculer l’éclairage statique (baked)",
            "Générer des textures",
            "Créer des nouveaux matériaux",
            "Lancer le jeu"
        ],
        correctAnswer: 0,
        explanation: "Ce bouton lance le baking de l’éclairage, utile pour l’éclairage statique."
    },
    {
        id: "light-user-8",
        category: "Lighting/Rendering",
        level: "user",
        question: "Comment faire en sorte qu’un objet soit affecté par la lumière mais ne projette pas d’ombre ?",
        options: [
            "Définir 'Cast Shadows' sur 'Off' dans le MeshRenderer",
            "Changer la couleur du matériau",
            "Désactiver la lumière",
            "Décocher 'Receive Shadows'"
        ],
        correctAnswer: 0,
        explanation: "L’option 'Cast Shadows' permet de désactiver la projection d’ombres pour l’objet."
    },
    {
        id: "light-user-9",
        category: "Lighting/Rendering",
        level: "user",
        question: "Quel pipeline de rendu est le plus utilisé par défaut dans Unity pour un nouveau projet 3D classique (2022+) ?",
        options: [
            "Universal Render Pipeline (URP)",
            "Built-in Render Pipeline",
            "High Definition Render Pipeline (HDRP)",
            "Mobile Render Pipeline"
        ],
        correctAnswer: 0,
        explanation: "Depuis Unity 2021+, URP tend à être proposé comme pipeline par défaut pour la plupart des templates 3D."
    },
    {
        id: "light-user-10",
        category: "Lighting/Rendering",
        level: "user",
        question: "Quel outil permet d’avoir un aperçu en temps réel des effets d’éclairage et de rendu pendant l’édition d’une scène ?",
        options: [
            "Game View et Scene View",
            "Profiler",
            "Animator",
            "Hierarchy"
        ],
        correctAnswer: 0,
        explanation: "Les vues Game et Scene affichent le rendu final avec les effets de lumière appliqués."
    },
    {
        id: "light-user-11",
        category: "Lighting/Rendering",
        level: "user",
        question: "Quelle option du MeshRenderer permet de recevoir des ombres des autres objets ?",
        options: [
            "'Receive Shadows'",
            "'Lightmap Static'",
            "'Reflection Probe'",
            "'Motion Vectors'"
        ],
        correctAnswer: 0,
        explanation: "C’est l’option 'Receive Shadows' qui autorise la réception d’ombres."
    },
    {
        id: "light-user-12",
        category: "Lighting/Rendering",
        level: "user",
        question: "Pour avoir un ciel réaliste dans Unity, quel objet ou système faut-il généralement utiliser ?",
        options: [
            "Skybox",
            "Billboard",
            "Directional Light",
            "SpriteRenderer"
        ],
        correctAnswer: 0,
        explanation: "Une Skybox est utilisée pour afficher un ciel ou un environnement distant autour de la scène."
    },
    {
        id: "light-user-13",
        category: "Lighting/Rendering",
        level: "user",
        question: "Qu'est-ce qu'un 'Material' dans Unity ?",
        options: [
            "Un composant qui définit comment un objet réagit à la lumière et aux textures",
            "Un script qui contrôle la physique",
            "Un composant qui gère l’audio",
            "Un objet de caméra"
        ],
        correctAnswer: 0,
        explanation: "Le Material gère la couleur, la texture, la réflexion, la transparence, etc."
    },
    {
        id: "light-user-14",
        category: "Lighting/Rendering",
        level: "user",
        question: "À quoi sert la propriété 'Range' sur une Point Light ?",
        options: [
            "Déterminer la distance maximale d’effet de la lumière",
            "Changer la couleur",
            "Ajuster l’orientation",
            "Modifier le canal audio"
        ],
        correctAnswer: 0,
        explanation: "‘Range’ limite la portée d’une Point Light."
    },
    {
        id: "light-user-15",
        category: "Lighting/Rendering",
        level: "user",
        question: "Comment ajouter une lumière à une scène Unity ?",
        options: [
            "GameObject > Light > [Type de lumière]",
            "Component > Renderer > Add Light",
            "Window > Lighting > Add Light",
            "Assets > Create > Light"
        ],
        correctAnswer: 0,
        explanation: "Menu GameObject > Light > [Type] permet d’ajouter une lumière dans la scène."
    },
    {
        id: "light-user-16",
        category: "Lighting/Rendering",
        level: "user",
        question: "Quel élément contrôle l’angle d’ouverture d’une Spot Light ?",
        options: [
            "'Spot Angle'",
            "'Intensity'",
            "'Range'",
            "'Blend'"
        ],
        correctAnswer: 0,
        explanation: "La propriété 'Spot Angle' détermine l’angle du cône lumineux d’une Spot Light."
    },
    {
        id: "light-user-17",
        category: "Lighting/Rendering",
        level: "user",
        question: "Quel outil permet de voir la scène sous différents éclairages sans relancer le jeu ?",
        options: [
            "Lighting Settings et Scene View",
            "Build Settings",
            "Inspector",
            "Animator"
        ],
        correctAnswer: 0,
        explanation: "Lighting Settings + Scene View permettent de tester différentes ambiances d’éclairage à la volée."
    },
    {
        id: "light-user-18",
        category: "Lighting/Rendering",
        level: "user",
        question: "Quel est le but du 'Baked Lighting' dans Unity ?",
        options: [
            "Calculer et stocker l’éclairage statique pour de meilleures performances",
            "Ajouter plus de lumière dynamique",
            "Augmenter la qualité audio",
            "Gérer le code C#"
        ],
        correctAnswer: 0,
        explanation: "Le 'Baked Lighting' fige l’éclairage statique pour soulager le CPU/GPU à l’exécution."
    },
    {
        id: "light-user-19",
        category: "Lighting/Rendering",
        level: "user",
        question: "Quelle propriété d’une Directional Light permet de simuler le passage du temps (jour/nuit) ?",
        options: [
            "'Rotation'",
            "'Intensity'",
            "'Shadow Type'",
            "'Color'"
        ],
        correctAnswer: 0,
        explanation: "Faire tourner la Directional Light change la direction du soleil, donc la simulation du jour/nuit."
    },
    {
        id: "light-user-20",
        category: "Lighting/Rendering",
        level: "user",
        question: "Comment s’appelle la technique de calcul d’ombres où les ombres sont recalculées en temps réel pour les objets en mouvement ?",
        options: [
            "Shadows dynamiques (Realtime Shadows)",
            "Baked Shadows",
            "Occlusion Culling",
            "Lightmap UV"
        ],
        correctAnswer: 0,
        explanation: "Les ombres dynamiques sont calculées à la volée pour les objets et lumières en mouvement."
    },
    {
        id: "light-pro-1",
        category: "Lighting/Rendering",
        level: "pro",
        question: "Quelle différence majeure entre 'Baked' et 'Realtime' Lighting dans Unity ?",
        options: [
            "Baked calcule l’éclairage à l’avance, Realtime en temps réel pendant le jeu",
            "Baked gère l’audio, Realtime gère la physique",
            "Baked fonctionne uniquement en 2D",
            "Il n’y a aucune différence"
        ],
        correctAnswer: 0,
        explanation: "Le Baked Lighting améliore les performances mais ne s’adapte pas aux objets dynamiques."
    },
    {
        id: "light-pro-2",
        category: "Lighting/Rendering",
        level: "pro",
        question: "Quel composant Unity permet de générer des reflets en temps réel sur les surfaces ?",
        options: [
            "Reflection Probe",
            "Collider",
            "Animator",
            "Lens Flare"
        ],
        correctAnswer: 0,
        explanation: "Les Reflection Probes créent des reflets dynamiques ou statiques sur les matériaux réfléchissants."
    },
    {
        id: "light-pro-3",
        category: "Lighting/Rendering",
        level: "pro",
        question: "Quel pipeline de rendu Unity est le plus adapté pour un projet mobile performant avec un éclairage dynamique simple ?",
        options: [
            "Universal Render Pipeline (URP)",
            "Built-in Render Pipeline",
            "High Definition Render Pipeline (HDRP)",
            "Custom Scripted Pipeline"
        ],
        correctAnswer: 0,
        explanation: "URP offre un bon équilibre perf/qualité, optimisé pour le mobile et la VR."
    },
    {
        id: "light-pro-4",
        category: "Lighting/Rendering",
        level: "pro",
        question: "Comment empêcher un objet spécifique de recevoir l’éclairage d’une lumière particulière ?",
        options: [
            "Configurer le Layer de la lumière et de l’objet, et utiliser le Culling Mask de la lumière",
            "Changer le matériau en noir",
            "Décocher 'Receive Shadows'",
            "Déplacer l’objet en dehors de la scène"
        ],
        correctAnswer: 0,
        explanation: "Le Culling Mask filtre les layers affectés par chaque lumière."
    },
    {
        id: "light-pro-5",
        category: "Lighting/Rendering",
        level: "pro",
        question: "Quelle option dans Lighting Settings permet de réduire l’effet de grain ou de bruit dans les ombres d’une lightmap ?",
        options: [
            "Augmenter le nombre de Samples",
            "Réduire l’Intensity",
            "Diminuer la Range",
            "Changer la Skybox"
        ],
        correctAnswer: 0,
        explanation: "Plus de samples = ombres plus douces et moins bruitées dans les lightmaps."
    },
    {
        id: "light-pro-6",
        category: "Lighting/Rendering",
        level: "pro",
        question: "Qu’est-ce qu’un 'Emissive Material' dans Unity ?",
        options: [
            "Un matériau qui émet de la lumière sans source Light réelle",
            "Un matériau qui change de couleur",
            "Un matériau qui gère la physique",
            "Un matériau réservé aux caméras"
        ],
        correctAnswer: 0,
        explanation: "L’émission ajoute une couleur qui apparaît même sans éclairage direct."
    },
    {
        id: "light-pro-7",
        category: "Lighting/Rendering",
        level: "pro",
        question: "Quelle fonctionnalité permet de simuler l’éclairage global (lumière indirecte rebondissante) dans Unity ?",
        options: [
            "Global Illumination (GI)",
            "Local Reflection",
            "Sprite Mask",
            "Depth of Field"
        ],
        correctAnswer: 0,
        explanation: "La GI simule la lumière indirecte rebondie sur les surfaces."
    },
    {
        id: "light-pro-8",
        category: "Lighting/Rendering",
        level: "pro",
        question: "Pour éviter les artefacts d’ombre projetée à travers les murs, que doit-on ajuster sur une Directional Light ?",
        options: [
            "Shadow Bias",
            "Spot Angle",
            "Intensity",
            "Lightmap Resolution"
        ],
        correctAnswer: 0,
        explanation: "Le Shadow Bias corrige le décalage des ombres pour éviter qu’elles ne 'traversent' les objets fins."
    },
    {
        id: "light-pro-9",
        category: "Lighting/Rendering",
        level: "pro",
        question: "Dans URP/HDRP, que permet un 'Post-Processing Volume' ?",
        options: [
            "Appliquer des effets visuels sur la caméra comme Bloom, Tonemapping, etc.",
            "Changer le mesh d’un objet",
            "Gérer l’animation",
            "Ajouter des lumières"
        ],
        correctAnswer: 0,
        explanation: "Un Post-Processing Volume définit des effets globaux ou locaux sur le rendu final."
    },
    {
        id: "light-pro-10",
        category: "Lighting/Rendering",
        level: "pro",
        question: "Quelle technique est la plus efficace pour limiter le coût GPU des ombres en temps réel sur mobile ?",
        options: [
            "Limiter le nombre de lumières en mode Realtime avec Shadow activé",
            "Mettre toutes les lumières en mode Baked",
            "Augmenter la résolution des ombres",
            "Utiliser uniquement des Directional Lights"
        ],
        correctAnswer: 0,
        explanation: "Trop de lumières avec des ombres dynamiques tue la perf sur mobile : il faut réduire ce nombre."
    },
    {
        id: "light-pro-11",
        category: "Lighting/Rendering",
        level: "pro",
        question: "Quel outil permet de mesurer l’impact d’une scène sur les performances du rendu en temps réel ?",
        options: [
            "Profiler",
            "Animator",
            "Inspector",
            "Lighting Window"
        ],
        correctAnswer: 0,
        explanation: "Le Profiler affiche le coût CPU/GPU de chaque composant et effet de la scène."
    },
    {
        id: "light-pro-12",
        category: "Lighting/Rendering",
        level: "pro",
        question: "Quel type de shader faut-il privilégier pour un effet de transparence performant en URP ?",
        options: [
            "Shader Unlit ou 'Transparent'",
            "Standard (Opaque)",
            "Surface Shader (Legacy)",
            "Shader Particle Additive"
        ],
        correctAnswer: 0,
        explanation: "Les shaders Unlit ou Transparent sont moins coûteux pour l’affichage d’éléments semi-transparents."
    },
    {
        id: "light-pro-13",
        category: "Lighting/Rendering",
        level: "pro",
        question: "Pourquoi faut-il faire attention à l’usage excessif du Bloom en post-processing ?",
        options: [
            "Peut dégrader la lisibilité, fausser les couleurs, et impacter fortement les performances",
            "Empêche le jeu de compiler",
            "Désactive les Reflections Probes",
            "Bloque le son"
        ],
        correctAnswer: 0,
        explanation: "Le Bloom est gourmand et altère facilement la perception visuelle."
    },
    {
        id: "light-pro-14",
        category: "Lighting/Rendering",
        level: "pro",
        question: "Comment rendre visible une lumière à la caméra (pour simuler une ampoule) ?",
        options: [
            "Ajouter un Lens Flare ou un Mesh lumineux",
            "Monter l’intensité à 10 000",
            "Changer la Skybox",
            "Mettre l’objet dans un autre layer"
        ],
        correctAnswer: 0,
        explanation: "Le Lens Flare ou un objet Mesh avec matériau émissif permet de rendre la source visible."
    },
    {
        id: "light-pro-15",
        category: "Lighting/Rendering",
        level: "pro",
        question: "À quoi sert la propriété 'Ambient Color' dans Lighting Settings ?",
        options: [
            "Définir la couleur de la lumière ambiante diffuse sur toute la scène",
            "Changer la couleur du ciel",
            "Définir la couleur du sol",
            "Ajuster la résolution des textures"
        ],
        correctAnswer: 0,
        explanation: "L’Ambient Color colore tous les objets même sans lumière directe."
    },
    {
        id: "light-pro-16",
        category: "Lighting/Rendering",
        level: "pro",
        question: "Comment appliquer un effet de déformation de la lumière (ex : effet de chaleur/flamme) sur la caméra ?",
        options: [
            "Avec un effet Post-Processing de Distortion ou Custom Shader sur un Volume",
            "Ajouter un Collider",
            "Changer le mode d’éclairage de la scène",
            "Modifier la couleur de la Directional Light"
        ],
        correctAnswer: 0,
        explanation: "Un effet custom dans le pipeline de post-process ou un shader fait l’affaire."
    },
    {
        id: "light-pro-17",
        category: "Lighting/Rendering",
        level: "pro",
        question: "Pourquoi utiliser une 'Light Probe Group' dans une scène ?",
        options: [
            "Améliorer l’éclairage indirect sur les objets dynamiques",
            "Optimiser le son 3D",
            "Réduire la taille du build",
            "Gérer les collisions"
        ],
        correctAnswer: 0,
        explanation: "Les Light Probes permettent aux objets mobiles de bénéficier d’un éclairage global."
    },
    {
        id: "light-pro-18",
        category: "Lighting/Rendering",
        level: "pro",
        question: "Dans une Skybox, que permet l’option 'Exposure' ?",
        options: [
            "Ajuster la luminosité globale de la Skybox",
            "Changer le modèle de nuages",
            "Modifier la distance de clipping",
            "Régler la position du soleil"
        ],
        correctAnswer: 0,
        explanation: "Exposure rend la Skybox plus ou moins lumineuse, utile pour le matching de l’éclairage."
    },
    {
        id: "light-pro-19",
        category: "Lighting/Rendering",
        level: "pro",
        question: "Quel format de texture doit-on éviter pour les maps de lightmaps pour garantir la qualité sur toutes les plateformes ?",
        options: [
            "Format compressé avec perte (ex: DXT1/BC1)",
            "Format RGBA32",
            "Format HDR",
            "Format PNG"
        ],
        correctAnswer: 0,
        explanation: "La compression avec perte peut introduire des artéfacts de couleur et d’ombre dans les lightmaps."
    },
    {
        id: "light-pro-20",
        category: "Lighting/Rendering",
        level: "pro",
        question: "Quel est l’intérêt du 'Deferred Rendering' par rapport au 'Forward Rendering' ?",
        options: [
            "Gérer plus de lumières dynamiques efficacement",
            "Réduire la taille des builds",
            "Améliorer l’audio",
            "Créer des scripts plus rapides"
        ],
        correctAnswer: 0,
        explanation: "Le rendu différé (deferred) permet de gérer bien plus de lumières que le forward, surtout pour les effets complexes."
    },
    {
        id: "light-expert-1",
        category: "Lighting/Rendering",
        level: "expert",
        question: "Dans le pipeline HDRP, comment optimiser le coût des effets volumétriques comme le fog et la volumetric lighting sur une grande scène ?",
        options: [
            "Réduire la résolution du volumetric buffer et limiter les lights volumétriques dynamiques",
            "Activer toutes les options volumétriques par défaut",
            "Mettre toutes les lumières en mode Baked",
            "Désactiver le post-processing"
        ],
        correctAnswer: 0,
        explanation: "Plus la résolution volumétrique et le nombre de lights volumétriques sont élevés, plus le coût GPU explose."
    },
    {
        id: "light-expert-2",
        category: "Lighting/Rendering",
        level: "expert",
        question: "Qu’est-ce qu’un 'Lightmap UV Overlap' et pourquoi doit-on l’éviter absolument ?",
        options: [
            "C’est un chevauchement des coordonnées UV de lightmap, qui provoque des artefacts de lumière sur plusieurs meshes",
            "C’est une optimisation pour réduire la taille des textures",
            "Cela améliore le baking des lightmaps",
            "Cela optimise l’utilisation du GPU"
        ],
        correctAnswer: 0,
        explanation: "Les overlaps UV créent des tâches d’éclairage incohérentes entre meshes."
    },
    {
        id: "light-expert-3",
        category: "Lighting/Rendering",
        level: "expert",
        question: "Dans une scène URP, quel est le coût principal de l’utilisation massive de materials avec des shaders personnalisés ?",
        options: [
            "Multiplication du nombre de passes de rendu et du coût du batching/draw calls",
            "Diminution de la taille du build",
            "Augmentation de la portée de l’audio",
            "Amélioration de la compatibilité mobile"
        ],
        correctAnswer: 0,
        explanation: "Chaque shader unique casse le batching et multiplie les draw calls, donc explosion GPU."
    },
    {
        id: "light-expert-4",
        category: "Lighting/Rendering",
        level: "expert",
        question: "Comment Unity gère-t-il le Light Culling pour optimiser la perf dans des scènes très éclairées (ex: night city) ?",
        options: [
            "Unity ne calcule que les lights influant réellement sur un fragment/pixel selon le mode de rendering (forward ou deferred)",
            "Toutes les lumières sont toujours calculées",
            "Le Light Culling dépend uniquement du layer",
            "Il faut gérer le culling manuellement"
        ],
        correctAnswer: 0,
        explanation: "En deferred, Unity ne calcule que les lights proches du fragment, ce qui réduit le coût en présence de centaines de lights."
    },
    {
        id: "light-expert-5",
        category: "Lighting/Rendering",
        level: "expert",
        question: "Sur un asset mobile, quelle stratégie adopter pour avoir des effets de Glow ou Halo sans tuer la perf ?",
        options: [
            "Utiliser des sprites ou mesh avec textures glow pre-baked et Unlit, pas de vrai bloom",
            "Activer le bloom au max",
            "Utiliser uniquement HDRP",
            "Ajouter des Lens Flares à chaque light"
        ],
        correctAnswer: 0,
        explanation: "Les effets Unlit simulés coûtent presque rien, contrairement au vrai bloom post-process."
    },
    {
        id: "light-expert-6",
        category: "Lighting/Rendering",
        level: "expert",
        question: "Dans un projet HDRP, quelle option permet de désactiver les auto-exposure/eye adaptation pour garantir un rendu constant en lumière ?",
        options: [
            "Désactiver l’option Auto Exposure dans le Post-Processing Volume",
            "Augmenter l’intensité de la Directional Light",
            "Changer la Skybox",
            "Activer le mode Baked uniquement"
        ],
        correctAnswer: 0,
        explanation: "Auto Exposure modifie la luminosité selon la scène, le désactiver fige le rendu."
    },
    {
        id: "light-expert-7",
        category: "Lighting/Rendering",
        level: "expert",
        question: "Quelle est la limitation principale du Forward Rendering en matière d’ombres multiples dans Unity ?",
        options: [
            "Seule la main light (souvent Directional) peut projeter des ombres dynamiques en forward standard",
            "Impossible de faire des ombres tout court",
            "On peut avoir des ombres sur 10 lights sans problème",
            "Cela ne concerne que les lumières Baked"
        ],
        correctAnswer: 0,
        explanation: "En Forward, une seule light dynamique projette des ombres. Les autres lights n’en projettent pas."
    },
    {
        id: "light-expert-8",
        category: "Lighting/Rendering",
        level: "expert",
        question: "Quel paramètre de la Directional Light HDRP permet de simuler un éclairage de type coucher de soleil avec diffusion d’atmosphère ?",
        options: [
            "Multiplier le Scattering, ajuster l’angle et la colorimétrie, activer la Volumetric Fog",
            "Activer le mode Baked uniquement",
            "Désactiver la Directional Light",
            "Changer le Culling Mask"
        ],
        correctAnswer: 0,
        explanation: "Scattering + Volumetric = diffusion de lumière colorée, crucial pour coucher de soleil crédible."
    },
    {
        id: "light-expert-9",
        category: "Lighting/Rendering",
        level: "expert",
        question: "Comment corriger des problèmes d’ombre qui scintille ou 'flicker' sur des objets lointains (shadow acne) ?",
        options: [
            "Ajuster le Shadow Bias, augmenter la Distance et utiliser des cascades d’ombres",
            "Mettre plus de lights",
            "Désactiver les Reflection Probes",
            "Changer la couleur de la Directional Light"
        ],
        correctAnswer: 0,
        explanation: "Le Shadow Bias mal configuré et un nombre trop faible de cascades = ombres qui scintillent de loin."
    },
    {
        id: "light-expert-10",
        category: "Lighting/Rendering",
        level: "expert",
        question: "En HDRP, qu’apporte la 'Screen Space Reflection' par rapport aux Reflection Probes classiques ?",
        options: [
            "SSR gère les reflets dynamiques temps réel, y compris sur les objets en mouvement",
            "SSR ne fonctionne qu’en VR",
            "SSR n’est utile que pour les lightmaps",
            "SSR réduit la taille du build"
        ],
        correctAnswer: 0,
        explanation: "SSR calcule les reflets à la volée, alors que les Reflection Probes sont statiques ou semi-statiques."
    },
    {
        id: "light-expert-11",
        category: "Lighting/Rendering",
        level: "expert",
        question: "Quelle approche permet de profiler précisément un pic de consommation mémoire lors du baking de lightmaps lourdes ?",
        options: [
            "Utiliser le Profiler et l’outil Memory, regarder la taille des textures en runtime après baking",
            "Lire la console uniquement",
            "Baisser la résolution de toutes les lightmaps",
            "Utiliser une Directional Light unique"
        ],
        correctAnswer: 0,
        explanation: "Profiler et Memory permettent d’identifier les textures ou buffers problématiques après baking."
    },
    {
        id: "light-expert-12",
        category: "Lighting/Rendering",
        level: "expert",
        question: "Pourquoi utiliser des Light Probes en plus des Reflection Probes dans une scène complexe ?",
        options: [
            "Light Probes gèrent l’éclairage indirect sur les objets dynamiques, Reflection Probes gèrent les reflets",
            "Light Probes remplacent les colliders",
            "Reflection Probes gèrent aussi l’audio",
            "Light Probes servent à sauvegarder la scène"
        ],
        correctAnswer: 0,
        explanation: "Les deux systèmes sont complémentaires, Light = éclairage, Reflection = reflets."
    },
    {
        id: "light-expert-13",
        category: "Lighting/Rendering",
        level: "expert",
        question: "Quelle astuce permet de limiter le banding ou les gradients visibles dans le ciel ou sur les surfaces très lisses ?",
        options: [
            "Activer le dithering dans le post-process ou utiliser des textures HDR non compressées",
            "Changer le mode Forward/Deferred",
            "Réduire la résolution du projecteur",
            "Utiliser plus de MeshRenderers"
        ],
        correctAnswer: 0,
        explanation: "Le dithering ajoute du bruit visuel qui masque les gradients trop nets (banding)."
    },
    {
        id: "light-expert-14",
        category: "Lighting/Rendering",
        level: "expert",
        question: "Quel problème majeur pose l’usage excessif de spotlights dynamiques avec ombres en scène ?",
        options: [
            "Explosion du nombre de draw calls et du coût GPU, surtout en forward",
            "Ça augmente la mémoire audio",
            "Ça améliore le lightmapping",
            "Aucun, c’est optimal"
        ],
        correctAnswer: 0,
        explanation: "Chaque ombre dynamique = coût GPU + draw calls. Trop de spots = performance détruite."
    },
    {
        id: "light-expert-15",
        category: "Lighting/Rendering",
        level: "expert",
        question: "Dans le HDRP, comment garantir que toutes les surfaces transparentes soient correctement rendues, sans problème de sorting ?",
        options: [
            "Réduire la complexité, utiliser des Priority dans le shader graph et vérifier le mode Blend",
            "Activer toutes les options transparentes",
            "Changer de pipeline",
            "Désactiver la Skybox"
        ],
        correctAnswer: 0,
        explanation: "Le sorting des transparences est une galère : la priorité et le blend mode sont critiques."
    },
    {
        id: "light-expert-16",
        category: "Lighting/Rendering",
        level: "expert",
        question: "Pourquoi vaut-il mieux éviter la compression avec perte (DXT/ETC) sur les textures lightmap ?",
        options: [
            "La compression ajoute des artéfacts, des couleurs fausses et bousille la qualité des ombres fines",
            "C’est indispensable sur mobile",
            "Ça accélère le baking",
            "Ça gère mieux la transparence"
        ],
        correctAnswer: 0,
        explanation: "Les artéfacts de compression sont visibles, surtout sur les bords d’ombres ou dégradés fins."
    },
    {
        id: "light-expert-17",
        category: "Lighting/Rendering",
        level: "expert",
        question: "Sur un projet VR, quelle approche privilégier pour simuler l’occlusion ambiante tout en gardant de bonnes perfs ?",
        options: [
            "Baker l’AO dans les lightmaps ou utiliser des effets SSAO avec qualité basse",
            "Utiliser du raytracing temps réel",
            "Mettre des Directional Lights partout",
            "Utiliser uniquement le Forward Rendering"
        ],
        correctAnswer: 0,
        explanation: "En VR, le SSAO est coûteux. Mieux vaut baker ou simplifier l’effet."
    },
    {
        id: "light-expert-18",
        category: "Lighting/Rendering",
        level: "expert",
        question: "Pourquoi faut-il ajuster la valeur 'Cascade Count' pour les ombres Directional Light sur les grandes scènes open world ?",
        options: [
            "Plus de cascades = ombres plus fines proches du joueur, moins de pixels dédiés au lointain",
            "Ça améliore l’audio spatial",
            "C’est obligatoire pour la VR",
            "Ça bloque le baked lighting"
        ],
        correctAnswer: 0,
        explanation: "Le découpage en cascades optimise la répartition de la qualité des ombres selon la distance caméra."
    },
    {
        id: "light-expert-19",
        category: "Lighting/Rendering",
        level: "expert",
        question: "Quel piège classique avec la Skybox HDRI sur un build mobile ?",
        options: [
            "Textures HDRI énormes en RAM et mauvaise gestion du format, d’où crash ou lags",
            "Skybox HDRI optimise le rendu",
            "HDRI gère les collisions",
            "Skybox HDRI réduit la lumière"
        ],
        correctAnswer: 0,
        explanation: "Un HDRI > 2k/4k tue la RAM sur mobile, il faut réduire la taille ou optimiser le format."
    },
    {
        id: "light-expert-20",
        category: "Lighting/Rendering",
        level: "expert",
        question: "Quel paramètre HDRP Post-Processing permet de donner un look 'cinématographique' avec des noirs profonds et une gestion fine de la dynamique ?",
        options: [
            "Tonemapping (ACES, Custom, etc.)",
            "Exposure",
            "Dithering",
            "Ambient Occlusion"
        ],
        correctAnswer: 0,
        explanation: "Le tonemapping donne une signature visuelle, surtout ACES pour un look cinéma pro."
    },
    
    

// Profiling/Debugging
    {
        id: "prof-user-1",
        category: "Profiling/Debugging",
        level: "user",
        question: "À quoi sert la fenêtre Profiler dans Unity ?",
        options: [
            "Surveiller les performances et identifier les goulets d’étranglement (CPU, GPU, mémoire, etc.)",
            "Dessiner les textures",
            "Modifier le code C#",
            "Créer des animations"
        ],
        correctAnswer: 0,
        explanation: "Le Profiler analyse l’utilisation des ressources pour détecter les problèmes de perf."
    },
    {
        id: "prof-user-2",
        category: "Profiling/Debugging",
        level: "user",
        question: "Quel onglet du Profiler permet d’analyser le temps passé dans chaque méthode C# exécutée ?",
        options: [
            "CPU Usage",
            "Memory",
            "Rendering",
            "Physics"
        ],
        correctAnswer: 0,
        explanation: "CPU Usage montre le détail de chaque appel et leur durée."
    },
    {
        id: "prof-user-3",
        category: "Profiling/Debugging",
        level: "user",
        question: "Quelle est la meilleure façon de détecter une fuite de mémoire (memory leak) basique dans Unity ?",
        options: [
            "Surveiller l’utilisation de la mémoire dans le Profiler pendant l’exécution",
            "Relancer le projet",
            "Augmenter la RAM du PC",
            "Créer plus de GameObjects"
        ],
        correctAnswer: 0,
        explanation: "Si la mémoire monte sans jamais redescendre, c’est un signal de fuite."
    },
    {
        id: "prof-user-4",
        category: "Profiling/Debugging",
        level: "user",
        question: "Quel outil natif Unity affiche la hiérarchie complète des objets en mémoire (textures, meshes, etc.) ?",
        options: [
            "Memory Profiler",
            "Animation Window",
            "Asset Store",
            "Package Manager"
        ],
        correctAnswer: 0,
        explanation: "Le Memory Profiler permet de visualiser tous les objets chargés en RAM."
    },
    {
        id: "prof-user-5",
        category: "Profiling/Debugging",
        level: "user",
        question: "Qu’affiche la console Unity lors d’une erreur de code (exception non gérée) ?",
        options: [
            "Un message d’erreur avec la stack trace",
            "Une courbe d’animation",
            "La hiérarchie des objets",
            "Un graphique d’utilisation CPU"
        ],
        correctAnswer: 0,
        explanation: "La console liste l’erreur et la pile d’appel correspondante."
    },
    {
        id: "prof-user-6",
        category: "Profiling/Debugging",
        level: "user",
        question: "Comment placer un point d’arrêt (breakpoint) lors du debug d’un script C# ?",
        options: [
            "Dans l’éditeur de code compatible (ex : Visual Studio), cliquer sur la marge à gauche d’une ligne",
            "Dans la fenêtre Animator",
            "En changeant la couleur du GameObject",
            "Dans l’Inspector"
        ],
        correctAnswer: 0,
        explanation: "Le breakpoint se pose directement dans l’éditeur de script."
    },
    {
        id: "prof-user-7",
        category: "Profiling/Debugging",
        level: "user",
        question: "Quel raccourci clavier permet d’ouvrir la Console dans Unity (layout par défaut) ?",
        options: [
            "Ctrl+Shift+C (Windows) ou Cmd+Shift+C (Mac)",
            "Ctrl+N",
            "F5",
            "Ctrl+S"
        ],
        correctAnswer: 0,
        explanation: "Ce raccourci ouvre directement la Console (sauf si modifié)."
    },
    {
        id: "prof-user-8",
        category: "Profiling/Debugging",
        level: "user",
        question: "Pourquoi utiliser Debug.Log() dans un script C# ?",
        options: [
            "Afficher des messages ou des valeurs pour vérifier le comportement du code",
            "Changer la texture d’un objet",
            "Créer une lumière",
            "Lancer une build"
        ],
        correctAnswer: 0,
        explanation: "Debug.Log permet d’afficher des infos en runtime."
    },
    {
        id: "prof-user-9",
        category: "Profiling/Debugging",
        level: "user",
        question: "Quelle couleur est associée aux warnings dans la Console Unity ?",
        options: [
            "Jaune",
            "Rouge",
            "Bleu",
            "Vert"
        ],
        correctAnswer: 0,
        explanation: "Les avertissements (warnings) sont toujours affichés en jaune."
    },
    {
        id: "prof-user-10",
        category: "Profiling/Debugging",
        level: "user",
        question: "À quoi sert la fonction 'Deep Profile' dans la fenêtre Profiler ?",
        options: [
            "Analyser en détail chaque fonction appelée, même les plus petites",
            "Changer la couleur du background",
            "Exporter le projet",
            "Gérer les packages"
        ],
        correctAnswer: 0,
        explanation: "Le deep profile permet une analyse plus précise (mais plus lente) du code exécuté."
    },
    {
        id: "prof-user-11",
        category: "Profiling/Debugging",
        level: "user",
        question: "Si la scène rame dès qu’on ajoute beaucoup d’objets, quel module profiler regarder en priorité ?",
        options: [
            "CPU et Rendering",
            "Audio",
            "Physics uniquement",
            "Package Manager"
        ],
        correctAnswer: 0,
        explanation: "CPU et Rendering montreront où se situe le goulet d’étranglement."
    },
    {
        id: "prof-user-12",
        category: "Profiling/Debugging",
        level: "user",
        question: "Que signifie une erreur 'NullReferenceException' dans la Console Unity ?",
        options: [
            "Un objet n’a pas été assigné ou est inexistant au moment de son utilisation",
            "Un problème de lumière",
            "Un asset manquant",
            "Une variable mal orthographiée"
        ],
        correctAnswer: 0,
        explanation: "C’est une des erreurs les plus courantes : accès à un objet non instancié."
    },
    {
        id: "prof-user-13",
        category: "Profiling/Debugging",
        level: "user",
        question: "Comment réinitialiser la Console Unity (vider tous les messages) ?",
        options: [
            "Cliquer sur le bouton Clear (Effacer)",
            "Changer de scène",
            "Fermer Unity",
            "Supprimer le dossier Library"
        ],
        correctAnswer: 0,
        explanation: "Le bouton Clear vide la Console sans relancer Unity."
    },
    {
        id: "prof-user-14",
        category: "Profiling/Debugging",
        level: "user",
        question: "Quel raccourci permet de passer en Play mode dans l’éditeur Unity ?",
        options: [
            "Ctrl+P (Windows) ou Cmd+P (Mac)",
            "F1",
            "Alt+F4",
            "Ctrl+Z"
        ],
        correctAnswer: 0,
        explanation: "Ctrl+P lance/arrête le mode Play."
    },
    {
        id: "prof-user-15",
        category: "Profiling/Debugging",
        level: "user",
        question: "Quelle option de la fenêtre Console permet d’ignorer temporairement les warnings ?",
        options: [
            "Désactiver l’icône Warning dans la barre d’icônes",
            "Effacer les logs",
            "Changer la scène",
            "Passer en mode Debug"
        ],
        correctAnswer: 0,
        explanation: "Chaque type de log a une icône : on peut (dé)sélectionner l’affichage warning/info/error."
    },
    {
        id: "prof-user-16",
        category: "Profiling/Debugging",
        level: "user",
        question: "Pourquoi la frame rate chute parfois brutalement en Play mode alors que la scène est simple ?",
        options: [
            "Un script ou une boucle tourne en boucle infinie ou mal optimisée",
            "Le build n’est pas activé",
            "L’éclairage est trop sombre",
            "Il n’y a pas assez d’assets"
        ],
        correctAnswer: 0,
        explanation: "Un script mal écrit suffit à faire ramer une scène, même simple."
    },
    {
        id: "prof-user-17",
        category: "Profiling/Debugging",
        level: "user",
        question: "Quel type d’outil permet d’enregistrer un profil de performance sur un appareil mobile depuis Unity ?",
        options: [
            "Profiler avec Remote ou Profiler Attach",
            "Memory Profiler uniquement",
            "Animator",
            "Sprite Editor"
        ],
        correctAnswer: 0,
        explanation: "Le Profiler peut être connecté à un build distant pour profiler sur mobile."
    },
    {
        id: "prof-user-18",
        category: "Profiling/Debugging",
        level: "user",
        question: "Que se passe-t-il si on laisse un Debug.Log() très fréquent (ex: chaque frame) dans le code en build final ?",
        options: [
            "Le jeu peut ramer ou être ralenti à cause de l’I/O et du spam de logs",
            "Aucun effet",
            "Ça accélère le jeu",
            "Ça modifie les couleurs"
        ],
        correctAnswer: 0,
        explanation: "Debug.Log trop utilisé = baisse de perfs, surtout en build (I/O du log)."
    },
    {
        id: "prof-user-19",
        category: "Profiling/Debugging",
        level: "user",
        question: "Dans le Profiler, que permet le bouton 'Record' (cercle rouge) ?",
        options: [
            "Démarrer ou arrêter la capture des données de profiling",
            "Créer une animation",
            "Effacer tous les logs",
            "Afficher la hiérarchie d’objet"
        ],
        correctAnswer: 0,
        explanation: "Le Profiler n’enregistre que quand 'Record' est actif."
    },
    {
        id: "prof-user-20",
        category: "Profiling/Debugging",
        level: "user",
        question: "Quel message affiche la Console si on fait une division par zéro dans un script C# ?",
        options: [
            "Une exception de type 'DivideByZeroException'",
            "Aucun message",
            "Un warning jaune",
            "Un crash complet du PC"
        ],
        correctAnswer: 0,
        explanation: "C# lance une exception 'DivideByZeroException', affichée dans la Console Unity."
    },
    {
        id: "prof-pro-1",
        category: "Profiling/Debugging",
        level: "pro",
        question: "Comment utiliser le Profiler pour identifier un script responsable de pics CPU irréguliers dans une scène complexe ?",
        options: [
            "Activer Deep Profile et analyser la timeline CPU Usage pour isoler les méthodes longues",
            "Regarder uniquement la Console",
            "Changer de plateforme de build",
            "Supprimer tous les GameObjects"
        ],
        correctAnswer: 0,
        explanation: "Le Deep Profile permet de voir la stack complète et la durée de chaque méthode."
    },
    {
        id: "prof-pro-2",
        category: "Profiling/Debugging",
        level: "pro",
        question: "Quel outil permet d’inspecter en détail la fragmentation mémoire, y compris les allocations natives et managées ?",
        options: [
            "Memory Profiler package",
            "Animation Profiler",
            "Animator Window",
            "Scene View"
        ],
        correctAnswer: 0,
        explanation: "Le package Memory Profiler donne accès à tous les types d’allocation et à la fragmentation."
    },
    {
        id: "prof-pro-3",
        category: "Profiling/Debugging",
        level: "pro",
        question: "Que signifie une courbe 'GC Alloc' qui augmente constamment dans le Profiler ?",
        options: [
            "Des allocations mémoire sont faites chaque frame, générant du garbage collection et pouvant causer des freeze",
            "La lumière est mal configurée",
            "Les assets ne sont pas compressés",
            "C’est le rendu qui est trop lourd"
        ],
        correctAnswer: 0,
        explanation: "Les GC Allocations excessives provoquent des lags et du stuttering."
    },
    {
        id: "prof-pro-4",
        category: "Profiling/Debugging",
        level: "pro",
        question: "Pourquoi le Profiler 'Rendering' affiche-t-il un temps de 'Batches' très élevé ?",
        options: [
            "Il y a trop de draw calls/batches (peu de batching ou trop d’objets non optimisés)",
            "La scène est trop sombre",
            "Les scripts ne sont pas optimisés",
            "La caméra est désactivée"
        ],
        correctAnswer: 0,
        explanation: "Un nombre élevé de batches/draw calls ralenti l’affichage."
    },
    {
        id: "prof-pro-5",
        category: "Profiling/Debugging",
        level: "pro",
        question: "Quelle fonctionnalité du Profiler permet d’enregistrer une session pour analyse ultérieure (et partage) ?",
        options: [
            "Save/Load Profiling Data (.data ou .raw)",
            "Copier-coller dans la Console",
            "Exporter la scène",
            "Cliquer sur 'Play'"
        ],
        correctAnswer: 0,
        explanation: "On peut exporter la capture (fichier) pour analyse ou support technique."
    },
    {
        id: "prof-pro-6",
        category: "Profiling/Debugging",
        level: "pro",
        question: "Comment identifier si un lag vient d’une surcharge du GPU ou du CPU avec les outils natifs Unity ?",
        options: [
            "Comparer les timelines CPU et GPU dans le Profiler (module Rendering inclus)",
            "Vérifier uniquement la Console",
            "Regarder le GameView",
            "Changer le build target"
        ],
        correctAnswer: 0,
        explanation: "Le Profiler affiche distinctement le temps CPU et GPU pour chaque frame."
    },
    {
        id: "prof-pro-7",
        category: "Profiling/Debugging",
        level: "pro",
        question: "Quel module du Profiler permet de surveiller les leaks de textures, meshes ou materials lors du passage de scènes ?",
        options: [
            "Memory",
            "Physics",
            "Animation",
            "UI"
        ],
        correctAnswer: 0,
        explanation: "Le module Memory affiche les objets qui restent en RAM après changement de scène."
    },
    {
        id: "prof-pro-8",
        category: "Profiling/Debugging",
        level: "pro",
        question: "Quelle bonne pratique permet d’éviter de fausses alertes lors de l’analyse de logs en équipe sur Unity Collaborate/PlasticSCM ?",
        options: [
            "Nettoyer régulièrement la Console et standardiser les niveaux de logs (Log/Warning/Error)",
            "Supprimer tous les logs",
            "Faire un build à chaque commit",
            "Changer tous les messages d’erreur"
        ],
        correctAnswer: 0,
        explanation: "Sans standardisation, le bruit parasite la vraie analyse."
    },
    {
        id: "prof-pro-9",
        category: "Profiling/Debugging",
        level: "pro",
        question: "Quelle est l’utilité de la fonction 'Editor Profiling' dans Unity ?",
        options: [
            "Analyser la performance de l’éditeur Unity lui-même (hors Play Mode)",
            "Exporter un asset",
            "Changer la couleur du canvas",
            "Générer un build"
        ],
        correctAnswer: 0,
        explanation: "Certaines lenteurs sont liées à l’éditeur et pas à la runtime du jeu."
    },
    {
        id: "prof-pro-10",
        category: "Profiling/Debugging",
        level: "pro",
        question: "En cas de crash sans log clair dans la Console, quel dossier du projet Unity contient des crash dumps et logs détaillés ?",
        options: [
            "Le dossier 'Logs' (AppData/Library sur Windows, ~/Library sur Mac)",
            "Assets/Editor",
            "Packages",
            "ProjectSettings"
        ],
        correctAnswer: 0,
        explanation: "Les logs et dumps systèmes sont dans AppData/Library (Windows/Mac)."
    },
    {
        id: "prof-pro-11",
        category: "Profiling/Debugging",
        level: "pro",
        question: "Quelle méthode permet de trouver une fuite mémoire liée à des subscriptions d’event non désabonnées dans Unity ?",
        options: [
            "Analyser les allocations persistantes dans le Memory Profiler, rechercher des objets non collectés",
            "Changer de scène",
            "Supprimer tous les scripts",
            "Redémarrer Unity"
        ],
        correctAnswer: 0,
        explanation: "Les listeners non détachés restent en mémoire, détectables par inspection des allocations."
    },
    {
        id: "prof-pro-12",
        category: "Profiling/Debugging",
        level: "pro",
        question: "Quel outil externe est recommandé par Unity pour profiler les performances CPU/GPU sur Android ou iOS ?",
        options: [
            "Unity Profiler + Android Profiler/Xcode Instruments",
            "Animation Profiler",
            "Sprite Atlas",
            "Asset Bundle Browser"
        ],
        correctAnswer: 0,
        explanation: "Pour mobile : Android Studio Profiler et Xcode Instruments sont les standards."
    },
    {
        id: "prof-pro-13",
        category: "Profiling/Debugging",
        level: "pro",
        question: "Comment profiler efficacement un problème de stuttering qui n’apparaît qu’après 10 minutes de jeu ?",
        options: [
            "Enregistrer une longue session dans le Profiler et placer des Debug.Log() temporels pour localiser le pattern",
            "Changer de caméra",
            "Nettoyer la Console",
            "Changer la résolution"
        ],
        correctAnswer: 0,
        explanation: "Profilage longue durée + logs temporaires = pattern détecté."
    },
    {
        id: "prof-pro-14",
        category: "Profiling/Debugging",
        level: "pro",
        question: "En mode Development Build, à quoi sert la case 'Autoconnect Profiler' ?",
        options: [
            "Connecter automatiquement le Profiler de l’éditeur au build en cours sur appareil cible",
            "Créer des prefabs",
            "Optimiser la mémoire",
            "Changer le format de build"
        ],
        correctAnswer: 0,
        explanation: "Permet de profiler un build externe sans setup manuel."
    },
    {
        id: "prof-pro-15",
        category: "Profiling/Debugging",
        level: "pro",
        question: "Quel signe concret dans le Profiler peut indiquer une fuite d’objet MonoBehaviour entre plusieurs scènes ?",
        options: [
            "Nombre croissant d’objets de même type dans Memory après plusieurs changements de scène",
            "Apparition de warnings jaune",
            "Un build plus long",
            "Chute du frame rate uniquement"
        ],
        correctAnswer: 0,
        explanation: "Des objets persistants signalent un problème de destruction."
    },
    {
        id: "prof-pro-16",
        category: "Profiling/Debugging",
        level: "pro",
        question: "Quel indicateur du Profiler alerte sur une surcharge physique (Physics) dans une scène dynamique ?",
        options: [
            "Physics Time très élevé, pic visible dans le module Physics",
            "CPU Usage faible",
            "Nombre d’assets chargés",
            "Taille du build"
        ],
        correctAnswer: 0,
        explanation: "Physics Time reflète le temps passé dans le moteur physique."
    },
    {
        id: "prof-pro-17",
        category: "Profiling/Debugging",
        level: "pro",
        question: "Comment traquer l’origine d’un log intermittent difficile à reproduire ?",
        options: [
            "Ajouter un identifiant/context dans Debug.Log pour retrouver la source exacte",
            "Changer tous les logs en warnings",
            "Effacer la Console à chaque frame",
            "Changer le thème de l’éditeur"
        ],
        correctAnswer: 0,
        explanation: "Les logs contextualisés permettent une traque précise même dans le bruit."
    },
    {
        id: "prof-pro-18",
        category: "Profiling/Debugging",
        level: "pro",
        question: "Quel mode d’exécution du Profiler permet d’obtenir les perfs sur un build (pas dans l’éditeur) ?",
        options: [
            "Connect to Player (Profiling un build autonome/device)",
            "Deep Profile dans l’éditeur",
            "Play mode classique",
            "Editor Profiling"
        ],
        correctAnswer: 0,
        explanation: "Seul 'Connect to Player' profile le build, le reste ne montre que l’éditeur."
    },
    {
        id: "prof-pro-19",
        category: "Profiling/Debugging",
        level: "pro",
        question: "Pourquoi faut-il désactiver Deep Profile après debug ?",
        options: [
            "Il ralentit beaucoup l’exécution et fausse les mesures de performance réelles",
            "Il efface les assets",
            "Il désactive le rendu",
            "Il change le projet"
        ],
        correctAnswer: 0,
        explanation: "Le Deep Profile rajoute un énorme overhead."
    },
    {
        id: "prof-pro-20",
        category: "Profiling/Debugging",
        level: "pro",
        question: "Qu’indique un pic d’'EditorLoop' dans la timeline CPU Usage du Profiler ?",
        options: [
            "Un script Editor ou une extension ralentit l’éditeur (hors PlayMode)",
            "Un problème réseau",
            "Un bug dans l’Asset Store",
            "Une texture manquante"
        ],
        correctAnswer: 0,
        explanation: "EditorLoop = code d’extension ou custom Editor trop lourd."
    },
    {
        id: "prof-expert-1",
        category: "Profiling/Debugging",
        level: "expert",
        question: "Comment diagnostiquer une fuite mémoire intermittente uniquement observable après plusieurs heures de jeu sur build mobile ?",
        options: [
            "Automatiser des longues sessions en build de dev avec Memory Profiler + outils natifs (Xcode Instruments/Android Studio) + snapshot régulier, puis analyser la rétention d’objets non collectés",
            "Analyser uniquement la Console",
            "Redémarrer l’application",
            "Utiliser uniquement le Deep Profile"
        ],
        correctAnswer: 0,
        explanation: "Il faut automatiser la prise de snapshots mémoire et utiliser les outils natifs en plus du Memory Profiler Unity."
    },
    {
        id: "prof-expert-2",
        category: "Profiling/Debugging",
        level: "expert",
        question: "Sur une build release, un stuttering GPU intervient uniquement lors de la génération dynamique de mesh. Quelle stratégie adopter pour profiler efficacement ce phénomène ?",
        options: [
            "Profiler côté GPU avec outils externes (NVIDIA NSight, RenderDoc) + analyser la génération mesh côté C# pour identifier les spikes de synchronisation CPU/GPU",
            "Analyser le code C# uniquement",
            "Désactiver la génération dynamique",
            "Réduire la résolution"
        ],
        correctAnswer: 0,
        explanation: "Il faut croiser les outils natifs GPU et le profiling C# pour voir le bottleneck réel."
    },
    {
        id: "prof-expert-3",
        category: "Profiling/Debugging",
        level: "expert",
        question: "Comment automatiser la détection de régressions de performance avant chaque merge de feature sur un projet Unity pro ?",
        options: [
            "Intégrer des tests de performance automatisés via Test Runner + capture de sessions Profiler + analyse sur CI/CD",
            "Analyser manuellement chaque merge",
            "Limiter les merges",
            "Ne faire aucun test"
        ],
        correctAnswer: 0,
        explanation: "L’automatisation sur CI permet de détecter les perfs cassées avant d’intégrer."
    },
    {
        id: "prof-expert-4",
        category: "Profiling/Debugging",
        level: "expert",
        question: "Quel workflow pour identifier une fuite liée à un event static dans un projet à forte volumétrie de code et d’objets ?",
        options: [
            "Instrumenter les subscriptions, utiliser WeakReference/Event, et traquer via Memory Profiler les objets listeners persistants post-changement de scène",
            "Supprimer tous les events",
            "Redémarrer l’éditeur",
            "Changer d’IDE"
        ],
        correctAnswer: 0,
        explanation: "Les WeakReferences et l’instrumentation sont nécessaires sur gros codebase."
    },
    {
        id: "prof-expert-5",
        category: "Profiling/Debugging",
        level: "expert",
        question: "Quel pattern d’analyse appliquer face à des lags qui n’apparaissent que sur un device précis et jamais en PlayMode sur PC ?",
        options: [
            "Profiler sur device cible via build dev + outils natifs du device (profilers constructeur, logs système, Unity Profiler Connect to Player)",
            "Profiler sur PC uniquement",
            "Changer le color grading",
            "Rebuilder la scène"
        ],
        correctAnswer: 0,
        explanation: "Il faut profiler sur device cible avec les bons outils, pas sur l’éditeur."
    },
    {
        id: "prof-expert-6",
        category: "Profiling/Debugging",
        level: "expert",
        question: "En présence de spikes réseau imprévisibles, quel outil ou méthodologie permet de les isoler précisément dans un build Unity multi-joueur ?",
        options: [
            "Utiliser le Network Profiler + outils de monitoring externe (Wireshark, Fiddler), et corréler avec les logs de frame Unity",
            "Regarder la timeline Physics",
            "Changer de port réseau",
            "Analyser les textures"
        ],
        correctAnswer: 0,
        explanation: "Le Network Profiler combiné à des sniffers réseau permet d’isoler les vraies causes."
    },
    {
        id: "prof-expert-7",
        category: "Profiling/Debugging",
        level: "expert",
        question: "Quelle limitation technique du Profiler Unity doit être prise en compte pour l’analyse de build Android ARM64 ?",
        options: [
            "Les modules GPU et Memory sont parfois incomplets ou imprécis selon les devices/constructeurs",
            "Impossible de profiler le CPU",
            "Le Profiler plante systématiquement",
            "La connexion n’est jamais possible"
        ],
        correctAnswer: 0,
        explanation: "Certains modules ne sont pas disponibles ou fiables selon le hardware."
    },
    {
        id: "prof-expert-8",
        category: "Profiling/Debugging",
        level: "expert",
        question: "Comment diagnostiquer efficacement un freeze du rendu survenant lors du passage d’une scène à l’autre ?",
        options: [
            "Capturer le Profiler pendant le passage de scène + activer la capture de timeline GPU/CPU + analyser le chargement d’assets asynchrones",
            "Analyser la Console uniquement",
            "Changer la lumière",
            "Désactiver les collisions"
        ],
        correctAnswer: 0,
        explanation: "Il faut profiler la séquence exacte de transition et les assets chargés."
    },
    {
        id: "prof-expert-9",
        category: "Profiling/Debugging",
        level: "expert",
        question: "Sur un projet VR, quel outil tiers ou natif recommander pour profiler le frame timing (CPU/GPU) sur Quest ou Pico ?",
        options: [
            "Utiliser OVR Metrics Tool ou Pico Profiler en plus du Profiler Unity",
            "Profiler uniquement sur le PC",
            "Ne rien faire",
            "Changer la scène"
        ],
        correctAnswer: 0,
        explanation: "Les headsets XR ont leurs propres outils pour mesurer le frame timing réel."
    },
    {
        id: "prof-expert-10",
        category: "Profiling/Debugging",
        level: "expert",
        question: "Comment détecter automatiquement l’apparition de nouveaux warnings/errors dans un build Unity post-release ?",
        options: [
            "Configurer un système de collecte/logging distant (ex: Backtrace, Sentry, Unity Cloud Diagnostics) relié au build final",
            "Lire la Console de l’éditeur",
            "Attendre le retour des joueurs",
            "Faire des builds manuels"
        ],
        correctAnswer: 0,
        explanation: "Les outils de crash reporting doivent être connectés au build de prod."
    },
    {
        id: "prof-expert-11",
        category: "Profiling/Debugging",
        level: "expert",
        question: "Dans quel cas le module Physics du Profiler peut-il masquer des coûts CPU réels dans une scène très dynamique ?",
        options: [
            "Si la physique est calculée via des plugins natifs non trackés, ou si le thread PhysX sature hors du thread principal",
            "Si le build est en mode Release",
            "Si le nombre d’assets est trop élevé",
            "Si la scène est statique"
        ],
        correctAnswer: 0,
        explanation: "Certaines opérations physiques ne remontent pas toujours dans le Profiler Unity."
    },
    {
        id: "prof-expert-12",
        category: "Profiling/Debugging",
        level: "expert",
        question: "Quelle méthode pour profiler le chargement de ressources Addressables dans un projet complexe multi-scène ?",
        options: [
            "Instrumenter avec ProfilerMarkers custom (Profiler.Begin/EndSample) sur les chargements, analyser la timeline Memory et les callbacks d’event Addressables",
            "Utiliser uniquement la Console",
            "Supprimer les assets",
            "Changer les textures"
        ],
        correctAnswer: 0,
        explanation: "Il faut croiser instrumentations custom et profiling mémoire/CPU."
    },
    {
        id: "prof-expert-13",
        category: "Profiling/Debugging",
        level: "expert",
        question: "Face à des performances dégradées uniquement en build IL2CPP, comment analyser l’origine du problème ?",
        options: [
            "Profiler le build IL2CPP, comparer avec Mono, et utiliser les outils d’analyse natifs du device (CPU Profiler natif, Xcode Instruments, etc.)",
            "Changer en build Mono",
            "Supprimer les scripts",
            "Réduire la résolution"
        ],
        correctAnswer: 0,
        explanation: "Les différences entre Mono et IL2CPP se voient uniquement en build sur cible."
    },
    {
        id: "prof-expert-14",
        category: "Profiling/Debugging",
        level: "expert",
        question: "Comment traquer un bug d’ordre d’exécution lié à des coroutines et des callbacks en Unity ?",
        options: [
            "Ajouter des logs contextuels et utiliser Timeline Profiler pour visualiser l’ordre réel d’exécution",
            "Utiliser uniquement Deep Profile",
            "Changer le build target",
            "Désactiver la Console"
        ],
        correctAnswer: 0,
        explanation: "Les logs détaillés + Timeline Profiler permettent de reconstruire l’ordre réel d’exécution."
    },
    {
        id: "prof-expert-15",
        category: "Profiling/Debugging",
        level: "expert",
        question: "Quel workflow appliquer pour isoler une perte progressive de FPS sur un projet live avec patchs fréquents ?",
        options: [
            "Profiler build après chaque patch, conserver historique des sessions de profiling, automatiser l’analyse diff/compare de timeline",
            "Faire une réinstallation complète",
            "Changer de pipeline de rendu",
            "Redémarrer l’éditeur"
        ],
        correctAnswer: 0,
        explanation: "Le tracking historique automatisé est indispensable sur gros projet live."
    },
    {
        id: "prof-expert-16",
        category: "Profiling/Debugging",
        level: "expert",
        question: "Comment utiliser les ProfilerMarkers custom pour optimiser des systèmes ECS ou DOTS ?",
        options: [
            "Placer des Profiler.Begin/EndSample autour de chaque étape critique (Systems/Jobs) et analyser les perfs en mode multithread",
            "Utiliser uniquement la Console",
            "Réduire le nombre d’assets",
            "Supprimer les jobs"
        ],
        correctAnswer: 0,
        explanation: "Les ProfilerMarkers custom sont essentiels pour voir où le DOTS/ECS passe du temps."
    },
    {
        id: "prof-expert-17",
        category: "Profiling/Debugging",
        level: "expert",
        question: "Quel indicateur dans le Profiler peut signaler un bug de pipeline de rendu URP/HDRP non visible dans les stats classiques ?",
        options: [
            "Pic d’attente 'Gfx.WaitForPresent' ou 'WaitForGPU'",
            "Warning jaune dans la Console",
            "Nombre d’assets chargés",
            "Nom de scène trop long"
        ],
        correctAnswer: 0,
        explanation: "WaitForGPU/Gfx.WaitForPresent indique un problème de pipeline graphique asynchrone."
    },
    {
        id: "prof-expert-18",
        category: "Profiling/Debugging",
        level: "expert",
        question: "Comment diagnostiquer une latence réseau fluctuante uniquement en production multijoueur ?",
        options: [
            "Capturer les métriques réseau en prod via un système de logs custom, exporter pour analyse post-mortem et croiser avec le Network Profiler",
            "Regarder la Console en local",
            "Changer de serveur",
            "Augmenter la résolution"
        ],
        correctAnswer: 0,
        explanation: "Il faut logguer les métriques sur le build prod et croiser avec le profiling local."
    },
    {
        id: "prof-expert-19",
        category: "Profiling/Debugging",
        level: "expert",
        question: "Quelle méthodo appliquer pour retrouver un bug déclenché uniquement par des données issues de sauvegardes corrompues dans Unity ?",
        options: [
            "Automatiser la validation des saves, ajouter des logs hash/checksum, et profiler l’exécution des load/save suspects",
            "Effacer toutes les saves",
            "Supprimer le script de save",
            "Changer de pipeline"
        ],
        correctAnswer: 0,
        explanation: "Il faut valider les saves en amont et profiler le système de persistance."
    },
    {
        id: "prof-expert-20",
        category: "Profiling/Debugging",
        level: "expert",
        question: "Comment profiler la mémoire vidéo consommée par Unity sur une station de travail sous Windows avec une carte NVIDIA ?",
        options: [
            "Utiliser NVIDIA NSight ou GPUView, en complément du Memory Profiler Unity",
            "Analyser la Console",
            "Changer le shader",
            "Désactiver le VSync"
        ],
        correctAnswer: 0,
        explanation: "NSight/GPUView permettent de voir la VRAM utilisée par Unity."
    },

// Version Control
    {
        id: 'vcs-user-001',
        question: "Quel fichier doit toujours être ignoré par Git dans un projet Unity ?",
        options: ["Library/", "Assets/", "ProjectSettings/", "Packages/"],
        correctAnswer: 0,
        explanation: "Library/ contient du cache local, jamais à versionner.",
        category: "Version Control",
        level: "user",
    },

// Testing/QA
    {
        id: 'test-user-001',
        question: "Quel type de test permet de valider automatiquement un script sans lancer toute la scène ?",
        options: ["Unit test", "Playmode test", "Stress test", "Integration test"],
        correctAnswer: 0,
        explanation: "Les unit tests testent la logique C# sans passer par l’engine.",
        category: "Testing/QA",
        level: "user",
    },

// Audio
    {
        id: 'audio-user-001',
        question: "Quel composant Unity permet de jouer un fichier sonore ?",
        options: ["AudioSource", "Light", "Animator", "MeshFilter"],
        correctAnswer: 0,
        explanation: "AudioSource lit un clip audio dans la scène.",
        category: "Audio",
        level: "user",
    },

// Build/Deployment
    {
        id: 'build-user-001',
        question: "Quel menu permet de changer la plateforme de build dans Unity ?",
        options: ["File > Build Settings", "Edit > Player Settings", "Window > Platform", "Assets > Build"],
        correctAnswer: 0,
        explanation: "File > Build Settings permet de choisir la cible (PC, WebGL, Android…).",
        category: "Build/Deployment",
        level: "user",
    },

// Networking/Multiplayer
    {
        id: 'net-user-001',
        question: "Quel composant permet de synchroniser des objets sur plusieurs clients en multijoueur ?",
        options: ["NetworkIdentity", "Transform", "Animator", "Canvas"],
        correctAnswer: 0,
        explanation: "NetworkIdentity gère la synchro réseau de l’objet.",
        category: "Networking/Multiplayer",
        level: "user",
    },

// Data Persistence
    {
        id: 'persist-user-001',
        question: "Quelle classe Unity permet de sauvegarder une donnée simple entre deux lancements de jeu ?",
        options: ["PlayerPrefs", "ScriptableObject", "FileStream", "JsonUtility"],
        correctAnswer: 0,
        explanation: "PlayerPrefs sert à stocker des variables simples (int, float, string).",
        category: "Data Persistence",
        level: "user",
    },

// Project Structure/Organization
    {
        id: 'org-user-001',
        question: "Quelle convention de nommage est recommandée pour les assets de prefab ?",
        options: ["Nom + .prefab", "Nom + _Prefab", "Prefab_Nom", "nom-prefab"],
        correctAnswer: 1,
        explanation: "Unity recommande d’utiliser _Prefab ou une convention claire pour filtrer les assets.",
        category: "Project Structure/Organization",
        level: "user",
    },
];
