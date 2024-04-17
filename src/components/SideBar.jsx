import { TbCategoryPlus } from "react-icons/tb";
import { createQueryObject } from "../helpers/helper";
import styles from './Sidebar.module.css'
import { list } from "../constant/List";

function SideBar({query, setQuery}) {

    const categoryHandeler = (event)=>{
        // console.log(query);
        const category = event.target.innerText.toLowerCase();
        setQuery(query => createQueryObject(query, {category}))
    }

  return (
    <div className={styles.sidebar}>
            <div>
                <TbCategoryPlus /> 
                <p>&#160;Categories</p>
            </div>
            <ul onClick={categoryHandeler}>
                {list.map(item => <li className={query.category === item.type.toLocaleLowerCase() ? styles.active : null} key={item.id}>{item.type}</li>)}
            </ul>
        </div>
  )
}

export default SideBar