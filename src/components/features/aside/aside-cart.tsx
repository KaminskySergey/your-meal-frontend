import { useState } from "react"
import { List } from "../../ui/list"
import { AsideCartItem } from "./aside-cart-item"
import { useCart } from "../../../redux/cart/selectors"
import { Button } from "../../ui/button"
import Modal from "../../ui/modal"
import { OrderModal } from "../order/order-modal"

export const AsideCart = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenOrder, setIsOpenOrder] = useState(false)
    const cart = useCart()
    const handleToggle = () => {
        setIsOpen((pS) => !pS)
        console.log(isOpenOrder)
    }
    const handleOpenOrder = () => {
        setIsOpenOrder((pS) => !pS)
        console.log(isOpenOrder)
    }
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return <div className="md:relative md:w-[300px]">
        <div className="bg-white md:absolute md:top-0 md:left-0  w-full max-w-[300px]  py-2 px-[10px] md:py-4 md:px-[12px] flex flex-col gap-[8px] md:gap-[12px] rounded-[18px]">
            <div onClick={handleToggle} className="flex justify-between items-center gap-[8px] md:gap-[12px]">
                <div>
                    <p className="font-semibold text-[16px] md:text-[24px] text-black">Cart</p>
                </div>
                <div className=" w-[32px] h-[16px] bg-grayDark rounded-[6px]">
                    <p className="text-[10px] md:text-[12px] font-normal">{totalItems}</p>
                </div>
            </div>
            {
                !isOpen &&
                <List className="flex flex-col gap-[15px]">
                    {
                        cart.map((el, idx) => (
                            <AsideCartItem key={idx} product={el} />

                        ))
                    }

                </List>
            }
            {cart.length !== 0 && <div className="flex flex-col gap-[24px]">
                <div className="flex justify-between">
                    <p className="text-[16px] font-nunito font-normal">Total</p>
                    <p className="text-[16px] font-nunito font-normal">{totalPrice}$</p>
                </div>
                <div>
                    <Button onClick={handleOpenOrder} className="bg-orangeRed">
                        Place an order
                    </Button>
                </div>
            </div>}
        </div>
        {isOpenOrder && <Modal onClose={handleOpenOrder}>
            <OrderModal />
        </Modal>}
    </div>
}



