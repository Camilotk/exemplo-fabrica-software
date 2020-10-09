import React from 'react'

function Footer() {
    return (
        <>
        <div className="footer">
            <h6 className="footer-message">Copyleft GPL v3</h6>
        </div>
        <style jsx>
        {`
        .footer {
            height: 50px;
            border: 1px solid;
            display: flex;
            justify-content: center;
            align-content: center;
        }
        .footer-message{
            margin-top: 15px;
        } 
        `}
        </style>
        </>
    );
}

export default Footer;