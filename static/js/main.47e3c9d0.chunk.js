(this.webpackJsonpchem=this.webpackJsonpchem||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n,l=a(0),u=a.n(l),r=a(3),m=a.n(r),c=(a(9),a(1)),o=function(e){return u.a.createElement("div",{className:e.className+" scale1-1"},u.a.createElement("button",{className:"buttonView",onClick:e.handleClick},e.name))},i=function(e){return u.a.createElement(o,{name:e.name,className:e.className,handleClick:function(){return e.handleClick(e.name)}})},s=new(window.AudioContext||window.webkitAudioContext);!function(e){e.START="START",e.TRUE_SHOT="TRUE_SHOT",e.FALSE_SHOT="FALSE_SHOT",e.BEST_RESULTS="BEST_RESULTS"}(n||(n={}));var E=Object.create(null);Object.entries({START:"/chem/sounds/162485__kastenfrosch__space.mp3",TRUE_SHOT:"/chem/sounds/135510__chriddof__space-bloop.mp3",FALSE_SHOT:"/chem/sounds/432761__xpoki__lazershot.mp3",BEST_RESULTS:"/chem/sounds/477552__abacagi__explosion-sfx.mp3"}).forEach((function(e){var t,a,n=Object(c.a)(e,2),l=n[0],u=n[1];E[l]=(t=u,a=s,new Promise((function(e,n){if(t)if(a){var l=new XMLHttpRequest;l.open("GET",t),l.responseType="arraybuffer",l.onload=function(){var t=l.response;a.decodeAudioData(t,(function(t){e(t)}))},l.onerror=function(){n("An error occurred.")},l.send()}else n("Missing audio context!");else n("Missing url!")})))}));var d=function(e){E[e].then((function(e){var t=s.createBufferSource();t.buffer=e,t.connect(s.destination),t.start()}))},f={"\u041a\u0438\u0441\u043b\u043e\u0442\u0430":"buttonPosition1","\u0421\u043e\u043b\u044c":"buttonPosition2","\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435":"buttonPosition3","\u041e\u043a\u0441\u0438\u0434":"buttonPosition4","\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439":"buttonPosition1","\u0410\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439":"buttonPosition2","\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439":"buttonPosition3","\u041d\u0435\u0441\u043e\u043b\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u044e\u0449\u0438\u0439":"buttonPosition4"},b=function(e){var t=Object(l.useState)("zero"),a=Object(c.a)(t,2),r=a[0],m=a[1],o=Object(l.useState)(!1),s=Object(c.a)(o,2),E=s[0],b=s[1],v=e.stepNumber,p=e.buttonNames;Object(l.useEffect)((function(){var t=setTimeout((function(){m("zero+"),console.log('setState("zero+"); ')}),50),a=setTimeout((function(){e.handleFinishEvent({name:e.formula.name,type:e.formula.type,answer:void 0}),console.log("useEffect finish timeout ")}),e.mainAnimationDuration);return function(){clearTimeout(t),clearTimeout(a),console.log("useEffect clearTimeouts ")}}),[e]);var y,O,x,S,h,N,C,P=Object(l.useCallback)((function(t){if("zero+"===r){m(t);var a=e.formula.type===t,l={name:e.formula.name,type:e.formula.type,answer:t};d(a?n.TRUE_SHOT:n.FALSE_SHOT),a||setTimeout((function(){return m("zero+false")}),e.clickAnimationDuration+100),setTimeout((function(){e.handleFinishEvent(l)}),(e.clickAnimationDuration+100)*(a?1:2))}}),[e,r]);switch(r){case"zero":y="startPosition",1===v?(O="endPosition",x="endPosition",S="endPosition",h="endPosition",N="startPosition",C="startPosition"):(O="buttonPosition1 transition-true",x="buttonPosition2 transition-true",S="buttonPosition3 transition-true",h="buttonPosition4 transition-true",N="score transition-true",C="check-number transition-true");break;case"zero+":case"zero+false":y="endPosition endPositionTransition",O="buttonPosition1 transition-true",x="buttonPosition2 transition-true",S="buttonPosition3 transition-true",h="buttonPosition4 transition-true",N="score transition-true",C="check-number transition-true";break;default:y="".concat(f[r]," ").concat(e.formula.type===r?" transition-true":" transition-false"),O="buttonPosition1",x="buttonPosition2",S="buttonPosition3",h="buttonPosition4",N="score transition-true",C="check-number transition-true",console.log("state =  ",r),console.log("formulaPositionClass =  ",y)}return u.a.createElement("div",{className:"main main2-background-size"},u.a.createElement("div",{className:N},e.score),u.a.createElement("div",{className:C,onClick:e.handleStopEvent},"".concat(e.stepNumber," / ").concat(e.checksTotal)),u.a.createElement(i,{name:p[0],className:O,handleClick:P}),u.a.createElement(i,{name:p[1],className:x,handleClick:P}),u.a.createElement(i,{name:p[2],className:S,handleClick:P}),u.a.createElement(i,{name:p[3],className:h,handleClick:P}),u.a.createElement("div",{className:y},u.a.createElement("button",{className:"formulaView",onClick:function(){return b(!0)}},u.a.createElement("div",null,e.formula.formula),E&&u.a.createElement("div",{className:"formula-hint"},e.formula.text))))},v=function(e){switch(e){case'"\u0412\u0435\u0449\u0435\u0441\u0442\u0432\u0430"':return["\u041a\u0438\u0441\u043b\u043e\u0442\u0430","\u0421\u043e\u043b\u044c","\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435","\u041e\u043a\u0441\u0438\u0434"];case'"\u041e\u043a\u0441\u0438\u0434\u044b"':return["\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439","\u0410\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439","\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439","\u041d\u0435\u0441\u043e\u043b\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u044e\u0449\u0438\u0439"];default:throw new Error("Unknown grade = "+e)}};var p={'"\u0412\u0435\u0449\u0435\u0441\u0442\u0432\u0430"':[{name:"\u0430\u0437\u043e\u0442\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:u.a.createElement("div",null,"HNO",u.a.createElement("sub",null,"3"))},{name:"\u0430\u0437\u043e\u0442\u0438\u0441\u0442\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:u.a.createElement("div",null,"\u041dNO",u.a.createElement("sub",null,"2"))},{name:"\u0444\u0442\u043e\u0440\u043e\u0432\u043e\u0434\u043e\u0440\u043e\u0434\u043d\u0430\u044f (\u043f\u043b\u0430\u0432\u0438\u043a\u043e\u0432\u0430\u044f ) \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:u.a.createElement("div",null,"HF")},{name:"\u0431\u043e\u0440\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:u.a.createElement("div",null,"\u041d",u.a.createElement("sub",null,"3"),"\u0412\u041e",u.a.createElement("sub",null,"3"))},{name:"\u0445\u043b\u043e\u0440\u043e\u0432\u043e\u0434\u043e\u0440\u043e\u0434\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:u.a.createElement("div",null,"HCl")},{name:"\u0443\u043a\u0441\u0443\u0441\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:u.a.createElement("div",null,"\u0421\u041d",u.a.createElement("sub",null,"3"),"\u0421\u041e\u041e\u041d")},{name:"\u0431\u0440\u043e\u043c\u043e\u0432\u043e\u0434\u043e\u0440\u043e\u0434\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:u.a.createElement("div",null,"HBr")},{name:"\u043c\u0443\u0440\u0430\u0432\u044c\u0438\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:u.a.createElement("div",null,"\u041d\u0421\u041e\u041e\u041d")},{name:"\u0438\u043e\u0434\u043e\u0432\u043e\u0434\u043e\u0440\u043e\u0434\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:u.a.createElement("div",null,"HI")},{name:"\u0441\u0438\u043d\u0438\u043b\u044c\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430 \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:u.a.createElement("div",null,"\u041d\u0421N")},{name:"\u0441\u0435\u0440\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:u.a.createElement("div",null,"H",u.a.createElement("sub",null,"2"),"SO",u.a.createElement("sub",null,"4"))},{name:"\u0434\u0438\u0445\u0440\u043e\u043c\u043e\u0432\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:u.a.createElement("div",null,"\u041d",u.a.createElement("sub",null,"2"),"\u0421r",u.a.createElement("sub",null,"2"),"O",u.a.createElement("sub",null,"7"))},{name:"\u0441\u0435\u0440\u043d\u0438\u0441\u0442\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:u.a.createElement("div",null,"H",u.a.createElement("sub",null,"2"),"SO",u.a.createElement("sub",null,"3"))},{name:"\u0445\u043b\u043e\u0440\u043d\u043e\u0432\u0430\u0442\u0438\u0441\u0442\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:u.a.createElement("div",null,"\u041d\u0421lO")},{name:"\u0441\u0435\u0440\u043e\u0432\u043e\u0434\u043e\u0440\u043e\u0434\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:u.a.createElement("div",null,"H",u.a.createElement("sub",null,"2"),"S")},{name:"\u0445\u043b\u043e\u0440\u043d\u043e\u0432\u0430\u0442\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:u.a.createElement("div",null,"HClO",u.a.createElement("sub",null,"3"))},{name:"\u043c\u044b\u0448\u044c\u044f\u043a\u043e\u0432\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:u.a.createElement("div",null,"H",u.a.createElement("sub",null,"3"),"AsO",u.a.createElement("sub",null,"4"))},{name:"\u0443\u0433\u043e\u043b\u044c\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:u.a.createElement("div",null,"H",u.a.createElement("sub",null,"2"),"CO",u.a.createElement("sub",null,"3"))},{name:"\u0441\u0435\u043b\u0435\u043d\u043e\u0432\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:u.a.createElement("div",null,"H",u.a.createElement("sub",null,"2"),"SO",u.a.createElement("sub",null,"4"))},{name:"\u043a\u0440\u0435\u043c\u043d\u0438\u0435\u0432\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:u.a.createElement("div",null,"H",u.a.createElement("sub",null,"2"),"SiO",u.a.createElement("sub",null,"3"))},{name:"\u0441\u0435\u043b\u0435\u043d\u043e\u0432\u043e\u0434\u043e\u0440\u043e\u0434\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:u.a.createElement("div",null,"H",u.a.createElement("sub",null,"2"),"S\u0435")},{name:"\u0444\u043e\u0441\u0444\u043e\u0440\u043d\u0430\u044f (\u043e\u0440\u0442\u043e\u0444\u043e\u0441\u0444\u043e\u0440\u043d\u0430\u044f) \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:u.a.createElement("div",null,"H",u.a.createElement("sub",null,"3"),"PO",u.a.createElement("sub",null,"4"))},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u043b\u0438\u0442\u0438\u044f",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:u.a.createElement("div",null,"LiOH")},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u043d\u0430\u0442\u0440\u0438\u044f",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:u.a.createElement("div",null,"NaOH")},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u043a\u0430\u043b\u0438\u044f",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:u.a.createElement("div",null,"KOH")},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u0440\u0443\u0431\u0438\u0434\u0438\u044f",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:u.a.createElement("div",null,"RbOH")},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u043b\u0438\u0442\u0438\u044f",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:u.a.createElement("div",null,"LiOH")},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u0446\u0435\u0437\u0438\u044f",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:u.a.createElement("div",null,"CsOH")},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u043c\u0435\u0434\u0438(I)",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:u.a.createElement("div",null,"CuOH")},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u043a\u0430\u043b\u044c\u0446\u0438\u044f",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:u.a.createElement("div",null,"Ca(OH)",u.a.createElement("sub",null,"2"))},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u043c\u0435\u0434\u0438(II)",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:u.a.createElement("div",null,"Cu(OH)",u.a.createElement("sub",null,"2"))},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u0436\u0435\u043b\u0435\u0437\u0430(II)",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:u.a.createElement("div",null,"Fe(OH)",u.a.createElement("sub",null,"2"))},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u0431\u0430\u0440\u0438\u044f",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:u.a.createElement("div",null,"Ba(OH)",u.a.createElement("sub",null,"2"))},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u043a\u043e\u0431\u0430\u043b\u044c\u0442\u0430(II)",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:u.a.createElement("div",null,"Co(OH)",u.a.createElement("sub",null,"2"))},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u043d\u0438\u043a\u0435\u043b\u044f (II)",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:u.a.createElement("div",null,"Ni(OH)",u.a.createElement("sub",null,"2"))},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u0441\u0432\u0438\u043d\u0446\u0430 (II)",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:u.a.createElement("div",null,"Pb(OH)",u.a.createElement("sub",null,"2"))},{name:"\u0433\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u0436\u0435\u043b\u0435\u0437\u0430(III)",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:u.a.createElement("div",null,"Fe(OH)",u.a.createElement("sub",null,"3"))},{name:"\u0433\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u0430\u043b\u044e\u043c\u0438\u043d\u0438\u044f",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:u.a.createElement("div",null,"Al(OH)",u.a.createElement("sub",null,"3"))},{name:"\u0433\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u0446\u0438\u043d\u043a\u0430",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:u.a.createElement("div",null,"Zn(OH)",u.a.createElement("sub",null,"2"))},{name:"\u0433\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u0431\u0435\u0440\u0438\u043b\u043b\u0438\u044f",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:u.a.createElement("div",null,"Be(OH)",u.a.createElement("sub",null,"2"))},{name:"\u0433\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u0445\u0440\u043e\u043c\u0430(III)",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:u.a.createElement("div",null,"Cr(OH)",u.a.createElement("sub",null,"3"))},{name:"\u0433\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u043c\u0430\u0440\u0433\u0430\u043d\u0446\u0430 (IV)",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:u.a.createElement("div",null,"Mn(OH)",u.a.createElement("sub",null,"4"))},{name:"\u0433\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 c\u0432\u0438\u043d\u0446\u0430 (IV)",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:u.a.createElement("div",null,"Pb(OH)",u.a.createElement("sub",null,"4"))},{name:"\u0433\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u043c\u0430\u0440\u0433\u0430\u043d\u0446\u0430 (II)",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:u.a.createElement("div",null,"Mn(OH)",u.a.createElement("sub",null,"2"))},{name:"\u0441\u0443\u043b\u044c\u0444\u0430\u0442 \u043d\u0430\u0442\u0440\u0438\u044f",text:"",type:"\u0421\u043e\u043b\u044c",formula:u.a.createElement("div",null,"Na",u.a.createElement("sub",null,"2"),"SO",u.a.createElement("sub",null,"4"))},{name:"\u0445\u043b\u043e\u0440\u0438\u0434 \u043c\u0435\u0434\u0438 (II)",text:"",type:"\u0421\u043e\u043b\u044c",formula:u.a.createElement("div",null,"CuCl",u.a.createElement("sub",null,"2"))},{name:"\u043a\u0430\u0440\u0431\u043e\u043d\u0430\u0442 \u043a\u0430\u043b\u0438\u044f",text:"",type:"\u0421\u043e\u043b\u044c",formula:u.a.createElement("div",null,"\u041a",u.a.createElement("sub",null,"2"),"CO",u.a.createElement("sub",null,"3"))},{name:"\u0441\u0438\u043b\u0438\u043a\u0430\u0442 \u0431\u0430\u0440\u0438\u044f",text:"",type:"\u0421\u043e\u043b\u044c",formula:u.a.createElement("div",null,"\u0412\u0430SiO",u.a.createElement("sub",null,"3"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:u.a.createElement("div",null,"SO",u.a.createElement("sub",null,"3"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:u.a.createElement("div",null,"P",u.a.createElement("sub",null,"2"),"O",u.a.createElement("sub",null,"5"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:u.a.createElement("div",null,"CO",u.a.createElement("sub",null,"2"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:u.a.createElement("div",null,"N",u.a.createElement("sub",null,"2"),"O",u.a.createElement("sub",null,"3"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:u.a.createElement("div",null,"Cl",u.a.createElement("sub",null,"2"),"O",u.a.createElement("sub",null,"7"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:u.a.createElement("div",null,"WO",u.a.createElement("sub",null,"3"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:u.a.createElement("div",null,"SiO",u.a.createElement("sub",null,"2"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:u.a.createElement("div",null,"Mn",u.a.createElement("sub",null,"2"),"O",u.a.createElement("sub",null,"7"))},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:u.a.createElement("div",null,"CuO")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:u.a.createElement("div",null,"Na",u.a.createElement("sub",null,"2"),"O")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:u.a.createElement("div",null,"Li",u.a.createElement("sub",null,"2"),"O")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:u.a.createElement("div",null,"BaO")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:u.a.createElement("div",null,"CoO")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:u.a.createElement("div",null,"FeO")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:u.a.createElement("div",null,"SrO")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:u.a.createElement("div",null,"Cu",u.a.createElement("sub",null,"2"),"O")},{name:"\u0430\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:u.a.createElement("div",null,"ZnO")},{name:"\u0430\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:u.a.createElement("div",null,"BeO")},{name:"\u0430\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:u.a.createElement("div",null,"Al",u.a.createElement("sub",null,"2"),"O",u.a.createElement("sub",null,"3"))},{name:"\u0430\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:u.a.createElement("div",null,"Fe",u.a.createElement("sub",null,"2"),"O",u.a.createElement("sub",null,"3"))},{name:"\u0430\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:u.a.createElement("div",null,"PbO",u.a.createElement("sub",null,"2"))},{name:"\u0430\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:u.a.createElement("div",null,"MnO",u.a.createElement("sub",null,"2"))},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u0430\u043c\u043c\u043e\u043d\u0438\u044f",text:"\u0421\u0443\u043b\u044c\u0444\u0438\u0434 \u0430\u043c\u043c\u043e\u043d\u0438\u044f",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:u.a.createElement("div",null,"NH",u.a.createElement("sub",null,"4"),"OH")},{name:"C\u0443\u043b\u044c\u0444\u0438\u0442 \u043d\u0430\u0442\u0440\u0438\u044f",text:"C\u0443\u043b\u044c\u0444\u0438\u0442 \u043d\u0430\u0442\u0440\u0438\u044f",type:"\u0421\u043e\u043b\u044c",formula:u.a.createElement("div",null,"Na",u.a.createElement("sub",null,"2"),"SO",u.a.createElement("sub",null,"3"))},{name:"\u0412\u043e\u0434\u0430 (\u043e\u043a\u0441\u0438\u0434 \u0432\u043e\u0434\u043e\u0440\u043e\u0434\u0430)",text:"\u0412\u043e\u0434\u0430",type:"\u041e\u043a\u0441\u0438\u0434",formula:u.a.createElement("div",null,"H",u.a.createElement("sub",null,"2"),"O")}],'"\u041e\u043a\u0441\u0438\u0434\u044b"':[{name:"\u041d\u0435\u0441\u043e\u043b\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u044e\u0449\u0438\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041d\u0435\u0441\u043e\u043b\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u044e\u0449\u0438\u0439",formula:u.a.createElement("div",null,"NO")},{name:"\u041d\u0435\u0441\u043e\u043b\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u044e\u0449\u0438\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041d\u0435\u0441\u043e\u043b\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u044e\u0449\u0438\u0439",formula:u.a.createElement("div",null,"N",u.a.createElement("sub",null,"2"),"O")},{name:"\u041d\u0435\u0441\u043e\u043b\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u044e\u0449\u0438\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041d\u0435\u0441\u043e\u043b\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u044e\u0449\u0438\u0439",formula:u.a.createElement("div",null,"CO")},{name:"\u041d\u0435\u0441\u043e\u043b\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u044e\u0449\u0438\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041d\u0435\u0441\u043e\u043b\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u044e\u0449\u0438\u0439",formula:u.a.createElement("div",null,"SiO")},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439",formula:u.a.createElement("div",null,"SO",u.a.createElement("sub",null,"3"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439",formula:u.a.createElement("div",null,"P",u.a.createElement("sub",null,"2"),"O",u.a.createElement("sub",null,"5"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439",formula:u.a.createElement("div",null,"CO",u.a.createElement("sub",null,"2"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439",formula:u.a.createElement("div",null,"N",u.a.createElement("sub",null,"2"),"O",u.a.createElement("sub",null,"3"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439",formula:u.a.createElement("div",null,"Cl",u.a.createElement("sub",null,"2"),"O",u.a.createElement("sub",null,"7"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439",formula:u.a.createElement("div",null,"WO",u.a.createElement("sub",null,"3"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439",formula:u.a.createElement("div",null,"SiO",u.a.createElement("sub",null,"2"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439",formula:u.a.createElement("div",null,"Mn",u.a.createElement("sub",null,"2"),"O",u.a.createElement("sub",null,"7"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439",formula:u.a.createElement("div",null,"Cl",u.a.createElement("sub",null,"2"),"O",u.a.createElement("sub",null,"3"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439",formula:u.a.createElement("div",null,"NO",u.a.createElement("sub",null,"2"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439",formula:u.a.createElement("div",null,"CrO",u.a.createElement("sub",null,"3"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439",formula:u.a.createElement("div",null,"V",u.a.createElement("sub",null,"2"),"O",u.a.createElement("sub",null,"5"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439",formula:u.a.createElement("div",null,"SeO",u.a.createElement("sub",null,"3"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439",formula:u.a.createElement("div",null,"Br",u.a.createElement("sub",null,"2"),"O",u.a.createElement("sub",null,"5"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439",formula:u.a.createElement("div",null,"As",u.a.createElement("sub",null,"2"),"O",u.a.createElement("sub",null,"5"))},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439",formula:u.a.createElement("div",null,"CuO")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439",formula:u.a.createElement("div",null,"Na",u.a.createElement("sub",null,"2"),"O")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439",formula:u.a.createElement("div",null,"Li",u.a.createElement("sub",null,"2"),"O")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439",formula:u.a.createElement("div",null,"BaO")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439",formula:u.a.createElement("div",null,"CoO")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439",formula:u.a.createElement("div",null,"FeO")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439",formula:u.a.createElement("div",null,"SrO")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439",formula:u.a.createElement("div",null,"Cu",u.a.createElement("sub",null,"2"),"O")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439",formula:u.a.createElement("div",null,"K",u.a.createElement("sub",null,"2"),"O")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439",formula:u.a.createElement("div",null,"Ag",u.a.createElement("sub",null,"2"),"O")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439",formula:u.a.createElement("div",null,"CrO")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439",formula:u.a.createElement("div",null,"Rb",u.a.createElement("sub",null,"2"),"O")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439",formula:u.a.createElement("div",null,"Ge\u041e")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439",formula:u.a.createElement("div",null,"Hg\u041e")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439",formula:u.a.createElement("div",null,"Pb\u041e\xa0")},{name:"\u0410\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u0410\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439",formula:u.a.createElement("div",null,"ZnO")},{name:"\u0410\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u0410\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439",formula:u.a.createElement("div",null,"BeO")},{name:"\u0410\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u0410\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439",formula:u.a.createElement("div",null,"Al",u.a.createElement("sub",null,"2"),"O",u.a.createElement("sub",null,"3"))},{name:"\u0410\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u0410\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439",formula:u.a.createElement("div",null,"Fe",u.a.createElement("sub",null,"2"),"O",u.a.createElement("sub",null,"3"))},{name:"\u0410\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u0410\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439",formula:u.a.createElement("div",null,"PbO",u.a.createElement("sub",null,"2"))},{name:"\u0410\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u0410\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439",formula:u.a.createElement("div",null,"MnO",u.a.createElement("sub",null,"2"))},{name:"\u0410\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u0410\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439",formula:u.a.createElement("div",null,"Cr",u.a.createElement("sub",null,"2"),"O",u.a.createElement("sub",null,"3"))},{name:"\u0410\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u0410\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439",formula:u.a.createElement("div",null,"SnO",u.a.createElement("sub",null,"2"))},{name:"\u0410\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u0410\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439",formula:u.a.createElement("div",null,"TiO",u.a.createElement("sub",null,"2"))},{name:"\u0410\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u0410\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439",formula:u.a.createElement("div",null,"Ge\u041e",u.a.createElement("sub",null,"2"))},{name:"\u0410\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u0410\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439",formula:u.a.createElement("div",null,"Sc",u.a.createElement("sub",null,"2"),"O",u.a.createElement("sub",null,"3"))}]},y=Object.keys(p),O=function(e){return JSON.parse(localStorage.getItem(e)||"[]")},x=function(){return u.a.createElement("div",{className:"main main1-background-size"},y.map((function(e,t){return u.a.createElement("div",{key:e},u.a.createElement("div",null,"BestResultsScreen ",e),O(y[t]).map((function(e){return u.a.createElement("div",{className:"display-flex",key:e.date},u.a.createElement("div",{className:"record-score"},e.score),u.a.createElement("div",{className:"record-date"},new Date(e.date).toLocaleDateString()," ",new Date(e.date).toLocaleTimeString()))})))})))},S=function(){return u.a.createElement("div",{key:"\u0421\u0442\u0430\u0440\u0442",className:"main main1-background-size"},u.a.createElement("div",null,"ErrosScreen"))},h=function(){var e=Object(l.useState)({stepNumber:0,score:0,gradeClass:y[0]}),t=Object(c.a)(e,2),a=t[0],r=a.stepNumber,m=a.score,i=a.gradeClass,s=t[1],E=Object(l.useState)({resufledFormulas:p[i],buttonNames:v(i)}),f=Object(c.a)(E,2),h=f[0],N=h.resufledFormulas,C=h.buttonNames,P=f[1],H=Object(l.useState)(!1),k=Object(c.a)(H,2),g=k[0],T=k[1];Object(l.useEffect)((function(){var e=document.documentElement;e.style.setProperty("--main-animation-duration",10..toFixed(2)+"s"),e.style.setProperty("--click-animation-duration",1..toFixed(2)+"s");var t=setTimeout((function(){return T(!0)}),50);return function(){clearTimeout(t)}}),[]);var w=Object(l.useCallback)((function(e){var t=function(e){var t=e.map((function(e){return[Math.random(),e]}));return t.sort((function(e,t){return e[0]-t[0]})),t.map((function(e){return e[1]}))}(p[e]),a=v(e);P({resufledFormulas:t,buttonNames:a}),s({stepNumber:1,score:0,gradeClass:e}),d(n.START)}),[]),I=Object(l.useCallback)((function(e){var t=e.name,a=e.type,n=e.answer;console.log("handleFinishEvent name = ",t),console.log("handleFinishEvent type = ",a),console.log("handleFinishEvent answer = ",n);var l,u="".concat(t,"/").concat(n),c=parseInt(localStorage.getItem(u)||"0",10);void 0===n?(l=m,localStorage.setItem(u,"".concat(c+1))):a===n?l=m+2:(l=m-1,localStorage.setItem(u,"".concat(c+1)));var o=r>=10||r>=N.length;if(s({stepNumber:o?-1:r+1,score:l,gradeClass:i}),o){var E=O(i);E.push({date:Date.now(),score:l}),E.sort((function(e,t){return t.score-e.score})),E=E.slice(0,5),localStorage.setItem(i,JSON.stringify(E))}}),[r,N.length,i,m]);switch(r){case 0:return u.a.createElement("div",{className:"main main1-background-size"},y.map((function(e,t){return u.a.createElement(o,{key:e,name:"\u041d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443 ".concat(e),className:g?"buttonPositionPlay".concat(t+1," transition-true"):"startPosition",handleClick:function(){return w(e)}})})),u.a.createElement(o,{name:"\u041b\u0443\u0447\u0448\u0438\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b",className:g?"buttonPositionShowRecords transition-true":"startPosition",handleClick:function(){s({stepNumber:-2,score:0,gradeClass:i}),d(n.BEST_RESULTS)}}),u.a.createElement(o,{name:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0435 \u043e\u0442\u0432\u0435\u0442\u044b",className:g?"buttonPositionShowWrongShots transition-true":"startPosition",handleClick:function(){return s({stepNumber:-3,score:0,gradeClass:i})}}));case-1:return u.a.createElement("div",{className:"main main1-background-size"},u.a.createElement("div",{className:g?"buttonPositionPlay result transition-true":"startPosition result"},"\u0418\u0442\u043e\u0433\u043e: ".concat(m)),u.a.createElement(o,{name:"\u0412\u043e\u0437\u0432\u0440\u0430\u0442 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u044b\u0439 \u044d\u043a\u0440\u0430\u043d",className:g?"buttonPositionShowRecords  transition-true":"startPosition",handleClick:function(){return s({stepNumber:0,score:0,gradeClass:i})}}));case-2:return u.a.createElement("div",{onClick:function(){return s({stepNumber:0,score:0,gradeClass:i})}},u.a.createElement(x,null));case-3:return u.a.createElement("div",{onClick:function(){return s({stepNumber:0,score:0,gradeClass:i})}},u.a.createElement(S,null));default:return u.a.createElement(b,{key:r,buttonNames:C,stepNumber:r,checksTotal:10,clickAnimationDuration:1e3,formula:N[r-1],handleFinishEvent:I,handleStopEvent:function(){return s({stepNumber:0,score:0,gradeClass:i})},mainAnimationDuration:1e4,score:m})}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(u.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);