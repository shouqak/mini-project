import React from "react"

function Hero() {
  return (
    <div>
      <div   className="relative isolate px-6 pt-2 lg:px-8 h-screen flex items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage: "url('https://images.pexels.com/photos/2080544/pexels-photo-2080544.jpeg?auto=compress&cs=tinysrgb&w=600 ')"
  }}>
        <div
          class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
         
        </div>
        <div class="mx-auto max-w-2xl py-32 ">
          <div class="hidden sm:mb-8 sm:flex sm:justify-center">
            
          </div>
          <div class="text-center">
            <h1 class="text-3xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
اعرف كتلة جسمك بخطوة وحدة
            </h1>
            <p class="mt-8 text-lg font-medium text-pretty text-gray-900 sm:text-xl/8">
              احسب مؤشر كتلة جسمك بسهولة وسرعة، وابدأ رحلتك نحو صحة أفضل.


            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                class="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-black-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
ابدأ الآن

              </a>
              
            </div>
          </div>
        </div>
        <div
          class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
         
        </div>
      </div>
    </div>
  )
}

export default Hero
