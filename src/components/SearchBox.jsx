import { IoSearch } from "react-icons/io5";
import { createQueryObject } from "../helpers/helper";
import styles from './searchBox.module.css'

function SearchBox({search, setSearch, setQuery}) {

    const searchHandeler = () =>{

        setQuery(query => createQueryObject(query, {search}))
    }

  return (
    <div>
        <div className={styles.search}>
            <input 
            type="text" 
            placeholder="Search..."
            value={search}
            onChange={e=>setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={searchHandeler}><IoSearch /></button>
    </div>
    </div>
  )
}

export default SearchBox