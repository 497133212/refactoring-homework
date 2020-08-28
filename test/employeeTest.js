const employeeTest = require('ava');
const {
  Employee
} = require('../src/employee');

employeeTest('employee case 1. given name and type when toString then return result', t => {
  // given
  let name = 'AAA';
  let type = 'engineer';

  // when
  let result = new Employee(name, type);

  // then
  t.is(result.toString(), 'AAA (engineer)')

});


