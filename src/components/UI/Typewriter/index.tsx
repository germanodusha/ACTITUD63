import { type FC, useState, useEffect, useCallback } from 'react'

const sleep = async (ms: number): Promise<NodeJS.Timeout> =>
  await new Promise((resolve) => setTimeout(resolve, ms))
const Typewriter: FC<{
  texts: Array<{ text: string; isBold?: boolean }>
  delay: number
  prefix?: string
  suffix?: string
}> = ({ texts, delay, prefix = '', suffix = '' }) => {
  const [renderedText, setRenderedText] = useState('')
  const type = useCallback(
    function ({
      textIndex,
      charIndex,
      isBold
    }: {
      textIndex: number
      charIndex: number
      isBold?: boolean
    }): void {
      if (textIndex === texts.length) return
      if (charIndex === texts[textIndex].text.length) {
        void sleep(delay).then(() => {
          type({
            textIndex: textIndex + 1,
            charIndex: 0,
            isBold: texts[textIndex + 1]?.isBold
          })
        })
        return
      }
      void sleep(delay).then(() => {
        type({
          textIndex,
          charIndex: charIndex + 1,
          isBold: texts[textIndex].isBold
        })
        const newText = texts[textIndex].text[charIndex]
        if (isBold ?? false) {
          if (charIndex === 0) {
            setRenderedText((prev) => {
              return prev + '<b>' + newText + '</b>'
            })
            return
          }
          setRenderedText((prev) => {
            return prev.slice(0, -4) + newText + '</b>'
          })
          return
        }
        setRenderedText((prev) => {
          return prev + newText
        })
      })
    },
    [delay, texts]
  )
  const startTyping = useCallback(
    function (): void {
      type({
        textIndex: 0,
        charIndex: 0,
        isBold: texts[0].isBold
      })
    },
    [texts, type]
  )

  useEffect(() => {
    startTyping()
  }, [startTyping])
  return (
    <div>
      <span
        dangerouslySetInnerHTML={{
          __html: `${renderedText}`
        }}
        style={{
          position: 'absolute'
        }}
        {...{ after: suffix, before: prefix }}
      />
      <span>
        {texts.map((text, index) => {
          return (
            <span
              key={index}
              style={{
                fontWeight: text.isBold !== null ? 400 : 300,
                color: 'transparent',
                visibility: 'hidden'
              }}
            >
              {text.text}
            </span>
          )
        })}
      </span>
    </div>
  )
}
export default Typewriter
