import Modal from '../UI/Modal.JS';
import classes from './Cart.module.css';
import Modal from '../UI/Modal.JS';

const Cart = props => {

    const cartItems = (<ul>{[{id: 'c1', name: 'sushi', amount: 2, price: 12.99 }].map((item) => (<li>{item.name}</li>))}</ul>);

    return <Modal>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>€35.00</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
}

export default Cart;