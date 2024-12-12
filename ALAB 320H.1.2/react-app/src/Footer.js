import React from 'react'

function Foot() {
  const l = ['Home', "Women's", "Men's", 'On the Street', 'The Catwalk', 'AdWatch', 'About', 'Tips']

  return (
    <footer>
      <nav className="b-nav">
        <ul>
          {l.map((x, i) => (
            <li key={i}>
              <a href={`/${x.toLowerCase().replace(/\s+/g, '-')}`}>{x}</a>
            </li>
          ))}
        </ul>
      </nav>
      <p>© 2013 Valet Industries, Inc</p>
    </footer>
  )
}

export default Foot