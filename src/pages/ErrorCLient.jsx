import React from 'react'

export default function ErrorClient() {
  return (
  <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
    <div className="mx-auto max-w-screen-sm text-center">
      <h1 className="text-primary mt-16 mb-8 text-7xl font-extrabold tracking-tight lg:text-9xl">
        404
      </h1>
      <p className="mb-8 text-3xl font-bold tracking-tight text-primary md:text-4xl">
        Oops!
      </p>
      <p className="mb-8 text-lg font-light text-accent">
        On dirait que cette page a quitté la scène sans jouer de morceau...{" "}
      </p>
      <a
        href="/"
        className="btn hover:btn-success"
      >
        Retour
      </a>
    </div>
  </div>
  )
}
