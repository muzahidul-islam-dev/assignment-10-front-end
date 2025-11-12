import { LogOut, Menu, Moon, Sun, User, X } from 'lucide-react'
import React, { use, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'
import themeMode from '../../hooks/useTheme'
import { UserProvider } from '../../context/AuthContext'

function Navbar() {
    const [isDark, setIsDark] = useState(themeMode)
    const [isOpen, setIsOpen] = useState(false)
    const [showProfileMenu, setShowProfileMenu] = useState(false)
    const {logout} = use(UserProvider);
    
    const {user} = use(UserProvider)

    console.log(user, 'this is user')

    const toggleTheme = () => {
        const html = document.querySelector('html')
        if(html.getAttribute('data-theme') == 'dark'){
            html.setAttribute('data-theme','light')
        }else{
            html.setAttribute('data-theme','dark')
        }
        localStorage.setItem('theme', html.getAttribute('data-theme'))
        setIsDark(isDark == 'light' ? 'dark' : 'light')
    }

    const handleLogout = async () => {
        await logout()
    }
    return (
        <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm py-3">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center gap-2">
                        <span className="font-bold text-lg hidden sm:inline text-gray-900 dark:text-white">UtilityBill</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/" className="text-gray-900 hover:text-primary dark:text-white">
                            Home
                        </Link>
                        <Link to="/bills" className="text-gray-900 hover:text-primary dark:text-white">
                            Bills
                        </Link>
                        {user && (
                            <Link to="/my-bills" className="text-gray-900 hover:text-primary dark:text-white">
                                My Pay Bills
                            </Link>
                        )}
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg transition"
                            aria-label="Toggle theme"
                        >
                            {isDark == 'dark' ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-gray-900" />}
                        </button>

                        {!user ? (
                            <div className="hidden sm:flex gap-2">
                                <Link to="/auth/login">
                                    <Button varients={'light'}>Login</Button>
                                </Link>
                                <Link to="/auth/register">
                                    <Button>Register</Button>
                                </Link>
                            </div>
                        ) : (
                            <div className="relative flex items-center gap-5">
                                <button
                                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                                    className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center hover:opacity-80 transition cursor-pointer"
                                >
                                    <User className="w-4 h-4 text-white" />
                                </button>

                                {showProfileMenu && (
                                    <div className="absolute right-20 top-10 w-48 bg-white border border-gray-100 rounded-lg shadow-lg">
                                        <Link href="/profile" className="block px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-lg">
                                            Profile
                                        </Link>
                                    </div>
                                )}
                                <button onClick={handleLogout} className='btn bg-red-500 text-white btn-sm'>Logout</button>
                            </div>
                        )}

                        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg transition">
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden pb-4 space-y-2">
                        <Link href="/" className="block px-2 py-2 rounded text-gray-900">
                            Home
                        </Link>
                        <Link href="/bills" className="block px-2 py-2 rounded text-gray-900">
                            Bills
                        </Link>
                        {user && (
                            <Link href="/my-bills" className="block px-2 py-2 rounded text-gray-900">
                                My Pay Bills
                            </Link>
                        )}
                        {!user && (
                            <>
                                <Link to="/auth/login" className="block px-2 py-2 rounded text-gray-900">
                                    Login
                                </Link>
                                <Link to="/auth/register" className="block px-2 py-2 rounded text-gray-900">
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
