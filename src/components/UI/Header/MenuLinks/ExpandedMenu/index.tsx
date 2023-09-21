import Image from 'next/image'
import Link from 'next/link'
import { type FC, type SyntheticEvent, useState } from 'react'
import styled from 'styled-components'

const links = [
  {
    id: '#about',
    label: 'About'
  },
  {
    id: '#projects',
    label: 'Projects'
  },
  {
    id: '#clipping',
    label: 'Clipping'
  }
]

const ExpandedMenu: FC<{
  onClose: () => void
}> = ({ onClose }) => {
  return (
    <ExpandedMenuContainer>
      <MenuList links={links} />
      <CloseButton onClick={onClose} />
    </ExpandedMenuContainer>
  )
}
const ExpandedMenuContainer = styled.div`
  display: flex;
  box-shadow: var(--menu-links-shadow);
  border-radius: 3rem;
  padding: 0.25rem 0;
  padding-left: 0.5rem;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.3);
  color: white;
  max-width: fit-content;
  animation: expand 0.5s ease-in-out;
  z-index: 10;
  @keyframes expand {
    0% {
      width: 64px;
      color: transparent;
    }
    50% {
      width: 1000px;
    }
    100% {
      width: 1000px;
      color: white;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
    padding-left: 0;
    padding-left: 0.5rem;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    animation:
      darken 0.7s ease-in-out,
      expand 0.7s ease-in-out;
  }
`
const CloseButton: FC<{
  onClick: (e: SyntheticEvent<HTMLSpanElement>) => void
}> = ({ onClick }) => {
  return (
    <CloseButtonContainer
      onClick={(e) => {
        e.stopPropagation()
        onClick(e)
      }}
    >
      <Image
        src="/images/icon-close.svg"
        alt="Link menu"
        width={16}
        height={16}
      />
    </CloseButtonContainer>
  )
}
const CloseButtonContainer = styled.span`
  position: relative;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3rem;
  margin-right: 0.5rem;
  @media (min-width: 768px) {
    display: none;
  }
`
const MenuList: FC<{
  links: Array<{
    id: string
    label: string
  }>
}> = ({ links }) => {
  return (
    <LinkListContainer>
      {links.map(({ id, label }) => {
        return <HeaderLink href={id} key={id} label={label} />
      })}
    </LinkListContainer>
  )
}
const LinkListContainer = styled.ul`
  display: flex;
  & > li {
    margin-right: 0.5rem;
  }
  @media (max-width: 768px) {
    & > li {
      margin-right: 0.25rem;
    }
  }
`
const HeaderLink: FC<{ href: string; label: string }> = ({ href, label }) => {
  const [isSmoothScroll, setIsSmoothScroll] = useState(false)

  function handleScroll(): void {
    setIsSmoothScroll(true)
    setTimeout(() => {
      setIsSmoothScroll(false)
    }, 1000)
  }
  return (
    <HeaderLinkContainer onClick={handleScroll}>
      <Link
        href={href}
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: 400
        }}
      >
        {label}
      </Link>
      <style>
        {`
                * {
                  scroll-behavior: ${isSmoothScroll ? 'smooth' : 'smooth'};
              }
            `}
      </style>
    </HeaderLinkContainer>
  )
}
const HeaderLinkContainer = styled.li`
  border: 3px solid transparent;
  border-radius: 3rem;
  padding: 0.25rem 1rem;
  transition: border 0.2s ease-in-out;
  font-weight: 100;
  font-size: 1.5rem;
  &:hover {
    border: 3px solid white;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0rem 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export default ExpandedMenu
