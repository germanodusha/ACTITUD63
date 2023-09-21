import { type FC } from 'react'
import Text from '../UI/Text'
import VisionSectionContainer from './VisionSectionContainer'

const Vision: FC = () => {
  return (
    <VisionSectionContainer>
      <Text>
        <b style={{
          fontSize: '3.5rem'
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          efficitur dignissim accumsan. Integer in ipsum mattis, faucibus justo
          sit amet, pharetra nibh. Ut consectetur aliquam lectus eu tincidunt.
          Duis nec euismod lectus. Aliquam dolor velit, venenatis quis convallis
          at, venenatis et leo. Sed sodales tortor nec ipsum pretium, et dapibus
          eros faucibus. In ullamcorper scelerisque maximus. Aliquam congue
          congue nulla quis fringilla. Maecenas ante ante, sodales id ex
          viverra, ornare vulputate nisl. Nunc erat elit, faucibus ac efficitur
          at, hendrerit ut nisl. Integer vitae lacinia dolor. Duis varius nulla
          dui, eget convallis diam pulvinar auctor. Curabitur gravida augue a
          nisi cursus hendrerit. Praesent id sem massa. Pellentesque eget libero
          hendrerit, aliquet dolor faucibus, ultricies dui. Nulla luctus ligula
          sed urna molestie scelerisque.
        </b>
      </Text>
    </VisionSectionContainer>
  )
}
export default Vision
