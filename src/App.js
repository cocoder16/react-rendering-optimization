import "./App.css";
import Button from "components/atom/Button";

function App() {
  return (
    <div id="main">
      <Button value="이전" className="navigation-button" />
      <div id="section"></div>
      <Button value="다음" className="navigation-button" />
    </div>
  );
}

export default App;
