import{_ as d}from"./BasicTable.vue_vue_type_script_setup_true_lang-DrqtA7E-.js";import"./TableImg.vue_vue_type_style_index_0_lang-PtIbwSPG.js";import"./componentMap-D6c0Fu1b.js";import"./index-BZhPx-oD.js";import{c as l,d as e,j as m,a as c}from"./data-DSrLLIOu.js";import{P as u}from"./index-EHmQjNpP.js";import{d as f,a7 as _,Z as h,a8 as x,a9 as t,k as o,u as a,G as i}from"./vue-COhTiP8A.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-CSMGB6UH.js";import"./FormItem.vue_vue_type_script_lang-CKVh6B6F.js";import"./entry/index-DgetGCEO-1709791205404.js";import"./antd-BS7GgtZr.js";import"./helper-Cq7OPnpf.js";import"./BasicForm.vue_vue_type_style_index_0_lang-pcFK5vtr.js";import"./index-BfEnZnHu.js";import"./useWindowSizeFn-cQfEIV8Q.js";import"./useForm-DPrRVYiD.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-fi6qyuOm.js";import"./useFormItem-CGQuU2J0.js";import"./onMountedOrActivated-GpUdBAv_.js";import"./useSortable-CpLjQ1xR.js";import"./download-Bl5qEYll.js";import"./base64Conver-bBv-IO2K.js";import"./index-DERZ64NS.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-5n-Uis0Y.js";import"./copyTextToClipboard-YrNkOw48.js";import"./index-Czx2jVvp.js";import"./index-B_fWHVzI.js";import"./useContentViewHeight-Bq5OnbO2.js";const R=f({__name:"JsonExport",setup(k){function n(){m({data:e,filename:"使用key作为默认头部.xlsx"})}function s(){m({data:e,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},filename:"自定义头部.xlsx",json2sheetOpts:{header:["name","id"]}})}function p(){c({sheetList:[{data:e,sheetName:"使用key作为默认头部"},{data:e,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},json2sheetOpts:{header:["name","id"]},sheetName:"自定义头部"}],filename:"多Sheet导出示例.xlsx"})}return(S,T)=>{const r=_("a-button");return h(),x(a(u),{title:"导出示例",content:"根据JSON格式的数据进行导出"},{default:t(()=>[o(a(d),{title:"基础表格",columns:a(l),dataSource:a(e)},{toolbar:t(()=>[o(r,{onClick:n},{default:t(()=>[i(" 导出：默认头部 ")]),_:1}),o(r,{onClick:s},{default:t(()=>[i(" 导出：自定义头部 ")]),_:1}),o(r,{onClick:p,danger:""},{default:t(()=>[i(" 导出多Sheet ")]),_:1})]),_:1},8,["columns","dataSource"])]),_:1})}}});export{R as default};
