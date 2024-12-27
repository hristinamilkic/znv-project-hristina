"use client";
import { useUser } from "@clerk/nextjs";

const Home = () => {
  const { user } = useUser();
  return (
    <section>
      <div className="max-h-screen flex justify-center">
        Uspesno si ulogovan {user?.username}, Dobrodosao!
      </div>
    </section>
  );
};

export default Home;
