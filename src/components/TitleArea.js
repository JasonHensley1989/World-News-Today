import { useState } from "react"

const SearchArea = () => {
    const [ currentSearch, setCurrentSearch ] = useState()


    return (
        <>
            <h1 className="title">World News Today</h1>
            <p className="title">Simply the Best</p>
            <div className="searchBar">
                <input  placeholder="What are you looking for" className="search" />
                <button type="submit" className="search search-cursor" >Search</button>
            </div>
        </>
    )
}

export default SearchArea