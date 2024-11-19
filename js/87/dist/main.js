(()=>{var t={803:t=>{t.exports=class{constructor(){this.Colors={blue:"#3992D0",red:"#E74C3C",green:"#2ECC71",cyan:"#00CFC8",purple:"#6742D1"},this.message="",this.title="",this.buttons=[],this.askingFor="button",this.setTitle=t=>(this.title=t,this),this.setMessage=t=>(this.message=t,this),this.addButton=(t,e="blue")=>(this.buttons.push({text:t,color:this.Colors[e]||e}),this),this.askForFile=(t=!1,e=null)=>(this.askingFor="file",this.multipleFiles=t,this.accept=e,this),this.askForInput=(t="",e=null)=>(this.askingFor="input",this.placeholder=t,this.charLimit=e,this),this.show=()=>new Promise((t=>{"file"===this.askingFor?this.buttons=[{text:"Cancel",color:"red"},{text:"Select",color:"green"}]:"input"===this.askingFor&&(this.buttons=[{text:"Cancel",color:"red"},{text:"OK",color:"green"}]);let e=document.createElement("div");e.classList.add("message-box-container");let s=document.createElement("div");s.classList.add("message-box");let i=document.createElement("h1");i.classList.add("message-box-title"),i.innerText=this.title;let n=document.createElement("p");n.classList.add("message-box-message"),n.innerText=this.message;let l=document.createElement("div");l.classList.add("message-box-buttons"),this.buttons.length<1&&this.addButton("OK"),this.buttons.forEach((s=>{let i=document.createElement("button");i.classList.add("message-box-button"),i.innerText=s.text,i.style.backgroundColor=s.color,i.addEventListener("click",(()=>{e.remove(),"file"===this.askingFor?"Select"===s.text?(this.multipleFiles&&t(this.fileInput.files||null),t(this.fileInput.files[0]||null)):"Cancel"===s.text&&t(null):"input"===this.askingFor&&("OK"===s.text?t(this.input.value):t(null)),t(s.text)})),l.appendChild(i)})),"file"===this.askingFor?(this.fileInput=document.createElement("input"),this.fileInput.type="file",this.fileInput.classList.add("message-box-file-input"),this.multipleFiles&&this.fileInput.setAttribute("multiple","multiple"),this.accept&&(this.fileInput.accept=this.accept),this.inputText=document.createElement("p"),this.inputText.textContent="Select or drop a file",this.dropZone=document.createElement("div"),this.dropZone.classList.add("message-box-drop-zone"),this.dropZone.onclick=()=>this.fileInput.click(),this.dropZone.ondrop=t=>{t.preventDefault(),t.stopPropagation(),this.accept&&Array.from(t.dataTransfer.files).some((t=>{return e=this.accept,s=t.type,!(e.replace(/\s/g,"").split(",").filter((t=>new RegExp(t.replace(/\*/g,".*")).test(s))).length>0);var e,s}))?this.inputText.textContent="Invalid file format, accpeted formats are: "+this.accept:!this.multipleFiles&&t.dataTransfer.files.length>1?this.inputText.textContent="Only one file can be selected":(this.fileInput.files=t.dataTransfer.files,this.fileInput.oninput())},this.dropZone.ondragover=t=>{t.preventDefault(),t.stopPropagation()},this.fileInput.oninput=()=>{this.inputText.textContent=Array.from(this.fileInput.files).map((t=>t.name)).join(", ")},this.dropZone.appendChild(this.inputText),this.dropZone.appendChild(this.fileInput)):"input"===this.askingFor&&(this.input=document.createElement("input"),this.input.classList.add("message-box-input"),this.input.placeholder=this.placeholder,this.charLimit&&(this.input.maxLength=this.charLimit)),s.appendChild(i),s.appendChild(n),"file"===this.askingFor?s.appendChild(this.dropZone):"input"===this.askingFor&&s.appendChild(this.input),s.appendChild(l),e.appendChild(s),document.body.appendChild(e)}))}}}},e={};function s(i){var n=e[i];if(void 0!==n)return n.exports;var l=e[i]={exports:{}};return t[i](l,l.exports,s),l.exports}(()=>{"use strict";var t=s(803);const e=new class{constructor(t,e){this.first=t,this.last=e}}("donald","trump");console.log(e),(new t).setTitle("hello world").setMessage("this is a message box").addButton("ok","green").addButton("cancel","red").show().then((t=>{console.log(`the user clicked: ${t}`)}))})()})();