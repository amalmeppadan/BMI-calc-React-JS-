function BmiList({ range, bmi }) {
  console.log(bmi);
  console.log(range);
  return (
    <div className="text-center shadow-sm rounded">
      <ul className="list-group">
        <li className="list-group-item">
          <div className="row">
            <div className="col-4 fw-bold">Type</div>
            <div className="col-4 fw-bold">BMI</div>
            <div className="col-4 fw-bold">Weight</div>
          </div>
        </li>
        <li
          className={
            bmi < 18.5
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col-4 fw-bold">UnderWeight</div>
            <div className="col-4 fw-bold">&lt;18.5</div>
            <div className="col-4 fw-bold">&lt;{range.underWeight.low} Kg</div>
          </div>
        </li>
        <li
          className={
            18.5<bmi && bmi < 24.9
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col-4 fw-bold">Normal</div>
            <div className="col-4 fw-bold">18.5-24.9</div>
            <div className="col-4 fw-bold">
              {range.normal.low + "Kg -" + range.normal.high + "Kg"}
            </div>
          </div>
        </li>
        <li
          className={
            24.9<bmi && bmi < 29.9
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col-4 fw-bold">OverWeight</div>
            <div className="col-4 fw-bold">25-29.9</div>
            <div className="col-4 fw-bold">
              {range.overWeight.low + "Kg -" + range.overWeight.high + "Kg"}
            </div>
          </div>
        </li>
        <li
          className={
            29.9<bmi && bmi < 34.9
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col-4 fw-bold">Obesity class 1</div>
            <div className="col-4 fw-bold">30-34.9</div>
            <div className="col-4 fw-bold">
              {range.obesityOne.low + "Kg -" + range.obesityOne.high + "Kg"}
            </div>
          </div>
        </li>

        <li
          className={
             34.9<bmi && bmi < 39.9
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col-4 fw-bold">Obesity class 2</div>
            <div className="col-4 fw-bold">35-39.9</div>
            <div className="col-4 fw-bold">
              {range.obesityTwo.low + "Kg -" + range.obesityTwo.high + "Kg"}
            </div>
          </div>
        </li>
        <li
          className={
            bmi > 39.9
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col-4 fw-bold">Obesity class 3</div>
            <div className="col-4 fw-bold">&gt;40</div>
            <div className="col-4 fw-bold">
              &gt;{range.obesityThree.high + "Kg"}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default BmiList;
