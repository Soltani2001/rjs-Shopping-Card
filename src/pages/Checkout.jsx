import BasketCard from '../components/BasketCard';
import BasketSidebar from '../components/BasketSidebar';
import {useCart} from '../context/CartContext'
import styles from './Checkout.module.css'

function Checkout() {

    const [state, dispatch] = useCart()
    const clickHandeler = (type, payload)=>{
        dispatch({type, payload })
    }

    if ( state.selectedItems == 0 ){
        return (<div className={styles.container}>Empty</div>)
    }

    console.log(state);
    return ( <div className={styles.container}>
        <BasketSidebar state={state} clickHandeler={clickHandeler} />
        <div className={styles.pruducts}>
            {state.selectedItems.map(p => (
                <BasketCard key={p.id} data={p} clickHandeler={clickHandeler}/>
            ))}
        </div>
    </div> );
}

export default Checkout;