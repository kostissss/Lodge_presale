import React, { } from 'react';
// import { Link } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
    console.log("Captcha value:", value);
}

function GoogleCaptcha() {

    return (
        <>
            <ReCAPTCHA
                sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
                onChange={onChange}
            />,
        </>
    )
}

export default GoogleCaptcha;