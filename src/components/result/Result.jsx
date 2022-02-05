import "./result.css";

function Result({ result }) {
  return (
    <div className="result-container">
      <div className="first-row">
        <span className="country-city">
          {result[4]} - {result[5]}
        </span>
        <span className="email">Email: {result[2]}</span>
      </div>
      <div className="second-row">
        <span className="name-surname-date">
          {result[0]} - {result[3].split("/")[2]}
        </span>
      </div>
      <hr />
    </div>
  );
}

export default Result;
