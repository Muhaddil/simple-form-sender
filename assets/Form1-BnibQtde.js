import{d as R,r as a,o as I,c as S,a as q,b as o,w as P,t as j,e as O,n as L}from"./main-BE-FXAMP.js";import{F as r,a as u}from"./FormTextarea-Be8Cs1yy.js";const G={class:L(["form-container"])},B={key:0,class:"toast success"},X={key:1,class:"toast error"},J=R({__name:"Form1",setup(e){const l=atob("aHR0cHM6Ly9kaXNjb3JkYXBwLmNvbS9hcGkvd2ViaG9va3MvMTMxOTc4MzcwMzU4MDM3NzEwOC9hU0hXenB2M0NCM2lIOFdzbFRXNEdhWDZqUXJmLS1RSktaYThFNWRHcTFXenctMURTelU3ellSVmFCTHpuQjVLSGswTwo="),d=a(""),n=a(""),i=a(""),t=a(""),m=a(""),s=a(""),c=a(""),v=a(""),p=a(""),V=a(""),b=a(""),h=a(""),f=a(""),D=a(""),y=a(""),C=a(""),E=a("");async function M(){const e=[`- **Nombre y Apellidos IC:** ${d.value}`,`- **Edad IC:** ${n.value}`,`- **Edad OOC:** ${i.value}`,`- **ID de Discord:** ${t.value}`,`- **URL de Steam:** ${m.value}`,`- **Tiempo Disponible Diario:** ${s.value}`,`- **Conocimiento del Rol de EMS:** ${c.value}`,`- **Experiencias en Otras Ciudades:** ${v.value}`,`- **Ejemplo de /me:** ${V.value}`,`- **Ejemplo de /do:** ${b.value}`,`- **¿Qué medicamentos usarías para una infección?:** ${h.value}`,`- **Define DM:** ${f.value}`,`- **Define PG:** ${D.value}`,`- **Define Carjack:** ${y.value}`];try{await async function(e){let a="# Nueva Respuesta Formulario SAMS 1:\n";const l="Muhaddil Form Sender",o="@/images/muha2.png";for(const u of e)a.length+u.length+1>2e3?(await U(a.trim(),l,o),a=u+"\n"):a+=u+"\n";a.trim().length>0&&await U(a.trim(),l,o)}(e),C.value="Mensaje enviado con éxito",E.value="",setTimeout((()=>{C.value=""}),5e3),d.value="",n.value="",i.value="",t.value="",m.value="",s.value="",c.value="",v.value="",p.value="",V.value="",b.value="",h.value="",f.value="",D.value="",y.value=""}catch(e){C.value="",E.value="Error al enviar el mensaje.",setTimeout((()=>{E.value=""}),5e3),console.error(e)}}async function U(e,a,o){if(await async function(e){return new Promise((a=>setTimeout(a,e)))}(200),!e.trim())throw new Error("El contenido del mensaje está vacío.");const u=await fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a,avatar_url:o,content:e})}),d=await u.text();if(!u.ok)throw new Error(`Error en la respuesta del servidor: ${u.status} - ${d}`)}return(e,a)=>(I(),S("div",G,[q("form",{onSubmit:P(M,["prevent"]),class:"form"},[o(r,{id:"name",label:"Nombre y Apellidos IC",type:"text",placeholder:"Ingresa tu nombre y apellidos IC",modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=e=>d.value=e),required:""},null,8,["modelValue"]),o(r,{id:"ageIC",label:"Edad IC",type:"text",placeholder:"Ingresa tu edad IC",modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=e=>n.value=e),required:"",maxlength:2},null,8,["modelValue"]),o(r,{id:"ageOOC",label:"Edad OOC",type:"text",placeholder:"Ingresa tu edad OOC",modelValue:i.value,"onUpdate:modelValue":a[2]||(a[2]=e=>i.value=e),required:"",maxlength:2},null,8,["modelValue"]),o(r,{id:"discordId",label:"ID de Discord",type:"text",placeholder:"Ingresa tu ID de Discord",modelValue:t.value,"onUpdate:modelValue":a[3]||(a[3]=e=>t.value=e),required:""},null,8,["modelValue"]),o(r,{id:"steamUrl",label:"URL de Steam",type:"url",placeholder:"Ingresa tu URL de Steam",modelValue:m.value,"onUpdate:modelValue":a[4]||(a[4]=e=>m.value=e),required:""},null,8,["modelValue"]),o(r,{id:"dailyTime",label:"Tiempo Disponible Diario",type:"text",placeholder:"Ejemplo: 2 horas diarias",modelValue:s.value,"onUpdate:modelValue":a[5]||(a[5]=e=>s.value=e),required:""},null,8,["modelValue"]),o(u,{id:"emsRoleKnowledge",label:"Conocimiento del Rol de EMS",placeholder:"Describe tu conocimiento sobre el rol de EMS",modelValue:c.value,"onUpdate:modelValue":a[6]||(a[6]=e=>c.value=e),required:""},null,8,["modelValue"]),o(u,{id:"previousExperiences",label:"Experiencias en Otras Ciudades",placeholder:"Describe tus experiencias previas",modelValue:v.value,"onUpdate:modelValue":a[7]||(a[7]=e=>v.value=e),required:""},null,8,["modelValue"]),o(u,{id:"whyChooseMe",label:"¿Por qué deberíamos elegirte?",placeholder:"Explica por qué deberíamos elegirte",modelValue:p.value,"onUpdate:modelValue":a[8]||(a[8]=e=>p.value=e),required:""},null,8,["modelValue"]),o(u,{id:"exampleMe",label:"Ejemplo de /me",placeholder:"Proporciona un ejemplo de /me",modelValue:V.value,"onUpdate:modelValue":a[9]||(a[9]=e=>V.value=e),required:""},null,8,["modelValue"]),o(u,{id:"exampleDo",label:"Ejemplo de /do",placeholder:"Proporciona un ejemplo de /do",modelValue:b.value,"onUpdate:modelValue":a[10]||(a[10]=e=>b.value=e),required:""},null,8,["modelValue"]),o(u,{id:"medicationForInfection",label:"¿Qué medicamentos usarías para una infección?",placeholder:"Describe los medicamentos que usarías",modelValue:h.value,"onUpdate:modelValue":a[11]||(a[11]=e=>h.value=e),required:""},null,8,["modelValue"]),o(u,{id:"defineDM",label:"Define DM",placeholder:"Define DM con tus palabras",modelValue:f.value,"onUpdate:modelValue":a[12]||(a[12]=e=>f.value=e),required:""},null,8,["modelValue"]),o(u,{id:"definePG",label:"Define PG",placeholder:"Define PG con tus palabras",modelValue:D.value,"onUpdate:modelValue":a[13]||(a[13]=e=>D.value=e),required:""},null,8,["modelValue"]),o(u,{id:"defineCarjack",label:"Define Carjack",placeholder:"Define Carjack con tus palabras",modelValue:y.value,"onUpdate:modelValue":a[14]||(a[14]=e=>y.value=e),required:""},null,8,["modelValue"]),a[15]||(a[15]=q("button",{type:"submit"},"Enviar",-1))],32),C.value?(I(),S("div",B,j(C.value),1)):O("",!0),E.value?(I(),S("div",X,j(E.value),1)):O("",!0)]))}});export{J as default};
