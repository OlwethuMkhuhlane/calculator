(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(t,e,a){t.exports=a(24)},,,,,,function(t,e,a){},,function(t,e,a){},,function(t,e,a){},,function(t,e,a){},,function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(7),c=a.n(i),l=(a(14),a(1)),s=a(2),u=a(4),o=a(3),p=a(5),d=(a(16),a(18),function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(t=Object(o.a)(e)).call.apply(t,[this].concat(r)))).isOperator=function(t){return!isNaN(t)||"."===t||"="===t},a}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"button ".concat(this.isOperator(this.props.children)?"":"operator"),onClick:function(){return t.props.handleClick(t.props.children)}},this.props.children)}}]),e}(n.Component)),m=(a(20),function(t){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"input"}," ",this.props.children," ")}}]),e}(n.Component)),h=(a(22),function(t){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"clear-btn",onClick:function(){return t.props.handleClear()}},this.props.children)}}]),e}(n.Component)),b=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(u.a)(this,Object(o.a)(e).call(this,t))).addToInput=function(t){a.setState({input:a.state.input+t})},a.addDecimal=function(t){-1===a.state.input.indexOf(".")&&a.setState({input:a.state.input+t})},a.addZeroToInput=function(t){""!==a.state.input&&a.setState({input:a.state.input+t})},a.clearInput=function(){a.setState({input:""})},a.add=function(){a.state.previousNumber=a.state.input,a.setState({input:""}),a.state.operator="plus"},a.subtract=function(){a.state.previousNumber=a.state.input,a.setState({input:""}),a.state.operator="subtract"},a.multiply=function(){a.state.previousNumber=a.state.input,a.setState({input:""}),a.state.operator="multiply"},a.divide=function(){a.state.previousNumber=a.state.input,a.setState({input:""}),a.state.operator="divide"},a.evaluate=function(){a.state.currentNumber=a.state.input,"plus"==a.state.operator?a.setState({input:parseInt(a.state.previousNumber)+parseInt(a.state.currentNumber)}):"subtract"==a.state.operator?a.setState({input:parseInt(a.state.previousNumber)-parseInt(a.state.currentNumber)}):"multiply"==a.state.operator?a.setState({input:parseInt(a.state.previousNumber)*parseInt(a.state.currentNumber)}):"divide"==a.state.operator&&a.setState({input:parseInt(a.state.previousNumber)/parseInt(a.state.currentNumber)})},a.state={input:"",previousNumber:"",currentNumber:"",operator:""},a}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Simple Calculator"),r.a.createElement("ul",{id:"list"},r.a.createElement("li",null,"make basic calculations"),r.a.createElement("li",null,"try out ll functionality")),r.a.createElement("div",{className:"App"},r.a.createElement("div",{id:"header"}),r.a.createElement("div",{className:"calc-wrapper"},r.a.createElement("div",{className:"row"},r.a.createElement(m,null," ",this.state.input," ")," "," ")," "," "," ",r.a.createElement("div",{className:"row"},r.a.createElement(d,{handleClick:this.addToInput}," 1 ")," "," ",r.a.createElement(d,{handleClick:this.addToInput}," 2 ")," "," ",r.a.createElement(d,{handleClick:this.addToInput}," 3 ")," "," ",r.a.createElement(d,{handleClick:this.divide}," \xf7 ")," "," ")," "," "," ",r.a.createElement("div",{className:"row"},r.a.createElement(d,{handleClick:this.addToInput}," 4 ")," "," ",r.a.createElement(d,{handleClick:this.addToInput}," 5 ")," "," ",r.a.createElement(d,{handleClick:this.addToInput}," 6 ")," "," ",r.a.createElement(d,{handleClick:this.multiply}," * ")," "," ")," "," "," ",r.a.createElement("div",{className:"row"},r.a.createElement(d,{handleClick:this.addToInput}," 7 ")," "," ",r.a.createElement(d,{handleClick:this.addToInput}," 8 ")," "," ",r.a.createElement(d,{handleClick:this.addToInput}," 9 ")," "," ",r.a.createElement(d,{handleClick:this.add}," + ")," "," ")," "," "," ",r.a.createElement("div",{className:"row"},r.a.createElement(d,{handleClick:this.addDecimal}," 0 ")," "," ",r.a.createElement(d,{handleClick:this.addZeroToInput}," . ")," "," ",r.a.createElement(d,{handleClick:this.evaluate}," = ")," "," ",r.a.createElement(d,{handleClick:this.subtract}," - ")," "," ",r.a.createElement(h,{handleClear:this.clearInput}," Clear ")," "," ")," "," "," ",r.a.createElement("div",{className:"row"}," "," ")," "," ")," "," "))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[8,2,1]]]);
//# sourceMappingURL=main.5e4ab8dd.chunk.js.map