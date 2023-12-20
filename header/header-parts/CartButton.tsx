"use client"

//imports

export default function CartButton() {
    const { totalAmount, totalPrice } = useAppSelector(s => s.cart)

    return (
        <div>
            <Tooltip title={`Cart ${totalPrice > 0 ? `(${spacePrice(totalPrice)} Kč)` : ""}`}>
                <Link href="/cart" className="__cart__btn">
                    <BsFillBasket3Fill className="__cart__btn__icon" />
                    <div className={clsx("__cart__btn__badge", {"__cart__btn__badge__active": totalPrice > 0})}>
                        {totalAmount > 99 ? 99 : totalAmount}
                    </div>
                </Link>
            </Tooltip>
        </div>
    )
}