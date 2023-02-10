import { useState } from "react";
function Form({ getData }) {
  const [Weight, setWeight] = useState("");
  const [Height, setHeight] = useState("");
  const [alert, setAlert] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (isNaN(Weight) || isNaN(Height)) {
      console.log("not a valid input");
      setAlert(true);
    } else {
      getData(Weight, Height);
      setAlert(false);
      setHeight("");
      setWeight("");
    }
  };
  //let alertMessage
  //if(alert){
  //alertMessage= <div className="alert alert-danger"role={"alert"}>please enter valid data</div>
  //}else{
  // alertMessage="";
  // }

  return (
    <div className="col-sm-4 shadow rounded px-5">
      <h1 className="text-center pt-3 text-secondory h2">BMI Calculator</h1>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col col-sm-6">
            <div className="my-3">
              <label className="form-label">Weight(Kg) :</label>
              <input
                type="text"
                value={Weight}
                onChange={(e) => setWeight(e.target.value)}
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="col col-sm6">
            <div className="my-3">
              <label className="form-label">Height(m) :</label>
              <input
                type="text"
                value={Height}
                onChange={(e) => setHeight(e.target.value)}
                className="form-control"
                required
              />
            </div>
          </div>
        </div>
        <input
          type="submit"
          className="btn btn-primary my-3 "
          value="Get BMI"
        ></input>
      </form>
      {alert && (
        <div className="alert alert-danger" role={"alert"}>
          please enter valid data
        </div>
      )}
    </div>
  );
}

export default Form;
