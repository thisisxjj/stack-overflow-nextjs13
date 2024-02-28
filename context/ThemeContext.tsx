'use client'

import React, { createContext, useState, useEffect, useContext } from 'react'

type ModeType = 'dark' | 'light'

interface ThemeContextProps {
  mode: ModeType
  setMode: (mode: ModeType) => void
}

const ThemeContext = createContext<ThemeContextProps | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ModeType>('light')

  useEffect(() => {
    const handleThemeChange = () => {
      if (mode === 'dark') {
        setMode('light')
        document.documentElement.classList.remove('dark')
      } else {
        setMode('dark')
        document.documentElement.classList.add('dark')
      }
    }

    handleThemeChange()
  }, [mode])

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (context === null) {
    throw new Error('useTheme must be used within a ThemeContextProvider')
  }

  return context
}
