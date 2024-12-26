import React from "react";

type MockKorisnik = {
  id: number;
  name: string;
};

interface Props {
  params: { id: string }; 
}

async function fetchKorisnik(id: string): Promise<MockKorisnik | null> {
  try {
    const response = await fetch(
      `https://676036786be7889dc35d2f7e.mockapi.io/korisnici/${id}`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch korisnik");
    }

    return await response.json();
  } catch {
    return null;
  }
}

export default async function UserPage({ params }: Props) {
  const korisnik = await fetchKorisnik(params.id);

  if (!korisnik) {
    return <div>Korisnik nije pronađen.</div>;
  }

  return (
    <div className="py-5">
      <h1 className="text-xl font-bold">Detalji korisnika</h1>
      <div className="p-5 bg-stone-300 shadow-md rounded-lg text-gray-600">
        <p><strong>ID:</strong> {korisnik.id}</p>
        <p><strong>Ime:</strong> {korisnik.name}</p>
      </div>
    </div>
  );
}
