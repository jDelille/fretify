import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fretify',
  description: 'Scale explorer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}