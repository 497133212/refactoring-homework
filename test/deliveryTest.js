import {deliveryDate} from "../src/delivery";
const deliveryTest = require('ava');


deliveryTest('delivery case 1. given anOrder and isPush when deliveryDate then return 2', t => {
  // given
  const isRush = true;
  const anOrder = {
    "deliveryState": "MA",
    "placedOn": {
      "plusDays": function plusDays(deliveryTime) {
        return deliveryTime;
      }
    },
  };

  // when
  let result = deliveryDate(anOrder, isRush);
  // then
  t.is(result, 2);
});


