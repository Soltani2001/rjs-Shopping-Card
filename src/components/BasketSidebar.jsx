import styles from './BasketSidebar.module.css'
import { FaListOl } from "react-icons/fa6";
import { LiaSlackHash } from "react-icons/lia";
import { IoCloudDone } from "react-icons/io5";

function BasketSidebar({state, clickHandeler}) {
  return (
    <div className={styles.sidebar}>
        <div>
            <FaListOl />
            <p>Total: </p>
            <span>{state.total} $</span>
        </div>
        <div>
            <LiaSlackHash />
            <p>Quantity: </p>
            <span>{state.itemsCounter}</span>
        </div>
        <div>
            <IoCloudDone />
            <p>Status: </p>
            <span>{!state.checkout && "Pending..."}</span>
        </div>

        <button onClick={()=> clickHandeler("CHECKOUT")}>checkout</button>

    </div>
  )
}

export default BasketSidebar