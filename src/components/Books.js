import React from "react";

function Books({ authors, averageRating, description, id, image, language, pageCount, publishedDate, publisher, ratingsCount, title }) {
    return(
        <div>
            <div>
                <img className="image" src={image} alt={title} />
            </div>
            <div>
                <p>{title}</p>
                <p>Author: {authors}</p>
            </div>
        </div>
    )
}

export default Books;