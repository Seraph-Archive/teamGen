const Manager = require('../lib/Manager');

const { it, expect } = require("@jest/globals");
const { describe } = require("yargs");

describe('managerGen', () => {
    it('Creates a manager object', () => {
        const managerNew = new Manager('Sera', 69, 'seraph.archive@gmail.com', 666)

        expect(managerNew.name === 'Sera');
        expect(managerNew.id === 69);
        expect(managerNew.email === 'seraph.archive@gmail.com');
        expect(managerNew.officeNum === 666);
    })
})