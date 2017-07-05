webOrganizerApp.controller('calculatorController', ['calculatorService', function(calculatorService) {

    var vm = this;

    vm.enterField = '';

    vm.cleanEnterField = function() {
        vm.enterField = '';
    };

    vm.removeLastChar = function() {
        var lastEnterStringChar = vm.enterField.length - 1,
            clippedEnterString = vm.enterField.slice(0, lastEnterStringChar);

        vm.enterField = clippedEnterString;
    };

    vm.enterNumericSymbol = function(numericSymbol) {
        vm.enterField += numericSymbol;
    };

    vm.enterOperatorSymbol = function(operatorSymbol) {
        vm.enterField += " " + operatorSymbol + " ";
    };

    vm.implementCalculating = function() {
        var mathExpression = vm.enterField;
        calculatorService.implementCalculating(mathExpression);
    };
}]);
