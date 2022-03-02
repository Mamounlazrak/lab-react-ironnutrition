import React, {useState} from 'react'

function Search(props) {

    const [search, setSearch] = useState("");

    const handleSearchInput = (e) => {
        setSearch(e.target.value);
        props.search(e.target.value);
    }

  return (

    <div>
        <h3>Search for dishes</h3>
        <input type="text" value={search} onChange={handleSearchInput}/>
    </div>
  )
}

export default Search