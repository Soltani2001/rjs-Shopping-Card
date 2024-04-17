import { MdDelete } from "react-icons/md";
import { FaPlus, FaMinus  } from "react-icons/fa";

import { shortenText } from "../helpers/helper"
import styles from './BasketCard.module.css'

function BasketCard({data, clickHandeler}) {



  return (
    <div className={styles.card}>
        <img src={data.image} alt={data.title} />
        <p>{shortenText(data.title)}</p>
        <div className={styles.actions}>
            {data.quantity === 1 && (<button onClick={()=> clickHandeler("REMOVE_ITEM", data)}>
                <MdDelete />
            </button>)}
            {data.quantity >1 && (<button onClick={()=> clickHandeler("DECREASE", data)}>
                <FaMinus />
            </button>)}
            <span>{data.quantity}</span>
            <button onClick={()=> clickHandeler("INCREASE", data)}>
                <FaPlus />
            </button>
        </div>
    </div>
  )
}

export default BasketCard