import React, { useState } from "react"
import { useNavigate } from "react-router"

function Signup() {
  const [name, setName] = useState("")
  const [pass, setPass] = useState("")
  const [passCheck, setPassCheck] = useState("")
  const [email, setEmail] = useState("")
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const validate = () => {
    const newErrors = {}
    let isValid = true

    if (name.length < 3 || name.length > 50) {
      newErrors.name = "يجب أن يكون الاسم 3 أحرف على الأقل وأقل من 50."
      isValid = false
    }

    if (!email) {
      newErrors.email = "البريد الإلكتروني مطلوب"
      isValid = false
    }

    if (pass.length < 8) {
      newErrors.pass = "يجب أن تكون كلمة المرور على الأقل 8 أحرف"
      isValid = false
    }

    if (pass !== passCheck) {
      newErrors.passCheck = "يجب أن تكون كلمة المرور متطابقة"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      const userData = {
        name,
        email,
        pass,

      }

      localStorage.setItem("userData", JSON.stringify(userData))

      navigate("/login")
    }
  }

  return (
    <>
      {/* <!-- component --> */}
      <div className="flex h-screen">
        {/*   <!-- Left Pane --> */}
        <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
          <div className="max-w-md text-center">
            <img
              src="https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=600 "
              alt=""
              className="h-screen w-screen"
            />
          </div>
        </div>
        {/* <!-- Right Pane --> */}
        <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
          <div className="max-w-md w-full p-6">
            <h1 className="text-3xl font-semibold mb-6 text-black text-center">
              تسجيل حساب
            </h1>
            <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">
              سجّل الحين وخل الميزان يقول كلمته!
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 text-right"
                >
                  البريد الالكتروني
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 text-right"
                >
                  كلمة المرور
                </label>
                <p className="text-xs text-gray-300 text-right">
                  اكتب باللغة الانجليزية
                </p>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
                {errors.pass && (
                  <p className="text-red-500 text-xs mt-1">{errors.pass}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="passwordCheck"
                  className="block text-sm font-medium text-gray-700 text-right"
                >
                  تأكيد كلمة المرور
                </label>
                <p className="text-xs text-gray-300 text-right">
                  اكتب باللغة الانجليزية
                </p>
                <input
                  type="password"
                  id="passwordCheck"
                  name="passwordCheck"
                  value={passCheck}
                  onChange={(e) => setPassCheck(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
                {errors.passCheck && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.passCheck}
                  </p>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                >
                  تسجيل حساب
                </button>
              </div>
            </form>
            <div className="mt-4 text-sm text-gray-600 text-center">
              <p>
                عندك حساب{" "}
                <button
                  className="text-black hover:underline"
                  onClick={() => navigate("/login")}
                >
                  {" "}
                  ادخل حسابك
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup