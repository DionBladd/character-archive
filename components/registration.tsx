'use client';


import { useState } from 'react';
import LoginPage from '@/app/login/page';

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  //provides initial values
  const [showLogin, setShowLogin] = useState(false);//initial value - false


  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError('');

  const { name, surname, email, password, confirmPassword } = form;

  if (!name || !surname || !email || !password || !confirmPassword) {
    setError("Please, fill all the fields.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setError("Please, enter valid email.");
    return;
  }

  if (password.length < 6) {
    setError("Your password must be at least 6 characters long.");
    return;
  }

  if (password !== confirmPassword) {
    setError("Passwords don't match. Please check if u wrote it correctly.");
    return;
  }

  try {
    const res = await fetch('/api/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, surname, email, password }),
    });

    if (res.ok) {
      setShowLogin(true); // redirect to login
    } else {
      const data = await res.json();
      setError(data.message || 'Registration failed');
    }
    
  } catch (err) {
    setError('Network error. Please try again later.');
  }
};
    if (showLogin){
    return <LoginPage />
  }
  
  //when log in button clicked redirects back to the login page

  return (
    <>

      <main className="min-h-screen w-full bg-white text-black font-sans relative">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/solarsun.png')" }}
        />
        <div className="absolute inset-0 bg-black/40 -z-10" />

        <section className="flex items-center justify-center py-20 px-4">
          <div className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-xl max-w-xl w-full space-y-6">
            <h2 className="text-3xl font-bold text-center text-yellow-500">Create Your Account</h2>

            {error && (
              <div className="bg-red-100 text-red-700 font-semibold text-center p-2 rounded">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold mb-1">Name</label>
                  <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded border border-gray-300"
                    placeholder="e.g. Gamar"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Surname</label>
                  <input
                    name="surname"
                    type="text"
                    value={form.surname}
                    onChange={handleChange}
                    className="w-full p-3 rounded border border-gray-300"
                    placeholder="e.g. Mansurova"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded border border-gray-300"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Password</label>
                <input
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full p-3 rounded border border-gray-300"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Confirm Password</label>
                <input
                  name="confirmPassword"
                  type="password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-3 rounded border border-gray-300"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 w-full rounded shadow-md"
              >
                Sign Up
              </button>
            </form>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <button
              type="button"
              onClick={() => setShowLogin(true)}
              className="text-yellow-500 hover:underline" 
              >
                Log In
                </button>
            </p>
          </div>
        </section>

      </main>
    </>
  );
}
