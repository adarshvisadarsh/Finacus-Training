import useInput from "../Hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNamehasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNamehasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetlastName,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailhasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetemail,
  } = useInput(isEmail);

  let formisvalid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formisvalid = true;
  }

  const firstNameClasses = firstNamehasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = lastNamehasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailhasError ? "form-control invalid" : "form-control";

  const submitHandler=event => {
    event.preventDefault();
    if(!formisvalid) {
      return;
    }

    console.log('submitted');
    console.log(firstNameValue, lastNameValue, emailValue);

    resetFirstName();
    resetlastName();
    resetemail();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNamehasError && <p className='error-text'>Please enter a first Name</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNamehasError && <p className='error-text'>Please enter a last Name</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailhasError && <p className='error-text'>Please enter a email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formisvalid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
