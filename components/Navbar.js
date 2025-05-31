"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'


const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setshowdropdown] = useState(false)
  // if (session) {
  //   return <>
  //     Signed in as {session.user.email} <br />
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }
  return (
    <div >
      <nav className="bg-neutral-900 text-white flex justify-between items-center px-4 h-16">
        <Link href="/" className="logo font-bold text-xl flex items-center">
          <span>FTF</span>
          {/* <img src="/single.gif" width={22} alt="" /> */}
        </Link>

        <div className="relative">
          {session ? (
            <>
              <button
                onClick={() => setshowdropdown(!showdropdown)}
                onBlur={() => {
                  setTimeout(() => {
                    setshowdropdown(false);
                  }, 100);
                }}
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
                type="button"
              >
                {/* Only email on small screens; 'Welcome email' on md+ */}
                <span className="block md:hidden">{session.user.name}</span>
                <span className="hidden md:block">Welcome {session.user.name}</span>

                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>

              <div
                id="dropdown"
                className={`z-10 ${showdropdown ? "" : "hidden"} absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-28 md:w-36 dark:bg-gray-700`}
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                  <li>
                    <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                  </li>
                  <li>
                    <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your page</Link>
                  </li>
                  <li>
                    <Link href="#" onClick={() => signOut()} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <Link href="/login">
              <button
                type="button"
                className="text-white bg-gradient-to-br from-green-400 to-teal-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Login
              </button>
            </Link>
          )}
        </div>
      </nav>

    </div>
  )
}

export default Navbar
