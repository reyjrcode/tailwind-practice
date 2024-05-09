import { CartItem } from './CartItem'

export function Cart({ cartItems }) {
    return (
        <div className="div">
            <h2 className="mb-5 text-4xl font-bold">Cart</h2>
            <ul className='space-y-5'>
                {cartItems.map((cartItem) => (
                    <li key={cartItem.product.id}>
                        <CartItem item={cartItem}/>
                    </li>

                ))}
            </ul>
        </div>
    );
}