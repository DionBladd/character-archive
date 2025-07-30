'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Registration from '@/components/registration'; 
import Image from 'next/image';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [showRegistration, setShowRegistration] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Fill in both email and password fields please!');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please, enter a real email and try again');
      return;
    }

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setError(errorData.message || 'Login failed, try again.');
        return;
      }

  //redirect in case of success
      router.push('/content/loadpage');
    } catch {
      setError('Network error, try again later.');
    }
  };

  if (showRegistration) {
    return <Registration />;
  }


  return (
    <>
      <div className=" flex items-center justify-center bg-cover bg-center mb-10 mt-10  " >
        <Image 
          src="/solarsun.png" 
          width={1900} 
          height={1000} 
          alt="Solar Sun Background" 
          className="absolute inset-0 object-cover w-full h-full -z-10 opasity-50" 
          style={{ objectFit: 'cover' }}  
        />
        
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-md max-w-md w-full mx-4  space-y-6"
          style={{ height: "60vh", width: "190vh" }}>
          <h2 className="text-3xl font-bold mb-6 text-center text-black text-shadow-lg ">Login</h2>

          {error && (
            <div className="bg-red-100 text-red-700 p-2 mb-4 rounded text-center font-semibold">
              {error}
            </div>
          )}

          <label htmlFor="email" className="block mb-1 font-semibold text-black">
            Email
          </label>
          <input
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="you@example.com"
            required
          />

          <label htmlFor="password" className="block mb-1 font-semibold text-black">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPass ? 'text' : 'password'}
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-3 text-gray-500 hover:text-yellow-500"
              aria-label={showPass ? 'Hide password' : 'Show password'}
            >
              {showPass ? '🙈' : '👁️'}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded  shadow-yellow-400 inset-shadow-xs text-shadow-lg  transition"
          >
            Sign In
          </button>

          <p className="mt-4 text-center text-black text-sm">
            Don&apos;t have an account?{' '}
            <button
              type="button"
              onClick={() => setShowRegistration(true)}
              className="text-yellow-500 hover:underline"//new button, when clicked redirects to the registration page 
            >
              Sign Up
            </button>
          </p>
        </form>
      </div>
    </>
  );
}
