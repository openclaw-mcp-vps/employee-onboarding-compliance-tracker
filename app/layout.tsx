import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ComplianceTrack — Track Mandatory Employee Training',
  description: 'Monitor completion of required training modules and send automated compliance reminders. Built for HR managers and compliance officers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="82f02974-943f-4729-a47d-bce8cda1ab55"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
