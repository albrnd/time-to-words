const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  const testCases = [
    ['0:00', 'midnight'],
    ['12:00', 'midday'],
    ['8:30', 'half past eight'],
    ['2:45', 'quarter to three'],
    ['2:50', 'ten to three'],
    ['2:00', 'two o\'clock']
  ];

  testCases.forEach( test => {
    it('should handle correct time', () => {
      const [input, expected] = test;

      expect(convertTimeToWords(input)).toEqual(expected);
    });
  });

});
