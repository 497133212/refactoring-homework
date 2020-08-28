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

employeeTest('employee case 2. given name type when toString then return throw error', t => {
    // given
    let name = 'AAA';
    let type = 'BBB';

    // when
    try {
        new Employee(name, type);
        t.fail();
    } catch (error) {
        t.is(error.message, "Employee cannot be of type BBB");
    }


});

