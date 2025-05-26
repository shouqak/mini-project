import React from "react"
import { useNavigate } from "react-router"

function Nav() {
  const navigate = useNavigate()
  const userData = JSON.parse(localStorage.getItem("userData"))

  const handleLogout = () => {
    localStorage.removeItem("userData") 
    navigate("/login") 
  }

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://media.canva.com/v2/image-resize/format:JPG/height:800/quality:92/uri:ifs%3A%2F%2FM%2F7f7c8edc-ad8c-4bab-b139-4dfe4c1036f1/watermark:F/width:800?csig=AAAAAAAAAAAAAAAAAAAAABqp5y9YqKaEwfEXCO76zanVMoxneYTVseTYD3NXdscM&exp=1748264089&osig=AAAAAAAAAAAAAAAAAAAAABNe3Shc1LdjTtGGAmRd5E8V3sJ9B7A41SXuvM95oYcT&signer=media-rpc&x-canva-quality=screen"
            className="h-8 w-8 rounded-full"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-bold whitespace-nowrap ">نحسبها سوا؟</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation Links + User Profile */}
        <div className="hidden w-full md:block md:w-auto lg:flex lg:justify-between" id="navbar-default">
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
            <li>
              <a
                href="/about"
                className="block py-2 px-3 text-gray-900 rounded-md hover:bg-gray-50 md:hover:bg-transparent md:p-0 "
              >
                عننا
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-gray-900 rounded-md hover:bg-gray-50 md:hover:bg-transparent md:p-0 "
              >
                الرئيسية
              </a>
            </li>
          </ul>

          {/* User Info / Auth Buttons */}
          <div className="flex items-center gap-4 mt-3 md:mt-0 md:ml-6">
        
              <>
                <span className="text-sm text-gray-700 ">
                  مرحباً، {userData.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-sm text-red-600 hover:text-red-800 "
                >
                  تسجيل الخروج
                </button>
              </>
  
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav