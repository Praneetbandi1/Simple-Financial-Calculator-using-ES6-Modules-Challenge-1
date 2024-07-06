/*U46368100
Investment Return Calculation Module */
export function investmentReturnCalculator(principal,rate,time,n){
    return (principal * (1 + rate /n) ** (n * time));
}