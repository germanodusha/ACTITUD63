import { type FC } from 'react'

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
          <h3
            style={{
              fontSize: '2rem',
              fontWeight: 200
            }}
          >{`<${service.title}>`}</h3>
          <p
            style={{
              fontSize: '1.75rem'
            }}
          >
            <b>{service.description}</b>
          </p>
        </div>
      ))}
    </div>
  )
}
export default ServicesList
