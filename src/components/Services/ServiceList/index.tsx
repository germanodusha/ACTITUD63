import { type FC } from 'react'
import styled from 'styled-components'

const services = [
  {
    title: 'Art Advising',
    description:
      'Consequat officia laborum enim exercitation sunt sit eiusmod. Duis minim sunt et do aliquip. Mollit qui veniam fugiat consequat et id qui velit amet quis sunt. Nisi reprehenderit mollit culpa adipisicing aute officia.'
  },
  {
    title: 'Projects',
    description:
      'Consequat officia laborum enim exercitation sunt sit eiusmod. Duis minim sunt et do aliquip. Mollit qui veniam fugiat consequat et id qui velit amet quis sunt. Nisi reprehenderit mollit culpa adipisicing aute officia.'
  },
  {
    title: 'Digital Presence',
    description:
      'Consequat officia laborum enim exercitation sunt sit eiusmod. Duis minim sunt et do aliquip. Mollit qui veniam fugiat consequat et id qui velit amet quis sunt. Nisi reprehenderit mollit culpa adipisicing aute officia.'
  }
]

const ServicesList: FC = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridAutoFlow: 'row',
        marginBottom: '3rem'
      }}
    >
      {services.map((service, index) => (
        <div key={index}>
          <Title
            style={{
              fontSize: '2rem',
              fontWeight: 200
            }}
          >{`<${service.title}>`}</Title>
          <Description
            style={{
              fontSize: '1.75rem'
            }}
          >
            <span>{`<${service.title}> `}</span>
            <b>{service.description}</b>
          </Description>
        </div>
      ))}
    </div>
  )
}
const Title = styled.h3`
  font-size: 2rem;
  font-weight: 200;
  @media (max-width: 768px) {
    display: none;
  }
`
const Description = styled.p`
  span {
    display: none;
  }
  @media (max-width: 768px) {
    span {
      display: inline;
    }
    margin-bottom: 1rem;
  }
`
export default ServicesList
