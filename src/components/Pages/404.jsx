import React from 'react'

export const 404 = () => {
  return (
    <section class="bg-white dark:bg-primary">
  <div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
    <div class="mx-auto max-w-screen-sm text-center">
      <h1 class="text-primary-600 dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
        404
      </h1>
      <p class="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
        Oops!
      </p>
      <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
        On dirait que cette page a quitté la scène sans jouer de morceau...{" "}
      </p>
      <a
        href="#"
        class="bg-primary-600 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 my-4 inline-flex rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
      >
        Retour
      </a>
    </div>
  </div>
</section>

  )
}
