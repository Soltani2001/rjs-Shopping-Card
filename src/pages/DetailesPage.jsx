import { Link, useParams } from "react-router-dom";
import { useProductsDetailes } from "../context/ProductContext";
import { RiLinksFill } from "react-icons/ri";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";
import Loader from "../components/Loader";
import styles from './DetailesPage.module.css'

function DetailesPage() {
    const {id} = useParams()
    const product = useProductsDetailes (+id)
    if (!product) return <Loader />
    console.log(product);
    return ( 
    <div className={styles.container}>
        <img src={product.image} alt={product.title} />
        <div className={styles.info} >
            <h3 className={styles.title}>{product.title}</h3>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.category}><RiLinksFill/>{product.category}</p>
        <div>
            <span className={styles.price}>
                <IoMdPricetag/>
                {product.price} $
            </span>
            <Link to="/products"><FaAngleDoubleLeft /><span>Back to shop</span></Link>
        </div>
            
        </div>
    </div> );
}

export default DetailesPage;