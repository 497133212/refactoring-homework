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

deliveryTest('delivery case 2. given anOrder and isPush when deliveryDate then return 3', t => {
  // given
  const isRush = true;
  const anOrder = {
    "deliveryState": "NY",
    "placedOn": {
      "plusDays": function plusDays(deliveryTime) {
        return deliveryTime;
      }
    },
  };

  // when
  let result = deliveryDate(anOrder, isRush);
  // then
  t.is(result, 3);
});

deliveryTest('delivery case 3. given anOrder and isPush when deliveryDate then return 4', t => {
  // given
  const isRush = true;
  const anOrder = {
    "deliveryState": "YY",
    "placedOn": {
      "plusDays": function plusDays(deliveryTime) {
        return deliveryTime;
      }
    },
  };

  // when
  let result = deliveryDate(anOrder, isRush);
  // then
  t.is(result, 4);
});

deliveryTest('delivery case 4. given anOrder and isPush when deliveryDate then return 4', t => {
  // given
  const isRush = false;
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
  t.is(result, 4);
});

deliveryTest('delivery case 5. given anOrder and isPush when deliveryDate then return 5', t => {
  // given
  const isRush = false;
  const anOrder = {
    "deliveryState": "ME",
    "placedOn": {
      "plusDays": function plusDays(deliveryTime) {
        return deliveryTime;
      }
    },
  };

  // when
  let result = deliveryDate(anOrder, isRush);
  // then
  t.is(result, 5);
});

