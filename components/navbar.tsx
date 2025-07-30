
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu} from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Separator } from "@radix-ui/react-separator"
interface NavbarProps {
  activeSection: string
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
 
  useEffect(() => {
    if (typeof window === "undefined") return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home", id: "hero" },
    { href: "/", label: "Characters", id: "chars" },
    { href: "/", label: "Worlds", id: "worlds" },
    { href: "/", label: "Suggestions", id: "suggestions" },
  ]

  return (
    <div className={cn(
      "fixed w-full top-0 z-50 transition-all duration-300 border-b border-gray-800 dark:border-border",
      isScrolled 
        ? "py-2 bg-slate-200-100 dark:bg-background/80 backdrop-blur-sm" 
        : "py-4 bg-black dark:bg-background"
    )}>
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-transparent dark:bg-primary/20 flex items-center justify-center">
            <Image src="/logo.png" alt="Logo" width={40} height={40}  />
          </div>
          <span className="font-bold text-xl text-white dark:text-purple-800/70">
            Echoes Of Us
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                activeSection === link.id 
                  ? "text-blue-500 dark:text-blue-500" 
                  : "text-white dark:text-gray-300 hover:text-slate-400 dark:hover:text-gray-100"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>


        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden text-white hover:bg-slate-800/5 hover:text-slate-400 dark:text-white bg-tranaparent dark:bg-transparent cursor-pointer"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="bg-black dark:bg-background border-black dark:border-border"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center space-x-2 ml-25 mt-3">
                <div className=" w-10 h-10 rounded-full bg-black dark:bg-primary/20 flex items-center justify-center">
                  <Image src="/logo.png" alt="Logo" width={40} height={40} />
                </div>
                <span className="font-bold text-xl text-white dark:text-white">
                  Echoes Of Us
                </span>
              </div>
              <Separator className="my-4 h-1 bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

              <nav className="flex flex-col space-y-6 mt-8 ml-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    className={cn(
                      "text-lg font-medium transition-colors flex items-center",
                      activeSection === link.id 
                        ? "text-blue-500 dark:text-blue-500" 
                        : "text-white dark:text-gray-300 hover:text-slate-500 dark:hover:text-slate-300"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}