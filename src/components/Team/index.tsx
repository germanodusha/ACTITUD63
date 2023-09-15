import { type FC } from 'react'
import Section from '../UI/Section'
const mock = {
  name: 'Benedicta M Badia Nordenstahl',
  role: 'Director'
}
const team = {
  colunm1: [mock, mock, mock],
  colunm2: [mock, mock],
  colunm3: [mock]
}
const Team: FC = () => {
  return (
    <Section id="team" label="team" noypadding>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          maxWidth: '100%'
        }}
      >
        {Object.values(team).map((column, index) => {
          return (
            <div
              key={index}
              style={{
                borderLeft: index !== 0 ? '1px solid #a1a1a1' : 'none',
                paddingLeft: index !== 0 ? '1rem' : 'none'
              }}
            >
              {column.map((member, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      display: 'grid',
                      gridAutoColumns: 'row',
                      marginBottom: '1.5rem'
                    }}
                  >
                    <span>
                      <b>{member.name}</b>
                    </span>
                    <span>{`<${member.role}>`}</span>
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

export default Team
