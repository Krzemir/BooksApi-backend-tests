const { expect } = require('chai');
const formatFullname = require('../formatFullname');

describe('FormatFullname', () => {
    it('should return Error if "fullName" arg is not a string', () => {
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname(12)).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname(function() {}, 'abc')).to.equal('Error');
    })
    it('should return "Error" if there is no "fullName" arg', () => {
        expect(formatFullname('')).to.equal('Error');
    })
    it('should return "Error" if there is more or less than 2 words in arg "fullName"', () => {
        expect(formatFullname('abc def ghi')).to.equal('Error');
        expect(formatFullname('abc')).to.equal('Error');
    })
    
})