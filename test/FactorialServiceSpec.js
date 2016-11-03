describe('FactorialService.js', function() {

    it('shold calculate the Factorial from given number', function(){
        expect(FactorialService.calculate(5)).toBe(120);
    });

});