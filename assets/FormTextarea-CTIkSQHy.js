import{_ as o}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,a as l,t as u}from"./main-B_crO3gg.js";const c={name:"FormTextarea",props:{id:{type:String,required:!0},label:{type:String,required:!0},placeholder:{type:String,default:""},required:{type:Boolean,default:!1},modelValue:{type:String,required:!0}},methods:{handleInput(e){const r=e.target;r&&this.$emit("update:modelValue",r.value)}}},s={class:"form-field"},f=["for"],m=["id","placeholder","required","value"];function _(e,r,a,t,d,o){return i(),n("div",s,[l("label",{for:a.id},u(a.label),9,f),l("textarea",{id:a.id,placeholder:a.placeholder,required:a.required,value:a.modelValue,onInput:r[0]||(r[0]=(...e)=>o.handleInput&&o.handleInput(...e))},null,40,m)])}const x=o(c,[["render",_],["__scopeId","data-v-c292ec08"]]);export{x as default};