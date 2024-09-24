import react from "react";

import "./cards.css"

const Cards = ({imgSrc, imgAlt, title, description, buttonText, link,}) => {
    return (
        <div className="Card-container">
            {imgSrc && imgAlt && <img src={imgSrc} alt={imgAlt} className="card-img"/> }
            {title && <h1 className="card-title">{title}</h1>}
            {description && <p className="card-description">{description}</p>}
            {buttonText && link && <a href={link} target="_blank" className="card-btn">{buttonText}</a>}
        </div>
    )
}

export default Cards;