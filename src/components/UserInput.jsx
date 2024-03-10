export default function UserInput({
  fieldName,
  inputIdentifier,
  userInput,
  onChangeArgument,
}) {
  const handleInputChange = (inputIdentifier, newValue) => {
    onChangeArgument(inputIdentifier, newValue);
  };
  return (
    <>
      <label>{fieldName}</label>
      <input
        type="number"
        required
        value={userInput}
        onChange={(event) =>
          handleInputChange(inputIdentifier, event.target.value)
        }
      />
    </>
  );
}
