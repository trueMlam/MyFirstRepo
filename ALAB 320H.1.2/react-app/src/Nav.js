import React from "react"

function Nav() {
  const l = ["Women's", "Men's", 'On the Street', 'The Catwalk', 'AdWatch', 'About']

  return (
    <nav className="t-nav">
      <ul>
        {l.map((x, i) => (
          <li key={i}>
            <a href={`/${x.toLowerCase().replace(/\s+/g, '-')}`}>{x}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav