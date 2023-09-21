import { type ReactElement } from 'react'

import '@/styles/fonts.css'
import '@/styles/globals.css'
import StyledComponentsRegistry from '@/lib/registry'
import Head from 'next/head'

export const metadata = {
  title: 'Actitud1963',
  description: 'ACTITUD-63',
  'mask-icon': '/safari-pinned-tab.svg'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}): ReactElement {
  return (
    <html lang="en">
      <Head>
        <link rel="mask-icon" href="/icon.svg" color="#ececec" />
      </Head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
