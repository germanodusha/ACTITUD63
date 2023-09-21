import { type FC } from 'react'
import Section from '../UI/Section'
import styled from 'styled-components'
import Title from '../UI/Title'
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
      <span
        className="mobile-title"
        style={{
          paddingTop: '1rem',
          lineHeight: '2rem',
          marginBottom: '0'
        }}
      >{`<TEAM>`}</span>
      <TeamContainer>
        {Object.values(team).map((column, index) => {
          return (
            <MemberContainer
              key={index}
              style={{
                borderLeft: index !== 0 ? '1px solid #a1a1a1' : 'none',
                paddingLeft: index !== 0 ? '1rem' : 'none',
                paddingTop: '1rem'
              }}
            >
              {column.map((member, index) => {
                return (
                  <Member
                    key={index}
                    style={{
                      display: 'grid',
                      gridAutoColumns: 'row',
                      marginBottom: '1.5rem'
                    }}
                  >
                    <span>
                      <b
                        style={{
                          fontWeight: 500
                        }}
                      >
                        {member.name}
                      </b>
                    </span>
                    <Title $hideOnMobile={false}>{`${member.role}`}</Title>
                  </Member>
                )
              })}
            </MemberContainer>
          )
        })}
      </TeamContainer>
    </Section>
  )
}
const TeamContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  min-height: 80vh;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-auto-flow: row !important;
    min-height: auto;
  }
`
const MemberContainer = styled.div`
  @media (max-width: 768px) {
    border-left: none !important;
    padding-left: 0 !important;
  }
`
const Member = styled.div`
  @media (max-width: 768px) {
    span {
      line-height: 1.25rem;
    }
    span:first-child {
      width: 70%;
    }
  }
`
export default Team
