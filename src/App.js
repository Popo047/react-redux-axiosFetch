import "./App.css";
import CakeContainer from "./components/Containers/CakeContainer";
import store from "./redux/Store/store"; //so that the Provider knows which is the store
import { Provider } from "react-redux"; //to provide the redux store to the react app,
import FetchUserContainer from "./components/FetchUserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FetchUserContainer />
        {/* <CakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
