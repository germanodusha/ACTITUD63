import { type FC } from 'react'
import Section from '../UI/Section'
import styled from 'styled-components'
const infoData = [
  [
    {
      label: 'email',
      value: 'contact@actitud1963.online',
      href: 'mailto: contact@actitud1963.online'
    },
    {
      label: 'phone',
      value: '+334 4992 8839 9',
      href: 'tel:+334499288399'
    }
  ],
  [
    {
      label: 'address',
      value: '93 Stampford Road National Museum of Singapore, Singapore 178897',
      href: '#'
    }
  ]
]
const Info: FC = () => {
  return (
    <Section id="info" label="info">
      <InfoContainer $columns={infoData.length}>
        {infoData.map((column, index) => {
          return (
            <InfoItem key={index}>
              {column.map((info, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      marginBottom: '1.5rem'
                    }}
                  >
                    <span
                      style={{
                        textTransform: 'uppercase'
                      }}
                    >{`<${info.label}>`}</span>
                    <span>
                      <b>{info.value}</b>
                    </span>
                  </div>
                )
              })}
            </InfoItem>
          )
        })}
      </InfoContainer>
    </Section>
  )
}
const InfoContainer = styled.div<{
  $columns: number
}>`
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns}, 1fr);
  gap: 1rem;
  padding-bottom: 10rem;
  min-height: 65vh;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`
const InfoItem = styled.div`
  grid-auto-flow: row;
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
    padding-left: 0 !important;
    margin-bottom: 0;
  }
`
export default Info
