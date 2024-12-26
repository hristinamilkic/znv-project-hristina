"use client"
import { useUser } from "@clerk/nextjs";

const Home = () => {
    const { user } = useUser();
    return <div className="flex justify-center">Uspesno si ulogovan {user?.username}, Dobrodosao!</div>;
};

export default Home;