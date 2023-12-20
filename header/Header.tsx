//imports

export default async function Header() {
    return (
        <>
            <nav className="main-navbar" data-testid="__main_header">
                <div className="main-navbar__side">
                    <Logo />
                </div>
                <Categories />
                <div className="__controlls main-navbar__side">
                    <SearchButton />
                    <CartButton />
                    <LoginButton />
                </div>
                <SearchInput />
            </nav>
        </>
    )
}