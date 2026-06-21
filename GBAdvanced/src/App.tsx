// FIXED: import was lowercase and unused; import Component and render it below
// import calculator from './components/Calculator'
import Calculator from "./components/Calculator";
import "./App.css";

function App() {
  return (
    <>
      {/* FIXED: App returned empty fragment; render the Calculator component */}
      <Calculator />
    </>
  );
}

export default App;
