import React, { useState } from "react";
import styles from "../components-css/PasswordBox.module.css"

const PasswordBox = () => {

    const [value, setValue] = useState("");

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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