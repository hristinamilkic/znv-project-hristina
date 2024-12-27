"use client";
import { useUser } from "@clerk/nextjs";

const Home = () => {
  const { user } = useUser();
  return (
    <section className="flex items-center rounded-3xl justify-center min-h-screen bg-gradient-to-r from-orange-400 to-yellow-500">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Dobrodošao, {user?.username}!
        </h1>
        <p className="text-lg text-gray-600">
          Uspešno si ulogovan. Drago nam je što si ovde!
        </p>
      </div>
    </section>
  );
};

export default Home;
