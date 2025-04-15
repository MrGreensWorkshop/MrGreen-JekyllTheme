[[English](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README.md#readme)] [[日本語](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README-ja.md#readme)] [[Português do Brasil](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README-pt.md#readme)] [[français](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README-fr.md#readme)] [[简体中文](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README-zh.md#readme)] [[한국어](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README-ko.md#readme)] [[Türkçe](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README-tr.md#readme)] [Español mexicano]

## Mr. Green - Tema para Jekyll

<!-- readme -->

[<img src="https://img.shields.io/github/issues/MrGreensWorkshop/MrGreen-JekyllTheme" alt="GitHub issues" data-no-image-viewer>](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/issues)
[<img src="https://img.shields.io/github/forks/MrGreensWorkshop/MrGreen-JekyllTheme?style=flat" alt="GitHub forks" data-no-image-viewer>](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README.md#readme)
[<img src="https://img.shields.io/github/stars/MrGreensWorkshop/MrGreen-JekyllTheme?style=flat" alt="GitHub stars" data-no-image-viewer>](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/README.md#readme)
[<img src="https://img.shields.io/github/license/MrGreensWorkshop/MrGreen-JekyllTheme" alt="GitHub license" data-no-image-viewer>](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/LICENSE.txt)
[<img src="https://shields.io/badge/Github%20Sponsors-Support%20me-blue?logo=GitHub+Sponsors" alt="Apoyame on GitHub Sponsors" data-no-image-viewer>](https://github.com/sponsors/MrGreensWorkshop "Apoyame on GitHub Sponsors")
[<img src="https://shields.io/badge/Patreon-Support%20me-blue?logo=Patreon" alt="Sé mi Patreon" data-no-image-viewer>](https://patreon.com/MrGreensWorkshop "Sé mi Patreon")
[<img src="https://shields.io/badge/Ko--fi-Tip%20me-blue?logo=kofi" alt="Puedes darme una propina en Ko-fi" data-no-image-viewer>](https://ko-fi.com/MrGreensWorkshop "Puedes darme una propina en Ko-fi")

---

<div align="center">
  <img src="https://jekyll-theme-mrgreen-demo.mrgreensworkshop.com/assets/img/posts/mock1.jpg" max-height="500" alt="screen_mock">
  <br><br>
  <a href="https://jekyll-theme-mrgreen-demo.mrgreensworkshop.com" style="font-weight: bold;" >Da click aqui para ver la demo</a>
</div>


### Introducción

<!-- outline-start -->

[Mr. Green](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme) es un tema multilingüe generado con [Jekyll](https://jekyllrb.com/) y totalmente compatible con [GitHub Pages](https://pages.github.com/).

<!-- outline-end -->

Iba a hacer mi sitio web y pensé que si lo hacía como plantilla, podría compartirlo con la comunidad de código abierto. Por eso decidí construirlo como un tema. He trabajado muy duro para hacer esto posible, así que por favor considere [apoyar mi trabajo](#you-can-support-my-work). Gracias.

### Características

- Sitio web multilingüe
  - Inglés (predeterminado), japonés, portugués brasileño, francés, chino (simplificado), coreano, turco, español mexicano.
- Función de sugerencia de idioma recomendado
- Botón de navegación automática con icono, con opción para desactivar
- Diseños para `Inicio`, `Acerca de`, `Archivo`, `Lista de publicaciones`, `Enlaces`, `Proyectos` y más
- Opciones para cambiar el esquema de color (claro/oscuro)
- Agregador de opción de contacto automático
- Referencia automática de imágenes (no es necesario agregar la ruta completa; solo antepone : al nombre de la imagen)
- Carga diferida de imágenes (lazy load) y visor de imágenes integrado
- Pie de página atractivo con licencias de Creative Commons
- Tabla de contenido móvil en ventana modal para publicaciones
- Opciones para compartir publicaciones
- Listas de publicaciones por categoria o etiquetas
- Comentarios en publicaciones
  - [Giscus](https://giscus.app)
  - [Disqus](https://disqus.com)
- Paginación numerada seleccionable o carga infinita por desplazamiento
- Función de mapa del sitio
- Optimización para motores de búsqueda (SEO)
  - [Schema Markup](https://schema.org)
  - [Open Graph](https://ogp.me/)
  - [Twitter](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary)
- Analítica web (Google Analytics)
- Función de consentimiento de cookies
- Formulario de contacto (Google Forms)
- Función de búsqueda en el sitio
- Código comprimido para reducir el tamaño (`HTML` `JS` `SCSS`)
- Soporte para aplicaciones móviles
- Diseño adaptable a dispositivos móviles (probado en Android e iOS)
- Estructura de carpetas bien organizada para desarrolladores (probado en Chrome, Safari y FireFox)

### Instalación

#### GitHub pages

1. [Bifurca(Fork) el repositorio](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/fork).
2. Edita \_config.yml y cambie `url` como los cambios a continuación y suba los cambios (push).

   ```yaml
   url: "https:/tu_nombre_de_usuario_de_github.github.io"
   ```

3. Cambia el nombre del repositorio `tu_nombre_de_usuario_de_github.github.io`.
4. Revisa el estado de despliegue (Deploy) en la pestaña 'Acciones(`Actions`)" del repositorio.
5. Cuando se vuelva verde, tu sitio está en funcionamiento en `https://tu_nombre_de_usuario_de_github.github.io`.

#### Compilación local

1. [Instala Jekyll](https://jekyllrb.com/docs/installation/) a tu sistema operativo.
2. Clona o [descarga](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/releases/latest) el repositorio. Luego en la terminal o linea de comandos navega a la carpeta descargada, y ejecuta el comando `bundle install`.
3. Compila usando el comando `bundle exec jekyll serve --watch --host 0.0.0.0 --safe`,
    - El parametro `--host 0.0.0.0` permite acceder al sitio desde otros dispositivos en la misma red
    - El parametro `--safe` garantiza que no se cargue ningún plugin de terceros (recomendado para el desarrollo con GitHub Pages).
4. Su sitio estará disponible en la dirección `0.0.0.0:4000/.

### Documentación

Revisa [la playlist de tutoriales del tema de Mr. Green](https://www.youtube.com/playlist?list=PLAymxPbYHgl-fFy5can7uZBMJtFWVcphD) en YouTube.

### Créditos

Quiero agradecer a estos proyectos que me dieron la oportunidad de construir mi sitio web..

- [Jekyll](https://jekyllrb.com/) es un generador de sitios estático. Toma texto escrito en su lenguaje de marcado favorito y utiliza diseños para crear un sitio web estático. Puede ajustar el aspecto y la sensación del sitio, las URL, los datos que se muestran en la página y más. Es un proyecto maravilloso que es mantenido por voluntarios.

- [GitHub Pages](https://pages.github.com/) Almacenado directamente desde su repositorio de GitHub. Simplemente suba (push) los cambios y el sitio se generará automáticamente.

Algunos de los sitios que encontré útiles mientras trabajaba en este proyecto. [Página de enlaces](https://jekyll-theme-mrgreen-demo.mrgreensworkshop.com/es/tabs/links.html).

### Puedes apoyar a mi trabajo

La creación de proyectos que comienzan de la nada lleva una gran cantidad de tiempo. Apreciaría mucho si consideras apoyarme para que pueda continuar proyectos como este y crear nuevos contenidos para todos.

- Puedes ser uno de mis [GitHub Sponsors](https://github.com/sponsors/MrGreensWorkshop "Apoyame on GitHub Sponsors") (mensual o una vez)
- Puedes ser uno de mis[Patreons](https://patreon.com/MrGreensWorkshop "Sé mi Patreon") (mensual)
- Puedes darme propina a través de [Ko-fi](https://ko-fi.com/MrGreensWorkshop "Puedes darme una propina en Ko-fi") (una vez)

### Contribuir

Pull Requests son bienvenidas. Consulte las instrucciones en las plantillas de Issues y de Pull Request.

### Colaboradores

Gracias por sus contribuciones!

- Traducción al Portugues brasileño por [Vitor DallAcqua](https://github.com/fandangos).
- Correcciones de traducción al Francés por [Jean-Philippe Morissette](https://github.com/JPMorissette).
- Traducción al Chino por [fairycn](https://github.com/fairycn).
- Traducción al Turco por [Onur Ergünay](https://github.com/onurergunay).
- Traducción al Español mexicano por [Manuel Nájera](https://github.com/manuelnajera).

### Licencia

Como dice en la [licencia MIT](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/LICENSE.txt), puedes usar este tema en cualquier lugar siempre que incluya el aviso de licencia y derechos de autor.

`Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com`

Por favor, agregue el enlace a mi página o deje el enlace "Pwrd by Mr. Green" en el pie de página para que pueda obtener crédito por mi trabajo.

Gracias!

### Otras licencias

El tema de Mr. Green Jekyll incorpora las bibliotecas mencionadas a continuación. Sin estas bibliotecas, este proyecto no podría ser posible.

| Libreria                              | archivo |
| :----------------------------------- | ---- |
| [jQuery v3.6.0](https://github.com/jquery/jquery/tree/3.6.0), Copyright [OpenJS Foundation](https://openjsf.org) and other contributors. jQuery is distributed under the terms of the MIT License. | [jquery-3.6.0.min.js](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/js/jquery-3.6.0.min.js) |
| [Bootstrap v3.3.7](https://github.com/twbs/bootstrap/tree/v3.3.7), Copyright (c) 2011-2016 Twitter, Inc. Bootstrap is distributed under the terms of the MIT License. | [bootstrap.min.js](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/js/bootstrap.min.js), [bootstrap.min.css](assets/css/bootstrap.min.css) |
| [Bootstrap Table of Contents v0.4.1](https://github.com/afeld/bootstrap-toc/tree/v0.4.1), Copyright (c) 2015 Aidan Feldman. Bootstrap Table of Contents is distributed under the terms of the MIT License. | [bootstrap-toc.min.js](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/js/bootstrap-toc.min.js), [bootstrap-toc.min.css](assets/css/bootstrap-toc.min.css) |
| [Font Awesome v4.7.0](https://github.com/FortAwesome/Font-Awesome/tree/v4.7.0), Copyright (c) 2017 Dave Gandy. The Font Awesome font is distributed under the terms of the [SIL OFL 1.1](http://scripts.sil.org/OFL). Font Awesome CSS, LESS, and Sass files are distributed under the terms of the [MIT License](https://opensource.org/licenses/mit-license.html). | [font-awesome.min.css](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/css/font-awesome.min.css), [FontAwesome](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/fonts/) |
| [Lozad.js v1.16.0](https://github.com/ApoorvSaxena/lozad.js/tree/v1.16.0), Copyright (c) 2017 Apoorv Saxena. Lozad.js is distributed under the terms of the MIT License. | [lozad.min.js](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/js/lozad.min.js) |
| [Magnific Popup v1.1.0](https://github.com/dimsemenov/Magnific-Popup/tree/1.1.0), Copyright (c) 2014-2016 Dmitry Semenov, http://dimsemenov.com. Magnific Popup is distributed under the terms of the MIT License. | [jquery.magnific-popup.min.js](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/js/jquery.magnific-popup.min.js), [magnific-popup.css](assets/css/magnific-popup.css) |
| [Simple-Jekyll-Search v1.9.2](https://github.com/christian-fei/Simple-Jekyll-Search/tree/v1.9.2), Copyright (c) 2015 Christian Fei. Simple-Jekyll-Search is distributed under the terms of the MIT License. | [simple-jekyll-search-1.9.2.min.js](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/assets/js/simple-jekyll-search-1.9.2.min.js) |
| [Compress HTML in Jekyll v3.1.0](https://github.com/penibelst/jekyll-compress-html/tree/v3.1.0), Copyright (c) 2014 Anatol Broder. Compress HTML in Jekyll is distributed under the terms of the MIT License. | [compress.liquid](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme/blob/main/_layouts/util/compress.liquid) |

[Mr. Green - Tema para Jekyll](https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
