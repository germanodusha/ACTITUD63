import { useSections } from '@/contexts/Sections'
import { useScroll } from '@/hooks/useScroll'
import { type FC, useEffect, useState } from 'react'

const HeaderTitle: FC = () => {
  const title = useTitle()

  return (
    <>
      <span className="text-3xl title">{title !== '' ? `<${title}>` : ''}</span>
      <style>
        {`
          .title {
            font-size: 4vw;
            text-transform: uppercase;
            font-weight: 300;
            justify-self: end;
          }
          @media (max-width: 768px) {
            .title {
              display: none;
            }
          }
          @media (min-width: 1080px) {
            .title {
              font-size: 4rem;
            }
          }
        `}
      </style>
    </>
  )
}
const useTitle = (): string => {
  const { scroll } = useScroll()
  const [title, setTitle] = useState('')
  const sections = useSections()
  useEffect(() => {
    const sectionsPositions = sections
      .map((section) => {
        const element = document.getElementById(section.id) as HTMLElement
        if (element !== null) {
          return {
            id: section.id,
            label: section.label,
            position: element.offsetTop
          }
        }
        return undefined
      })
      .filter((section) => section !== undefined)
    const headerHeight = window.innerHeight * 0.12

    const section = sectionsPositions
      .filter(
        (section) => (section?.position ?? 0) <= scroll + headerHeight + 64
      )
      .pop()

    setTitle('')
    if (section !== undefined) {
      setTitle(section.label)
    }
  }, [scroll, sections, title])
  return title
}
export default HeaderTitle
