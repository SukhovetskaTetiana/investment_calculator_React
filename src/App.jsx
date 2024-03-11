import React, { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

const ARGUMENTS = {
  initialInvestment: 15000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(ARGUMENTS);

  const inputIsValid = userInput.duration >= 1;

  const handleInputValue = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  };
  return (
    <>
      <Header />
      <main>
        <section id="user-input">
          <div className="input-group">
            <p>
              <UserInput
                fieldName="initial investment"
                inputIdentifier="initialInvestment"
                userInput={userInput.initialInvestment}
                onChangeArgument={handleInputValue}
              />
            </p>
            <p>
              <UserInput
                fieldName="annual investment"
                inputIdentifier="annualInvestment"
                userInput={userInput.annualInvestment}
                onChangeArgument={handleInputValue}
              />
            </p>
          </div>
          <div className="input-group">
            <p>
              <UserInput
                fieldName="expected return"
                inputIdentifier="expectedReturn"
                userInput={userInput.expectedReturn}
                onChangeArgument={handleInputValue}
              />
            </p>
            <p>
              <UserInput
                fieldName="duration"
                inputIdentifier="duration"
                userInput={userInput.duration}
                onChangeArgument={handleInputValue}
              />
            </p>
          </div>
        </section>
        {!inputIsValid && (
          <p className="center">Please enter a duration greater than zero.</p>
        )}
        {inputIsValid && <Result userInput={userInput} />}
      </main>
    </>
  );
}

export default App;
