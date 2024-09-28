import{_ as n}from"./CodeBlockWrapper.vue_vue_type_script_setup_true_lang-JJVbAZvz.js";import{o as h,c as k,k as e,l as r,m as o,q as p,s as d,A as t,e as i,a6 as s}from"../modules/vue-BIeBYBLx.js";import{I as c}from"./default-D2C4euab.js";import{aI as a}from"../index-CMbpHyp1.js";import{p as g,u,f as y}from"./context-Cc2GRSkm.js";import"../modules/unplugin-icons-68hoU1La.js";import"../modules/shiki-0tBZ1x7C.js";const m=i("h1",null,"Les Collections",-1),B=i("p",null,"Fonctionnement de contains(Object o)",-1),A=i("ul",null,[i("li",null,[s("La méthode "),i("em",null,"contains(Object o)"),s(" invoque "),i("em",null,"equals()"),s(" sur tous les objets de la collection.")]),i("li",null,[s("L’implémentation de "),i("em",null,"equals()"),s(" n’est correcte que pour les types standards (String, Integer),… son implémentation par défaut dans "),i("em",null,"Object"),s(" compare les références en mémoire (et non l’identité des objets).")]),i("li",null,[s("Pour les types définis par l’utilisateur il est nécessaire de surcharger la méthode "),i("em",null,"equals()"),s(" si on souhaite pouvoir utiliser la métode "),i("em",null,"contains()"),s(" de Collection.")])],-1),D=i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-java"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"public"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," class"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," Point"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    integer x"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," integer y"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"public"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," boolean"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," equals"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"Object "),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"o"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"){")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"  Point"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," p"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ("),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"Point"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," o"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"  return"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ("),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"x "),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"=="),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," p"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"x"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," &&"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," y "),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"=="),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," p"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"y"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," //compare l'identité des deux Points et non leur référence mémoire.")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")])])],-1),F={__name:"26",setup(f){return g(a),u(),(_,C)=>{const l=n;return h(),k(c,p(d(t(y)(t(a),25))),{default:e(()=>[m,B,A,r(l,o({},{ranges:[]}),{default:e(()=>[D]),_:1},16)]),_:1},16)}}};export{F as default};
