import { type FC } from 'react'
import Section from '../UI/Section'
import ServicesList from './ServiceList'

const Services: FC = () => {
  return (
    <Section id="services" label="Services">
      <ServicesList />
    </Section>
  )
}
export default Services
