import { type FC } from 'react'
import Section from '../UI/Section'
import Project from './Project'
import Divider from '../UI/Divider'
import styled from 'styled-components'
const projectsData = [
  {
    title: 'Project 1',
    link: 'https://www.google.com',
    description: [
      'Ut irure aute quis amet duis. Aliqua eiusmod duis et voluptate adipisicing aliqua. Mollit exercitation nostrud aliqua commodo aute aliqua do et.',
      'Occaecat laborum ex ad aute consectetur sint ipsum enim id sit excepteur cillum sint esse. Tempor consectetur Lorem aliqua anim labore ea in voluptate tempor ex aute enim labore laborum. Esse culpa culpa minim deserunt. Culpa est duis cillum dolor minim eiusmod pariatur ex elit velit magna eu ipsum qui.',
      'Pariatur duis nulla excepteur incididunt consequat non laborum ea eiusmod deserunt pariatur ea laboris. Est exercitation amet non exercitation. Exercitation cupidatat exercitation exercitation aliqua veniam in cupidatat. Sunt qui irure do enim cillum minim qui veniam. Labore ut voluptate irure quis mollit elit eiusmod occaecat in eu tempor nostrud ad. Eiusmod in esse cillum irure ad pariatur exercitation culpa.'
    ],
    image: '/images/image1.jpg'
  },
  {
    title: 'Project 2',
    link: 'https://www.google.com',
    description: [
      'Ut irure aute quis amet duis. Aliqua eiusmod duis et voluptate adipisicing aliqua. Mollit exercitation nostrud aliqua commodo aute aliqua do et.',
      'Occaecat laborum ex ad aute consectetur sint ipsum enim id sit excepteur cillum sint esse. Tempor consectetur Lorem aliqua anim labore ea in voluptate tempor ex aute enim labore laborum. Esse culpa culpa minim deserunt. Culpa est duis cillum dolor minim eiusmod pariatur ex elit velit magna eu ipsum qui.',
      'Pariatur duis nulla excepteur incididunt consequat non laborum ea eiusmod deserunt pariatur ea laboris. Est exercitation amet non exercitation. Exercitation cupidatat exercitation exercitation aliqua veniam in cupidatat. Sunt qui irure do enim cillum minim qui veniam. Labore ut voluptate irure quis mollit elit eiusmod occaecat in eu tempor nostrud ad. Eiusmod in esse cillum irure ad pariatur exercitation culpa.'
    ],
    image: '/images/image2.jpg'
  }
]
const Projects: FC = () => {
  return (
    <Section noxpadding id="projects" label="projects">
      {projectsData.map((project, index) => {
        return (
          <>
            <ProjectContainer>
              <Project key={index} project={project} />
            </ProjectContainer>
            {index < projectsData.length - 1 ? (
              <Divider direction="horizontal" />
            ) : null}
          </>
        )
      })}
    </Section>
  )
}

const ProjectContainer = styled.div`
  margin-left: 2rem;
  margin-right: 1rem;
  @media (max-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`
export default Projects
