import Card from "./Components/Card/Card";
import Expenses from "./Components/Expenses/Expenses";
import "./app.sass";

const App = () => {
  return (
    <div className="app">
      <Card>
        <Expenses />
      </Card>
    </div>
  );
};
export default App;
