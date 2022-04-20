const Employee = require('../lib/Employee');

const { it, expect } = require("@jest/globals");
const { describe } = require("yargs");

describe('employeeGen', () => {
    it('Recieves an employees name', () => {
        const employeeNew = new Employee('Sera', 8, 'seraph.archive@gmail.com')

        expect(employeeNew.name === 'Sera');
    })
})