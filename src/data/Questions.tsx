export interface Question {
    id: number
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
}

export const questionsData: Record<string, Record<string, Question[]>> = {
        beginner: {
            unity: [
                {
                    id: 1,
                    question: "Quel composant est toujours présent sur un GameObject dans Unity ?",
                    options: ["Rigidbody", "Collider", "Transform", "Animator"],
                    correctAnswer: 2,
                    explanation: "Tous les GameObjects possèdent par défaut un composant Transform."
                },
                {
                    id: 2,
                    question: "Quel panneau montre la liste des objets de la scène ?",
                    options: ["Inspector", "Hierarchy", "Project", "Console"],
                    correctAnswer: 1,
                    explanation: "Le panneau Hierarchy affiche tous les objets de la scène."
                },
                {
                    id: 3,
                    question: "Dans quel panneau change-t-on la position d’un GameObject ?",
                    options: ["Inspector", "Scene", "Project", "Console"],
                    correctAnswer: 0,
                    explanation: "Les propriétés de position sont modifiables dans l’Inspector."
                },
                {
                    id: 4,
                    question: "Comment créer un nouveau GameObject vide ?",
                    options: ["File > New", "Edit > Add GameObject", "GameObject > Create Empty", "Assets > Create > GameObject"],
                    correctAnswer: 2,
                    explanation: "On utilise le menu GameObject > Create Empty."
                },
                {
                    id: 5,
                    question: "Quel raccourci clavier permet de dupliquer un objet dans la scène ?",
                    options: ["Ctrl + N", "Ctrl + D", "Ctrl + C", "Ctrl + Shift + D"],
                    correctAnswer: 1,
                    explanation: "Ctrl + D duplique l’objet sélectionné."
                },
                {
                    id: 6,
                    question: "Où trouve-t-on les assets (images, sons, scripts) du projet ?",
                    options: ["Scene", "Hierarchy", "Project", "Inspector"],
                    correctAnswer: 2,
                    explanation: "Tous les assets du projet sont accessibles dans le panneau Project."
                },
                {
                    id: 7,
                    question: "Quel composant permet de voir un objet dans la scène ?",
                    options: ["Rigidbody", "Collider", "MeshRenderer", "Animator"],
                    correctAnswer: 2,
                    explanation: "MeshRenderer permet de rendre l’objet visible."
                },
                {
                    id: 8,
                    question: "Quelle action permet d’ajouter un composant à un GameObject ?",
                    options: ["Clic droit > Add Component", "Inspector > Add Component", "Drag and Drop dans la scène", "Scene > New Component"],
                    correctAnswer: 1,
                    explanation: "On ajoute un composant via le bouton Add Component dans l’Inspector."
                },
                {
                    id: 9,
                    question: "Quel fichier contient la scène actuellement ouverte ?",
                    options: [".cs", ".unity", ".scene", ".asset"],
                    correctAnswer: 1,
                    explanation: "Les scènes sont stockées dans des fichiers .unity."
                },
                {
                    id: 10,
                    question: "Quel composant permet de gérer la physique d’un objet ?",
                    options: ["Transform", "BoxCollider", "Rigidbody", "MeshFilter"],
                    correctAnswer: 2,
                    explanation: "Le Rigidbody permet à l’objet d’être affecté par la physique."
                },
                {
                    id: 11,
                    question: "Quelle icône indique un GameObject désactivé dans la Hierarchy ?",
                    options: ["Icône grisée", "Icône rouge", "Icône verte", "Icône jaune"],
                    correctAnswer: 0,
                    explanation: "Les objets désactivés apparaissent en gris."
                },
                {
                    id: 12,
                    question: "Quel raccourci permet de passer en mode déplacement (Move Tool) ?",
                    options: ["Q", "W", "E", "R"],
                    correctAnswer: 1,
                    explanation: "Le raccourci W active l’outil de déplacement."
                },
                {
                    id: 13,
                    question: "Quel outil sert à faire tourner un objet dans la scène ?",
                    options: ["Move", "Rotate", "Scale", "Select"],
                    correctAnswer: 1,
                    explanation: "L’outil Rotate permet de faire tourner les objets."
                },
                {
                    id: 14,
                    question: "Comment s’appelle la fenêtre de prévisualisation du jeu ?",
                    options: ["Game", "Scene", "Project", "Inspector"],
                    correctAnswer: 0,
                    explanation: "La fenêtre Game permet de voir le rendu du jeu."
                },
                {
                    id: 15,
                    question: "Quel menu permet de sauvegarder la scène courante ?",
                    options: ["Edit", "File", "Assets", "GameObject"],
                    correctAnswer: 1,
                    explanation: "File > Save Scene permet de sauvegarder."
                },
                {
                    id: 16,
                    question: "Quel composant permet de détecter des collisions ?",
                    options: ["Collider", "Rigidbody", "Light", "Canvas"],
                    correctAnswer: 0,
                    explanation: "Les Colliders détectent les collisions physiques."
                },
                {
                    id: 17,
                    question: "Quel type de fichier est utilisé pour les scripts C# dans Unity ?",
                    options: [".cs", ".js", ".shader", ".asset"],
                    correctAnswer: 0,
                    explanation: "Les scripts C# sont des fichiers .cs."
                },
                {
                    id: 18,
                    question: "Quel bouton permet de lancer le jeu dans l’éditeur ?",
                    options: ["Play", "Pause", "Step", "Record"],
                    correctAnswer: 0,
                    explanation: "Le bouton Play lance l’exécution du jeu."
                },
                {
                    id: 19,
                    question: "Que signifie l’icône de cadenas dans l’Inspector ?",
                    options: ["Verrouiller l’Inspector sur l’objet sélectionné", "Protéger le GameObject contre la suppression", "Empêcher la duplication", "Désactiver le composant"],
                    correctAnswer: 0,
                    explanation: "Le cadenas permet de bloquer l’Inspector sur un objet."
                },
                {
                    id: 20,
                    question: "Quel composant permet d’afficher un texte à l’écran ?",
                    options: ["TextMeshPro", "Rigidbody", "MeshRenderer", "Animator"],
                    correctAnswer: 0,
                    explanation: "TextMeshPro sert à afficher du texte dans Unity."
                }
            ],
            csharp: [
                {
                    id: 1,
                    question: "Quel mot-clé permet de déclarer une variable dont le type est inféré ?",
                    options: ["define", "int", "var", "let"],
                    correctAnswer: 2,
                    explanation: "`var` permet au compilateur de déduire le type de la variable."
                },
                {
                    id: 2,
                    question: "Quel symbole termine une instruction en C# ?",
                    options: [".", ":", ";", "}"],
                    correctAnswer: 2,
                    explanation: "En C#, chaque instruction se termine par un point-virgule `;`."
                },
                {
                    id: 3,
                    question: "Quel type permet de stocker du texte en C# ?",
                    options: ["string", "int", "bool", "char"],
                    correctAnswer: 0,
                    explanation: "`string` permet de stocker une chaîne de caractères."
                },
                {
                    id: 4,
                    question: "Comment commence-t-on un commentaire sur une seule ligne ?",
                    options: ["//", "#", "/*", "--"],
                    correctAnswer: 0,
                    explanation: "`//` sert à faire un commentaire d'une seule ligne en C#."
                },
                {
                    id: 5,
                    question: "Quel mot-clé déclare une fonction en C# ?",
                    options: ["function", "def", "void", "func"],
                    correctAnswer: 2,
                    explanation: "Le mot-clé `void` déclare une fonction qui ne retourne rien."
                },
                {
                    id: 6,
                    question: "Quel type permet de stocker une valeur vraie ou fausse ?",
                    options: ["bool", "string", "int", "float"],
                    correctAnswer: 0,
                    explanation: "Le type `bool` contient `true` ou `false`."
                },
                {
                    id: 7,
                    question: "Quel opérateur sert à l’addition ?",
                    options: ["+", "-", "*", "/"],
                    correctAnswer: 0,
                    explanation: "L’opérateur `+` sert à additionner deux valeurs."
                },
                {
                    id: 8,
                    question: "Comment écrit-on une condition simple ?",
                    options: ["if (x > 0)", "if x > 0 then", "if x > 0:", "if x => 0"],
                    correctAnswer: 0,
                    explanation: "La syntaxe correcte est `if (x > 0)`."
                },
                {
                    id: 9,
                    question: "Quel type de boucle existe en C# ?",
                    options: ["repeat", "for", "loop", "iterate"],
                    correctAnswer: 1,
                    explanation: "La boucle `for` existe en C#."
                },
                {
                    id: 10,
                    question: "Quel mot-clé permet d’arrêter une boucle ?",
                    options: ["end", "exit", "stop", "break"],
                    correctAnswer: 3,
                    explanation: "`break` permet de sortir d’une boucle."
                },
                {
                    id: 11,
                    question: "Comment déclare-t-on une variable entière ?",
                    options: ["int x;", "integer x;", "var x;", "entier x;"],
                    correctAnswer: 0,
                    explanation: "On déclare une variable entière avec `int x;`."
                },
                {
                    id: 12,
                    question: "Comment affiche-t-on un message dans la console ?",
                    options: ["console.log()", "Debug.Log()", "print()", "Console.WriteLine()"],
                    correctAnswer: 3,
                    explanation: "`Console.WriteLine()` affiche un message dans la console en C#."
                },
                {
                    id: 13,
                    question: "Quel mot-clé permet de créer une classe ?",
                    options: ["class", "struct", "object", "module"],
                    correctAnswer: 0,
                    explanation: "On utilise le mot-clé `class` pour créer une classe."
                },
                {
                    id: 14,
                    question: "Quel type de données permet de stocker un nombre à virgule ?",
                    options: ["bool", "float", "string", "int"],
                    correctAnswer: 1,
                    explanation: "Le type `float` stocke des nombres à virgule flottante."
                },
                {
                    id: 15,
                    question: "Quel mot-clé permet de sortir d’une fonction ?",
                    options: ["exit", "leave", "break", "return"],
                    correctAnswer: 3,
                    explanation: "`return` quitte la fonction et retourne une valeur éventuelle."
                },
                {
                    id: 16,
                    question: "Quel mot-clé sert à hériter d’une autre classe ?",
                    options: ["inherit", "extends", "base", ":"],
                    correctAnswer: 3,
                    explanation: "En C#, l’héritage se fait avec le symbole `:`."
                },
                {
                    id: 17,
                    question: "Quel est le nom du point d’entrée d’un programme C# ?",
                    options: ["start()", "init()", "Main()", "Begin()"],
                    correctAnswer: 2,
                    explanation: "La fonction `Main()` est le point d’entrée d’une application C#."
                },
                {
                    id: 18,
                    question: "Quel mot-clé indique une valeur qui ne peut pas changer ?",
                    options: ["final", "static", "const", "readonly"],
                    correctAnswer: 2,
                    explanation: "`const` déclare une constante, sa valeur ne peut pas changer."
                },
                {
                    id: 19,
                    question: "Quel opérateur compare l’égalité de deux valeurs ?",
                    options: ["=", "==", "!=", "eq"],
                    correctAnswer: 1,
                    explanation: "On utilise `==` pour tester l’égalité en C#."
                },
                {
                    id: 20,
                    question: "Quel mot-clé permet de créer un tableau ?",
                    options: ["array", "list", "[]", "tableau"],
                    correctAnswer: 2,
                    explanation: "On utilise les crochets `[]` pour déclarer un tableau en C#."
                }
            ],
        mixed: [
            {
                id: 1,
                question: "Quel fichier contient le code C# attaché à un GameObject dans Unity ?",
                options: [".scene", ".unity", ".cs", ".prefab"],
                correctAnswer: 2,
                explanation: "Les scripts C# sont des fichiers `.cs`."
            },
            {
                id: 2,
                question: "Quel événement est appelé automatiquement au démarrage d’un script dans Unity ?",
                options: ["Awake()", "Init()", "Begin()", "StartUp()"],
                correctAnswer: 0,
                explanation: "`Awake()` est appelé en premier lors de l'activation du script."
            }
        ]
    },
    easy: {
        unity: [
            {
                id: 1,
                question: "Que permet de faire le composant 'BoxCollider' ?",
                options: ["Afficher un cube", "Créer une collision en forme de cube", "Appliquer une texture", "Créer un cube 3D"],
                correctAnswer: 1,
                explanation: "BoxCollider permet de détecter les collisions sous forme de boîte/cube invisible."
            },
            {
                id: 2,
                question: "Quel outil de la scène permet de faire tourner un objet ?",
                options: ["Move", "Scale", "Rotate", "Transform"],
                correctAnswer: 2,
                explanation: "L’outil Rotate (raccourci E) permet de faire pivoter les objets dans la scène."
            },
            {
                id: 3,
                question: "Quel composant permet de jouer un son ?",
                options: ["AudioSource", "MeshRenderer", "Canvas", "Rigidbody"],
                correctAnswer: 0,
                explanation: "AudioSource permet de jouer des sons dans Unity."
            },
            {
                id: 4,
                question: "Quelle méthode d’un script Unity s’exécute à chaque frame ?",
                options: ["Start()", "Awake()", "Update()", "Init()"],
                correctAnswer: 2,
                explanation: "Update() est appelée automatiquement à chaque frame."
            },
            {
                id: 5,
                question: "Quel raccourci permet d'afficher/cacher le gizmo d'un objet dans la Scene ?",
                options: ["G", "Alt+G", "Ctrl+G", "Aucun, il faut cliquer l’icône Gizmos"],
                correctAnswer: 3,
                explanation: "Il faut cliquer l’icône Gizmos en haut de la vue Scene."
            },
            {
                id: 6,
                question: "Comment attache-t-on un script à un GameObject ?",
                options: ["On le glisse sur le GameObject", "On double-clique le script", "On édite l’Inspector", "Impossible"],
                correctAnswer: 0,
                explanation: "Il suffit de faire un glisser-déposer du script sur le GameObject."
            },
            {
                id: 7,
                question: "Quel composant permet d’éclairer une scène ?",
                options: ["Light", "Camera", "Rigidbody", "Material"],
                correctAnswer: 0,
                explanation: "Le composant Light éclaire la scène."
            },
            {
                id: 8,
                question: "À quoi sert le bouton 'Reset' dans l’Inspector ?",
                options: ["Supprimer l’objet", "Remettre les valeurs par défaut", "Réinitialiser la scène", "Sauver le prefab"],
                correctAnswer: 1,
                explanation: "Reset remet le composant à ses valeurs par défaut."
            },
            {
                id: 9,
                question: "Quel format d’image est supporté pour les textures dans Unity ?",
                options: ["JPG", "PNG", "TGA", "Tous ces formats"],
                correctAnswer: 3,
                explanation: "Unity supporte JPG, PNG, TGA et d’autres formats standards."
            },
            {
                id: 10,
                question: "Comment créer un prefab à partir d’un objet de la scène ?",
                options: ["Clic droit > Create Prefab", "Glisser l’objet dans le dossier Project", "Clic gauche > Save As Prefab", "Créer un fichier .prefab à la main"],
                correctAnswer: 1,
                explanation: "On fait un glisser-déposer de l’objet vers le dossier Project."
            },
            {
                id: 11,
                question: "Que fait le bouton 'Apply' sur un prefab modifié dans la scène ?",
                options: ["Rien", "Met à jour le prefab d'origine", "Supprime le prefab", "Sauvegarde la scène"],
                correctAnswer: 1,
                explanation: "Apply met à jour le prefab d’origine avec les changements de l’instance."
            },
            {
                id: 12,
                question: "Quel composant permet d’afficher une UI en 2D ?",
                options: ["Canvas", "MeshRenderer", "Camera", "Transform"],
                correctAnswer: 0,
                explanation: "Canvas est le composant de base pour l’UI 2D dans Unity."
            },
            {
                id: 13,
                question: "Quelle méthode est appelée automatiquement au début de la vie d’un script ?",
                options: ["Init()", "Start()", "Run()", "Begin()"],
                correctAnswer: 1,
                explanation: "Start() est appelée au lancement du script, après Awake()."
            },
            {
                id: 14,
                question: "Quel outil permet d’aligner plusieurs objets dans la scène ?",
                options: ["Align Tool", "Grid Tool", "Rect Tool", "Aucun, il faut le faire à la main"],
                correctAnswer: 2,
                explanation: "Rect Tool permet d’aligner et de dimensionner des objets UI et 2D."
            },
            {
                id: 15,
                question: "Que se passe-t-il si on supprime le composant 'Camera' d’une scène ?",
                options: ["Rien", "La scène ne s’affiche plus dans Game", "On ne peut plus sauvegarder", "L’éditeur plante"],
                correctAnswer: 1,
                explanation: "Sans Camera, la vue Game n’affiche plus rien."
            },
            {
                id: 16,
                question: "Quel type d’objet utilise-t-on pour détecter un clic de souris en UI ?",
                options: ["Button", "Mesh", "Collider", "Camera"],
                correctAnswer: 0,
                explanation: "Le composant Button gère les clics de souris en UI Unity."
            },
            {
                id: 17,
                question: "Comment changer la couleur d’un objet en jeu (runtime) ?",
                options: ["Changer sa texture", "Modifier son matériel ou son renderer", "Bouger l’objet", "Changer son nom"],
                correctAnswer: 1,
                explanation: "Il faut modifier la propriété material ou renderer."
            },
            {
                id: 18,
                question: "Que permet le composant 'Animator' ?",
                options: ["Jouer des sons", "Gérer des animations", "Faire des collisions", "Détecter la lumière"],
                correctAnswer: 1,
                explanation: "Animator permet de gérer les animations par contrôleur."
            },
            {
                id: 19,
                question: "Comment afficher la console d’erreurs et de logs dans Unity ?",
                options: ["Window > Console", "Game > Console", "Inspector > Logs", "Edit > Console"],
                correctAnswer: 0,
                explanation: "La console s’affiche via Window > Console."
            },
            {
                id: 20,
                question: "Quel raccourci clavier lance le mode 'Scale Tool' (redimensionnement) ?",
                options: ["S", "Q", "E", "R"],
                correctAnswer: 3,
                explanation: "R active l’outil Scale Tool pour redimensionner un objet."
            }
        ],
        csharp: [
            {
                id: 1,
                question: "Quel mot-clé permet de définir une fonction qui retourne un entier ?",
                options: ["void", "function", "int", "return"],
                correctAnswer: 2,
                explanation: "Le mot-clé `int` indique que la fonction retourne un entier."
            },
            {
                id: 2,
                question: "Comment concaténer deux chaînes de caractères en C# ?",
                options: ["str1 + str2", "concat(str1, str2)", "str1.concat(str2)", "join(str1, str2)"],
                correctAnswer: 0,
                explanation: "On concatène deux chaînes avec l’opérateur +."
            },
            {
                id: 3,
                question: "Quel type permet de stocker une lettre unique ?",
                options: ["string", "char", "int", "bool"],
                correctAnswer: 1,
                explanation: "`char` stocke un seul caractère."
            },
            {
                id: 4,
                question: "Quelle syntaxe est correcte pour une boucle while ?",
                options: ["while x < 10", "while (x < 10)", "while: x < 10", "while x < 10 then"],
                correctAnswer: 1,
                explanation: "La bonne syntaxe est `while (x < 10)`."
            },
            {
                id: 5,
                question: "Comment déclarer un tableau de 5 entiers ?",
                options: ["int[5] arr;", "int[] arr = new int[5];", "array arr[5];", "int arr = [5];"],
                correctAnswer: 1,
                explanation: "int[] arr = new int[5]; déclare un tableau de 5 entiers."
            },
            {
                id: 6,
                question: "Quel opérateur permet d’incrémenter une variable de 1 ?",
                options: ["++", "+=", "+", "--"],
                correctAnswer: 0,
                explanation: "L’opérateur `++` incrémente la variable de 1."
            },
            {
                id: 7,
                question: "Quelle est la portée d’une variable déclarée dans une fonction ?",
                options: ["Globale", "Locale à la fonction", "Publique", "Statisque"],
                correctAnswer: 1,
                explanation: "Une variable déclarée dans une fonction est locale à cette fonction."
            },
            {
                id: 8,
                question: "Quel mot-clé permet de définir une variable qui ne change jamais ?",
                options: ["final", "static", "const", "var"],
                correctAnswer: 2,
                explanation: "Le mot-clé `const` crée une constante."
            },
            {
                id: 9,
                question: "Que retourne une fonction sans instruction return et déclarée void ?",
                options: ["0", "null", "rien", "false"],
                correctAnswer: 2,
                explanation: "Une fonction void ne retourne rien."
            },
            {
                id: 10,
                question: "Quel mot-clé permet de définir une méthode accessible sans instance ?",
                options: ["instance", "static", "global", "void"],
                correctAnswer: 1,
                explanation: "Le mot-clé `static` permet d’appeler la méthode sans créer d’instance."
            },
            {
                id: 11,
                question: "Quel opérateur est utilisé pour le OU logique ?",
                options: ["&&", "||", "&", "|"],
                correctAnswer: 1,
                explanation: "`||` est l’opérateur OU logique en C#."
            },
            {
                id: 12,
                question: "Comment commenter plusieurs lignes en C# ?",
                options: ["// commentaire", "/* commentaire */", "# commentaire #", "-- commentaire --"],
                correctAnswer: 1,
                explanation: "On utilise /* */ pour commenter plusieurs lignes."
            },
            {
                id: 13,
                question: "Quelle syntaxe permet d’itérer sur tous les éléments d’un tableau ?",
                options: ["for item in array", "foreach (var item in array)", "for (item : array)", "loop array as item"],
                correctAnswer: 1,
                explanation: "On utilise foreach (var item in array) en C#."
            },
            {
                id: 14,
                question: "Comment appelle-t-on une fonction depuis une autre fonction ?",
                options: ["call function();", "invoke function();", "function();", "exec function();"],
                correctAnswer: 2,
                explanation: "On appelle une fonction simplement par son nom suivi de ()."
            },
            {
                id: 15,
                question: "Quel opérateur est utilisé pour le ET logique ?",
                options: ["&&", "||", "&", "=="],
                correctAnswer: 0,
                explanation: "`&&` est l’opérateur ET logique."
            },
            {
                id: 16,
                question: "Que fait l’opérateur == en C# ?",
                options: ["Affecte une valeur", "Compare l’égalité de deux valeurs", "Inverse un booléen", "Fait une addition"],
                correctAnswer: 1,
                explanation: "L’opérateur == compare l’égalité de deux valeurs."
            },
            {
                id: 17,
                question: "Quelle est la valeur par défaut d’un int non initialisé dans une classe ?",
                options: ["0", "null", "1", "Indéfini"],
                correctAnswer: 0,
                explanation: "Les types valeur comme int sont à 0 par défaut dans une classe."
            },
            {
                id: 18,
                question: "Quel mot-clé permet d’empêcher la modification d’une méthode dans une classe dérivée ?",
                options: ["sealed", "override", "final", "static"],
                correctAnswer: 0,
                explanation: "Le mot-clé sealed empêche la redéfinition dans une classe dérivée."
            },
            {
                id: 19,
                question: "Comment écrire une condition qui s’exécute si x est égal à 10 ?",
                options: ["if (x = 10)", "if x == 10 then", "if (x == 10)", "if (x equal 10)"],
                correctAnswer: 2,
                explanation: "La syntaxe correcte est if (x == 10)."
            },
            {
                id: 20,
                question: "Quel type permet de stocker plusieurs valeurs de types différents ?",
                options: ["array", "list", "struct", "class"],
                correctAnswer: 3,
                explanation: "Une classe permet de stocker des propriétés de types différents."
            }
        ],
        mixed: [
            {
                id: 1,
                question: "Dans Unity, comment lit-on l'entrée clavier pour la touche E ?",
                options: ["Input.EKey()", "Input.GetKey('E')", "Input.GetKey(KeyCode.E)", "Input.Check('E')"],
                correctAnswer: 2,
                explanation: "La bonne méthode est `Input.GetKey(KeyCode.E)`."
            },
            {
                id: 2,
                question: "Quel mot-clé est utilisé pour accéder à un autre composant dans Unity ?",
                options: ["Find()", "Locate()", "GetComponent<>", "use"],
                correctAnswer: 2,
                explanation: "On utilise `GetComponent<Type>()` pour accéder à un autre composant."
            }
        ]
    },
    medium: {
        unity: [
            {
                id: 1,
                question: "Que permet la fonction `transform.Translate(Vector3.up * 2)` ?",
                options: [
                    "Déplacer l’objet vers le haut de 2 unités",
                    "Changer la taille de l’objet",
                    "Tourner l’objet",
                    "Déplacer l’objet vers la droite de 2 unités"
                ],
                correctAnswer: 0,
                explanation: "Translate déplace l’objet ; ici vers le haut de 2 unités."
            },
            {
                id: 2,
                question: "Quel composant permet d’appliquer une texture à un objet 3D ?",
                options: ["MeshRenderer", "Collider", "Transform", "Camera"],
                correctAnswer: 0,
                explanation: "MeshRenderer permet d’afficher une texture/material sur un mesh."
            },
            {
                id: 3,
                question: "Quelle différence entre un prefab et un GameObject dans la scène ?",
                options: [
                    "Aucune différence",
                    "Le prefab est un modèle réutilisable, le GameObject une instance",
                    "Le GameObject est un asset, le prefab est une instance",
                    "Le prefab est uniquement pour les scripts"
                ],
                correctAnswer: 1,
                explanation: "Le prefab est un modèle ; le GameObject dans la scène est une instance."
            },
            {
                id: 4,
                question: "Que fait `Destroy(gameObject)` dans un script ?",
                options: [
                    "Supprime le script seulement",
                    "Supprime le GameObject et tous ses composants",
                    "Réinitialise le GameObject",
                    "Met l’objet en pause"
                ],
                correctAnswer: 1,
                explanation: "Destroy supprime le GameObject complet à la fin de la frame."
            },
            {
                id: 5,
                question: "Comment déclencher une fonction quand un objet entre dans un collider en mode trigger ?",
                options: [
                    "OnTriggerEnter",
                    "OnCollisionEnter",
                    "Start",
                    "Update"
                ],
                correctAnswer: 0,
                explanation: "OnTriggerEnter est appelée lors d’une entrée dans un trigger."
            },
            {
                id: 6,
                question: "Quel composant permet d’afficher une image UI ?",
                options: ["Image", "RawImage", "SpriteRenderer", "Text"],
                correctAnswer: 0,
                explanation: "Le composant Image affiche une image dans l’UI Unity."
            },
            {
                id: 7,
                question: "Quel événement s’appelle quand on clique sur un bouton UI ?",
                options: [
                    "OnClick",
                    "OnButtonClick",
                    "OnMouseDown",
                    "OnSelect"
                ],
                correctAnswer: 0,
                explanation: "L’événement OnClick est appelé sur les Button UI."
            },
            {
                id: 8,
                question: "Quelle méthode de scripting permet de charger une autre scène ?",
                options: [
                    "SceneManager.LoadScene",
                    "Application.LoadScene",
                    "GameObject.LoadScene",
                    "Scene.Load"
                ],
                correctAnswer: 0,
                explanation: "SceneManager.LoadScene est la méthode officielle Unity."
            },
            {
                id: 9,
                question: "Que permet le composant Rigidbody sur un GameObject ?",
                options: [
                    "Gérer la physique (gravité, collisions dynamiques)",
                    "Afficher une texture",
                    "Afficher du texte",
                    "Ajouter une lumière"
                ],
                correctAnswer: 0,
                explanation: "Rigidbody permet à l’objet d’être affecté par la physique."
            },
            {
                id: 10,
                question: "Quelle méthode permet de détecter un clic de souris sur un objet 3D ?",
                options: [
                    "OnMouseDown",
                    "OnPointerClick",
                    "OnClick",
                    "OnTap"
                ],
                correctAnswer: 0,
                explanation: "OnMouseDown détecte le clic de souris sur un collider en 3D."
            },
            {
                id: 11,
                question: "Que fait la méthode `Instantiate()` ?",
                options: [
                    "Crée une nouvelle instance d’un prefab ou GameObject",
                    "Déplace un objet",
                    "Supprime un objet",
                    "Change le nom d’un objet"
                ],
                correctAnswer: 0,
                explanation: "Instantiate sert à cloner un GameObject ou prefab."
            },
            {
                id: 12,
                question: "Comment désactive-t-on un GameObject depuis un script ?",
                options: [
                    "gameObject.SetActive(false);",
                    "gameObject.enabled = false;",
                    "gameObject.Disable();",
                    "gameObject.Destroy();"
                ],
                correctAnswer: 0,
                explanation: "SetActive(false) désactive un GameObject."
            },
            {
                id: 13,
                question: "Quelle méthode est utilisée pour déplacer un Rigidbody en physique ?",
                options: [
                    "transform.position",
                    "Rigidbody.MovePosition",
                    "gameObject.Move()",
                    "SetPosition"
                ],
                correctAnswer: 1,
                explanation: "Rigidbody.MovePosition est adaptée pour la physique."
            },
            {
                id: 14,
                question: "Que fait le Canvas Scaler dans l’UI Unity ?",
                options: [
                    "Adapte l’UI à la résolution de l’écran",
                    "Change la couleur de l’UI",
                    "Gère l’animation de l’UI",
                    "Ajoute un effet 3D à l’UI"
                ],
                correctAnswer: 0,
                explanation: "Canvas Scaler adapte l’interface à la résolution/ratio de l’écran."
            },
            {
                id: 15,
                question: "Quelle propriété permet de modifier la couleur d’un SpriteRenderer ?",
                options: [
                    "sprite.color",
                    "renderer.color",
                    "material.color",
                    "color"
                ],
                correctAnswer: 1,
                explanation: "renderer.color modifie la couleur du SpriteRenderer."
            },
            {
                id: 16,
                question: "Quel type d’objet Unity permet de stocker des données partagées (ex : score global) ?",
                options: [
                    "ScriptableObject",
                    "Prefab",
                    "Texture",
                    "Component"
                ],
                correctAnswer: 0,
                explanation: "ScriptableObject sert à stocker des données globales et réutilisables."
            },
            {
                id: 17,
                question: "À quoi sert `DontDestroyOnLoad(gameObject)` ?",
                options: [
                    "Conserve l’objet entre les changements de scène",
                    "Détruit l’objet à la fin du niveau",
                    "Désactive l’objet",
                    "Réinitialise l’objet"
                ],
                correctAnswer: 0,
                explanation: "DontDestroyOnLoad préserve le GameObject entre les scènes."
            },
            {
                id: 18,
                question: "Quel composant utilise-t-on pour jouer une animation complexe avec transitions ?",
                options: [
                    "Animator",
                    "Animation",
                    "Timeline",
                    "Playable"
                ],
                correctAnswer: 0,
                explanation: "Animator (et ses contrôleurs) permet les transitions d’animations avancées."
            },
            {
                id: 19,
                question: "Que permet la propriété `isTrigger` d’un Collider ?",
                options: [
                    "Détecter les entrées sans collision physique",
                    "Rendre l’objet invisible",
                    "Jouer un son automatiquement",
                    "Créer une lumière"
                ],
                correctAnswer: 0,
                explanation: "isTrigger permet au collider de ne pas bloquer, mais détecte le passage."
            },
            {
                id: 20,
                question: "Comment créer une référence à un autre composant dans un script C# Unity ?",
                options: [
                    "GetComponent<Type>()",
                    "FindComponent<Type>()",
                    "Component.Get<Type>()",
                    "component(Type)"
                ],
                correctAnswer: 0,
                explanation: "GetComponent<Type>() permet d’accéder à un autre composant du même GameObject."
            }
        ],
        csharp: [
            {
                id: 1,
                question: "Quelle est la portée par défaut d’un champ dans une classe si aucun mot-clé d’accès n’est précisé ?",
                options: ["public", "private", "protected", "internal"],
                correctAnswer: 1,
                explanation: "Les champs sont `private` par défaut dans une classe C#."
            },
            {
                id: 2,
                question: "Quel mot-clé permet de définir une classe de base abstraite ?",
                options: ["base", "virtual", "abstract", "override"],
                correctAnswer: 2,
                explanation: "`abstract` permet de définir une classe ou une méthode abstraite."
            },
            {
                id: 3,
                question: "Que permet le mot-clé 'override' ?",
                options: [
                    "Cacher une méthode",
                    "Redéfinir une méthode virtuelle d’une classe parente",
                    "Créer une nouvelle classe",
                    "Supprimer une méthode"
                ],
                correctAnswer: 1,
                explanation: "`override` sert à redéfinir une méthode virtuelle héritée."
            },
            {
                id: 4,
                question: "Quel type de collection permet d’associer une clé à une valeur ?",
                options: ["List", "Array", "Dictionary", "Stack"],
                correctAnswer: 2,
                explanation: "Dictionary<K,V> stocke des paires clé/valeur."
            },
            {
                id: 5,
                question: "Que fait la méthode `ToString()` d’un objet ?",
                options: [
                    "Retourne une représentation textuelle de l’objet",
                    "Convertit l’objet en nombre",
                    "Efface l’objet",
                    "Crée une nouvelle instance"
                ],
                correctAnswer: 0,
                explanation: "ToString() retourne une version texte (string) de l’objet."
            },
            {
                id: 6,
                question: "Quel mot-clé permet de passer un argument par référence à une méthode ?",
                options: ["ref", "out", "byref", "reference"],
                correctAnswer: 0,
                explanation: "`ref` permet de passer un argument par référence."
            },
            {
                id: 7,
                question: "Quelle boucle s’exécute toujours au moins une fois, même si la condition est fausse dès le début ?",
                options: ["while", "for", "foreach", "do...while"],
                correctAnswer: 3,
                explanation: "do...while s’exécute au moins une fois avant de tester la condition."
            },
            {
                id: 8,
                question: "Quelle est la méthode d’entrée principale dans une application console C# ?",
                options: ["Main()", "Start()", "Run()", "Entry()"],
                correctAnswer: 0,
                explanation: "Main() est le point d’entrée du programme."
            },
            {
                id: 9,
                question: "Que fait l’opérateur '??' (null-coalescing) ?",
                options: [
                    "Vérifie si une valeur est nulle",
                    "Retourne la première valeur non nulle",
                    "Inverse la valeur",
                    "Compare deux valeurs"
                ],
                correctAnswer: 1,
                explanation: "`a ?? b` retourne `a` si non null, sinon `b`."
            },
            {
                id: 10,
                question: "Que permet le mot-clé 'this' dans une classe ?",
                options: [
                    "Accéder au membre courant de l’objet",
                    "Créer une nouvelle instance",
                    "Appeler une méthode statique",
                    "Définir un paramètre optionnel"
                ],
                correctAnswer: 0,
                explanation: "`this` référence l’instance courante."
            },
            {
                id: 11,
                question: "Que retourne une méthode sans valeur de retour (void) si on tente un return avec une valeur ?",
                options: [
                    "0",
                    "Une erreur de compilation",
                    "null",
                    "true"
                ],
                correctAnswer: 1,
                explanation: "On obtient une erreur de compilation : void ne retourne rien."
            },
            {
                id: 12,
                question: "Quelle syntaxe permet d’utiliser un switch sur une variable entière x ?",
                options: [
                    "switch (x)",
                    "switch x",
                    "case x",
                    "switch { x }"
                ],
                correctAnswer: 0,
                explanation: "On écrit `switch (x)` en C#."
            },
            {
                id: 13,
                question: "Quelle collection garantit l’unicité de ses éléments ?",
                options: ["List", "Array", "HashSet", "Queue"],
                correctAnswer: 2,
                explanation: "HashSet ne stocke aucun doublon."
            },
            {
                id: 14,
                question: "Quel mot-clé permet de sortir prématurément d’une boucle ?",
                options: ["continue", "break", "exit", "return"],
                correctAnswer: 1,
                explanation: "break arrête l’exécution d’une boucle."
            },
            {
                id: 15,
                question: "Quel est le mot-clé pour une classe dont on ne peut pas créer d’instance ?",
                options: ["private", "abstract", "virtual", "readonly"],
                correctAnswer: 1,
                explanation: "abstract empêche l’instanciation directe de la classe."
            },
            {
                id: 16,
                question: "Comment déclarer une propriété automatique en C# ?",
                options: [
                    "public int Age;",
                    "public int Age { get; set; }",
                    "public int Age() {}",
                    "public property Age;"
                ],
                correctAnswer: 1,
                explanation: "public int Age { get; set; } déclare une propriété automatique."
            },
            {
                id: 17,
                question: "Quel type d’exception est levé si on accède à un tableau hors limites ?",
                options: [
                    "NullReferenceException",
                    "IndexOutOfRangeException",
                    "ArgumentException",
                    "FormatException"
                ],
                correctAnswer: 1,
                explanation: "IndexOutOfRangeException est levée si l’index dépasse la taille du tableau."
            },
            {
                id: 18,
                question: "Que permet le mot-clé 'using' placé au début d’un fichier ?",
                options: [
                    "Inclure un espace de noms (namespace)",
                    "Déclarer une variable",
                    "Créer une boucle",
                    "Définir une classe"
                ],
                correctAnswer: 0,
                explanation: "using sert à inclure des namespaces."
            },
            {
                id: 19,
                question: "Quelle méthode permet de convertir une chaîne en nombre entier ?",
                options: [
                    "int.Parse()",
                    "Convert.ToString()",
                    "ToCharArray()",
                    "string.ToInt()"
                ],
                correctAnswer: 0,
                explanation: "int.Parse() convertit une string en int."
            },
            {
                id: 20,
                question: "Quel mot-clé permet d'empêcher une classe d’être héritée ?",
                options: ["sealed", "private", "static", "override"],
                correctAnswer: 0,
                explanation: "sealed bloque l’héritage d’une classe."
            }
        ],
        mixed: [
            {
                id: 1,
                question: "Quelle fonction est appelée chaque frame dans Unity ?",
                options: ["Awake()", "Start()", "Loop()", "Update()"],
                correctAnswer: 3,
                explanation: "Update() est appelée automatiquement chaque frame."
            },
            {
                id: 2,
                question: "Quelle syntaxe est correcte pour afficher un message dans la console Unity ?",
                options: ["console.log('Hello')", "Debug.Log('Hello')", "print('Hello')", "Console.WriteLine('Hello')"],
                correctAnswer: 1,
                explanation: "La bonne méthode est `Debug.Log()`."
            }
        ]
    },
    hard: {
        unity: [
            {
                id: 1,
                question: "Quelle est la différence principale entre Update() et FixedUpdate() ?",
                options: [
                    "Aucune différence",
                    "Update() est appelée chaque frame, FixedUpdate() à intervalle fixe pour la physique",
                    "FixedUpdate() est plus rapide qu’Update()",
                    "Update() est appelée uniquement si l’objet est actif"
                ],
                correctAnswer: 1,
                explanation: "Update() = chaque frame pour la logique de jeu ; FixedUpdate() = physique, intervalles réguliers."
            },
            {
                id: 2,
                question: "Pourquoi faut-il éviter d’utiliser GetComponent dans Update() ?",
                options: [
                    "Ça ne compile pas",
                    "C’est très coûteux en performance si appelé chaque frame",
                    "GetComponent supprime le composant",
                    "GetComponent ne marche que sur les prefabs"
                ],
                correctAnswer: 1,
                explanation: "GetComponent est lent si appelé à chaque frame : il vaut mieux stocker la référence."
            },
            {
                id: 3,
                question: "Comment détecter une collision entre deux objets avec Rigidbody en 2D ?",
                options: [
                    "OnCollisionEnter2D",
                    "OnTriggerEnter",
                    "OnPhysics2D",
                    "OnCollide2D"
                ],
                correctAnswer: 0,
                explanation: "OnCollisionEnter2D est utilisé pour les collisions physiques 2D."
            },
            {
                id: 4,
                question: "Quel système permet de faire une interface utilisateur responsive, multi-résolution ?",
                options: [
                    "Canvas Scaler",
                    "RectTransform",
                    "Grid Layout",
                    "EventSystem"
                ],
                correctAnswer: 0,
                explanation: "Canvas Scaler adapte la taille de l’UI à la résolution."
            },
            {
                id: 5,
                question: "Que permet le mode 'Prefab Variant' dans Unity ?",
                options: [
                    "Créer une copie indépendante d’un prefab",
                    "Créer une version dérivée d’un prefab qui hérite de ses modifications",
                    "Remplacer tous les prefabs en scène",
                    "Créer un prefab non modifiable"
                ],
                correctAnswer: 1,
                explanation: "Un Prefab Variant hérite du prefab de base mais peut être modifié localement."
            },
            {
                id: 6,
                question: "Comment éviter le problème du 'ghosting' lors de l’utilisation de la physique et du déplacement par Transform ?",
                options: [
                    "Déplacer toujours avec Rigidbody",
                    "Appeler Update plus souvent",
                    "Déplacer uniquement avec Transform",
                    "Mettre l’objet en kinematic"
                ],
                correctAnswer: 0,
                explanation: "Utiliser Rigidbody.MovePosition/MoveRotation pour les objets physiques évite les problèmes de synchro."
            },
            {
                id: 7,
                question: "Quel événement est appelé quand une scène est complètement chargée ?",
                options: [
                    "OnSceneLoaded",
                    "SceneManager.sceneLoaded",
                    "OnLoadComplete",
                    "OnSceneReady"
                ],
                correctAnswer: 1,
                explanation: "SceneManager.sceneLoaded est l’événement officiel Unity (depuis UnityEngine.SceneManagement)."
            },
            {
                id: 8,
                question: "Quel est l’intérêt de marquer une méthode avec [SerializeField] ?",
                options: [
                    "Permet d’afficher une variable privée dans l’Inspector",
                    "Oblige le champ à être static",
                    "Désactive la sauvegarde dans la scène",
                    "Convertit le champ en string"
                ],
                correctAnswer: 0,
                explanation: "[SerializeField] expose la variable privée à l’éditeur Unity."
            },
            {
                id: 9,
                question: "Que permet l’utilisation du LayerMask dans un Raycast ?",
                options: [
                    "Filtrer les objets touchés selon leur layer",
                    "Changer la couleur du Raycast",
                    "Améliorer les performances du Raycast",
                    "Changer la longueur du rayon"
                ],
                correctAnswer: 0,
                explanation: "LayerMask permet de cibler les layers précis à tester lors d’un Raycast."
            },
            {
                id: 10,
                question: "Comment instancier un prefab en runtime dans une scène ?",
                options: [
                    "Instantiate(prefab)",
                    "prefab.Create()",
                    "SceneManager.Instantiate()",
                    "AddComponent(prefab)"
                ],
                correctAnswer: 0,
                explanation: "On utilise Instantiate(prefab) pour créer une instance à l’exécution."
            },
            {
                id: 11,
                question: "Quel est le risque principal à utiliser beaucoup de méthodes Update() vides dans de nombreux scripts ?",
                options: [
                    "Provoquer des fuites mémoire",
                    "Impacter les performances globales de la scène",
                    "Aucun risque",
                    "Les scripts ne seront pas compilés"
                ],
                correctAnswer: 1,
                explanation: "Une Update vide appelée sur beaucoup d’objets consomme du CPU inutilement."
            },
            {
                id: 12,
                question: "Comment récupérer tous les objets d’un certain type dans la scène ?",
                options: [
                    "FindObjectsOfType<T>()",
                    "GameObject.FindAll()",
                    "GetComponents<T>()",
                    "Resources.FindAll<T>()"
                ],
                correctAnswer: 0,
                explanation: "FindObjectsOfType<T>() renvoie tous les objets du type spécifié dans la scène."
            },
            {
                id: 13,
                question: "Quel est le but du système 'Addressables' ?",
                options: [
                    "Gérer dynamiquement le chargement et la mémoire des assets",
                    "Sauvegarder les paramètres utilisateur",
                    "Créer des shaders optimisés",
                    "Gérer l’UI responsive"
                ],
                correctAnswer: 0,
                explanation: "Addressables permet de charger/décharger dynamiquement les assets et améliorer la gestion mémoire."
            },
            {
                id: 14,
                question: "À quoi sert le composant 'EventSystem' dans une scène Unity UI ?",
                options: [
                    "Gérer les interactions utilisateur et la navigation dans l’UI",
                    "Optimiser les performances de la scène",
                    "Afficher les logs",
                    "Changer la couleur des boutons"
                ],
                correctAnswer: 0,
                explanation: "EventSystem gère tous les événements d’input et navigation UI."
            },
            {
                id: 15,
                question: "Comment limiter l’appel d’une méthode toutes les X secondes dans Update() ?",
                options: [
                    "Utiliser Time.deltaTime et un timer",
                    "Utiliser Application.Wait()",
                    "Mettre la méthode dans FixedUpdate",
                    "Déclarer la méthode comme static"
                ],
                correctAnswer: 0,
                explanation: "On gère un timer avec Time.deltaTime pour appeler à intervalle régulier."
            },
            {
                id: 16,
                question: "Quel composant permet de lire une vidéo dans Unity (natif) ?",
                options: [
                    "VideoPlayer",
                    "MovieTexture",
                    "Animator",
                    "MediaComponent"
                ],
                correctAnswer: 0,
                explanation: "VideoPlayer est le composant natif (Unity 2017+)."
            },
            {
                id: 17,
                question: "Comment détecter la sortie d’un objet d’un trigger collider ?",
                options: [
                    "OnTriggerExit",
                    "OnColliderExit",
                    "OnTriggerLeave",
                    "OnExit"
                ],
                correctAnswer: 0,
                explanation: "OnTriggerExit est appelée à la sortie du trigger."
            },
            {
                id: 18,
                question: "Que se passe-t-il si deux objets partagent le même script avec une variable statique ?",
                options: [
                    "Chaque objet a sa propre copie de la variable",
                    "La variable est partagée entre tous les objets",
                    "La variable n’est pas accessible",
                    "Unity l’interdit à la compilation"
                ],
                correctAnswer: 1,
                explanation: "Une variable statique est partagée entre toutes les instances du script."
            },
            {
                id: 19,
                question: "Comment optimiser la mémoire lors de la gestion d’un grand nombre de GameObjects similaires ?",
                options: [
                    "Utiliser l’object pooling",
                    "Créer un script unique pour tous",
                    "Augmenter la RAM du PC",
                    "Utiliser plus de prefabs"
                ],
                correctAnswer: 0,
                explanation: "L’object pooling évite les allocations/destructions massives en runtime."
            },
            {
                id: 20,
                question: "Comment réagir à la désactivation d’un GameObject depuis un script ?",
                options: [
                    "OnDisable()",
                    "OnDeactivate()",
                    "OnStop()",
                    "OnInactive()"
                ],
                correctAnswer: 0,
                explanation: "OnDisable() est appelée lors de la désactivation du GameObject ou du script."
            }
        ],
        csharp: [
            {
                id: 1,
                question: "Quelle est la différence entre 'ref' et 'out' lors du passage de paramètres ?",
                options: [
                    "Aucune différence",
                    "'ref' exige une variable initialisée, 'out' non",
                    "'out' exige une variable initialisée, 'ref' non",
                    "'ref' ne fonctionne qu'avec des types valeur"
                ],
                correctAnswer: 1,
                explanation: "'ref' demande que la variable soit initialisée avant l’appel, 'out' non."
            },
            {
                id: 2,
                question: "À quoi sert l’opérateur '??=' en C# 8+ ?",
                options: [
                    "Compare deux valeurs nulles",
                    "Assigne une valeur si la variable est nulle",
                    "Crée une variable nulle",
                    "Teste l’égalité de deux objets"
                ],
                correctAnswer: 1,
                explanation: "'x ??= y' assigne y à x si x est null."
            },
            {
                id: 3,
                question: "Quel type permet de définir une séquence dont la taille peut varier dynamiquement ?",
                options: ["Array", "List<T>", "Tuple", "Span<T>"],
                correctAnswer: 1,
                explanation: "List<T> est une collection générique à taille dynamique."
            },
            {
                id: 4,
                question: "Quel mot-clé permet de déclarer un indexeur dans une classe ?",
                options: ["index", "this", "property", "item"],
                correctAnswer: 1,
                explanation: "L’indexeur s’écrit via 'this' dans une classe."
            },
            {
                id: 5,
                question: "Quelle interface permet de rendre un objet énumérable avec foreach ?",
                options: ["IEnumerator", "IEnumerable", "IClonable", "IDisposable"],
                correctAnswer: 1,
                explanation: "IEnumerable permet d’itérer avec foreach."
            },
            {
                id: 6,
                question: "Comment empêcher une classe d’être héritée ?",
                options: ["sealed", "abstract", "final", "private"],
                correctAnswer: 0,
                explanation: "Le mot-clé sealed empêche l’héritage."
            },
            {
                id: 7,
                question: "Qu’est-ce qu’un delegate en C# ?",
                options: [
                    "Une méthode anonyme",
                    "Un pointeur vers une méthode ou un groupe de méthodes",
                    "Une classe abstraite",
                    "Une interface d’événement"
                ],
                correctAnswer: 1,
                explanation: "Un delegate référence une ou plusieurs méthodes."
            },
            {
                id: 8,
                question: "Quel est l'intérêt du mot-clé 'using' dans une instruction (et non en début de fichier) ?",
                options: [
                    "Définir un espace de noms",
                    "Inclure une classe",
                    "Gérer automatiquement la libération de ressources",
                    "Créer un alias"
                ],
                correctAnswer: 2,
                explanation: "using (var x = ...) {...} appelle Dispose() automatiquement en fin de bloc."
            },
            {
                id: 9,
                question: "Qu’est-ce que le 'boxing' en C# ?",
                options: [
                    "Conversion d’un type valeur en type référence",
                    "Conversion d’un type référence en type valeur",
                    "Encapsulation d’une classe",
                    "Ajout d’un objet dans une collection générique"
                ],
                correctAnswer: 0,
                explanation: "Boxing = stocker un type valeur dans un objet type référence."
            },
            {
                id: 10,
                question: "Quelle exception est levée lors d’un cast impossible entre deux types non compatibles ?",
                options: [
                    "InvalidCastException",
                    "ArgumentException",
                    "TypeAccessException",
                    "FormatException"
                ],
                correctAnswer: 0,
                explanation: "InvalidCastException est levée lors d’un cast impossible."
            },
            {
                id: 11,
                question: "Comment rendre un champ visible dans l’inspecteur Unity mais non modifiable dans le code (hors constructeur) ?",
                options: [
                    "[SerializeField] private readonly",
                    "[ReadOnly] private",
                    "[NonEditable]",
                    "const"
                ],
                correctAnswer: 0,
                explanation: "[SerializeField] + readonly rend la variable visible dans l’inspecteur sans pouvoir la modifier ailleurs que dans le constructeur ou la déclaration."
            },
            {
                id: 12,
                question: "Quel mot-clé permet d’implémenter explicitement une interface sans exposer la méthode publiquement ?",
                options: [
                    "explicit",
                    "private",
                    "virtual",
                    "Aucun mot-clé, juste la syntaxe de l’interface"
                ],
                correctAnswer: 3,
                explanation: "On écrit 'Type.InterfaceMethod()' pour une implémentation explicite."
            },
            {
                id: 13,
                question: "Quelle méthode permet d’essayer de convertir une chaîne en int sans lever d’exception ?",
                options: [
                    "int.TryParse()",
                    "int.Parse()",
                    "Convert.ToInt()",
                    "string.ToIntOrNull()"
                ],
                correctAnswer: 0,
                explanation: "int.TryParse() renvoie true ou false sans exception."
            },
            {
                id: 14,
                question: "Qu’est-ce que le pattern singleton et son inconvénient principal ?",
                options: [
                    "Créer une seule instance accessible globalement ; difficile à tester, couplage fort",
                    "Créer plusieurs instances locales ; consommation mémoire",
                    "Optimiser la sérialisation ; complexité du code",
                    "Aucun rapport avec C#"
                ],
                correctAnswer: 0,
                explanation: "Le singleton garantit une seule instance, mais peut nuire à la testabilité et créer un couplage fort."
            },
            {
                id: 15,
                question: "Que signifie le mot-clé 'yield return' dans une méthode IEnumerator ?",
                options: [
                    "Retourner une valeur asynchrone",
                    "Créer un événement",
                    "Retourner une valeur séquentiellement à chaque appel",
                    "Bloquer l’exécution"
                ],
                correctAnswer: 2,
                explanation: "yield return permet de retourner une séquence de valeurs dans une coroutine/enumerable."
            },
            {
                id: 16,
                question: "Qu’est-ce qu’une extension method (méthode d’extension) en C# ?",
                options: [
                    "Une méthode statique qui agit comme si elle appartenait à un type existant",
                    "Une méthode virtuelle",
                    "Une méthode interne",
                    "Une méthode définie dans une interface"
                ],
                correctAnswer: 0,
                explanation: "C’est une méthode statique déclarée dans une classe statique, avec le premier paramètre précédé de 'this'."
            },
            {
                id: 17,
                question: "Quelle syntaxe permet d’instancier un tableau de 10 entiers initialisés à zéro ?",
                options: [
                    "int[10] arr;",
                    "int[] arr = new int[10];",
                    "var arr = int(10);",
                    "array<int> arr = 10;"
                ],
                correctAnswer: 1,
                explanation: "int[] arr = new int[10]; crée un tableau de 10 entiers initialisés à 0."
            },
            {
                id: 18,
                question: "Quel mot-clé permet d’exécuter du code en cas d’exception, qu’il y ait erreur ou non ?",
                options: [
                    "catch",
                    "finally",
                    "throw",
                    "end"
                ],
                correctAnswer: 1,
                explanation: "finally est exécuté dans tous les cas, après try/catch."
            },
            {
                id: 19,
                question: "À quoi sert 'params' dans la définition d’une méthode ?",
                options: [
                    "Accepter un nombre variable d’arguments",
                    "Obliger à passer une liste",
                    "Créer une méthode asynchrone",
                    "Retourner plusieurs valeurs"
                ],
                correctAnswer: 0,
                explanation: "'params' permet de passer un nombre indéterminé d’arguments à une méthode."
            },
            {
                id: 20,
                question: "Que fait la méthode LINQ 'Select' sur une collection ?",
                options: [
                    "Filtre les éléments",
                    "Transforme chaque élément en un autre via une fonction",
                    "Trie la collection",
                    "Retourne le premier élément"
                ],
                correctAnswer: 1,
                explanation: "Select transforme chaque élément selon la fonction passée en paramètre."
            }
        ],
        mixed: [
            {
                id: 1,
                question: "Quel type de coroutine Unity retourne ?",
                options: ["Thread", "IEnumerator", "Task", "Action"],
                correctAnswer: 1,
                explanation: "Les coroutines Unity utilisent `IEnumerator` pour fonctionner avec `yield`."
            },
            {
                id: 2,
                question: "Quelle est la bonne syntaxe pour attendre 1 seconde dans une coroutine ?",
                options: ["Wait(1)", "Delay(1f)", "yield return new WaitForSeconds(1f)", "Thread.Sleep(1000)"],
                correctAnswer: 2,
                explanation: "C’est `yield return new WaitForSeconds(1f)` dans une coroutine."
            }
        ]
    },
    expert: {
        unity: [
            {
                id: 1,
                question: "Quel est le principal avantage du système ScriptableObject sur les MonoBehaviour pour le partage de données ?",
                options: [
                    "On peut ajouter plus de variables",
                    "Permet de créer des assets de données partagés sans avoir besoin d’instance en scène",
                    "Est plus rapide à exécuter",
                    "Supporte la physique nativement"
                ],
                correctAnswer: 1,
                explanation: "Les ScriptableObjects permettent le partage d’état/données sans dépendre de la hiérarchie de la scène."
            },
            {
                id: 2,
                question: "Pourquoi faut-il éviter de stocker des références à des objets de scène dans des ScriptableObjects ?",
                options: [
                    "Cela cause une fuite mémoire",
                    "Car ces références deviennent nulles après un reload de scène ou serialization",
                    "Unity interdit la sérialisation",
                    "Cela bloque la compilation"
                ],
                correctAnswer: 1,
                explanation: "ScriptableObject est un asset : toute référence à un objet de scène est perdue lors du chargement ou serialization."
            },
            {
                id: 3,
                question: "Quel problème peut causer l’usage intensif de coroutines dans Unity ?",
                options: [
                    "Augmente la taille du build",
                    "Fuite mémoire/accumulation de routines si non arrêtées explicitement",
                    "Empêche l’utilisation de l’éditeur",
                    "Augmente la vitesse d’exécution"
                ],
                correctAnswer: 1,
                explanation: "Des coroutines non stoppées ou oubliées peuvent générer des fuites et des comportements non déterministes."
            },
            {
                id: 4,
                question: "Quelle différence majeure entre Instantiate(obj) et Object.Instantiate(obj, parent) ?",
                options: [
                    "Aucune",
                    "Le second place l’instance comme enfant du parent donné, avec le bon transform local",
                    "Le premier est plus rapide",
                    "Le premier ne copie pas les composants"
                ],
                correctAnswer: 1,
                explanation: "La version avec parent gère correctement la hiérarchie et les coordonnées locales."
            },
            {
                id: 5,
                question: "Comment Unity gère-t-il la désérialisation d’un prefab modifié dans plusieurs scènes ?",
                options: [
                    "Fusionne automatiquement tous les changements",
                    "Garde une référence unique pour toutes les scènes",
                    "Chaque instance de prefab possède ses overrides propres stockés dans la scène",
                    "Efface les modifications locales"
                ],
                correctAnswer: 2,
                explanation: "Chaque instance de prefab peut avoir des overrides locaux, stockés dans chaque scène."
            },
            {
                id: 6,
                question: "Quel est le principal défaut de l’utilisation abusive des Singletons dans un projet Unity ?",
                options: [
                    "Le projet compile plus lentement",
                    "Couplage fort et difficultés de tests/unitaires et maintenance",
                    "Impossible d’utiliser l’éditeur",
                    "Cela augmente la taille du build"
                ],
                correctAnswer: 1,
                explanation: "Le singleton induit un couplage global et complique la testabilité/maintenance."
            },
            {
                id: 7,
                question: "Quelle méthode Unity doit-on utiliser pour charger une scène en mode additif ?",
                options: [
                    "SceneManager.LoadScene(\"scene\", LoadSceneMode.Additive)",
                    "SceneManager.LoadAdditive(\"scene\")",
                    "Application.LoadLevelAdditive(\"scene\")",
                    "SceneManager.AdditiveLoad(\"scene\")"
                ],
                correctAnswer: 0,
                explanation: "Il faut spécifier le mode LoadSceneMode.Additive pour charger sans détruire la scène actuelle."
            },
            {
                id: 8,
                question: "Quel piège cache l’utilisation des static events dans Unity (par exemple pour des signaux globaux) ?",
                options: [
                    "Ils sont plus rapides que les delegates",
                    "Ils peuvent provoquer des memory leaks si les listeners ne sont pas détachés",
                    "Ils sont désactivés en build",
                    "Ils n’existent pas dans Unity"
                ],
                correctAnswer: 1,
                explanation: "Les static events gardent les références en mémoire, donc risque de memory leak si on oublie d’enlever les abonnements."
            },
            {
                id: 9,
                question: "Quelle fonction ou classe Unity utiliser pour un système de pool d’objets efficace en 2020+ ?",
                options: [
                    "GameObject.Instantiate/Destroy",
                    "ObjectPool<T> (UnityEngine.Pool)",
                    "Resources.Instantiate",
                    "ArrayList"
                ],
                correctAnswer: 1,
                explanation: "ObjectPool<T> (package UnityEngine.Pool) est le standard actuel."
            },
            {
                id: 10,
                question: "Pourquoi l’usage de Resources.Load() est-il déconseillé dans un projet professionnel ?",
                options: [
                    "Ça ne marche pas en build",
                    "Empêche la gestion fine de la mémoire et la modularité du projet, tout est chargé en mémoire",
                    "C’est lent",
                    "Unity le supprimera bientôt"
                ],
                correctAnswer: 1,
                explanation: "Resources.Load() charge tout dans la même banque mémoire : impossible de gérer ou de décharger individuellement."
            },
            {
                id: 11,
                question: "Quel composant utiliser pour optimiser l’affichage de centaines d’éléments UI (ex : liste scrollable) ?",
                options: [
                    "ScrollView classique",
                    "ScrollRect + ContentSizeFitter",
                    "ScrollRect + Pool d’éléments réutilisables",
                    "CanvasGroup"
                ],
                correctAnswer: 2,
                explanation: "On pool/recycle les éléments pour éviter les instanciations massives."
            },
            {
                id: 12,
                question: "Comment profiler précisément un pic de consommation mémoire lors d’un chargement de scène ?",
                options: [
                    "Profiler Memory + Deep Profile + capture pendant le chargement",
                    "Déduire à partir des logs console",
                    "Vérifier la scène dans l’Inspector",
                    "Impossible avec Unity"
                ],
                correctAnswer: 0,
                explanation: "Le Profiler permet de capturer la mémoire et de voir le détail par objet/fichier pendant le runtime."
            },
            {
                id: 13,
                question: "À quoi sert le système Addressables par rapport à Resources.Load ?",
                options: [
                    "Permet de charger/décharger dynamiquement, gestion mémoire et bundle, support du remote",
                    "Rend les assets plus jolis",
                    "Permet de déboguer en build",
                    "Rien, c’est la même chose"
                ],
                correctAnswer: 0,
                explanation: "Addressables donne le contrôle fin du chargement et déchargement des assets."
            },
            {
                id: 14,
                question: "Quel est l’avantage de l’async/await (Unity 2018.3+) pour la gestion d’assets et IO ?",
                options: [
                    "Permet d’attendre sans bloquer la frame principale, améliore la réactivité de l’UI",
                    "Accélère la compilation",
                    "Désactive la garbage collection",
                    "Permet de faire du multithread sur la physique"
                ],
                correctAnswer: 0,
                explanation: "async/await permet de charger/attendre des données sans freeze la frame."
            },
            {
                id: 15,
                question: "Comment rendre un système de sauvegarde indépendant de la plateforme cible (PC, mobile, web) ?",
                options: [
                    "Utiliser Application.persistentDataPath et abstraire l’accès fichier/IO",
                    "Stocker en PlayerPrefs",
                    "Sauver dans la racine du projet",
                    "C’est impossible"
                ],
                correctAnswer: 0,
                explanation: "persistentDataPath permet de cibler le bon répertoire selon la plateforme."
            },
            {
                id: 16,
                question: "Comment détecter une fuite mémoire causée par des textures non déchargées sur une scène ?",
                options: [
                    "Observer l’évolution de la mémoire dans le Profiler et vérifier les références sur les assets",
                    "Vider les logs",
                    "Utiliser Debug.Break()",
                    "Il n’y a pas de fuites possibles avec Unity"
                ],
                correctAnswer: 0,
                explanation: "Le Profiler affiche les assets encore référencés après déchargement de scène."
            },
            {
                id: 17,
                question: "Quel est le piège classique avec la sérialisation des listes d’objets custom dans les ScriptableObjects ?",
                options: [
                    "Unity ne sérialise pas les types custom non marqués [Serializable]",
                    "Unity ignore toutes les listes",
                    "Impossible de sérialiser en ScriptableObject",
                    "Les listes ne sont jamais sauvegardées"
                ],
                correctAnswer: 0,
                explanation: "Les types custom doivent être marqués [System.Serializable] pour être sérialisés dans l’inspecteur."
            },
            {
                id: 18,
                question: "Pourquoi l’appel direct à Destroy(this) sur un script MonoBehaviour est-il problématique ?",
                options: [
                    "Détruit tout le GameObject",
                    "MonoBehaviour ne peut pas être détruit seul, il faut détruire le GameObject ou utiliser Destroy(this) pour retirer le script (mais attention aux références null)",
                    "Cela bloque la physique",
                    "Désactive le script seulement"
                ],
                correctAnswer: 1,
                explanation: "Destroy(this) supprime le script du GameObject, mais pas le GameObject, ce qui peut casser des références."
            },
            {
                id: 19,
                question: "Quelle architecture est adaptée à un système d’inventaire décorrélé des GameObjects en scène ?",
                options: [
                    "Système basé sur ScriptableObjects + composition de données",
                    "MonoBehaviour unique attaché à tous les objets",
                    "Prefab par objet",
                    "Pattern Singleton sur un GameObject"
                ],
                correctAnswer: 0,
                explanation: "ScriptableObjects permettent de découpler l’inventaire des objets de la scène."
            },
            {
                id: 20,
                question: "Quel problème pose l’utilisation abusive de FindObjectOfType dans un projet à grande échelle ?",
                options: [
                    "Impact très négatif sur les performances, surtout si appelé dans Update() ou sur de grosses scènes",
                    "Crée des duplications de GameObjects",
                    "Empêche la compilation du projet",
                    "N’affiche pas les objets dans l’Inspector"
                ],
                correctAnswer: 0,
                explanation: "FindObjectOfType fait un scan complet de la scène, c’est un tueur de perfs en prod."
            }
        ],
        csharp: [
            {
                id: 1,
                question: "Qu'est-ce qu'un 'covariant' ou 'contravariant' en C# ?",
                options: [
                    "Des types utilisés uniquement pour les enums",
                    "Des généricités permettant d’utiliser des sous-types dans des interfaces/fonctions génériques",
                    "Une façon d’initialiser des variables globales",
                    "Des structures réservées à l'unsafe code"
                ],
                correctAnswer: 1,
                explanation: "La covariance/contravariance permet la compatibilité entre types génériques parents/enfants (ex : IEnumerable<out T>)."
            },
            {
                id: 2,
                question: "Quel est le risque principal du mot-clé 'dynamic' en C# ?",
                options: [
                    "Aucun, il rend le code plus rapide",
                    "Perte de vérification à la compilation, erreurs potentielles au runtime",
                    "Empêche l’utilisation de LINQ",
                    "Interdit les classes abstraites"
                ],
                correctAnswer: 1,
                explanation: "Le typage dynamique retire la sécurité de compilation, donc plantage possible à l’exécution."
            },
            {
                id: 3,
                question: "Quelle est la différence entre Task.Run() et Task.Factory.StartNew() ?",
                options: [
                    "Aucune, c’est la même chose",
                    "Task.Run() est plus simple et utilise le scheduler par défaut, StartNew() donne plus de contrôle sur le TaskScheduler et les options",
                    "Task.Run() ne supporte pas async/await",
                    "Task.Factory.StartNew() ne permet pas la parallélisation"
                ],
                correctAnswer: 1,
                explanation: "StartNew() offre un contrôle avancé (scheduler, options), Run() est l’usage standard (TPL)."
            },
            {
                id: 4,
                question: "À quoi sert le mot-clé 'lock' en C# ?",
                options: [
                    "Sécuriser l’accès concurrent à une ressource partagée entre threads",
                    "Empêcher la modification d’un champ",
                    "Rendre une classe non héritée",
                    "Sert à la sérialisation"
                ],
                correctAnswer: 0,
                explanation: "lock garantit qu’une section de code ne sera exécutée que par un thread à la fois."
            },
            {
                id: 5,
                question: "Quel est l’intérêt principal de 'Span<T>' ou 'Memory<T>' en C# moderne ?",
                options: [
                    "Stocker plus d’éléments en mémoire",
                    "Optimiser la manipulation de blocs mémoire sans allocation, et permettre la slicing efficace",
                    "Gérer la mémoire GPU",
                    "Remplacer les List<T>"
                ],
                correctAnswer: 1,
                explanation: "Span<T> permet des accès mémoire ultra-rapides, sans allocation, pour optimiser la perf et éviter le GC."
            },
            {
                id: 6,
                question: "Comment garantir qu’un code async ne bloque pas le thread d’UI en WPF ou WinForms ?",
                options: [
                    "Utiliser await sans ConfigureAwait(false)",
                    "Appeler Task.Run à chaque fois",
                    "Utiliser await ... ConfigureAwait(false)",
                    "Ne rien faire, c’est automatique"
                ],
                correctAnswer: 2,
                explanation: "ConfigureAwait(false) évite de repasser sur le contexte de synchronisation de l’UI."
            },
            {
                id: 7,
                question: "Que fait l’opérateur '??' en C# et dans quel cas peut-il poser problème ?",
                options: [
                    "Retourne la première valeur vraie, peut masquer des bugs si la valeur de gauche n’est pas correctement nulle",
                    "Retourne la première valeur non nulle, peut masquer des bugs si le type utilisé a une valeur par défaut inattendue",
                    "Retourne true ou false",
                    "Effectue un cast implicite"
                ],
                correctAnswer: 1,
                explanation: "'??' retourne la première valeur non nulle, mais sur des structs nullable, attention au piège des valeurs par défaut."
            },
            {
                id: 8,
                question: "Quel pattern permet d’ajouter dynamiquement des fonctionnalités à un objet sans modifier sa classe ?",
                options: [
                    "Strategy",
                    "Decorator",
                    "Factory",
                    "Command"
                ],
                correctAnswer: 1,
                explanation: "Decorator permet d’empiler dynamiquement des comportements sur un objet."
            },
            {
                id: 9,
                question: "Que fait l’attribut [MethodImpl(MethodImplOptions.AggressiveInlining)] ?",
                options: [
                    "Demande au compilateur d’ignorer la méthode",
                    "Suggère fortement au JIT d’inliner la méthode pour optimiser les appels",
                    "Force la compilation unsafe",
                    "Désactive la vérification des types"
                ],
                correctAnswer: 1,
                explanation: "Cet attribut pousse le compilateur/JIT à inliner la méthode, pour les micro-optimisations."
            },
            {
                id: 10,
                question: "À quoi sert le mot-clé 'unsafe' en C# ?",
                options: [
                    "Permet d’utiliser des pointeurs et manipuler directement la mémoire",
                    "Empêche les exceptions",
                    "Oblige à utiliser des types valeur",
                    "Bloque l’accès au garbage collector"
                ],
                correctAnswer: 0,
                explanation: "unsafe active la gestion des pointeurs mémoire, comme en C/C++."
            },
            {
                id: 11,
                question: "Que permet le type Nullable<T> ou le suffixe '?' sur un type valeur ?",
                options: [
                    "Créer des types référence uniquement",
                    "Permettre à un type valeur d’avoir la valeur null",
                    "Rendre une variable thread-safe",
                    "Optimiser l’alignement mémoire"
                ],
                correctAnswer: 1,
                explanation: "Nullable<T> autorise null sur un int, float, struct…"
            },
            {
                id: 12,
                question: "Quel est le risque principal avec les closures dans les boucles (foreach/for) en C# ?",
                options: [
                    "Pas de problème particulier",
                    "Le même objet est capturé à chaque itération, ce qui peut provoquer des bugs inattendus (mutation de la variable capturée)",
                    "Provoque une fuite mémoire",
                    "Force le garbage collector à chaque itération"
                ],
                correctAnswer: 1,
                explanation: "La closure capture la variable de boucle, pas sa valeur, donc elle est partagée dans la closure si pas déclarée dans le scope."
            },
            {
                id: 13,
                question: "Quelle est la différence entre une interface explicitement implémentée et implicitement implémentée en C# ?",
                options: [
                    "Aucune",
                    "L’implémentation explicite cache la méthode à l’extérieur du cast interface",
                    "L’implémentation explicite est accessible en public",
                    "Seule l’implémentation implicite permet les propriétés"
                ],
                correctAnswer: 1,
                explanation: "L’implémentation explicite est accessible uniquement via un cast vers l’interface."
            },
            {
                id: 14,
                question: "Quel est l’intérêt du mot-clé 'fixed' dans le code unsafe C# ?",
                options: [
                    "Empêcher le garbage collector de déplacer une variable en mémoire",
                    "Déclarer une constante globale",
                    "Fixer la taille d’un tableau",
                    "Rendre une variable immutable"
                ],
                correctAnswer: 0,
                explanation: "fixed empêche le GC de déplacer un pointeur, nécessaire en manipulation mémoire directe."
            },
            {
                id: 15,
                question: "Comment optimiser le parcours d’une très grosse collection de structs sans allocations mémoire ?",
                options: [
                    "Utiliser Span<T> ou Memory<T> pour éviter le boxing et la copie",
                    "Utiliser List<T> classique",
                    "Copier dans un tableau d’objets",
                    "Utiliser dynamic"
                ],
                correctAnswer: 0,
                explanation: "Span<T> ou Memory<T> permet de manipuler directement le buffer sans boxing/allocation."
            },
            {
                id: 16,
                question: "Qu’apporte le mot-clé 'readonly struct' par rapport à un struct classique ?",
                options: [
                    "Rend le struct plus rapide à compiler",
                    "Le struct ne peut plus modifier ses champs après création, garantit l’immutabilité",
                    "Permet d’utiliser unsafe automatiquement",
                    "Aucun intérêt"
                ],
                correctAnswer: 1,
                explanation: "readonly struct = immuable après création, moins d’erreurs et parfois optimisation du JIT."
            },
            {
                id: 17,
                question: "Quel risque avec l’usage de l’opérateur 'as' pour un cast en C# ?",
                options: [
                    "Peut lever une exception si le cast échoue",
                    "Retourne null en cas d’échec, donc possible NullReferenceException plus loin si pas vérifié",
                    "Force la conversion implicite",
                    "Aucun, 'as' est toujours safe"
                ],
                correctAnswer: 1,
                explanation: "'as' retourne null si le cast échoue, donc vigilance obligatoire sur les accès suivants."
            },
            {
                id: 18,
                question: "Que fait l’appel 'await Task.WhenAll(tasks)' en C# ?",
                options: [
                    "Attend la fin de toutes les tâches en parallèle, puis continue",
                    "Lance les tâches séquentiellement",
                    "Crée un thread par tâche",
                    "Empêche toute exception d’être propagée"
                ],
                correctAnswer: 0,
                explanation: "Task.WhenAll attend que toutes les tâches se terminent avant de reprendre l’exécution."
            },
            {
                id: 19,
                question: "Pourquoi éviter d’utiliser des champs publics dans une struct pour les librairies publiques ?",
                options: [
                    "Cela empêche l’optimisation du JIT",
                    "Rend le type non thread-safe",
                    "On ne pourra plus jamais changer la struct sans casser la rétrocompatibilité (contract immuable)",
                    "Pas de raison, c’est la pratique standard"
                ],
                correctAnswer: 2,
                explanation: "Un champ public dans une struct rend tout changement futur breaking, donc interdit en API publique maintenable."
            },
            {
                id: 20,
                question: "Quel piège concerne l’utilisation des méthodes d’extension LINQ sur une IEnumerable non matérielle (ex: yield return) ?",
                options: [
                    "Aucun, elles sont toujours évaluées immédiatement",
                    "Le pipeline est lazy: chaque appel LINQ ne parcourt la collection qu’à l’itération finale (foreach), risque de double calcul",
                    "Le code ne compile pas",
                    "LINQ ne supporte que les tableaux"
                ],
                correctAnswer: 1,
                explanation: "LINQ est lazy : les requêtes ne sont évaluées que lors de l’itération, pas à la déclaration."
            }
        ],
        mixed: [
            {
                id: 1,
                question: "Quel pattern est utilisé par Unity pour les événements `OnCollisionEnter` ?",
                options: ["Observer", "Command", "Strategy", "Factory"],
                correctAnswer: 0,
                explanation: "Unity applique le pattern Observer pour réagir à des événements comme les collisions."
            },
            {
                id: 2,
                question: "Comment lier un événement C# à une méthode dans Unity ?",
                options: ["Via une coroutine", "Avec un `delegate`", "En surchargant `Update()`", "Via un `yield return`"],
                correctAnswer: 1,
                explanation: "Un `delegate` ou un `event` permet d’attacher une méthode à un événement."
            }
        ]
    }
};
