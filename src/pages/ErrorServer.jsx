import React from 'react'

export default function ErrorServer() {
  return (
  <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
    <div className="mx-auto max-w-screen-sm text-center">
      <h1 className="text-primary mt-16 mb-8 text-7xl font-extrabold tracking-tight lg:text-9xl">
        500
      </h1>
      <p className="mb-8 text-3xl font-bold tracking-tight text-primary md:text-4xl">
        Erreur serveur.
      </p>
      <p className="mb-8 text-lg font-light text-accent">
        C'est pas nous, c'est en régie.{" "}
      </p>
    </div>
  </div>
  )
}
