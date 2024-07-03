/* U46368100
Loan Payment Calculation Module */

export function loanPaymentCalculator(principal,rate,n){
    return (principal * [rate*(1+rate)**n]) / [(1+rate)**n-1];
}