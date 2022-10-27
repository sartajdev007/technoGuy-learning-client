import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const { signIn, providerLogin } = useContext(AuthContext)
    const [error, setError] = useState('')
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    const navigate = useNavigate()

    // handle google login
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
            })
    }

    // handle Github login
    const githubProvider = new GithubAuthProvider()

    const handleGithubLogin = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
            })
    }

    // handle direct login
    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setError('')
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    return (
        <div>
            <div className="hero h-96 bg-green-200">
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-7xl font-semibold text-black">Get In Class</h1>
                    </div>
                </div>
            </div>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-green-700">Sign in to your account</h2>
                    </div>
                    <form onSubmit={handleSignIn} className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-green-500
                  focus:border-green-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div className='pt-4'>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    required
                                    className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-green-500
                  focus:border-green-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                <p>
                                    Didn't Register?? {" "}
                                    <Link to='/register' className="font-medium text-green-600 hover:text-green-500">
                                        Let's Register
                                    </Link>
                                </p>
                                <p className='text-red-500 font-semibold'>
                                    {error}
                                </p>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-green-600 hover:bg-green-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-green-500"
                            >
                                Sign in
                            </button>
                            <button
                                onClick={handleGoogleLogin}
                                className="mt-5 group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-black border-green-500 bg-tranparent hover:bg-green-700 hover:text-white
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-green-500"
                            >
                                Sign in with Google
                            </button>
                            <button
                                onClick={handleGithubLogin}
                                className="mt-5 group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-black border-green-500 bg-tranparent hover:bg-green-700 hover:text-white
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-green-500"
                            >
                                Sign in with Github
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;