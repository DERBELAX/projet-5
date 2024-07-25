import React from "react";
import "../style/Tag.scss";
function Tag({tag}) {
    return(
        <div className="teg-ul">
            <ul>
                {tag.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}

            </ul>
        </div>
    )
}
export default Tag