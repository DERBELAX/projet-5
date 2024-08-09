import React from "react";
import "../style/Tag.scss";
function Tag({tag}) {
    console.log(tag)
    return(
        <div className="tag-ul">
            
                {tag}
        
        </div>

    )
    
}
export default Tag