import Globe from "./Images/Path.png"

export default function Navbar(){
    return(
        <div className="Navbar-Body">
            <nav>
                <img className="Globe" src={Globe}/>
                <h5>my travel journal.</h5>
            </nav>
        </div>
    )
}