import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sajid Portfolio',
  description: 'Created with v0',
  generator: 'v0.dev',
}

import { Toaster } from 'sonner'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
