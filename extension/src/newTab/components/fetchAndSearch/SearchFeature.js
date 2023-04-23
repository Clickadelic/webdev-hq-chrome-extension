import React, { useState } from 'react'

function SearchFeature({setSearchValue}) {

    const [searchTerm, setSearchTerm] = useState("")

    function handleChange(event){
        setSearchTerm(event.target.value)
    }

    // Kombiniert bzw. setzt "searchValue [State]" == searchTerm
    function runSearch({searchTerm}){
        setSearchValue(searchTerm)
    }

    return (
        <div>
            <input type="text" name="search" placeholder="Search..." onChange={handleChange} />
            <button onClick={runSearch}>Search</button>
        </div>
    )
}

export default SearchFeature