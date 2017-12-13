/**
 * Created by Joshua on 12/12/2017.
 */
import React from 'react';

let Panda = (props) => {
    return(
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <img
            alt="" style={{height: "40vh", width: "auto"}}
            src={"https://fsb.zobj.net/crop.php?r=HCqYv5liBeEW3qNR4yZ-aNiieLMLIo9Zta05orSvPGJITQ7j5noFX0tnj7RYIxkx4w8725XBac8SYvelgT964APfBXiKiLz7e9uy0tmS-slkgGhmya4z08JE7XrAMpUlMvvS-0-u7d7yGDxox-eMnjElaJqBHuCbvYs8Mg"}/>
            <h4> {props.text} </h4>
        </div>
    );
};

export default Panda;