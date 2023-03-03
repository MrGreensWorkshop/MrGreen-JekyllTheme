[[English](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README.md#readme)] [[日本語](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README-jp.md#readme)] [[Português do Brasil](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README-pt.md#readme)] [français]

## Thème de Mr. Green Jekyll

<!-- readme -->

[<img src="https://img.shields.io/github/issues/MrGreensWorkshop/MrGreen-JekyllTheme" alt="GitHub issues" data-no-image-viewer>](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/issues)
[<img src="https://img.shields.io/github/forks/MrGreensWorkshop/MrGreen-JekyllTheme" alt="GitHub forks" data-no-image-viewer>](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README.md#readme)
[<img src="https://img.shields.io/github/stars/MrGreensWorkshop/MrGreen-JekyllTheme" alt="GitHub stars" data-no-image-viewer>](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README.md#readme)
[<img src="https://img.shields.io/github/license/MrGreensWorkshop/MrGreen-JekyllTheme" alt="GitHub license" data-no-image-viewer>](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/LICENSE.txt)
[<img src="https://shields.io/badge/Github%20Sponsors-Support%20me-blue?logo=GitHub+Sponsors" alt="Soutenez-moi sur GitHub Sponsors" data-no-image-viewer>](https://github.com/sponsors/MrGreensWorkshop "Soutenez-moi sur GitHub Sponsors")
[<img src="https://shields.io/badge/Patreon-Support%20me-blue?logo=Patreon" alt="Soyez un de mes patreons" data-no-image-viewer>](https://patreon.com/MrGreensWorkshop "Soyez un de mes patreons")
[<img src="https://shields.io/badge/Ko--fi-Tip%20me-blue?logo=kofi" alt="Donnez-moi un pourboire via Ko-fi" data-no-image-viewer>](https://ko-fi.com/MrGreensWorkshop "Donnez-moi un pourboire via Ko-fi")

---

<div align="center">
  <img src="https://jekyll-theme-mrgreen-demo.mrgreensworkshop.com/assets/img/posts/mock1.jpg" max-height="500" alt="screen_mock">
  <br><br>
  <a href="https://jekyll-theme-mrgreen-demo.mrgreensworkshop.com" style="font-weight: bold;" >Cliquez ici pour voir un exemple en ligne</a>
</div>


### Introduction

<!-- outline-start -->

[Mr. Green](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme) est un thème multilingue généré avec [Jekyll](https://jekyllrb.com/) et entièrement compatible avec les [pages GitHub](https://pages.github.com/).

<!-- outline-end -->

J'allais créer mon site Web et j'ai pensé que si je le faisais en tant que gabarit, je pourrais le partager avec la communauté open source. C'est pourquoi j'ai décidé de le construire comme thème. J'ai travaillé si dur pour rendre cela possible, alors s'il vous plaît, pensez à [soutenir mon travail](#vous-pouvez-soutenir-mon-travail). Merci.

### Caractéristiques

- Site Internet multilingue
  - Anglais (par défaut), japonais, portugais brésilien, français
- Fonction de suggestion de langue
- Ajout de boutons de navigation automatique avec icône, options d'activation et de désactivation
- Mises en page pour `Home`, `About`, `Archives`, `Post-list`, `Links`, `Projects` et plus
- Options de changement de schéma de couleurs (lumière sombre)
- Ajout d'option de contact automatique
- Référentiel d'image automatique (inutile d'ajouter un chemin complet pour les images. Ajoutez simplement `:` devant.)
- Chargement différé d'images, visionneuse d'images
- Cool Footer avec licence Creative Commons
- Boîte modale de table des matières mobile pour les publications
- Options de partage de publication
- Liste des publications par catégorie ou étiquettes
- Commentaires pour les publications
  - [Giscus](https://giscus.app)
  - [Disqus](https://disqus.com)
- Sélection entre une pagination numérotée ou un chargement via défilement
- Fonctionnalité de plan de site
- Optimisation des moteurs de recherche (SEO)
  - [Schema Markup](https://schema.org)
  - [Open Graph](https://ogp.me/)
  - [Twitter](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary)
- Analytique (Google Analytics)
- Fonctionnalité de consentement aux cookies
- Fonctionnalité de formulaire de contact (Google Forms)
- Fonction de recherche sur le site
- Compression de code pour faible encombrement (`HTML` `JS` `SCSS`)
- Prise en charge des applications mobiles
- Compatible avec les appareils mobiles (testé sur Android et IOS)
- Structure de dossiers bien organisée pour les développeurs (testé sur Chrome, Safari, FireFox)

### Installation

#### Pages GitHub

1. [Dupliquer le dépôt](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/fork).
1. Modifiez \_config.yml et modifiez `url` comme ci-dessous et appuyez sur les modifications.

   ```yaml
   url: "https://your_github_user_name.github.io"
   ```

1. Renommez le nom du dépôt en `your_github_user_name.github.io`.
1. Vérifiez l'état du déploiement dans l'onglet `Actions` de votre dépot.
1. Lorsqu'il passe au vert, votre site est opérationnel à `https://your_github_user_name.github.io`.

#### Construction locale

1. [Installez Jekyll](https://jekyllrb.com/docs/installation/) sur votre système d'exploitation.
1. Clonez ou [téléchargez](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/releases/latest) le dépot, accédez à votre répertoire dans l'invite de commande puis exécuter la commande `bundle install`.
1. Construire votre site à l'aide de la commande `bundle exec jekyll serve --watch --host 0.0.0.0 --safe`,
    - avec le paramètre `--host 0.0.0.0`, vous pouvez accéder au serveur Web à partir de votre réseau local.
    - avec le paramètre`--safe`, vous pouvez vous assurer qu'aucun plugin tiers n'a été ajouté. (pour le développement de pages GitHub)
1. Votre page sera opérationnelle à l'adresse `0.0.0.0:4000/`.

### Documentation

Découvrez la [liste de lecture des didacticiels sur le thème de Mr. Green](https://www.youtube.com/playlist?list=PLAymxPbYHgl-fFy5can7uZBMJtFWVcphD) sur YouTube.

### Crédits

Je tiens à remercier ces projets qui m'ont donné l'opportunité de construire mon site web.

- [Jekyll](https://jekyllrb.com/) est un générateur de site statique. Il prend du texte écrit dans votre langage de balisage préféré et utilise des mises en page pour créer un site Web statique. Vous pouvez modifier l'apparence du site, les URL, les données affichées sur la page, etc. C'est un projet merveilleux qui est maintenu par des bénévoles.

- [Pages GitHub](https://pages.github.com/) hébergées directement depuis votre référentiel GitHub. Appuyez simplement sur les modifications et le site sera automatiquement généré.

Certains des sites que je trouve utiles pendant que je travaille sur ce projet. [Pages de liens](https://jekyll-theme-mrgreen-demo.mrgreensworkshop.com/tabs/links.html).

### Vous pouvez soutenir mon travail

Créer des projets à partir de rien prend beaucoup de temps. Je serais reconnaissant que vous envisagiez me soutenir afin que je puisse continuer des projets comme celui-ci et  que je puisse créer de nouveaux contenus pour tout le monde.

- Vous pouvez être l'un de mes [sponsors GitHub](https://github.com/sponsors/MrGreensWorkshop "Soutenez-moi sur GitHub Sponsors") (mensuel ou ponctuel)
- Vous pouvez être l'un de mes [Patreons](https://patreon.com/MrGreensWorkshop "Soyez un de mes patreons") (mensuel)
- Vous pouvez me donner un pourboire via [Ko-fi](https://ko-fi.com/MrGreensWorkshop "Donnez-moi un pourboire via Ko-fi") (une fois)

### Contribuer

Les demandes de tirage (pull requests) sont les bienvenues. Veuillez vérifier les instructions dans les modèles de problèmes et de demande de tirage.

### Contributeurs

Merci pour vos contributions!

- Traduction portugaise brésilienne par [Vitor DallAcqua](https://github.com/fandangos).
- Corrections de la traduction française par [Jean-Philippe Morissette](https://github.com/JPMorissette).

### Licence

Comme il est indiqué dans la [licence MIT](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/LICENSE.txt), vous pouvez utiliser ce thème n'importe où tant que vous incluez la licence et l'avis de droit d'auteur.

`Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com`

Veuillez ajouter un lien vers ma page ou laisser le lien "Pwrd by Mr. Green" dans le pied de page afin que je puisse obtenir du crédit pour mon travail.

Merci!

### Autres licences

Thème de Mr. Green Jekyll intègre les bibliothèques écrites ci-dessous. Sans ces bibliothèques, je ne pourrais pas rendre ce projet possible.

| Bibliothèque                         | fichier |
| :----------------------------------- | ------- |
| [jQuery v3.6.0](https://github.com/jquery/jquery/tree/3.6.0), Copyright [OpenJS Foundation](https://openjsf.org) et autres contributeurs. jQuery est distribué sous les termes de la licence MIT. | [jquery-3.6.0.min.js](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/js/jquery-3.6.0.min.js) |
| [Bootstrap v3.3.7](https://github.com/twbs/bootstrap/tree/v3.3.7), Copyright (c) 2011-2016 Twitter, Inc. Bootstrap est distribué selon les termes de la licence MIT. | [bootstrap.min.js](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/js/bootstrap.min.js), [bootstrap.min.css](assets/css/bootstrap.min.css) |
| [Bootstrap Table of Contents v0.4.1](https://github.com/afeld/bootstrap-toc/tree/v0.4.1), Copyright (c) 2015 Aidan Feldman Aidan Feldman. La table des matières Bootstrap est distribuée selon les termes de la licence MIT. | [bootstrap-toc.min.js](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/js/bootstrap-toc.min.js), [bootstrap-toc.min.css](assets/css/bootstrap-toc.min.css) |
| [Font Awesome v4.7.0](https://github.com/FortAwesome/Font-Awesome/tree/v4.7.0), Copyright (c) 2017 Dave Gandy. La police Font Awesome est distribuée selon les termes de la SIL OFL 1.1 . Les fichiers CSS, LESS et Sass de Font Awesome sont distribués selon les termes de la [licence MIT](https://opensource.org/licenses/mit-license.html). | [font-awesome.min.css](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/css/font-awesome.min.css), [FontAwesome](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/fonts/) |
| [Lozad.js v1.16.0](https://github.com/ApoorvSaxena/lozad.js/tree/v1.16.0), Copyright (c) 2017 Apoorv Saxena. Lozad.js est distribué sous les termes de la licence MIT. | [lozad.min.js](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/js/lozad.min.js) |
| [Magnific Popup v1.1.0](https://github.com/dimsemenov/Magnific-Popup/tree/1.1.0), Copyright (c) 2014-2016 Dmitry Semenov, http://dimsemenov.com. Magnific Popup est distribué sous les termes de la licence MIT. | [jquery.magnific-popup.min.js](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/js/jquery.magnific-popup.min.js), [magnific-popup.css](assets/css/magnific-popup.css) |
| [Simple-Jekyll-Search v1.9.2](https://github.com/christian-fei/Simple-Jekyll-Search/tree/v1.9.2), Copyright (c) 2015 Christian Fei. Simple-Jekyll-Search est distribué sous les termes de la licence MIT. | [simple-jekyll-search-1.9.2.min.js](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/js/simple-jekyll-search-1.9.2.min.js) |
| [Compress HTML in Jekyll v3.1.0](https://github.com/penibelst/jekyll-compress-html/tree/v3.1.0), Copyright (c) 2014 Anatol Broder. Compress HTML in Jekyll est distribué sous les termes de la licence MIT. | [compress.liquid](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/_layouts/util/compress.liquid) |

[Thème de Mr. Green Jekyll](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
