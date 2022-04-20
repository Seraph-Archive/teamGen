const Intern = require('../lib/Intern');

const { it, expect } = require("@jest/globals");
const { describe } = require("yargs");

describe('internGen', () => {
    it('Creates an intern object', () => {
        const internNew = new Intern('Sera', 8, 'seraph.archive@gmail.com', 'Seraph Archive')

        expect(internNew.name === 'Sera');
        expect(internNew.id === 8);
        expect(internNew.email === 'seraph.archive@gmail.com');
        expect(internNew.school === 'Seraph Archive')
    })
})