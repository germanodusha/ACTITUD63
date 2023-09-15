import { type FC } from 'react'
import Section from '../UI/Section'
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
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${infoData.length}, 1fr)`,
          maxWidth: '100%',
          paddingBottom: '3rem'
        }}
      >
        {infoData.map((column, index) => {
          return (
            <div
              key={index}
              style={{
                paddingLeft: index !== 0 ? '2rem' : 'none'
              }}
            >
              {column.map((info, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      display: 'grid',
                      gridAutoColumns: 'row',
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
            </div>
          )
        })}
      </div>
    </Section>
  )
}
export default Info
