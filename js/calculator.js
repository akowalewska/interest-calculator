
function countProfit(payment, numberOfYears, capitalizationPeriod, interestRate, tax) {
    
    /*if (tax) {
        var taxedInterestRate = interestRate * 0.81;
    } else {
        var taxedInterestRate = interestRate;
    }*/
    
    var taxedInterestRate = (tax)?(interestRate*0.81):interestRate;
    
    var capitalTot = payment * Math.pow(1 + (taxedInterestRate/capitalizationPeriod),numberOfYears*capitalizationPeriod);
    
    return capitalTot.toFixed(2);
}


function calculate() {
    
    /* Pobieranie zmiennych z formularza i parsowanie do floata */
    var payment = parseFloat(document.getElementById('payment').value);
    var numberOfYears = parseFloat(document.getElementById('number-of-years'). value);
    var capitalizationPeriod = parseFloat(document.getElementById('capitalization-period').value);
    var interestRate = parseFloat(document.getElementById('interest-rate').value/100);
    var tax = document.getElementById('tax').checked;
    
    /* Przypisywanie wyniku obliczania podatku do zmiennej wynik */
    var result = countProfit(payment, numberOfYears, interestRate, tax, capitalizationPeriod);
    
    document.getElementById('result').innerHTML = 'You will get ' + result + 'pln';
}

document.getElementById('calculate').onclick = calculate;

