const daysOfWeek = (function () {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Shabbos'];

    function getDay(index) {
        return days[index - 1];
    }

    return {
        getDay,
        getDayIndex(day) {
            const index = days.findIndex(m => m === day);
            return index + 1;
        }
    };
}());
console.log(daysOfWeek.getDay(5));
console.log(daysOfWeek.getDayIndex('Tuesday'));

const interestCalc = (function () {

    let intYears;
    let intRate;

    return {
        setRate: function (rate) {
            intRate = rate;
        },
        setYears: function (years) {
            intYears = years;
        },
        calculateInterest: function (principal) {
            return principal * intRate * intYears;
        }
    };
})();

interestCalc.setRate(.03375);
interestCalc.setYears(30);
console.log(interestCalc.calculateInterest(700000));
