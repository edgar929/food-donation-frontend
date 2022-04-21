import React, { Component } from "react";
import Routers from './routes/Routers'
import { BrowserRouter as Router } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createBrowserHistory } from "history";
import store from './redux/store';
import { Provider } from "react-redux";
const history = createBrowserHistory();

const theme = createTheme();
class App extends Component {
    render() {
        return (
          <ThemeProvider theme={theme}>
              <Provider store={store}>
                <Router history={history}>
                    <Routers />
                </Router>
            </Provider>
          </ThemeProvider>
          
        )
    }
}
export default App;

// import { createTheme, ThemeProvider } from '@mui/material/styles';

// import Routers from "./routes/Routers";

// const theme = createTheme();

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//        <Routers />
//     </ThemeProvider>
//   );
// }

// export default App;
