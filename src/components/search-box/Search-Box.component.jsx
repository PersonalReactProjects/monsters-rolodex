import React from 'react';
import './Search-Box-Component.css';








const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <div>
            <input
                type="search"
                className="search"
                placeholder={placeholder}
                onChange={handleChange} />
        </div>
    )
}

export default SearchBox
