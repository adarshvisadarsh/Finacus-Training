import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredname, setenteredname] = useState("");
  const [enternametouched, setenternametouched] = useState(false);

  const entervalid = enteredname.trim() !== "";
  const nameinputisinvalid = !entervalid && enternametouched;

  let formisvalid = false

  if(entervalid){
    formisvalid=true;
  }

  const nameinputhandler = (event) => {
    setenteredname(event.target.value);
  };

  const enternameblur = (event) => {
    setenternametouched(true);
  };

  const submitformhandler = (event) => {
    event.preventDefault();

    setenternametouched(true);
    if (!entervalid) {
      return;
    }
    console.log(enteredname);
    setenteredname("");
    setenternametouched(false);
  };

  const inputvalid = nameinputisinvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={submitformhandler}>
      <div className={inputvalid}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameinputhandler}
          value={enteredname}
          onBlur={enternameblur}
        />
        {nameinputisinvalid && <p>must not be empty </p>}
      </div>
      <div className="form-actions">
        <button disabled={!formisvalid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
