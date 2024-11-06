import Button from "./assignment/Button";
import User from "./Components/User";

function App() {

  const handleClick = () => {
    alert("Button clicked!!");
  }

  return (
    <div>
      {/* <User name="Amith" age={24}/> */}
      {/* <User>
        <h1>Hello</h1>
      </User> */}
      <User name="Amith" age={24}/>

      {/* Assignment */}
      <Button label="Signup" onClick={handleClick} disabled={false}/>
    </div>
  )
}

export default App;