import express from 'express';
import checkForNaN from './checkForNaN.js';

const app = express();
app.use(checkForNaN);

// eslint-disable-next-line no-unused-vars
app.get('/add', (req, res, next) => {
  const val1 = req.query.val1;
  const val2 = req.query.val2;
  res.end((val1 + val2).toString());
});

// eslint-disable-next-line no-unused-vars
app.get('/subtract', (req, res, next) => {
  const val1 = req.query.val1;
  const val2 = req.query.val2;
  res.end((val1 - val2).toString());
});

// eslint-disable-next-line no-unused-vars
app.get('/chooseOp', (req, res, next) => {
  const val1 = req.query.val1;
  const val2 = req.query.val2;
  const operator = req.query.operator;
  switch (operator) {
    case '+': res.end((val1 + val2).toString());
      break;
    case '-': res.end((val1 - val2).toString());
      break;
    case '*': res.end((val1 * val2).toString());
      break;
    case '/': res.end((val1 / val2).toString());
      break;
  }
});
app.listen(80);