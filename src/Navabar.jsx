import { useRef, useState } from 'react'
import { links, social } from './data'
import { FaBars } from 'react-icons/fa'
import logo from './logo.svg'

export const Navabar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  const handleClick = () => {
    setShowLinks(!showLinks)
  }
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="toggle" type="button" onClick={handleClick}>
            <FaBars />
          </button>
        </div>

        <div
          className="container"
          ref={linksContainerRef}
          style={{
            height: showLinks
              ? `${linksRef.current.getBoundingClientRect().height}px`
              : `0`,
          }}
        >
          {/* links */}
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              )
            })}
          </ul>
        </div>

        {/* icons */}
        <ul className="icons">
          {social.map((icon) => {
            return (
              <li key={icon.id}>
                <a href={icon.url}>{icon.icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
