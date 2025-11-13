import React, { use, useState } from 'react'
import Button from '../../components/Button'
import { Eye, EyeOff } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import Google from './../../assets/google.png'
import { UserProvider } from '../../context/AuthContext'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { loginUsingCredintial, loginWithGoogle } = use(UserProvider)
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();

    
    const location = useLocation();
    const redirectPath = location?.state?.from?.pathname || '/';

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.email == '' || formData.password == '') {
            return toast.error('All field is required')
        }

        const result = await loginUsingCredintial(formData.email, formData.password)
        if (result.error) {
            if (result.code == 'auth/invalid-credential') {
                return toast.error('Invalid Credintial');
            }
            return toast.error(result.message)
        } else {
            toast.success(result.message)
            navigate('/', {
                replace: true
            })
        }
    }
    const handleGoogleLogin = async () => {
        const result = await loginWithGoogle()
        if (result.error) {
            return toast.error(result.message)
        } else {
            toast.success(result.message)
            navigate(redirectPath, {
                replace: true
            })
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4">
            <div className="w-full max-w-md">
                <div className="p-8 shadow-xl dark:bg-gray-800 border border-gray-100 dark:border-gray-800 rounded-lg">

                    <h1 className="text-2xl font-bold text-center mb-2">Login to your account</h1>
                    <p className="text-center text-sm mb-8">Welcome back! Please login to continue.</p>

                    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                        <div>
                            <label className="text-sm font-medium block mb-2">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                className='w-full rounded border border-gray-400 py-2 px-3 focus:outline-none'
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium block mb-2">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    required
                                    className='w-full rounded border border-gray-400 py-2 px-3 focus:outline-none'
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 hover transition"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        <div className="text-right">
                            <Link to="#" className="text-sm text-gray-900 dark:text-white transition">
                                Forgot password?
                            </Link>
                        </div>

                        <button className='btn btn-primary w-full'>
                            {isLoading ? "Logging in..." : "Login"}
                        </button>
                    </form>

                    <div className="relative mb-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-border" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="px-2 bg-white dark:bg-gray-800">Or continue with</span>
                        </div>
                    </div>

                    <Button
                        onClick={handleGoogleLogin}
                        className="w-full gap-2 mb-6 bg-transparent"
                    >
                        <img src={Google} alt="" className='h-5' />
                        Sign in with Google
                    </Button>

                    <p className="text-center text-sm">
                        Don't have an account?{" "}
                        <Link to="/auth/register" className="font-medium text-gray-900 dark:text-white transition">
                             Register here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
