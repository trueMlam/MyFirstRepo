import React from "react"

function Art(props) {
  const { date, title, image, text } = props

  const t = () => {
    if (!text) return ''
    return (
      <p>
        <span className="dc">{text.charAt(0)}</span>
        {text.slice(1)}
      </p>
    )
  }

  return (
    <article>
      <p className="d">{date}</p>
      <h3>
      <a href="/" className="t-link">{title}</a>
      </h3>
      <img src={image} alt={title} />
      {t()}
      <a className="c-btn" href="/">Continues ...</a>
    </article>
  )
}

export default Art