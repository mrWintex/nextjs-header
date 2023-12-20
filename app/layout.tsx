//imports

export type EshopLayoutProps = {
    children: React.ReactNode
}

export default async function EshopLayout({ children }: EshopLayoutProps) {
    const { data } = await getClient().query<CartQuery>({ query: GET_CART })

    store.dispatch(setItems(data.cart.items))
    
    return (
        <div id="eshop-content">
            <CartPreloader cartItems={data.cart.items} />
            <Header />
                { children }
            <Footer />
        </div>
    )
}
