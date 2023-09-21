import { type ReactElement } from 'react'

import '@/styles/fonts.css'
import '@/styles/globals.css'
import StyledComponentsRegistry from '@/lib/registry'
import Head from 'next/head'

export const metadata = {
  title: 'Actitud1963',
  description: 'ACTITUD-63'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}): ReactElement {
  return (
    <html lang="en">
      <Head>
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color="#636363"
        ></link>
      </Head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
