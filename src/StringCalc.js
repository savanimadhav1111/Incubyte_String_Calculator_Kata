module.exports = class StringCalculator {
    constructor() {}

    calculate(numStr = '', del = ',') {
        let sum = 0;

        this.convertString(numStr, del).forEach((number) => {
            this.validateNumber(number);
            sum += +number;
        });

        return sum;
    }

    convertString(string, del) {
        return string.split(del);
    }

    validateNumber(number) {
        if(number < 0) {
            throw Error('Negative numbers not allowed!');
        }
    }
};
