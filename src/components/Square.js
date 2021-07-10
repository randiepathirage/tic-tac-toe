import React from "react";

const Square =({value,onClick}) =>{
    const style =value ? `squares ${value}` : `squares`;
    return(
        <button className={style} onclick={onClick}>
            {value}
        </button>
    )
}

export default Square;