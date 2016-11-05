var FactorialService = (function () {

    function isNumberValid(number){

        return (number !== undefined)
                &&(number > -1)
                &&(typeof(number) !== 'string')
    }

    function calculate(number) {
        //fatorial por recursividade
        if(!isNumberValid(number)) return null;
            return (number < 2) ? 1 : calculate(number - 1) * number;
    }

    //public api

    return{
        "calculate": calculate
    }

})();