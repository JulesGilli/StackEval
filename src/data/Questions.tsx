export interface Question {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    category: string;  
    level: string;     
}

export const questionsData: Question[] = [
    // Fundamentals
    {
        id: "fundamentals-01",
        question: "Quel composant est automatiquement présent sur tout GameObject créé dans Unity ?",
        options: [
            "Transform",
            "MeshRenderer",
            "BoxCollider",
            "Rigidbody"
        ],
        correctAnswer: 0,
        explanation: "Tous les GameObjects possèdent un Transform, qui gère leur position, rotation et échelle. C’est le seul composant obligatoire.",
        category: "fundamentals",
        level: "user"
    },
    {
        id: "fundamentals-02",
        question: "À quoi sert l'option “Static” dans l’Inspector d’un GameObject ?",
        options: [
            "À indiquer que l’objet ne bougera pas pendant l’exécution",
            "À figer les Rigidbody enfants automatiquement",
            "À désactiver la physique sur l’objet",
            "À cacher l’objet lors de l’édition de la scène"
        ],
        correctAnswer: 0,
        explanation: "L’option Static signale à Unity que l’objet est fixe, ce qui permet d’optimiser le rendu (lightmap, occlusion, batching statique…).",
        category: "fundamentals",
        level: "user"
    },
    {
        id: "fundamentals-03",
        question: "Quel panneau permet de visualiser la hiérarchie des objets présents dans la scène actuelle ?",
        options: [
            "Project",
            "Scene",
            "Inspector",
            "Hierarchy"
        ],
        correctAnswer: 3,
        explanation: "Le panneau Hierarchy affiche tous les GameObjects actifs de la scène, organisés selon leur relation parent/enfant.",
        category: "fundamentals",
        level: "user"
    },
    {
        id: "fundamentals-04",
        question: "Quel fichier Unity contient les métadonnées d’un asset (comme son GUID unique) ?",
        options: [
            ".meta",
            ".asset",
            ".unity",
            ".prefab"
        ],
        correctAnswer: 0,
        explanation: "Unity utilise un fichier .meta pour chaque asset afin de stocker son GUID. Ce GUID permet de conserver les références, même si l’asset est déplacé ou renommé.",
        category: "fundamentals",
        level: "user"
    },
    {
        id: "fundamentals-05",
        question: "Que permet de faire le raccourci Ctrl + D (ou Cmd + D sur Mac) dans l’éditeur Unity ?",
        options: [
            "Dupliquer l’objet sélectionné",
            "Dupliquer la scène actuelle",
            "Créer un nouveau script",
            "Supprimer l’objet sélectionné"
        ],
        correctAnswer: 0,
        explanation: "Ctrl + D permet de dupliquer l’objet sélectionné dans la hiérarchie ou le projet. C’est un raccourci très utilisé dans l’éditeur.",
        category: "fundamentals",
        level: "user"
    },
    {
        id: "fundamentals-06",
        question: "Quel type de fichier est utilisé par Unity pour décrire une scène ?",
        options: [
            ".unity",
            ".scene",
            ".prefab",
            ".asset"
        ],
        correctAnswer: 0,
        explanation: "Les fichiers de scène dans Unity ont l’extension .unity. Ils contiennent tous les objets, composants et paramètres enregistrés pour cette scène.",
        category: "fundamentals",
        level: "user"
    },
    {
        id: "fundamentals-07",
        question: "Quel raccourci permet de recentrer la vue sur un objet sélectionné dans la scène ?",
        options: [
            "Touche F",
            "Touche R",
            "Touche G",
            "Touche C"
        ],
        correctAnswer: 0,
        explanation: "La touche F permet de centrer la caméra de la scène sur l’objet sélectionné. C’est utile pour naviguer rapidement dans une scène complexe.",
        category: "fundamentals",
        level: "user"
    },
    {
        id: "fundamentals-08",
        question: "Quelle opération est effectuée lorsqu’on applique un prefab à un GameObject modifié ?",
        options: [
            "Les modifications sont enregistrées dans le prefab",
            "Le GameObject est remplacé par une copie neuve",
            "Le prefab est dissocié du GameObject",
            "Une nouvelle instance du prefab est créée"
        ],
        correctAnswer: 0,
        explanation: "Cliquer sur 'Apply' en haut de l’inspecteur enregistre les modifications faites à une instance dans le fichier prefab source.",
        category: "fundamentals",
        level: "user"
    },
    {
        id: "fundamentals-09",
        question: "Que se passe-t-il lorsqu’on supprime un GameObject parent dans la hiérarchie ?",
        options: [
            "Tous ses enfants sont supprimés aussi",
            "Les enfants sont déplacés à la racine",
            "Les enfants deviennent inaccessibles",
            "Seul le parent est supprimé, les enfants restent"
        ],
        correctAnswer: 0,
        explanation: "Supprimer un GameObject entraîne également la suppression de tous ses enfants dans la hiérarchie. C’est une suppression récursive.",
        category: "fundamentals",
        level: "user"
    },
    {
        id: "fundamentals-10",
        question: "Comment rendre un GameObject invisible sans le désactiver ?",
        options: [
            "Désactiver son Mesh Renderer",
            "Supprimer son Transform",
            "Cocher 'Static'",
            "Changer son tag en 'Untagged'"
        ],
        correctAnswer: 0,
        explanation: "Désactiver le composant Mesh Renderer empêche l’objet d’être visible tout en laissant son GameObject actif dans la scène.",
        category: "fundamentals",
        level: "user"
    },
    {
        id: "fundamentals-11",
        question: "Comment Unity retrouve-t-il un asset déplacé ou renommé dans le Project sans casser les références ?",
        options: [
            "Grâce à un GUID unique stocké dans le fichier .meta",
            "Grâce au chemin absolu du fichier dans le système",
            "En utilisant le nom de l’asset et son type",
            "Grâce au cache du moteur qui reconstruit les liens au démarrage"
        ],
        correctAnswer: 0,
        explanation: "Chaque asset possède un fichier .meta contenant un GUID unique. Unity utilise ce GUID pour référencer les assets, indépendamment de leur chemin ou nom.",
        category: "fundamentals",
        level: "associate"
    },
    {
        id: "fundamentals-12",
        question: "Que fait précisément la méthode SceneManager.LoadScene() par défaut ?",
        options: [
            "Elle charge une scène en mode single et détruit la précédente",
            "Elle charge une scène en arrière-plan sans détruire la précédente",
            "Elle ajoute la scène à celles déjà chargées",
            "Elle remplace uniquement les objets dynamiques de la scène active"
        ],
        correctAnswer: 0,
        explanation: "Par défaut, LoadScene charge la nouvelle scène en mode Single, ce qui détruit la scène en cours et tous ses objets, sauf ceux marqués avec DontDestroyOnLoad.",
        category: "fundamentals",
        level: "associate"
    },
    {
        id: "fundamentals-13",
        question: "Quel est l’effet d’un changement fréquent de la hiérarchie des GameObjects pendant l’exécution ?",
        options: [
            "Il provoque un recalcul des transforms et peut impacter les performances",
            "Aucun effet tant que les objets ne sont pas rendus",
            "Unity ignore ces changements à moins d’utiliser un Canvas",
            "Cela empêche les événements OnEnable/OnDisable de fonctionner correctement"
        ],
        correctAnswer: 0,
        explanation: "Modifier souvent la hiérarchie (ex: reparenting) entraîne des recalculs coûteux de la structure transform, ce qui peut affecter les performances CPU en runtime.",
        category: "fundamentals",
        level: "associate"
    },
    {
        id: "fundamentals-14",
        question: "Pourquoi faut-il éviter d’utiliser GameObject.Find() dans une méthode Update() ?",
        options: [
            "Parce qu’elle effectue une recherche récursive lente à chaque frame",
            "Parce qu’elle ne fonctionne que sur les objets actifs dans l’Inspector",
            "Parce qu’elle renvoie toujours une copie du GameObject",
            "Parce qu’elle n’est disponible que dans l’éditeur"
        ],
        correctAnswer: 0,
        explanation: "GameObject.Find() parcourt toute la hiérarchie active à chaque appel. L’utiliser dans Update() entraîne un coût CPU inutile évitable avec un cache.",
        category: "fundamentals",
        level: "associate"
    },
    {
        id: "fundamentals-15",
        question: "Quelles sont les conséquences d’un usage excessif de 'public' sur les champs d’un MonoBehaviour ?",
        options: [
            "Ils deviennent modifiables dans l’Inspector et accessibles depuis d'autres scripts",
            "Ils consomment plus de mémoire que les champs privés",
            "Ils ne sont pas sérialisés correctement par Unity",
            "Ils ne sont pas pris en compte lors de la compilation du build"
        ],
        correctAnswer: 0,
        explanation: "Déclarer un champ en public le rend visible dans l'Inspector et accessible depuis d'autres scripts. Cela peut exposer inutilement l'état interne d’un objet, nuisant à l'encapsulation.",
        category: "fundamentals",
        level: "associate"
    },
    {
        id: "fundamentals-16",
        question: "Quel est le rôle principal des fichiers .asmdef dans un projet Unity ?",
        options: [
            "Définir des assemblies pour améliorer la compilation et la modularité",
            "Indiquer à Unity les fichiers à exclure du build",
            "Créer automatiquement des scripts d’initialisation de scène",
            "Spécifier les plateformes supportées pour chaque asset"
        ],
        correctAnswer: 0,
        explanation: "Les fichiers .asmdef permettent de séparer le code en assemblies, ce qui améliore les temps de compilation, la lisibilité et la gestion des dépendances entre modules.",
        category: "fundamentals",
        level: "associate"
    },
    {
        id: "fundamentals-17",
        question: "Qu’est-ce que l’ordre d’exécution des scripts dans Unity permet de contrôler ?",
        options: [
            "Quel script démarre en premier lors du cycle de vie",
            "La vitesse d’exécution des scripts sur le GPU",
            "L’ordre de compilation des shaders custom",
            "L’ordre d'importation des assets lors du build"
        ],
        correctAnswer: 0,
        explanation: "L’ordre d’exécution des scripts permet de prioriser certains comportements (ex : initialisation d’un manager) avant d’autres. Il agit sur le cycle de vie (Awake, Start, Update).",
        category: "fundamentals",
        level: "associate"
    },
    {
        id: "fundamentals-18",
        question: "Pourquoi utiliser des ScriptableObjects pour stocker des données partagées ?",
        options: [
            "Parce qu’ils persistent dans le projet sans exister dans la scène",
            "Parce qu’ils s’exécutent plus vite que les MonoBehaviours",
            "Parce qu’ils permettent de sérialiser les coroutines",
            "Parce qu’ils remplacent automatiquement les prefabs"
        ],
        correctAnswer: 0,
        explanation: "Les ScriptableObjects sont des assets autonomes stockant des données partagées sans devoir exister dans une scène. Parfait pour config, stats, paramètres globaux.",
        category: "fundamentals",
        level: "associate"
    },
    {
        id: "fundamentals-19",
        question: "Que permet le mode 'Static Batching' dans Unity ?",
        options: [
            "Combiner des objets statiques pour réduire les draw calls",
            "Créer automatiquement des lightmaps pour les objets fixes",
            "Bloquer les collisions entre objets inactifs",
            "Réduire la taille mémoire des meshes partagés"
        ],
        correctAnswer: 0,
        explanation: "Le Static Batching fusionne à la volée les meshes des objets marqués comme 'static', ce qui permet de réduire significativement le nombre de draw calls à l’écran.",
        category: "fundamentals",
        level: "associate"
    },
    {
        id: "fundamentals-20",
        question: "Que signifie le fait de marquer une méthode avec l’attribut [ContextMenu] ?",
        options: [
            "Elle devient accessible dans le menu de l’Inspector",
            "Elle est appelée automatiquement à chaque frame",
            "Elle est exclue du build final",
            "Elle est uniquement disponible en mode Play via le menu contextuel"
        ],
        correctAnswer: 0,
        explanation: "L’attribut [ContextMenu] permet d’exposer une méthode publique ou privée dans le menu contextuel d’un MonoBehaviour, pour la déclencher manuellement depuis l’éditeur.",
        category: "fundamentals",
        level: "associate"
    },
    {
        id: "fundamentals-21",
        question: "Pourquoi l’utilisation naïve de DontDestroyOnLoad peut-elle poser problème dans des projets multi-scènes ?",
        options: [
            "Car elle peut entraîner la duplication d’objets persistants entre les scènes",
            "Car elle empêche le garbage collector de libérer la mémoire de la scène précédente",
            "Car elle désactive automatiquement les composants désérialisés",
            "Car elle empêche l’usage de ScriptableObjects persistants"
        ],
        correctAnswer: 0,
        explanation: "Sans gestion explicite, DontDestroyOnLoad peut dupliquer des objets à chaque retour de scène. Cela génère des conflits, des fuites mémoire ou des comportements non désirés sur des singletons ou managers.",
        category: "fundamentals",
        level: "pro"
    },
    {
        id: "fundamentals-22",
        question: "Quel risque entraîne l’activation systématique du static batching sur tous les GameObjects d’une scène ?",
        options: [
            "Une augmentation de l’utilisation mémoire due à la duplication des meshes",
            "Une perte de précision dans les calculs physiques",
            "Un masquage des erreurs de lightmap sur les objets dynamiques",
            "Une impossibilité de sérialiser correctement les composants durant le build"
        ],
        correctAnswer: 0,
        explanation: "Le static batching duplique les meshes en mémoire pour permettre leur combinaison. L’appliquer sans discernement, surtout sur des petits objets nombreux, peut exploser l’usage mémoire sans gain réel.",
        category: "fundamentals",
        level: "pro"
    },
    {
        id: "fundamentals-23",
        question: "Quel problème peut survenir lorsqu’on utilise LoadSceneAdditive sans gérer activement la scène active ?",
        options: [
            "Les GameObjects instanciés seront associés à la mauvaise scène",
            "La nouvelle scène écrase automatiquement les objets persistants",
            "La navigation UI est désactivée dans la scène additive",
            "Les composants MonoBehaviour ne sont plus sérialisés correctement"
        ],
        correctAnswer: 0,
        explanation: "Sans appel explicite à SetActiveScene(), les objets instanciés via Instantiate() seront rattachés à la scène active précédente, ce qui peut générer des erreurs de gestion de contenu ou de nettoyage.",
        category: "fundamentals",
        level: "pro"
    },
    {
        id: "fundamentals-24",
        question: "Quel problème peut survenir lorsqu’on crée des Assembly Definition Files sans organiser correctement leurs dépendances ?",
        options: [
            "Des erreurs de compilation dues à des références circulaires",
            "Une impossibilité de sérialiser les ScriptableObjects",
            "Un plantage du système de lightmapping",
            "Une perte automatique des composants liés aux prefabs"
        ],
        correctAnswer: 0,
        explanation: "Si deux asmdef se réfèrent mutuellement, Unity ne peut pas déterminer l’ordre de compilation. Cela crée une erreur de dépendance circulaire qui bloque tout le build.",
        category: "fundamentals",
        level: "pro"
    },
    {
        id: "fundamentals-25",
        question: "Quel risque survient lorsqu’on s’appuie uniquement sur l’appel à Start() pour initialiser des dépendances entre scripts ?",
        options: [
            "Les scripts peuvent s’exécuter dans un ordre non garanti, causant des références nulles",
            "Les scripts Start() ne s’exécutent pas si la scène est additive",
            "Start() ne s’exécute qu’en mode Play, donc inutilisable en Editor",
            "Start() est appelé avant Awake(), ce qui invalide l’injection de dépendances"
        ],
        correctAnswer: 0,
        explanation: "Unity n’impose aucun ordre d’appel entre scripts différents pour Start(). Se reposer dessus sans gestion d’ordre explicite peut entraîner des références nulles ou des comportements instables.",
        category: "fundamentals",
        level: "pro"
    },
    {
        id: "fundamentals-26",
        question: "Quel est l’usage principal des 'Scripting Define Symbols' dans les paramètres du Player ?",
        options: [
            "Activer ou désactiver des blocs de code selon la configuration du build",
            "Changer automatiquement le niveau de qualité graphique selon la plateforme",
            "Appliquer des paramètres de compilation aux shaders du projet",
            "Exclure les assets inutilisés lors de la génération du build"
        ],
        correctAnswer: 0,
        explanation: "Les scripting define symbols permettent de compiler conditionnellement certaines portions de code via des directives comme #if DEBUG. C’est essentiel pour gérer plusieurs configurations sans modifier manuellement le code.",
        category: "fundamentals",
        level: "pro"
    },
    {
        id: "fundamentals-27",
        question: "Pourquoi est-il déconseillé d’utiliser des allocations mémoire dans une méthode Update() ?",
        options: [
            "Parce qu’elles peuvent provoquer des pics de Garbage Collection perceptibles en jeu",
            "Parce qu’elles empêchent le multithreading natif de Unity",
            "Parce qu’elles dégradent le rendu des lightmaps en temps réel",
            "Parce qu’elles bloquent l’appel de FixedUpdate sur les objets liés"
        ],
        correctAnswer: 0,
        explanation: "Allouer de la mémoire à chaque frame (via new, string, foreach…) génère de la pression sur le GC. Quand la collecte s’active, elle provoque une pause du thread principal, visible sous forme de freeze ou stutter.",
        category: "fundamentals",
        level: "pro"
    },
    {
        id: "fundamentals-28",
        question: "Que se passe-t-il lorsqu’un prefab parent est modifié après la création de plusieurs variants ?",
        options: [
            "Les changements sont propagés aux variants sauf si la propriété a été modifiée localement",
            "Les variants sont forcés de réappliquer les propriétés du parent au prochain reimport",
            "Les overrides des variants sont convertis en propriétés fixes indépendantes",
            "Les changements du parent ne s’appliquent que si les variants sont rechargés manuellement"
        ],
        correctAnswer: 0,
        explanation: "Un Prefab Variant hérite de son parent. Toute propriété non overridée dans le variant est mise à jour automatiquement si elle change dans le parent. Seules les propriétés modifiées localement sont conservées.",
        category: "fundamentals",
        level: "pro"
    },
    {
        id: "fundamentals-29",
        question: "Lequel de ces champs ne sera pas sérialisé par Unity dans un MonoBehaviour ?",
        options: [
            "Un Dictionary<string, int> même s’il est public",
            "Un Vector3 public sans attribut",
            "Un int privé avec [SerializeField]",
            "Un ScriptableObject assigné dans l’Inspector"
        ],
        correctAnswer: 0,
        explanation: "Unity ne sait pas sérialiser les Dictionary (ni HashSet, ni interface) car ils ne sont pas compatibles avec son système de sérialisation interne. Même en public, ils seront ignorés.",
        category: "fundamentals",
        level: "pro"
    },
    {
        id: "fundamentals-30",
        question: "Quel comportement inattendu peut se produire après un appel à Destroy() dans le même frame ?",
        options: [
            "L’objet peut encore être accessible et sembler valide jusqu’à la fin de la frame",
            "L’objet est immédiatement retiré de toutes les listes et hiérarchies",
            "Les autres objets dépendants sont détruits automatiquement avec lui",
            "L’appel bloque l’exécution du thread principal jusqu’à la destruction complète"
        ],
        correctAnswer: 0,
        explanation: "Destroy() marque l’objet pour suppression à la fin de la frame, mais ne le détruit pas immédiatement. Il reste donc accessible via les références existantes, ce qui peut induire des bugs subtils si on le manipule encore.",
        category: "fundamentals",
        level: "pro"
    },
// SCRIPTING
    {
        id: "scripting-01",
        question: "Quelle méthode est appelée automatiquement par Unity juste après l’instanciation d’un script en jeu ?",
        options: [
            "Awake()",
            "Start()",
            "OnEnable()",
            "Update()"
        ],
        correctAnswer: 0,
        explanation: "Awake() est la première méthode appelée par Unity lors de la création d’un script actif. Elle s’exécute avant Start(), et une seule fois, même si l’objet est désactivé puis réactivé.",
        category: "scripting",
        level: "user"
    },
    {
        id: "scripting-02",
        question: "À quoi sert la méthode GetComponent<T>() dans un script Unity ?",
        options: [
            "Accéder à un composant attaché au même GameObject",
            "Créer une instance d’un nouveau composant sur l’objet",
            "Activer tous les composants enfants de type T",
            "Copier les propriétés d’un composant vers un autre"
        ],
        correctAnswer: 0,
        explanation: "GetComponent<T>() permet d’obtenir une référence à un composant existant sur le même GameObject. Il ne crée rien, n’active rien, et ne duplique pas — il récupère.",
        category: "scripting",
        level: "user"
    },
    {
        id: "scripting-03",
        question: "Quel est l’effet de l’attribut [SerializeField] appliqué à un champ privé dans un script Unity ?",
        options: [
            "Il rend le champ visible et modifiable dans l’Inspector",
            "Il le convertit en champ public accessible par d'autres scripts",
            "Il permet de le sauvegarder automatiquement dans un fichier JSON",
            "Il force sa mise à jour à chaque frame du jeu"
        ],
        correctAnswer: 0,
        explanation: "[SerializeField] permet d’exposer un champ privé dans l’Inspector de Unity tout en gardant son accès restreint dans le code. C’est utile pour respecter l'encapsulation tout en permettant le paramétrage visuel.",
        category: "scripting",
        level: "user"
    },
    {
        id: "scripting-04",
        question: "Quelle est la différence principale entre Update() et FixedUpdate() dans Unity ?",
        options: [
            "FixedUpdate() est appelé à intervalles réguliers pour gérer la physique",
            "Update() est plus précis pour gérer les collisions physiques",
            "FixedUpdate() est appelé à chaque frame du jeu",
            "Update() est désactivé si le Rigidbody est en mode Kinematic"
        ],
        correctAnswer: 0,
        explanation: "FixedUpdate() est appelé à un intervalle fixe, indépendant du framerate, et est utilisé pour appliquer des calculs de physique. Update() est lié au nombre d’images par seconde, ce qui peut provoquer des irrégularités si on y gère des forces.",
        category: "scripting",
        level: "user"
    },
    {
        id: "scripting-05",
        question: "Quand la méthode OnEnable() est-elle appelée dans le cycle de vie d’un script Unity ?",
        options: [
            "À chaque fois que le GameObject ou le script est activé",
            "Uniquement lors du chargement initial de la scène",
            "Juste avant l’exécution de la méthode Awake()",
            "Uniquement si le script est public et attaché dans l’Inspector"
        ],
        correctAnswer: 0,
        explanation: "OnEnable() est appelée chaque fois que le script ou son GameObject devient actif. Cela inclut le démarrage de la scène, mais aussi toute réactivation via SetActive(true).",
        category: "scripting",
        level: "user"
    },
    {
        id: "scripting-06",
        question: "Comment appelle-t-on une méthode publique d’un autre script avec un paramètre simple ?",
        options: [
            "En accédant au script via GetComponent et en appelant la méthode avec la valeur",
            "En déclarant la méthode dans le fichier InputManager",
            "En ajoutant la méthode dans la fonction Start() du script cible",
            "En reliant la méthode via un EventTrigger dans l’Inspector"
        ],
        correctAnswer: 0,
        explanation: "On utilise GetComponent pour récupérer le script cible, puis on appelle la méthode en passant la valeur voulue. C’est la base des interactions entre scripts en C# sous Unity.",
        category: "scripting",
        level: "user"
    },
    {
        id: "scripting-07",
        question: "Quelle est la fonction principale du type Vector3 dans Unity ?",
        options: [
            "Représenter une position, une direction ou une échelle en 3D",
            "Définir une couleur avec des canaux RVB",
            "Contrôler l’animation d’un objet dans le temps",
            "Stocker les entrées clavier sous forme de coordonnées"
        ],
        correctAnswer: 0,
        explanation: "Vector3 est un type de structure utilisé pour stocker des données en trois dimensions — position, direction, vitesse, échelle, etc. Il est omniprésent dans les calculs 3D.",
        category: "scripting",
        level: "user"
    },
    {
        id: "scripting-08",
        question: "Quelle est la manière correcte de déplacer un GameObject à une position précise dans l’espace monde ?",
        options: [
            "En assignant une nouvelle valeur à transform.position",
            "En modifiant transform.localPosition en coordonnées globales",
            "En appelant transform.Translate avec des coordonnées absolues",
            "En changeant la position dans l’Inspector pendant le jeu"
        ],
        correctAnswer: 0,
        explanation: "transform.position permet de définir une position globale dans l’espace monde. Modifier localPosition affecte la position relative au parent. Translate ajoute un déplacement relatif, pas absolu.",
        category: "scripting",
        level: "user"
    },
    {
        id: "scripting-09",
        question: "Quelle syntaxe permet d’exécuter une action seulement si une variable booléenne nommée isActive est vraie ?",
        options: [
            "if (isActive) { /* action */ }",
            "if isActive then doAction()",
            "if (isActive == false) { /* action */ }",
            "when isActive == true then { /* action */ }"
        ],
        correctAnswer: 0,
        explanation: "La syntaxe correcte en C# est if (isActive) { ... }. Les autres propositions utilisent une logique ou une syntaxe incorrecte, empruntée à d'autres langages ou mal formée.",
        category: "scripting",
        level: "user"
    },
    {
        id: "scripting-10",
        question: "Quelle méthode permet de détecter si une touche vient d’être pressée sur le clavier ?",
        options: [
            "Input.GetKeyDown()",
            "Input.GetButtonHeld()",
            "Input.KeyPressed()",
            "Input.OnKeyPress()"
        ],
        correctAnswer: 0,
        explanation: "Input.GetKeyDown() retourne true uniquement lors de la frame où la touche est pressée. C’est la méthode classique pour détecter un appui clavier dans Unity.",
        category: "scripting",
        level: "user"
    },
    {
        id: "scripting-11",
        question: "Quel est le principal inconvénient de l’utilisation fréquente de FindObjectOfType<T>() dans un projet Unity ?",
        options: [
            "Elle effectue une recherche globale lente dans la hiérarchie active",
            "Elle crée une nouvelle instance du composant à chaque appel",
            "Elle ne fonctionne que pour les objets marqués 'static'",
            "Elle retourne toujours le premier composant désactivé trouvé"
        ],
        correctAnswer: 0,
        explanation: "FindObjectOfType<T>() parcourt l’ensemble de la scène pour retrouver un composant, ce qui est coûteux en termes de performance. Elle ne crée rien et ignore les composants désactivés.",
        category: "scripting",
        level: "associate"
    },
    {
        id: "scripting-12",
        question: "Pourquoi GetComponent<T>() peut-il retourner null lorsqu’il est utilisé dans la méthode Awake() ?",
        options: [
            "Parce que le composant visé peut ne pas être encore initialisé si son script Awake est appelé après",
            "Parce que GetComponent ne fonctionne pas avant que le GameObject soit actif dans la hiérarchie",
            "Parce que GetComponent ne retourne que les composants publics exposés dans l’Inspector",
            "Parce que les références entre scripts ne sont valides qu’à partir de Start()"
        ],
        correctAnswer: 0,
        explanation: "Si deux scripts sont attachés au même GameObject, mais que celui visé initialise ses références dans son propre Awake(), l’appel de GetComponent dans l’autre script peut échouer si l’ordre d’exécution est défavorable. L’ordre d’appel d’Awake() n’est pas garanti par défaut.",
        category: "scripting",
        level: "associate"
    },
    {
        id: "scripting-13",
        question: "Quel est un inconvénient courant à exposer de nombreux champs en public dans un script Unity ?",
        options: [
            "Cela rend l’état interne modifiable depuis n’importe quel autre script",
            "Cela empêche la compilation du projet sur certaines plateformes",
            "Cela désactive automatiquement la sérialisation par Unity",
            "Cela empêche le champ d’être visible dans l’Inspector sans attribut spécifique"
        ],
        correctAnswer: 0,
        explanation: "Un champ public peut être lu ou modifié librement depuis d'autres scripts, ce qui peut casser l'encapsulation et générer des effets de bord imprévus. Mieux vaut utiliser private + SerializeField.",
        category: "scripting",
        level: "associate"
    },
    {
        id: "scripting-14",
        question: "Quelle erreur fréquente peut survenir lors de l’instanciation d’un prefab sans définir explicitement son parent ?",
        options: [
            "L’objet instancié est placé par défaut à la racine de la scène",
            "Le prefab ne peut pas recevoir de composants dynamiques",
            "L’objet instancié est automatiquement détruit à la fin de la frame",
            "Le prefab est converti en GameObject statique non modifiable"
        ],
        correctAnswer: 0,
        explanation: "Si aucun parent n’est spécifié, Unity instancie l’objet à la racine de la scène. Cela peut affecter l’ordre d’affichage ou le comportement attendu dans l’arborescence (UI, logique, etc.).",
        category: "scripting",
        level: "associate"
    },
    {
        id: "scripting-15",
        question: "Quel problème peut survenir lorsqu’un objet marqué DontDestroyOnLoad contient une variable static ?",
        options: [
            "L’objet peut persister avec un état corrompu lors du retour à une scène déjà chargée",
            "Le champ static est automatiquement réinitialisé à chaque chargement de scène",
            "L’objet est dupliqué dans la hiérarchie et force la désactivation du prefab d’origine",
            "Les composants enfants de l’objet sont désérialisés avec des valeurs par défaut"
        ],
        correctAnswer: 0,
        explanation: "Les objets DontDestroyOnLoad ne sont pas détruits entre les scènes. Si une variable static garde une référence vers eux ou des données d’état, cela peut causer des effets de bord, duplications ou incohérences en cas de retour sur une scène déjà chargée.",
        category: "scripting",
        level: "associate"
    },
    {
        id: "scripting-16",
        question: "Comment fonctionne une coroutine dans Unity ?",
        options: [
            "Elle exécute une méthode en plusieurs fois sur la durée du jeu",
            "Elle exécute une méthode instantanément dans un thread séparé",
            "Elle répète l’exécution d’une méthode à intervalle fixe automatiquement",
            "Elle bloque l’ensemble du code tant que l’action n’est pas terminée"
        ],
        correctAnswer: 0,
        explanation: "Les coroutines permettent d’exécuter du code sur plusieurs frames, en laissant Unity gérer la reprise au bon moment. Elles ne bloquent pas, ne créent pas de threads, et ne s’exécutent pas en boucle automatiquement.",
        category: "scripting",
        level: "associate"
    },
    {
        id: "scripting-17",
        question: "Dans quel cas une coroutine peut-elle être interrompue automatiquement sans appel explicite à StopCoroutine() ?",
        options: [
            "Lorsque le GameObject qui l’exécute est désactivé",
            "Lorsque la scène active est rechargée en mode additive",
            "Lorsque la coroutine utilise yield return null plus de 60 fois",
            "Lorsque le nom de la coroutine est identique à une autre en cours"
        ],
        correctAnswer: 0,
        explanation: "Les coroutines sont liées à un MonoBehaviour actif. Si le GameObject ou le script est désactivé, Unity stoppe automatiquement la coroutine en cours, sans avertissement.",
        category: "scripting",
        level: "associate"
    },
    {
        id: "scripting-18",
        question: "Quel est l’intérêt principal d’utiliser un bloc try/catch dans un script Unity ?",
        options: [
            "Empêcher le crash complet du script lors d’une exception non prévue",
            "Optimiser les performances des boucles contenant des appels lourds",
            "Ignorer automatiquement les erreurs de compilation du projet",
            "Forcer le moteur Unity à ignorer les erreurs pendant le Play Mode"
        ],
        correctAnswer: 0,
        explanation: "Un bloc try/catch permet d’intercepter une exception au moment où elle se produit, pour éviter que le script ne s’arrête brutalement. Cela permet de gérer les erreurs proprement, mais ce n’est pas une solution de performance.",
        category: "scripting",
        level: "associate"
    },
    {
        id: "scripting-19",
        question: "Pourquoi est-il déconseillé d’utiliser un bloc try/catch à l’intérieur de la méthode Update() ?",
        options: [
            "Parce que le coût en performance d’un try/catch vide est élevé, même sans exception",
            "Parce que Unity ne supporte pas les blocs try/catch dans les méthodes appelées chaque frame",
            "Parce que cela bloque l’exécution de FixedUpdate() tant que l’Update est actif",
            "Parce que les exceptions catchées dans Update() sont ignorées dans le Profiler"
        ],
        correctAnswer: 0,
        explanation: "Même sans exception levée, un try/catch introduit une surcharge notable car le runtime prépare une gestion d’erreur. Dans une méthode appelée chaque frame comme Update(), cela peut impacter sérieusement les performances.",
        category: "scripting",
        level: "associate"
    },
    {
        id: "scripting-20",
        question: "Que fait exactement l’appel SetActive(false) sur un GameObject dans Unity ?",
        options: [
            "Il rend le GameObject inactif dans la hiérarchie sans le détruire",
            "Il supprime le GameObject de la scène jusqu’à la prochaine frame",
            "Il désactive uniquement les scripts mais pas les composants de rendu",
            "Il masque visuellement le GameObject mais continue de le mettre à jour"
        ],
        correctAnswer: 0,
        explanation: "SetActive(false) rend un GameObject inactif dans la hiérarchie. Cela désactive également tous ses enfants, et empêche tous les MonoBehaviours associés de recevoir des callbacks comme Update.",
        category: "scripting",
        level: "associate"
    }












]