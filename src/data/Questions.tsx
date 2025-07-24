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
        id: "vc-user-1",
        category: "Version Control",
        level: "user",
        question: "Quel est le but principal d’un système de contrôle de version ?",
        options: [
            "Suivre l’historique des modifications du projet et permettre de revenir à une version précédente",
            "Augmenter la résolution des textures",
            "Générer des shaders automatiquement",
            "Compresser les scripts C#"
        ],
        correctAnswer: 0,
        explanation: "Un VCS permet de suivre et restaurer l’historique des fichiers."
    },
    {
        id: "vc-user-2",
        category: "Version Control",
        level: "user",
        question: "Lequel de ces fichiers Unity doit absolument être inclus dans un dépôt Git ?",
        options: [
            "Assets/",
            "Library/",
            "Temp/",
            "Obj/"
        ],
        correctAnswer: 0,
        explanation: "Seul Assets/ (et ProjectSettings/) doivent être versionnés."
    },
    {
        id: "vc-user-3",
        category: "Version Control",
        level: "user",
        question: "Quel est le format recommandé pour les scènes Unity afin d’éviter des conflits difficiles à résoudre ?",
        options: [
            "Texte",
            "Binaire",
            "XML compressé",
            "Image"
        ],
        correctAnswer: 0,
        explanation: "Le format texte rend les merges et la résolution de conflits possibles."
    },
    {
        id: "vc-user-4",
        category: "Version Control",
        level: "user",
        question: "Dans Unity, que fait l’option 'Visible Meta Files' dans les Editor Settings ?",
        options: [
            "Elle force Unity à générer un fichier .meta pour chaque asset afin de permettre le suivi dans un VCS",
            "Elle cache les textures non utilisées",
            "Elle rend les scènes invisibles dans le Project",
            "Elle supprime les .meta à chaque commit"
        ],
        correctAnswer: 0,
        explanation: "Le mode Visible Meta Files est requis pour le versionning d’un projet Unity."
    },
    {
        id: "vc-user-5",
        category: "Version Control",
        level: "user",
        question: "Quelle commande Git permet d’enregistrer une modification localement mais pas encore sur le serveur distant ?",
        options: [
            "git commit",
            "git push",
            "git clone",
            "git revert"
        ],
        correctAnswer: 0,
        explanation: "git commit enregistre les changements localement."
    },
    {
        id: "vc-user-6",
        category: "Version Control",
        level: "user",
        question: "Quel type de fichiers doit être ignoré via un .gitignore sur un projet Unity ?",
        options: [
            "Library/, Temp/, Obj/",
            "Assets/",
            "ProjectSettings/",
            "Tous les fichiers .cs"
        ],
        correctAnswer: 0,
        explanation: "Les dossiers générés automatiquement doivent être ignorés, pas Assets/ ou ProjectSettings/."
    },
    {
        id: "vc-user-7",
        category: "Version Control",
        level: "user",
        question: "Comment éviter de perdre du travail lors de l’utilisation d’un VCS avec Unity ?",
        options: [
            "Commiter régulièrement et synchroniser avec le dépôt distant",
            "Supprimer les .meta",
            "Travailler toujours hors-ligne",
            "Renommer les dossiers Assets/"
        ],
        correctAnswer: 0,
        explanation: "Commiter et pusher fréquemment prévient la perte de données."
    },
    {
        id: "vc-user-8",
        category: "Version Control",
        level: "user",
        question: "Quelle action faire avant de commencer à travailler sur une nouvelle fonctionnalité sur un projet partagé en Git ?",
        options: [
            "Créer une nouvelle branche",
            "Supprimer tous les fichiers Library/",
            "Ouvrir la scène principale en binaire",
            "Ignorer le .meta"
        ],
        correctAnswer: 0,
        explanation: "Les branches permettent de séparer les features."
    },
    {
        id: "vc-user-9",
        category: "Version Control",
        level: "user",
        question: "En cas de conflit sur une scène en format texte, que doit-on faire ?",
        options: [
            "Résoudre le conflit en éditant le fichier manuellement ou via un outil de merge",
            "Supprimer la scène",
            "Forcer un reimport",
            "Ignorer le conflit"
        ],
        correctAnswer: 0,
        explanation: "Un conflit texte se résout à la main ou avec un merge tool."
    },
    {
        id: "vc-user-10",
        category: "Version Control",
        level: "user",
        question: "Pourquoi ne faut-il jamais versionner le dossier Library/ dans un projet Unity ?",
        options: [
            "Car il est régénéré automatiquement et peut être très volumineux",
            "Car il contient les scènes",
            "Car il contient des .cs",
            "Car il ralentit le lancement du projet"
        ],
        correctAnswer: 0,
        explanation: "Library/ est généré à partir des Assets/ et ProjectSettings/."
    },
    {
        id: "vc-user-11",
        category: "Version Control",
        level: "user",
        question: "Quelle interface graphique populaire pour Git est souvent utilisée dans les équipes Unity ?",
        options: [
            "Sourcetree",
            "Photoshop",
            "Blender",
            "VLC"
        ],
        correctAnswer: 0,
        explanation: "Sourcetree est couramment utilisée pour le versionning Git en équipe."
    },
    {
        id: "vc-user-12",
        category: "Version Control",
        level: "user",
        question: "Que contient principalement un fichier .meta dans Unity ?",
        options: [
            "L’identifiant unique (GUID) et des infos d’asset",
            "Le code C#",
            "Les textures compressées",
            "Le log d’erreur"
        ],
        correctAnswer: 0,
        explanation: "Le .meta stocke le GUID, type d’asset, et parfois les settings."
    },
    {
        id: "vc-user-13",
        category: "Version Control",
        level: "user",
        question: "En équipe, pourquoi doit-on éviter de déplacer ou renommer des assets sans communiquer ?",
        options: [
            "Pour éviter les conflits de .meta et de scènes",
            "Parce que ça fait planter l’éditeur",
            "Pour gagner de la place sur le disque",
            "Parce que Git ne supporte pas les renommages"
        ],
        correctAnswer: 0,
        explanation: "Les renommages provoquent facilement des conflits si mal gérés."
    },
    {
        id: "vc-user-14",
        category: "Version Control",
        level: "user",
        question: "Dans Unity Collaborate, à quoi sert l’icône 'cloud' bleue à côté d’un fichier ?",
        options: [
            "À indiquer que le fichier est synchronisé avec le cloud",
            "À signaler un bug",
            "À changer le mode de rendu",
            "À afficher la taille du fichier"
        ],
        correctAnswer: 0,
        explanation: "Cloud bleu = fichier bien synchro avec Collaborate/Plastic SCM."
    },
    {
        id: "vc-user-15",
        category: "Version Control",
        level: "user",
        question: "Quel est l’avantage principal d’utiliser le format texte pour les Prefabs et scènes ?",
        options: [
            "Permettre le merge et la résolution de conflits",
            "Rendre le projet plus rapide",
            "Réduire la taille du build",
            "Améliorer les collisions physiques"
        ],
        correctAnswer: 0,
        explanation: "Format texte = possibilité de merge et d’inspection humaine."
    },
    {
        id: "vc-user-16",
        category: "Version Control",
        level: "user",
        question: "Lors de l’ouverture d’un projet Unity en équipe, un asset affiche 'Missing'. Que faire en priorité ?",
        options: [
            "Vérifier si l’asset et son .meta existent bien dans le VCS et sont bien synchronisés",
            "Supprimer la scène",
            "Relancer Unity sans rien faire",
            "Mettre à jour le .gitignore"
        ],
        correctAnswer: 0,
        explanation: "Vérifie que l’asset et son .meta sont présents/synchronisés."
    },
    {
        id: "vc-user-17",
        category: "Version Control",
        level: "user",
        question: "Quel service Unity propose une solution de version control intégrée compatible avec Git et Perforce ?",
        options: [
            "Unity Plastic SCM",
            "Unity Remote",
            "Unity Collaborate",
            "Unity Analytics"
        ],
        correctAnswer: 0,
        explanation: "Plastic SCM est la solution officielle Unity pour le versionning avancé."
    },
    {
        id: "vc-user-18",
        category: "Version Control",
        level: "user",
        question: "Quel fichier permet de configurer les exclusions de fichiers dans un repo Git ?",
        options: [
            ".gitignore",
            ".csproj",
            "README.md",
            ".meta"
        ],
        correctAnswer: 0,
        explanation: ".gitignore indique à Git quoi ignorer."
    },
    {
        id: "vc-user-19",
        category: "Version Control",
        level: "user",
        question: "Après un merge, un asset est en conflit. Quelle est la bonne démarche ?",
        options: [
            "Ouvrir le conflit dans un outil de merge, le résoudre, puis commit",
            "Ignorer l’asset",
            "Supprimer l’asset",
            "Forcer un push"
        ],
        correctAnswer: 0,
        explanation: "Il faut résoudre les conflits via merge tools adaptés."
    },
    {
        id: "vc-user-20",
        category: "Version Control",
        level: "user",
        question: "Quelle est la première étape à faire pour cloner un projet Unity existant avec Git ?",
        options: [
            "git clone URL_DU_DEPOT",
            "git push",
            "git commit",
            "Créer un .meta à la main"
        ],
        correctAnswer: 0,
        explanation: "git clone permet de récupérer le projet distant localement."
    },
    {
        id: "vc-assoc-1",
        category: "Version Control",
        level: "pro",
        question: "Quel est le risque principal si deux utilisateurs modifient le même fichier de scène Unity simultanément sur des branches différentes ?",
        options: [
            "Un conflit de merge difficile à résoudre",
            "La suppression du dossier Library/",
            "La perte automatique des .meta",
            "Aucune conséquence, Git fusionne tout seul"
        ],
        correctAnswer: 0,
        explanation: "Les scènes sont difficiles à fusionner sans communication préalable."
    },
    {
        id: "vc-assoc-2",
        category: "Version Control",
        level: "pro",
        question: "Que permet l’option 'Smart Merge (UnityYAMLMerge)' fournie avec Unity ?",
        options: [
            "Fusionner automatiquement des scènes et prefabs en format texte",
            "Compresser les textures",
            "Augmenter la résolution des assets",
            "Gérer les dépendances de script"
        ],
        correctAnswer: 0,
        explanation: "Smart Merge gère le merge auto des assets Unity en YAML."
    },
    {
        id: "vc-assoc-3",
        category: "Version Control",
        level: "pro",
        question: "Dans Plastic SCM, que permet le 'locking' sur un fichier de scène ?",
        options: [
            "Empêcher d’autres utilisateurs de modifier le fichier tant qu’il est verrouillé",
            "Réduire la taille du fichier",
            "Supprimer les branches inutilisées",
            "Générer automatiquement un merge"
        ],
        correctAnswer: 0,
        explanation: "Le locking évite les conflits sur les fichiers binaires ou critiques."
    },
    {
        id: "vc-assoc-4",
        category: "Version Control",
        level: "pro",
        question: "Quelle commande Git permet de récupérer les dernières modifications distantes dans ta branche locale ?",
        options: [
            "git pull",
            "git push",
            "git clone",
            "git reset"
        ],
        correctAnswer: 0,
        explanation: "git pull récupère et merge les changements distants."
    },
    {
        id: "vc-assoc-5",
        category: "Version Control",
        level: "pro",
        question: "Sur un projet Unity en équipe, quelle est la meilleure pratique pour gérer les gros assets binaires (ex: vidéos, textures HD) ?",
        options: [
            "Utiliser un système type Git LFS ou Plastic SCM",
            "Les zipper et les envoyer par email",
            "Les versionner en binaire dans le repo classique",
            "Les stocker dans Library/"
        ],
        correctAnswer: 0,
        explanation: "Git LFS ou Plastic SCM gèrent les gros fichiers de manière efficace."
    },
    {
        id: "vc-assoc-6",
        category: "Version Control",
        level: "pro",
        question: "Quelle conséquence directe si un fichier .meta est absent dans un commit contenant un asset Unity ?",
        options: [
            "L’asset perd son GUID et toutes ses références sont cassées",
            "Le projet ne compile plus",
            "Unity affiche une erreur de build",
            "L’asset est automatiquement supprimé"
        ],
        correctAnswer: 0,
        explanation: "Sans .meta, GUID perdu = asset orphelin dans la scène/projet."
    },
    {
        id: "vc-assoc-7",
        category: "Version Control",
        level: "pro",
        question: "Pourquoi est-il déconseillé de commiter directement sur la branche main/master d’un projet Unity ?",
        options: [
            "Pour éviter d’introduire des bugs ou conflits non testés en prod",
            "Parce que Git ne le permet pas",
            "Parce que ça supprime les .meta",
            "Car la scène ne sera plus accessible"
        ],
        correctAnswer: 0,
        explanation: "On évite le direct sur main/master pour préserver la stabilité du projet."
    },
    {
        id: "vc-assoc-8",
        category: "Version Control",
        level: "pro",
        question: "Que permet le fichier .gitignore dans un projet collaboratif Unity ?",
        options: [
            "Exclure des fichiers/dossiers temporaires ou inutiles du versionning",
            "Définir les droits utilisateurs",
            "Restaurer automatiquement les assets supprimés",
            "Changer le format de build"
        ],
        correctAnswer: 0,
        explanation: ".gitignore évite de polluer le repo avec des fichiers non pertinents."
    },
    {
        id: "vc-assoc-9",
        category: "Version Control",
        level: "pro",
        question: "Quelles étapes effectuer avant de fusionner une branche de feature dans la branche principale ?",
        options: [
            "S’assurer que la branche est à jour, passer tous les tests, résoudre les conflits, puis merge",
            "Supprimer le dossier Assets/",
            "Changer la version de Unity",
            "Push sans vérifier les conflits"
        ],
        correctAnswer: 0,
        explanation: "Update, test, résolution de conflit, puis merge propre."
    },
    {
        id: "vc-assoc-10",
        category: "Version Control",
        level: "pro",
        question: "En cas de conflit irrésoluble sur un asset binaire (ex: .fbx, .mp4), quelle pratique adopter ?",
        options: [
            "Reprendre la version d’un des deux contributeurs et documenter la décision",
            "Fusionner les deux fichiers avec un merge tool texte",
            "Ignorer le fichier",
            "Renommer le fichier dans les deux branches"
        ],
        correctAnswer: 0,
        explanation: "Les binaires ne se fusionnent pas : tu choisis un camp et tu documentes."
    },
    {
        id: "vc-assoc-11",
        category: "Version Control",
        level: "pro",
        question: "Sur Plastic SCM, que veut dire 'checkin' ?",
        options: [
            "Enregistrer les changements sur le serveur",
            "Mettre à jour la version de Unity",
            "Ajouter un asset au projet",
            "Supprimer une branche"
        ],
        correctAnswer: 0,
        explanation: "Checkin = commit/push sur le serveur Plastic SCM."
    },
    {
        id: "vc-assoc-12",
        category: "Version Control",
        level: "pro",
        question: "Que permet la commande Git 'revert' ?",
        options: [
            "Annuler un commit spécifique sans supprimer l’historique",
            "Supprimer tous les fichiers .meta",
            "Revenir à la version initiale du repo",
            "Changer la scène par défaut"
        ],
        correctAnswer: 0,
        explanation: "revert crée un commit inverse du commit ciblé."
    },
    {
        id: "vc-assoc-13",
        category: "Version Control",
        level: "pro",
        question: "Pourquoi faut-il éviter de versionner les builds Unity dans un repo Git classique ?",
        options: [
            "Parce qu’ils sont volumineux et inutiles à l’historique projet",
            "Parce que Git interdit les builds",
            "Car ça casse la scène",
            "Pour garder la place pour les .meta"
        ],
        correctAnswer: 0,
        explanation: "Un build doit être généré, pas versionné."
    },
    {
        id: "vc-assoc-14",
        category: "Version Control",
        level: "pro",
        question: "Quelle fonctionnalité de Unity Plastic SCM facilite la gestion des projets en équipe large avec beaucoup de fichiers binaires ?",
        options: [
            "File Locking",
            "Texture Compression",
            "Asset Bundles",
            "Incremental Build"
        ],
        correctAnswer: 0,
        explanation: "Le verrouillage évite que deux personnes ne travaillent sur le même fichier binaire."
    },
    {
        id: "vc-assoc-15",
        category: "Version Control",
        level: "pro",
        question: "Après avoir résolu un conflit de merge, quelle étape est indispensable avant de pouvoir pusher la fusion ?",
        options: [
            "Ajouter le fichier résolu au commit (git add ou équivalent)",
            "Supprimer le fichier",
            "Changer le nom du repo",
            "Modifier le .gitignore"
        ],
        correctAnswer: 0,
        explanation: "Il faut ajouter (stager) les fichiers modifiés pour pouvoir commit."
    },
    {
        id: "vc-assoc-16",
        category: "Version Control",
        level: "pro",
        question: "Quelle stratégie de workflow favorise la stabilité et la livraison continue d’un projet Unity en équipe ?",
        options: [
            "Gitflow avec branches feature, develop, release, main",
            "Travailler uniquement sur master",
            "Créer un fork par utilisateur",
            "Commit sur une branche random à chaque fois"
        ],
        correctAnswer: 0,
        explanation: "Gitflow ou un dérivé = stabilité + évolutivité sur projet Unity."
    },
    {
        id: "vc-assoc-17",
        category: "Version Control",
        level: "pro",
        question: "Lorsqu’un asset est supprimé dans Unity, mais son .meta reste dans le repo, que se passe-t-il à la prochaine ouverture du projet ?",
        options: [
            "Unity affiche un warning ou un asset manquant",
            "L’éditeur plante",
            "Le fichier est restauré automatiquement",
            "Le build échoue"
        ],
        correctAnswer: 0,
        explanation: "Un .meta orphelin génère un warning ou reste inutilisé."
    },
    {
        id: "vc-assoc-18",
        category: "Version Control",
        level: "pro",
        question: "Pourquoi Unity recommande-t-il de toujours travailler en 'Force Text' pour les Assets Serialization ?",
        options: [
            "Pour rendre les merges et la résolution de conflits possibles en équipe",
            "Pour gagner de la place sur le disque",
            "Pour améliorer le rendu visuel",
            "Pour accélérer les builds"
        ],
        correctAnswer: 0,
        explanation: "Le mode Force Text permet un vrai travail collaboratif."
    },
    {
        id: "vc-assoc-19",
        category: "Version Control",
        level: "pro",
        question: "Quel est le principal avantage à utiliser un système de versionning centralisé comme Plastic SCM plutôt que Git sur de très gros projets Unity ?",
        options: [
            "Gestion efficace des gros fichiers binaires et rapidité des opérations",
            "Plus de conflits à résoudre",
            "Moins besoin de documentation",
            "Git n’est pas compatible avec Unity"
        ],
        correctAnswer: 0,
        explanation: "Plastic SCM = support natif des binaires, plus adapté aux très gros projets."
    },
    {
        id: "vc-assoc-20",
        category: "Version Control",
        level: "pro",
        question: "Un collègue a modifié une prefab en même temps que toi. Comment retrouver qui a fait quelles modifications ?",
        options: [
            "En regardant l’historique du fichier dans le VCS (blame/annotate)",
            "En ouvrant le dossier Library/",
            "En réimportant le prefab",
            "En lançant le build"
        ],
        correctAnswer: 0,
        explanation: "L’outil blame ou annotate permet de voir qui a modifié quelle ligne."
    },{
        id: "vc-pro-1",
        category: "Version Control",
        level: "expert",
        question: "Quelle stratégie permet d’intégrer un workflow CI/CD (build automatique) avec un projet Unity versionné dans Plastic SCM ?",
        options: [
            "Déclencher un build pipeline à chaque checkin ou merge sur la branche principale",
            "Lancer les builds manuellement",
            "Utiliser un dossier Dropbox partagé",
            "Compresser le projet à chaque modification"
        ],
        correctAnswer: 0,
        explanation: "Un build pipeline automatisé permet de valider, builder, et livrer sans intervention manuelle."
    },
    {
        id: "vc-pro-2",
        category: "Version Control",
        level: "expert",
        question: "Sur un projet multi-site avec des milliers d’assets binaires, pourquoi Plastic SCM est-il plus adapté que Git natif ?",
        options: [
            "Gestion native du locking, performances sur binaires, et synchro multi-site optimisée",
            "Parce qu’il est open source",
            "Il force l’usage du cloud",
            "Il n’y a pas de différence"
        ],
        correctAnswer: 0,
        explanation: "Plastic SCM a été conçu pour la gestion des gros assets Unity, là où Git atteint ses limites."
    },
    {
        id: "vc-pro-3",
        category: "Version Control",
        level: "expert",
        question: "Dans un audit, pourquoi l’absence d’historique propre sur les .meta est problématique sur un projet Unity ?",
        options: [
            "On ne peut pas tracer l’origine ni la suppression d’un asset (GUID perdu = liens cassés, debug impossible)",
            "Ça augmente la taille du projet",
            "Les builds deviennent plus lents",
            "Ça n’a aucun impact"
        ],
        correctAnswer: 0,
        explanation: "Les .meta sont la clé de la cohérence des assets et de leur traçabilité."
    },
    {
        id: "vc-pro-4",
        category: "Version Control",
        level: "expert",
        question: "Quel mécanisme de sécurité doit être mis en place sur un repository contenant des données confidentielles Unity (par exemple, NDA, data client) ?",
        options: [
            "Contrôle d’accès fin (permissions, audit logs, encrypted storage)",
            "Autoriser l’accès à tous pour faciliter la collaboration",
            "Mettre le repo en public temporairement",
            "Supprimer tous les .gitignore"
        ],
        correctAnswer: 0,
        explanation: "Sécurité = gestion d’accès, audit, et chiffrement quand requis."
    },
    {
        id: "vc-pro-5",
        category: "Version Control",
        level: "expert",
        question: "Après un crash serveur Plastic SCM ayant causé une corruption de repo, quelle première étape effectuer pour tenter une restauration ?",
        options: [
            "Restaurer le dernier backup du repository",
            "Réinstaller Unity",
            "Supprimer les fichiers Library/",
            "Changer de VCS"
        ],
        correctAnswer: 0,
        explanation: "Toujours partir du dernier backup connu sain."
    },
    {
        id: "vc-pro-6",
        category: "Version Control",
        level: "expert",
        question: "Quelle solution CI/CD choisir pour builder automatiquement un projet Unity hébergé sur GitHub et supporter Mac, Windows, Linux ?",
        options: [
            "GitHub Actions ou un service cloud compatible Unity (ex: Unity Cloud Build, Jenkins avec runners custom)",
            "Automator sur Mac",
            "Rsync sur FTP",
            "Docker sans runner Unity"
        ],
        correctAnswer: 0,
        explanation: "GitHub Actions, Unity Cloud Build et Jenkins sont standards pour pipeline multiplateforme."
    },
    {
        id: "vc-pro-7",
        category: "Version Control",
        level: "expert",
        question: "Comment assurer l’intégrité des assets dans un repo Unity lors d’un audit qualité (ISO, norme interne) ?",
        options: [
            "Historique complet, protection contre les suppressions forcées, audit log, vérification de la cohérence GUID/.meta",
            "Supprimer régulièrement le dossier ProjectSettings/",
            "Changer la version de Unity à chaque build",
            "Désactiver les merges"
        ],
        correctAnswer: 0,
        explanation: "Audit qualité = traçabilité, intégrité, et possibilité de restaurer/valider l’historique."
    },
    {
        id: "vc-pro-8",
        category: "Version Control",
        level: "expert",
        question: "Quel est l’avantage principal du 'shelving' dans Plastic SCM sur des workflows complexes ?",
        options: [
            "Permet de sauvegarder temporairement du travail non terminé sans polluer l’historique ou la branch principale",
            "Oblige à commiter sur la main",
            "Accélère les builds",
            "Empêche les conflits"
        ],
        correctAnswer: 0,
        explanation: "Le shelving sert à stocker du travail en cours, pratique pour les interruptions ou pivots de tâches."
    },
    {
        id: "vc-pro-9",
        category: "Version Control",
        level: "expert",
        question: "Comment diagnostiquer un repo Git corrompu suite à un merge raté sur un projet Unity ?",
        options: [
            "git fsck, analyse des logs, vérification des HEAD/branches, et rebase ou restauration backup si nécessaire",
            "Supprimer le repo",
            "Rebuilder le projet Unity",
            "Changer d’IDE"
        ],
        correctAnswer: 0,
        explanation: "Diagnostic = commandes d’intégrité, lecture logs, restauration si non réparable."
    },
    {
        id: "vc-pro-10",
        category: "Version Control",
        level: "expert",
        question: "Quelle procédure appliquer pour intégrer de nouveaux développeurs dans un workflow VCS Unity déjà en production ?",
        options: [
            "Documentation claire (gitflow/plastic workflow), onboarding, droits d’accès progressifs, formation aux merges Unity",
            "Donner accès complet et sans guide",
            "Les laisser travailler hors versioning",
            "Faire un clone sans .meta"
        ],
        correctAnswer: 0,
        explanation: "Onboarding, documentation et droits sont obligatoires sur projets pro."
    },
    {
        id: "vc-pro-11",
        category: "Version Control",
        level: "expert",
        question: "Sur un build cloud (Unity Cloud Build ou équivalent), quel dossier doit impérativement être exclu du versionning pour éviter les corruptions/doublons ?",
        options: [
            "Library/",
            "Assets/",
            "Packages/",
            "ProjectSettings/"
        ],
        correctAnswer: 0,
        explanation: "Library/ contient du cache local non portable ni synchronisable."
    },
    {
        id: "vc-pro-12",
        category: "Version Control",
        level: "expert",
        question: "Comment automatiser l’ajout de fichiers .meta oubliés lors des commits sur un projet Unity ?",
        options: [
            "En utilisant un pre-commit hook (Git/Plastic SCM) pour vérifier et générer les .meta manquants",
            "Commit tous les fichiers Library/",
            "Forcer Unity à recompiler",
            "Rien, c’est impossible"
        ],
        correctAnswer: 0,
        explanation: "Pre-commit hooks peuvent prévenir l’oubli critique des .meta."
    },
    {
        id: "vc-pro-13",
        category: "Version Control",
        level: "expert",
        question: "Lors d’une migration d’un gros projet Git vers Plastic SCM, quelle étape est la plus critique pour éviter la perte d’historique ou de liens d’assets ?",
        options: [
            "Maintenir l’association .meta/GUID et valider l’import complet de l’historique",
            "Changer tous les GUID à la main",
            "Supprimer tous les fichiers cachés",
            "Renommer les scenes"
        ],
        correctAnswer: 0,
        explanation: "La correspondance GUID/.meta garantit la cohérence des assets après migration."
    },
    {
        id: "vc-pro-14",
        category: "Version Control",
        level: "expert",
        question: "Quelle technique permet de réduire la taille d’un repo Unity hébergé depuis plusieurs années avec des fichiers obsolètes volumineux ?",
        options: [
            "Faire un git gc suivi d’un filter-branch ou BFG Repo-Cleaner pour purger les gros fichiers inutiles",
            "Supprimer tous les tags",
            "Changer de repo",
            "Renommer les assets"
        ],
        correctAnswer: 0,
        explanation: "Git gc, filter-branch, et BFG permettent de nettoyer le repo."
    },
    {
        id: "vc-pro-15",
        category: "Version Control",
        level: "expert",
        question: "Pour garantir un audit de sécurité sur le repo (confidentialité, conformité), quelles traces/logs doivent être obligatoirement conservés ?",
        options: [
            "Audit logs des accès, des modifications, et des suppressions de branches ou assets critiques",
            "Seuls les commits",
            "Aucune trace, juste les builds",
            "L’historique du dossier Library/"
        ],
        correctAnswer: 0,
        explanation: "Un vrai audit exige la conservation des logs d’accès et de modif."
    },
    {
        id: "vc-pro-16",
        category: "Version Control",
        level: "expert",
        question: "Quelle différence majeure entre Plastic SCM et Git pour la gestion d’un projet Unity multi-sites, en dehors de la taille des assets ?",
        options: [
            "Plastic SCM gère nativement la synchronisation multi-site, Git nécessite des solutions annexes",
            "Git permet le locking sur tous les fichiers",
            "Plastic n’est pas compatible Unity",
            "Il n’y a aucune différence"
        ],
        correctAnswer: 0,
        explanation: "La synchro multi-site sur Plastic SCM est native et pensée pour les gros studios."
    },
    {
        id: "vc-pro-17",
        category: "Version Control",
        level: "expert",
        question: "Comment garantir que la branche principale reste toujours déployable/propre sur un projet Unity en équipe large ?",
        options: [
            "CI/CD, règles de merge strictes, validation automatique avant merge, tests auto, et code review obligatoire",
            "Permettre le merge à tout moment",
            "Désactiver la CI",
            "Versionner les builds"
        ],
        correctAnswer: 0,
        explanation: "Seule une discipline CI/CD et des règles solides garantissent une main stable."
    },
    {
        id: "vc-pro-18",
        category: "Version Control",
        level: "expert",
        question: "En cas de bug critique identifié post-merge sur la branche main, quelle action professionnelle prendre en priorité ?",
        options: [
            "Faire un hotfix sur une branche dédiée et merger dès validation",
            "Supprimer le commit fautif du repo",
            "Rollback toute la branche",
            "Ignorer l’erreur"
        ],
        correctAnswer: 0,
        explanation: "On fait un hotfix (fix direct et merge rapide)."
    },
    {
        id: "vc-pro-19",
        category: "Version Control",
        level: "expert",
        question: "Pour réduire les risques de conflits sur les scènes Unity, quelle organisation recommander ?",
        options: [
            "Découper les scènes en plusieurs sous-scenes (additive), appliquer le locking sur les scènes critiques, et communiquer",
            "Travailler toujours à 2 sur la même scène",
            "Versionner les scènes en binaire",
            "Ignorer les .meta"
        ],
        correctAnswer: 0,
        explanation: "Sous-scenes, locking, et communication = clé pour gros projets Unity."
    },
    {
        id: "vc-pro-20",
        category: "Version Control",
        level: "expert",
        question: "En cas de faille de sécurité détectée sur le repo (clé, asset sensible), quelle procédure appliquer immédiatement ?",
        options: [
            "Révoquer la clé, purger l’historique si nécessaire, communiquer à l’équipe et mettre à jour tous les secrets concernés",
            "Juste supprimer le fichier fautif",
            "Relancer Unity",
            "Ignorer l’incident"
        ],
        correctAnswer: 0,
        explanation: "Sécurité : révoquer, purger, notifier, et tout changer ce qui est compromis."
    },

// Testing/QA
    {
        id: "qa-user-1",
        category: "Testing/QA",
        level: "user",
        question: "Quel bouton de l’éditeur Unity permet de lancer un test manuel du jeu dans la scène en cours ?",
        options: [
            "Play (triangle en haut de l’éditeur)",
            "Build",
            "Console",
            "Package Manager"
        ],
        correctAnswer: 0,
        explanation: "Le bouton Play permet de tester le jeu en temps réel directement dans l’éditeur."
    },
    {
        id: "qa-user-2",
        category: "Testing/QA",
        level: "user",
        question: "En Play Mode, que se passe-t-il si tu modifies la position d’un objet dans la scène ?",
        options: [
            "La modification est annulée dès qu’on sort du Play Mode",
            "Le changement est sauvegardé",
            "L’objet disparaît",
            "L’éditeur plante"
        ],
        correctAnswer: 0,
        explanation: "Toutes les modifications faites en Play Mode sont perdues quand tu arrêtes le mode Play."
    },
    {
        id: "qa-user-3",
        category: "Testing/QA",
        level: "user",
        question: "À quoi sert la fenêtre Console dans Unity ?",
        options: [
            "Afficher les messages d’erreur, d’avertissement et de debug",
            "Modifier le code C#",
            "Créer des assets",
            "Changer la caméra"
        ],
        correctAnswer: 0,
        explanation: "La Console permet de surveiller tout ce qui se passe pendant le test du jeu."
    },
    {
        id: "qa-user-4",
        category: "Testing/QA",
        level: "user",
        question: "Comment signaler un bug découvert lors d’un test manuel si tu travailles en équipe ?",
        options: [
            "Le documenter (capture, description, étapes) sur l’outil utilisé par l’équipe (Trello, Jira, Notion...)",
            "Fermer Unity",
            "Attendre la prochaine réunion",
            "Supprimer la scène"
        ],
        correctAnswer: 0,
        explanation: "Un bug doit toujours être tracé dans l’outil de suivi de l’équipe."
    },
    {
        id: "qa-user-5",
        category: "Testing/QA",
        level: "user",
        question: "Quel outil Unity te permet de suivre les logs d’exécution pendant un test ?",
        options: [
            "Console",
            "Inspector",
            "Project",
            "Lighting"
        ],
        correctAnswer: 0,
        explanation: "La fenêtre Console affiche tous les logs, erreurs et warnings du projet."
    },
    {
        id: "qa-user-6",
        category: "Testing/QA",
        level: "user",
        question: "Pourquoi est-il important de tester son jeu sur plusieurs plateformes (PC, mobile, WebGL) ?",
        options: [
            "Les bugs peuvent être différents selon la plateforme",
            "Pour occuper le temps",
            "C’est obligatoire par Unity",
            "Aucune différence"
        ],
        correctAnswer: 0,
        explanation: "Les comportements diffèrent souvent selon la plateforme, il faut donc toujours tester sur chaque cible."
    },
    {
        id: "qa-user-7",
        category: "Testing/QA",
        level: "user",
        question: "Quand tu vois une erreur 'NullReferenceException' dans la console Unity, ça signifie :",
        options: [
            "Une variable ou un objet n’a pas été initialisé avant d’être utilisé",
            "Le projet est bien codé",
            "Il manque un asset graphique",
            "Unity doit être mis à jour"
        ],
        correctAnswer: 0,
        explanation: "Cette erreur indique que tu tentes d’utiliser une référence nulle dans ton code."
    },
    {
        id: "qa-user-8",
        category: "Testing/QA",
        level: "user",
        question: "Comment peux-tu vérifier si un bouton UI fonctionne correctement dans une scène ?",
        options: [
            "Cliquer dessus en Play Mode et vérifier l’action attendue",
            "L’éditer dans le Project",
            "Changer son nom",
            "Supprimer sa couleur"
        ],
        correctAnswer: 0,
        explanation: "Le test manuel le plus simple : cliquer dessus pendant le jeu et vérifier la réaction."
    },
    {
        id: "qa-user-9",
        category: "Testing/QA",
        level: "user",
        question: "Quelle bonne pratique permet d’éviter les bugs oubliés avant livraison d’un projet Unity ?",
        options: [
            "Faire une checklist de tests avant chaque build",
            "Ignorer les warnings",
            "Livrer sans vérifier",
            "Tester uniquement une scène"
        ],
        correctAnswer: 0,
        explanation: "Sans checklist, tu oublieras toujours de vérifier quelque chose."
    },
    {
        id: "qa-user-10",
        category: "Testing/QA",
        level: "user",
        question: "Que dois-tu faire avant d’envoyer une build au client ou à l’équipe ?",
        options: [
            "Tester toutes les fonctionnalités principales du jeu ou application",
            "Juste changer le nom du fichier",
            "Supprimer les logs",
            "Rien, le build suffit"
        ],
        correctAnswer: 0,
        explanation: "Un minimum de QA s’impose : toujours vérifier les fonctions clés avant livraison."
    },
    {
        id: "qa-user-11",
        category: "Testing/QA",
        level: "user",
        question: "Où peut-on voir les warnings jaunes pendant le test d’un projet Unity ?",
        options: [
            "Dans la Console",
            "Dans la fenêtre Hierarchy",
            "Sur le bureau",
            "Dans la fenêtre Animator"
        ],
        correctAnswer: 0,
        explanation: "Les warnings sont visibles dans la Console en jaune."
    },
    {
        id: "qa-user-12",
        category: "Testing/QA",
        level: "user",
        question: "Quel raccourci permet de relancer rapidement le Play Mode dans Unity ?",
        options: [
            "Ctrl + P (ou Cmd + P sur Mac)",
            "F1",
            "Alt + Tab",
            "Shift + S"
        ],
        correctAnswer: 0,
        explanation: "Ctrl/Cmd + P permet de toggler le Play Mode instantanément."
    },
    {
        id: "qa-user-13",
        category: "Testing/QA",
        level: "user",
        question: "Pourquoi est-il conseillé de regarder les logs d’erreur à chaque test ?",
        options: [
            "Pour repérer les problèmes cachés ou discrets non visibles à l’écran",
            "Juste pour remplir la console",
            "Parce que Unity l’exige",
            "Ça fait joli"
        ],
        correctAnswer: 0,
        explanation: "Beaucoup de bugs ne sont visibles que dans les logs, pas à l’écran."
    },
    {
        id: "qa-user-14",
        category: "Testing/QA",
        level: "user",
        question: "En QA, quel est l’objectif d’un rapport de bug ?",
        options: [
            "Décrire clairement le problème pour qu’il soit reproductible et corrigeable par un dev",
            "Se plaindre de la difficulté",
            "Supprimer le bug tout seul",
            "Refaire le projet"
        ],
        correctAnswer: 0,
        explanation: "Un rapport de bug doit permettre à n’importe qui de reproduire le bug et de le corriger."
    },
    {
        id: "qa-user-15",
        category: "Testing/QA",
        level: "user",
        question: "Quelle action simple peut te permettre de savoir si un bug est lié à une scène ou à tout le projet ?",
        options: [
            "Tester le même élément dans une autre scène",
            "Supprimer le projet",
            "Changer la couleur du GameObject",
            "Fermer Unity"
        ],
        correctAnswer: 0,
        explanation: "Tester sur une autre scène permet de cerner la portée du bug."
    },
    {
        id: "qa-user-16",
        category: "Testing/QA",
        level: "user",
        question: "En Play Mode, comment repérer un freeze ou une boucle infinie ?",
        options: [
            "Unity ne répond plus, la Console affiche souvent des erreurs répétées",
            "L’objet change de couleur",
            "Le projet se ferme normalement",
            "La souris change"
        ],
        correctAnswer: 0,
        explanation: "Un freeze ou une boucle infinie bloque Unity, souvent avec des messages répétés en Console."
    },
    {
        id: "qa-user-17",
        category: "Testing/QA",
        level: "user",
        question: "Lors d’un test, pourquoi noter les étapes pour reproduire un bug ?",
        options: [
            "Pour permettre à d’autres de reproduire exactement le problème",
            "Pour gagner du temps",
            "Ce n’est pas utile",
            "Pour supprimer le bug"
        ],
        correctAnswer: 0,
        explanation: "Sans steps précis, un bug n’est pas réparable par un autre membre de l’équipe."
    },
    {
        id: "qa-user-18",
        category: "Testing/QA",
        level: "user",
        question: "À quoi sert la touche 'Clear' dans la fenêtre Console ?",
        options: [
            "Effacer tous les messages visibles dans la Console",
            "Fermer Unity",
            "Supprimer le projet",
            "Recompiler le code"
        ],
        correctAnswer: 0,
        explanation: "Clear nettoie l’affichage des logs dans la Console, pratique pour voir uniquement les nouveaux messages."
    },
    {
        id: "qa-user-19",
        category: "Testing/QA",
        level: "user",
        question: "Pourquoi faut-il relancer plusieurs fois certains tests ?",
        options: [
            "Certains bugs n’apparaissent que dans des conditions précises ou après plusieurs cycles",
            "Ça ne sert à rien",
            "C’est une règle de Unity",
            "Juste pour s’amuser"
        ],
        correctAnswer: 0,
        explanation: "Les bugs intermittents ne se révèlent que sur plusieurs runs."
    },
    {
        id: "qa-user-20",
        category: "Testing/QA",
        level: "user",
        question: "Quel est l’intérêt d’utiliser les logs personnalisés (Debug.Log) dans un script Unity ?",
        options: [
            "Suivre le comportement du code pendant les tests",
            "Décorer la Console",
            "Ralentir le jeu",
            "Supprimer les erreurs"
        ],
        correctAnswer: 0,
        explanation: "Les logs aident à comprendre ce qui se passe dans ton script lors des tests."
    },
    {
        id: "qa-associate-1",
        category: "Testing/QA",
        level: "pro",
        question: "Quel outil Unity permet de lancer des tests unitaires automatisés ?",
        options: [
            "Test Runner",
            "Profiler",
            "Build Settings",
            "Animation Window"
        ],
        correctAnswer: 0,
        explanation: "Test Runner permet de lancer des tests automatisés pour vérifier le comportement du code."
    },
    {
        id: "qa-associate-2",
        category: "Testing/QA",
        level: "pro",
        question: "À quoi sert un test automatisé par rapport à un test manuel ?",
        options: [
            "Il s’exécute tout seul et garantit la reproductibilité, évitant les oublis humains",
            "Il teste le design",
            "Il rend les builds plus légères",
            "Il supprime tous les bugs"
        ],
        correctAnswer: 0,
        explanation: "L’automatisation évite d’oublier des tests et permet une validation systématique à chaque modification."
    },
    {
        id: "qa-associate-3",
        category: "Testing/QA",
        level: "pro",
        question: "Dans le Test Runner Unity, quels types de tests peut-on exécuter ?",
        options: [
            "Edit Mode et Play Mode",
            "Build Mode et Light Mode",
            "Profiler Mode et Scene Mode",
            "Console Mode uniquement"
        ],
        correctAnswer: 0,
        explanation: "Edit Mode pour le code pur, Play Mode pour tester le comportement en runtime."
    },
    {
        id: "qa-associate-4",
        category: "Testing/QA",
        level: "pro",
        question: "Quel résultat indique qu’un test automatisé a échoué dans le Test Runner ?",
        options: [
            "Rouge (failed)",
            "Vert (passed)",
            "Bleu",
            "Gris"
        ],
        correctAnswer: 0,
        explanation: "Un test échoué s’affiche toujours en rouge dans l’interface Unity."
    },
    {
        id: "qa-associate-5",
        category: "Testing/QA",
        level: "pro",
        question: "Quel est l’intérêt d’écrire des tests sur les scripts de gestion de score dans un jeu ?",
        options: [
            "S’assurer que l’évolution des scores fonctionne comme prévu après chaque modif",
            "Faire joli dans le projet",
            "Augmenter la difficulté du jeu",
            "Rendre le jeu plus rapide"
        ],
        correctAnswer: 0,
        explanation: "Tester la logique métier (score, points, niveaux) permet d’éviter les bugs de progression."
    },
    {
        id: "qa-associate-6",
        category: "Testing/QA",
        level: "pro",
        question: "Que dois-tu vérifier dans un test Play Mode automatisé sur un bouton UI ?",
        options: [
            "Que le bouton déclenche bien l’action attendue lors d’un click",
            "Que le bouton a la bonne couleur",
            "Que le bouton existe dans le Project",
            "Que le nom du bouton est correct"
        ],
        correctAnswer: 0,
        explanation: "L’action du bouton (callback/event) est le cœur du test en Play Mode."
    },
    {
        id: "qa-associate-7",
        category: "Testing/QA",
        level: "pro",
        question: "Pourquoi les logs personnalisés (Debug.Log) sont-ils utiles lors des tests ?",
        options: [
            "Pour comprendre ce que fait le code à chaque étape et diagnostiquer les problèmes",
            "Pour effacer la Console",
            "Pour cacher les erreurs",
            "Pour ralentir le build"
        ],
        correctAnswer: 0,
        explanation: "Un bon log te dit où ça coince et t’évite de perdre du temps à deviner le comportement du script."
    },
    {
        id: "qa-associate-8",
        category: "Testing/QA",
        level: "pro",
        question: "Quel est le risque d’ignorer les warnings jaunes dans la Console lors de la QA ?",
        options: [
            "Un warning peut cacher un bug réel qui passera inaperçu",
            "Aucun, c’est cosmétique",
            "Les warnings disparaissent après le build",
            "Ça rend le projet plus léger"
        ],
        correctAnswer: 0,
        explanation: "Un warning, c’est souvent un bug ou une mauvaise pratique qui peut devenir critique plus tard."
    },
    {
        id: "qa-associate-9",
        category: "Testing/QA",
        level: "pro",
        question: "Pour tester la compatibilité multiplateforme d’un projet Unity, il faut :",
        options: [
            "Compiler et lancer des builds sur chaque plateforme cible (PC, Android, iOS, WebGL…)",
            "Tester uniquement sur l’éditeur",
            "Vérifier uniquement la documentation",
            "Changer la couleur du Canvas"
        ],
        correctAnswer: 0,
        explanation: "Le comportement peut changer selon la plateforme, donc toujours builder/tester sur chaque cible."
    },
    {
        id: "qa-associate-10",
        category: "Testing/QA",
        level: "pro",
        question: "Quand utiliser l’option 'Clear On Play' dans la fenêtre Console ?",
        options: [
            "Pour effacer automatiquement les logs précédents à chaque lancement du Play Mode",
            "Pour effacer le projet",
            "Pour recompiler tous les scripts",
            "Pour sauvegarder la scène"
        ],
        correctAnswer: 0,
        explanation: "Clear On Play te permet de voir les nouveaux logs sans pollution des anciens messages."
    },
    {
        id: "qa-associate-11",
        category: "Testing/QA",
        level: "pro",
        question: "Que représente le coverage en testing automatisé ?",
        options: [
            "Le pourcentage du code réellement exécuté par les tests",
            "La vitesse du build",
            "Le taux d’erreurs dans la console",
            "Le nombre de warnings"
        ],
        correctAnswer: 0,
        explanation: "Coverage = couverture du code, essentiel pour s’assurer que les tests touchent vraiment le cœur de la logique."
    },
    {
        id: "qa-associate-12",
        category: "Testing/QA",
        level: "pro",
        question: "Pourquoi doit-on vérifier les edge cases (cas limites) lors des tests QA ?",
        options: [
            "Pour s’assurer que l’application ne crash pas ou ne bugge pas dans des situations extrêmes",
            "Pour remplir la fiche QA",
            "Pour finir plus vite",
            "Parce que c’est la règle Unity"
        ],
        correctAnswer: 0,
        explanation: "Les edge cases sont sources majeures de crash et de comportements imprévus."
    },
    {
        id: "qa-associate-13",
        category: "Testing/QA",
        level: "pro",
        question: "Quel type de test permet de vérifier qu’une méthode retourne bien le résultat attendu dans tous les cas ?",
        options: [
            "Test unitaire",
            "Test visuel",
            "Test de build",
            "Test de performance"
        ],
        correctAnswer: 0,
        explanation: "Le test unitaire vérifie la validité d’une méthode en conditions contrôlées."
    },
    {
        id: "qa-associate-14",
        category: "Testing/QA",
        level: "pro",
        question: "Dans un bug report efficace, il faut toujours :",
        options: [
            "Décrire les étapes précises pour reproduire, le résultat attendu, le résultat obtenu, et attacher des captures",
            "Écrire 'ça marche pas'",
            "Supprimer le code concerné",
            "Changer le nom du projet"
        ],
        correctAnswer: 0,
        explanation: "Un bug non documenté clairement est quasi impossible à corriger efficacement."
    },
    {
        id: "qa-associate-15",
        category: "Testing/QA",
        level: "pro",
        question: "Quel outil Unity permet d’inspecter la mémoire utilisée par le jeu lors d’un test ?",
        options: [
            "Profiler",
            "Animation Timeline",
            "Inspector",
            "Lighting"
        ],
        correctAnswer: 0,
        explanation: "Le Profiler permet d’analyser la mémoire, les perfs, les allocations…"
    },
    {
        id: "qa-associate-16",
        category: "Testing/QA",
        level: "pro",
        question: "Comment détecter une fuite mémoire lors d’un test en Play Mode ?",
        options: [
            "En surveillant les courbes de mémoire dans le Profiler sur plusieurs cycles",
            "En fermant l’éditeur",
            "En changeant la couleur de la scène",
            "En supprimant un asset"
        ],
        correctAnswer: 0,
        explanation: "Si la mémoire augmente sans jamais redescendre, tu as une fuite."
    },
    {
        id: "qa-associate-17",
        category: "Testing/QA",
        level: "pro",
        question: "Qu’est-ce qu’un faux positif en QA ?",
        options: [
            "Un test qui indique un succès alors qu’il aurait dû échouer",
            "Un warning ignoré",
            "Une couleur de bouton incorrecte",
            "Un crash Unity"
        ],
        correctAnswer: 0,
        explanation: "Faux positif : le test n’a pas détecté le bug qui existe pourtant."
    },
    {
        id: "qa-associate-18",
        category: "Testing/QA",
        level: "pro",
        question: "Quel est l’intérêt de faire des tests de performance sur le build final (pas que sur l’éditeur) ?",
        options: [
            "Les perfs en build ne sont pas toujours identiques à celles de l’éditeur",
            "C’est inutile, c’est pareil",
            "Pour décorer le build",
            "Pour voir la couleur de la console"
        ],
        correctAnswer: 0,
        explanation: "Optimiser dans l’éditeur ne suffit pas : il faut mesurer la vraie perf du build final."
    },
    {
        id: "qa-associate-19",
        category: "Testing/QA",
        level: "pro",
        question: "Quand faut-il retester une fonctionnalité après correction d’un bug ?",
        options: [
            "Toujours après correction pour vérifier que le bug est vraiment fixé",
            "Jamais",
            "Uniquement si le chef le demande",
            "Quand on a le temps"
        ],
        correctAnswer: 0,
        explanation: "Un bug peut ressurgir si la correction est partielle ou touche d’autres modules."
    },
    {
        id: "qa-associate-20",
        category: "Testing/QA",
        level: "pro",
        question: "Quelle bonne pratique augmente la fiabilité du processus QA d’un projet Unity ?",
        options: [
            "Automatiser les tests critiques et faire relire tous les retours QA par plusieurs membres",
            "Ignorer les tests",
            "Ne faire qu’un test final",
            "Livrer la build sans vérifier"
        ],
        correctAnswer: 0,
        explanation: "Automatisation + validation croisée = fiabilité max sur la détection de bugs."
    },
    {
        id: "qa-pro-1",
        category: "Testing/QA",
        level: "expert",
        question: "Quelle approche permet de s’assurer qu’une régression n’est pas introduite après une mise à jour majeure du code ?",
        options: [
            "Mettre en place une suite de tests de non-régression automatisés",
            "Relire le code à la main",
            "Faire un build une fois par semaine",
            "Vérifier uniquement les warnings"
        ],
        correctAnswer: 0,
        explanation: "La non-régression se gère par des tests automatisés systématiques, qui doivent passer à chaque livraison."
    },
    {
        id: "qa-pro-2",
        category: "Testing/QA",
        level: "expert",
        question: "Dans Unity Test Runner, que permet le mocking (mock object) lors des tests unitaires ?",
        options: [
            "Simuler des dépendances (services, objets externes) pour isoler le code testé",
            "Optimiser les textures",
            "Créer des assets temporaires",
            "Ajouter des logs au Profiler"
        ],
        correctAnswer: 0,
        explanation: "Le mocking permet de tester une méthode indépendamment de son environnement ou de ses dépendances externes."
    },
    {
        id: "qa-pro-3",
        category: "Testing/QA",
        level: "expert",
        question: "Quel outil ou framework Unity permet d’intégrer des tests automatisés dans un pipeline CI/CD ?",
        options: [
            "Unity Test Framework avec exécution CLI (command line)",
            "Unity Collaborate",
            "Timeline",
            "Package Manager"
        ],
        correctAnswer: 0,
        explanation: "Les tests peuvent être exécutés en ligne de commande dans une CI (GitHub Actions, Azure Pipelines, etc.)."
    },
    {
        id: "qa-pro-4",
        category: "Testing/QA",
        level: "expert",
        question: "Quel est l’intérêt d’un rapport de coverage dans un pipeline de build Unity ?",
        options: [
            "Visualiser le pourcentage de code effectivement testé pour prioriser l’écriture de nouveaux tests",
            "Réduire le temps de compilation",
            "Changer le fond d’écran du projet",
            "Augmenter la résolution des textures"
        ],
        correctAnswer: 0,
        explanation: "Le coverage permet de cibler les zones de code mal ou pas testées."
    },
    {
        id: "qa-pro-5",
        category: "Testing/QA",
        level: "expert",
        question: "Pourquoi instrumenter des tests de performance automatisés (benchmarks) sur des builds réels et non l’éditeur ?",
        options: [
            "Les optimisations et performances réelles ne sont fiables que sur le build cible (PC, mobile, console), l’éditeur masque souvent les problèmes",
            "L’éditeur est toujours plus rapide",
            "Les benchmarks ne s’exécutent qu’en Editor",
            "Le build ne supporte pas les tests"
        ],
        correctAnswer: 0,
        explanation: "Le runtime buildé a un comportement radicalement différent (garbage collection, threads, device)."
    },
    {
        id: "qa-pro-6",
        category: "Testing/QA",
        level: "expert",
        question: "Quel pattern améliore la testabilité du code dans Unity ?",
        options: [
            "Inversion de dépendance (Dependency Injection)",
            "Usage de variables globales",
            "Appeler GameObject.Find() partout",
            "Tout mettre en static"
        ],
        correctAnswer: 0,
        explanation: "L’injection de dépendance rend les modules testables et interchangeables (mock, stub, etc.)."
    },
    {
        id: "qa-pro-7",
        category: "Testing/QA",
        level: "expert",
        question: "Comment éviter les faux négatifs dans des tests automatisés multi-plateformes Unity ?",
        options: [
            "S’assurer que les tests couvrent bien les différences de plateforme (Input, API, perfs) et éviter toute dépendance à l’environnement de l’éditeur",
            "Ne jamais utiliser les coroutines",
            "Ne pas faire de test sur mobile",
            "N’utiliser que le mode Play"
        ],
        correctAnswer: 0,
        explanation: "Chaque plateforme peut avoir des comportements ou APIs différents : tests robustes = code indépendant de l’éditeur."
    },
    {
        id: "qa-pro-8",
        category: "Testing/QA",
        level: "expert",
        question: "Que permet la configuration d’un test de performance avec Unity Performance Testing Extension ?",
        options: [
            "Mesurer précisément les temps d’exécution de code/logiciel dans un contexte reproductible",
            "Accélérer le build",
            "Détecter la lumière dans la scène",
            "Modifier les assets du projet"
        ],
        correctAnswer: 0,
        explanation: "Unity Performance Testing Extension permet du benchmark scripté, reproductible et traçable."
    },
    {
        id: "qa-pro-9",
        category: "Testing/QA",
        level: "expert",
        question: "Pourquoi l’isolation des tests est-elle critique en QA avancée ?",
        options: [
            "Pour garantir que chaque test s’exécute dans un environnement propre, sans dépendre d’un état global ou d’un autre test",
            "Pour gagner du temps en développement",
            "Pour réduire la taille du code",
            "Pour décorer la console"
        ],
        correctAnswer: 0,
        explanation: "Un test pollué par l’état des autres est inutilisable en CI/CD ou dans des suites massives."
    },
    {
        id: "qa-pro-10",
        category: "Testing/QA",
        level: "expert",
        question: "Comment gérer un crash aléatoire qui n’apparaît que sur certains devices Android lors des builds QA ?",
        options: [
            "Utiliser les logs natifs du device (adb logcat), des crash reporters, et reproduire sur plusieurs modèles pour cibler la source",
            "Changer le script",
            "Augmenter la RAM du PC",
            "Rebooter l’éditeur"
        ],
        correctAnswer: 0,
        explanation: "La source réelle des crashs mobiles ne s’identifie qu’avec du vrai debug device + logs."
    },
    {
        id: "qa-pro-11",
        category: "Testing/QA",
        level: "expert",
        question: "Quelle stratégie permet de prioriser les cas de tests dans une suite massive (plus de 500 tests) ?",
        options: [
            "Classer les tests par criticité (core features, edge cases, business value), puis exécuter d’abord ceux à fort impact",
            "Lancer tous les tests en vrac",
            "Écrire moins de tests",
            "Ignorer les tests longs"
        ],
        correctAnswer: 0,
        explanation: "La criticité (impact business et plantage) doit primer dans la priorisation QA."
    },
    {
        id: "qa-pro-12",
        category: "Testing/QA",
        level: "expert",
        question: "Dans le process QA, pourquoi automatiser les tests de build et déploiement ?",
        options: [
            "Pour garantir que chaque livraison produit un build propre, exécutable, et non régressé sans intervention humaine",
            "Pour aller plus vite uniquement",
            "Pour faire des screenshots",
            "Pour économiser du stockage"
        ],
        correctAnswer: 0,
        explanation: "Automatiser build/test = détecter les régressions avant livraison, sans oubli."
    },
    {
        id: "qa-pro-13",
        category: "Testing/QA",
        level: "expert",
        question: "Que permet le flag -runTests dans la CLI Unity ?",
        options: [
            "Lancer les tests automatiquement lors d’un build en ligne de commande",
            "Supprimer les assets inutilisés",
            "Redémarrer le PC",
            "Mettre à jour les packages"
        ],
        correctAnswer: 0,
        explanation: "C’est la base pour l’intégration dans un pipeline CI/CD."
    },
    {
        id: "qa-pro-14",
        category: "Testing/QA",
        level: "expert",
        question: "Pourquoi documenter systématiquement les étapes de reproduction d’un bug dans un ticket QA avancé ?",
        options: [
            "Pour garantir la reproductibilité et permettre au dev de corriger rapidement",
            "Pour faire plaisir au chef de projet",
            "Pour augmenter la complexité du projet",
            "Pour changer la couleur du bouton"
        ],
        correctAnswer: 0,
        explanation: "Un bug sans étapes claires n’est jamais fixé à coup sûr."
    },
    {
        id: "qa-pro-15",
        category: "Testing/QA",
        level: "expert",
        question: "Quel est le principal indicateur de qualité d’un pipeline de tests Unity automatisés en production ?",
        options: [
            "Taux de succès des builds/tests sur plusieurs plateformes (PC, mobile, console) sans intervention humaine",
            "Temps de compilation",
            "Nombre de prefabs dans le projet",
            "Niveau de lumière dans la scène"
        ],
        correctAnswer: 0,
        explanation: "Stabilité, non régression, absence d’erreur post-livraison = top qualité pipeline QA."
    },
    {
        id: "qa-pro-16",
        category: "Testing/QA",
        level: "expert",
        question: "Quel framework ou outil externe permet d’injecter des mocks/fakes pour tester le réseau dans Unity ?",
        options: [
            "NSubstitute, Moq, FakeItEasy (lib .NET compatibles Unity)",
            "Audio Mixer",
            "Unity Recorder",
            "Animator Controller"
        ],
        correctAnswer: 0,
        explanation: "Unity supporte la plupart des frameworks de mock/double du monde .NET."
    },
    {
        id: "qa-pro-17",
        category: "Testing/QA",
        level: "expert",
        question: "Qu’est-ce qu’un flaky test dans une pipeline QA ?",
        options: [
            "Un test qui échoue ou réussit de façon aléatoire selon l’environnement ou le timing",
            "Un test rapide",
            "Un warning de build",
            "Un test uniquement pour l’éditeur"
        ],
        correctAnswer: 0,
        explanation: "Un test non stable n’a aucune valeur QA (flaky test = à corriger ou isoler d’urgence)."
    },
    {
        id: "qa-pro-18",
        category: "Testing/QA",
        level: "expert",
        question: "Comment détecter des memory leaks lors de tests automatisés batch sur plusieurs builds ?",
        options: [
            "En comparant les logs et graphs de mémoire à chaque run, automatisés, sur chaque build",
            "En lançant le jeu une fois",
            "En changeant le mode de scène",
            "En supprimant un asset"
        ],
        correctAnswer: 0,
        explanation: "Les leaks apparaissent dans les logs/graphs sur plusieurs runs, pas sur un run unique."
    },
    {
        id: "qa-pro-19",
        category: "Testing/QA",
        level: "expert",
        question: "Pourquoi vérifier la compatibilité avec les systèmes de contrôle de version (Git, Plastic) lors de la QA automatisée Unity ?",
        options: [
            "Pour éviter des conflits/corruptions d’assets et garantir la traçabilité des changements testés",
            "Pour accélérer le build",
            "Pour avoir plus d’assets",
            "Pour supprimer les logs"
        ],
        correctAnswer: 0,
        explanation: "Un projet non versionné proprement génère des bugs et des pertes de code/asset non détectées."
    },
    {
        id: "qa-pro-20",
        category: "Testing/QA",
        level: "expert",
        question: "Quel indicateur prouve qu’un process QA est 'mature' dans un studio pro Unity ?",
        options: [
            "Taux de bugs détectés avant livraison, feedbacks rapides des tests auto, documentation et reproductibilité maximales",
            "Nombre de lignes de code",
            "Vitesse de la build",
            "Couleur des boutons"
        ],
        correctAnswer: 0,
        explanation: "Le vrai QA mature : automatisation, documentation, feedback instantané, non-régression continue."
    },
// Audio
    {
        id: "audio-user-1",
        category: "Audio",
        level: "user",
        question: "Quel composant permet de jouer un son sur un GameObject dans Unity ?",
        options: [
            "AudioSource",
            "AudioListener",
            "Animator",
            "MeshRenderer"
        ],
        correctAnswer: 0,
        explanation: "L’AudioSource permet de jouer un son (musique, bruitage) sur un GameObject."
    },
    {
        id: "audio-user-2",
        category: "Audio",
        level: "user",
        question: "Quel composant doit obligatoirement être présent dans la scène pour entendre un son ?",
        options: [
            "AudioListener",
            "AudioSource",
            "AudioClip",
            "Light"
        ],
        correctAnswer: 0,
        explanation: "L’AudioListener (souvent attaché à la Main Camera) est indispensable pour percevoir le son dans la scène."
    },
    {
        id: "audio-user-3",
        category: "Audio",
        level: "user",
        question: "Quel format audio est couramment utilisé dans Unity pour les musiques et bruitages ?",
        options: [
            ".wav ou .mp3",
            ".psd",
            ".exe",
            ".fbx"
        ],
        correctAnswer: 0,
        explanation: "Unity supporte principalement les fichiers .wav, .mp3, .ogg pour l’audio."
    },
    {
        id: "audio-user-4",
        category: "Audio",
        level: "user",
        question: "Comment lancer un son simple par script sur un AudioSource nommé 'audioSource' ?",
        options: [
            "audioSource.Play();",
            "audioSource.SetActive(true);",
            "audioSource.Start();",
            "audioSource.Enable();"
        ],
        correctAnswer: 0,
        explanation: "audioSource.Play() déclenche la lecture de l’AudioClip assigné."
    },
    {
        id: "audio-user-5",
        category: "Audio",
        level: "user",
        question: "Quel type d’asset faut-il créer/importer pour jouer un son ?",
        options: [
            "AudioClip",
            "Texture2D",
            "Material",
            "AnimatorController"
        ],
        correctAnswer: 0,
        explanation: "Un AudioClip contient les données audio à lire."
    },
    {
        id: "audio-user-6",
        category: "Audio",
        level: "user",
        question: "Quelle propriété de l’AudioSource contrôle le volume du son ?",
        options: [
            "volume",
            "pitch",
            "loop",
            "mute"
        ],
        correctAnswer: 0,
        explanation: "La propriété 'volume' (0 à 1) règle l’intensité du son."
    },
    {
        id: "audio-user-7",
        category: "Audio",
        level: "user",
        question: "Quelle option permet de rejouer automatiquement le son en boucle ?",
        options: [
            "Activer 'Loop' dans l’AudioSource",
            "Activer 'Mute' dans l’AudioSource",
            "Désactiver 'Play On Awake'",
            "Changer la position 3D du son"
        ],
        correctAnswer: 0,
        explanation: "'Loop' = le son repart du début dès qu’il se termine."
    },
    {
        id: "audio-user-8",
        category: "Audio",
        level: "user",
        question: "Que fait l’option 'Play On Awake' dans un AudioSource ?",
        options: [
            "Le son se joue automatiquement à l’activation du GameObject",
            "Le son est mis en pause au démarrage",
            "Le volume est coupé",
            "Le son joue seulement si un script l’active"
        ],
        correctAnswer: 0,
        explanation: "'Play On Awake' permet de jouer le son dès l’apparition du GameObject dans la scène."
    },
    {
        id: "audio-user-9",
        category: "Audio",
        level: "user",
        question: "Pour appliquer un effet de réverbération globale à une scène, on utilise :",
        options: [
            "Un Audio Reverb Zone",
            "Un Mesh Collider",
            "Un Material Shader",
            "Un Canvas"
        ],
        correctAnswer: 0,
        explanation: "L’Audio Reverb Zone applique une ambiance sonore (réverb) à un espace de la scène."
    },
    {
        id: "audio-user-10",
        category: "Audio",
        level: "user",
        question: "Que permet le slider 'Spatial Blend' d’une AudioSource ?",
        options: [
            "Gérer si le son est 2D (global) ou 3D (spatial, localisé)",
            "Changer la couleur du son",
            "Changer la durée du son",
            "Déclencher un effet visuel"
        ],
        correctAnswer: 0,
        explanation: "'Spatial Blend' permet de mixer entre son 2D et 3D."
    },
    {
        id: "audio-user-11",
        category: "Audio",
        level: "user",
        question: "Comment rendre un son audible uniquement à proximité du joueur ?",
        options: [
            "Activer le mode 3D sur l’AudioSource et régler les distances min/max",
            "Mettre le son en 2D",
            "Changer la couleur du GameObject",
            "Supprimer l’AudioListener"
        ],
        correctAnswer: 0,
        explanation: "En mode 3D, l’audibilité dépend de la distance à l’AudioListener."
    },
    {
        id: "audio-user-12",
        category: "Audio",
        level: "user",
        question: "Lequel de ces éléments ne fait PAS partie de la chaîne audio Unity ?",
        options: [
            "SpriteRenderer",
            "AudioSource",
            "AudioListener",
            "AudioClip"
        ],
        correctAnswer: 0,
        explanation: "SpriteRenderer sert à afficher une image, pas à jouer un son."
    },
    {
        id: "audio-user-13",
        category: "Audio",
        level: "user",
        question: "Quelle action permet de couper le son temporairement sur une AudioSource sans supprimer le composant ?",
        options: [
            "audioSource.mute = true;",
            "audioSource.Stop();",
            "audioSource.enabled = false;",
            "audioSource.volume = 2.0;"
        ],
        correctAnswer: 0,
        explanation: "La propriété mute coupe le son mais garde l’audio actif en mémoire."
    },
    {
        id: "audio-user-14",
        category: "Audio",
        level: "user",
        question: "Où règle-t-on le volume général de tout le projet (master) ?",
        options: [
            "Dans l’Audio Mixer",
            "Sur chaque AudioClip",
            "Sur les Materials",
            "Dans la Lighting window"
        ],
        correctAnswer: 0,
        explanation: "L’Audio Mixer permet de gérer le mixage global/master et les groupes de sons."
    },
    {
        id: "audio-user-15",
        category: "Audio",
        level: "user",
        question: "À quoi sert le paramètre 'pitch' sur une AudioSource ?",
        options: [
            "Changer la hauteur/tonalité du son (grave/aigu)",
            "Changer la spatialisation",
            "Activer la réverb",
            "Changer le volume global"
        ],
        correctAnswer: 0,
        explanation: "Le pitch modifie la fréquence du son (effet aigu/grave, ralenti/accéléré)."
    },
    {
        id: "audio-user-16",
        category: "Audio",
        level: "user",
        question: "Quelle interface permet de mixer plusieurs groupes audio et de leur appliquer des effets (EQ, compresseur, etc.) ?",
        options: [
            "Audio Mixer",
            "Animator",
            "Particle System",
            "Lighting Settings"
        ],
        correctAnswer: 0,
        explanation: "L’Audio Mixer gère les groupes, effets, transitions et snapshots."
    },
    {
        id: "audio-user-17",
        category: "Audio",
        level: "user",
        question: "Pour un bouton UI qui joue un clic sonore, on conseille généralement d’utiliser :",
        options: [
            "Un AudioSource sur le Canvas ou un singleton audio manager",
            "Un Animator Controller",
            "Un Audio Mixer Snapshot",
            "Un SpriteRenderer"
        ],
        correctAnswer: 0,
        explanation: "Centraliser le son d’UI évite les multiples AudioSource et permet un contrôle global."
    },
    {
        id: "audio-user-18",
        category: "Audio",
        level: "user",
        question: "Qu’arrive-t-il si plusieurs AudioSource jouent des sons différents en même temps dans la scène ?",
        options: [
            "Tous les sons se superposent, mixés par Unity",
            "Un seul son joue",
            "Les sons s’annulent",
            "Unity plante"
        ],
        correctAnswer: 0,
        explanation: "Unity gère le mixage temps réel, tous les AudioSource actifs sont additionnés dans la sortie."
    },
    {
        id: "audio-user-19",
        category: "Audio",
        level: "user",
        question: "Un son est trop faible dans le jeu, que faire en priorité ?",
        options: [
            "Augmenter le volume de l’AudioSource ou du groupe dans l’Audio Mixer",
            "Changer le pitch",
            "Réduire la spatialisation",
            "Recommencer la scène"
        ],
        correctAnswer: 0,
        explanation: "Il faut d’abord agir sur le volume de la source ou du mixeur."
    },
    {
        id: "audio-user-20",
        category: "Audio",
        level: "user",
        question: "Quel est l’avantage de stocker les musiques de fond (BGM) en streaming plutôt qu’en decompress on load ?",
        options: [
            "Économie de mémoire RAM, adapté aux gros fichiers audio",
            "Permettre la spatialisation 3D",
            "Accélérer le build",
            "Changer automatiquement de scène"
        ],
        correctAnswer: 0,
        explanation: "Les sons lourds (BGM, musiques longues) se lisent en streaming pour ne pas saturer la RAM."
    },
    {
        id: "audio-pro-1",
        category: "Audio",
        level: "pro",
        question: "Quel composant permet de détecter les changements de paramètres d’un Audio Mixer via script pour déclencher des réactions dans le jeu ?",
        options: [
            "AudioMixerSnapshot",
            "AudioMixerParameterChangeHandler",
            "AudioMixerController",
            "AudioSourceEventListener"
        ],
        correctAnswer: 0,
        explanation: "Un AudioMixerSnapshot permet de sauvegarder/charger des états (volumes, effets) de l’Audio Mixer, et de réagir à leur activation via script."
    },
    {
        id: "audio-pro-2",
        category: "Audio",
        level: "pro",
        question: "Quel avantage offre l’utilisation de l’Audio Mixer pour la gestion du son dans un jeu multi-scène complexe ?",
        options: [
            "Centralisation du mixage, contrôle global par groupe, automation d’effets, snapshots pour transitions sonores",
            "Permet d’ajouter des textures audio",
            "Rend la spatialisation plus réaliste sans code",
            "Désactive automatiquement les AudioSource inutilisées"
        ],
        correctAnswer: 0,
        explanation: "L’Audio Mixer permet de gérer plusieurs groupes, snapshots et d’automatiser la transition d’ambiances et d’effets."
    },
    {
        id: "audio-pro-3",
        category: "Audio",
        level: "pro",
        question: "Dans un système audio 3D, quelle propriété contrôle la rapidité de diminution du volume en s’éloignant de la source ?",
        options: [
            "rolloffMode",
            "dopplerLevel",
            "spread",
            "priority"
        ],
        correctAnswer: 0,
        explanation: "Le 'rolloffMode' (et ses courbes) contrôle l’atténuation du volume en fonction de la distance."
    },
    {
        id: "audio-pro-4",
        category: "Audio",
        level: "pro",
        question: "Pour faire un crossfade (transition douce) entre deux musiques, la meilleure méthode est :",
        options: [
            "Utiliser deux AudioSource et faire varier leur volume progressivement",
            "Changer instantanément l’AudioClip",
            "Activer le Mute puis démarrer la seconde musique",
            "Utiliser un Material sur le GameObject"
        ],
        correctAnswer: 0,
        explanation: "On utilise deux AudioSource en parallèle et on diminue le volume de l’une pendant qu’on augmente l’autre."
    },
    {
        id: "audio-pro-5",
        category: "Audio",
        level: "pro",
        question: "Pour limiter la polyphonie (nombre de sons joués en même temps) et éviter la saturation sonore :",
        options: [
            "Régler la propriété 'Max Voices' sur l’AudioSource ou gérer dynamiquement via un système audio manager",
            "Activer le mode 2D sur tous les sons",
            "Supprimer les AudioClip inutilisés",
            "Changer le pitch de tous les sons"
        ],
        correctAnswer: 0,
        explanation: "Limiter le nombre de voix actives est essentiel pour éviter les boucles sonores et la saturation."
    },
    {
        id: "audio-pro-6",
        category: "Audio",
        level: "pro",
        question: "Quel outil d’Unity permet d’automatiser le volume ou l’effet d’un groupe d’audio en fonction d’une variable de gameplay ?",
        options: [
            "Exposed Parameter dans l’Audio Mixer",
            "Animator",
            "NavMesh Agent",
            "Post Processing Volume"
        ],
        correctAnswer: 0,
        explanation: "Les paramètres exposés de l’Audio Mixer sont modifiables en temps réel par script."
    },
    {
        id: "audio-pro-7",
        category: "Audio",
        level: "pro",
        question: "Comment appliquer un effet de filtre passe-bas (Low Pass) sur certains sons lors d’une séquence de ralenti (slow motion) ?",
        options: [
            "Automatiser le cutoff d’un effet LowPass sur le groupe cible dans l’Audio Mixer",
            "Changer le pitch sur toutes les AudioSource",
            "Régler le volume général à zéro",
            "Modifier la position de l’AudioListener"
        ],
        correctAnswer: 0,
        explanation: "Le LowPass Filter coupe les hautes fréquences, typique pour les effets de ralenti ou sous l’eau."
    },
    {
        id: "audio-pro-8",
        category: "Audio",
        level: "pro",
        question: "Pourquoi placer les sons d’ambiance (ambience) sur des AudioSource en spatialisation 3D avec une distance max très élevée ?",
        options: [
            "Pour que le son couvre toute la scène mais reste localisé (parallax, immersion)",
            "Pour consommer moins de mémoire",
            "Pour éviter l’écho",
            "Pour que le son reste 2D"
        ],
        correctAnswer: 0,
        explanation: "Même pour un son global, l’atténuation 3D permet des effets de perspective subtils."
    },
    {
        id: "audio-pro-9",
        category: "Audio",
        level: "pro",
        question: "Quel composant natif Unity permet de créer une ambiance sonore dépendant de la position du joueur dans une zone ?",
        options: [
            "Audio Reverb Zone",
            "AudioMixerSnapshot",
            "Animator",
            "Reflection Probe"
        ],
        correctAnswer: 0,
        explanation: "L’Audio Reverb Zone applique une réverb et ambiance sonore à une zone précise du monde."
    },
    {
        id: "audio-pro-10",
        category: "Audio",
        level: "pro",
        question: "Comment faire varier le volume d’un effet sonore selon l’intensité d’un événement (ex : explosion plus forte selon la distance) ?",
        options: [
            "Modifier la propriété volume de l’AudioSource par script selon la distance ou la force",
            "Utiliser uniquement un AudioListener",
            "Changer la spatial blend",
            "Désactiver la source audio"
        ],
        correctAnswer: 0,
        explanation: "L’intensité de l’événement doit se répercuter sur le volume ou le pitch par script."
    },
    {
        id: "audio-pro-11",
        category: "Audio",
        level: "pro",
        question: "Pour synchroniser la musique avec des événements précis (ex : rythme, battement), la meilleure approche est :",
        options: [
            "Analyser la position temporelle (time) de l’AudioSource et déclencher les événements par script",
            "Utiliser le composant Animation",
            "Changer la couleur du GameObject",
            "Utiliser uniquement l’AudioListener"
        ],
        correctAnswer: 0,
        explanation: "Le script lit audioSource.time pour synchroniser le gameplay avec la musique."
    },
    {
        id: "audio-pro-12",
        category: "Audio",
        level: "pro",
        question: "Pour éviter de charger de gros fichiers audio inutilement en RAM au lancement du jeu, il faut :",
        options: [
            "Activer l’option 'Streaming' sur l’AudioClip",
            "Mettre tous les AudioClip en 'Decompress On Load'",
            "Mettre en cache les fichiers audio dans Resources",
            "Augmenter la fréquence du projet"
        ],
        correctAnswer: 0,
        explanation: "Le streaming lit directement le fichier audio depuis le disque."
    },
    {
        id: "audio-pro-13",
        category: "Audio",
        level: "pro",
        question: "Quel effet natif Unity applique un écho à un son (retard sonore progressif) ?",
        options: [
            "Audio Echo Filter",
            "Audio Reverb Zone",
            "Audio Mixer Compression",
            "Animator"
        ],
        correctAnswer: 0,
        explanation: "L’Audio Echo Filter ajoute un effet d’écho basique."
    },
    {
        id: "audio-pro-14",
        category: "Audio",
        level: "pro",
        question: "Comment éviter le problème de sons coupés prématurément lorsque trop de sources audio jouent simultanément sur une même scène ?",
        options: [
            "Gérer la priorité des AudioSource et désactiver les sons moins importants",
            "Activer le mode 2D partout",
            "Supprimer tous les AudioMixer",
            "Passer en mono tous les AudioClip"
        ],
        correctAnswer: 0,
        explanation: "Unity coupe automatiquement les AudioSource avec la priorité la plus basse si la polyphonie maximale est atteinte."
    },
    {
        id: "audio-pro-15",
        category: "Audio",
        level: "pro",
        question: "Pour déclencher une transition audio contextuelle (ex : entrer dans un tunnel, sous l’eau, ralenti) :",
        options: [
            "Utiliser des snapshots de l’Audio Mixer avec transitions par script",
            "Changer la scène",
            "Supprimer le composant AudioListener",
            "Muter tous les AudioSource"
        ],
        correctAnswer: 0,
        explanation: "Les snapshots de l’Audio Mixer permettent des transitions douces d’effets globaux."
    },
    {
        id: "audio-pro-16",
        category: "Audio",
        level: "pro",
        question: "Dans un AudioSource, quelle propriété règle la largeur de diffusion du son (angle de propagation) ?",
        options: [
            "Spread",
            "Spatial Blend",
            "Rolloff Mode",
            "Loop"
        ],
        correctAnswer: 0,
        explanation: "Spread définit l’angle du cône audio, utile pour simuler des haut-parleurs directionnels."
    },
    {
        id: "audio-pro-17",
        category: "Audio",
        level: "pro",
        question: "Quel workflow permet de gérer plusieurs localisations audio (langues) dans un projet Unity ?",
        options: [
            "Utiliser un système de tables de localisation et charger dynamiquement les bons AudioClip selon la langue",
            "Avoir une scène par langue",
            "Définir une AudioSource par langue et activer/désactiver",
            "Changer la fréquence de sample"
        ],
        correctAnswer: 0,
        explanation: "Un bon workflow utilise une table de mapping et charge à la volée le clip dans la bonne langue."
    },
    {
        id: "audio-pro-18",
        category: "Audio",
        level: "pro",
        question: "Pourquoi utiliser un compresseur sur un groupe d’effets sonores dans l’Audio Mixer ?",
        options: [
            "Pour éviter les pics de volume trop élevés et améliorer la cohérence sonore",
            "Pour baisser la qualité audio",
            "Pour économiser de la RAM",
            "Pour augmenter le volume en permanence"
        ],
        correctAnswer: 0,
        explanation: "Un compresseur limite les crêtes et harmonise la dynamique sonore."
    },
    {
        id: "audio-pro-19",
        category: "Audio",
        level: "pro",
        question: "Quel est le principal avantage d’un bus audio dédié dans l’Audio Mixer (par rapport à tout router sur Master) ?",
        options: [
            "Isoler, traiter ou muter rapidement un groupe de sons (ex : UI, musique, FX) indépendamment du reste",
            "Accélérer la compilation",
            "Changer le sample rate",
            "Désactiver le Listener"
        ],
        correctAnswer: 0,
        explanation: "Un bus permet de contrôler facilement les sous-groupes sans toucher au mix général."
    },
    {
        id: "audio-pro-20",
        category: "Audio",
        level: "pro",
        question: "Pour appliquer un effet temporaire de fade out (fondu sonore progressif vers zéro) sur tous les sons d’une scène :",
        options: [
            "Faire baisser le volume master de l’Audio Mixer progressivement",
            "Supprimer toutes les AudioSource",
            "Changer la scène",
            "Activer/désactiver le spatial blend"
        ],
        correctAnswer: 0,
        explanation: "On fait décroître le volume global pour un effet de fade out total."
    },
    {
        id: "audio-expert-1",
        category: "Audio",
        level: "expert",
        question: "Quel est le risque principal à utiliser massivement 'PlayOneShot' sur des AudioSource dans un contexte de gros projet multi-plateforme ?",
        options: [
            "Fuite mémoire et saturation CPU/GPU à cause de la création/déstruction rapide de voix audio non réutilisées",
            "Le son ne sera jamais entendu",
            "Problèmes de build avec le player Unity",
            "Aucun, c’est optimisé pour tous les cas"
        ],
        correctAnswer: 0,
        explanation: "'PlayOneShot' crée une voix audio temporaire. Utilisé à l’excès, ça peut exploser le nombre de voix et causer des fuites ou artefacts sonores."
    },
    {
        id: "audio-expert-2",
        category: "Audio",
        level: "expert",
        question: "Quel type de bug audio complexe peut survenir lors du streaming de fichiers AudioClip volumineux sur mobile ?",
        options: [
            "Micro-coupures ('glitches') si l’I/O disque ne suit pas ou si la mémoire tampon est insuffisante",
            "Les fichiers sont lus à l’envers",
            "L’AudioClip change automatiquement de format",
            "La spatialisation ne fonctionne plus"
        ],
        correctAnswer: 0,
        explanation: "Sur mobile, l’accès disque lent ou le manque de RAM/tampon peut provoquer des coupures audio aléatoires."
    },
    {
        id: "audio-expert-3",
        category: "Audio",
        level: "expert",
        question: "Pour automatiser le contrôle dynamique d’effets audio selon le gameplay sur plusieurs plateformes, le plus robuste est :",
        options: [
            "Utiliser des paramètres exposés dans l’Audio Mixer pilotés par script, plutôt que des modifications directes de chaque AudioSource",
            "Gérer manuellement chaque AudioSource dans chaque scène",
            "Utiliser uniquement un AudioListener par scène",
            "Tout gérer dans le Start()"
        ],
        correctAnswer: 0,
        explanation: "Les paramètres exposés permettent des automatisations propres, compatibles multi-scène/multi-platforme."
    },
    {
        id: "audio-expert-4",
        category: "Audio",
        level: "expert",
        question: "Quel middleware audio tiers est utilisé dans de nombreux jeux AAA avec Unity pour des besoins de pipeline avancé ?",
        options: [
            "FMOD ou Wwise",
            "Unreal Audio Engine",
            "OpenAL",
            "AudioClip Pro"
        ],
        correctAnswer: 0,
        explanation: "FMOD et Wwise sont les références du marché, supportés nativement par Unity."
    },
    {
        id: "audio-expert-5",
        category: "Audio",
        level: "expert",
        question: "Comment profiler les performances audio (voix, buffers, effets) sur une build mobile ou console ?",
        options: [
            "Utiliser le Profiler Audio d’Unity sur device cible ou un outil de monitoring embarqué (FMOD Studio Live Update, Wwise Profiler)",
            "Le build log Unity suffit",
            "Allouer plus de RAM dans le Quality Settings",
            "Changer la compression du projet"
        ],
        correctAnswer: 0,
        explanation: "Seul le Profiler ou un middleware donne une vue détaillée des voix actives, buffers et traitements temps réel."
    },
    {
        id: "audio-expert-6",
        category: "Audio",
        level: "expert",
        question: "Pour minimiser la latence lors du déclenchement d’un son interactif (ex : feedback UI réactif) :",
        options: [
            "Précharger les clips ('Preload Audio Data'), utiliser des samples courts, éviter le streaming pour ces sons",
            "Utiliser uniquement l’option streaming",
            "Passer l’AudioSource en 2D",
            "Augmenter le volume"
        ],
        correctAnswer: 0,
        explanation: "Le préchargement réduit la latence : éviter le streaming sur les sons critiques et courts."
    },
    {
        id: "audio-expert-7",
        category: "Audio",
        level: "expert",
        question: "Quelle erreur de pipeline audio peut provoquer une désynchronisation entre l’audio et une cinématique/animation sur plusieurs devices ?",
        options: [
            "Frame drop, ou variation de la fréquence de sample (sample rate) entre plateformes",
            "Utiliser des AudioClip mono",
            "Désactiver le Spatial Blend",
            "Passer la scène en 2D"
        ],
        correctAnswer: 0,
        explanation: "Des framerate instables ou un sample rate variable peuvent désynchroniser les pistes audio et vidéo."
    },
    {
        id: "audio-expert-8",
        category: "Audio",
        level: "expert",
        question: "Dans Unity, que permet concrètement un 'DSP Buffer Size' trop faible ?",
        options: [
            "Moins de latence mais risque de glitch/audio drop si le CPU n’est pas assez rapide",
            "Meilleure spatialisation",
            "Plus de voix simultanées",
            "Réduction de la taille des builds"
        ],
        correctAnswer: 0,
        explanation: "Buffer trop petit : latence minimale mais instabilité sonore sur CPU faible."
    },
    {
        id: "audio-expert-9",
        category: "Audio",
        level: "expert",
        question: "Comment assurer la compatibilité de la spatialisation binaurale (3D) sur les différentes plateformes (mobile/VR/PC) ?",
        options: [
            "Utiliser des plugins de spatialisation certifiés (Oculus Audio SDK, Resonance Audio), tester chaque cible",
            "Rester sur AudioSource en 2D",
            "Utiliser le Doppler Effect",
            "Aucune adaptation nécessaire"
        ],
        correctAnswer: 0,
        explanation: "Les plugins spécifiques (Oculus, Resonance) garantissent une spatialisation correcte, avec fallback natif si absent."
    },
    {
        id: "audio-expert-10",
        category: "Audio",
        level: "expert",
        question: "Pourquoi préférer des samples mono pour les effets sonores positionnés dynamiquement (explosions, footsteps, FX) ?",
        options: [
            "Meilleure compatibilité, spatialisation plus efficace, moins de charge mémoire",
            "Ça n’a aucune importance",
            "Permet des musiques plus longues",
            "Améliore le pitch"
        ],
        correctAnswer: 0,
        explanation: "Mono : plus léger et spatialisation 3D réelle (stéréo mal gérée par Unity en 3D)."
    },
    {
        id: "audio-expert-11",
        category: "Audio",
        level: "expert",
        question: "Pour un projet VR, pourquoi utiliser l’AudioMixer en mode 'output to submix' par contexte (ex : musique, voix, FX) ?",
        options: [
            "Pour isoler les traitements (spatialisation, filtres, effets) selon le contexte, et faciliter le debug et l’optimisation",
            "Pour changer le volume master",
            "Pour réduire la RAM consommée par les musiques",
            "Pour désactiver les sources"
        ],
        correctAnswer: 0,
        explanation: "Sous-mix permet de traiter, profiler ou muter indépendamment chaque contexte."
    },
    {
        id: "audio-expert-12",
        category: "Audio",
        level: "expert",
        question: "Comment appliquer un effet de reverb réaliste en temps réel sur un environnement généré dynamiquement (ex : niveau procédural) ?",
        options: [
            "Créer/placer dynamiquement des Audio Reverb Zones et ajuster leurs paramètres selon la géométrie",
            "Ajouter des AudioSource sur chaque mur",
            "Utiliser un seul AudioListener",
            "Changer la compression de tous les fichiers"
        ],
        correctAnswer: 0,
        explanation: "La reverb zone se place dynamiquement, ajustée selon la géométrie ou l’algo de génération."
    },
    {
        id: "audio-expert-13",
        category: "Audio",
        level: "expert",
        question: "Pour simuler des interférences radio ou des artefacts audio (ex : brouillage, effet 'walkie-talkie'), il est conseillé d’utiliser :",
        options: [
            "Une chaîne de DSP avec filtre passe-bande, distorsion, et éventuellement des samples d’interférences",
            "Changer le mode 2D/3D en temps réel",
            "Utiliser seulement des AudioClip compressés en MP3",
            "Passer tous les sons en stéréo"
        ],
        correctAnswer: 0,
        explanation: "Un enchaînement de filtres DSP simule des artefacts audio avancés."
    },
    {
        id: "audio-expert-14",
        category: "Audio",
        level: "expert",
        question: "Quel est le principal problème à vouloir mixer des sources audio à des fréquences d’échantillonnage différentes (44,1 kHz / 48 kHz) dans Unity ?",
        options: [
            "Artefacts, désynchronisation et charge CPU supplémentaire à cause de la conversion temps réel",
            "Aucun problème, Unity gère tout sans perte",
            "Meilleure qualité audio",
            "Risque de bug sur les lumières"
        ],
        correctAnswer: 0,
        explanation: "Le resampling en temps réel est coûteux et source de bugs audio."
    },
    {
        id: "audio-expert-15",
        category: "Audio",
        level: "expert",
        question: "Quel pipeline optimiser pour limiter le chargement audio sur un niveau à très forte densité de SFX (ex : jeu de tir intense, dizaines d’explosions/sec) ?",
        options: [
            "Object pool d’AudioSource, management dynamique des priorités, preload des clips critiques, limitation du nombre de voix",
            "Tout charger en streaming",
            "Passer tous les sons en 2D",
            "Faire un Destroy() de toutes les AudioSource à chaque fin de son"
        ],
        correctAnswer: 0,
        explanation: "Object pooling et management des voix est indispensable pour la perf en cas de gros volume."
    },
    {
        id: "audio-expert-16",
        category: "Audio",
        level: "expert",
        question: "Quel est l’impact de la compression MP3 sur un pipeline audio multiplateforme, comparé au format WAV/OGG ?",
        options: [
            "Compression destructive : perte de qualité, délai de décompression plus long, licensing restrictif sur certaines plateformes",
            "Aucun : qualité identique",
            "Format ouvert, aucun souci",
            "Incompatible avec les mobiles"
        ],
        correctAnswer: 0,
        explanation: "MP3 = compression destructrice, décompression plus lente, et des problèmes de licence possible."
    },
    {
        id: "audio-expert-17",
        category: "Audio",
        level: "expert",
        question: "Quel bug est typique lors du changement rapide de scène contenant de nombreuses AudioSource, surtout sur mobile ?",
        options: [
            "Clipping audio ou persistance de sons (les AudioSource ne sont pas stoppées/cleanées au changement de scène)",
            "Changement de la taille du build",
            "Désactivation du Spatial Blend",
            "Meilleure qualité audio"
        ],
        correctAnswer: 0,
        explanation: "Des AudioSource persistantes créent des overlaps ou sons fantômes lors d’un changement de scène mal géré."
    },
    {
        id: "audio-expert-18",
        category: "Audio",
        level: "expert",
        question: "Comment optimiser la RAM consommée par l’audio sur mobile/tablette avec beaucoup d’ambiances et d’effets longs ?",
        options: [
            "Utiliser le streaming pour les clips longs, compresser en OGG, et limiter le preload des samples",
            "Tout charger en PCM",
            "Doubler le buffer audio",
            "Changer de moteur audio"
        ],
        correctAnswer: 0,
        explanation: "OGG + streaming réduit la charge mémoire, à utiliser pour musiques et sons longs."
    },
    {
        id: "audio-expert-19",
        category: "Audio",
        level: "expert",
        question: "Pour garantir que le pipeline audio fonctionne à l’identique entre build Debug, Release et Development sur toutes plateformes, il faut :",
        options: [
            "Toujours tester l’audio sur device réel et vérifier les logs d’erreurs/audio leaks",
            "Faire confiance au build Editor uniquement",
            "Utiliser le même taux de compression partout",
            "Passer toutes les AudioSource en mode 2D"
        ],
        correctAnswer: 0,
        explanation: "Seul un test réel sur hardware permet de valider le pipeline audio sur toutes les builds."
    },
    {
        id: "audio-expert-20",
        category: "Audio",
        level: "expert",
        question: "Quel workflow éviter absolument pour l’audio en multijoueur temps réel ?",
        options: [
            "Jouer tous les sons via RPC/Network pour chaque joueur, sans management local",
            "Utiliser le pooling localement",
            "Utiliser un gestionnaire d’audio indépendant sur chaque client",
            "Limiter la portée des AudioSource"
        ],
        correctAnswer: 0,
        explanation: "Éviter de jouer chaque son via le réseau. Les sons doivent être instanciés localement pour chaque client."
    },

// Build/Deployment
    {
        id: "build-user-1",
        category: "Build",
        level: "user",
        question: "Quel menu Unity permet de configurer la plateforme de déploiement du projet (Windows, Android, iOS...) ?",
        options: [
            "File > Build Settings",
            "Edit > Project Settings",
            "Window > Package Manager",
            "GameObject > Create Empty"
        ],
        correctAnswer: 0,
        explanation: "File > Build Settings permet de choisir la plateforme cible et lancer un build."
    },
    {
        id: "build-user-2",
        category: "Build",
        level: "user",
        question: "Quel format de fichier est généré par défaut lors d’un build Unity pour Windows ?",
        options: [
            ".exe",
            ".apk",
            ".unitypackage",
            ".xcodeproj"
        ],
        correctAnswer: 0,
        explanation: "Unity génère un exécutable Windows (.exe) lors du build pour cette plateforme."
    },
    {
        id: "build-user-3",
        category: "Build",
        level: "user",
        question: "Quelle action doit-on absolument réaliser avant de déployer un projet Unity sur Android ?",
        options: [
            "Installer le SDK Android et configurer le chemin dans Unity",
            "Installer Visual Studio Code",
            "Passer en mode 2D",
            "Changer le nom de la scène principale"
        ],
        correctAnswer: 0,
        explanation: "Le SDK Android est indispensable pour le build, il faut le configurer dans Unity."
    },
    {
        id: "build-user-4",
        category: "Build",
        level: "user",
        question: "Que contient le dossier 'Builds' (ou le dossier de sortie) après un build réussi ?",
        options: [
            "Les fichiers exécutables et toutes les ressources nécessaires pour lancer le jeu",
            "Les scripts sources du projet",
            "Uniquement les assets bruts",
            "Les logs d’éditeur"
        ],
        correctAnswer: 0,
        explanation: "Le dossier de build contient tout ce qu’il faut pour exécuter le projet sur la cible."
    },
    {
        id: "build-user-5",
        category: "Build",
        level: "user",
        question: "Comment inclure plusieurs scènes dans le build final d’un projet Unity ?",
        options: [
            "Les ajouter à la liste dans 'Scenes In Build' dans Build Settings",
            "Créer un prefab de chaque scène",
            "Les glisser dans l’onglet Project",
            "Renommer le dossier Scenes"
        ],
        correctAnswer: 0,
        explanation: "Seules les scènes listées dans Build Settings seront compilées dans le build."
    },
    {
        id: "build-user-6",
        category: "Build",
        level: "user",
        question: "Quel réglage de Player Settings détermine le nom de l’exécutable final ?",
        options: [
            "Product Name",
            "Company Name",
            "Scripting Backend",
            "Quality Level"
        ],
        correctAnswer: 0,
        explanation: "Product Name est utilisé pour nommer l’exécutable et certains dossiers du build."
    },
    {
        id: "build-user-7",
        category: "Build",
        level: "user",
        question: "Quelle option faut-il activer pour créer un build web compatible navigateur avec Unity ?",
        options: [
            "WebGL",
            "Universal Windows Platform",
            "Android",
            "Standalone"
        ],
        correctAnswer: 0,
        explanation: "WebGL est la cible à sélectionner pour déployer un projet Unity sur le web."
    },
    {
        id: "build-user-8",
        category: "Build",
        level: "user",
        question: "Quelle extension de fichier correspond à un build Unity destiné à Android ?",
        options: [
            ".apk",
            ".exe",
            ".unitypackage",
            ".webm"
        ],
        correctAnswer: 0,
        explanation: "Un build Android donne un fichier .apk ou .aab, selon la configuration."
    },
    {
        id: "build-user-9",
        category: "Build",
        level: "user",
        question: "Que se passe-t-il si une scène n’est pas incluse dans la liste des 'Scenes In Build' ?",
        options: [
            "Elle ne sera pas présente dans le build final",
            "Elle est incluse automatiquement",
            "Elle est compilée mais cachée",
            "Elle remplace la scène principale"
        ],
        correctAnswer: 0,
        explanation: "Seules les scènes listées sont intégrées au build. Les autres sont ignorées."
    },
    {
        id: "build-user-10",
        category: "Build",
        level: "user",
        question: "Quelle fonctionnalité permet d’avoir différentes configurations de build (Debug, Release, Development) ?",
        options: [
            "Le choix du mode de build dans Build Settings",
            "Les Quality Settings",
            "Le bouton Play",
            "L’option Asset Bundles"
        ],
        correctAnswer: 0,
        explanation: "Le mode (Development, Release...) est à choisir dans Build Settings."
    },
    {
        id: "build-user-11",
        category: "Build",
        level: "user",
        question: "Quel outil intégré à Unity permet d’exporter et d’importer des assets entre projets ?",
        options: [
            "UnityPackage",
            "Prefab Variant",
            "Assembly Definition",
            "Custom Inspector"
        ],
        correctAnswer: 0,
        explanation: "Les .unitypackage servent à transférer assets/scripts/config entre projets."
    },
    {
        id: "build-user-12",
        category: "Build",
        level: "user",
        question: "Pour générer un build compatible MacOS, il faut :",
        options: [
            "Sélectionner 'MacOS' comme plateforme cible dans Build Settings",
            "Installer Xcode obligatoirement",
            "Renommer les assets en .mac",
            "Changer l’API graphique"
        ],
        correctAnswer: 0,
        explanation: "On sélectionne la cible MacOS dans le menu de build."
    },
    {
        id: "build-user-13",
        category: "Build",
        level: "user",
        question: "Si un build Unity échoue, que faire en priorité ?",
        options: [
            "Consulter la console d’Unity pour trouver la cause (logs, erreurs, warnings)",
            "Relancer directement un nouveau build",
            "Supprimer tous les scripts",
            "Réinstaller Unity"
        ],
        correctAnswer: 0,
        explanation: "Lire les logs/console donne la source exacte du problème la plupart du temps."
    },
    {
        id: "build-user-14",
        category: "Build",
        level: "user",
        question: "Quelle option de Build Settings permet de réduire la taille d’un build WebGL ?",
        options: [
            "Compression Method (gzip, brotli...)",
            "Color Space",
            "Scripting Backend",
            "Api Compatibility Level"
        ],
        correctAnswer: 0,
        explanation: "La compression réduit la taille des fichiers à charger côté navigateur."
    },
    {
        id: "build-user-15",
        category: "Build",
        level: "user",
        question: "Quel paramètre est critique pour tester un build Android sur un device physique ?",
        options: [
            "Activer le mode développeur (Developer Mode) sur le téléphone",
            "Changer l’ID de la compagnie",
            "Passer en HDR",
            "Installer Asset Store Tools"
        ],
        correctAnswer: 0,
        explanation: "Sans le mode développeur activé sur l’appareil, impossible d’installer l’APK."
    },
    {
        id: "build-user-16",
        category: "Build",
        level: "user",
        question: "Quel fichier de configuration est généré lors d’un build Android et contient les permissions requises ?",
        options: [
            "AndroidManifest.xml",
            "BuildManifest.txt",
            "PlayerSettings.json",
            "manifest.json"
        ],
        correctAnswer: 0,
        explanation: "L’AndroidManifest.xml déclare toutes les permissions et settings requis par l’app."
    },
    {
        id: "build-user-17",
        category: "Build",
        level: "user",
        question: "Pour changer l’icône de l’application finale, il faut :",
        options: [
            "Aller dans Player Settings et modifier la section Icon",
            "Changer le logo dans la scène principale",
            "Modifier le nom de la scène",
            "Créer un fichier build_icon.png à la racine"
        ],
        correctAnswer: 0,
        explanation: "La section Icon dans Player Settings gère les icônes multi-plateforme."
    },
    {
        id: "build-user-18",
        category: "Build",
        level: "user",
        question: "Quelle API Unity utiliser pour lancer un build automatique via script (ex : pipeline CI/CD) ?",
        options: [
            "BuildPipeline.BuildPlayer()",
            "Application.Quit()",
            "Resources.Load()",
            "EditorUtility.DisplayDialog()"
        ],
        correctAnswer: 0,
        explanation: "BuildPipeline permet de lancer des builds automatisés depuis un script."
    },
    {
        id: "build-user-19",
        category: "Build",
        level: "user",
        question: "Que faire si un build WebGL ne fonctionne pas sur un navigateur récent ?",
        options: [
            "Vérifier la compatibilité Unity/WebGL et les settings de compression/format",
            "Installer WebGL Publisher",
            "Supprimer la scène principale",
            "Changer le mode colorimétrique"
        ],
        correctAnswer: 0,
        explanation: "Certains réglages et versions d’Unity ou du navigateur peuvent rendre un build incompatible."
    },
    {
        id: "build-user-20",
        category: "Build",
        level: "user",
        question: "Quel onglet dans Player Settings permet d’ajuster les permissions requises (accès caméra, stockage...) sur mobile ?",
        options: [
            "Other Settings > Configuration",
            "Quality",
            "Scripting Define Symbols",
            "Physics"
        ],
        correctAnswer: 0,
        explanation: "C’est dans la section Other Settings / Configuration qu’on gère permissions et options avancées."
    },
    {
        id: "build-assoc-1",
        category: "Build",
        level: "pro",
        question: "Quel paramètre Player Settings doit être vérifié pour garantir la compatibilité entre un build Windows et un build MacOS ?",
        options: [
            "L’architecture CPU (x86/x64/ARM)",
            "Le type d’input system utilisé",
            "La résolution de la caméra principale",
            "La couleur du canvas"
        ],
        correctAnswer: 0,
        explanation: "Les architectures supportées (Intel, ARM…) doivent correspondre à la plateforme cible."
    },
    {
        id: "build-assoc-2",
        category: "Build",
        level: "pro",
        question: "Quel outil Unity permet de créer plusieurs versions d’un même projet pour différents clients ou environnements sans dupliquer tout le projet ?",
        options: [
            "Build Configurations (Addressables)",
            "Assembly Definitions",
            "Unity Hub",
            "Package Manager"
        ],
        correctAnswer: 0,
        explanation: "Les Build Configurations (ou Addressables) permettent de définir des builds différents selon le contexte."
    },
    {
        id: "build-assoc-3",
        category: "Build",
        level: "pro",
        question: "Que fait l’option 'Development Build' dans les Build Settings ?",
        options: [
            "Active les logs de debug et permet l’attachement d’un profiler",
            "Réduit la taille du build",
            "Optimise les textures",
            "Active la compilation IL2CPP"
        ],
        correctAnswer: 0,
        explanation: "'Development Build' génère un build avec logs/console/Debug et Profiling activés."
    },
    {
        id: "build-assoc-4",
        category: "Build",
        level: "pro",
        question: "Pourquoi privilégier IL2CPP à Mono pour des builds mobiles ?",
        options: [
            "IL2CPP offre de meilleures performances et plus de sécurité (AOT compile vers C++)",
            "Mono permet le hot reload",
            "IL2CPP ne supporte pas Android",
            "Mono est obligatoire pour iOS"
        ],
        correctAnswer: 0,
        explanation: "IL2CPP compile en C++ natif, performant et sécurisé (requis pour iOS, recommandé pour Android)."
    },
    {
        id: "build-assoc-5",
        category: "Build",
        level: "pro",
        question: "Quel fichier doit-on personnaliser pour ajouter des permissions (ex: accès caméra) à une app Android Unity ?",
        options: [
            "AndroidManifest.xml",
            "manifest.json",
            "PlayerSettings.asset",
            "build.gradle"
        ],
        correctAnswer: 0,
        explanation: "L’AndroidManifest.xml déclare les permissions requises pour l’app."
    },
    {
        id: "build-assoc-6",
        category: "Build",
        level: "pro",
        question: "Pour automatiser la création de builds depuis une CI/CD (GitHub Actions, Jenkins…), on utilise généralement :",
        options: [
            "Unity en mode batch via la ligne de commande",
            "Le bouton Build dans l’éditeur",
            "L’option PlayMode",
            "L’Asset Store"
        ],
        correctAnswer: 0,
        explanation: "Unity CLI/batch build s’intègre dans les scripts/pipelines d’intégration continue."
    },
    {
        id: "build-assoc-7",
        category: "Build",
        level: "pro",
        question: "Quel paramètre permet d’optimiser la taille finale du build en excluant des assets inutilisés ?",
        options: [
            "Build Report et Asset Stripping",
            "Scripting Runtime Version",
            "Quality Settings",
            "API Compatibility Level"
        ],
        correctAnswer: 0,
        explanation: "Le stripping d’assets/code supprime ce qui n’est pas utilisé pour alléger le build."
    },
    {
        id: "build-assoc-8",
        category: "Build",
        level: "pro",
        question: "Quel problème peut survenir si le champ 'Bundle Identifier' (ou Package Name) n’est pas unique sur mobile ?",
        options: [
            "Impossible d’installer l’app (conflit avec une autre application)",
            "Le build ne compile pas",
            "Les assets sont ignorés",
            "L’icône disparaît"
        ],
        correctAnswer: 0,
        explanation: "Le Bundle ID doit être unique sur chaque store mobile."
    },
    {
        id: "build-assoc-9",
        category: "Build",
        level: "pro",
        question: "Quelle bonne pratique permet d’éviter la régression après modification d’un pipeline de build Unity ?",
        options: [
            "Versionner les scripts de build et utiliser des tests automatisés",
            "Compiler en Debug uniquement",
            "Changer le GUID des assets",
            "Désactiver le cache"
        ],
        correctAnswer: 0,
        explanation: "Le versioning du pipeline + tests garantit la stabilité après chaque modif."
    },
    {
        id: "build-assoc-10",
        category: "Build",
        level: "pro",
        question: "Quel type de fichier de build faut-il fournir pour la publication sur le Google Play Store (2023+) ?",
        options: [
            ".aab (Android App Bundle)",
            ".apk",
            ".unitypackage",
            ".zip"
        ],
        correctAnswer: 0,
        explanation: "Google impose le format .aab pour la publication sur le Play Store depuis 2021."
    },
    {
        id: "build-assoc-11",
        category: "Build",
        level: "pro",
        question: "Que permet l’option 'Strip Engine Code' dans Player Settings ?",
        options: [
            "Supprimer le code moteur Unity non utilisé pour réduire la taille du build",
            "Optimiser les shaders",
            "Créer un build multi-plateforme",
            "Activer le Profiler"
        ],
        correctAnswer: 0,
        explanation: "Le stripping réduit la taille du runtime en ne gardant que ce qui est utilisé."
    },
    {
        id: "build-assoc-12",
        category: "Build",
        level: "pro",
        question: "Quel fichier Unity doit-on éditer ou ajouter pour intégrer un splash screen personnalisé (logo, animation) dans un build mobile ?",
        options: [
            "Player Settings > Splash Image",
            "ProjectSettings.asset",
            "manifest.json",
            "build.gradle"
        ],
        correctAnswer: 0,
        explanation: "La section Splash Image dans Player Settings gère les écrans de démarrage custom."
    },
    {
        id: "build-assoc-13",
        category: "Build",
        level: "pro",
        question: "Dans un pipeline de build, pourquoi générer des checksums ou des hash sur les assets exportés ?",
        options: [
            "Détecter toute modification/corruption des assets dans la chaîne de livraison",
            "Accélérer la compilation",
            "Augmenter la sécurité réseau",
            "Changer la clé du projet"
        ],
        correctAnswer: 0,
        explanation: "Un hash assure l’intégrité des fichiers lors du transfert/publication."
    },
    {
        id: "build-assoc-14",
        category: "Build",
        level: "pro",
        question: "Quel est l’intérêt d’utiliser Addressables lors du build d’un projet Unity de grande taille ?",
        options: [
            "Charger/décharger dynamiquement des assets, réduire la mémoire consommée, faciliter les mises à jour",
            "Permet de lancer le build plus vite",
            "Change la physique",
            "Déclenche la recompilation du code"
        ],
        correctAnswer: 0,
        explanation: "Addressables optimise la gestion mémoire/streaming/mise à jour des assets."
    },
    {
        id: "build-assoc-15",
        category: "Build",
        level: "pro",
        question: "Quelle erreur commune empêche la publication d’un build iOS généré sous Windows ?",
        options: [
            "Il faut obligatoirement un Mac pour compiler et signer le projet iOS",
            "Unity bloque la compilation iOS sous Windows",
            "Le fichier .ipa ne peut être signé",
            "Le Store refuse les builds auto-générés"
        ],
        correctAnswer: 0,
        explanation: "La signature et la compilation finale iOS ne sont possibles que sur Mac (Xcode)."
    },
    {
        id: "build-assoc-16",
        category: "Build",
        level: "pro",
        question: "Dans un projet avec plusieurs scènes, comment garantir qu’une scène de test n’est pas incluse dans le build final ?",
        options: [
            "Vérifier qu’elle n’est pas listée dans 'Scenes In Build' (Build Settings)",
            "Renommer la scène en .test",
            "Supprimer tous les prefabs de la scène",
            "La mettre en dehors du dossier Assets"
        ],
        correctAnswer: 0,
        explanation: "Seules les scènes listées sont buildées."
    },
    {
        id: "build-assoc-17",
        category: "Build",
        level: "pro",
        question: "Quelle option de Player Settings doit être configurée pour restreindre l’accès à Internet de l’application publiée ?",
        options: [
            "Désactiver les permissions réseau dans la section Configuration/Other Settings",
            "Passer en mode Offline dans Quality Settings",
            "Changer le Scripting Backend",
            "Passer en Low Power Mode"
        ],
        correctAnswer: 0,
        explanation: "Les permissions réseau sont gérées dans Other Settings."
    },
    {
        id: "build-assoc-18",
        category: "Build",
        level: "pro",
        question: "Lorsqu’un build Unity WebGL ne charge pas certaines textures ou sons, la cause fréquente est :",
        options: [
            "Des assets non compatibles WebGL (formats, taille, compression)",
            "Le Player Name mal configuré",
            "Des shaders incompatibles DirectX",
            "Le build est fait en mode Debug"
        ],
        correctAnswer: 0,
        explanation: "WebGL a des restrictions fortes sur les formats et tailles d’assets supportés."
    },
    {
        id: "build-assoc-19",
        category: "Build",
        level: "pro",
        question: "Quel rapport de build est produit par Unity et utile pour l’analyse de la taille du projet final ?",
        options: [
            "Build Report (buildreport)",
            "Profiler Report",
            "PlayerPrefs.txt",
            "Asset List"
        ],
        correctAnswer: 0,
        explanation: "Le Build Report détaille la taille et la composition du build (scripts, assets, shaders…)."
    },
    {
        id: "build-assoc-20",
        category: "Build",
        level: "pro",
        question: "Pour publier une mise à jour sans forcer le téléchargement de tout le build, quelle technique Unity utiliser ?",
        options: [
            "Asset Bundles ou Addressables pour charger dynamiquement uniquement ce qui change",
            "Changer la version du Player dans Player Settings",
            "Passer en mode Debug",
            "Mettre à jour le dossier Library"
        ],
        correctAnswer: 0,
        explanation: "Bundles et Addressables permettent le patch/différentiel plutôt que de re-télécharger tout le projet."
    },
    {
        id: "build-pro-1",
        category: "Build",
        level: "expert",
        question: "Quel mécanisme utiliser pour garantir la reproductibilité d’un build (hash identique) dans une pipeline CI/CD Unity ?",
        options: [
            "Configurer un build deterministic (BuildOptions.Deterministic) et fixer l’ordre des assets/scripts",
            "Désactiver le cache de compilation",
            "Utiliser uniquement Asset Bundles",
            "Toujours builder sur le même OS"
        ],
        correctAnswer: 0,
        explanation: "Les builds déterministes et l’ordre de process garantissent que le même code donne le même build hash."
    },
    {
        id: "build-pro-2",
        category: "Build",
        level: "expert",
        question: "Lors d’un build multi-plateforme automatisé, quel paramètre doit absolument être géré dans un système de build scripting ?",
        options: [
            "Les Player Settings (Bundle ID, résolution, backend…) selon la plateforme cible",
            "La langue de l’éditeur Unity",
            "Le nom du dossier Assets",
            "Le nombre de scènes ouvertes dans l’éditeur"
        ],
        correctAnswer: 0,
        explanation: "Chaque plateforme peut nécessiter des paramètres Player Settings différents, à injecter automatiquement."
    },
    {
        id: "build-pro-3",
        category: "Build",
        level: "expert",
        question: "Quelle est la limite majeure des Unity Cloud Build pour une équipe devant déployer sur des stores propriétaires avec des process customisés ?",
        options: [
            "La personnalisation limitée des pipelines (pré/post scripts, environnements, plugins d’authentification)",
            "Le support du format .zip",
            "L’obligation d’utiliser IL2CPP",
            "L’impossibilité d’utiliser des prefabs"
        ],
        correctAnswer: 0,
        explanation: "Unity Cloud Build est très limité dès qu’on veut des pipelines custom."
    },
    {
        id: "build-pro-4",
        category: "Build",
        level: "expert",
        question: "Dans une organisation DevOps, pourquoi activer la signature automatique des builds via un certificat/p12 sécurisé ?",
        options: [
            "Pour garantir l’intégrité/authenticité du build et automatiser le process de déploiement",
            "Pour pouvoir exporter en WebGL",
            "Pour réduire la taille du build",
            "Pour utiliser les shaders HDRP"
        ],
        correctAnswer: 0,
        explanation: "La signature garantit l’origine et l’intégrité de l’app livrée (nécessaire pour stores, MDM, etc)."
    },
    {
        id: "build-pro-5",
        category: "Build",
        level: "expert",
        question: "Quel système externe est recommandé pour générer, historiser, et distribuer des builds Unity dans une grosse équipe multi-projets ?",
        options: [
            "Un gestionnaire d’artefacts dédié (Nexus, Artifactory, etc.) intégré à la CI",
            "Un partage Google Drive",
            "Git Large File Storage (LFS)",
            "Asset Store privé"
        ],
        correctAnswer: 0,
        explanation: "Les artefacts de build doivent être versionnés/traçables (CI + gestionnaire d’artefacts)."
    },
    {
        id: "build-pro-6",
        category: "Build",
        level: "expert",
        question: "Quel est l’intérêt d’automatiser la génération de changelog/version lors du build ?",
        options: [
            "Faciliter le support, le debug, la traçabilité et le rollback",
            "Changer le Bundle ID à chaque build",
            "Activer la compression LZ4",
            "Réinitialiser le cache"
        ],
        correctAnswer: 0,
        explanation: "Changelog + versioning = support pro et traçabilité des livraisons/retours."
    },
    {
        id: "build-pro-7",
        category: "Build",
        level: "expert",
        question: "Pourquoi un build Unity WebGL est-il souvent incompatible avec certaines API C# ou packages natifs ?",
        options: [
            "Parce que WebGL n’autorise que le .NET Standard 2.0 sans accès natif à l’OS",
            "Parce que WebGL utilise DirectX",
            "Car il ne supporte pas les sprites",
            "Car le build WebGL est compilé en Java"
        ],
        correctAnswer: 0,
        explanation: "WebGL = sandbox, API très restreintes (pas d’IO natif, pas de threads classiques, etc)."
    },
    {
        id: "build-pro-8",
        category: "Build",
        level: "expert",
        question: "Quelle technique permet de réduire la taille des builds iOS sans impacter la stabilité de l’app ?",
        options: [
            "Activer le Managed Stripping Level sur 'High' et désactiver les architectures inutilisées",
            "Désactiver le Garbage Collector",
            "Passer en mono backend",
            "Optimiser la résolution du canvas"
        ],
        correctAnswer: 0,
        explanation: "Stripping et arch reduction = build plus léger, moins de code embarqué."
    },
    {
        id: "build-pro-9",
        category: "Build",
        level: "expert",
        question: "Quel est le principal risque de distribuer un build Android signé avec une clé de debug fournie par Unity ?",
        options: [
            "Le build peut être falsifié ou retiré du store (clé non privée, non unique)",
            "Le build ne sera pas accepté sur iOS",
            "L’app plantera au démarrage",
            "Les assets ne seront pas chargés"
        ],
        correctAnswer: 0,
        explanation: "Il faut toujours utiliser une clé privée pour les builds de production."
    },
    {
        id: "build-pro-10",
        category: "Build",
        level: "expert",
        question: "Dans quel cas faut-il obligatoirement générer un build 'fat' (multi-arch) plutôt qu’un build mono-architecture ?",
        options: [
            "Quand on vise des appareils variés (ARMv7/ARM64/x86/x64) sans pouvoir prédire la cible",
            "Pour accélérer le runtime",
            "Pour déboguer plus facilement",
            "Pour réduire la taille"
        ],
        correctAnswer: 0,
        explanation: "Multi-arch = un seul APK qui fonctionne sur toutes les archis (appareils non homogènes)."
    },
    {
        id: "build-pro-11",
        category: "Build",
        level: "expert",
        question: "Pour garantir que tous les assets Addressables d’une version de jeu sont disponibles après le déploiement, il faut :",
        options: [
            "Générer le catalogue Addressables lors du build et vérifier la complétude sur le CDN/serveur cible",
            "Désactiver les builds incrémentaux",
            "Activer le mode Debug dans Addressables",
            "Réinitialiser le cache"
        ],
        correctAnswer: 0,
        explanation: "Vérification du manifest/catalogue sur la cible = zéro asset manquant au lancement."
    },
    {
        id: "build-pro-12",
        category: "Build",
        level: "expert",
        question: "Pourquoi build pipeline customisé > bouton Build de l’éditeur pour une équipe professionnelle ?",
        options: [
            "Pour automatiser, fiabiliser, documenter et contrôler tous les paramètres du build",
            "Pour activer l’éditeur en mode dark",
            "Pour générer plus de logs",
            "Pour publier sur l’Asset Store"
        ],
        correctAnswer: 0,
        explanation: "Le pipeline custom = reproductibilité, intégration au workflow équipe, fiabilité."
    },
    {
        id: "build-pro-13",
        category: "Build",
        level: "expert",
        question: "Comment s’assurer que chaque build envoyé en production est traçable et roll-backable ?",
        options: [
            "En générant un tag Git ou une release pour chaque build, associé au numéro de version embarqué dans l’app",
            "En notant la version dans un fichier texte",
            "En utilisant le même build number pour toutes les versions",
            "En renommant le fichier .exe"
        ],
        correctAnswer: 0,
        explanation: "L’automatisation du tag/release avec le build = traçabilité et rollback facile."
    },
    {
        id: "build-pro-14",
        category: "Build",
        level: "expert",
        question: "Quel check technique faut-il intégrer dans le pipeline pour détecter une régression de perf après une optimisation ou refactoring ?",
        options: [
            "Exécuter un build automatique avec bench et profiler pour comparer les métriques à une baseline",
            "Vérifier la taille du build",
            "Activer le mode Development Build",
            "Changer l’icône du projet"
        ],
        correctAnswer: 0,
        explanation: "Perf regression = profiler automatique + benchmark sur chaque build."
    },
    {
        id: "build-pro-15",
        category: "Build",
        level: "expert",
        question: "Quelle précaution de sécurité prendre lors du stockage des clés/signatures (keystore, p12, provisioning…) dans une CI/CD ?",
        options: [
            "Utiliser un secret manager/chiffrement, jamais en clair dans le repo",
            "Committer les clés dans Git",
            "Stocker les clés sur le bureau de la machine",
            "Envoyer par email à chaque membre"
        ],
        correctAnswer: 0,
        explanation: "Never ever commit secrets: use secret management/encrypted storage."
    },
    {
        id: "build-pro-16",
        category: "Build",
        level: "expert",
        question: "Comment intégrer automatiquement la vérification d’erreurs critiques de runtime dans la pipeline de build Unity ?",
        options: [
            "En automatisant des tests de smoke/end-to-end + parsing des logs de build et runtime",
            "En lançant l’éditeur Unity après chaque build",
            "En activant le splash screen Unity",
            "En augmentant la RAM du serveur"
        ],
        correctAnswer: 0,
        explanation: "CI/CD = build + run + smoke tests + parsing auto des logs pour erreurs."
    },
    {
        id: "build-pro-17",
        category: "Build",
        level: "expert",
        question: "Pour une release Android instantanée (Play Instant), quelle contrainte supplémentaire appliquer au build Unity ?",
        options: [
            "La taille de l’APK/aab doit être <15MB après stripping",
            "Utiliser Mono uniquement",
            "Désactiver le Profiler",
            "Changer l’icône à chaque build"
        ],
        correctAnswer: 0,
        explanation: "Play Instant impose des builds ultra-légers."
    },
    {
        id: "build-pro-18",
        category: "Build",
        level: "expert",
        question: "Pour accélérer l’itération des builds en équipe, quel système Unity utiliser pour ne pas recompiler inutilement tous les scripts/assets à chaque build ?",
        options: [
            "Cache Server (Unity Accelerator)",
            "Le bouton Refresh dans l’éditeur",
            "Le PlayerPrefs",
            "Rebuilder la librairie à chaque fois"
        ],
        correctAnswer: 0,
        explanation: "Unity Accelerator permet le partage du cache de build entre postes."
    },
    {
        id: "build-pro-19",
        category: "Build",
        level: "expert",
        question: "Quelle solution permet de tester automatiquement le build final sur différents devices réels (Android, iOS, PC…) depuis une CI ?",
        options: [
            "Des services de device farm (BrowserStack, AWS Device Farm, Firebase Test Lab, etc.)",
            "Lancer PlayMode dans l’éditeur",
            "Utiliser un émulateur Android uniquement",
            "Brancher chaque device en USB"
        ],
        correctAnswer: 0,
        explanation: "Les Device Farm permettent d’exécuter des builds sur de vrais appareils à distance."
    },
    {
        id: "build-pro-20",
        category: "Build",
        level: "expert",
        question: "Quel outil Unity permet d’instrumenter automatiquement le code pour l’analyse de couverture de test dans un build CI/CD ?",
        options: [
            "Unity Test Framework (Code Coverage)",
            "Addressables Profiler",
            "Scriptable Build Pipeline",
            "Asset Import Pipeline"
        ],
        correctAnswer: 0,
        explanation: "Unity Test Framework, avec l’option Code Coverage, génère un rapport d’instrumentation."
    },
// Animation
    {
        id: "anim-user-1",
        category: "Animation",
        level: "user",
        question: "Quel composant est indispensable pour contrôler une animation par script dans Unity ?",
        options: [
            "Animator",
            "Rigidbody",
            "Collider",
            "NavMeshAgent"
        ],
        correctAnswer: 0,
        explanation: "Le composant Animator permet de gérer et contrôler les animations sur un GameObject."
    },
    {
        id: "anim-user-2",
        category: "Animation",
        level: "user",
        question: "Quel fichier contient l’ensemble des transitions et états d’animation dans Unity ?",
        options: [
            "Animator Controller",
            "Prefab",
            "Material",
            "Script C#"
        ],
        correctAnswer: 0,
        explanation: "Un Animator Controller définit les états et transitions d’animation pour un objet."
    },
    {
        id: "anim-user-3",
        category: "Animation",
        level: "user",
        question: "Quelle fenêtre permet de visualiser et d’éditer la courbe temporelle d’une animation keyframée ?",
        options: [
            "Animation Window",
            "Hierarchy",
            "Profiler",
            "Inspector"
        ],
        correctAnswer: 0,
        explanation: "L’Animation Window permet d’éditer les keyframes, les courbes et les timelines d’animation."
    },
    {
        id: "anim-user-4",
        category: "Animation",
        level: "user",
        question: "Quelle méthode permet de lancer une animation spécifique via script sur un Animator ?",
        options: [
            "SetTrigger()",
            "AddForce()",
            "GetComponent()",
            "Invoke()"
        ],
        correctAnswer: 0,
        explanation: "Animator.SetTrigger() déclenche une transition conditionnée par un trigger dans le controller."
    },
    {
        id: "anim-user-5",
        category: "Animation",
        level: "user",
        question: "Que se passe-t-il si un GameObject possède un Animator Controller mais aucune animation liée ?",
        options: [
            "Le GameObject n’aura aucun mouvement d’animation",
            "Le GameObject disparaît",
            "Le GameObject devient invisible",
            "Unity renomme l’objet automatiquement"
        ],
        correctAnswer: 0,
        explanation: "Sans animation dans le controller, aucune animation ne sera jouée sur l’objet."
    },
    {
        id: "anim-user-6",
        category: "Animation",
        level: "user",
        question: "Quelle propriété permet de changer la vitesse de lecture d’une animation sur l’Animator ?",
        options: [
            "Animator.speed",
            "Animator.enabled",
            "Animator.isPlaying",
            "Animator.loopTime"
        ],
        correctAnswer: 0,
        explanation: "Animator.speed permet d’accélérer ou ralentir toutes les animations contrôlées par l’Animator."
    },
    {
        id: "anim-user-7",
        category: "Animation",
        level: "user",
        question: "Quel type de fichier importé dans Unity contient généralement des animations d’objets 3D ?",
        options: [
            ".fbx",
            ".mp3",
            ".png",
            ".json"
        ],
        correctAnswer: 0,
        explanation: "Les fichiers .fbx supportent les modèles 3D ET les animations embarquées."
    },
    {
        id: "anim-user-8",
        category: "Animation",
        level: "user",
        question: "Quelle option dans l’Animator permet de répéter une animation à l’infini ?",
        options: [
            "Loop Time",
            "Fixed Update",
            "Bake Animation",
            "Multi Pass"
        ],
        correctAnswer: 0,
        explanation: "L’option Loop Time force la répétition de l’animation tant que l’état est actif."
    },
    {
        id: "anim-user-9",
        category: "Animation",
        level: "user",
        question: "Dans le context du système d’animation, que représente un ‘state’ (état) ?",
        options: [
            "Un ensemble d’animations ou une pose particulière pouvant être activée",
            "Un script attaché à l’Animator",
            "Une texture de sprite",
            "Une scène Unity"
        ],
        correctAnswer: 0,
        explanation: "Un état (state) représente un moment du controller où une animation ou une pose est jouée."
    },
    {
        id: "anim-user-10",
        category: "Animation",
        level: "user",
        question: "Quel élément permet de définir les transitions entre différents états d’animation ?",
        options: [
            "Transition",
            "Keyframe",
            "Component",
            "Prefab"
        ],
        correctAnswer: 0,
        explanation: "Les transitions déterminent comment passer d’un état à un autre dans l’Animator Controller."
    },
    {
        id: "anim-user-11",
        category: "Animation",
        level: "user",
        question: "Quel paramètre peut être utilisé dans un Animator Controller pour conditionner une transition ?",
        options: [
            "Un booléen, un float, un int, ou un trigger",
            "Uniquement un booléen",
            "Uniquement un int",
            "Un script C#"
        ],
        correctAnswer: 0,
        explanation: "Les transitions peuvent être contrôlées par différents types de paramètres dans le controller."
    },
    {
        id: "anim-user-12",
        category: "Animation",
        level: "user",
        question: "Que permet de faire la timeline dans le context d’une animation Unity ?",
        options: [
            "Orchestrer plusieurs animations, sons et events sur une séquence temporelle",
            "Changer le mode d’affichage de la fenêtre Scene",
            "Remplacer le système Mecanim",
            "Créer des textures dynamiquement"
        ],
        correctAnswer: 0,
        explanation: "La Timeline est un outil pour synchroniser et orchestrer des animations complexes."
    },
    {
        id: "anim-user-13",
        category: "Animation",
        level: "user",
        question: "Comment désactiver l’Animator d’un GameObject en runtime ?",
        options: [
            "Animator.enabled = false",
            "Animator.Play(\"\")",
            "Destroy(gameObject)",
            "SetActive(false)"
        ],
        correctAnswer: 0,
        explanation: "Animator.enabled = false stoppe toute animation pilotée par ce composant."
    },
    {
        id: "anim-user-14",
        category: "Animation",
        level: "user",
        question: "Si une animation est trop rapide, quelle action corrige ce problème sans modifier l’animation d’origine ?",
        options: [
            "Diminuer Animator.speed",
            "Augmenter la fréquence du moniteur",
            "Changer le nom de l’animation",
            "Changer le scale du GameObject"
        ],
        correctAnswer: 0,
        explanation: "Animator.speed permet de ralentir l’exécution de l’animation en temps réel."
    },
    {
        id: "anim-user-15",
        category: "Animation",
        level: "user",
        question: "Quel type de composant est nécessaire pour appliquer des animations à un personnage humanoïde importé d’un logiciel 3D ?",
        options: [
            "Animator avec Avatar configuré",
            "Box Collider",
            "NavMeshAgent",
            "Particle System"
        ],
        correctAnswer: 0,
        explanation: "Un Animator avec un Avatar humanoïde mappe les bones du personnage pour le système d’animation Unity."
    },
    {
        id: "anim-user-16",
        category: "Animation",
        level: "user",
        question: "À quoi sert la fonction AddEvent dans l’Animation Window ?",
        options: [
            "Déclencher une méthode C# à un moment précis de l’animation",
            "Créer une transition automatique",
            "Dupliquer l’animation",
            "Changer la couleur de la courbe"
        ],
        correctAnswer: 0,
        explanation: "AddEvent permet de lier une fonction à une frame clé de l’animation."
    },
    {
        id: "anim-user-17",
        category: "Animation",
        level: "user",
        question: "Dans Unity, comment faire jouer une animation de marche puis une animation de saut sans transition automatique ?",
        options: [
            "Désactiver les transitions automatiques dans l’Animator Controller",
            "Créer un nouveau prefab",
            "Mettre Animator.enabled à false",
            "Changer de scène"
        ],
        correctAnswer: 0,
        explanation: "Il faut configurer explicitement les transitions ou déclencher les animations via script."
    },
    {
        id: "anim-user-18",
        category: "Animation",
        level: "user",
        question: "Dans le context de l’Animator, que signifie un ‘Blend Tree’ ?",
        options: [
            "Un arbre qui mélange plusieurs animations selon des paramètres (ex: vitesse, direction)",
            "Un arbre qui gère les colliders",
            "Un script pour mélanger des couleurs",
            "Un dossier d’assets"
        ],
        correctAnswer: 0,
        explanation: "Le Blend Tree permet de mixer plusieurs animations dynamiquement selon des variables."
    },
    {
        id: "anim-user-19",
        category: "Animation",
        level: "user",
        question: "Quel élément visuel dans l’Animator Controller symbolise la transition d’un état à un autre ?",
        options: [
            "Une flèche",
            "Un cube",
            "Un cercle",
            "Un point d’exclamation"
        ],
        correctAnswer: 0,
        explanation: "La flèche indique la transition active entre deux états d’animation."
    },
    {
        id: "anim-user-20",
        category: "Animation",
        level: "user",
        question: "Pour quelle raison utiliser un ‘Root Motion’ dans les paramètres de l’Animator ?",
        options: [
            "Faire déplacer le GameObject selon les mouvements d’animation (ex: marche réelle)",
            "Changer le parent du GameObject",
            "Appliquer une texture dynamique",
            "Synchroniser deux scènes"
        ],
        correctAnswer: 0,
        explanation: "Root Motion permet au mouvement contenu dans l’animation d’influencer la position réelle du GameObject."
    },
    {
        id: "anim-pro-1",
        category: "Animation",
        level: "pro",
        question: "Quel est le rôle principal d’un ‘Avatar’ dans le système d’animation Unity ?",
        options: [
            "Faire la correspondance entre le rig du modèle et le système d’animation humanoïde de Unity",
            "Gérer les textures de la peau",
            "Optimiser la mémoire vidéo",
            "Contrôler les transitions"
        ],
        correctAnswer: 0,
        explanation: "L’Avatar mappe le rig importé sur le système d’animation humanoïde natif Unity."
    },
    {
        id: "anim-pro-2",
        category: "Animation",
        level: "pro",
        question: "Comment corriger un problème d’échelle lors de l’importation d’une animation .fbx dans Unity ?",
        options: [
            "Ajuster le Scale Factor dans l’Inspector de l’asset .fbx",
            "Changer la couleur de l’Animator",
            "Créer une nouvelle scène",
            "Ajouter un Box Collider"
        ],
        correctAnswer: 0,
        explanation: "Le Scale Factor corrige directement les problèmes d’échelle à l’import."
    },
    {
        id: "anim-pro-3",
        category: "Animation",
        level: "pro",
        question: "Dans un Blend Tree, comment gérer la transition entre la marche, la course et l’arrêt ?",
        options: [
            "Utiliser un paramètre float représentant la vitesse",
            "Créer une transition automatique entre chaque état",
            "Ajouter un trigger pour chaque mouvement",
            "Multiplier les Animator Controllers"
        ],
        correctAnswer: 0,
        explanation: "Le paramètre float permet de mixer dynamiquement entre idle, walk et run dans un seul Blend Tree."
    },
    {
        id: "anim-pro-4",
        category: "Animation",
        level: "pro",
        question: "Quel événement doit être utilisé pour synchroniser l’apparition d’un effet sonore avec une animation ?",
        options: [
            "Animation Event",
            "Update()",
            "OnTriggerEnter()",
            "FixedUpdate()"
        ],
        correctAnswer: 0,
        explanation: "Un Animation Event déclenche du code à une frame précise de l’animation."
    },
    {
        id: "anim-pro-5",
        category: "Animation",
        level: "pro",
        question: "Quelle est la méthode la plus propre pour déclencher une animation en réponse à une action utilisateur en C# ?",
        options: [
            "Définir un trigger ou booléen dans l’Animator et l’activer via script",
            "Changer le nom du GameObject",
            "Supprimer puis recréer le Animator Controller",
            "Utiliser Animator.speed = 2"
        ],
        correctAnswer: 0,
        explanation: "La gestion via paramètres exposés dans le controller est la bonne pratique."
    },
    {
        id: "anim-pro-6",
        category: "Animation",
        level: "pro",
        question: "Quel problème peut provoquer une transition trop courte entre deux animations dans un Animator Controller ?",
        options: [
            "Des sauts visuels ou du clipping entre les poses",
            "Un crash de l’application",
            "Un freeze du contrôleur",
            "Une désactivation de l’Animator"
        ],
        correctAnswer: 0,
        explanation: "Une transition trop rapide cause des artefacts et des glitches visuels."
    },
    {
        id: "anim-pro-7",
        category: "Animation",
        level: "pro",
        question: "Comment éviter que deux transitions se déclenchent simultanément dans le même Animator Controller ?",
        options: [
            "Désactiver ‘Has Exit Time’ et bien gérer les conditions",
            "Utiliser Animator.Stop()",
            "Passer Animator.enabled à false",
            "Changer le nom du state"
        ],
        correctAnswer: 0,
        explanation: "Sans exit time et avec des conditions claires, une seule transition peut être active à la fois."
    },
    {
        id: "anim-pro-8",
        category: "Animation",
        level: "pro",
        question: "Quelle différence entre un Animator Controller et un Runtime Animator Controller ?",
        options: [
            "Le premier est l’asset éditable dans Unity, le second est la version utilisée en runtime (abstraite)",
            "Le second sert pour les shaders uniquement",
            "Ils sont strictement identiques",
            "Le second ne gère pas les Blend Trees"
        ],
        correctAnswer: 0,
        explanation: "Animator Controller = asset modifiable ; Runtime Animator Controller = abstraction côté code pour l’Animator."
    },
    {
        id: "anim-pro-9",
        category: "Animation",
        level: "pro",
        question: "Quel composant permet de mélanger dynamiquement deux animations (ex : courir ET tirer) sur un personnage ?",
        options: [
            "Layer dans l’Animator Controller",
            "Physics Material",
            "Material",
            "Coroutine"
        ],
        correctAnswer: 0,
        explanation: "Les layers permettent de superposer ou d’ajouter du ‘masking’ sur des parties du corps."
    },
    {
        id: "anim-pro-10",
        category: "Animation",
        level: "pro",
        question: "Pour désynchroniser le cycle d’une animation (ex : plusieurs ennemis qui ne marchent pas de façon identique), quelle solution efficace ?",
        options: [
            "Changer le Animator.Play() en démarrant à un temps différent, ou utiliser Animator.CrossFade() avec un offset",
            "Changer le nom du prefab",
            "Rendre le Animator unique pour chaque ennemi",
            "Augmenter le nombre de keyframes"
        ],
        correctAnswer: 0,
        explanation: "Démarrer chaque animation à un moment différent évite la ‘synchronisation visuelle’ des clones."
    },
    {
        id: "anim-pro-11",
        category: "Animation",
        level: "pro",
        question: "Quelle option faut-il activer/importer pour bénéficier du Root Motion sur une animation importée ?",
        options: [
            "‘Root Transform Position (Y)’ ou ‘Root Motion’ dans l’Inspector de l’animation",
            "Mesh Compression",
            "Add Component > Rigidbody",
            "Apply Avatar Mask"
        ],
        correctAnswer: 0,
        explanation: "Il faut activer le root motion à l’import ET dans le controller pour que le mouvement physique soit pris en compte."
    },
    {
        id: "anim-pro-12",
        category: "Animation",
        level: "pro",
        question: "Quel outil Unity permet de combiner animation, audio, et activation d’objets dans une même séquence complexe ?",
        options: [
            "Timeline",
            "Inspector",
            "Lighting Settings",
            "Prefab Mode"
        ],
        correctAnswer: 0,
        explanation: "Timeline est fait pour synchroniser et orchestrer plusieurs tracks d’animation/audio."
    },
    {
        id: "anim-pro-13",
        category: "Animation",
        level: "pro",
        question: "En animation, que permet un ‘Avatar Mask’ dans Unity ?",
        options: [
            "Animer ou bloquer seulement certaines parties du corps sur un layer d’animation",
            "Changer la couleur d’un objet",
            "Créer un mask de texture",
            "Importer des objets 2D"
        ],
        correctAnswer: 0,
        explanation: "Un Avatar Mask permet de limiter les effets d’une animation à certains bones (par exemple, animer le haut du corps indépendamment des jambes)."
    },
    {
        id: "anim-pro-14",
        category: "Animation",
        level: "pro",
        question: "Quel outil/système choisir pour faire de l’animation par timeline, keyframes et événements sur un objet qui n’est pas un personnage ?",
        options: [
            "Animation Window",
            "Animator Controller",
            "Prefab Variant",
            "Physics Material"
        ],
        correctAnswer: 0,
        explanation: "Animation Window est adaptée à toutes les animations par courbes (UI, props, etc.), pas juste aux personnages."
    },
    {
        id: "anim-pro-15",
        category: "Animation",
        level: "pro",
        question: "Comment gérer l’interruption d’une animation en cours pour en jouer une autre immédiatement ?",
        options: [
            "Utiliser Animator.CrossFade ou Animator.Play avec le nom de l’état cible",
            "Désactiver l’Animator",
            "Changer de scène",
            "Créer un nouveau GameObject"
        ],
        correctAnswer: 0,
        explanation: "Animator.Play() ou CrossFade() permet de switcher d’une animation à l’autre à la frame près."
    },
    {
        id: "anim-pro-16",
        category: "Animation",
        level: "pro",
        question: "Quelle approche pour optimiser les performances quand on a des dizaines de personnages animés en même temps ?",
        options: [
            "Limiter les controllers, optimiser les transitions et utiliser des LOD pour l’Animator",
            "Activer le Deep Profiling",
            "Mettre tous les personnages dans une seule animation",
            "Utiliser uniquement Animator.speed = 0.5"
        ],
        correctAnswer: 0,
        explanation: "Moins de controllers, transitions propres, culling sur Animator et LOD sur mesh/anim = gain de perf."
    },
    {
        id: "anim-pro-17",
        category: "Animation",
        level: "pro",
        question: "Comment peut-on lire l’avancement actuel (temps) d’un état d’animation dans un script ?",
        options: [
            "AnimatorStateInfo.normalizedTime",
            "GetComponent().time",
            "Animator.currentFrame",
            "AnimationTimer"
        ],
        correctAnswer: 0,
        explanation: "AnimatorStateInfo.normalizedTime donne un float [0..1] représentant la progression."
    },
    {
        id: "anim-pro-18",
        category: "Animation",
        level: "pro",
        question: "Quel problème courant provoque des sauts (‘snapping’) lors de transitions entre animations avec Root Motion ?",
        options: [
            "Incohérence des courbes de déplacement entre les animations (root curves)",
            "Mauvais color grading",
            "Utilisation de SpriteRenderer au lieu de SkinnedMeshRenderer",
            "Mauvais tag de layer"
        ],
        correctAnswer: 0,
        explanation: "Les mouvements doivent être cohérents dans toutes les animations pour éviter les sauts brutaux."
    },
    {
        id: "anim-pro-19",
        category: "Animation",
        level: "pro",
        question: "Quel est l’impact de ‘Has Exit Time’ sur une transition dans un Animator Controller ?",
        options: [
            "Force la transition à attendre la fin de l’animation avant de se déclencher",
            "Réduit la taille du build",
            "Optimise le GPU",
            "Active le Profiling"
        ],
        correctAnswer: 0,
        explanation: "Has Exit Time impose que l’animation en cours se termine avant de passer à l’état suivant."
    },
    {
        id: "anim-pro-20",
        category: "Animation",
        level: "pro",
        question: "Quelle fonction permet de contrôler la lecture (pause, reprise, avance rapide) d’une Timeline via script ?",
        options: [
            "PlayableDirector.Pause(), Play(), Stop(), etc.",
            "Animator.enabled = false",
            "SetActive(false)",
            "Update()"
        ],
        correctAnswer: 0,
        explanation: "PlayableDirector gère la Timeline en C# (pause, play, stop, seek, etc.)."
    },
    {
        id: "anim-expert-1",
        category: "Animation",
        level: "expert",
        question: "Comment optimiser les performances d’animation sur un grand nombre de NPCs dans une scène ?",
        options: [
            "Activer le culling sur chaque Animator et réduire la fréquence d’update",
            "Déplacer tous les NPCs dans la hiérarchie racine",
            "Utiliser des spritesheets",
            "Désactiver tous les Blend Trees"
        ],
        correctAnswer: 0,
        explanation: "Le culling désactive le calcul d’animation hors caméra ; réduire l’update économise du CPU."
    },
    {
        id: "anim-expert-2",
        category: "Animation",
        level: "expert",
        question: "Quel outil utiliser pour retargeter dynamiquement des animations d’un personnage à un autre avec un rig différent ?",
        options: [
            "Avatar et retargeting runtime",
            "NavMeshAgent",
            "Prefab Variant",
            "Physics2D"
        ],
        correctAnswer: 0,
        explanation: "Le système d’Avatar de Unity permet le retargeting d’animations entre rigs compatibles."
    },
    {
        id: "anim-expert-3",
        category: "Animation",
        level: "expert",
        question: "Quelle approche utiliser pour mixer en temps réel plusieurs animations (ex : respirer, viser, courir, tirer) tout en gardant la cohérence du résultat ?",
        options: [
            "Utiliser plusieurs layers dans l’Animator avec des Avatar Masks",
            "Ajouter un Animator par animation",
            "Utiliser Animation.Play dans une boucle",
            "Passer par le Legacy Animation Component"
        ],
        correctAnswer: 0,
        explanation: "Les layers, avec ou sans masks, permettent un blending propre et cohérent de plusieurs animations simultanées."
    },
    {
        id: "anim-expert-4",
        category: "Animation",
        level: "expert",
        question: "Quel est le risque de modifier les valeurs de propriétés animées via script au runtime (ex : transform.position) ?",
        options: [
            "Créer des conflits avec le système d’animation qui écrasera les valeurs au frame suivante",
            "Optimiser les FPS",
            "Forcer le recalcul du Lightmap",
            "Augmenter la taille du build"
        ],
        correctAnswer: 0,
        explanation: "L’Animator écrase tout changement sur une propriété animée à chaque frame, donc toute modification manuelle est perdue sauf si gérée explicitement."
    },
    {
        id: "anim-expert-5",
        category: "Animation",
        level: "expert",
        question: "Quel pipeline d’animation choisir pour appliquer des animations complexes sur des objets non-humanoïdes (machines, portes, etc.) tout en gardant la synchronisation audio/FX ?",
        options: [
            "Timeline, Animation Clips et PlayableDirector",
            "NavMeshAgent",
            "Animator uniquement",
            "Cinemachine"
        ],
        correctAnswer: 0,
        explanation: "Timeline permet de mixer animation, audio, FX, et événements sur tous types d’objets."
    },
    {
        id: "anim-expert-6",
        category: "Animation",
        level: "expert",
        question: "Quelle méthode utiliser pour corriger des ‘popping’ lors de transitions avec root motion entre plusieurs clips ?",
        options: [
            "Aligner manuellement les courbes root entre les animations et synchroniser les positions",
            "Augmenter la vitesse de transition",
            "Désactiver le root motion",
            "Mettre le Animator en Update Mode: Animate Physics"
        ],
        correctAnswer: 0,
        explanation: "Il faut soigner la continuité des courbes root pour éviter les snaps de position."
    },
    {
        id: "anim-expert-7",
        category: "Animation",
        level: "expert",
        question: "Quel est l’avantage principal d’un Custom Playable (AnimationScriptPlayable) comparé au pipeline Animator classique ?",
        options: [
            "Gérer des logiques de blending, layers, contraintes ou effets impossibles dans Animator Controller",
            "Réduire la taille des assets",
            "Supprimer le besoin de rig",
            "Augmenter la résolution des textures"
        ],
        correctAnswer: 0,
        explanation: "Un Playable custom donne accès au pipeline d’animation bas-niveau : logique procédurale, blending dynamique, etc."
    },
    {
        id: "anim-expert-8",
        category: "Animation",
        level: "expert",
        question: "Comment débugger efficacement une animation qui fonctionne dans le Preview mais pas en runtime ?",
        options: [
            "Vérifier l’Animator Controller, les overrides de state, les triggers, et le script qui contrôle le Animator",
            "Relancer Unity",
            "Changer la couleur du GameObject",
            "Réimporter tous les assets"
        ],
        correctAnswer: 0,
        explanation: "Le runtime n’utilise pas toujours les mêmes paramètres que le Preview Editor ; il faut tracer les paramètres et le code."
    },
    {
        id: "anim-expert-9",
        category: "Animation",
        level: "expert",
        question: "Quelle technique permet de synchroniser précisément plusieurs personnages ou objets sur un événement précis (chorégraphie, cinématique) ?",
        options: [
            "Utiliser Timeline et des PlayableDirector synchronisés",
            "Créer un script avec Update()",
            "Utiliser uniquement des triggers",
            "Baker les animations dans le mesh"
        ],
        correctAnswer: 0,
        explanation: "Timeline et plusieurs PlayableDirector permettent la synchro multi-objet à la frame près."
    },
    {
        id: "anim-expert-10",
        category: "Animation",
        level: "expert",
        question: "Quel bug classique peut apparaître lors d’un retargeting d’animation sur des rigs humanoïdes avec des proportions différentes ?",
        options: [
            "Des déformations bizarres (bras trop courts/longs, pieds qui glissent)",
            "Des artefacts de lumière",
            "Des problèmes de collision",
            "Des warnings de texture"
        ],
        correctAnswer: 0,
        explanation: "Des proportions différentes sans ajustement du retarget provoquent des mouvements irréalistes."
    },
    {
        id: "anim-expert-11",
        category: "Animation",
        level: "expert",
        question: "Comment appliquer une contrainte dynamique sur un bone (ex : main qui suit une cible) pendant une animation ?",
        options: [
            "Utiliser les Animation Rigging Constraints (package officiel Unity)",
            "Changer le Animator Controller à la volée",
            "Utiliser un Physics Material",
            "Créer un second Animator"
        ],
        correctAnswer: 0,
        explanation: "Animation Rigging permet des IK, LookAt, MultiAim ou TwoBoneIK en runtime, pour mixer anim et logique dynamiques."
    },
    {
        id: "anim-expert-12",
        category: "Animation",
        level: "expert",
        question: "Quelle approche pour intégrer des animations générées en runtime (procédurales ou via IA) avec le pipeline existant ?",
        options: [
            "Utiliser des AnimationClip Playable ou générer des clips dynamiquement, puis les jouer via un PlayableGraph",
            "Ajouter des Animator Controllers dynamiquement",
            "Remplacer tous les blend trees",
            "Exporter en FBX"
        ],
        correctAnswer: 0,
        explanation: "Les AnimationClips peuvent être générés et injectés dans le PlayableGraph pour blending/switching."
    },
    {
        id: "anim-expert-13",
        category: "Animation",
        level: "expert",
        question: "Pourquoi éviter d’utiliser Animator.SetTrigger à chaque frame dans Update() ?",
        options: [
            "Parce que cela peut spammer l’état de l’Animator et créer des transitions imprévisibles",
            "Parce que ça modifie la caméra",
            "Parce que ça reset le prefab",
            "Parce que ça utilise le GPU"
        ],
        correctAnswer: 0,
        explanation: "SetTrigger doit être appelé au bon moment, pas en boucle sinon l’état part en cacahuète."
    },
    {
        id: "anim-expert-14",
        category: "Animation",
        level: "expert",
        question: "Comment détecter si une animation importée n’a pas de loop alors qu’elle devrait boucler ?",
        options: [
            "Vérifier dans l’Inspector que l’option Loop Time est cochée",
            "Changer de layer",
            "Remplacer l’Animator par un script",
            "Activer le mode 2D"
        ],
        correctAnswer: 0,
        explanation: "Une animation ne boucle que si Loop Time est activé sur le clip."
    },
    {
        id: "anim-expert-15",
        category: "Animation",
        level: "expert",
        question: "Quel problème peut poser l’utilisation abusive de ‘Animator Override Controller’ ?",
        options: [
            "Difficulté à maintenir/contrôler les overrides et risques d’oublier de référencer les bons clips",
            "Augmentation de la taille des scènes",
            "Ralentissement du Lighting",
            "Perte de textures"
        ],
        correctAnswer: 0,
        explanation: "Plus on override, plus on risque de bugs de mapping, de confusion et de maintenance lourde."
    },
    {
        id: "anim-expert-16",
        category: "Animation",
        level: "expert",
        question: "Comment synchroniser précisément un effet visuel (particle system) avec un événement dans une animation complexe ?",
        options: [
            "Animation Event sur le clip qui déclenche le système de particules via script",
            "Créer un nouveau Animator",
            "Ajouter un trigger sur l’Animator Controller",
            "Utiliser Lighting Settings"
        ],
        correctAnswer: 0,
        explanation: "Les Animation Events appellent une méthode en C#, qui lance le particle system au bon moment."
    },
    {
        id: "anim-expert-17",
        category: "Animation",
        level: "expert",
        question: "Quelle stratégie pour débugger un problème de Blend Tree qui ne répond pas aux paramètres envoyés par le code ?",
        options: [
            "Vérifier que les paramètres du Blend Tree existent et sont mis à jour par le script",
            "Changer tous les paramètres en triggers",
            "Modifier le layer du GameObject",
            "Réduire la résolution du mesh"
        ],
        correctAnswer: 0,
        explanation: "Un paramètre qui n’existe pas ou mal écrit = Blend Tree statique."
    },
    {
        id: "anim-expert-18",
        category: "Animation",
        level: "expert",
        question: "Quel impact a le ‘Update Mode’ de l’Animator sur le comportement en VR (XR) ou avec la physique ?",
        options: [
            "En mode Animate Physics, l’Animator update pendant FixedUpdate, idéal pour synchroniser avec la physique ou XR",
            "Il augmente la résolution du mesh",
            "Il optimise le Baking",
            "Il force le Mesh Renderer à s’activer"
        ],
        correctAnswer: 0,
        explanation: "En Animate Physics, les updates sont calés sur la physique, utile pour XR/interactions précises."
    },
    {
        id: "anim-expert-19",
        category: "Animation",
        level: "expert",
        question: "Quelle structure de code permet de piloter dynamiquement plusieurs Timeline en même temps sur plusieurs objets ?",
        options: [
            "Créer plusieurs PlayableDirector et contrôler chacun par script",
            "Un seul PlayableDirector pour toute la scène",
            "Un Animator Controller global",
            "Utiliser Update() pour tout synchroniser"
        ],
        correctAnswer: 0,
        explanation: "Chaque Timeline a son PlayableDirector ; ils peuvent être lancés/synchronisés via code."
    },
    {
        id: "anim-expert-20",
        category: "Animation",
        level: "expert",
        question: "Quel est l’avantage du Baking d’animation (exporter l’anim ‘baked’ dans le mesh) ?",
        options: [
            "Permet de jouer l’animation sans Animator Controller ni rig au runtime (perf, simplicité, scènes fixes)",
            "Réduit la taille des textures",
            "Augmente la résolution de la lumière",
            "Gère le streaming audio"
        ],
        correctAnswer: 0,
        explanation: "Le baking d’anim est utile pour les props ou décors : pas besoin d’Animator, lecture ultra rapide."
    },
    {
        id: "shader-user-1",
        category: "Shaders",
        level: "user",
        question: "Quel est le but principal d’un matériau (Material) dans Unity ?",
        options: [
            "Définir l’apparence visuelle d’un objet via un shader et des textures",
            "Contrôler la physique de l’objet",
            "Changer le comportement de l’audio",
            "Optimiser le pathfinding"
        ],
        correctAnswer: 0,
        explanation: "Un matériau détermine la façon dont un objet est affiché en utilisant un shader et des textures."
    },
    {
        id: "shader-user-2",
        category: "Shaders",
        level: "user",
        question: "Qu’est-ce qu’un shader dans Unity ?",
        options: [
            "Un programme qui calcule comment un objet est rendu à l’écran",
            "Un composant physique",
            "Un asset audio",
            "Un script pour le gameplay"
        ],
        correctAnswer: 0,
        explanation: "Un shader est un programme s’exécutant sur le GPU, contrôlant l’apparence visuelle d’un objet."
    },
    {
        id: "shader-user-3",
        category: "Shaders",
        level: "user",
        question: "Quel pipeline de rendu propose Unity pour la gestion avancée des shaders et effets visuels ?",
        options: [
            "URP (Universal Render Pipeline) et HDRP (High Definition Render Pipeline)",
            "Animator Controller",
            "NavMesh",
            "Timeline"
        ],
        correctAnswer: 0,
        explanation: "URP et HDRP permettent des shaders avancés, des effets custom, et plus de flexibilité que le pipeline standard."
    },
    {
        id: "shader-user-4",
        category: "Shaders",
        level: "user",
        question: "Comment appliquer une texture à un objet 3D dans Unity ?",
        options: [
            "Assigner une texture à la propriété 'Albedo' du matériau de l’objet",
            "Attacher la texture à la caméra",
            "Placer la texture dans le dossier Audio",
            "Changer le script C#"
        ],
        correctAnswer: 0,
        explanation: "La texture est appliquée au slot 'Albedo' dans le matériel attaché au mesh."
    },
    {
        id: "shader-user-5",
        category: "Shaders",
        level: "user",
        question: "Quel slot du shader Standard permet de régler la transparence d’un matériau ?",
        options: [
            "Alpha",
            "Normal Map",
            "Emission",
            "Smoothness"
        ],
        correctAnswer: 0,
        explanation: "Le canal Alpha définit le niveau de transparence."
    },
    {
        id: "shader-user-6",
        category: "Shaders",
        level: "user",
        question: "À quoi sert une Normal Map dans un matériau ?",
        options: [
            "Simuler du relief sans ajouter de polygones",
            "Augmenter le volume audio",
            "Changer la physique",
            "Contrôler le pathfinding"
        ],
        correctAnswer: 0,
        explanation: "La normal map donne une illusion de relief et de détails sur la surface, sans géométrie réelle."
    },
    {
        id: "shader-user-7",
        category: "Shaders",
        level: "user",
        question: "Comment activer la transparence sur un matériau avec le shader Standard ?",
        options: [
            "Changer le mode Rendering de 'Opaque' à 'Transparent'",
            "Augmenter la valeur du Smoothness",
            "Décocher 'Receive Shadows'",
            "Changer la texture d’albedo"
        ],
        correctAnswer: 0,
        explanation: "Il faut définir le mode Rendering en Transparent pour permettre la transparence."
    },
    {
        id: "shader-user-8",
        category: "Shaders",
        level: "user",
        question: "Quel asset permet de créer des shaders personnalisés sans coder dans Unity ?",
        options: [
            "Shader Graph",
            "Audio Mixer",
            "Animation Rigging",
            "Physics Material"
        ],
        correctAnswer: 0,
        explanation: "Shader Graph permet de créer des shaders visuellement, sans écrire de code HLSL."
    },
    {
        id: "shader-user-9",
        category: "Shaders",
        level: "user",
        question: "Quel paramètre ajuste la brillance d’une surface dans le shader Standard ?",
        options: [
            "Smoothness",
            "Emission",
            "Alpha",
            "Metallic"
        ],
        correctAnswer: 0,
        explanation: "Le paramètre Smoothness définit à quel point la surface réfléchit la lumière (brillance)."
    },
    {
        id: "shader-user-10",
        category: "Shaders",
        level: "user",
        question: "Si une texture apparaît toute blanche sur un mesh, quelle erreur probable vérifier ?",
        options: [
            "Mauvais UV Mapping sur le modèle",
            "Audio import incorrect",
            "Mauvaise animation",
            "Collider absent"
        ],
        correctAnswer: 0,
        explanation: "Un UV Mapping incorrect empêche la texture de s’appliquer correctement sur la géométrie."
    },
    {
        id: "shader-user-11",
        category: "Shaders",
        level: "user",
        question: "Quel paramètre d’un matériau permet d’émettre de la lumière, même sans éclairage de scène ?",
        options: [
            "Emission",
            "Smoothness",
            "Normal Map",
            "Alpha"
        ],
        correctAnswer: 0,
        explanation: "L’Emission fait briller un matériau, indépendamment de la lumière de la scène."
    },
    {
        id: "shader-user-12",
        category: "Shaders",
        level: "user",
        question: "Quel format d’image est recommandé pour les textures avec transparence en Unity ?",
        options: [
            "PNG",
            "MP3",
            "JPG",
            "MP4"
        ],
        correctAnswer: 0,
        explanation: "Le format PNG gère l’alpha/transparence, à la différence du JPG."
    },
    {
        id: "shader-user-13",
        category: "Shaders",
        level: "user",
        question: "Qu’est-ce qu’une Albedo Map ?",
        options: [
            "Une texture couleur de base appliquée sur un matériau",
            "Une map audio spatialisée",
            "Un paramètre de physique",
            "Un composant de caméra"
        ],
        correctAnswer: 0,
        explanation: "L’Albedo Map est la texture de couleur de base."
    },
    {
        id: "shader-user-14",
        category: "Shaders",
        level: "user",
        question: "Dans Shader Graph, que permet le node 'Multiply' ?",
        options: [
            "Multiplier la valeur de deux entrées (ex : couleur et alpha)",
            "Créer une nouvelle texture",
            "Déclencher un événement audio",
            "Changer de caméra"
        ],
        correctAnswer: 0,
        explanation: "Multiply permet de combiner mathématiquement deux valeurs dans un shader."
    },
    {
        id: "shader-user-15",
        category: "Shaders",
        level: "user",
        question: "Quel composant faut-il ajouter sur un mesh pour afficher le rendu d’un shader ?",
        options: [
            "Mesh Renderer",
            "Audio Source",
            "NavMesh Agent",
            "Animation"
        ],
        correctAnswer: 0,
        explanation: "Le Mesh Renderer est responsable de l’affichage du mesh avec son matériau/shader."
    },
    {
        id: "shader-user-16",
        category: "Shaders",
        level: "user",
        question: "Si un shader ne compile pas et affiche une surface rose dans la scène, quelle est la cause principale ?",
        options: [
            "Erreur de compilation dans le code du shader",
            "Caméra mal positionnée",
            "Collider manquant",
            "Texte manquant"
        ],
        correctAnswer: 0,
        explanation: "Le rose indique une erreur de shader : soit code HLSL foireux, soit mauvais slot."
    },
    {
        id: "shader-user-17",
        category: "Shaders",
        level: "user",
        question: "Quel est l’intérêt du mode 'Cutout' sur un shader Standard ?",
        options: [
            "Créer des matériaux avec transparence franche (ex : feuillage, grillage)",
            "Améliorer la physique",
            "Changer la vitesse d’animation",
            "Gérer le volume audio"
        ],
        correctAnswer: 0,
        explanation: "Le mode Cutout masque net une partie du matériau avec un seuil d’alpha."
    },
    {
        id: "shader-user-18",
        category: "Shaders",
        level: "user",
        question: "Comment réutiliser un matériau sur plusieurs objets sans duplication ?",
        options: [
            "Drag and drop le même material asset sur chaque objet",
            "Créer un prefab par objet",
            "Copier-coller le mesh",
            "Créer un nouvel Audio Mixer"
        ],
        correctAnswer: 0,
        explanation: "Un seul Material asset peut être partagé par tous les Mesh Renderer nécessaires."
    },
    {
        id: "shader-user-19",
        category: "Shaders",
        level: "user",
        question: "À quoi sert le paramètre Tiling dans un matériau ?",
        options: [
            "Répéter la texture sur le mesh selon des axes X/Y",
            "Changer la taille du mesh",
            "Changer la couleur du shader",
            "Activer l’audio spatial"
        ],
        correctAnswer: 0,
        explanation: "Tiling ajuste la répétition d’une texture."
    },
    {
        id: "shader-user-20",
        category: "Shaders",
        level: "user",
        question: "Quel node Shader Graph te permet de sampler (lire) une texture ?",
        options: [
            "Sample Texture 2D",
            "Add",
            "Lerp",
            "Transform"
        ],
        correctAnswer: 0,
        explanation: "Sample Texture 2D permet d’accéder aux pixels d’une texture dans le graphe."
    },
    {
        id: "shader-pro-1",
        category: "Shaders",
        level: "pro",
        question: "Quel avantage apporte l’utilisation de Shader Graph sur URP ou HDRP ?",
        options: [
            "Création de shaders personnalisés visuellement, adaptés au pipeline choisi",
            "Permet de gérer l’audio spatial",
            "Ajoute la physique avancée",
            "Optimise automatiquement toutes les textures"
        ],
        correctAnswer: 0,
        explanation: "Shader Graph simplifie la création de shaders custom, compatibles avec URP/HDRP."
    },
    {
        id: "shader-pro-2",
        category: "Shaders",
        level: "pro",
        question: "Quelle différence majeure entre un Shader PBR et un Shader Unlit ?",
        options: [
            "Le shader PBR réagit à la lumière, l’Unlit non",
            "L’Unlit gère la physique",
            "Le PBR s’utilise seulement sur UI",
            "L’Unlit requiert du code C#"
        ],
        correctAnswer: 0,
        explanation: "Unlit = aucun éclairage ; PBR = shading basé sur la physique, réagit aux lumières/scène."
    },
    {
        id: "shader-pro-3",
        category: "Shaders",
        level: "pro",
        question: "Quel pipeline Unity faut-il utiliser pour activer les effets de Post-Processing avancés (ex : bloom, vignette, DOF) avec compatibilité Shader Graph ?",
        options: [
            "URP ou HDRP uniquement",
            "Pipeline standard",
            "Input System",
            "Timeline"
        ],
        correctAnswer: 0,
        explanation: "URP/HDRP intègrent les volumes de post-process et sont compatibles Shader Graph."
    },
    {
        id: "shader-pro-4",
        category: "Shaders",
        level: "pro",
        question: "Quelle propriété doit être activée pour qu’un matériau émette de la lumière dans le pipeline HDRP ?",
        options: [
            "Enable Emission et paramétrage de l’intensité",
            "Mettre le mode en Cutout",
            "Augmenter le Metallic à 1",
            "Changer le Render Queue"
        ],
        correctAnswer: 0,
        explanation: "Emission doit être activé et configuré dans HDRP pour émettre physiquement de la lumière."
    },
    {
        id: "shader-pro-5",
        category: "Shaders",
        level: "pro",
        question: "Comment optimiser la performance d’un shader custom gourmand en calculs ?",
        options: [
            "Minimiser les branches, réduire les calculs par pixel, et utiliser des textures pré-calculées",
            "Ajouter plus de nodes Multiply",
            "Monter la résolution des textures",
            "Désactiver l’anti-aliasing"
        ],
        correctAnswer: 0,
        explanation: "Réduire les instructions GPU et utiliser les maps pré-calculées optimise la perf."
    },
    {
        id: "shader-pro-6",
        category: "Shaders",
        level: "pro",
        question: "Pourquoi faut-il faire attention à la taille des textures utilisées dans les matériaux ?",
        options: [
            "Grosse texture = consommation mémoire GPU et risques de baisse de FPS",
            "Cela augmente le volume sonore",
            "Les textures changent la physique",
            "Les textures n’ont aucun impact"
        ],
        correctAnswer: 0,
        explanation: "Des textures trop grandes saturent la mémoire vidéo et ralentissent le rendu."
    },
    {
        id: "shader-pro-7",
        category: "Shaders",
        level: "pro",
        question: "Dans Shader Graph, que permet le node 'Time' ?",
        options: [
            "Créer des effets animés dépendant du temps (ex : pulsation, scrolling, wobble)",
            "Activer un trigger audio",
            "Changer le mode physics",
            "Modifier le Mesh Collider"
        ],
        correctAnswer: 0,
        explanation: "Le node Time permet d’animer des propriétés dans le shader (scroll, pulsation, etc)."
    },
    {
        id: "shader-pro-8",
        category: "Shaders",
        level: "pro",
        question: "Que se passe-t-il si plusieurs Mesh Renderer partagent le même Material asset et on modifie ce Material à runtime ?",
        options: [
            "Tous les Mesh Renderer utilisant ce Material sont modifiés en temps réel",
            "Rien ne se passe",
            "Uniquement le premier Mesh Renderer est modifié",
            "Cela crée un doublon automatique"
        ],
        correctAnswer: 0,
        explanation: "Les modifications runtime sur un Material partagé s’appliquent à tous les objets qui l’utilisent."
    },
    {
        id: "shader-pro-9",
        category: "Shaders",
        level: "pro",
        question: "Pourquoi le choix du mode 'Opaque' vs 'Transparent' a-t-il un impact sur l’ordre de rendu et la perf ?",
        options: [
            "Les objets transparents sont rendus après les opaques, peuvent causer overdraw et bugs de tri",
            "Transparent est toujours plus rapide",
            "Opaque bloque le son",
            "Cela change le type de Collider"
        ],
        correctAnswer: 0,
        explanation: "Le mode Transparent implique un tri différent (back-to-front), plus coûteux et sujet à overdraw."
    },
    {
        id: "shader-pro-10",
        category: "Shaders",
        level: "pro",
        question: "À quoi sert un 'Render Queue' personnalisé dans un shader ?",
        options: [
            "Définir l’ordre de rendu manuel par rapport aux autres objets (utile pour les effets spéciaux, UI, transparence)",
            "Gérer le pathfinding",
            "Changer le bake d’audio",
            "Définir la gravité"
        ],
        correctAnswer: 0,
        explanation: "La Render Queue permet de contrôler quand le shader est dessiné pendant la frame."
    },
    {
        id: "shader-pro-11",
        category: "Shaders",
        level: "pro",
        question: "Qu’est-ce qu’une 'Mask Map' dans HDRP ?",
        options: [
            "Une texture multi-canal (R,G,B,A) regroupant différents paramètres physiques (Metallic, AO, Detail, Smoothness)",
            "Un script d’IA",
            "Un son spatialisé",
            "Une map d’UV"
        ],
        correctAnswer: 0,
        explanation: "La Mask Map rassemble plusieurs paramètres pour optimiser la perf et réduire les fetch GPU."
    },
    {
        id: "shader-pro-12",
        category: "Shaders",
        level: "pro",
        question: "Quel impact a le nombre de passes (Pass) dans un shader custom ?",
        options: [
            "Plus il y a de passes, plus le shader est gourmand (draw calls et perf GPU)",
            "Aucun impact",
            "Cela change la physique du mesh",
            "Accélère le build"
        ],
        correctAnswer: 0,
        explanation: "Chaque pass ajoute un draw call et du calcul, à limiter autant que possible."
    },
    {
        id: "shader-pro-13",
        category: "Shaders",
        level: "pro",
        question: "Comment débugger visuellement un problème de normals sur un mesh via un shader ?",
        options: [
            "Utiliser un shader qui colore la surface selon la normale (ex : visualize normals)",
            "Baisser la résolution du mesh",
            "Changer la caméra",
            "Désactiver l’éclairage"
        ],
        correctAnswer: 0,
        explanation: "Visualiser les normales permet d’identifier les problèmes de mesh ou de bake."
    },
    {
        id: "shader-pro-14",
        category: "Shaders",
        level: "pro",
        question: "Quelle est la différence entre une Bump Map et une Normal Map ?",
        options: [
            "Bump Map = monochrome ; Normal Map = RGB, encode la direction de la normale pour plus de réalisme",
            "Aucune différence",
            "Normal Map = audio",
            "Bump Map gère la specularité"
        ],
        correctAnswer: 0,
        explanation: "La Normal Map donne une vraie direction, la Bump Map ne gère que l’intensité du relief."
    },
    {
        id: "shader-pro-15",
        category: "Shaders",
        level: "pro",
        question: "Pourquoi faut-il parfois “baker” une Lightmap même avec des shaders PBR ?",
        options: [
            "Pour intégrer l’éclairage statique, éviter de tout calculer en temps réel et améliorer la perf",
            "Pour le son spatial",
            "Pour les collisions",
            "Pour accélérer le physics update"
        ],
        correctAnswer: 0,
        explanation: "La lightmap stocke l’illumination statique et libère des ressources pour le runtime."
    },
    {
        id: "shader-pro-16",
        category: "Shaders",
        level: "pro",
        question: "Quel node Shader Graph utiliser pour faire défiler une texture (ex : scrolling UV) ?",
        options: [
            "Tiling and Offset avec Time",
            "Sample Texture 2D Array",
            "Metallic",
            "One Minus"
        ],
        correctAnswer: 0,
        explanation: "Un Offset animé via Time permet de scroller la texture dans le shader."
    },
    {
        id: "shader-pro-17",
        category: "Shaders",
        level: "pro",
        question: "Si un matériau affiche des artefacts noirs dans les zones éclairées, quel paramètre regarder ?",
        options: [
            "Vérifier les normales, la smoothness et les maps d’AO",
            "Réduire la taille de l’audio",
            "Changer le type d’animation",
            "Ajouter un Mesh Collider"
        ],
        correctAnswer: 0,
        explanation: "Artefacts = souvent problèmes de normales, lightmap mal bake, ou AO extrême."
    },
    {
        id: "shader-pro-18",
        category: "Shaders",
        level: "pro",
        question: "Quelle différence entre une Emission Map et une Albedo Map ?",
        options: [
            "L’Emission Map détermine les zones qui émettent de la lumière, l’Albedo Map la couleur de base",
            "Albedo = brillance",
            "Emission Map gère les collisions",
            "Aucune, ce sont des synonymes"
        ],
        correctAnswer: 0,
        explanation: "L’Emission Map est utilisée pour simuler des sources lumineuses locales."
    },
    {
        id: "shader-pro-19",
        category: "Shaders",
        level: "pro",
        question: "Dans Shader Graph, comment réaliser une transition progressive entre deux textures ?",
        options: [
            "Utiliser le node Lerp (Linear Interpolate)",
            "Ajouter deux Texture Samplers",
            "Utiliser le node Add",
            "Changer de caméra"
        ],
        correctAnswer: 0,
        explanation: "Lerp permet d’interpoler entre deux entrées selon un facteur (masque, temps, etc.)."
    },
    {
        id: "shader-pro-20",
        category: "Shaders",
        level: "pro",
        question: "Pourquoi utiliser le node 'One Minus' dans un shader ?",
        options: [
            "Inverser une valeur (utile pour masks, alpha, ou blending inversé)",
            "Augmenter la résolution",
            "Répéter une texture",
            "Créer un prefab"
        ],
        correctAnswer: 0,
        explanation: "One Minus retourne 1-x : pratique pour inverser un masque ou canal d’alpha."
    },
    {
        id: "shader-expert-1",
        category: "Shaders",
        level: "expert",
        question: "Comment optimiser un shader PBR complexe pour un projet mobile sous URP sans perte visuelle notable ?",
        options: [
            "Réduire les passes, utiliser des textures compressées, limiter les calculs dynamiques et exploiter les LODs de shaders",
            "Augmenter la résolution des textures et ajouter des passes supplémentaires",
            "Utiliser uniquement des shaders Unlit",
            "Désactiver le batching statique"
        ],
        correctAnswer: 0,
        explanation: "L’optimisation mobile passe par la réduction des passes, compression et simplification des calculs tout en conservant la qualité visuelle."
    },
    {
        id: "shader-expert-2",
        category: "Shaders",
        level: "expert",
        question: "Dans HDRP, comment tirer parti des Shader Variants pour améliorer les temps de compilation et runtime ?",
        options: [
            "En limitant les keywords actifs et en compilant uniquement les variants nécessaires au projet",
            "En activant tous les keywords par défaut",
            "En désactivant la compilation des shaders",
            "En augmentant le nombre de passes"
        ],
        correctAnswer: 0,
        explanation: "Limiter les keywords évite de compiler et charger des variants inutiles, réduisant la taille et le temps de build."
    },
    {
        id: "shader-expert-3",
        category: "Shaders",
        level: "expert",
        question: "Comment intégrer un shader personnalisé complexe dans un pipeline URP tout en conservant la compatibilité avec le système de Post-Processing ?",
        options: [
            "Utiliser les fonctions et templates URP spécifiques, et éviter d’outrepasser les passes standard du pipeline",
            "Écrire un shader standard sans tenir compte du pipeline",
            "Ignorer le Post-Processing",
            "Utiliser un shader Legacy"
        ],
        correctAnswer: 0,
        explanation: "Respecter les conventions URP et ses templates garantit la compatibilité avec les effets de post-processing."
    },
    {
        id: "shader-expert-4",
        category: "Shaders",
        level: "expert",
        question: "Quels sont les risques d’utiliser trop de propriétés et textures dans un même matériau shader sur les performances GPU ?",
        options: [
            "Augmentation de la bande passante mémoire et saturation du GPU, ce qui peut provoquer des chutes de FPS",
            "Plus de détails graphiques sans impact",
            "Amélioration automatique des performances",
            "Plus de précision pour le pathfinding"
        ],
        correctAnswer: 0,
        explanation: "Chaque texture ou propriété supplémentaire consomme mémoire GPU et bande passante, dégradant la performance."
    },
    {
        id: "shader-expert-5",
        category: "Shaders",
        level: "expert",
        question: "Comment profiler efficacement un shader complexe pour identifier les goulets d’étranglement GPU dans Unity ?",
        options: [
            "Utiliser le GPU Profiler intégré, RenderDoc, ou Frame Debugger pour analyser les draw calls et le temps de rendu par shader",
            "Regarder uniquement le CPU Profiler",
            "Augmenter la résolution des textures",
            "Supprimer les lumières"
        ],
        correctAnswer: 0,
        explanation: "Les outils GPU permettent de visualiser les passes et leur coût pour optimiser précisément."
    },
    {
        id: "shader-expert-6",
        category: "Shaders",
        level: "expert",
        question: "Quel est l’impact du blending alpha pré-multiplié vs alpha standard dans les shaders transparents ?",
        options: [
            "Le blending pré-multiplié réduit les artefacts et améliore la qualité des bords transparents",
            "Aucun impact",
            "Il augmente la luminosité générale",
            "Il désactive les ombres"
        ],
        correctAnswer: 0,
        explanation: "Le pré-multiplied alpha réduit le ghosting et les artefacts sur les bords des transparences."
    },
    {
        id: "shader-expert-7",
        category: "Shaders",
        level: "expert",
        question: "Pourquoi et comment utiliser le 'Shader Keyword Stripping' dans Unity ?",
        options: [
            "Pour réduire la taille du build en supprimant les variantes de shader inutilisées via la configuration dans le pipeline",
            "Pour augmenter la taille du build",
            "Pour ajouter plus de variantes",
            "Pour débugger le pipeline de build"
        ],
        correctAnswer: 0,
        explanation: "Stripping enlève les variantes non utilisées, réduisant build size et amélioration du temps de chargement."
    },
    {
        id: "shader-expert-8",
        category: "Shaders",
        level: "expert",
        question: "Comment gérer un shader multi-pass performant quand on doit appliquer des effets spécifiques à certaines passes ?",
        options: [
            "Minimiser les passes, grouper les effets connexes, et optimiser les passes pour éviter des draw calls excessifs",
            "Créer une passe par pixel",
            "Utiliser uniquement des shaders Unlit",
            "Utiliser des scripts C# pour le rendu"
        ],
        correctAnswer: 0,
        explanation: "Optimiser le nombre de passes et leur contenu réduit la charge GPU et maintient la qualité visuelle."
    },
    {
        id: "shader-expert-9",
        category: "Shaders",
        level: "expert",
        question: "Comment utiliser un Compute Shader dans Unity pour des effets visuels avancés ?",
        options: [
            "Écrire un Compute Shader HLSL, le dispatch dans un script C# et utiliser ses résultats dans un shader de rendu classique",
            "Utiliser un shader standard",
            "Ignorer le GPU",
            "Compresser la texture"
        ],
        correctAnswer: 0,
        explanation: "Compute Shader permet de faire des calculs massivement parallèles pour des effets avancés."
    },
    {
        id: "shader-expert-10",
        category: "Shaders",
        level: "expert",
        question: "Quelle méthode permet de déboguer un shader HLSL personnalisé pour détecter erreurs de compilation et comportements erratiques ?",
        options: [
            "Utiliser les messages de compilation dans Unity, shader compiler logs, et tools externes comme RenderDoc",
            "Redémarrer Unity",
            "Changer le pipeline",
            "Supprimer les textures"
        ],
        correctAnswer: 0,
        explanation: "Les logs de compilation et outils de profiling sont indispensables pour débugger les shaders custom."
    },
    {
        id: "shader-expert-11",
        category: "Shaders",
        level: "expert",
        question: "Qu’est-ce que le 'SubShader' dans un shader Unity et pourquoi est-il important ?",
        options: [
            "Un SubShader définit une alternative compatible pour différents matériels et situations de rendu",
            "Un SubShader est un type d’animation",
            "Un SubShader est une texture",
            "Un SubShader est un composant audio"
        ],
        correctAnswer: 0,
        explanation: "Les SubShaders permettent à Unity de choisir celui compatible avec la plateforme ou matériel."
    },
    {
        id: "shader-expert-12",
        category: "Shaders",
        level: "expert",
        question: "Comment implémenter un effet de parallaxe avancé dans un shader custom ?",
        options: [
            "En utilisant des maps de hauteur (height maps) et décalant les UVs selon la vue de la caméra",
            "En changeant la couleur du mesh",
            "En modifiant la lumière uniquement",
            "En augmentant la résolution des textures"
        ],
        correctAnswer: 0,
        explanation: "Le parallaxe simule la profondeur en décalant les coordonnées de texture selon la caméra et hauteur."
    },
    {
        id: "shader-expert-13",
        category: "Shaders",
        level: "expert",
        question: "Quelle est la différence entre 'Forward Rendering' et 'Deferred Rendering' concernant les shaders ?",
        options: [
            "Forward calcule les lumières par objet, Deferred sépare la géométrie et le calcul lumière pour gérer plus de sources efficacement",
            "Forward est plus lent que Deferred toujours",
            "Deferred ne supporte pas les shadows",
            "Forward ne supporte pas les textures"
        ],
        correctAnswer: 0,
        explanation: "Deferred rendering permet d’optimiser le calcul des lumières multiples, surtout pour scènes complexes."
    },
    {
        id: "shader-expert-14",
        category: "Shaders",
        level: "expert",
        question: "Comment gérer la compatibilité entre Shader Graph et Custom Render Pipeline personnalisée ?",
        options: [
            "Créer des nodes personnalisés et adapter les templates Shader Graph à la pipeline custom",
            "Utiliser uniquement Shader Graph standard",
            "Ignorer la pipeline custom",
            "Utiliser des shaders Legacy"
        ],
        correctAnswer: 0,
        explanation: "Adapter Shader Graph nécessite souvent d’étendre ou modifier ses templates pour la pipeline."
    },
    {
        id: "shader-expert-15",
        category: "Shaders",
        level: "expert",
        question: "Pourquoi limiter les instructions 'branch' (if/else) dans un shader ?",
        options: [
            "Car elles peuvent provoquer des divergences de threads GPU, dégradant la performance",
            "Pour simplifier le code source",
            "Pour améliorer la qualité visuelle",
            "Pour réduire la taille du build"
        ],
        correctAnswer: 0,
        explanation: "Branches provoquent souvent des warps de threads GPU, ce qui ralentit le calcul."
    },
    {
        id: "shader-expert-16",
        category: "Shaders",
        level: "expert",
        question: "Quel est le rôle du 'GrabPass' dans un shader Unity ?",
        options: [
            "Capturer l’image déjà rendue pour créer des effets de transparence et reflets",
            "Augmenter la luminosité globale",
            "Déclencher un événement",
            "Changer la physique du mesh"
        ],
        correctAnswer: 0,
        explanation: "GrabPass sert à prendre un screenshot temporaire du frame buffer pour des effets comme les reflets."
    },
    {
        id: "shader-expert-17",
        category: "Shaders",
        level: "expert",
        question: "Que signifie 'Alpha-to-Coverage' et quand l’utiliser ?",
        options: [
            "Technique pour améliorer le rendu des textures avec transparence partielle en utilisant le multisampling",
            "Ajouter plus d’alpha à une texture",
            "Augmenter la résolution des textures",
            "Modifier la lumière globale"
        ],
        correctAnswer: 0,
        explanation: "Alpha-to-Coverage utilise l’anti-aliasing multisample pour gérer les textures alpha partielle (ex: feuillages)."
    },
    {
        id: "shader-expert-18",
        category: "Shaders",
        level: "expert",
        question: "Comment réduire le 'overdraw' causé par des matériaux transparents dans Unity ?",
        options: [
            "Limiter le nombre d’objets transparents, optimiser la géométrie, utiliser le mode d’écriture de profondeur correct",
            "Augmenter la résolution",
            "Désactiver la lumière",
            "Supprimer les textures"
        ],
        correctAnswer: 0,
        explanation: "Overdraw cause des pertes de performance ; bien gérer la profondeur et limiter les transparents aide."
    },
    {
        id: "shader-expert-19",
        category: "Shaders",
        level: "expert",
        question: "Quelle fonction HLSL est utilisée pour interpoler linéairement entre deux valeurs dans un shader ?",
        options: [
            "lerp()",
            "dot()",
            "normalize()",
            "cross()"
        ],
        correctAnswer: 0,
        explanation: "lerp() fait une interpolation linéaire entre deux valeurs avec un facteur donné."
    },
    {
        id: "shader-expert-20",
        category: "Shaders",
        level: "expert",
        question: "Quel est l’intérêt de l’utilisation de 'Multi Compile' dans un shader Unity ?",
        options: [
            "Générer plusieurs variantes du shader selon les keywords pour différentes configurations matérielles ou graphiques",
            "Compresser la texture",
            "Augmenter la résolution",
            "Changer la couleur du mesh"
        ],
        correctAnswer: 0,
        explanation: "Multi Compile crée plusieurs variantes précompilées pour optimiser la compatibilité et performance."
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
