import{_ as l}from"./CodeBlockWrapper.vue_vue_type_script_setup_true_lang-JJVbAZvz.js";import{o as k,c as n,k as a,l as r,m as p,q as d,s as g,A as e,e as s,a6 as i}from"../modules/vue-BIeBYBLx.js";import{I as A}from"./default-D2C4euab.js";import{bL as t}from"../index-CMbpHyp1.js";import{p as D,u as y,f as o}from"./context-Cc2GRSkm.js";import"../modules/unplugin-icons-68hoU1La.js";import"../modules/shiki-0tBZ1x7C.js";const c=s("h1",null,"Exemple de Servlet (2)",-1),u=s("p",null,"Récupération de paramètres d’un formulaire",-1),m=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-java"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"/**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," * Méthode appelée à chaque envoi de requête HTTP (aiguillage)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," * "),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"@param"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," javax.servlet.http.HttpServletRequest"),s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," request")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," * "),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"@param"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," javax.servlet.http.HttpServletResponse"),s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," response")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," * "),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"@return"),s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," void")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"protected"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," void"),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," service"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"HttpServletRequest request"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    HttpServletResponse response"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," throws ServletException"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," IOException "),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"{")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"    // Test du paramètre")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},'    // (valeur saisie dans le champ "tache" du formulaire)')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"    if"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"request"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"getParameter"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"tache"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")."),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"equals"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"rechercher"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"))"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"        // appel d'une méthode définie ailleurs dans la classe")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"        this"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"rechercherClientParId"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"request"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," response"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"    else"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," if"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," (...)"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    ...")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")])])],-1),S={__name:"93",setup(B){return D(t),y(),(f,E)=>{const h=l;return k(),n(A,d(g(e(o)(e(t),92))),{default:a(()=>[c,u,r(h,p({},{ranges:[]}),{default:a(()=>[m]),_:1},16)]),_:1},16)}}};export{S as default};
