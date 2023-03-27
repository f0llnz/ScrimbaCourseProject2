import Pin from "./Images/Pin.png"

export default function Card(props){

    return(
        <div className="Card-Body">
            <img className="MainImg" src={props.item.imageUrl}/>
            <div className="Info">
                <div className="Address">
                    <img className="Pin" src={Pin}/> <h4>{props.item.location}</h4>
                    <p className="GoogleP">View on Google Maps</p>
                </div>
                <h1>{props.item.title}</h1>
                <p className="Dates">{props.item.startDate} - {props.item.endDate}</p>
                <p className="Descript">{props.item.description}</p>
            </div>
        </div>
    )
}