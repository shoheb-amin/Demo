document.addEventListener("DOMContentLoaded", function () {

    const loanAmountInput = document.querySelector("#loan-amount");
    const interestRateInput = document.querySelector("#interest-rate");
    const loanTenureInput = document.querySelector("#loan-tenure");

    const loanAmountDisplay = document.getElementById("loan-amount-display");
    const interestRateDisplay = document.getElementById("interest-rate-display");
    const loanTenureDisplay = document.getElementById("loan-tenure-display");

    const emiResult = document.getElementById("emi-result");

    function updateEmi() {

        const loanAmount = parseFloat(loanAmountInput.value);
        const annualInterestRate = parseFloat(interestRateInput.value);
        const loanTenure = parseFloat(loanTenureInput.value);

        loanAmountDisplay.textContent = loanAmount;
        interestRateDisplay.textContent = annualInterestRate + "%";
        loanTenureDisplay.textContent = loanTenure + " Years";

        const monthlyInterestRate = annualInterestRate / (12 * 100);
        const numberOfMonths = loanTenure * 12;

        const emi =
            (loanAmount *
                monthlyInterestRate *
                Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
            (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

        emiResult.textContent = "₹" + emi.toFixed(2);
    }

    loanAmountInput.addEventListener("input", updateEmi);
    interestRateInput.addEventListener("input", updateEmi);
    loanTenureInput.addEventListener("input", updateEmi);

    updateEmi();
});