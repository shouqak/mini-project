import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router' 

function Login() {
  const data = JSON.parse(localStorage.getItem("userData"))
  const [name, setName] = useState("")
  const [pass, setPass] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if (data && name === data.name && pass === data.pass) {
      setError("")
      navigate("/home")
    } else {
      setError("الاسم أو كلمة المرور غير صحيحة")
    }
  }

  return (
    <>
      <div className="flex h-screen">
        <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
          <div className="max-w-md text-center">
            <img src="https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="h-screen w-screen" />
          </div>
        </div>
        <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
          <div className="max-w-md w-full p-6">
            <h1 className="text-3xl font-semibold mb-6 text-black text-center">
              تسجيل دخول
            </h1>
            <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">
              سجّل دخولك وخلنا نحسبها مع بعض
            </h1>

            <form
              action="#"
              className="space-y-4"
              onSubmit={handleLogin}
            >
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 text-right"
                >
                  اسم كامل
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 text-right"
                >
                  كلمة المرور
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={pass}
                  onChange={e => setPass(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
              </div>
              {error && (
                <div className="text-red-500 text-xs text-center">{error}</div>
              )}
              <div>
                <button
                  type="submit"
                  className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                >
                  تسجيل دخول
                </button>
              </div>
            </form>
            <div className="mt-4 text-sm text-gray-600 text-center">
              <p>
                ما عندك حساب{" "}
                <Link
                  to="/"
                  className="text-black hover:underline"
                >
                  {" "}
                  سجل حسابك
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login