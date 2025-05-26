

import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

  
  function App() {
    const router = createBrowserRouter([
      { path: "/", element: <Home /> },
      { path: "/blog", element: <Blog /> }
    ]); 
     
  
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  }
  
  export default App;


  
