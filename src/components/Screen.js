import React from "react";
//import overlay from "../assets/gboverlay.png";
//Stylesheet
import styles from "../components-css/Screen.module.css";

const Screen = (props) => {

    const gameboyDimensions = {
        "width": 160,
        "height": 144
    };

    return (
        <div id="screenContainer" className={styles.container}>
            <canvas 
                id="screen"
                className={styles.canvas}
                width={gameboyDimensions.width * props.pixelSize}
                height={gameboyDimensions.height * props.pixelSize}
            />
        </div>
    )
}

export default Screen