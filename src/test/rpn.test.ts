import { RPNCalculator } from "../rpn_calculator";


describe('RPN calculator', () => {
    test('divide should be working', () => {
        let calculator = new RPNCalculator("20 5 / ");
    
        expect(calculator.calculate()).toBe(4);
    });
    
    
    test('arithmetic should be working', () => {
        let calculator = new RPNCalculator("4 2 + 3 -");
    
        expect(calculator.calculate()).toBe(3);
    });
    
    test('multiplying and addition should be working', () => {
        let calculator = new RPNCalculator("3 5 8 * 7 + *");
    
        expect(calculator.calculate()).toBe(141);
    });
    
    test('squareroot should be working', () => {
        let calculator = new RPNCalculator("9 SQRT");
    
        expect(calculator.calculate()).toBe(3);
    });

    test('squareroot should return original value if invalid', () => {
        let calculator = new RPNCalculator("10 SQRT");
    
        expect(calculator.calculate()).toBe(10);
    });

    test('max should be working', () => {
        let calculator = new RPNCalculator("3 5 6 9 MAX");
    
        expect(calculator.calculate()).toBe(9);
    });
});
