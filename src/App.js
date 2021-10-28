import { useState } from "react";
import GetUserComponent from "./components/GetUserComponent";
import WelcomePage from "./components/WelcomePage";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  return (
    <div className="App">
      <main className="App-main">
        {!isLoggedIn ? (
          <GetUserComponent
            user={user}
            setUser={setUser}
            setIsLoggedIn={setIsLoggedIn}
          />
        ) : (
          <WelcomePage
            user={user}
            setUser={setUser}
            setIsLoggedIn={setIsLoggedIn}
          />
        )}
      </main>
    </div>
  );
}

export default App;
