import{d as j,r as o,o as D,c as E,a,w as r,v as s,b as F,t as S,e as T,_ as w}from"./main-Dcg_GjTA.js";const R={class:"form-container"},$={class:"form-field"},N={class:"form-field"},P={class:"form-field"},k={class:"form-field"},L={class:"form-field"},K={class:"form-field"},A={class:"form-field"},z={class:"form-field"},X={class:"form-field"},B={class:"form-field"},H={class:"form-field"},G={class:"form-field"},J={class:"form-field"},Q={class:"form-field"},W={class:"form-field"},Y={key:0,class:"toast success"},Z={key:1,class:"toast error"},h=j({__name:"Form3",setup(e){const l=atob("aHR0cHM6Ly9kaXNjb3JkYXBwLmNvbS9hcGkvd2ViaG9va3MvMTMxOTc4MzcwMzU4MDM3NzEwOC9hU0hXenB2M0NCM2lIOFdzbFRXNEdhWDZqUXJmLS1RSktaYThFNWRHcTFXenctMURTelU3ellSVmFCTHpuQjVLSGswTwo="),d=o(""),n=o(""),u=o(""),i=o(""),t=o(""),m=o(""),v=o(""),p=o(""),c=o(""),f=o(""),b=o(""),h=o(""),g=o(""),x=o(""),C=o(""),I=o(""),y=o("");async function U(){const e={content:`# Nueva Respuesta Formulario SAMS 3:\n\n    - **Nombre y Apellidos IC:** ${d.value}\n    - **Edad IC:** ${n.value}\n    - **Edad OOC:** ${u.value}\n    - **ID de Discord:** ${i.value}\n    - **URL de Steam:** ${t.value}\n    - **Tiempo Disponible Diario:** ${m.value}\n    - **Conocimiento del Rol de EMS:** ${v.value}\n    - **Experiencias en Otras Ciudades:** ${p.value}\n    - **Ejemplo de /me:** ${c.value}\n    - **Ejemplo de /do:** ${f.value}\n    - **¿Qué usarías para tratar un golpe?:** ${b.value}\n    - **Define el /entorno:** ${h.value}\n    - **¿Se pueden usar moduladores de voz?:** ${g.value}\n    - **Define Fairplay:** ${x.value}\n    - **Término de Pseudo IC:** ${C.value}`};try{if(!(await fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok)throw new Error("Error en la respuesta del servidor.");I.value="Mensaje enviado con éxito",y.value="",setTimeout((()=>{I.value=""}),5e3),d.value="",n.value="",u.value="",i.value="",t.value="",m.value="",v.value="",p.value="",c.value="",f.value="",b.value="",h.value="",g.value="",x.value="",C.value=""}catch(e){I.value="",y.value="Error al enviar el mensaje.",setTimeout((()=>{y.value=""}),5e3),console.error(e)}}return(e,l)=>(D(),E("div",R,[l[31]||(l[31]=a("div",{class:"logo-container"},[a("a",{href:"https://discord.gg/5a2PCNN9gy"},[a("img",{src:"https://raw.githubusercontent.com/Muhaddil/simple-link-randomizer/refs/heads/main/images/SAEDLogo.png",alt:"Logo SAED",class:"saed-logo"})])],-1)),a("form",{onSubmit:F(U,["prevent"])},[a("div",$,[l[15]||(l[15]=a("label",{for:"name"},"Nombre y Apellidos IC",-1)),r(a("input",{"onUpdate:modelValue":l[0]||(l[0]=e=>d.value=e),type:"text",id:"name",name:"name",placeholder:"Ingresa tu nombre y apellidos IC",required:""},null,512),[[s,d.value]])]),a("div",N,[l[16]||(l[16]=a("label",{for:"ageIC"},"Edad IC",-1)),r(a("input",{"onUpdate:modelValue":l[1]||(l[1]=e=>n.value=e),type:"text",id:"ageIC",name:"ageIC",placeholder:"Ingresa tu edad IC",required:"",maxlength:2,pattern:"\\d*"},null,512),[[s,n.value]])]),a("div",P,[l[17]||(l[17]=a("label",{for:"ageOOC"},"Edad OOC",-1)),r(a("input",{"onUpdate:modelValue":l[2]||(l[2]=e=>u.value=e),type:"text",id:"ageOOC",name:"ageOOC",placeholder:"Ingresa tu edad OOC",required:"",maxlength:2,pattern:"\\d*"},null,512),[[s,u.value]])]),a("div",k,[l[18]||(l[18]=a("label",{for:"discordId"},"ID de Discord",-1)),r(a("input",{"onUpdate:modelValue":l[3]||(l[3]=e=>i.value=e),type:"text",id:"discordId",name:"discordId",placeholder:"Ingresa tu ID de Discord",required:""},null,512),[[s,i.value]])]),a("div",L,[l[19]||(l[19]=a("label",{for:"steamUrl"},"URL de Steam",-1)),r(a("input",{"onUpdate:modelValue":l[4]||(l[4]=e=>t.value=e),type:"url",id:"steamUrl",name:"steamUrl",placeholder:"Ingresa tu URL de Steam",required:""},null,512),[[s,t.value]])]),a("div",K,[l[20]||(l[20]=a("label",{for:"dailyTime"},"Tiempo Disponible Diario",-1)),r(a("input",{"onUpdate:modelValue":l[5]||(l[5]=e=>m.value=e),type:"text",id:"dailyTime",name:"dailyTime",placeholder:"Ejemplo: 2 horas diarias",required:""},null,512),[[s,m.value]])]),a("div",A,[l[21]||(l[21]=a("label",{for:"emsRoleKnowledge"},"Conocimiento del Rol de EMS",-1)),r(a("textarea",{"onUpdate:modelValue":l[6]||(l[6]=e=>v.value=e),id:"emsRoleKnowledge",name:"emsRoleKnowledge",placeholder:"Describe tu conocimiento sobre el rol de EMS",required:""},null,512),[[s,v.value]])]),a("div",z,[l[22]||(l[22]=a("label",{for:"previousExperiences"},"Experiencias en Otras Ciudades",-1)),r(a("textarea",{"onUpdate:modelValue":l[7]||(l[7]=e=>p.value=e),id:"previousExperiences",name:"previousExperiences",placeholder:"Describe tus experiencias previas",required:""},null,512),[[s,p.value]])]),a("div",X,[l[23]||(l[23]=a("label",{for:"exampleMe"},"Ponga un ejemplo de /me",-1)),r(a("textarea",{"onUpdate:modelValue":l[8]||(l[8]=e=>c.value=e),id:"exampleMe",name:"exampleMe",placeholder:"Proporciona un ejemplo de /me",required:""},null,512),[[s,c.value]])]),a("div",B,[l[24]||(l[24]=a("label",{for:"exampleDo"},"Ponga un ejemplo de /do",-1)),r(a("textarea",{"onUpdate:modelValue":l[9]||(l[9]=e=>f.value=e),id:"exampleDo",name:"exampleDo",placeholder:"Proporciona un ejemplo de /do",required:""},null,512),[[s,f.value]])]),a("div",H,[l[25]||(l[25]=a("label",{for:"treatmentForInjury"},"¿Qué usarías para tratar una incisión leve?",-1)),r(a("textarea",{"onUpdate:modelValue":l[10]||(l[10]=e=>b.value=e),id:"treatmentForInjury",name:"treatmentForInjury",placeholder:"Describe qué usarías para tratar una incisión leve",required:""},null,512),[[s,b.value]])]),a("div",G,[l[26]||(l[26]=a("label",{for:"defineEnvironment"},"Define con tus palabras un PKT",-1)),r(a("textarea",{"onUpdate:modelValue":l[11]||(l[11]=e=>h.value=e),id:"defineEnvironment",name:"defineEnvironment",placeholder:"Define con tus palabras un PKT",required:""},null,512),[[s,h.value]])]),a("div",J,[l[27]||(l[27]=a("label",{for:"canUseVoiceMods"},"Define con tus palabras un CK",-1)),r(a("textarea",{"onUpdate:modelValue":l[12]||(l[12]=e=>g.value=e),id:"canUseVoiceMods",name:"canUseVoiceMods",placeholder:"Define con tus palabras un CK",required:""},null,512),[[s,g.value]])]),a("div",Q,[l[28]||(l[28]=a("label",{for:"defineFairPlay"},"¿Puedes robar aeronaves?",-1)),r(a("textarea",{"onUpdate:modelValue":l[13]||(l[13]=e=>x.value=e),id:"defineFairPlay",name:"defineFairPlay",placeholder:"Indica si puedes robar aeronaves",required:""},null,512),[[s,x.value]])]),a("div",W,[l[29]||(l[29]=a("label",{for:"pseudoICTerm"},"¿Cuál es el triaje que un SAMS debe seguir a la hora de atender pacientes?",-1)),r(a("textarea",{"onUpdate:modelValue":l[14]||(l[14]=e=>C.value=e),id:"pseudoICTerm",name:"pseudoICTerm",placeholder:"Describe el triaje que un SAMS debe seguir",required:""},null,512),[[s,C.value]])]),l[30]||(l[30]=a("button",{type:"submit"},"Enviar",-1))],32),I.value?(D(),E("div",Y,S(I.value),1)):T("",!0),y.value?(D(),E("div",Z,S(y.value),1)):T("",!0)]))}}),ae=w(h,[["__scopeId","data-v-a1b20a69"]]);export{ae as default};
