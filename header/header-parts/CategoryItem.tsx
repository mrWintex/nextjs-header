//imports

interface CategoryItemProps {
    category: Category
}

export default function CategoryItem({ category }: CategoryItemProps) {    
    return (
        <li className="__category__list__item">
            <Link href={`/${category.slug}`} className="__category__list__item__link">
                    {category.name}
            </Link>
            <ul className="__category__list__item__subcategories">
                {category.subCategories.map(s => (
                    <li className="__category__list__item__subcategories__link" key={s.id}>
                        <Link href={`/${s.slug}`}>
                            {s.name}
                        </Link>
                        <div className="subcategories">
                            {s.subCategories.map(s2 => (
                                <div className="item" key={s2.id}>
                                    <Link href={`/${s2.slug}`}>{s2.name}</Link>
                                </div>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </li>
    )
}