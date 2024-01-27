import Image from 'next/image';
import Link from 'next/link';

const CONTENT = [
  {
    title: 'LinkedIn',
    image: '/img/intro/linkedin.png',
    url: 'https://www.linkedin.com/in/raoabhijit/',
  },
  {
    title: 'Gmail',
    image: '/img/intro/icons8-gmail-480.png',
    url: 'mailto:abhijit945.work@gmail.com',
  },
  {
    title: 'GitHub',
    image: '/img/intro/icons8-github-480.png',
    url: 'https://github.com/abhijit945',
  },
  {
    title: 'Twitter',
    image: '/img/intro/logo-black.png',
    url: 'https://twitter.com/AbhijitRao_',
  },
];

export const Contact = () => {
  return (
    <section
      style={{
        backdropFilter: 'blur(10px)',
      }}
      className="my-6 flex flex-col space-x-6 py-3">
      <p className="mx-48 my-3 select-none snap-center snap-always rounded-full bg-gradient-to-r from-cyan-300 via-purple-500 to-red-500 p-8 text-center text-2xl font-semibold text-white shadow">
        Get in touch
      </p>
      <ul className="flex items-center justify-center gap-4">
        {CONTENT.map(c => (
          <Link
            key={c.title}
            target="_blank"
            referrerPolicy="no-referrer"
            href={c.url}>
            <li className="m-4 flex flex-wrap items-center justify-center rounded-full bg-transparent from-red-400/30 via-pink-500/30 to-purple-500/30  p-8 shadow-lg transition duration-500 ease-in-out hover:scale-125 hover:bg-gradient-to-r dark:bg-gray-800">
              <Image width="32" height="32" src={c.image} alt={c.title} />
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};
