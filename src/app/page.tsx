"use client";

const Welcome = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 bg-custom bg-center bg-no-repeat">
      <div className="text-center p-6 bg-black bg-opacity-50 rounded-lg">
        <div className="text-3xl text-white font-bold mb-4">
          Dobrodošli na moj projekat iz predmeta Zaštita na Vebu
        </div>
        <div>
          <a
            href="/home"
            className="text-xl text-orange-200 hover:text-orange-700 transition-all duration-300"
          >
            Home
          </a>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
