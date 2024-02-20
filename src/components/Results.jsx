import { calculateInvestmentResults } from "../util/investment";


export default function Results({ userInput }) {


    const resultsData = calculateInvestmentResults(userInput);
    const initialInvestment = resultsData[0].valueEndOfYear -
        resultsData[0].interest -
        resultsData[0].annualInvestment;

    console.log("RESULTS DATA: ", resultsData);

    console.log(userInput);
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>

            <tbody>
                {resultsData.map(yearData => {
                    const totalInterest = yearData.valueEndOfYear -
                        yearData.annualInvestment * yearData.year -
                        initialInvestment;
                    
                    const totalAmountInvested = yearData.valueEndOfYear - totalInterest;


                    return <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{yearData.valueEndOfYear}</td>
                        <td>{yearData.interest}</td>
                        <td>{totalInterest}</td>
                        <td>{totalAmountInvested}</td>
                    </tr>
                })}
            </tbody>

        </table>
    )

}