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
          <Title>
            <span>{`<`}</span>
            {`${service.title}`}
            <span>{`>`}</span>
          </Title>
          <Description
            style={{
              fontSize: '1.75rem'
            }}
          >
            <span
              style={{
                fontWeight: 300,
                fontSize: '1rem',
                textTransform: 'uppercase'
              }}
            >{`<${service.title}> `}</span>
            <b>{service.description}</b>
          </Description>
        </div>
      ))}
    </div>
  )
}
const Title = styled.h3`
  font-size: 2rem;
  font-weight: 300;
  text-transform: uppercase;
  span {
    font-size: 1.5rem;
  }
  @media (max-width: 768px) {
    display: none;
    text-transform: uppercase;
  }
`
const Description = styled.p`
  span {
    display: none;
  }
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    span {
      display: inline;
    }
  }
`
export default ServicesList
