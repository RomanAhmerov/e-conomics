document.addEventListener("DOMContentLoaded", () => {
    // Investments or Credit
    // Radio Button
    const radioInvest = document.getElementById('btnradio1');
    const radioCredit = document.getElementById('btnradio2');

    // Wrappers (Investments or Credit)
    const wrapperInvest = document.querySelector('.investments');
    const wrapperCredit = document.querySelector('.credit');

    // Event Listener
    radioInvest.addEventListener('click', () => {
        wrapperInvest.classList.add('d-block');
        wrapperInvest.classList.remove('d-none');

        wrapperCredit.classList.add('d-none');
        wrapperCredit.classList.remove('d-block');
    });

    radioCredit.addEventListener('click', () => {
        wrapperCredit.classList.add('d-block');
        wrapperCredit.classList.remove('d-none');

        wrapperInvest.classList.add('d-none');
        wrapperInvest.classList.remove('d-block');
    });



    // Investments
    const investBtn = document.querySelector('.invest-btn');

    const initialPay = document.getElementById('initial-pay');
    const mouthPay = document.getElementById('mouth-pay');
    const percent = document.getElementById('percent');
    const countYear = document.getElementById('count-year');

    const resultWrapper = document.querySelector('.result')

    investBtn.addEventListener('click', () => {
        let i = Number(initialPay.value);
        let m = Number(mouthPay.value);
        let p = Number(percent.value);
        let c = Number(countYear.value);

        let result = (i + m * 11) + (i + m * 11) * p / 100;

        for (let j = 0; j < c - 1; j++) {
            result += m * 12;
            result += result * p / 100;
        }

        resultWrapper.classList.remove('d-none');
        resultWrapper.textContent = `${result} (общая накопленная сумма)`;
    });
    

    // Credit
    const investBtnC = document.querySelector('.credit-btn');

    const totalC = document.getElementById('total-credit');
    const initialPayC = document.getElementById('initial-pay-credit');
    const mouthPayC = document.getElementById('mouth-pay-credit');
    const percentC = document.getElementById('percent-credit');

    const resultWrapperC = document.querySelector('.result-credit')

    investBtnC.addEventListener('click', () => {
        let t = Number(totalC.value);
        let i = Number(initialPayC.value);
        let m = Number(mouthPayC.value);
        let p = Number(percentC.value);
        let c = 1

        let result = (t - i - m * 11) * (1 + p / 100);

        while (result > 0) {
            result -= m * 12;
            result += result * p / 100;
            c++;
        }

        resultWrapperC.classList.remove('d-none');
        resultWrapperC.textContent = `${c} года/лет`;
    });

});