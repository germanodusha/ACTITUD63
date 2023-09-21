import { type ReactElement } from 'react'

import '@/styles/fonts.css'
import '@/styles/globals.css'
import StyledComponentsRegistry from '@/lib/registry'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Actitud1963',
  description: 'ACTITUD-63',
  icons: {
    other: {
      url: '/icon.svg',
      type: 'image/svg+xml',
      color: '#000000',
      rel: 'mask-icon'
    }
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}): ReactElement {
  return (
    <html lang="en">
      <head>
        <link rel="mask-icon" href="/safari-icon.svg" color="#a6a6a6" />
      </head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
