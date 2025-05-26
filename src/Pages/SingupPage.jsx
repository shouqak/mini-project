import React from "react"
import Signup from "../Component/Signup"
import { useNavigate } from "react-router"

function SingupPage() {
  const navigate = useNavigate()

  const handleFormSubmit = (data) => {
    localStorage.setItem("formData", JSON.stringify(data))
    navigate("/login")
  }
  return (
    <>
      <div className="min-h-screen bg-amber-50 flex items-center justify-center p-6">
        <Signup onSubmit={handleFormSubmit} />
      </div>
      <div>Home</div>
    </>
  )
}
export default SingupPage
