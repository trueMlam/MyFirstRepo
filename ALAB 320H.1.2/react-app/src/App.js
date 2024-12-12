import React from "react"
import Header from './Header'
import Nav from './Nav'
import Art from './Article'
import Foot from './Footer'

function App() {
  const p = [
    {
      d: '11/12/20',
      t: 'On the Street in Brooklyn',
      img: '/img/blog-image-1.jpg',
      txt: `Cray ipsum, dolor sit amet consectetur adipisicing elit. Repellat quidem deserunt nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit officiis magni aliquid, laborum dolor? Quasi? Veniam amet rerum ducimus est ea at neque alias. Temporibus perspiciatis at impedit voluptas aut voluptates facere totam aliquid debitis rerum, ex consequuntur, nulla eius quae corrupti optio atque ut. Repellendus molestiae doloribus recusandae, itaque voluptatibus placeat repellat deserunt amet eaque dignissimos, iste sapiente magnam doloremque. Fugit, cum, cupiditate aliquam, mollitia quisquam sed nulla eveniet doloribus neque optio odio qui! Id architecto impedit consequatur rem quaerat voluptatibus pariatur quas, quod quisquam quo ab molestiae.`,
    },
    {
      d: '11/11/20',
      t: 'Vintage in Vogue',
      img: '/img/blog-image-2.jpg',
      txt: `Selfies sunt, dolor sit amet consectetur adipisicing elit. Repellat quidem deserunt nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit officiis magni aliquid, laborum dolor? Quasi? Veniam amet rerum ducimus est ea at neque alias. Temporibus perspiciatis at impedit voluptas aut voluptates facere totam aliquid debitis rerum, ex consequuntur, nulla eius quae corrupti optio atque ut. Repellendus molestiae doloribus recusandae, itaque voluptatibus placeat repellat deserunt amet eaque dignissimos, iste sapiente magnam doloremque. Fugit, cum, cupiditate aliquam, mollitia quisquam sed nulla eveniet doloribus neque optio odio qui! Id architecto impedit consequatur rem quaerat voluptatibus pariatur quas, quod quisquam quo ab molestiae.`,
    },
  ]

  let a = []
  for (let i = 0; i < p.length; i++) {
    const x = p[i]
    a.push(<Art key={x.t} date={x.d} title={x.t} image={x.img} text={x.txt} />)
  }

  return (
    <div className="c">
      <Header />
      <Nav />
      <main>{a}</main>
      <Foot />
    </div>
  )
}

export default App