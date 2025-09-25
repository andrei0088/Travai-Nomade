"use client";

import { useEffect, useState } from "react";

export default function Contact() {
  const [params, setParams] = useState({
    name: "Non fourni",
    email: "Non fourni",
    message: "Non fourni",
  });

  useEffect(() => {
    // Citim parametrii din URL după ce pagina se încarcă
    const searchParams = new URLSearchParams(window.location.search);
    setParams({
      name: searchParams.get("name") || "Non fourni",
      email: searchParams.get("email") || "Non fourni",
      message: searchParams.get("message") || "Non fourni",
    });
  }, []);

  return (
    <div className="p-10">
      <strong>
        Bienvenue dans le prototype de notre application. Notez bien: il ne
        s&apos;agit pas d&apos;un produit final et aucun message n&apos;est
        envoyé. Cet environnement permet de tester les interfaces et
        l&apos;expérience utilisateur sans partager vos informations.
      </strong>

      <h1 className="text-2xl font-bold mb-4">Paramètres reçus :</h1>
      <p>
        <strong>Nom :</strong> {params.name}
      </p>
      <p>
        <strong>E-mail :</strong> {params.email}
      </p>
      <p>
        <strong>Message :</strong> {params.message}
      </p>
    </div>
  );
}
