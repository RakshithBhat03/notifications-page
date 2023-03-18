import "./App.css";
import { Notification } from "./components/Notification";

function App() {
  return (
    <div className="App h-screen">
      <main className="w-full h-full flex md:items-center justify-center bg-veryLightGrayishBlue">
        <Notification />
      </main>
    </div>
  );
}

export default App;
