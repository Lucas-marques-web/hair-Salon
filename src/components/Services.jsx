
function Services(props){
    return(
        <div className="container">
            <img src={props.img} alt="service-type"></img>
            <h4>{props.type}</h4>
            <hr style={{width:'100%',height:'1px'}}></hr>
            <div className="servicescontent">
                <h2>{props.service}</h2>
                <p>{props.price}</p>
            </div>
        </div>
    )
}

export default Services;