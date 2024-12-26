import{d as k,r as a,o as g,c as x,a as I,b as o,w,t as S,e as q,n as T}from"./main-B_crO3gg.js";import u from"./FormField-Dxk2WzuM.js";import d from"./FormTextarea-CTIkSQHy.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const $={class:T(["form-container"])},h={key:0,class:"toast success"},N={key:1,class:"toast error"},X=k({__name:"SAFDForm1",setup(e){const l=atob("aHR0cHM6Ly9kaXNjb3JkYXBwLmNvbS9hcGkvd2ViaG9va3MvMTMxOTc4MzcwMzU4MDM3NzEwOC9hU0hXenB2M0NCM2lIOFdzbFRXNEdhWDZqUXJmLS1RSktaYThFNWRHcTFXenctMURTelU3ellSVmFCTHpuQjVLSGswTwo="),r=a(""),n=a(""),i=a(""),t=a(""),m=a(""),s=a(""),p=a(""),v=a(""),c=a(""),V=a(""),b=a(""),D=a(""),C=a(""),U=a(""),f=a(""),M=a(""),y=a("");async function j(){const e={username:"Muhaddil Form Sender",avatar_url:"https://github.com/Muhaddil/RSSWikiPageCreator/blob/main/public/assets/other/MuhaddilOG.png?raw=true",content:`# Nueva Respuesta Formulario SAFD 1:\n\n    - **Nombre y Apellidos IC:** ${r.value}\n    - **Edad IC:** ${n.value}\n    - **Edad OOC:** ${i.value}\n    - **ID de Discord:** ${t.value}\n    - **URL de Steam:** ${m.value}\n    - **Tiempo Disponible Diario:** ${s.value}\n    - **Conocimiento del rol de SAFD:** ${p.value}\n    - **Experiencias en Otras Ciudades:** ${v.value}\n    - **¿Por qué deberíamos elegirte?:** ${c.value}\n    - **Ejemplo de /me:** ${V.value}\n    - **Ejemplo de /do:** ${b.value}\n    - **¿Como actuarias en un rescate?:** ${D.value}\n    - **Define DM:** ${C.value}\n    - **Define PG:** ${U.value}\n    - **Define Carjack:** ${f.value}`};try{if(!(await fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok)throw new Error("Error en la respuesta del servidor.");M.value="Mensaje enviado con éxito",y.value="",setTimeout((()=>{M.value=""}),5e3),r.value="",n.value="",i.value="",t.value="",m.value="",s.value="",p.value="",v.value="",c.value="",V.value="",b.value="",D.value="",C.value="",U.value="",f.value=""}catch(e){M.value="",y.value="Error al enviar el mensaje.",setTimeout((()=>{y.value=""}),5e3),console.error(e)}}return(e,l)=>(g(),x("div",$,[I("form",{onSubmit:w(j,["prevent"]),class:"form"},[o(u,{id:"name",label:"Nombre y Apellidos IC",type:"text",placeholder:"Ingresa tu nombre y apellidos IC",modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=e=>r.value=e),required:""},null,8,["modelValue"]),o(u,{id:"ageIC",label:"Edad IC",type:"text",placeholder:"Ingresa tu edad IC",modelValue:n.value,"onUpdate:modelValue":l[1]||(l[1]=e=>n.value=e),required:"",maxlength:2},null,8,["modelValue"]),o(u,{id:"ageOOC",label:"Edad OOC",type:"text",placeholder:"Ingresa tu edad OOC",modelValue:i.value,"onUpdate:modelValue":l[2]||(l[2]=e=>i.value=e),required:"",maxlength:2},null,8,["modelValue"]),o(u,{id:"discordId",label:"ID de Discord",type:"text",placeholder:"Ingresa tu ID de Discord",modelValue:t.value,"onUpdate:modelValue":l[3]||(l[3]=e=>t.value=e),required:""},null,8,["modelValue"]),o(u,{id:"steamUrl",label:"URL de Steam",type:"url",placeholder:"Ingresa tu URL de Steam",modelValue:m.value,"onUpdate:modelValue":l[4]||(l[4]=e=>m.value=e),required:""},null,8,["modelValue"]),o(u,{id:"dailyTime",label:"Tiempo Disponible Diario",type:"text",placeholder:"Ejemplo: 2 horas diarias",modelValue:s.value,"onUpdate:modelValue":l[5]||(l[5]=e=>s.value=e),required:""},null,8,["modelValue"]),o(d,{id:"emsRoleKnowledge",label:"Conocimiento del rol de SAFD",placeholder:"Describe tu conocimiento sobre el rol de SAFD",modelValue:p.value,"onUpdate:modelValue":l[6]||(l[6]=e=>p.value=e),required:""},null,8,["modelValue"]),o(d,{id:"previousExperiences",label:"Experiencias en Otras Ciudades",placeholder:"Describe tus experiencias previas",modelValue:v.value,"onUpdate:modelValue":l[7]||(l[7]=e=>v.value=e),required:""},null,8,["modelValue"]),o(d,{id:"whyChooseMe",label:"¿Por qué deberíamos elegirte?",placeholder:"Explica por qué deberíamos elegirte",modelValue:c.value,"onUpdate:modelValue":l[8]||(l[8]=e=>c.value=e),required:""},null,8,["modelValue"]),o(d,{id:"exampleMe",label:"Ejemplo de /me",placeholder:"Proporciona un ejemplo de /me",modelValue:V.value,"onUpdate:modelValue":l[9]||(l[9]=e=>V.value=e),required:""},null,8,["modelValue"]),o(d,{id:"exampleDo",label:"Ejemplo de /do",placeholder:"Proporciona un ejemplo de /do",modelValue:b.value,"onUpdate:modelValue":l[10]||(l[10]=e=>b.value=e),required:""},null,8,["modelValue"]),o(d,{id:"medicationForInfection",label:"¿Como actuarias en un rescate?",placeholder:"Describe el procedimiento completo",modelValue:D.value,"onUpdate:modelValue":l[11]||(l[11]=e=>D.value=e),required:""},null,8,["modelValue"]),o(d,{id:"defineDM",label:"Define DM",placeholder:"Define DM con tus palabras",modelValue:C.value,"onUpdate:modelValue":l[12]||(l[12]=e=>C.value=e),required:""},null,8,["modelValue"]),o(d,{id:"definePG",label:"Define PG",placeholder:"Define PG con tus palabras",modelValue:U.value,"onUpdate:modelValue":l[13]||(l[13]=e=>U.value=e),required:""},null,8,["modelValue"]),o(d,{id:"defineCarjack",label:"Define Carjack",placeholder:"Define Carjack con tus palabras",modelValue:f.value,"onUpdate:modelValue":l[14]||(l[14]=e=>f.value=e),required:""},null,8,["modelValue"]),l[15]||(l[15]=I("button",{type:"submit"},"Enviar",-1))],32),M.value?(g(),x("div",h,S(M.value),1)):q("",!0),y.value?(g(),x("div",N,S(y.value),1)):q("",!0)]))}});export{X as default};