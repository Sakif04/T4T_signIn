import "./index.css";

import LeftBackground from './components/LeftBackground';
import SignInForm from "./components/SignInForm";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <SignInForm></SignInForm>
        <LeftBackground />
      </header>
    </div>
  )
}

export default App
