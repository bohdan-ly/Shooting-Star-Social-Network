(window.webpackJsonppackage=window.webpackJsonppackage||[]).push([[4],{299:function(e,a,t){e.exports={content:"Dialog_content__2kwx5",dialogsItems:"Dialog_dialogsItems__2dn8D",dialog:"Dialog_dialog__FHK98",active:"Dialog_active__1Ks1r",messageItems:"Dialog_messageItems__2Fg2n",message:"Dialog_message__21ADy",userLink:"Dialog_userLink__2Hi3d"}},300:function(e,a,t){e.exports={content:"Dialogs_content__1f4bs",dialogsItems:"Dialogs_dialogsItems__1Tpbo",dialog:"Dialogs_dialog__PTbr1",messageItems:"Dialogs_messageItems__1nBB1",active:"Dialogs_active__3mG98",message:"Dialogs_message__1fIjc"}},301:function(e,a,t){e.exports={content:"Message_content__1bnK9",dialogsItems:"Message_dialogsItems__I8E4F",dialog:"Message_dialog__245yN",active:"Message_active__2BaN_",messageItems:"Message_messageItems__FX7sd",message:"Message_message__SEPcA"}},305:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),i=t(129),o=t(299),c=t.n(o),r=t(17),l=function(e){var a="/dialogs/"+e.id;return n.a.createElement("div",{className:c.a.dialog+" "+c.a.active},n.a.createElement("div",{className:c.a.userLink},n.a.createElement("img",{src:e.avatar}),n.a.createElement(r.b,{to:a},e.name)))},m=t(300),g=t.n(m),d=t(301),_=t.n(d),u=function(e){return n.a.createElement("div",null,n.a.createElement("div",{className:_.a.message},e.content))},v=t(30),b=t(90),p=t(130),f=t(25),E=t(67),D=Object(E.b)(50),I=Object(p.a)({form:"dialogAddMessageForm"})((function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement("div",null,n.a.createElement(b.a,{validate:[E.a,D],component:f.b,name:"newMessageBody",placeholder:"Enter new message"})),n.a.createElement("div",null,n.a.createElement("button",null,"Send")))})),h=function(e){var a=e.dialogs.map((function(e){return n.a.createElement(l,{name:e.name,id:e.id,key:e.id,avatar:e.avatar})})),t=e.messages.map((function(a){return n.a.createElement(u,{content:a.content,messageInputText:a.messageInputText,key:a.id,dispatch:e.dispatch})}));return e.isAuth?n.a.createElement("div",{className:g.a.content},n.a.createElement("div",{className:g.a.dialogsItems},a," "),n.a.createElement("div",{className:g.a.messageItems},t),n.a.createElement(I,{onSubmit:function(a){e.sendMessageCreator(a.newMessageBody)}})):n.a.createElement(v.a,{to:"/login"})},M=t(13),w=t(37),j=t(38),k=t(40),O=t(39),y=function(e){return{isAuth:e.auth.isAuth}},A=t(8);a.default=Object(A.d)(Object(M.b)((function(e){return{dialogs:e.dialogsServerData.dialogFieldData,messages:e.dialogsServerData.messageData,newMessageBody:e.dialogsServerData.newMessageText,isAuth:e.auth.isAuth}}),(function(e){return{sendMessageCreator:function(a){e(Object(i.b)(a))}}})),(function(e){var a=function(a){Object(k.a)(s,a);var t=Object(O.a)(s);function s(){return Object(w.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){return this.props.isAuth?n.a.createElement(e,this.props):n.a.createElement(v.a,{to:"/login"})}}]),s}(n.a.Component);return Object(M.b)(y)(a)}))(h)}}]);
//# sourceMappingURL=4.b7768eec.chunk.js.map