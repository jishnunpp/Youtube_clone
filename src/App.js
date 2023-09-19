import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/header";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maincontainer from "./components/Maincontainer";
import Watchpage from "./components/Watchpage";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path:'/',
        element:<Maincontainer/>
      },
      {
        path:'watch',
        element:<Watchpage/>
      }
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
