import { Person } from "./class2.js";
const p1 = new Person('donald', 'trump');
console.log(p1);
import * as MessageBox from 'messagebox.js';
let mb = new MessageBox()
.setTitle('hello world')
.setMessage('this is a message box')
.addButton('ok','green')
.addButton('cancel','red');

mb.show().then(response => {console.log(`the user clicked: ${response}`)})