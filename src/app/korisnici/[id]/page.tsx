"use client";
import React, { useState, useEffect } from "react";

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

export default function UserDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [korisnik, setKorisnik] = useState<MockKorisnik | null>(null);
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    async function unwrapParams() {
      const unwrappedParams = await params;
      setId(unwrappedParams.id);
    }
    unwrapParams();
  }, [params]);

  useEffect(() => {
    async function loadKorisnik() {
      if (id) {
        const data = await fetchKorisnik(id);
        setKorisnik(data);
      }
    }
    loadKorisnik();
  }, [id]);

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
    }
  }

  if (!korisnik) {
    return <div>Korisnik nije pronađen ili je obrisan.</div>;
  }
  return (
    <div className="py-5 items-center">
      <h1 className="text-xl font-bold">Detalji korisnika</h1>
      <div className="p-5 bg-stone-300 shadow-md rounded-lg text-gray-600">
        <img
          src={`https://i.pravatar.cc/150?u=${korisnik.id}`}
          alt={`${korisnik.name}'s avatar`}
          className="w-16 h-16 rounded-full mr-5"
        />
        <p>
          <strong>Korisnik broj:</strong> {korisnik.id}
        </p>
        <p>
          <strong>Ime:</strong> {korisnik.name}
        </p>
        <div className="mt-3">
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
            onClick={handleUpdate}
          >
            Izmeni
          </button>
          <button
            className="bg-red-500 text-white px-3 py-1 rounded"
            onClick={handleDelete}
          >
            Obriši
          </button>
        </div>
      </div>
    </div>
  );
}
