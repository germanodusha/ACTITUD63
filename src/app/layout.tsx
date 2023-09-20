import { type ReactElement } from 'react'

import '@/styles/fonts.css'
import '@/styles/globals.css'
import StyledComponentsRegistry from '@/lib/registry'
import Head from 'next/head'

export const metadata = {
  title: 'ACTITUD-63',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
