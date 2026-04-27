import { useState, useEffect } from 'react'
import { Input } from '@/common/shadcn/components/input'
import { Button } from '@/common/shadcn/components/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/common/shadcn/components/card'

const STORAGE_KEY = 'portfolio_auth_token'

// Simple hash function to create a token from the password
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

export default function PasswordProtection({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Verify the stored token matches the expected password hash
    const verifyAuth = async () => {
      const storedToken = localStorage.getItem(STORAGE_KEY)
      if (storedToken && import.meta.env.VITE_APP_PASSWORD) {
        const expectedToken = await hashPassword(import.meta.env.VITE_APP_PASSWORD)
        if (storedToken === expectedToken) {
          setIsAuthenticated(true)
        } else {
          // Invalid token, clear it
          localStorage.removeItem(STORAGE_KEY)
        }
      }
      setIsLoading(false)
    }
    verifyAuth()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (password === import.meta.env.VITE_APP_PASSWORD) {
      const token = await hashPassword(password)
      localStorage.setItem(STORAGE_KEY, token)
      setIsAuthenticated(true)
    } else {
      setError('Incorrect password. Please try again.')
      setPassword('')
    }
  }

  if (isLoading) {
    return null
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Password Protected</CardTitle>
            <CardDescription>
              Please enter the password to access this portfolio
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoFocus
                  className={error ? 'border-destructive' : ''}
                />
                {error && (
                  <p className="text-sm text-destructive">{error}</p>
                )}
              </div>
              <Button type="submit" className="w-full">
                Unlock
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return <>{children}</>
}
