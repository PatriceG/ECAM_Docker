import{o as n,c as r,k as s,q as o,s as i,A as a,e,a6 as t}from"../modules/vue-BIeBYBLx.js";import{I as u}from"./default-D2C4euab.js";import{bB as l}from"../index-CMbpHyp1.js";import{p,u as c,f as m}from"./context-Cc2GRSkm.js";import"../modules/shiki-0tBZ1x7C.js";const d=e("h1",null,"Structure d’une webapp",-1),b=e("ul",null,[e("li",null,[e("p",null,"Une webapp est packagée dans un format standard, le .war (web archive).")]),e("li",null,[e("p",null,"Ce format est utilisé pour le packaging et le déploiement mais rarement pour l’exécution (décompression automatique par le serveur d’application)")]),e("li",null,[e("p",null,"Structure définie par la spec servlets:")])],-1),f=e("pre",null,[t(""),e("b",null,"fichiers .html, .jsp, images, etc,"),t(` accessibles via un navigateur
`),e("b",null,"META-INF"),t(`
    `),e("b",null,"manifest.mf"),t(` (fichier décrivant le contenu du .war)
`),e("b",null,"WEB-INF"),t(` (on met dans ce répertoire tout ce qui 
ne DOIT PAS être visible depuis le web)
  `),e("b",null,"classes"),t(`   (toutes les classes de l'application ont comme base 
  ce répertoire, il est automatiquement ajouté au classpath)
  `),e("b",null,"lib"),t(` (répertoire contenant les .jar utilisés par l’application,
  automatiquement ajoutés au classpath lors du démarrage de l’application)
  `),e("b",null,"web.xml"),t(` (descripteur de déploiement de la webapp)
`)],-1),q={__name:"83",setup(_){return p(l),c(),(h,v)=>(n(),r(u,o(i(a(m)(a(l),82))),{default:s(()=>[d,b,f]),_:1},16))}};export{q as default};
