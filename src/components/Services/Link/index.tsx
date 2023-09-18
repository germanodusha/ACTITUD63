// eslint-disable-next-line import/no-named-default
import { default as NextLink } from 'next/link'
import { type HTMLAttributes, type FC } from 'react'
import styled from 'styled-components'
type Props = {
  href: string
  label?: string
  style?: any
} & HTMLAttributes<HTMLDivElement>
const Link: FC<Props> = ({ href, label = 'Link', style }) => {
  return (
    <StyledNextLink style={style} href={href}>
      {'<'}
      <b>{label}</b>
      {'>'}
    </StyledNextLink>
  )
}
const StyledNextLink = styled(NextLink)`
  position: relative;
  border-radius: 2rem;
  transition: color 0.5s ease-in-out;
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition:
      transform 0.5s ease-in-out,
      width 0.5s ease-in-out;
    transform: scale(1);
    opacity: 0;
  }
  &:hover::after {
    display: block;
    opacity: 1;
    border-radius: 2rem;
    filter: blur(0.1rem);
    transform: scale(1.2);
    background: rgba(0, 0, 0, 0.8);
  }
  &:hover {
    color: white;
  }
`
export default Link
