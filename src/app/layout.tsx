import { type ReactElement } from 'react'
import '@/styles/globals.css'
import StyledComponentsRegistry from '@/lib/registry'
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
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
