import{d as $,r as a,o as S,c as x,a as I,b as o,w as h,t as E,e as F}from"./main-BVGA3LDV.js";import{F as r,a as u}from"./FormTextarea-Bs_jxpWl.js";const N={class:"form-container"},k={key:0,class:"toast success"},R={key:1,class:"toast error"},X=$({__name:"SAFDForm3",setup(e){const l=atob("aHR0cHM6Ly9kaXNjb3JkYXBwLmNvbS9hcGkvd2ViaG9va3MvMTMxOTc4MzcwMzU4MDM3NzEwOC9hU0hXenB2M0NCM2lIOFdzbFRXNEdhWDZqUXJmLS1RSktaYThFNWRHcTFXenctMURTelU3ellSVmFCTHpuQjVLSGswTwo="),d=a(""),n=a(""),i=a(""),t=a(""),s=a(""),m=a(""),v=a(""),p=a(""),c=a(""),V=a(""),b=a(""),D=a(""),C=a(""),U=a(""),y=a(""),f=a(""),q=a("");async function g(){const e={username:"Muhaddil Form Sender",avatar_url:"https://github.com/Muhaddil/simple-form-sender/blob/main/src/images/muha2.png?raw=true",content:`# Nueva Respuesta Formulario SAFD 3:\n\n    - **Nombre y Apellidos IC:** ${d.value}\n    - **Edad IC:** ${n.value}\n    - **Edad OOC:** ${i.value}\n    - **ID de Discord:** ${t.value}\n    - **URL de Steam:** ${s.value}\n    - **Tiempo Disponible Diario:** ${m.value}\n    - **Conocimiento del rol de SAFD:** ${v.value}\n    - **Experiencias en Otras Ciudades:** ${p.value}\n    - **Ejemplo de /me:** ${c.value}\n    - **Ejemplo de /do:** ${V.value}\n    - **¿Qué usarías para tratar una incisión leve?:** ${b.value}\n    - **Define con tus palabras un PKT:** ${D.value}\n    - **Define con tus palabras un CK:** ${C.value}\n    - **¿Puedes robar aeronaves?:** ${U.value}\n    - **¿Cuál es el triaje que un SAMS debe seguir a la hora de atender pacientes?:** ${y.value}`};try{await async function(e){const a=e.content.match(new RegExp(".{1,2000}","g"))||[];for(const u of a)if(!(await fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,content:u})})).ok)throw new Error("Error en la respuesta del servidor.")}(e),f.value="Mensaje enviado con éxito",q.value="",setTimeout((()=>{f.value=""}),5e3),d.value="",n.value="",i.value="",t.value="",s.value="",m.value="",v.value="",p.value="",c.value="",V.value="",b.value="",D.value="",C.value="",U.value="",y.value=""}catch(e){f.value="",q.value="Error al enviar el mensaje.",setTimeout((()=>{q.value=""}),5e3),console.error(e)}}return(e,a)=>(S(),x("div",N,[I("form",{onSubmit:h(g,["prevent"])},[o(r,{id:"name",label:"Nombre y Apellidos IC",type:"text",placeholder:"Ingresa tu nombre y apellidos IC",modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=e=>d.value=e),required:""},null,8,["modelValue"]),o(r,{id:"ageIC",label:"Edad IC",type:"text",placeholder:"Ingresa tu edad IC",modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=e=>n.value=e),required:"",maxlength:2},null,8,["modelValue"]),o(r,{id:"ageOOC",label:"Edad OOC",type:"text",placeholder:"Ingresa tu edad OOC",modelValue:i.value,"onUpdate:modelValue":a[2]||(a[2]=e=>i.value=e),required:"",maxlength:2},null,8,["modelValue"]),o(r,{id:"discordId",label:"ID de Discord",type:"text",placeholder:"Ingresa tu ID de Discord",modelValue:t.value,"onUpdate:modelValue":a[3]||(a[3]=e=>t.value=e),required:""},null,8,["modelValue"]),o(r,{id:"steamUrl",label:"URL de Steam",type:"url",placeholder:"Ingresa tu URL de Steam",modelValue:s.value,"onUpdate:modelValue":a[4]||(a[4]=e=>s.value=e),required:""},null,8,["modelValue"]),o(r,{id:"dailyTime",label:"Tiempo Disponible Diario",type:"text",placeholder:"Ejemplo: 2 horas diarias",modelValue:m.value,"onUpdate:modelValue":a[5]||(a[5]=e=>m.value=e),required:""},null,8,["modelValue"]),o(u,{id:"emsRoleKnowledge",label:"Conocimiento del rol de SAFD",placeholder:"Describe tu conocimiento sobre el rol de SAFD",modelValue:v.value,"onUpdate:modelValue":a[6]||(a[6]=e=>v.value=e),required:""},null,8,["modelValue"]),o(u,{id:"previousExperiences",label:"Experiencias en Otras Ciudades",placeholder:"Describe tus experiencias previas",modelValue:p.value,"onUpdate:modelValue":a[7]||(a[7]=e=>p.value=e),required:""},null,8,["modelValue"]),o(u,{id:"exampleMe",label:"Ejemplo de /me",placeholder:"Proporciona un ejemplo de /me",modelValue:c.value,"onUpdate:modelValue":a[8]||(a[8]=e=>c.value=e),required:""},null,8,["modelValue"]),o(u,{id:"exampleDo",label:"Ejemplo de /do",placeholder:"Proporciona un ejemplo de /do",modelValue:V.value,"onUpdate:modelValue":a[9]||(a[9]=e=>V.value=e),required:""},null,8,["modelValue"]),o(u,{id:"treatmentForInjury",label:"¿Qué usarías para tratar una incisión leve?",placeholder:"Describe qué usarías para tratar una incisión leve",modelValue:b.value,"onUpdate:modelValue":a[10]||(a[10]=e=>b.value=e),required:""},null,8,["modelValue"]),o(u,{id:"defineEnvironment",label:"Define con tus palabras un PKT",placeholder:"Define con tus palabras un PKT",modelValue:D.value,"onUpdate:modelValue":a[11]||(a[11]=e=>D.value=e),required:""},null,8,["modelValue"]),o(u,{id:"canUseVoiceMods",label:"Define con tus palabras un CK",placeholder:"Define con tus palabras un CK",modelValue:C.value,"onUpdate:modelValue":a[12]||(a[12]=e=>C.value=e),required:""},null,8,["modelValue"]),o(u,{id:"defineFairPlay",label:"¿Puedes robar aeronaves?",placeholder:"Indica si puedes robar aeronaves",modelValue:U.value,"onUpdate:modelValue":a[13]||(a[13]=e=>U.value=e),required:""},null,8,["modelValue"]),o(u,{id:"pseudoICTerm",label:"¿Cuál es el triaje que un SAMS debe seguir a la hora de atender pacientes?",placeholder:"Describe el triaje que un SAMS debe seguir",modelValue:y.value,"onUpdate:modelValue":a[14]||(a[14]=e=>y.value=e),required:""},null,8,["modelValue"]),a[15]||(a[15]=I("button",{type:"submit"},"Enviar",-1))],32),f.value?(S(),x("div",k,E(f.value),1)):F("",!0),q.value?(S(),x("div",R,E(q.value),1)):F("",!0)]))}});export{X as default};
