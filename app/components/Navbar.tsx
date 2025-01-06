'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronUp } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-900 fixed w-full z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16">
          <div className="flex-none">
            <Link href="/" className="flex items-center h-16">
              <img
                src="https://i.imgur.com/2NW2U6R.jpeg"
                alt="Chill Coin Logo"
                className="h-8 w-8 mr-2"
              />
              <span className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
                CHILL
              </span>
            </Link>
          </div>

          <div className="flex-1 flex justify-end items-center gap-6">
            <Link
              href="#"
              className="text-white hover:text-blue-400 transition-colors text-lg font-medium"
            >
              Buy
            </Link>
            <div className="inline-block w-[70px]">
              <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                <DropdownMenuTrigger asChild>
                  <button className="text-white hover:text-blue-400 transition-colors text-lg font-medium flex items-center">
                    Links
                    {isOpen ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="bg-gray-800 border border-blue-500/20 w-48 p-2" 
                  align="end"
                  sideOffset={8}
                >
                  <DropdownMenuItem className="focus:bg-blue-700 focus:text-white py-2">
                    <Link href="https://discord.gg/tPq2VNnzW2" className="flex items-center gap-2 text-gray-300 hover:text-white text-base w-full">
                      Discord
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="focus:bg-blue-700 focus:text-white py-2">
                    <Link href="https://t.me/chillcoin_pow" className="flex items-center gap-2 text-gray-300 hover:text-white text-base w-full">
                      Telegram
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="focus:bg-blue-700 focus:text-white py-2">
                    <Link href="https://x.com/Chill_Coin_PoW" className="flex items-center gap-2 text-gray-300 hover:text-white text-base w-full">
                      X
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="focus:bg-blue-700 focus:text-white py-2">
                    <Link href="https://github.com/chillcoin-project/chillcoin" className="flex items-center gap-2 text-gray-300 hover:text-white text-base w-full">
                      Github
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=support@chillcoin.fun"
              className="text-white hover:text-blue-400 transition-colors text-lg font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

