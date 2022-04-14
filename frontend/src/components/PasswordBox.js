import React, { useState } from "react";
import styles from "../components-css/PasswordBox.module.css"
//Import util function
import { authenticate } from "../util/websocket";

const url = "ws://localhost:3000/ws";

const PasswordBox = (props) => {

    const [value, setValue] = useState("");

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        authenticate(value, url)
            .then((token) => {
                props.updateAuthenticated(true, token);
            })
            .catch((err) => {
                setValue("");
            });
    };

    return (
        <div id="passwordContainer" className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="pass"
                    placeholder="Password"
                    value={value}
                    className={styles.input}
                    onChange={onChange}
                />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default PasswordBox