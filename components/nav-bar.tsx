"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { Menu, X, ChevronDown, LayoutDashboard } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { LucernaLogo } from "./lucerna-logo"

export function NavBar() {
  const pathname = usePathname()
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isSigningOut, setIsSigningOut] = useState(false)
  const [aiToolsOpen, setAiToolsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Check authentication status
  useEffect(() => {
    async function checkAuth() {
      try {
        setIsLoading(true)
        const { data, error } = await supabase.auth.getUser()

        if (!error && data.user) {
          setIsLoggedIn(true)
        } else {
          setIsLoggedIn(false)
        }
      } catch (error) {
        console.error("Auth check error:", error)
        setIsLoggedIn(false)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setAiToolsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSignOut = async () => {
    if (isSigningOut) return

    setIsSigningOut(true)
    try {
      const { error } = await supabase.auth.signOut()

      if (error) {
        console.error("Error signing out:", error)
        setIsSigningOut(false)
        return
      }

      // Force a hard navigation to the home page
      window.location.href = "/"
    } catch (err) {
      console.error("Sign out error:", err)
      setIsSigningOut(false)
    }
  }

  // Update the navLinks array to include the main navigation items
  const navLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/dashboard/saved", label: "Saved Resumes" },
    { href: "/dashboard/history", label: "Resume History" },
    { href: "/dashboard/templates", label: "Templates" },
    { href: "/dashboard/analytics", label: "Analytics" },
    { href: "/dashboard/profile", label: "Profile" },
  ]

  // AI Tools dropdown items
  const aiToolsLinks = [
    { href: "/dashboard/cover-letter", label: "Cover Letter" },
    { href: "/dashboard/linkedin", label: "LinkedIn" },
    { href: "/dashboard/interview", label: "Interview Coach" },
  ]

  const isActive = (path: string) => {
    if (path === "/dashboard" && pathname === "/dashboard") {
      return true
    }
    return pathname.startsWith(path) && path !== "/dashboard"
  }

  // Check if any AI tool is active
  const isAiToolActive = aiToolsLinks.some((link) => pathname.startsWith(link.href))

  return (
    <header className="border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <LucernaLogo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {/* Show dashboard navigation links when on dashboard pages OR when logged in */}
          {(pathname.startsWith("/dashboard") || isLoggedIn) && (
            <div className="flex gap-6 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-gray-900 ${
                    isActive(link.href) ? "text-gray-900" : "text-gray-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* AI Tools Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setAiToolsOpen(!aiToolsOpen)}
                  className={`text-sm font-medium transition-colors hover:text-gray-900 flex items-center ${
                    isAiToolActive ? "text-gray-900" : "text-gray-600"
                  }`}
                >
                  AI Tools
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${aiToolsOpen ? "rotate-180" : ""}`} />
                </button>

                {aiToolsOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden z-20">
                    <div className="py-1">
                      {aiToolsLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`block px-4 py-2 text-sm hover:bg-gray-50 ${
                            pathname.startsWith(link.href) ? "text-gray-900 bg-gray-50" : "text-gray-600"
                          }`}
                          onClick={() => setAiToolsOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Authentication buttons */}
          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              {!pathname.startsWith("/dashboard") && (
                <Button variant="outline" asChild className="text-sm">
                  <Link href="/dashboard">
                    <LayoutDashboard className="h-4 w-4 mr-2" />
                    Dashboard
                  </Link>
                </Button>
              )}
              <Button variant="outline" onClick={handleSignOut} disabled={isSigningOut} className="text-sm">
                {isSigningOut ? "Signing Out..." : "Sign Out"}
              </Button>
            </div>
          ) : (
            <>
              {pathname !== "/auth" && !isLoading && (
                <Button variant="outline" asChild className="text-sm">
                  <Link href="/auth">Sign In</Link>
                </Button>
              )}
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t py-4">
          <div className="container flex flex-col space-y-3">
            {/* Show dashboard links when on dashboard pages OR when logged in */}
            {(pathname.startsWith("/dashboard") || isLoggedIn) && (
              <>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium py-2 transition-colors hover:text-gray-900 ${
                      isActive(link.href) ? "text-gray-900" : "text-gray-600"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* AI Tools Section in Mobile Menu */}
                <div className="py-2">
                  <button
                    onClick={() => setAiToolsOpen(!aiToolsOpen)}
                    className={`text-sm font-medium transition-colors hover:text-gray-900 flex items-center ${
                      isAiToolActive ? "text-gray-900" : "text-gray-600"
                    }`}
                  >
                    AI Tools
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${aiToolsOpen ? "rotate-180" : ""}`} />
                  </button>

                  {aiToolsOpen && (
                    <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100">
                      {aiToolsLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`block py-1 text-sm hover:text-gray-900 ${
                            pathname.startsWith(link.href) ? "text-gray-900" : "text-gray-600"
                          }`}
                          onClick={() => {
                            setAiToolsOpen(false)
                            setMobileMenuOpen(false)
                          }}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}

            {/* Authentication buttons for mobile */}
            {isLoggedIn ? (
              <>
                {!pathname.startsWith("/dashboard") && (
                  <Button variant="outline" asChild className="w-full mt-2">
                    <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                      <LayoutDashboard className="h-4 w-4 mr-2" />
                      Dashboard
                    </Link>
                  </Button>
                )}
                <Button variant="outline" onClick={handleSignOut} className="w-full mt-2" disabled={isSigningOut}>
                  {isSigningOut ? "Signing Out..." : "Sign Out"}
                </Button>
              </>
            ) : (
              <>
                {pathname !== "/auth" && !isLoading && (
                  <Button variant="outline" asChild className="w-full mt-2">
                    <Link href="/auth" onClick={() => setMobileMenuOpen(false)}>
                      Sign In
                    </Link>
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
