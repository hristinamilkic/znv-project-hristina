"use client";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/app/ui/card";
import { Button } from "@/app/ui/button";
import { useRouter, useParams } from "next/navigation"; // Dodato useParams

type MockKorisnik = {
  id: number;
  name: string;
  avatar: string;
};

const API_URL = "https://676036786be7889dc35d2f7e.mockapi.io/korisnici";


async function fetchKorisnik(id: string): Promise<MockKorisnik | null> {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error("Failed to fetch korisnik");
    return await response.json();
  } catch {
    return null;
  }
}

async function updateKorisnik(id: number, name: string): Promise<boolean> {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    return response.ok;
  } catch {
    return false;
  }
}

async function deleteKorisnik(id: number): Promise<boolean> {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    return response.ok;
  } catch {
    return false;
  }
}

export default function UserDetailPage() {
  const [korisnik, setKorisnik] = useState<MockKorisnik | null>(null);
  const params = useParams(); 
  const router = useRouter();

  useEffect(() => {
    async function loadKorisnik() {
      if (params.id) {
        const data = await fetchKorisnik(params.id as string); 
        setKorisnik(data);
      }
    }
    loadKorisnik();
  }, [params.id]); 


  async function handleUpdate() {
    if (!korisnik) return;
    const name = prompt("Unesite novo ime:", korisnik.name);
    if (name && (await updateKorisnik(korisnik.id, name))) {
      setKorisnik({ ...korisnik, name });
    }
  }

 
  async function handleDelete() {
    if (!korisnik) return;
    if (await deleteKorisnik(korisnik.id)) {
      alert("Korisnik je obrisan.");
      setKorisnik(null);
      router.push("/korisnici");
    }
  }
  async function SviKorisnici() {
    router.push("/korisnici");
  }

  if (!korisnik) {
    return <div>Korisnik nije pronađen ili je obrisan.</div>;
  }

  return (
    <div className="py-5 flex justify-center items-center">
      <Card className="max-w-sm w-full text-center">
        <CardHeader>
          <CardTitle className="text-lg font-bold">{korisnik.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <img
            src={`https://i.pravatar.cc/150?u=${korisnik.id}`}
            alt={`${korisnik.name}'s avatar`}
            className="w-24 h-24 rounded-full"
          />
          <p>
            <strong>Korisnik broj:</strong> {korisnik.id}
          </p>
        </CardContent>
        <CardFooter className="grid grid-cols-1 gap-2">
          <div className=" flex flex-row items-center justify-center place-items-center gap-2">
            <Button className="w-1/2" variant="outline" onClick={handleUpdate}>
              IZMENI
            </Button>
            <Button
              className="w-1/2"
              variant="destructive"
              onClick={handleDelete}
            >
              OBRIŠI
            </Button>
          </div>
          <Button variant="outline" onClick={SviKorisnici}>
            SVI KORISNICI
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
