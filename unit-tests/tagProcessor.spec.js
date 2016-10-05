const chai = require('chai');
const expect = chai.expect;

describe(
    'tagProcessor', () => {
        const tagProcessor = require('./../test/tagProcessor');

        it('should return ["~@Pending"] by default', () => {
            expect(tagProcessor([])).to.deep.equal(['~@Pending']);
        });

        it('should add tags from the command line', () => {
            expect(tagProcessor(['--tags=@Tag1'])).to.deep.equal(['~@Pending', '@Tag1']);
        });

        it('should not react on other arguments from the command line', () => {
            expect(tagProcessor(['--test=@Test'])).to.deep.equal(['~@Pending']);
        });
    }
)
