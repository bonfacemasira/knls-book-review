import React, { useState, useEffect } from "react";

function Home() {

    const [books, setBooks ] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/books")
        .then((response) => response.json())
        .then((books) => console.log(books))
    },[])

    return(
        <div> Parent container
            <div>Single Container
                <div>Image</div>
                <div>Text</div>
            </div>
        </div>
    )
}

export default Home;