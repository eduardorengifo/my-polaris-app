import clsx from 'clsx';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const HomePage = () => (
  <main
    className={clsx(
      'grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8',
      inter.className
    )}
  >
    <div className="text-center">
      <h2
        id="title"
        className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"
      >
        Lorem ipsum dolor sit amet
      </h2>
      <p id="description" className="mt-6 text-base leading-7 text-gray-600">
        Consectetur adipiscing elit, sed do eiusmod tempor incididunt u
      </p>
      <div className="mt-10 flex items-center justify-center">
        <button
          id="cta"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Est laborum
        </button>
      </div>
    </div>
  </main>
);

export default HomePage;
