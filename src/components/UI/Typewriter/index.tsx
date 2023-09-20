import { useScroll } from '@/hooks/useScroll'
import { type FC, useState, useEffect, useCallback, useRef } from 'react'

const sleep = async (ms: number): Promise<NodeJS.Timeout> =>
  await new Promise((resolve) => setTimeout(resolve, ms))
const Typewriter: FC<{
  texts: Array<{ text: string; isBold?: boolean }>
  delay: number
  prefix?: string
  suffix?: string
}> = ({ texts, delay, prefix = '', suffix = '' }) => {
  const { scroll } = useScroll()
  const isTypedStarted = useRef(false)
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
    if (scroll > 0) {
      setTimeout(() => {
        if (!isTypedStarted.current) {
          isTypedStarted.current = true
          startTyping()
        }
      }, 1300)
    }
  }, [startTyping, scroll])
  return (
    <div>
      <span
        dangerouslySetInnerHTML={{
          __html: `${renderedText}`
        }}
        {...{ after: suffix, before: prefix }}
      />
    </div>
  )
}
export default Typewriter
