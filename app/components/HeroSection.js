import Link from 'next/link'

export default function HeroSection() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-light text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Einfach und schnell</span>{' '}
                <span className="block text-wh-green-500 xl:inline">Hilfe erhalten</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Finde schnell und einfach Hilfe beim einkaufen, deiner Steuererklaerung oder bei anderen Angelegenheiten.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-full shadow">
                <Link href="/requests">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-wh-green hover:bg-wh-green-600 md:py-4 md:text-lg md:px-10"
                  >
                    Hilfe suchen
                  </a>
                  </ Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link href="/addRequest">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-wh-green-700 bg-wh-green-100 hover:bg-wh-green-200 md:py-4 md:text-lg md:px-10"
                  >
                    Hilfe anbieten
                  </a>
                  </ Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}