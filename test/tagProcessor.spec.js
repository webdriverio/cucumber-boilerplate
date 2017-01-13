import tagProcessor from 'src/tagProcessor';

describe('tagProcessor',
    () => {
        it('should return ["~@Pending"] by default', () => {
            const result = tagProcessor([]);

            expect(result).toEqual(['~@Pending']);
        });

        it('should add tags from the command line', () => {
            const result = tagProcessor(['--tags=@Tag1']);

            expect(result).toEqual(['~@Pending', '@Tag1']);
        });

        it('should not react on other arguments from the command line', () => {
            const result = tagProcessor(['--test=@Test']);

            expect(result).toEqual(['~@Pending']);
        });
    });
