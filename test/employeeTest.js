import {Employee} from "../src/employee";

const employeeTest = require('ava');


employeeTest('employee case 1. given name and type when toString then return result', t => {
    // given
    let name = 'AAA';
    let type = 'engineer';

    // when
    let result = new Employee(name, type);

    // then
    t.is(result.toString(), 'AAA (engineer)')

});


