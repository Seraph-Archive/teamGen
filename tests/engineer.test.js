const Engineer = require('../lib/Engineer');

const { it, expect } = require("@jest/globals");
const { describe } = require("yargs");

describe('engineerGen', () => {
    it('Creates an engineer object', () => {
        const engineerNew = new Engineer('Sera', 8, 'seraph.archive@gmail.com', 'Seraph-Archive')

        expect(engineerNew.name === 'Sera');
        expect(engineerNew.id === 8);
        expect(engineerNew.email === 'seraph.archive@gmail.com');
        expect(engineerNew.github === 'Seraph-Archive')
    })
})