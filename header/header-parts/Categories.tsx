//imports

export default async function Categories() {
    const { data } = await getClient().query({ query: GET_ALL_CATEGORIES })
    const categoryTree = makeTreeFromArray(data?.categories ?? [])

    return (
        <div className="__category__container">
            <ul className="__category__list">
                {categoryTree.map(c => <CategoryItem key={c.id} category={c}/>)}
            </ul>
        </div>
    )
}