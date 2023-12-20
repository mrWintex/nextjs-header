"use client"

//imports

export default function SearchButton() {
    const dispatch = useAppDispatch()
    const handleClick = () => {
        dispatch(showSearchInput())
    }

    return (
        <>
            <Tooltip title="Vyhledat">
                <button className="__search__btn" onClick={handleClick}>
                    <ImSearch className="__search__btn__icon" />
                </button>
            </Tooltip>
        </>
    )
}