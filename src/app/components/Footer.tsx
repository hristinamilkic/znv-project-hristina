export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <img
          src="/logo.svg"
          alt="logo"
          className="w-16 h-16 rounded-full mb-4 md:mb-0 md:mr-6"
        />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
          <p className="text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Hristina Milkic. Sva prava
            zadržana.
          </p>
          <div className="flex justify-center items-center md:justify-end space-x-4">
            <a
              href="/home"
              className="hover:underline hover:text-orange-400 transition-all duration-350"
            >
              Home
            </a>
            <div className="w-0.5 h-5 bg-orange-500"></div>
            <a
              href="#contact"
              className="hover:underline hover:text-orange-400 transition-all duration-350"
            >
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
