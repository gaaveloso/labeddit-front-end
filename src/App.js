import { GlobalState } from "./contexts/GlobalState";
import {GlobalContext} from "./contexts/GlobalContext"
import GlobalStyle from "./GlobalStyle";
import Router from "./routes/Router";

function App() {
  const context = GlobalState()

  return (
    <>
      <GlobalStyle />
      <GlobalContext.Provider value={context}>
      <Router />
      </GlobalContext.Provider>
    </>
  );
}

export default App;