import Link from '@/components/Services/Link'
import Image from 'next/image'
import { type FC } from 'react'

interface ProjectProps {
  project: {
    title: string
    link: string
    description: string[]
    image: string
  }
}
const Project: FC<ProjectProps> = ({ project }) => {
  return (
    <div
      style={{
        width: '100%',
        paddingTop: '2rem'
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          width: '100%',
          textAlign: 'center',
          fontWeight: 200
        }}
      >{`<${project.title}>`}</h1>
      <div
        style={{
          textAlign: 'center',
          fontSize: '2rem',
          marginTop: '1rem'
        }}
      >
        <Link href={project.link} />
      </div>
      <span
        style={{
          textTransform: 'uppercase',
          fontSize: '1rem'
        }}
      >
        Digital, 2023
      </span>
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
          height: '50vw',
          position: 'relative',
          marginTop: '2rem'
        }}
      >
        <Image
          objectFit="contain"
          src={project.image}
          alt={project.title}
          fill
        />
      </div>
    </div>
  )
}
export default Project
