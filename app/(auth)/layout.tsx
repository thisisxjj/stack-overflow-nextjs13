import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return <main className="flex-center min-h-screen w-full">{children}</main>
}

export default Layout
