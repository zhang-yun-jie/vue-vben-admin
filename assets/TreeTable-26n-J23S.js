import{_ as d}from"./BasicTable.vue_vue_type_script_setup_true_lang-DrqtA7E-.js";import"./TableImg.vue_vue_type_style_index_0_lang-PtIbwSPG.js";import"./componentMap-D6c0Fu1b.js";import{u as _}from"./useTable-LWo48EJ-.js";import{getBasicColumns as f,getTreeTableData as b}from"./tableData-Co5BryHX.js";import{d as k,a7 as C,Z as y,_ as x,k as e,a9 as o,u as t,G as p}from"./vue-COhTiP8A.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-CSMGB6UH.js";import"./FormItem.vue_vue_type_script_lang-CKVh6B6F.js";import"./entry/index-DgetGCEO-1709791205404.js";import"./antd-BS7GgtZr.js";import"./helper-Cq7OPnpf.js";import"./BasicForm.vue_vue_type_style_index_0_lang-pcFK5vtr.js";import"./index-BfEnZnHu.js";import"./useWindowSizeFn-cQfEIV8Q.js";import"./useForm-DPrRVYiD.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-fi6qyuOm.js";import"./useFormItem-CGQuU2J0.js";import"./onMountedOrActivated-GpUdBAv_.js";import"./useSortable-CpLjQ1xR.js";import"./download-Bl5qEYll.js";import"./base64Conver-bBv-IO2K.js";import"./index-DERZ64NS.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-5n-Uis0Y.js";import"./copyTextToClipboard-YrNkOw48.js";import"./index-Czx2jVvp.js";import"./index-B_fWHVzI.js";import"./select-CfdzlP3n.js";const T={class:"p-4"},X=k({__name:"TreeTable",setup(g){const[m,{expandAll:s,collapseAll:l,expandRows:n,collapseRows:c}]=_({title:"树形表格",isTreeTable:!0,accordion:!0,rowSelection:{type:"checkbox",getCheckboxProps(a){return a.id==="0"?{disabled:!0}:{disabled:!1}}},titleHelpMessage:"树形组件不能和序列号列同时存在",columns:f(),dataSource:b(),rowKey:"id",showSelectionBar:!0});return(a,r)=>{const i=C("a-button");return y(),x("div",T,[e(t(d),{onRegister:t(m)},{toolbar:o(()=>[e(i,{type:"primary",onClick:t(s)},{default:o(()=>[p("展开全部")]),_:1},8,["onClick"]),e(i,{type:"primary",onClick:t(l)},{default:o(()=>[p("折叠全部")]),_:1},8,["onClick"]),e(i,{type:"primary",onClick:r[0]||(r[0]=u=>t(c)(["4"]))},{default:o(()=>[p("折叠第五行")]),_:1}),e(i,{type:"primary",onClick:r[1]||(r[1]=u=>t(n)(["4"]))},{default:o(()=>[p("展开第五行")]),_:1})]),_:1},8,["onRegister"])])}}});export{X as default};
