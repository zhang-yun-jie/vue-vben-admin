var t=(m,s,n)=>new Promise((r,c)=>{var f=o=>{try{a(n.next(o))}catch(l){c(l)}},e=o=>{try{a(n.throw(o))}catch(l){c(l)}},a=o=>o.done?r(o.value):Promise.resolve(o.value).then(f,e);a((n=n.apply(m,s)).next())});import{s as u,a0 as y,K as h}from"./entry/index-DgetGCEO-1709791205404.js";import{f as d,b as F,u as i,w,y as p}from"./vue-COhTiP8A.js";function g(m){const s=d(null),n=d(!1);function r(){return t(this,null,function*(){const e=i(s);return e||h("The form instance has not been obtained, please make sure that the form has been rendered when performing the form operation!"),yield p(),e})}function c(e){F(()=>{s.value=null,n.value=null}),!(i(n)&&u()&&e===i(s))&&(s.value=e,n.value=!0,w(()=>m,()=>{m&&e.setProps(y(m))},{immediate:!0,deep:!0}))}return[c,{scrollToField:(e,a)=>t(this,null,function*(){(yield r()).scrollToField(e,a)}),setProps:e=>t(this,null,function*(){(yield r()).setProps(e)}),updateSchema:e=>t(this,null,function*(){(yield r()).updateSchema(e)}),resetSchema:e=>t(this,null,function*(){(yield r()).resetSchema(e)}),clearValidate:e=>t(this,null,function*(){(yield r()).clearValidate(e)}),resetFields:()=>t(this,null,function*(){r().then(e=>t(this,null,function*(){yield e.resetFields()}))}),removeSchemaByField:e=>t(this,null,function*(){var a;(a=i(s))==null||a.removeSchemaByField(e)}),getFieldsValue:()=>{var e;return(e=i(s))==null?void 0:e.getFieldsValue()},setFieldsValue:e=>t(this,null,function*(){(yield r()).setFieldsValue(e)}),appendSchemaByField:(e,a,o)=>t(this,null,function*(){(yield r()).appendSchemaByField(e,a,o)}),submit:()=>t(this,null,function*(){return(yield r()).submit()}),validate:e=>t(this,null,function*(){return(yield r()).validate(e)}),validateFields:e=>t(this,null,function*(){return(yield r()).validateFields(e)})}]}export{g as u};
