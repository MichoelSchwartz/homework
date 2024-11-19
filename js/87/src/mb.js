import * as MessageBox from 'messagebox.js';
let mb = new MessageBox()
.setTitle('hello world')
.setMessage('this is a message box')
.addButton('ok','green')
.addButton('cancel','red');

mb.show().then(response => {console.log(`the user clicked: ${response}`)})

