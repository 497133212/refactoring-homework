import {printOwing} from "../src/print";
const printTest = require('ava');


printTest('printOwing case 1. given invoice when printOwing then print details', t => {

  const invoice = {
    "dueDate": new Date(),
    "customer": "AAA",
    "borderSpacing": [{
        "amount": 1
      },
      {
        "amount": 2
      },
      {
        "amount": 3
      }
    ]

  };
  printOwing(invoice);
  t.pass();
})

