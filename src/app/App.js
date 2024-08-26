//import logo from '../logo.svg';
import '../App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Root from './Root';
import Play from './Play';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/BattleShip_v2" element={<Root/>}>
    <Route path="/BattleShip_v2/play" element={<Play/>}/>
  </Route>
))
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
