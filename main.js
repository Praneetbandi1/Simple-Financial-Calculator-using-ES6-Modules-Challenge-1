/* U46368100
Main Module*/
//Importing function
import { interestRateCalculator} from "./interestRate.js";
import { loanPaymentCalculator} from "./loanPayment.js";
import { investmentReturnCalculator} from "./investmentReturn.js";

addEventListener("DOMContentLoaded",(event)=> {
    //Calculate Interest rate:
    document.getElementById("interestRateCalculator").addEventListener("click",()=> {

        const principal=parseFloat(document.getElementById("principal").value);
        //Converts annual percentage rate to monthl 100*12=1200
        const rate=(parseFloat(document.getElementById("rate").value)/1200);
        const time=parseFloat(docuemnt.getElementById("time").value);

        const intervalRateTotal=interestRateCalculator(principal,rate,time);
        document.getElementById("interestRateResult").innerText=`Total Interest: $${interestRateTotal.tofixed(2)}`;

    })

    //Calculate the Loan Payment
    document.getElementById("loanPaymentCalculator").addEventListener("click",()=> {
        const principal=parseFloat(document.getElementById("principal").value);
        //Converts annual percentage to monthly 100*12=1200
        const rate=(parseFloat(document.getElementById("n").value));
        const n =parseFloat(document.getElementById("n").value);

        const monthlyLoanTotal=loanPaymentCalculator(principal,rate,n )
        document .getElementById("loanPaymentResult").innerText=`Monthly Loan Payments: $${monthlyLoanTotal.toFixed(2)}`;
    })

    //Calculate Return on Investment:
    document.getElementById("investmentReturnCalculator").addEventListener("click",()=>{
        const principal =parseFloat(document.getElementById("principal").value);
        //Converts annual percentage rate to monthly 100*12=1200
        const rate=(parseFloat(document.getElementById("rate").value)/1200);
        const time=parseFloat(document.getElementById("time").value);
        const n=parseFloat(document.getElementById("n").value);

        const returnInvestmentTotal=investmentReturnCalculator(principal,rate,time,n);
        document.getElementById("InvestmentReturnResult").innerText =
`Return on Investment: $${returnInvestmentTotal.toFixed(2)}`;
    
    })

    document.getElementById("reset").addEventListener("click",()=> {

        document.getElementById("principal").value="";
        document.getElementById("rate").value="";
        document.getElementById("time").value="";
        document.getElementById("n").value="";
        document.getElementById("interestRateResult").innerText="";
        document.getElementById("loanPaymentResult").innerText="";
        document.getElementById("investmentReturnResult").innerText="";

})

    });
    

}