import Link from '@/components/Services/Link'
import SlideShow from '@/components/UI/SlideShow'
import { type FC } from 'react'
import styled from 'styled-components'

interface ProjectProps {
  project: {
    title: string
    link: string
    description: string[]
    images: string[]
  }
}
const Project: FC<ProjectProps> = ({ project }) => {
  return (
    <ProjectContainer
      style={{
        width: '100%'
      }}
    >
      <Title>
        <span>{`<`}</span>
        {`${project.title}`}
        <span>{`>`}</span>
      </Title>
      <LinkContainer>
        <Link href={project.link} />
      </LinkContainer>
      <Stamp>Digital, 2023</Stamp>
      {project.description.map((paragraph, index) => {
        return (
          <p
            key={index}
            style={{
              fontSize: '1rem',
              lineHeight: '1.5rem',
              marginTop: '2rem'
            }}
          >
            <b>{paragraph}</b>
          </p>
        )
      })}
      <div
        style={{
          width: '100%',
          marginTop: '2rem',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <SlideShow images={project.images} />
      </div>
    </ProjectContainer>
  )
}
const Title = styled.h1`
  font-size: 4rem;
  width: 100%;
  text-align: center;
  font-weight: 300;
  span {
    font-size: 3rem;
  }
  @media (max-width: 768px) {
    font-size: 1.25rem !important;
    span {
      font-size: 1rem;
    }
  }
`
const LinkContainer = styled.div`
  text-align: center;
  font-size: 2rem;
  margin-top: 1rem;
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 4rem;
  }
`
const Stamp = styled.span`
  font-size: 1rem;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`
const ProjectContainer = styled.div`
  margin-bottom: 50vh;
  @media (max-width: 768px) {
    margin-bottom: 50vh;
  }
`
export default Project
