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
                },
                {
                    id: 21,
                    question: "Quel composant Unity permet d’éclairer une scène en 3D ?",
                    options: ["Light", "MeshRenderer", "Canvas", "Camera"],
                    correctAnswer: 0,
                    explanation: "Le composant Light éclaire la scène en 2D/3D."
                },
                {
                    id: 22,
                    question: "Dans quel panneau ajoute-t-on des dossiers pour organiser les assets ?",
                    options: ["Inspector", "Hierarchy", "Project", "Console"],
                    correctAnswer: 2,
                    explanation: "On gère les dossiers et assets dans le panneau Project."
                },
                {
                    id: 23,
                    question: "Quelle extension de fichier est associée à un prefab Unity ?",
                    options: [".prefab", ".unity", ".asset", ".scene"],
                    correctAnswer: 0,
                    explanation: "Les prefabs sont des fichiers .prefab."
                },
                {
                    id: 24,
                    question: "Quelle action permet de renommer un GameObject dans la Hierarchy ?",
                    options: ["Double-clic sur le nom", "Clic droit > Rename", "Sélectionner puis F2", "Toutes ces réponses"],
                    correctAnswer: 3,
                    explanation: "Toutes ces méthodes permettent de renommer un objet."
                },
                {
                    id: 25,
                    question: "À quoi sert le bouton 'Lock' (cadenas) dans l’Inspector ?",
                    options: ["Empêcher la sélection dans la scène", "Verrouiller l’affichage sur un objet", "Cacher l’objet dans la scène", "Mettre l’objet en lecture seule"],
                    correctAnswer: 1,
                    explanation: "Le cadenas verrouille l’Inspector sur l’objet sélectionné."
                },
                {
                    id: 26,
                    question: "Comment déplace-t-on un GameObject dans la vue Scene ?",
                    options: ["Avec l’outil Move (W)", "En modifiant le Transform", "En drag & drop dans la vue", "Toutes ces réponses"],
                    correctAnswer: 3,
                    explanation: "Tous ces moyens permettent de déplacer un GameObject."
                },
                {
                    id: 27,
                    question: "Quel composant faut-il pour entendre un son dans Unity ?",
                    options: ["AudioSource", "MeshRenderer", "Camera", "BoxCollider"],
                    correctAnswer: 0,
                    explanation: "AudioSource diffuse le son dans la scène."
                },
                {
                    id: 28,
                    question: "Quel bouton du panneau Game permet de redémarrer la scène ?",
                    options: ["Play", "Pause", "Step", "Aucun, il faut sortir et relancer Play"],
                    correctAnswer: 3,
                    explanation: "Il faut arrêter puis relancer le mode Play pour redémarrer la scène."
                },
                {
                    id: 29,
                    question: "Quelle option permet d’afficher ou masquer les objets enfants dans la Hierarchy ?",
                    options: ["Clic sur la petite flèche à gauche du nom", "Ctrl+Click sur le parent", "Double clic sur l’objet", "Aucune"],
                    correctAnswer: 0,
                    explanation: "La flèche permet de déplier/replier les enfants dans la Hierarchy."
                },
                {
                    id: 30,
                    question: "Comment activer ou désactiver un composant (ex : Renderer) dans l’Inspector ?",
                    options: ["Coche à côté du nom du composant", "Bouton droit sur le composant", "Option View", "Aucun, c’est impossible"],
                    correctAnswer: 0,
                    explanation: "On peut cocher/décocher le composant directement dans l’Inspector."
                },
                {
                    id: 31,
                    question: "Quel composant est utilisé pour afficher une image sur l’UI ?",
                    options: ["Image", "RawImage", "SpriteRenderer", "Text"],
                    correctAnswer: 0,
                    explanation: "Le composant Image affiche des sprites sur l’UI Unity."
                },
                {
                    id: 32,
                    question: "Dans le menu GameObject > 3D Object, que crée-t-on ?",
                    options: ["Un GameObject 3D préconfiguré", "Un asset", "Un script", "Une lumière"],
                    correctAnswer: 0,
                    explanation: "Ce menu permet de créer rapidement des objets 3D courants."
                },
                {
                    id: 33,
                    question: "Quelle touche supprime un GameObject sélectionné dans la scène ?",
                    options: ["Delete", "Backspace", "Suppr", "Toutes ces réponses"],
                    correctAnswer: 3,
                    explanation: "Toutes ces touches peuvent servir selon l’OS/clavier."
                },
                {
                    id: 34,
                    question: "Dans Unity, à quoi sert l’outil Rect Tool ?",
                    options: ["Redimensionner et déplacer des objets 2D/UI", "Créer des lumières", "Dessiner des textures", "Aucun usage"],
                    correctAnswer: 0,
                    explanation: "Rect Tool sert pour la transformation des objets 2D/UI."
                },
                {
                    id: 35,
                    question: "Que se passe-t-il si on met l’échelle (Scale) d’un GameObject à zéro ?",
                    options: ["L’objet devient invisible", "Il plante Unity", "Il double sa taille", "Il passe derrière la caméra"],
                    correctAnswer: 0,
                    explanation: "Un scale à zéro rend l’objet invisible dans la scène."
                },
                {
                    id: 36,
                    question: "Quel panneau Unity affiche les logs, warnings et erreurs ?",
                    options: ["Hierarchy", "Console", "Inspector", "Project"],
                    correctAnswer: 1,
                    explanation: "La Console centralise tous les messages système/logs/scripts."
                },
                {
                    id: 37,
                    question: "Que signifie le gizmo bleu sur l’axe Z d’un objet sélectionné ?",
                    options: ["C’est l’axe Z, profondeur (avant/arrière)", "Il permet de bouger l’objet sur Y", "C’est le raccourci Undo", "Aucun rapport"],
                    correctAnswer: 0,
                    explanation: "L’axe bleu est l’axe Z (profondeur) dans Unity."
                },
                {
                    id: 38,
                    question: "Quel composant est indispensable pour afficher du texte avec des polices riches ?",
                    options: ["TextMeshPro", "Text", "Canvas", "Image"],
                    correctAnswer: 0,
                    explanation: "TextMeshPro est recommandé pour afficher du texte riche (stylé) dans Unity."
                },
                {
                    id: 39,
                    question: "Comment dézoomer dans la vue Scene ?",
                    options: ["Molette de la souris", "Bouton Zoom Out", "Ctrl+Scroll", "Impossible"],
                    correctAnswer: 0,
                    explanation: "La molette permet de zoomer/dézoomer dans la vue Scene."
                },
                {
                    id: 40,
                    question: "Quel type d’objet est utilisé pour organiser des objets dans la Hierarchy sans composant visible ?",
                    options: ["Empty GameObject", "Camera", "Canvas", "Prefab"],
                    correctAnswer: 0,
                    explanation: "Un GameObject vide sert de parent/organisation dans la Hierarchy."
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
                },
                {
                    id: 21,
                    question: "Quel mot-clé sert à déclarer une méthode statique en C# ?",
                    options: ["static", "public", "void", "method"],
                    correctAnswer: 0,
                    explanation: "`static` indique qu'une méthode appartient à la classe et non à une instance."
                },
                {
                    id: 22,
                    question: "Quel type C# permet de stocker un nombre entier positif ou négatif ?",
                    options: ["int", "string", "bool", "double"],
                    correctAnswer: 0,
                    explanation: "`int` stocke des entiers signés (positifs ou négatifs)."
                },
                {
                    id: 23,
                    question: "Que permet de faire l’opérateur '==' en C# ?",
                    options: ["Comparer l’égalité", "Ajouter", "Soustraire", "Diviser"],
                    correctAnswer: 0,
                    explanation: "L’opérateur '==' compare deux valeurs pour l’égalité."
                },
                {
                    id: 24,
                    question: "Comment commence-t-on un commentaire multi-ligne en C# ?",
                    options: ["/*", "//", "--", "#"],
                    correctAnswer: 0,
                    explanation: "`/*` ouvre un commentaire multi-ligne."
                },
                {
                    id: 25,
                    question: "Quel est le type C# pour une variable à virgule flottante ?",
                    options: ["float", "bool", "string", "int"],
                    correctAnswer: 0,
                    explanation: "`float` permet de stocker des nombres à virgule flottante."
                },
                {
                    id: 26,
                    question: "Quelle syntaxe est correcte pour affecter la valeur 10 à une variable nommée x ?",
                    options: ["x = 10;", "x == 10;", "10 = x;", "let x 10;"],
                    correctAnswer: 0,
                    explanation: "On affecte une valeur avec '=' en C#."
                },
                {
                    id: 27,
                    question: "Quelle est la portée d'une variable déclarée à l’intérieur d’une boucle for ?",
                    options: ["Seulement à l’intérieur de la boucle", "Partout dans la classe", "Dans toute la méthode", "Globale au programme"],
                    correctAnswer: 0,
                    explanation: "Une variable déclarée dans une boucle existe uniquement à l'intérieur de celle-ci."
                },
                {
                    id: 28,
                    question: "Quel mot-clé permet de définir une méthode qui ne retourne aucune valeur ?",
                    options: ["void", "return", "static", "empty"],
                    correctAnswer: 0,
                    explanation: "`void` indique l’absence de valeur de retour."
                },
                {
                    id: 29,
                    question: "Quel est le type booléen en C# ?",
                    options: ["bool", "boolean", "logic", "bit"],
                    correctAnswer: 0,
                    explanation: "Le type bool stocke vrai ou faux (true/false)."
                },
                {
                    id: 30,
                    question: "Comment écrit-on une instruction conditionnelle en C# ?",
                    options: ["if (condition) { ... }", "if condition: ...", "if [condition] then ...", "if condition then ..."],
                    correctAnswer: 0,
                    explanation: "La syntaxe est `if (condition) { ... }`."
                },
                {
                    id: 31,
                    question: "Quel opérateur sert à la négation logique (inverser un booléen) ?",
                    options: ["!", "&", "|", "^"],
                    correctAnswer: 0,
                    explanation: "Le point d’exclamation '!' inverse la valeur d’un booléen."
                },
                {
                    id: 32,
                    question: "Comment termine-t-on un bloc d’instructions en C# ?",
                    options: ["}", "]", "end", "close"],
                    correctAnswer: 0,
                    explanation: "Un bloc est fermé par l’accolade droite '}'."
                },
                {
                    id: 33,
                    question: "Quel type C# permet de stocker un caractère unique ?",
                    options: ["char", "string", "int", "byte"],
                    correctAnswer: 0,
                    explanation: "`char` stocke un caractère unique."
                },
                {
                    id: 34,
                    question: "Quel mot-clé permet de déclarer une variable accessible uniquement dans la classe courante ?",
                    options: ["private", "public", "protected", "internal"],
                    correctAnswer: 0,
                    explanation: "`private` limite l'accès à la classe où la variable est déclarée."
                },
                {
                    id: 35,
                    question: "Quelle méthode affiche une valeur dans la console en C# ?",
                    options: ["Console.WriteLine()", "Debug.Log()", "System.Out()", "Print()"],
                    correctAnswer: 0,
                    explanation: "`Console.WriteLine()` affiche un message dans la console (hors Unity)."
                },
                {
                    id: 36,
                    question: "Que signifie le mot-clé 'new' devant une instance de classe ?",
                    options: ["Créer une nouvelle instance", "Supprimer une instance", "Accéder à un membre", "Finir une boucle"],
                    correctAnswer: 0,
                    explanation: "`new` sert à créer une nouvelle instance d’une classe ou objet."
                },
                {
                    id: 37,
                    question: "Que fait l’opérateur '%' en C# ?",
                    options: ["Calcule le reste d’une division", "Additionne deux nombres", "Inverse un booléen", "Fait une comparaison"],
                    correctAnswer: 0,
                    explanation: "L’opérateur '%' calcule le modulo (reste de la division entière)."
                },
                {
                    id: 38,
                    question: "Quel type de boucle permet de répéter tant qu’une condition est vraie ?",
                    options: ["while", "for", "foreach", "switch"],
                    correctAnswer: 0,
                    explanation: "La boucle while répète tant que la condition reste vraie."
                },
                {
                    id: 39,
                    question: "Comment appelle-t-on la valeur par défaut d’un type bool en C# ?",
                    options: ["false", "0", "null", "vide"],
                    correctAnswer: 0,
                    explanation: "Le booléen est false (faux) par défaut."
                },
                {
                    id: 40,
                    question: "Quel mot-clé permet de sortir immédiatement d’une boucle en C# ?",
                    options: ["break", "return", "continue", "exit"],
                    correctAnswer: 0,
                    explanation: "`break` interrompt la boucle immédiatement."
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
            },
            {
                id: 21,
                question: "Quel composant doit obligatoirement être présent pour afficher un Sprite dans une scène 2D ?",
                options: ["SpriteRenderer", "Image", "MeshRenderer", "Animator"],
                correctAnswer: 0,
                explanation: "SpriteRenderer est indispensable pour afficher un sprite dans la vue 2D."
            },
            {
                id: 22,
                question: "Quelle action du menu contextuel permet de renommer un GameObject dans la Hierarchy ?",
                options: ["Renommer", "Edit Name", "F2", "Modifier"],
                correctAnswer: 2,
                explanation: "Le raccourci F2 permet de renommer un GameObject sélectionné."
            },
            {
                id: 23,
                question: "Quelle extension de fichier correspond à un asset d’image importé dans Unity ?",
                options: [".png", ".wav", ".fbx", ".cs"],
                correctAnswer: 0,
                explanation: "Les images importées sont généralement au format .png, .jpg, etc."
            },
            {
                id: 24,
                question: "Comment afficher les coordonnées locales d’un GameObject dans l’Inspector ?",
                options: ["Regarder le Transform", "Regarder le MeshRenderer", "Ouvrir la Console", "Utiliser Scene View"],
                correctAnswer: 0,
                explanation: "Le composant Transform affiche la position, la rotation et l’échelle locales."
            },
            {
                id: 25,
                question: "Que fait le bouton 'Maximize On Play' dans la fenêtre Game ?",
                options: ["Agrandit la fenêtre Game pendant l’exécution", "Ferme l’éditeur", "Maximise la fenêtre Scene", "Change la résolution du jeu"],
                correctAnswer: 0,
                explanation: "Maximize On Play agrandit automatiquement la fenêtre Game pendant le Play."
            },
            {
                id: 26,
                question: "Où place-t-on un script pour qu’il s’exécute dans une scène Unity ?",
                options: ["Sur un GameObject", "Dans le dossier Editor", "Dans la racine du projet", "Dans Player Settings"],
                correctAnswer: 0,
                explanation: "Un script doit être attaché à un GameObject pour être exécuté en jeu."
            },
            {
                id: 27,
                question: "Quel composant permet de jouer une animation simple sans transitions complexes ?",
                options: ["Animation", "Animator", "AudioSource", "MeshRenderer"],
                correctAnswer: 0,
                explanation: "Le composant Animation sert à lire des animations simples."
            },
            {
                id: 28,
                question: "Comment réinitialiser la rotation d’un GameObject depuis l’Inspector ?",
                options: ["Mettre Rotation à (0,0,0)", "Supprimer le GameObject", "Changer le Tag", "Clic droit > Duplicate"],
                correctAnswer: 0,
                explanation: "Mettre Rotation à (0,0,0) remet l’orientation à plat."
            },
            {
                id: 29,
                question: "Quelle option permet d’afficher ou cacher les axes de transformation dans la Scene ?",
                options: ["Gizmos", "Console", "Inspector", "Project"],
                correctAnswer: 0,
                explanation: "Le bouton Gizmos affiche/masque les repères et axes de la scène."
            },
            {
                id: 30,
                question: "Que permet l’outil Rect Tool dans la vue Scene ?",
                options: ["Redimensionner et déplacer des objets UI", "Ajouter des composants", "Afficher des logs", "Changer le Layer"],
                correctAnswer: 0,
                explanation: "Rect Tool est utilisé pour manipuler la taille et la position des objets 2D/UI."
            },
            {
                id: 31,
                question: "Comment cacher un GameObject dans la scène sans le détruire ?",
                options: ["Le désactiver (SetActive false)", "Supprimer son Transform", "Changer sa couleur", "Changer son nom"],
                correctAnswer: 0,
                explanation: "SetActive(false) cache le GameObject sans le supprimer."
            },
            {
                id: 32,
                question: "Quel est le rôle du composant Canvas dans Unity ?",
                options: ["Contenir toute l’UI", "Afficher une lumière", "Jouer un son", "Gérer la physique"],
                correctAnswer: 0,
                explanation: "Le Canvas est le conteneur principal de l’interface utilisateur (UI)."
            },
            {
                id: 33,
                question: "Où doit-on placer les fichiers .cs pour qu’ils soient reconnus par Unity ?",
                options: ["Dans n’importe quel dossier sous Assets", "Dans Editor uniquement", "À la racine du disque", "Uniquement dans Scripts"],
                correctAnswer: 0,
                explanation: "Tout dossier sous Assets est reconnu, mais on conseille de les organiser dans 'Scripts'."
            },
            {
                id: 34,
                question: "Quel raccourci clavier permet de passer en mode Scale Tool ?",
                options: ["R", "S", "E", "W"],
                correctAnswer: 0,
                explanation: "La touche R active le Scale Tool."
            },
            {
                id: 35,
                question: "Que fait le composant Light dans une scène Unity ?",
                options: ["Eclaire les objets", "Joue des sons", "Change le Tag", "Détecte les collisions"],
                correctAnswer: 0,
                explanation: "Light éclaire la scène et rend visibles les objets."
            },
            {
                id: 36,
                question: "Comment ajouter un nouveau composant à un GameObject ?",
                options: ["Bouton Add Component dans l’Inspector", "Clic droit > New Asset", "Depuis la Console", "En éditant le fichier ProjectSettings"],
                correctAnswer: 0,
                explanation: "On ajoute un composant via le bouton 'Add Component' dans l’Inspector."
            },
            {
                id: 37,
                question: "Quelle est la fonction de 'Play Mode' dans Unity ?",
                options: ["Permet de tester le jeu dans l’éditeur", "Ajoute un GameObject", "Ouvre la Console", "Sauve le projet"],
                correctAnswer: 0,
                explanation: "Play Mode permet de lancer le jeu dans l’éditeur Unity pour tester les fonctionnalités."
            },
            {
                id: 38,
                question: "Quel fichier contient les paramètres principaux du projet Unity ?",
                options: ["ProjectSettings", "Main.unity", "BuildSettings", "Readme.txt"],
                correctAnswer: 0,
                explanation: "ProjectSettings contient les paramètres globaux du projet."
            },
            {
                id: 39,
                question: "Comment changer la couleur d’arrière-plan de la fenêtre Game ?",
                options: ["Modifier la couleur de la Camera", "Changer le Theme de l’éditeur", "Changer le Layer du GameObject", "Modifier le Lighting Settings"],
                correctAnswer: 0,
                explanation: "La couleur de fond est réglée via le composant Camera."
            },
            {
                id: 40,
                question: "Quel composant Unity détecte la présence de la souris sur un élément UI ?",
                options: ["EventSystem", "MeshRenderer", "BoxCollider", "AudioListener"],
                correctAnswer: 0,
                explanation: "EventSystem gère les interactions souris/clavier sur l’UI."
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
            },
            {
                id: 21,
                question: "Quel est le mot-clé pour déclarer une méthode qui retourne un booléen en C# ?",
                options: ["return", "bool", "boolean", "bit"],
                correctAnswer: 1,
                explanation: "Le mot-clé 'bool' sert à déclarer une méthode retournant un booléen."
            },
            {
                id: 22,
                question: "Comment écrire un commentaire sur une seule ligne en C# ?",
                options: ["// commentaire", "<!-- commentaire -->", "# commentaire", "-- commentaire --"],
                correctAnswer: 0,
                explanation: "Les commentaires sur une ligne commencent par // en C#."
            },
            {
                id: 23,
                question: "Quelle est la portée d’une variable déclarée dans un bloc 'if' ?",
                options: ["Globale", "Locale au bloc", "Publique", "Disponible partout dans la fonction"],
                correctAnswer: 1,
                explanation: "Une variable déclarée dans un bloc if est locale à ce bloc."
            },
            {
                id: 24,
                question: "Quel mot-clé permet de sortir d’une boucle en C# ?",
                options: ["stop", "break", "return", "continue"],
                correctAnswer: 1,
                explanation: "Le mot-clé 'break' termine la boucle en cours."
            },
            {
                id: 25,
                question: "Quel type permet de stocker des nombres entiers en C# ?",
                options: ["double", "string", "int", "bool"],
                correctAnswer: 2,
                explanation: "'int' est le type standard pour les entiers en C#."
            },
            {
                id: 26,
                question: "Comment déclare-t-on un tableau de 3 chaînes de caractères en C# ?",
                options: [
                    "string[3] names;",
                    "string[] names = new string[3];",
                    "string names = {3};",
                    "array<string> names = 3;"
                ],
                correctAnswer: 1,
                explanation: "string[] names = new string[3]; déclare un tableau de trois chaînes."
            },
            {
                id: 27,
                question: "Quel opérateur permet de soustraire deux variables ?",
                options: ["+", "-", "*", "%"],
                correctAnswer: 1,
                explanation: "L’opérateur '-' sert à soustraire en C#."
            },
            {
                id: 28,
                question: "Comment faire une condition 'OU' logique entre deux booléens a et b ?",
                options: [
                    "a or b",
                    "a || b",
                    "a && b",
                    "a xor b"
                ],
                correctAnswer: 1,
                explanation: "'||' réalise un OU logique en C#."
            },
            {
                id: 29,
                question: "Quel est le mot-clé pour définir une variable qui ne changera jamais ?",
                options: ["const", "final", "var", "fixed"],
                correctAnswer: 0,
                explanation: "'const' déclare une constante immuable."
            },
            {
                id: 30,
                question: "Comment appeler une fonction 'Display' sans paramètre ?",
                options: [
                    "call Display;",
                    "Display[];",
                    "Display();",
                    "Display{};"
                ],
                correctAnswer: 2,
                explanation: "On appelle la fonction avec Display(); en C#."
            },
            {
                id: 31,
                question: "Quel type permet de stocker un nombre décimal en C# ?",
                options: ["int", "bool", "float", "char"],
                correctAnswer: 2,
                explanation: "'float' sert à stocker un nombre à virgule flottante."
            },
            {
                id: 32,
                question: "Comment créer une boucle qui s’exécute 5 fois ?",
                options: [
                    "for (int i = 0; i < 5; i++) { }",
                    "repeat 5 times { }",
                    "loop(5) { }",
                    "while i < 5 { }"
                ],
                correctAnswer: 0,
                explanation: "La structure for (int i = 0; i < 5; i++) répète 5 fois."
            },
            {
                id: 33,
                question: "Quel mot-clé permet de définir une classe en C# ?",
                options: ["class", "define", "function", "struct"],
                correctAnswer: 0,
                explanation: "'class' sert à déclarer une nouvelle classe."
            },
            {
                id: 34,
                question: "Comment déclarer une variable qui peut contenir vrai ou faux ?",
                options: [
                    "bool flag;",
                    "boolean flag;",
                    "bit flag;",
                    "logic flag;"
                ],
                correctAnswer: 0,
                explanation: "'bool' est le type standard pour stocker true ou false."
            },
            {
                id: 35,
                question: "Quel opérateur sert à multiplier deux nombres ?",
                options: ["+", "-", "*", "/"],
                correctAnswer: 2,
                explanation: "L’opérateur '*' fait la multiplication."
            },
            {
                id: 36,
                question: "Quelle instruction permet d’afficher 'Hello' dans la console C# ?",
                options: [
                    "Console.WriteLine(\"Hello\");",
                    "print('Hello');",
                    "Debug.Log('Hello');",
                    "log('Hello');"
                ],
                correctAnswer: 0,
                explanation: "Console.WriteLine affiche du texte dans la console standard."
            },
            {
                id: 37,
                question: "Comment écrire une condition pour vérifier si x n’est PAS égal à 5 ?",
                options: [
                    "if (x != 5)",
                    "if (x <> 5)",
                    "if (x =! 5)",
                    "if (x =/= 5)"
                ],
                correctAnswer: 0,
                explanation: "'!=' est le comparateur de différence en C#."
            },
            {
                id: 38,
                question: "Quel mot-clé permet de créer une méthode qui ne retourne rien ?",
                options: ["void", "empty", "none", "noresult"],
                correctAnswer: 0,
                explanation: "'void' indique l’absence de valeur de retour."
            },
            {
                id: 39,
                question: "Quel opérateur permet de diviser deux nombres ?",
                options: ["+", "-", "*", "/"],
                correctAnswer: 3,
                explanation: "'/' est l’opérateur de division."
            },
            {
                id: 40,
                question: "Comment écrire une condition qui s’exécute seulement si y est supérieur à 10 ?",
                options: [
                    "if (y > 10)",
                    "if y > 10 then",
                    "if (y gt 10)",
                    "if (y => 10)"
                ],
                correctAnswer: 0,
                explanation: "La syntaxe correcte en C# est if (y > 10)."
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
            },
            {
                id: 21,
                question: "Quelle méthode Unity permet d’activer un GameObject désactivé dans la scène ?",
                options: [
                    "SetActive(true)",
                    "Enable()",
                    "Activate()",
                    "Show()"
                ],
                correctAnswer: 0,
                explanation: "SetActive(true) active un GameObject désactivé."
            },
            {
                id: 22,
                question: "Quel composant permet d’afficher une vidéo dans une UI Unity ?",
                options: [
                    "VideoPlayer",
                    "MovieTexture",
                    "Canvas",
                    "VideoComponent"
                ],
                correctAnswer: 0,
                explanation: "Le composant natif est VideoPlayer."
            },
            {
                id: 23,
                question: "Quel est le rôle de la fonction Awake() dans un script Unity ?",
                options: [
                    "S’exécute avant Start() pour initialiser le script",
                    "S’exécute à chaque frame",
                    "Lance une coroutine",
                    "Réinitialise le GameObject"
                ],
                correctAnswer: 0,
                explanation: "Awake() s’exécute avant Start, pour l’initialisation précoce."
            },
            {
                id: 24,
                question: "Quel composant permet d’animer une propriété de GameObject (ex: couleur, position) ?",
                options: [
                    "Animator",
                    "Animation",
                    "Tween",
                    "Controller"
                ],
                correctAnswer: 1,
                explanation: "Le composant Animation permet d’animer des propriétés précises."
            },
            {
                id: 25,
                question: "Quelle différence entre Update() et LateUpdate() ?",
                options: [
                    "LateUpdate() est appelée après Update(), utile pour la caméra",
                    "Update() est appelée après LateUpdate()",
                    "Aucune différence",
                    "Update() est réservée à l’UI"
                ],
                correctAnswer: 0,
                explanation: "LateUpdate() sert pour les traitements post-logique (ex: suivi de caméra)."
            },
            {
                id: 26,
                question: "Que fait la fonction Physics.Raycast en Unity ?",
                options: [
                    "Lance un rayon pour détecter les collisions sur un chemin",
                    "Déplace un GameObject",
                    "Fait tourner un objet",
                    "Charge une scène"
                ],
                correctAnswer: 0,
                explanation: "Raycast détecte les collisions le long d’un rayon."
            },
            {
                id: 27,
                question: "Quel composant permet d’éclairer une scène en temps réel ?",
                options: [
                    "Light",
                    "Camera",
                    "Image",
                    "Transform"
                ],
                correctAnswer: 0,
                explanation: "Le composant Light gère l’éclairage en temps réel."
            },
            {
                id: 28,
                question: "Quel raccourci clavier permet de sélectionner plusieurs objets dans la Hierarchy ?",
                options: [
                    "Ctrl + clic",
                    "Shift + clic",
                    "Alt + clic",
                    "Ctrl + A"
                ],
                correctAnswer: 0,
                explanation: "Ctrl + clic permet de sélectionner plusieurs éléments un par un."
            },
            {
                id: 29,
                question: "Quelle méthode permet de faire pivoter un GameObject autour d’un axe donné ?",
                options: [
                    "transform.Rotate()",
                    "transform.Move()",
                    "transform.Scale()",
                    "transform.Spin()"
                ],
                correctAnswer: 0,
                explanation: "transform.Rotate() permet de faire tourner un objet."
            },
            {
                id: 30,
                question: "Quel composant faut-il pour jouer un effet sonore 3D attaché à un objet ?",
                options: [
                    "AudioSource",
                    "AudioListener",
                    "AudioClip",
                    "SoundManager"
                ],
                correctAnswer: 0,
                explanation: "AudioSource joue des sons dans l’espace 3D."
            },
            {
                id: 31,
                question: "Quelle propriété permet de rendre un Collider uniquement détectable mais non bloquant ?",
                options: [
                    "isTrigger",
                    "isStatic",
                    "isEnabled",
                    "isPhysical"
                ],
                correctAnswer: 0,
                explanation: "isTrigger rend le collider détectable sans collision physique."
            },
            {
                id: 32,
                question: "Quelle fonction Unity permet de lancer une coroutine ?",
                options: [
                    "StartCoroutine()",
                    "RunCoroutine()",
                    "BeginCoroutine()",
                    "LaunchCoroutine()"
                ],
                correctAnswer: 0,
                explanation: "StartCoroutine() lance une coroutine."
            },
            {
                id: 33,
                question: "Quel composant permet d’afficher une image sur un bouton UI ?",
                options: [
                    "Image",
                    "SpriteRenderer",
                    "RawImage",
                    "Material"
                ],
                correctAnswer: 0,
                explanation: "Le composant Image s’utilise sur un bouton UI."
            },
            {
                id: 34,
                question: "Quelle méthode permet de détecter une sortie de souris d’un GameObject en UI ?",
                options: [
                    "OnPointerExit",
                    "OnMouseExit",
                    "OnPointerLeave",
                    "OnExit"
                ],
                correctAnswer: 0,
                explanation: "OnPointerExit est utilisée pour l’UI."
            },
            {
                id: 35,
                question: "Que fait la fonction DontDestroyOnLoad(gameObject) ?",
                options: [
                    "Conserve le GameObject lors des changements de scène",
                    "Détruit le GameObject à la fin du niveau",
                    "Désactive le GameObject",
                    "Recrée le GameObject"
                ],
                correctAnswer: 0,
                explanation: "DontDestroyOnLoad garde l’objet vivant entre les scènes."
            },
            {
                id: 36,
                question: "Quel composant Unity faut-il pour appliquer une texture à un objet 2D ?",
                options: [
                    "SpriteRenderer",
                    "MeshRenderer",
                    "RawImage",
                    "Image"
                ],
                correctAnswer: 0,
                explanation: "SpriteRenderer s’utilise pour les objets 2D."
            },
            {
                id: 37,
                question: "Quelle méthode permet de récupérer la position globale d’un GameObject ?",
                options: [
                    "transform.position",
                    "transform.localPosition",
                    "gameObject.position",
                    "transform.GetPosition()"
                ],
                correctAnswer: 0,
                explanation: "transform.position donne la position globale."
            },
            {
                id: 38,
                question: "Quel événement détecte l’entrée de la souris sur un élément UI ?",
                options: [
                    "OnPointerEnter",
                    "OnMouseOver",
                    "OnHover",
                    "OnPointerDown"
                ],
                correctAnswer: 0,
                explanation: "OnPointerEnter est l’événement UI pour l’entrée du pointeur."
            },
            {
                id: 39,
                question: "Comment désactive-t-on un composant Renderer via script ?",
                options: [
                    "renderer.enabled = false;",
                    "renderer.disable();",
                    "renderer.SetActive(false);",
                    "renderer.hide();"
                ],
                correctAnswer: 0,
                explanation: "renderer.enabled = false; désactive le Renderer."
            },
            {
                id: 40,
                question: "Que permet de faire la méthode SetParent sur un Transform ?",
                options: [
                    "Changer le parent dans la hiérarchie",
                    "Changer la couleur de l’objet",
                    "Supprimer le GameObject",
                    "Lancer une animation"
                ],
                correctAnswer: 0,
                explanation: "SetParent permet de changer le parent d’un objet dans la hiérarchie."
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
            },
            {
                id: 21,
                question: "Quel est l’intérêt principal d’utiliser un dictionnaire (`Dictionary<TKey, TValue>`) plutôt qu’une liste en C# ?",
                options: [
                    "Le dictionnaire permet un accès direct via une clé",
                    "Il consomme moins de mémoire",
                    "Il permet d’ordonner les éléments automatiquement",
                    "Il empêche les doublons de valeurs"
                ],
                correctAnswer: 0,
                explanation: "Un dictionnaire permet un accès rapide par clé, contrairement à une liste qui utilise l’index."
            },
            {
                id: 22,
                question: "Que permet la méthode `String.Split()` en C# ?",
                options: [
                    "Diviser une chaîne en plusieurs sous-chaînes selon un séparateur",
                    "Supprimer une sous-chaîne",
                    "Remplacer des caractères",
                    "Concaténer des chaînes"
                ],
                correctAnswer: 0,
                explanation: "`Split()` découpe une chaîne selon un ou plusieurs séparateurs."
            },
            {
                id: 23,
                question: "Comment déclare-t-on une constante globale en C# ?",
                options: [
                    "const int X = 10;",
                    "var X = 10;",
                    "static int X = 10;",
                    "#define X 10"
                ],
                correctAnswer: 0,
                explanation: "On utilise le mot-clé `const`."
            },
            {
                id: 24,
                question: "Quel est le mot-clé pour empêcher une méthode d’être redéfinie dans une classe dérivée ?",
                options: [
                    "sealed",
                    "override",
                    "static",
                    "final"
                ],
                correctAnswer: 0,
                explanation: "`sealed` empêche la redéfinition de la méthode dans les classes filles."
            },
            {
                id: 25,
                question: "À quoi sert le mot-clé `base` dans une méthode d’une classe dérivée ?",
                options: [
                    "Appeler une méthode ou un constructeur de la classe parente",
                    "Déclarer une base de données",
                    "Créer une instance",
                    "Cacher un champ de la classe parente"
                ],
                correctAnswer: 0,
                explanation: "`base` sert à accéder aux membres de la classe parente."
            },
            {
                id: 26,
                question: "Quelle méthode du type `List<T>` permet de vérifier si un élément existe dans la liste ?",
                options: [
                    "Contains",
                    "Exists",
                    "Has",
                    "Check"
                ],
                correctAnswer: 0,
                explanation: "`Contains` vérifie la présence d’un élément dans la liste."
            },
            {
                id: 27,
                question: "Que permet la syntaxe `string interpolation` avec le signe `$` en C# ?",
                options: [
                    "Insérer directement des variables dans une chaîne",
                    "Déclarer une chaîne vide",
                    "Commenter une ligne",
                    "Créer un tableau de chaînes"
                ],
                correctAnswer: 0,
                explanation: "Exemple : `$\"Score : {score}\"` insère la valeur de la variable dans la chaîne."
            },
            {
                id: 28,
                question: "Comment transformer une chaîne de caractères en majuscules en C# ?",
                options: [
                    "str.ToUpper()",
                    "str.UpperCase()",
                    "toUpper(str)",
                    "str.toCaps()"
                ],
                correctAnswer: 0,
                explanation: "`ToUpper()` convertit toute la chaîne en majuscules."
            },
            {
                id: 29,
                question: "Quelle interface faut-il implémenter pour permettre à une classe d’être comparée et triée ?",
                options: [
                    "IComparable",
                    "IEnumerable",
                    "ICloneable",
                    "IDisposable"
                ],
                correctAnswer: 0,
                explanation: "IComparable permet de définir un ordre de tri pour une classe."
            },
            {
                id: 30,
                question: "Quel est le rôle du mot-clé `using` au début d’un fichier .cs ?",
                options: [
                    "Inclure un espace de noms (namespace) externe",
                    "Déclarer une variable",
                    "Créer une boucle",
                    "Définir une classe abstraite"
                ],
                correctAnswer: 0,
                explanation: "`using` permet d’importer des namespaces pour accéder à leurs types."
            },
            {
                id: 31,
                question: "Que fait la méthode `List<T>.RemoveAt(index)` ?",
                options: [
                    "Supprime l’élément à l’index donné",
                    "Supprime tous les éléments de la liste",
                    "Inverse l’ordre des éléments",
                    "Ajoute un élément à la fin"
                ],
                correctAnswer: 0,
                explanation: "`RemoveAt(index)` supprime l’élément à la position indexée."
            },
            {
                id: 32,
                question: "Comment déclare-t-on un tableau de chaînes de 3 éléments en C# ?",
                options: [
                    "string[] arr = new string[3];",
                    "var arr = [3]string;",
                    "array<string> arr = 3;",
                    "new string arr[3];"
                ],
                correctAnswer: 0,
                explanation: "`string[] arr = new string[3];` est la bonne syntaxe."
            },
            {
                id: 33,
                question: "À quoi sert le mot-clé `params` dans la déclaration d’une méthode ?",
                options: [
                    "Permet de passer un nombre variable d’arguments",
                    "Déclarer une propriété",
                    "Indiquer une méthode privée",
                    "Rendre la méthode statique"
                ],
                correctAnswer: 0,
                explanation: "`params` autorise un nombre arbitraire d’arguments dans l’appel."
            },
            {
                id: 34,
                question: "Que fait l’opérateur `!` devant une expression booléenne en C# ?",
                options: [
                    "Inverse la valeur (négation logique)",
                    "Arrête l’exécution",
                    "Ajoute une valeur",
                    "Déclare une variable"
                ],
                correctAnswer: 0,
                explanation: "`!true` devient `false`, c’est l’opérateur NOT logique."
            },
            {
                id: 35,
                question: "Que signifie la portée `protected` sur un membre d’une classe ?",
                options: [
                    "Accessible uniquement par la classe et ses dérivées",
                    "Accessible partout",
                    "Accessible uniquement par la classe elle-même",
                    "Accessible uniquement par les interfaces"
                ],
                correctAnswer: 0,
                explanation: "`protected` permet l’accès à la classe et à ses classes filles."
            },
            {
                id: 36,
                question: "Quelle méthode permet d’obtenir la longueur d’un tableau nommé `arr` en C# ?",
                options: [
                    "arr.Length",
                    "arr.Count()",
                    "arr.Size()",
                    "arr.length()"
                ],
                correctAnswer: 0,
                explanation: "`Length` est la propriété pour la taille d’un tableau."
            },
            {
                id: 37,
                question: "Comment appelle-t-on une méthode statique d’une classe `Utils` en C# ?",
                options: [
                    "Utils.MaMethode()",
                    "new Utils().MaMethode()",
                    "MaMethode.Utils()",
                    "Utils->MaMethode()"
                ],
                correctAnswer: 0,
                explanation: "Une méthode statique s’appelle via le nom de la classe directement."
            },
            {
                id: 38,
                question: "Que fait le mot-clé `virtual` sur une méthode dans une classe parente ?",
                options: [
                    "Autorise la redéfinition de la méthode dans une classe dérivée",
                    "Rend la méthode privée",
                    "Empêche l’héritage",
                    "Crée une méthode abstraite"
                ],
                correctAnswer: 0,
                explanation: "`virtual` permet l’override dans une classe fille."
            },
            {
                id: 39,
                question: "Comment créer un objet de la classe `Personne` en C# ?",
                options: [
                    "Personne p = new Personne();",
                    "Personne p = Personne();",
                    "p = Personne.new();",
                    "new Personne p();"
                ],
                correctAnswer: 0,
                explanation: "On instancie la classe avec `new` : `Personne p = new Personne();`"
            },
            {
                id: 40,
                question: "Quel est le rôle du mot-clé `override` en C# ?",
                options: [
                    "Redéfinir une méthode virtuelle ou abstraite d’une classe parente",
                    "Empêcher l’héritage",
                    "Créer une nouvelle classe",
                    "Définir une propriété statique"
                ],
                correctAnswer: 0,
                explanation: "`override` permet de redéfinir une méthode virtuelle ou abstraite héritée."
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
            },
            {
                id: 21,
                question: "Quelle méthode Unity permet de détecter la désactivation d’un GameObject mais aussi la fermeture de l’application ?",
                options: [
                    "OnDisable()",
                    "OnDestroy()",
                    "OnApplicationQuit()",
                    "OnRemove()"
                ],
                correctAnswer: 1,
                explanation: "OnDestroy() est appelée lors de la destruction de l’objet (désactivation définitive ou fermeture de l’application)."
            },
            {
                id: 22,
                question: "Quel attribut permet d’empêcher la modification d’une variable publique dans l’Inspector Unity ?",
                options: [
                    "[HideInInspector]",
                    "[ReadOnly]",
                    "[NonEditable]",
                    "[SerializeField]"
                ],
                correctAnswer: 0,
                explanation: "[HideInInspector] cache la variable dans l’Inspector même si elle est publique."
            },
            {
                id: 23,
                question: "Quel composant Unity permet de générer dynamiquement des meshes à l’exécution ?",
                options: [
                    "MeshFilter",
                    "MeshCollider",
                    "MeshRenderer",
                    "Mesh"
                ],
                correctAnswer: 3,
                explanation: "La classe Mesh permet de générer/modifier un mesh à l’exécution."
            },
            {
                id: 24,
                question: "Dans quel cas doit-on impérativement utiliser FixedUpdate() plutôt qu’Update() ?",
                options: [
                    "Pour la logique réseau",
                    "Pour la gestion des animations",
                    "Pour le calcul de la physique",
                    "Pour l’affichage des UI"
                ],
                correctAnswer: 2,
                explanation: "FixedUpdate() sert aux calculs physiques pour rester cohérent avec la simulation du moteur."
            },
            {
                id: 25,
                question: "Que permet la propriété `Application.persistentDataPath` dans Unity ?",
                options: [
                    "Accéder au chemin des assets dans le build",
                    "Obtenir un chemin de stockage persistant pour l’appareil de l’utilisateur",
                    "Récupérer le dossier Assets en mode éditeur",
                    "Accéder aux scripts en lecture seule"
                ],
                correctAnswer: 1,
                explanation: "persistentDataPath donne un chemin de sauvegarde spécifique à la plateforme et persistant."
            },
            {
                id: 26,
                question: "Quel risque important existe si on utilise `DontDestroyOnLoad` sur trop d’objets ?",
                options: [
                    "Fuites mémoire et accumulation d’objets non détruits lors des changements de scènes",
                    "Blocage du rendu",
                    "Suppression des assets",
                    "Duplication automatique de la scène"
                ],
                correctAnswer: 0,
                explanation: "Trop d’objets ‘persistants’ non nettoyés peuvent provoquer des fuites mémoire et des conflits."
            },
            {
                id: 27,
                question: "Quel est l’intérêt de regrouper les objets UI sous un même Canvas dans Unity ?",
                options: [
                    "Optimiser le rendu et réduire le nombre de passes de recalcul",
                    "Obligatoire pour afficher du texte",
                    "Permet d’éviter les memory leaks",
                    "Permet de charger plus vite le projet"
                ],
                correctAnswer: 0,
                explanation: "Un seul Canvas limite les recalculs, améliore les performances et évite les surcoûts de rendu."
            },
            {
                id: 28,
                question: "Comment référencer un asset d’une scène depuis un script sans drag-and-drop dans l’Inspector ?",
                options: [
                    "Resources.Load",
                    "AssetDatabase.FindAsset",
                    "GameObject.Find",
                    "Tous ces choix"
                ],
                correctAnswer: 0,
                explanation: "Resources.Load permet de charger dynamiquement un asset depuis le dossier Resources."
            },
            {
                id: 29,
                question: "Quel événement système doit-on écouter pour gérer un changement d’orientation écran sur mobile ?",
                options: [
                    "Application.orientationChanged",
                    "Screen.orientationChanged",
                    "DeviceOrientation.OnChange",
                    "Aucun, il faut vérifier Screen.orientation manuellement dans Update"
                ],
                correctAnswer: 3,
                explanation: "Unity ne propose pas d’événement, il faut vérifier manuellement Screen.orientation à chaque frame."
            },
            {
                id: 30,
                question: "Comment s’assurer qu’une coroutine s’arrête proprement quand on quitte une scène ?",
                options: [
                    "La relancer dans la nouvelle scène",
                    "Mettre un yield return null en fin de coroutine",
                    "Arrêter explicitement la coroutine dans OnDestroy()",
                    "Impossible d’arrêter une coroutine"
                ],
                correctAnswer: 2,
                explanation: "Il faut explicitement stopper les coroutines dans OnDestroy sinon elles peuvent rester actives et générer des bugs."
            },
            {
                id: 31,
                question: "Quelle méthode permet de vérifier si un objet existe toujours dans la scène (après destruction) ?",
                options: [
                    "obj != null",
                    "GameObject.Exists(obj)",
                    "Object.ReferenceEquals(obj, null)",
                    "obj.IsValid()"
                ],
                correctAnswer: 0,
                explanation: "En C#, après un Destroy Unity, la référence devient null (test standard)."
            },
            {
                id: 32,
                question: "Quel est l’effet de cocher 'Static' sur un GameObject dans l’Inspector ?",
                options: [
                    "Il ne peut plus bouger en runtime",
                    "Il sera pris en compte par le baking (occlusion, lightmaps, etc.)",
                    "Il ne sera plus rendu",
                    "Il sera ignoré par la physique"
                ],
                correctAnswer: 1,
                explanation: "Le mode Static permet à Unity de le traiter pour le baking, l’optimisation, etc."
            },
            {
                id: 33,
                question: "Quelle méthode est la plus performante pour détecter des collisions entre de nombreux objets dynamiques ?",
                options: [
                    "Physics.OverlapSphere",
                    "Collision par Layer et PhysicMaterial combinés",
                    "Utiliser un système de spatialisation (quad tree, octree, grid...) en complément",
                    "Physics.RaycastAll"
                ],
                correctAnswer: 2,
                explanation: "Pour de très grands volumes, la spatialisation externe permet de filtrer avant les appels physiques Unity."
            },
            {
                id: 34,
                question: "Quel est le risque de modifier directement la position d’un Rigidbody dans Update() ?",
                options: [
                    "Risque de glitchs physiques, pertes de collisions et incohérences",
                    "Cela améliore la physique",
                    "Rien du tout, c’est équivalent à MovePosition",
                    "Cela déclenche un recalcul des assets"
                ],
                correctAnswer: 0,
                explanation: "Modifier la position d’un Rigidbody en dehors de FixedUpdate casse la simulation physique."
            },
            {
                id: 35,
                question: "Pourquoi utiliser un `ScriptableObject` pour stocker une configuration globale ?",
                options: [
                    "Pour partager la config entre toutes les scènes sans singleton",
                    "Pour mieux profiler la mémoire",
                    "Pour accélérer la compilation",
                    "Parce qu’on ne peut pas utiliser de MonoBehaviour pour ça"
                ],
                correctAnswer: 0,
                explanation: "Un ScriptableObject sert de conteneur de données partagé entre toutes les scènes sans pattern singleton."
            },
            {
                id: 36,
                question: "Comment garantir qu’un script s’exécute avant tous les autres au lancement de la scène ?",
                options: [
                    "Mettre [DefaultExecutionOrder(-100)]",
                    "Utiliser Start() au lieu de Awake()",
                    "Nommer le script AAA en début de projet",
                    "Placer le script en haut de la hiérarchie"
                ],
                correctAnswer: 0,
                explanation: "[DefaultExecutionOrder] permet de forcer l’ordre d’exécution des scripts."
            },
            {
                id: 37,
                question: "Quel est l’impact du mode 'Dynamic Batching' dans les Player Settings ?",
                options: [
                    "Réduit le nombre de draw calls en regroupant certains objets dynamiquement",
                    "Augmente la qualité des textures",
                    "Désactive le garbage collector",
                    "Accélère la compilation des scripts"
                ],
                correctAnswer: 0,
                explanation: "Dynamic Batching regroupe les objets compatibles pour limiter le nombre de draw calls au GPU."
            },
            {
                id: 38,
                question: "Pourquoi faut-il éviter d’utiliser Update() vide dans beaucoup de scripts sur un projet ?",
                options: [
                    "Ça consomme inutilement du CPU à chaque frame",
                    "Ça bloque la sauvegarde de la scène",
                    "Ça empêche la compilation",
                    "Unity l’interdit désormais"
                ],
                correctAnswer: 0,
                explanation: "Même vide, Update() est appelée chaque frame, ce qui coûte cher sur des centaines d’objets."
            },
            {
                id: 39,
                question: "Comment détecter dans un script si on est en mode éditeur ou en build ?",
                options: [
                    "#if UNITY_EDITOR",
                    "Application.IsEditor()",
                    "EditorUtility.IsEditor()",
                    "if (Debug.isEditor)"
                ],
                correctAnswer: 0,
                explanation: "Les directives de compilation (#if UNITY_EDITOR) permettent de cibler code runtime ou éditeur."
            },
            {
                id: 40,
                question: "Quel avantage majeur offre l’utilisation du Profiler intégré de Unity lors de l’optimisation d’un jeu ?",
                options: [
                    "Identifier précisément l’origine des ralentissements (CPU, GPU, mémoire, etc.)",
                    "Accélérer le rendu graphique",
                    "Automatiser le build",
                    "Créer des assets plus rapidement"
                ],
                correctAnswer: 0,
                explanation: "Le Profiler Unity permet de cibler et visualiser l’origine des bottlenecks en temps réel."
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
            },
            {
                id: 21,
                question: "Quel est le rôle de l’interface IDisposable en C# ?",
                options: [
                    "Gérer le polymorphisme",
                    "Permettre le tri d’objets",
                    "Fournir une méthode de libération des ressources non managées",
                    "Créer des événements"
                ],
                correctAnswer: 2,
                explanation: "IDisposable définit la méthode Dispose() pour libérer explicitement des ressources (ex : fichiers, connexions...)."
            },
            {
                id: 22,
                question: "Quel est l’effet d’utiliser l’opérateur 'as' pour un cast sur un type incompatible ?",
                options: [
                    "Lève une exception",
                    "Retourne null",
                    "Retourne false",
                    "Crée une nouvelle instance"
                ],
                correctAnswer: 1,
                explanation: "L’opérateur 'as' retourne null si le cast échoue (pas d’exception levée)."
            },
            {
                id: 23,
                question: "Quel attribut rend une méthode accessible via la réflexion mais pas via l’interface publique ?",
                options: [
                    "[Internal]",
                    "[NonPublic]",
                    "Aucun attribut, il faut déclarer la méthode comme 'private' ou 'internal'",
                    "[Reflectable]"
                ],
                correctAnswer: 2,
                explanation: "Il n’existe pas d’attribut dédié : le contrôle se fait via le niveau d’accès (private, internal…)."
            },
            {
                id: 24,
                question: "À quoi sert le mot-clé 'volatile' en C# ?",
                options: [
                    "Empêcher la surcharge d’une méthode",
                    "Optimiser l’accès mémoire pour le multi-thread",
                    "Déclarer une variable constante",
                    "Gérer la mémoire vidéo"
                ],
                correctAnswer: 1,
                explanation: "volatile force le CPU à lire/écrire en RAM et pas dans le cache du thread."
            },
            {
                id: 25,
                question: "Quel est le comportement de la méthode 'GetHashCode()' en C# ?",
                options: [
                    "Retourne l’adresse mémoire",
                    "Retourne une valeur de hash calculée pour l’objet",
                    "Sert à comparer l’égalité de deux objets",
                    "Efface l’objet"
                ],
                correctAnswer: 1,
                explanation: "GetHashCode() fournit un code de hachage utilisé dans les collections type dictionnaire ou hashset."
            },
            {
                id: 26,
                question: "À quoi sert le mot-clé 'partial' devant une classe ?",
                options: [
                    "Permettre d’étendre une classe sur plusieurs fichiers",
                    "Optimiser le build",
                    "Rendre la classe non héritée",
                    "Créer une copie de la classe"
                ],
                correctAnswer: 0,
                explanation: "partial permet de définir la classe sur plusieurs fichiers source."
            },
            {
                id: 27,
                question: "Quel est le principal danger des variables statiques dans un projet multi-threadé ?",
                options: [
                    "Perte de données",
                    "Accès concurrents non sécurisés menant à des conditions de course",
                    "Fuite mémoire",
                    "Erreur de compilation"
                ],
                correctAnswer: 1,
                explanation: "Sans verrouillage, plusieurs threads peuvent modifier une variable statique en même temps (race condition)."
            },
            {
                id: 28,
                question: "Quel mot-clé empêche une méthode d’être surchargée dans une classe dérivée ?",
                options: [
                    "sealed",
                    "override",
                    "static",
                    "final"
                ],
                correctAnswer: 0,
                explanation: "sealed empêche la redéfinition d’une méthode dans les sous-classes."
            },
            {
                id: 29,
                question: "Quelle est la différence entre une exception checked et unchecked en C# ?",
                options: [
                    "Toutes les exceptions sont unchecked en C#",
                    "Toutes les exceptions sont checked",
                    "C# ne supporte pas les exceptions",
                    "Il n’y a pas de différence"
                ],
                correctAnswer: 0,
                explanation: "C# ne force pas la gestion d’exceptions à la compilation (contrairement à Java, tout est unchecked)."
            },
            {
                id: 30,
                question: "Que fait l’opérateur '??=' ajouté en C# 8 ?",
                options: [
                    "Compare deux valeurs",
                    "Assigne une valeur uniquement si la variable est actuellement null",
                    "Efface la variable si elle vaut null",
                    "Retourne la valeur par défaut d’un type"
                ],
                correctAnswer: 1,
                explanation: "'a ??= b' assigne b à a seulement si a est null."
            },
            {
                id: 31,
                question: "Qu’est-ce qu’une expression lambda en C# ?",
                options: [
                    "Une classe interne",
                    "Une fonction anonyme souvent utilisée comme callback ou délégué",
                    "Une structure de données",
                    "Un type particulier d’interface"
                ],
                correctAnswer: 1,
                explanation: "Les lambdas servent à définir des fonctions anonymes, notamment pour LINQ ou les events."
            },
            {
                id: 32,
                question: "Quelle est la différence principale entre une struct et une class en C# ?",
                options: [
                    "struct = type valeur ; class = type référence",
                    "struct est toujours héritée de class",
                    "class est toujours immuable",
                    "struct permet la surcharge d’opérateurs, class non"
                ],
                correctAnswer: 0,
                explanation: "struct = type valeur (stack), class = type référence (heap)."
            },
            {
                id: 33,
                question: "Quel est l’effet du mot-clé 'yield break' dans une méthode IEnumerator ?",
                options: [
                    "Retourne une valeur",
                    "Met fin à l’itération de la coroutine",
                    "Ignore une exception",
                    "Rend la méthode synchrone"
                ],
                correctAnswer: 1,
                explanation: "yield break arrête la séquence générée par l’IEnumerator."
            },
            {
                id: 34,
                question: "Quelle est la portée d’une variable déclarée dans un bloc 'using' ?",
                options: [
                    "Globale",
                    "Limitée au bloc using",
                    "Limitée à la classe",
                    "Accessible dans tous les threads"
                ],
                correctAnswer: 1,
                explanation: "Une variable dans un bloc using n’existe que dans ce bloc."
            },
            {
                id: 35,
                question: "Pourquoi utiliser la sérialisation binaire est déconseillée en C# moderne ?",
                options: [
                    "Risques de sécurité et problèmes de compatibilité cross-plateforme",
                    "Problèmes de performances",
                    "Trop rapide",
                    "Pas supportée par .NET Core"
                ],
                correctAnswer: 0,
                explanation: "La binaire peut être exploitée pour exécuter du code malicieux et pose problème pour la compatibilité."
            },
            {
                id: 36,
                question: "Quel attribut permet d’exposer une propriété privée dans l’inspecteur Unity ?",
                options: [
                    "[ExposeProperty]",
                    "[InspectorVisible]",
                    "[SerializeField]",
                    "[ShowPrivate]"
                ],
                correctAnswer: 2,
                explanation: "[SerializeField] rend une propriété privée éditable dans l’Inspector."
            },
            {
                id: 37,
                question: "Qu’est-ce qu’un indexeur dans une classe C# ?",
                options: [
                    "Un type d’interface",
                    "Une propriété qui permet d’accéder à une collection via [] sur la classe",
                    "Une fonction d’initialisation",
                    "Un type d’énumération"
                ],
                correctAnswer: 1,
                explanation: "Un indexeur permet d’accéder à la classe comme un tableau via [] (ex: myObj[5])."
            },
            {
                id: 38,
                question: "Quelle est la différence principale entre une interface et une classe abstraite ?",
                options: [
                    "Interface ne contient pas d’implémentation (sauf default methods C# 8+), classe abstraite peut en avoir",
                    "Interface ne peut pas être héritée",
                    "Classe abstraite ne supporte pas l’héritage multiple",
                    "Interface ne peut pas contenir de propriétés"
                ],
                correctAnswer: 0,
                explanation: "Interface = contrat pur ; classe abstraite = peut contenir code partagé."
            },
            {
                id: 39,
                question: "Comment rendre un événement thread-safe lors de l’appel (invocation) ?",
                options: [
                    "Utiliser l’opérateur null-conditional (?.) lors de l’invocation",
                    "Utiliser 'lock' autour de l’événement",
                    "Créer une nouvelle instance à chaque abonnement",
                    "Aucune solution"
                ],
                correctAnswer: 0,
                explanation: "eventHandler?.Invoke(args) évite le race condition sur la nullité."
            },
            {
                id: 40,
                question: "Que fait le mot-clé 'in' devant un paramètre de méthode en C# 7.2+ ?",
                options: [
                    "Passe l’argument par valeur",
                    "Passe l’argument par référence en lecture seule",
                    "Crée une variable locale",
                    "Indique un paramètre optionnel"
                ],
                correctAnswer: 1,
                explanation: "in passe un paramètre par référence, mais interdit la modification dans la méthode."
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
            },
            {
                id: 21,
                question: "Comment Unity gère-t-il la détection des modifications d’un ScriptableObject dans l’éditeur ?",
                options: [
                    "En utilisant OnValidate()",
                    "Grâce à Update()",
                    "Par une recompilation automatique",
                    "Via le bouton Play uniquement"
                ],
                correctAnswer: 0,
                explanation: "OnValidate() est appelée à chaque modification d’un ScriptableObject dans l’éditeur."
            },
            {
                id: 22,
                question: "Quel est l’avantage d’utiliser des 'Assembly Definition Files' (.asmdef) dans un gros projet Unity ?",
                options: [
                    "Réduire le temps de compilation et mieux structurer le code",
                    "Augmenter la performance d’exécution",
                    "Obliger l’utilisation de C# 8+",
                    "Ajouter des assets plus rapidement"
                ],
                correctAnswer: 0,
                explanation: "Les .asmdef séparent les assemblies, ce qui accélère la compilation et isole les dépendances."
            },
            {
                id: 23,
                question: "Qu’apporte le système 'Jobs' de Unity par rapport au multi-threading classique en C# ?",
                options: [
                    "Une gestion sécurisée de la mémoire et du parallélisme pour les calculs massifs",
                    "Il remplace totalement les coroutines",
                    "Il empêche l’accès à la physique",
                    "Il sert uniquement pour l’UI"
                ],
                correctAnswer: 0,
                explanation: "Le système Jobs permet du multi-threading optimisé et sécurisé dans Unity."
            },
            {
                id: 24,
                question: "Quel risque principal avec la désérialisation manuelle de JSON sur des types UnityEngine.Object ?",
                options: [
                    "Perte de références et comportement imprévisible",
                    "Fuite mémoire",
                    "Crash immédiat de l’éditeur",
                    "Rien, tout fonctionne"
                ],
                correctAnswer: 0,
                explanation: "Les références UnityEngine.Object ne sont pas restaurées lors d’une désérialisation JSON classique."
            },
            {
                id: 25,
                question: "Quelle méthode native Unity utiliser pour profiler le temps d’exécution d’un morceau de code précis ?",
                options: [
                    "Profiler.BeginSample() et Profiler.EndSample()",
                    "Debug.LogWarning()",
                    "Application.timeScale",
                    "MonoBehaviour.Benchmark()"
                ],
                correctAnswer: 0,
                explanation: "BeginSample/EndSample délimitent des blocs mesurables dans le Profiler Unity."
            },
            {
                id: 26,
                question: "Quel est le piège classique lors du chargement de scènes additives avec des objets singleton (ex: GameManager) ?",
                options: [
                    "Duper le singleton, donc plusieurs instances en mémoire",
                    "Rien ne change",
                    "Cela supprime la première scène",
                    "Les scripts singleton ne sont pas exécutés"
                ],
                correctAnswer: 0,
                explanation: "Si on ne gère pas le pattern, plusieurs instances de singleton peuvent apparaître en multi-scène."
            },
            {
                id: 27,
                question: "Pourquoi faut-il éviter d’utiliser directement Application.Quit() sur mobile ?",
                options: [
                    "Le système d’exploitation gère la fermeture de l’application, l’appel peut ne rien faire ou causer un comportement inattendu",
                    "Cela efface les PlayerPrefs",
                    "Cela supprime les assets",
                    "Cela bloque le garbage collector"
                ],
                correctAnswer: 0,
                explanation: "Sur mobile, l’OS contrôle le cycle de vie, Application.Quit() n’est pas toujours pris en compte."
            },
            {
                id: 28,
                question: "Quel outil Unity permet de détecter les leaks mémoire liés aux assets chargés/déchargés ?",
                options: [
                    "Memory Profiler",
                    "Physics Debugger",
                    "Lighting Explorer",
                    "Profiler en mode Deep Profile seulement"
                ],
                correctAnswer: 0,
                explanation: "Le Memory Profiler permet d’analyser précisément les allocations et fuites d’assets."
            },
            {
                id: 29,
                question: "Quelle propriété d’un AssetBundle peut causer des crashs s’il est mal géré ?",
                options: [
                    "Unload(false) laissant des références orphelines",
                    "Unload(true) qui ne libère rien",
                    "La taille du bundle",
                    "Son extension de fichier"
                ],
                correctAnswer: 0,
                explanation: "Unload(false) ne libère pas les assets encore référencés, d’où crash potentiel."
            },
            {
                id: 30,
                question: "Quel est le meilleur moyen de garantir l’exécution d’un code à chaque démarrage d’Unity Editor (avant toute scène) ?",
                options: [
                    "[InitializeOnLoad] sur une classe statique",
                    "OnValidate() sur tous les scripts",
                    "Ajouter un MonoBehaviour à chaque scène",
                    "Aucun moyen"
                ],
                correctAnswer: 0,
                explanation: "[InitializeOnLoad] sur une classe statique permet d’exécuter du code dès l’ouverture de l’éditeur."
            },
            {
                id: 31,
                question: "Dans le pipeline de rendu URP, quel composant gère le post-traitement ?",
                options: [
                    "Volume et ses profils",
                    "MeshRenderer",
                    "Animator",
                    "RenderTexture"
                ],
                correctAnswer: 0,
                explanation: "Le Volume (profil URP) centralise tous les effets de post-processing dans URP."
            },
            {
                id: 32,
                question: "Quel est le principal intérêt d’utiliser ScriptableRenderPipeline (SRP) ?",
                options: [
                    "Personnaliser entièrement le pipeline de rendu selon les besoins du projet",
                    "Améliorer la physique",
                    "Ajouter plus d’audio",
                    "Gérer les PlayerPrefs"
                ],
                correctAnswer: 0,
                explanation: "SRP permet un contrôle total sur le pipeline de rendu, idéal pour les besoins spécifiques AAA."
            },
            {
                id: 33,
                question: "Comment garantir la compatibilité multiplateforme d’un shader personnalisé ?",
                options: [
                    "N’utiliser que les instructions supportées par toutes les cibles et tester sur chaque plateforme",
                    "Utiliser n’importe quelle fonction HLSL",
                    "Écrire le shader en C#",
                    "Déclarer le shader comme 'portable'"
                ],
                correctAnswer: 0,
                explanation: "Il faut limiter le code aux instructions supportées par toutes les plateformes visées et bien tester."
            },
            {
                id: 34,
                question: "Quel type d’asset Unity permet le plus facilement la sauvegarde de données structurées côté éditeur ?",
                options: [
                    "ScriptableObject",
                    "MonoBehaviour",
                    "Prefab",
                    "Material"
                ],
                correctAnswer: 0,
                explanation: "ScriptableObject est l’outil dédié au stockage de données customisées et éditables dans Unity."
            },
            {
                id: 35,
                question: "Pourquoi le 'deep profiling' dans le Profiler Unity n’est-il pas conseillé en permanence ?",
                options: [
                    "Il ralentit énormément l’exécution et augmente la taille des logs",
                    "Il casse les builds",
                    "Il efface les breakpoints",
                    "Il réduit la résolution graphique"
                ],
                correctAnswer: 0,
                explanation: "Le deep profile logge TOUT et ralentit drastiquement l’édition/jeu."
            },
            {
                id: 36,
                question: "Quel pattern logiciel permet d’organiser un projet Unity complexe avec beaucoup de logique métier réutilisable ?",
                options: [
                    "Modèle ECS (Entity Component System)",
                    "Single MonoBehaviour",
                    "Utilisation massive des static",
                    "Pattern MVC exclusif"
                ],
                correctAnswer: 0,
                explanation: "ECS (DOTS) permet de séparer données, logique, rendu et optimiser la réutilisation des systèmes."
            },
            {
                id: 37,
                question: "Quelle propriété ou méthode utiliser pour savoir si un asset a été modifié en dehors de Unity (ex : image, son) ?",
                options: [
                    "AssetDatabase.Refresh()",
                    "EditorUtility.CheckAssetChange()",
                    "Application.UpdateAssets()",
                    "Importer automatiquement les assets"
                ],
                correctAnswer: 0,
                explanation: "AssetDatabase.Refresh() force Unity à rescanner les assets et détecter les changements."
            },
            {
                id: 38,
                question: "Comment limiter l’impact CPU d’un grand nombre de scripts Update() sur des objets inactifs ?",
                options: [
                    "Désactiver le GameObject ou le MonoBehaviour concerné",
                    "Créer des coroutines à la place",
                    "Tout déplacer dans FixedUpdate",
                    "Rien, Unity gère tout automatiquement"
                ],
                correctAnswer: 0,
                explanation: "Update() n’est appelée que sur les scripts actifs. Désactiver = pas de coût."
            },
            {
                id: 39,
                question: "Quel est le meilleur outil intégré pour automatiser la génération de builds sur plusieurs plateformes dans Unity ?",
                options: [
                    "Unity Cloud Build",
                    "GitHub Actions",
                    "Command Line classique",
                    "MonoDevelop"
                ],
                correctAnswer: 0,
                explanation: "Unity Cloud Build gère automatiquement les builds multi-plateformes avec intégration continue."
            },
            {
                id: 40,
                question: "Pourquoi faut-il désactiver le 'Editor Analytics' dans un projet pro sensible ?",
                options: [
                    "Pour éviter la fuite de données internes, stats de projet ou code source chez Unity",
                    "Cela ralentit l’éditeur",
                    "Cela empêche les builds",
                    "Ça change la couleur de l’interface"
                ],
                correctAnswer: 0,
                explanation: "Editor Analytics peut envoyer des infos projet/statistiques chez Unity. Sur projet confidentiel = à désactiver."
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
            },
            {
                id: 21,
                question: "Qu’apporte l’utilisation des 'Records' en C# 9+ par rapport aux classes classiques ?",
                options: [
                    "Immutabilité facile et égalité structurelle automatique",
                    "Permet d’utiliser le pattern singleton",
                    "Autorise l’héritage multiple",
                    "Empêche la sérialisation"
                ],
                correctAnswer: 0,
                explanation: "Les records offrent l’immuabilité et l’égalité structurelle sans surcharger Equals/GetHashCode."
            },
            {
                id: 22,
                question: "Quel est le principal intérêt de la méthode 'Span<T>' par rapport à un tableau classique ?",
                options: [
                    "Manipuler des segments de mémoire sans allocation supplémentaire",
                    "Remplacer tous les types de collections",
                    "Obliger l’utilisation du GC",
                    "Créer des threads"
                ],
                correctAnswer: 0,
                explanation: "Span<T> permet de manipuler des tranches de mémoire sans copie ni allocation, optimisant la perf."
            },
            {
                id: 23,
                question: "Que permet l’opérateur 'is not' apparu en C# 9 ?",
                options: [
                    "Vérifier qu’une valeur n’est PAS d’un certain type ou n’est pas null",
                    "Effectuer un cast implicite",
                    "Créer une instance",
                    "Remplacer l’opérateur '=='"
                ],
                correctAnswer: 0,
                explanation: "'is not' teste l’inverse du pattern matching 'is'."
            },
            {
                id: 24,
                question: "Quelle est la conséquence de marquer une méthode async sans aucun 'await' à l’intérieur ?",
                options: [
                    "Elle est exécutée de manière synchrone et génère un avertissement",
                    "Elle ne compile pas",
                    "Elle bloque l’application",
                    "Elle crée un thread dédié"
                ],
                correctAnswer: 0,
                explanation: "Une méthode async sans await s’exécute de façon synchrone et peut déclencher un warning."
            },
            {
                id: 25,
                question: "Que fait le mot-clé 'init' sur une propriété en C# 9+ ?",
                options: [
                    "Permet de n'assigner la propriété que lors de l’initialisation de l’objet",
                    "Rend la propriété immutable pour toujours",
                    "Force l’initialisation à zéro",
                    "Désactive la sérialisation"
                ],
                correctAnswer: 0,
                explanation: "'init' autorise l’assignation dans l’initialiseur ou le constructeur, jamais après."
            },
            {
                id: 26,
                question: "Quel est le piège à éviter avec les méthodes d’extension LINQ sur des requêtes lazy ?",
                options: [
                    "Chaque appel LINQ crée une nouvelle énumération, donc attention aux recalculs coûteux",
                    "Les méthodes d’extension modifient la collection d’origine",
                    "LINQ ne fonctionne pas avec IEnumerable",
                    "Aucun, tout est optimisé"
                ],
                correctAnswer: 0,
                explanation: "Chaque foreach sur une requête LINQ lazy réexécute tout le pipeline (effet de bord, perf)."
            },
            {
                id: 27,
                question: "Quel est le but de l’attribut [CallerMemberName] en C# ?",
                options: [
                    "Obtenir automatiquement le nom de la méthode ou propriété appelante",
                    "Ajouter du code natif",
                    "Définir un argument obligatoire",
                    "Initialiser un champ readonly"
                ],
                correctAnswer: 0,
                explanation: "Permet d’obtenir le nom du membre appelant sans l’écrire explicitement (log, notification, debug)."
            },
            {
                id: 28,
                question: "Quelle différence majeure entre les interfaces normales et les interfaces explicites (explicit interface implementation) ?",
                options: [
                    "L’implémentation explicite n’est accessible que via le cast interface",
                    "Aucune différence",
                    "L’explicite empêche l’héritage",
                    "Les explicites sont publiques par défaut"
                ],
                correctAnswer: 0,
                explanation: "Seul un cast vers l’interface donne accès aux membres explicitement implémentés."
            },
            {
                id: 29,
                question: "Comment fonctionne le 'pattern matching' avec 'switch' en C# 8+ ?",
                options: [
                    "On peut matcher sur le type, la valeur, et des conditions directement dans le switch",
                    "Uniquement sur des int",
                    "Uniquement avec des enums",
                    "Cela génère toujours une erreur en cas de valeur nulle"
                ],
                correctAnswer: 0,
                explanation: "Le pattern matching enrichit switch avec des conditions et des types."
            },
            {
                id: 30,
                question: "Quel danger en C# avec l’utilisation de 'dynamic' dans du code critique ?",
                options: [
                    "Perte de vérification à la compilation, erreurs potentielles au runtime",
                    "Impossibilité d'utiliser les delegates",
                    "Empêche l’héritage",
                    "Crée une fuite mémoire"
                ],
                correctAnswer: 0,
                explanation: "dynamic retire la sécurité du typage et reporte toutes les erreurs au runtime."
            },
            {
                id: 31,
                question: "Pourquoi 'IDisposable' est-il essentiel pour la gestion de ressources en C# ?",
                options: [
                    "Pour garantir la libération manuelle de ressources non managées (fichiers, DB, sockets...)",
                    "Pour créer des threads",
                    "Pour gérer le garbage collector",
                    "Pour optimiser le bytecode"
                ],
                correctAnswer: 0,
                explanation: "IDisposable permet de nettoyer explicitement les ressources non managées."
            },
            {
                id: 32,
                question: "Qu’apporte le mot-clé 'with' sur les records C# 9+ ?",
                options: [
                    "Permet de créer une copie modifiée d’un record (immutabilité + clone)",
                    "Ajoute la serialisation automatique",
                    "Permet la surcharge des opérateurs",
                    "Rend la propriété mutable"
                ],
                correctAnswer: 0,
                explanation: "'with' crée une nouvelle instance basée sur un record existant, avec modification sélective."
            },
            {
                id: 33,
                question: "Pourquoi les exceptions doivent-elles être catchées par type spécifique plutôt que par 'Exception' général ?",
                options: [
                    "Pour gérer précisément chaque cas d’erreur, éviter de masquer des bugs ou de fausses récupérations",
                    "Pour des performances",
                    "Cela génère moins de code IL",
                    "Cela empêche la compilation"
                ],
                correctAnswer: 0,
                explanation: "Catcher Exception masque les vrais bugs et rend le debug difficile."
            },
            {
                id: 34,
                question: "Quel est l'intérêt d’un 'struct readonly' ?",
                options: [
                    "Garantir l’immutabilité et optimiser certaines opérations (inlining, pas de mutation accidentelle)",
                    "Permet de modifier les champs en dehors du constructeur",
                    "Oblige à passer par le GC",
                    "Remplace totalement les classes"
                ],
                correctAnswer: 0,
                explanation: "readonly struct = immuable et potentiellement plus optimisé par le JIT."
            },
            {
                id: 35,
                question: "À quoi sert l’attribut [MethodImpl(MethodImplOptions.AggressiveInlining)] ?",
                options: [
                    "Suggérer au compilateur d’inliner une méthode pour réduire l’overhead d’appel",
                    "Obliger une méthode à être static",
                    "Permettre l’accès à la mémoire non managée",
                    "Rendre la méthode privée"
                ],
                correctAnswer: 0,
                explanation: "AggressiveInlining pousse le JIT à intégrer la méthode dans le code appelant si possible."
            },
            {
                id: 36,
                question: "Quelle est la différence entre 'ref struct' et 'struct' classique en C# ?",
                options: [
                    "ref struct ne peut être stockée sur le heap ni capturée par une lambda/closure",
                    "Aucune différence",
                    "ref struct est automatiquement readonly",
                    "ref struct ne supporte pas les propriétés"
                ],
                correctAnswer: 0,
                explanation: "ref struct est stack-only et ne peut être utilisée que dans certains contextes sûrs (Span, stackalloc…)."
            },
            {
                id: 37,
                question: "Pourquoi utiliser les 'expression-bodied members' (=>) dans les classes et interfaces ?",
                options: [
                    "Raccourcir la syntaxe et améliorer la lisibilité du code simple",
                    "Augmenter les performances",
                    "Obliger l’utilisation de LINQ",
                    "Remplacer les delegates"
                ],
                correctAnswer: 0,
                explanation: "Les membres à expression simplifient la déclaration de propriétés ou méthodes simples."
            },
            {
                id: 38,
                question: "Qu’apporte la clause 'where T : unmanaged' dans une contrainte générique ?",
                options: [
                    "Limiter le type T aux types non managés (structs purs, pas de référence, perf/interop)",
                    "Obliger T à hériter de IDisposable",
                    "Permettre T d’être nullable",
                    "Restreindre T aux classes uniquement"
                ],
                correctAnswer: 0,
                explanation: "'where T : unmanaged' s’assure que le type n’est composé que de champs valeurs purs, pratique pour l’interop natif."
            },
            {
                id: 39,
                question: "Quel est le rôle du mot-clé 'default' dans une déclaration générique ?",
                options: [
                    "Retourner la valeur par défaut du type (0, null, false, etc.)",
                    "Obliger l’initialisation à zéro",
                    "Créer un nouvel objet",
                    "Forcer le garbage collector"
                ],
                correctAnswer: 0,
                explanation: "default(T) renvoie la valeur par défaut de T, peu importe le type générique."
            },
            {
                id: 40,
                question: "Quel piège avec l’usage des closures sur des variables de boucle dans une lambda en C# <7 ?",
                options: [
                    "La variable de boucle est partagée, donc toutes les closures capturent la même valeur (piège classique)",
                    "Les closures ne fonctionnent pas en boucle",
                    "Cela provoque une fuite mémoire",
                    "Les lambdas ne peuvent pas utiliser de variables de boucle"
                ],
                correctAnswer: 0,
                explanation: "Avant C# 7, chaque lambda partage la même instance de variable de boucle. Il faut la dupliquer dans le scope pour éviter des bugs."
            }
        ]
    }
};
