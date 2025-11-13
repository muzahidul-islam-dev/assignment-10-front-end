import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter, X } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import TwitterIcon from './../../assets/twitter.jpg'

function Footer() {
    return (
        <footer className="bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="font-bold text-white">UtilityBill</span>
                        </div>
                        <p className="text-sm text-white">Manage and pay your utility bills easily and securely.</p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-sm text-white hover:text-primary transition">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/bills" className="text-sm text-white hover:text-primary transition">
                                    Bills
                                </Link>
                            </li>
                            <li>
                                <Link href="/my-bills" className="text-sm text-white hover:text-primary transition">
                                    My Pay Bills
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-sm text-white hover:text-primary transition">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold mb-4 text-white">Contact</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm text-white">
                                <Phone className="w-4 h-4" />
                                +1 (555) 123-4567
                            </li>
                            <li className="flex items-center gap-2 text-sm text-white">
                                <Mail className="w-4 h-4" />
                                support@utilitybill.com
                            </li>
                            <li className="flex items-center gap-2 text-sm text-white">
                                <MapPin className="w-4 h-4" />
                                123 Main St, City, ST 12345
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-semibold mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center hover:opacity-80"
                            >
                                <span className="text-pr text-sm font-bold text-white">
                                    <Facebook className='h-5 w-5 text-white' />
                                </span>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center hover:opacity-80"
                            >
                                <img src={TwitterIcon} className='h-5' alt="" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center hover:opacity-80"
                            >
                                <Linkedin className='text-white h-5' />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm text-white">© 2025 Utility Bill Management System. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 sm:mt-0">
                        <Link href="#" className="text-sm text-white hover:text-primary transition">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-sm text-white hover:text-primary transition">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
