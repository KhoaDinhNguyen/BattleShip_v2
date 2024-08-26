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
            <li><NavLink to="/">Introduction</NavLink></li>
            <li><NavLink to="/play">Play</NavLink></li>
        </ul>
    </>
    )
}
export default Root;