(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(7),o=n.n(c),i=(n(15),n(9)),s=n(2),u=n(3),l=n(5),h=n(4),b=n(10),d=n(8),j=(n(16),n(0)),p={name:"",number:""},m=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.resetForm=function(){t.setState(p)},t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(d.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.changeContacts(t.state.name,t.state.number),t.resetForm()},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)("form",{action:"#",onSubmit:this.handleSubmit,children:[Object(j.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(j.jsx)("input",{id:"name",type:"text",name:"name",placeholder:"Enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:e,onChange:this.handleChange}),Object(j.jsx)("label",{htmlFor:"number",children:"Number:"}),Object(j.jsx)("input",{id:"number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",placeholder:"Enter phone",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:n,onChange:this.handleChange}),Object(j.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),f=m,O=(n(18),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).handleChange=function(e){var n=e.target.value;t.props.changeFiler(n)},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.filter;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{children:"Find contacts by name"}),Object(j.jsx)("input",{type:"text",name:"filter",placeholder:"Enter name",value:t,onChange:this.handleChange})]})}}]),n}(a.Component)),v=O,C=(n(19),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.contact;return Object(j.jsxs)("li",{children:[t.name,":",t.number]})}}]),n}(a.Component)),g=C,y=(n(20),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.filter;return Object(j.jsx)("ul",{children:e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())})).map((function(t){return Object(j.jsx)(g,{contact:t},t.name)}))})}}]),n}(a.Component)),x=y,F=(n(21),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:""},t.isContactAlreadySaved=function(e){return t.state.contacts.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))},t.updateContacts=function(e,n){if(t.isContactAlreadySaved(e))return alert("".concat(e," is already in contacts."));t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[{id:Object(b.a)(),name:e,number:n}])}}))},t.updateFilter=function(e){t.setState({filter:e})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(f,{changeContacts:this.updateContacts}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(v,{filter:n,changeFiler:this.updateFilter}),Object(j.jsx)(x,{contacts:e,filter:n})]})}}]),n}(a.Component)),w=F,A=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),r(t),c(t),o(t)}))};o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),A()}],[[22,1,2]]]);
//# sourceMappingURL=main.7c812ead.chunk.js.map