import Text from '@/components/UI/Text'
import styled from 'styled-components'
import { type FC } from 'react'
import VisionListItem from './Items'
import Section from '@/components/UI/Section'

const VisionList = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur dignissim accumsan. Integer in ipsum mattis, faucibus justo sit amet, pharetra nibh. Ut consectetur aliquam lectus eu tincidunt. Duis nec euismod lectus. Aliquam dolor velit, venenatis quis convallis at, venenatis et leo. Sed sodales tortor nec ipsum pretium, et dapibus eros faucibus. In ullamcorper scelerisque maximus. Aliquam congue congue nulla quis fringilla. Maecenas ante ante, sodales id ex viverra, ornare vulputate nisl. Nunc erat elit, faucibus ac efficitur at, hendrerit ut nisl. Integer vitae lacinia dolor. Duis varius nulla dui, eget convallis diam pulvinar auctor. Curabitur gravida augue a nisi cursus hendrerit. Praesent id sem massa. Pellentesque eget libero hendrerit, aliquet dolor faucibus, ultricies dui. Nulla luctus ligula sed urna molestie scelerisque.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur dignissim accumsan. Integer in ipsum mattis, faucibus justo sit amet, pharetra nibh. Ut consectetur aliquam lectus eu tincidunt. Duis nec euismod lectus. Aliquam dolor velit, venenatis quis convallis at, venenatis et leo. Sed sodales tortor nec ipsum pretium, et dapibus eros faucibus. In ullamcorper scelerisque maximus. Aliquam congue congue nulla quis fringilla. Maecenas ante ante, sodales id ex viverra, ornare vulputate nisl. Nunc erat elit, faucibus ac efficitur at, hendrerit ut nisl. Integer vitae lacinia dolor. Duis varius nulla dui, eget convallis diam pulvinar auctor. Curabitur gravida augue a nisi cursus hendrerit. Praesent id sem massa. Pellentesque eget libero hendrerit, aliquet dolor faucibus, ultricies dui. Nulla luctus ligula sed urna molestie scelerisque.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur dignissim accumsan. Integer in ipsum mattis, faucibus justo sit amet, pharetra nibh. Ut consectetur aliquam lectus eu tincidunt. Duis nec euismod lectus. Aliquam dolor velit, venenatis quis convallis at, venenatis et leo. Sed sodales tortor nec ipsum pretium, et dapibus eros faucibus. In ullamcorper scelerisque maximus. Aliquam congue congue nulla quis fringilla. Maecenas ante ante, sodales id ex viverra, ornare vulputate nisl. Nunc erat elit, faucibus ac efficitur at, hendrerit ut nisl. Integer vitae lacinia dolor. Duis varius nulla dui, eget convallis diam pulvinar auctor. Curabitur gravida augue a nisi cursus hendrerit. Praesent id sem massa. Pellentesque eget libero hendrerit, aliquet dolor faucibus, ultricies dui. Nulla luctus ligula sed urna molestie scelerisque.'
]
const Missions: FC = () => {
  return (
    <Section id="missions" label="Missions">
      <span className="mobile-title">{`<MISSIONS>`}</span>
      <List
        style={{
          marginBottom: '10rem',
        }}
      >
        {VisionList.map((item, index) => (
          <VisionListItem key={index}>
            <Text>{`<${convertNumberToRomanNumeral(index + 1)}>`}</Text>
            <Text>
              <b>{item}</b>
            </Text>
          </VisionListItem>
        ))}
      </List>
    </Section>
  )
}
function convertNumberToRomanNumeral(num: number): string {
  const romanNumerals = [
    { numeral: 'M', value: 1000 },
    { numeral: 'CM', value: 900 },
    { numeral: 'D', value: 500 },
    { numeral: 'CD', value: 400 },
    { numeral: 'C', value: 100 },
    { numeral: 'XC', value: 90 },
    { numeral: 'L', value: 50 },
    { numeral: 'XL', value: 40 },
    { numeral: 'X', value: 10 },
    { numeral: 'IX', value: 9 },
    { numeral: 'V', value: 5 },
    { numeral: 'IV', value: 4 },
    { numeral: 'I', value: 1 }
  ]
  let romanNumeral = ''
  for (const { numeral, value } of romanNumerals) {
    while (num >= value) {
      romanNumeral += numeral
      num -= value
    }
  }
  return romanNumeral
}
const List = styled.ul`
  list-style: none;
  padding-left: 2rem;
  padding-right: 1rem;
  display: grid;
  grid-auto-flow: row;
  gap: 2rem;
  @media (max-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }
`
export default Missions
