var k=(C,s,t)=>new Promise((c,i)=>{var f=o=>{try{l(t.next(o))}catch(n){i(n)}},e=o=>{try{l(t.throw(o))}catch(n){i(n)}},l=o=>o.done?c(o.value):Promise.resolve(o.value).then(f,e);l((t=t.apply(C,s)).next())});import{_ as h}from"./BasicForm.vue_vue_type_script_setup_true_lang-CSMGB6UH.js";import"./BasicForm.vue_vue_type_style_index_0_lang-pcFK5vtr.js";import"./componentMap-D6c0Fu1b.js";import{u as I}from"./useForm-DPrRVYiD.js";import{C as y}from"./entry/index-DgetGCEO-1709791205404.js";import{P as q}from"./index-EHmQjNpP.js";import{d as N,f as g,a7 as x,Z as u,a8 as m,a9 as r,k as $,u as d,G as _,ab as v}from"./vue-COhTiP8A.js";import"./FormItem.vue_vue_type_script_lang-CKVh6B6F.js";import"./helper-Cq7OPnpf.js";import"./antd-BS7GgtZr.js";import"./index-BfEnZnHu.js";import"./useWindowSizeFn-cQfEIV8Q.js";import"./useFormItem-CGQuU2J0.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-fi6qyuOm.js";import"./uuid-D0SLUWHI.js";import"./useSortable-CpLjQ1xR.js";import"./download-Bl5qEYll.js";import"./base64Conver-bBv-IO2K.js";import"./index-DERZ64NS.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-5n-Uis0Y.js";import"./copyTextToClipboard-YrNkOw48.js";import"./index-Czx2jVvp.js";import"./index-B_fWHVzI.js";import"./useContentViewHeight-Bq5OnbO2.js";import"./onMountedOrActivated-GpUdBAv_.js";const te=N({__name:"AppendForm",setup(C){const[s,{appendSchemaByField:t,removeSchemaByField:c,validate:i}]=I({schemas:[{field:"field0a",component:"Input",label:"字段0",required:!0},{field:"field0b",component:"Input",label:"字段0",required:!0},{field:"0",label:" ",slot:"add"}],labelWidth:100,actionColOptions:{span:24},baseColProps:{span:8}});function f(){return k(this,null,function*(){try{const a=yield i()}catch(a){}})}const e=g(1);function l(){t({field:`field${e.value}a`,component:"Input",label:"字段"+e.value,required:!0},""),t({field:`field${e.value}b`,component:"Input",label:"字段"+e.value,required:!0},""),t({field:`${e.value}`,component:"Input",label:" ",slot:"add"},""),e.value++}function o(){t([{field:`field${e.value}a`,component:"Input",label:"字段"+e.value,required:!0},{field:`field${e.value}b`,component:"Input",label:"字段"+e.value,required:!0},{field:`${e.value}`,component:"Input",label:" ",slot:"add"}],""),e.value++}function n(a){c([`field${a}a`,`field${a}b`,`${a}`]),e.value--}return(a,B)=>{const b=x("a-button");return u(),m(d(q),{title:"表单增删示例"},{default:r(()=>[$(d(y),{title:"表单增删"},{default:r(()=>[$(d(h),{onRegister:d(s),onSubmit:f},{add:r(({field:p})=>[Number(p)===0?(u(),m(b,{key:0,onClick:l},{default:r(()=>[_("+")]),_:1})):v("",!0),Number(p)===0?(u(),m(b,{key:1,class:"ml-2",onClick:o},{default:r(()=>[_(" 批量添加表单配置 ")]),_:1})):v("",!0),Number(p)>0?(u(),m(b,{key:2,onClick:()=>n(p)},{default:r(()=>[_("-")]),_:2},1032,["onClick"])):v("",!0)]),_:1},8,["onRegister"])]),_:1})]),_:1})}}});export{te as default};
