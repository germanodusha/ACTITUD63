import {
  useContext,
  type FC,
  type ReactNode,
  createContext,
  useState,
  useEffect,
  useCallback
} from 'react'

interface Section {
  id: string
  label: string
}
interface SectionContext {
  sections: Section[]
  resgisterSection: (section: Section) => void
}
const sectionContext = createContext<SectionContext>({
  sections: [],
  resgisterSection: () => {}
})
const SectionProvider: FC<{
  children: ReactNode
}> = ({ children }) => {
  const [sections, setSections] = useState<Section[]>([])
  const resgisterSection = useCallback(({ id, label }: Section): void => {
    setSections((prevSections: Section[]): Section[] => {
      return [...prevSections, { id, label }]
    })
  }, [])
  return (
    <sectionContext.Provider value={{ sections, resgisterSection }}>
      {children}
    </sectionContext.Provider>
  )
}
const useRegisterSection = ({
  id,
  label
}: {
  id: string
  label: string
}): void => {
  const { resgisterSection } = useContext(sectionContext)
  useEffect(() => {
    resgisterSection({
      id,
      label
    })
  }, [id, label, resgisterSection])
}
const useSections = (): Section[] => {
  const { sections } = useContext(sectionContext)
  return sections
}
export { SectionProvider, useRegisterSection, useSections }
