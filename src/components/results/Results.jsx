import Result from "../result/Result";

function Results({ results }) {
  console.log(results);
  return (
    <div>
      {results.map((result, index) => (
        <Result key={index} result={result} />
      ))}
    </div>
  );
}

export default Results;
