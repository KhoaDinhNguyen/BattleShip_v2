import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Root(){
    return(
        <>
            <Header/>
            <Outlet/>
        </>
    )    
}

function Header(){
    return (
    <>
        <ul>
            <li><NavLink to="/BattleShip_v2">Introduction</NavLink></li>
            <li><NavLink to="/BattleShip_v2/play">Play</NavLink></li>
        </ul>
    </>
    )
}
export default Root;