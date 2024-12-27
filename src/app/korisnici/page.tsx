"use client";
import { Button } from "@/app/ui/button";
import { Input } from "@/app/ui/input";
import { Card, CardHeader, CardContent, CardTitle } from "@/app/ui/card";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type MockKorisnik = {
  id: number;
  name: string;
  avatar: string;
};

const API_URL = "https://676036786be7889dc35d2f7e.mockapi.io/korisnici";

async function fetchKorisnici(): Promise<MockKorisnik[] | null> {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch korisnici");
    return await response.json();
  } catch {
    return null;
  }
}

async function addKorisnik(name: string): Promise<MockKorisnik | null> {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    if (!response.ok) throw new Error("Failed to add korisnik");
    return await response.json();
  } catch {
    return null;
  }
}

export default function UserPage() {
  const [korisnici, setKorisnici] = useState<MockKorisnik[]>([]);
  const [newName, setNewName] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function loadKorisnici() {
      const data = await fetchKorisnici();
      if (data) setKorisnici(data);
    }
    loadKorisnici();
  }, []);

  async function handleAdd() {
    if (newName.trim()) {
      const newUser = await addKorisnik(newName);
      if (newUser) {
        setKorisnici([...korisnici, newUser]);
        setNewName("");
      }
    }
  }

  function handleViewUser(id: number) {
    router.push(`/korisnici/${id}`);
  }

  if (!korisnici || korisnici.length === 0) {
    return <div>Nijedan korisnik nije pronađen.</div>;
  }

  return (
    <div className="items-center justify-center">
      <div className="flex flex-col gap-3 items-center justify-center">
        <h1 className="text-3xl text-center font-light">Lista korisnika</h1>
        <div className="w-16 h-0.5 bg-orange-500"></div>
      </div>
      <div className="mx-10 grid grid-cols-3 gap-5 mt-5">
        {korisnici.map((korisnik) => (
          <Card
            key={korisnik.id}
            className="shadow-md text-gray-600 flex flex-col items-center justify-center"
          >
            <CardHeader className="flex flex-col items-center">
              <img
                src={`https://i.pravatar.cc/150?u=${korisnik.id}`}
                alt={`${korisnik.name}'s avatar`}
                className="w-16 h-16 rounded-full mb-3"
              />
              <CardTitle className="text-lg">{korisnik.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <p>
                <strong>ID:</strong> {korisnik.id}
              </p>
              <Button
                onClick={() => handleViewUser(korisnik.id)}
                className="mt-3 bg-orange-500 text-white px-4 py-2 rounded"
              >
                PREGLED
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className=" ml-28 mt-10 items-center grid grid-cols-2">
        <h2 className="text-xl font-light mb-3">Želiš dodati korisnika?</h2>
        <div className="flex items-center">
          <Input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Unesite ime"
            className="border p-2 rounded mr-3 w-1/2"
          />
          <Button
            variant={"outline"}
            onClick={handleAdd}
            className="bg-orange-500 text-white font-extrabold px-6 py-4 rounded-sm"
          >
            DODAJ
          </Button>
        </div>
      </div>
    </div>
  );
}
