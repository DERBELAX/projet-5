import React from "react";
import "../style/Tag.scss";
function Tag({tag}) {
    console.log(tag)
    return(
        <div className="teg-ul">
            <ul>
                <li>{tag}</li>
            </ul> 
        </div>

    )
    
}
export default Tag