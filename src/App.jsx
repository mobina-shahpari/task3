function App() {
  const numbers = [2, 46, 1, 38, 4];

  // Map() example
  const numbers2 = numbers.map((e) => e);

  // Filter() example: I want to return only numbers greater than 10
  const filteredNumbers = numbers.filter((e) => e > 10);

  // Reduce() example: 0 + 2 + 46 + 1 + 38 + 44
  const initialValue = 0;
  const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  // Find() exmaple
  const foundNumbers = numbers.find((e) => e % 2 == 0);

  // FindIndex() example
  const index = numbers.findIndex((e) => e > 40);

  return (
    <>
      <h2>Map() example</h2>
      <ul>
        {numbers2.map((number, index) => {
          return <li key={index}>{number}</li>;
        })}
      </ul>
      <hr />

      <h2>Filter() example</h2>
      <ul>
        {filteredNumbers.map((filteredNumber, index) => {
          return <li key={index}>{filteredNumber}</li>;
        })}
      </ul>
      <hr />

      <h2>Reduce() example</h2>
      <div>{sum}</div>
      <hr />

      <h2>Find() example</h2>
      <div>{foundNumbers}</div>
      <hr />

      <h2>FindIndex() example</h2>
      <div>{index}</div>
    </>
  );
}

export default App;