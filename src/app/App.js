//import logo from '../logo.svg';
import '../App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Root from './Root';
import Play from './Play';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>}>
    <Route path="/play" element={<Play/>}/>
  </Route>
))
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
