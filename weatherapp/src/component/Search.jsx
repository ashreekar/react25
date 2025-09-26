export default function Search({search,setSearch,handleSearch}) {
    return (
        <div className="search">

            <input 
            type="text" 
            onChange={(e) => setSearch(e.target.value)} className="city-search" 
            placeholder="enter city name" 
            name="search" 
            value={search} />

        <button onClick={handleSearch} className="search-btn">Search</button>
        </div>
    )
} 