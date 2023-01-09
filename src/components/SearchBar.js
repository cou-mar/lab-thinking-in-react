import {useState} from 'react';

const SearchBar = (props) => {

    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
        props.handleSearch(e.target.value)
    };

    return (
        <div>
            <label>
                <h4>Search</h4>
            </label>
            <input type="text" value={search} onChange={handleSearch} className="searchBar" />
            <br />
            <input type="checkbox" />
            <p>Only show products in stock</p>
        </div>
    );
}

export default SearchBar;