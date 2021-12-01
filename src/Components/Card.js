
const Card = (props)=>{
    console.log(props);
    let badgeText;
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT";
    } else if(props.item.location === "Online"){
        badgeText = "ONLINE";
    }

    return(
        <>  
            <div className = "card-img">
                 {badgeText && <p className = "hang">{badgeText}</p>}
                <img className = "image-celebrity" src = {props.item.coverImg} alt = "Internet Missing">
                </img>
                <div className = "detail">
                    <span>{props.item.stats.rating}</span>
                    <span>({props.item.stats.reviewCount}) . </span>
                    <span>{props.item.location}</span>
                    <p>{props.item.title}</p>
                    <p><strong>From ${props.item.price}</strong>/ person</p>
                </div>
            </div>
        </>
    )
}

export default Card;