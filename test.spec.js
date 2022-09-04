const assert = require('assert');

const StringCalculator = require ('./src/StringCalc');

    describe('Task TDD' , () => {
        beforeEach(() => {
            this.stringCalc = new StringCalculator();
        });

        it('Calculate empty string', () => {
            assert.strictEqual(this.stringCalc.calculate(''), 0);
        });

        it('Calculate simple string with one element', () => {
            assert.strictEqual(this.stringCalc.calculate('3'), 3);
        });

        it('Calculate simple string with one element 2', () => {
            assert.strictEqual(this.stringCalc.calculate('8'), 8);
        });

        it('Calculate simple string with two elements', () => {
            assert.strictEqual(this.stringCalc.calculate('3,8'), 11);
        });

        it('Calculate simple string with two elements 2', () => {
            assert.strictEqual(this.stringCalc.calculate('1,138'), 139);
        });

        it('Calculate simple string with 3 elements ', () => {
            assert.strictEqual(this.stringCalc.calculate('5,6,7'), 18);
        });

        it('Calculate simple string with "\\n" delimiter ', () => {
            assert.strictEqual(this.stringCalc.calculate('1\n3\n8', '\n'), 12);
        });

        it('Calculate simple string with ";" delimiter ', () => {
            assert.strictEqual(this.stringCalc.calculate('1;3;8', ';'), 12);
        });

        it('String with negative numbers return exceptions', () => {
            const exercise = () => this.stringCalc.calculate('-5;6;7', ';');
            assert.throws(exercise, new Error('Negative numbers not allowed!'));
        });

        it('String with 2 negatives numbers return exceptions', () => {
            const exercise = () => this.stringCalc.calculate('-5;-6;7', ';');
            assert.throws(exercise, new Error('Negative numbers not allowed!'));
        });
    });
