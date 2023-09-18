import Image from 'next/image'
import Link from 'next/link'
import { type FC, useState } from 'react'

const links = [
  {
    id: '#home',
    label: 'Home'
  },
  {
    id: '#about',
    label: 'About'
  },
  {
    id: '#projects',
    label: 'Projects'
  }
]

const MenuLinks: FC = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav
      onClick={() => {
        setShowMenu(true)
      }}
      className={`
          link-container ${showMenu ? 'show-menu' : ''}
          `}
      onMouseEnter={() => {
        setShowMenu(true)
      }}
      onMouseLeave={() => {
        setShowMenu(false)
      }}
    >
      <span className="hamburguer-button">
        <Image
          src="/images/icone-hamburguer.svg"
          alt="Link menu"
          width={32}
          height={32}
        />
      </span>

      <ul>
        {links.map(({ id, label }) => {
          return <HeaderLink href={id} key={id} label={label} />
        })}
      </ul>
      <span
        className="close-button"
        onClick={(e) => {
          e.stopPropagation()
          setShowMenu(false)
        }}
      >
        <Image src="/images/icon-close.svg" alt="Link menu" width={16} height={16} />
      </span>
      <style>
        {`
              .close-button {
                display: none;
              }
              .link-container {
                  position: fixed;
                  top: 2rem;
                  left: 1rem;
                  background: rgba(0, 0, 0, 0.3);
                  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px -4px 4px rgba(0, 0, 0, 0.25);
                  z-index: 1;
                  padding: 0.5rem 0.5rem;
                  border-radius: 2rem;
                  width: 70px;
                  color: white;
                  margin-left: 0.25rem;
                  transition: all 0.5s;
                  overflow: hidden;
              }
              .hamburguer-button {
                margin: auto;
                padding: 0rem 0.5rem;
                display: block;
                top: 0;
                z-index: 1;
                width: 64px;
                height: 32px;
              }
              .link-container ul {
                display: none;
              }
              .link-container li {
                  flex-shrink: 0;
                  list-style: none;
                  font-size: 1.2rem;
                  overflow: hidden;
                  color: white;
                  border-radius: 2rem;
                  padding: 0.25rem 0.5rem;
                  opacity: 1;
                  font-weight: semibold;
                  margin-right: 0.25rem;
                  border: 3px transparent solid;
                transition: all 0.5s;

              }
              .show-menu {
                width: 300px;
                max-width: fit-content;
              }
              .show-menu ul {
                display: flex;
                flex-direction: row;
              }
              .show-menu .hamburguer-button {
                display: none;
                opacity: 0;
                width: 0;
              }
              .link-container li:hover {
                border: 3px rgba(255, 255, 255, 0.7) solid;
              }
              @media (max-width: 768px) {
                .link-container {
                  left: 1rem;
                  top: auto;
                  bottom: calc(1rem + 11vh);
                  width: 64px;
                  max-width: 50vw;
                  display: flex;
                  align-items: center;
                  height: 48px;
                }
                .show-menu {
                  width: 300px;
                  max-width: fit-content;
                }
                .show-menu {
                  overflow-x: scroll;
                }
                .show-menu::-webkit-scrollbar {
                  display: none;
                }
                .close-button {
                  height: 32px;
                  width: 32px;
                  bottom: 0;
                  right: 1rem;
                  z-index: 2;
                  align-items: center;
                  justify-content: center;
                  display: none;
                }
                .show-menu .close-button {
                  display: flex;
                }
              }
          `}
      </style>
    </nav>
  )
}
const HeaderLink: FC<{ href: string; label: string }> = ({ href, label }) => {
  const [isSmoothScroll, setIsSmoothScroll] = useState(false)

  function handleScroll(): void {
    setIsSmoothScroll(true)
    setTimeout(() => {
      setIsSmoothScroll(false)
    }, 1000)
  }
  return (
    <li onClick={handleScroll}>
      <Link
        href={href}
        style={{
          fontFamily: 'DM Sans, sans-serif'
        }}
      >
        {label}
      </Link>
      <style>
        {`
              * {
                scroll-behavior: ${isSmoothScroll ? 'smooth' : 'auto'};
            }

          `}
      </style>
    </li>
  )
}
export default MenuLinks
