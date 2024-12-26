import{d as w,r as a,o as E,c as g,a as I,b as o,w as T,t as S,e as q,n as $}from"./main-B_crO3gg.js";import u from"./FormField-Dxk2WzuM.js";import d from"./FormTextarea-CTIkSQHy.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const F={class:$(["form-container"])},R={key:0,class:"toast success"},h={key:1,class:"toast error"},z=w({__name:"Form1",setup(e){const l=atob("aHR0cHM6Ly9kaXNjb3JkYXBwLmNvbS9hcGkvd2ViaG9va3MvMTMxOTc4MzcwMzU4MDM3NzEwOC9hU0hXenB2M0NCM2lIOFdzbFRXNEdhWDZqUXJmLS1RSktaYThFNWRHcTFXenctMURTelU3ellSVmFCTHpuQjVLSGswTwo="),r=a(""),n=a(""),i=a(""),t=a(""),m=a(""),s=a(""),p=a(""),v=a(""),c=a(""),V=a(""),b=a(""),D=a(""),f=a(""),C=a(""),M=a(""),U=a(""),y=a("");async function j(){const e={username:"Muhaddil Form Sender",avatar_url:"https://github.com/Muhaddil/RSSWikiPageCreator/blob/main/public/assets/other/MuhaddilOG.png?raw=true",content:`# Nueva Respuesta Formulario SAMS 1:\n\n    - **Nombre y Apellidos IC:** ${r.value}\n    - **Edad IC:** ${n.value}\n    - **Edad OOC:** ${i.value}\n    - **ID de Discord:** ${t.value}\n    - **URL de Steam:** ${m.value}\n    - **Tiempo Disponible Diario:** ${s.value}\n    - **Conocimiento del Rol de EMS:** ${p.value}\n    - **Experiencias en Otras Ciudades:** ${v.value}\n    - **¿Por qué deberíamos elegirte?:** ${c.value}\n    - **Ejemplo de /me:** ${V.value}\n    - **Ejemplo de /do:** ${b.value}\n    - **¿Qué medicamentos usarías para una infección?:** ${D.value}\n    - **Define DM:** ${f.value}\n    - **Define PG:** ${C.value}\n    - **Define Carjack:** ${M.value}`};try{if(!(await fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok)throw new Error("Error en la respuesta del servidor.");U.value="Mensaje enviado con éxito",y.value="",setTimeout((()=>{U.value=""}),5e3),r.value="",n.value="",i.value="",t.value="",m.value="",s.value="",p.value="",v.value="",c.value="",V.value="",b.value="",D.value="",f.value="",C.value="",M.value=""}catch(e){U.value="",y.value="Error al enviar el mensaje.",setTimeout((()=>{y.value=""}),5e3),console.error(e)}}return(e,a)=>(E(),g("div",F,[I("form",{onSubmit:T(j,["prevent"]),class:"form"},[o(u,{id:"name",label:"Nombre y Apellidos IC",type:"text",placeholder:"Ingresa tu nombre y apellidos IC",modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=e=>r.value=e),required:""},null,8,["modelValue"]),o(u,{id:"ageIC",label:"Edad IC",type:"text",placeholder:"Ingresa tu edad IC",modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=e=>n.value=e),required:"",maxlength:2},null,8,["modelValue"]),o(u,{id:"ageOOC",label:"Edad OOC",type:"text",placeholder:"Ingresa tu edad OOC",modelValue:i.value,"onUpdate:modelValue":a[2]||(a[2]=e=>i.value=e),required:"",maxlength:2},null,8,["modelValue"]),o(u,{id:"discordId",label:"ID de Discord",type:"text",placeholder:"Ingresa tu ID de Discord",modelValue:t.value,"onUpdate:modelValue":a[3]||(a[3]=e=>t.value=e),required:""},null,8,["modelValue"]),o(u,{id:"steamUrl",label:"URL de Steam",type:"url",placeholder:"Ingresa tu URL de Steam",modelValue:m.value,"onUpdate:modelValue":a[4]||(a[4]=e=>m.value=e),required:""},null,8,["modelValue"]),o(u,{id:"dailyTime",label:"Tiempo Disponible Diario",type:"text",placeholder:"Ejemplo: 2 horas diarias",modelValue:s.value,"onUpdate:modelValue":a[5]||(a[5]=e=>s.value=e),required:""},null,8,["modelValue"]),o(d,{id:"emsRoleKnowledge",label:"Conocimiento del Rol de EMS",placeholder:"Describe tu conocimiento sobre el rol de EMS",modelValue:p.value,"onUpdate:modelValue":a[6]||(a[6]=e=>p.value=e),required:""},null,8,["modelValue"]),o(d,{id:"previousExperiences",label:"Experiencias en Otras Ciudades",placeholder:"Describe tus experiencias previas",modelValue:v.value,"onUpdate:modelValue":a[7]||(a[7]=e=>v.value=e),required:""},null,8,["modelValue"]),o(d,{id:"whyChooseMe",label:"¿Por qué deberíamos elegirte?",placeholder:"Explica por qué deberíamos elegirte",modelValue:c.value,"onUpdate:modelValue":a[8]||(a[8]=e=>c.value=e),required:""},null,8,["modelValue"]),o(d,{id:"exampleMe",label:"Ejemplo de /me",placeholder:"Proporciona un ejemplo de /me",modelValue:V.value,"onUpdate:modelValue":a[9]||(a[9]=e=>V.value=e),required:""},null,8,["modelValue"]),o(d,{id:"exampleDo",label:"Ejemplo de /do",placeholder:"Proporciona un ejemplo de /do",modelValue:b.value,"onUpdate:modelValue":a[10]||(a[10]=e=>b.value=e),required:""},null,8,["modelValue"]),o(d,{id:"medicationForInfection",label:"¿Qué medicamentos usarías para una infección?",placeholder:"Describe los medicamentos que usarías",modelValue:D.value,"onUpdate:modelValue":a[11]||(a[11]=e=>D.value=e),required:""},null,8,["modelValue"]),o(d,{id:"defineDM",label:"Define DM",placeholder:"Define DM con tus palabras",modelValue:f.value,"onUpdate:modelValue":a[12]||(a[12]=e=>f.value=e),required:""},null,8,["modelValue"]),o(d,{id:"definePG",label:"Define PG",placeholder:"Define PG con tus palabras",modelValue:C.value,"onUpdate:modelValue":a[13]||(a[13]=e=>C.value=e),required:""},null,8,["modelValue"]),o(d,{id:"defineCarjack",label:"Define Carjack",placeholder:"Define Carjack con tus palabras",modelValue:M.value,"onUpdate:modelValue":a[14]||(a[14]=e=>M.value=e),required:""},null,8,["modelValue"]),a[15]||(a[15]=I("button",{type:"submit"},"Enviar",-1))],32),U.value?(E(),g("div",R,S(U.value),1)):q("",!0),y.value?(E(),g("div",h,S(y.value),1)):q("",!0)]))}});export{z as default};