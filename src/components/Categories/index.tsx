import React, { ReactNode } from 'react'

interface CategoriesProp {
  title: string
  children: ReactNode
}

function Categories({ title, children }: CategoriesProp) {
  return (
    <>
      <section className="categories">
        <h2 className="categories__title">{title}</h2>
        <div className="categories__content">{children}</div>
      </section>
    </>
  )
}

export default React.memo(Categories)
