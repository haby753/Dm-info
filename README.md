# Feedbacks

Bravo très bonne réalisation des exercices.

Voici quelques points d'amélioration :
- Attention au format,  écrire directement avec l'extension js pour éviter la petite manipulation avec la vue raw.
- Revoir les chemins relatifs pour charger le css, les 2 liens css que tu charges ne sont pas bons dans ton html, j'ai corrigé
- Prendre l'habitude de coder en Anglais
- Sûrement un oubli il manque le formulaire et la photo
- Certains commentaires dans ton code ne sont pas nécessaires, ton code est suffisamment clair et compréhensible. Les commentaires uniquement lorsque c'est pertinent ou que le traitement sort un peu de l'ordinaire. Ils vont aider à la compréhension d'un collègue ou même de toi même lorsque tu reviendras dessus quelques temps après. Pour le CSS, les noms de tes classes suffisent à donner du sens et comprendre le style appliqué, tu peux donner plus de sens avec un nom de classe plus précis par exemple *block-left* à la place de *left* au lieu d'utiliser les commentaires
- Pour le nommage des fichiers et dossiers, jamais d'accent, d'espace ou majuscules, idéalement tout en minuscule avec une séparation des mots par les tirets 6 ou 8
- Créer des dossiers pour ranger le css, js, images, etc. dans des dossiers dédiés. Généralement on utilise un dossier racine */public/* ou */assets/* ou */src/* tels que :
.
├── css
│   ├── main.css
│   └── contact.css
├── img
│   ├── profile.jpg
│   └── logo.svg
├── js
├── index.html
└── README.md

## Résultats tests automatisés

- CV page accueil : 5/8
  - Manque la balise h1
  - Manque le lien vers *LinkedIn*
  - Manque la mise en page avec les flexbox
- CV page contact : 0/4, page de contact manquante
- Validation des structures du code :
  - HTML accueil : 1/1
  - HTML contact : 0/1 page manquante
  - CSS accueil : 1/1
  - CSS contact : 0/1, page manquante
- Algorithmes : **147/155 (chapeau, le score le plus élevé de la promo)**
  - algo 3 : arrondir le résultat final pour éviter d'avoir 110.0000000001 au lieu de 110
  - algo 4 : à revoir, les frontières des heures n'étaient pas précises, elles le sont maintenant, attention aux valeurs limite par exemple avec 24 ou 0 à traiter
  - algo10 : fibonacci traiter le cas ou max vaut 1
  - algo 14 : gérer le cas où il y a 2 mots qui ont la même taille