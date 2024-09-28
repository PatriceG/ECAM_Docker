---
# You can also start simply with 'default'
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: 
# some information about your slides (markdown enabled)

# https://sli.dev/custom/highlighters.html
highlighter: shiki
# https://sli.dev/guide/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/guide/syntax#mdc-syntax
mdc: true

#enable PDF generation
download: true

title: Docker - Crash Course
class: text-center
---

# Docker - Crash Course

ECAM Rennes

Patrice GODARD

<div class="w-75 h-px bg-gray absolute bottom-5 left-0 text-sm">Menu ici&nbsp;&nbsp;|&nbsp;&nbsp;← → pour se déplacer
</div>
<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
transition: fade-out
---

# Programme du Cours/TP

1. Qu'est-ce que Docker?
2. A quel besoin répond Docker?
3. Image vs Container
4. Les différents moyens de déployer des containers
5. Création d'une image via un Dockerfile
6. Instantiation d'un container

---
src: slides/main.md
---
