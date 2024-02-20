import { useState } from "react";

import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >=1;

    console.log("User INPUT: ", userInput);
  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue //this is JS syntax for dynamically modifying the given value (inputIdentifier
        // which is either initialInvestment, annualInvestment, expectedReturn or duration in the given object)
        // the + is for converting the newValue from string to a number
      }
    })
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {/* you don't call the function here, you just use it as a value and you passs it to UserInput component (as a destructured parameter in : export default function UserInput({onChange})) */}
     {!inputIsValid && <p className="center">Please enter a duration greater than zero</p>}
     {inputIsValid && <Results userInput={userInput} /> }
    </>
  )
}

export default App;
