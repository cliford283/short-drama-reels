export const metadata = {
  title: 'Short Drama Reels',
  description: 'Watch short drama reels',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}