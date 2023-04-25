import "./App.css";
import Head from "./componets/Head";
import Body from "./componets/Body";
import store from "./componets/utils/store"
import { Provider } from "react-redux";
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import MainContainer from "./componets/MainContainer";
import WatchPage from "./componets/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body/>,
    children: [{
      path: "/",
      element: <MainContainer/>
    },{
      path: "watch",
      element: <WatchPage/>
    }]
  }
]);

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Head/>
      <RouterProvider router={appRouter}>
      <Body/>
      </RouterProvider>
    </div>
    </Provider>
  );
}

export default App;
 