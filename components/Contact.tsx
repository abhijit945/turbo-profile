import Image from 'next/image';
import Link from 'next/link';

export const Contact = () => {
  return (
    <div className="flex flex-col space-x-6 my-6 py-3">
      <p className="text-center shadow p-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-xl my-3 font-semibold text-3xl snap-always snap-center">
        Get in touch
      </p>
      <ul className="grid grid-cols-4 auto-cols-fr items-center justify-center">
        <Link
          target="_blank"
          referrerPolicy="no-referrer"
          href="mailto:abhijit945.work@gmail.com">
          <li className="p-6 m-4 flex items-center justify-center flex-wrap shadow rounded-xl bg-white hover:bg-gradient-to-r from-red-400/30 via-pink-500/30 to-purple-500/30 transition ease-in-out duration-500 hover:scale-110">
            <Image
              width="48"
              height="48"
              src="/img/intro/icons8-gmail-480.png"
              alt="mail"
            />
          </li>
        </Link>
        <Link
          target="_blank"
          referrerPolicy="no-referrer"
          href="https://github.com/abhijit945">
          <li className="p-6 m-4 flex items-center justify-center flex-wrap shadow rounded-xl bg-white hover:bg-gradient-to-r from-red-400/30 via-pink-500/30 to-purple-500/30 transition ease-in-out duration-500 hover:scale-110">
            <Image
              width="48"
              height="48"
              src="/img/intro/icons8-github-480.png"
              alt="github"
            />
          </li>
        </Link>
        <Link
          target="_blank"
          referrerPolicy="no-referrer"
          href="https://twitter.com/AbhijitRao_">
          <li className="p-8 m-4 flex items-center justify-center flex-wrap shadow rounded-xl bg-white hover:bg-gradient-to-r from-red-400/30 via-pink-500/30 to-purple-500/30 transition ease-in-out duration-500 hover:scale-110">
            <Image
              width="32"
              height="32"
              src="/img/intro/logo-black.png"
              alt="twitter"
            />
          </li>
        </Link>
        <Link
          target="_blank"
          referrerPolicy="no-referrer"
          href="https://instagram.com/abhijit945">
          <li className="p-6 m-4 flex items-center justify-center flex-wrap shadow rounded-xl bg-white hover:bg-gradient-to-r from-red-400/30 via-pink-500/30 to-purple-500/30 transition ease-in-out duration-500 hover:scale-110">
            <Image
              width="48"
              height="48"
              src="/img/intro/icons8-instagram-240.png"
              alt="instagram"
            />
          </li>
        </Link>
      </ul>
    </div>
  );
};
