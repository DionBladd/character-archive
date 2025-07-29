"use client"

import Link from "next/link"
import { Mail, Zap } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function Footer({ contactRef }: { contactRef: React.RefObject<HTMLElement | null> }) {
  return (
    <footer
      ref={contactRef}
      id="contact"
      className="bg-black/70 dark:bg-black border-t border-black/20 dark:border-border"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Side - Branding & About */}
          <div className="lg:w-1/3">
            <Link href="/" className="flex items-center space-x-2 mb-6">

              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400">
                Echoes Of Us
              </span>
            </Link>
            <p className="text-white dark:text-white mb-4">
              Local project designed for organizing, exploring, and developing original characters
              across different fandoms and custom universes. Built for creators, by creators – with love, lore, and imagination.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <Mail className="h-5 w-5 text-slate-400" />
              <a
                href="mailto:dionbladd@icloud.com"
                className="text-white dark:text-white hover:text-blue-400 transition-colors"
              >
                dionbladd@icloud.com
              </a>
            </div>
          </div>

          {/* Right Side - Three Columns */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8 ml-20">
            {/* Column 1 */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-slate-400 dark:text-white">
                Character Manipulation
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/characters/add" className="text-white dark:text-white hover:text-blue-400 transition-colors">
                     Add Character
                  </Link>
                </li>
                <li>
                  <Link href="/characters/view" className="text-white dark:text-white hover:text-blue-400 transition-colors">
                     View Characters
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-slate-400 dark:text-white">
                Fandoms & Universes
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/fandoms/create" className="text-white dark:text-white hover:text-blue-400 transition-colors">
                     Create New
                  </Link>
                </li>
                <li>
                  <Link href="/fandoms/view" className="text-white dark:text-white hover:text-blue-400 transition-colors">
                     View Existing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-slate-400 dark:text-white">
                Extras
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/suggestions" className="text-white dark:text-white hover:text-blue-400 transition-colors">
                    Suggestions
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-white dark:text-white hover:text-blue-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/profile" className="text-white dark:text-white hover:text-blue-400 transition-colors">
                     Your Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gradient-to-r  from-slate-700 via-slate-500 to-slate-700 size-2" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p
            className="text-gray-500 hover:text-blue-400 dark:hover:text-blue-400 transition-colors cursor-pointer"
            onClick={() => window.open("https://github.com/DionBladd", "_blank")}
          >
            © {new Date().getFullYear()} Echoes Of Us by DionBladd
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-500 hover:text-blue-400 dark:hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-400 dark:hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-400 dark:hover:text-blue-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
