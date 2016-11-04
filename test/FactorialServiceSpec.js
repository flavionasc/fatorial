describe('FactorialService.js', function() {

    it('shold calculate the Factorial from given number', function(){

        expect(FactorialService.calculate(1)).toBe(1);
        expect(FactorialService.calculate(2)).toBe(2);
        expect(FactorialService.calculate(3)).toBe(6);
        expect(FactorialService.calculate(4)).toBe(24);
        expect(FactorialService.calculate(5)).toBe(120);
    });

    it('shold return 1 (one) if the given number is 0 (zero)', function(){
        expect(FactorialService.calculate(0)).toBe(1);
    });

     it('shold return null if an invalid param was given', function(){
        expect(FactorialService.calculate(-1)).toBe(null);
        expect(FactorialService.calculate("1")).toBe(null);
        expect(FactorialService.calculate("")).toBe(null);
    });
});