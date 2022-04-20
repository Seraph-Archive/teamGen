const Employee = require('../lib/Employee');

const { it, expect } = require("@jest/globals");
const { describe } = require("yargs");

describe('employeeGen', () => {
    it('Creates an employee object', () => {
        const employeeNew = new Employee('Sera', 8, 'seraph.archive@gmail.com')

        expect(employeeNew.name === 'Sera');
        expect(employeeNew.id === 8);
        expect(employeeNew.email === 'seraph.archive@gmail.com');
    })
})