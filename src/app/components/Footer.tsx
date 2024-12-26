export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Hristina Milkic. Sva prava zadržana.
        </p>
        <div className="flex space-x-4">
          <a href="#about" className="hover:underline">
            O nama
          </a>
          <a href="#privacy" className="hover:underline">
            Privatnost
          </a>
          <a href="#contact" className="hover:underline">
            Kontakt
          </a>
        </div>
      </div>
    </footer>
  );
}
