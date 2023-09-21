import { type ReactElement } from 'react'

import '@/styles/fonts.css'
import '@/styles/globals.css'
import StyledComponentsRegistry from '@/lib/registry'

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
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
