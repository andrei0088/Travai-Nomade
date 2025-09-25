"use client"; // 🔑 Ce hook indique que c'est un composant client

import { useSearchParams } from "next/navigation";

export default function Contact() {
  const searchParams = useSearchParams();

  const name = searchParams.get("name");
  const email = searchParams.get("email");
  const message = searchParams.get("message");

  return (
    <div className="p-10">
      <strong>
        Bienvenue dans le prototype de notre application. Notez bien: il ne
        s’agit pas d’un produit final et aucun message n’est envoyé. Cet
        environnement permet de tester les interfaces et l’expérience
        utilisateur sans partager vos informations.
      </strong>
      <h1 className="text-2xl font-bold mb-4">Paramètres reçus :</h1>
      <p>
        <strong>Nom :</strong> {name || "Non fourni"}
      </p>
      <p>
        <strong>E-mail :</strong> {email || "Non fourni"}
      </p>
      <p>
        <strong>Message :</strong> {message || "Non fourni"}
      </p>
    </div>
  );
}
