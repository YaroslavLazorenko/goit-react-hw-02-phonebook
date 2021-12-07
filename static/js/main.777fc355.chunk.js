(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,function(t,e,n){t.exports={form:"ContactForm_form__2tE4W",label:"ContactForm_label__OyEXr",inputField:"ContactForm_inputField__bRFcU",button:"ContactForm_button__1Vcc3"}},function(t,e,n){t.exports={contactItem:"ContactItem_contactItem__2H2bF",contactText:"ContactItem_contactText__vw88M",button:"ContactItem_button__1Vfms"}},,function(t,e,n){t.exports={title:"Filter_title__OX5Ex",inputField:"Filter_inputField__16nQy"}},,,,function(t,e,n){t.exports={list:"ContactList_list__3KCbI"}},,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),s=(n(19),n(10)),i=n(2),l=n(3),u=n(5),b=n(4),d=n(14),h=n(12),m=n(6),p=n.n(m),j=n(0),f={name:"",number:""},O=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.resetForm=function(){t.setState(f)},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.changeContacts(t.state.name,t.state.number),t.resetForm()},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)("form",{className:p.a.form,action:"#",onSubmit:this.handleSubmit,children:[Object(j.jsx)("label",{className:p.a.label,htmlFor:"name",children:"Name:"}),Object(j.jsx)("input",{className:p.a.inputField,id:"name",type:"text",name:"name",placeholder:"Enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:e,onChange:this.handleChange}),Object(j.jsx)("label",{className:p.a.label,htmlFor:"number",children:"Number:"}),Object(j.jsx)("input",{className:p.a.inputField,id:"number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",placeholder:"Enter phone",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:n,onChange:this.handleChange}),Object(j.jsx)("button",{className:p.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),C=O,v=n(9),x=n.n(v),F=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).handleChange=function(e){var n=e.target.value;t.props.changeFiler(n)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.filter;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{className:x.a.title,children:"Find contacts by name"}),Object(j.jsx)("input",{className:x.a.inputField,type:"text",name:"filter",placeholder:"Enter name",value:t,onChange:this.handleChange})]})}}]),n}(a.Component),_=F,g=n(7),y=n.n(g),N=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.contact,n=t.deleteContact;return Object(j.jsxs)("li",{className:y.a.contactItem,children:[Object(j.jsxs)("span",{className:y.a.contactText,children:[e.name,": ",e.number]}),Object(j.jsx)("button",{className:y.a.button,onClick:function(){return n(e.id)},children:"Delete"})]})}}]),n}(a.Component),w=N,k=n(13),A=n.n(k),S=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.filter,a=t.deleteContact;return Object(j.jsx)("ul",{className:A.a.list,children:e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())})).map((function(t){return Object(j.jsx)(w,{contact:t,deleteContact:a},t.name)}))})}}]),n}(a.Component),I=S,E=(n(21),function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.deleteContact=function(e){var n=t.state.contacts.reduce((function(t,n){return n.id!==e?[].concat(Object(s.a)(t),[n]):t}),[]);t.setState({contacts:n})},t.isContactAlreadySaved=function(e){return t.state.contacts.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))},t.updateContacts=function(e,n){if(t.isContactAlreadySaved(e))return alert("".concat(e," is already in contacts."));t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[{id:Object(d.a)(),name:e,number:n}])}}))},t.updateFilter=function(e){t.setState({filter:e})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{className:"phonebookTitle",children:"Phonebook"}),Object(j.jsx)(C,{changeContacts:this.updateContacts}),Object(j.jsx)("h2",{className:"contactsTitle",children:"Contacts"}),Object(j.jsx)(_,{filter:n,changeFiler:this.updateFilter}),Object(j.jsx)(I,{contacts:e,filter:n,deleteContact:this.deleteContact})]})}}]),n}(a.Component)),L=E,T=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root")),T()}],[[22,1,2]]]);
//# sourceMappingURL=main.777fc355.chunk.js.map