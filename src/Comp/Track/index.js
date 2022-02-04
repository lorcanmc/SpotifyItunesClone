import react from "react";

const Track = ({title,artist,img,album})=>{

    return(
        <li>
            <h2>{title}</h2>
            <h3>{artist}</h3>
            <h4>{album}</h4>
            <img src={`${img}`}/>
        </li>
    )
}
export default Track