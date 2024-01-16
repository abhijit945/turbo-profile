import Image from 'next/image';

export const Skills = () => {
  return (
    <div className="flex flex-col space-y-6 my-6 py-3">
      <p className="text-center shadow p-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-xl font-semibold text-3xl my-3 snap-always snap-center">
        Ask me about
      </p>
      <div className="flex flex-row flex-wrap space-x-6 items-center justify-center gap-3">
        <Image
          className="rounded-2xl bg-gray-500 dark:bg-white"
          width="48"
          height="48"
          alt="React"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
        />
        <Image
          className="rounded-2xl bg-gray-500 dark:bg-white"
          width="48"
          height="48"
          alt="NextJS"
          src="https://raw.githubusercontent.com/github/explore/28b02bbc9ad9f7a503c43775aebeb515dc2da5fc/topics/nextjs/nextjs.png"
        />
        <Image
          className="rounded-2xl bg-gray-500 dark:bg-white"
          width="48"
          height="48"
          alt="TypeScript"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
        />
        <Image
          className="rounded-2xl bg-gray-500 dark:bg-white"
          width="48"
          height="48"
          alt="Express"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png"
        />
        <Image
          className="rounded-2xl bg-gray-500 dark:bg-white"
          width="48"
          height="48"
          alt="JavaScript"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
        />
        <Image
          className="rounded-2xl bg-gray-500 dark:bg-white"
          width="48"
          height="48"
          alt="Node"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
        />
        <Image
          className="rounded-2xl bg-gray-500 dark:bg-white"
          width="48"
          height="48"
          alt="Storybook"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/storybook/storybook.png"
        />
        <Image
          className="rounded-2xl bg-gray-500 dark:bg-white"
          width="48"
          height="48"
          alt="Webpack"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/webpack/webpack.png"
        />
        <Image
          className="rounded-2xl bg-gray-500 dark:bg-white"
          width="48"
          height="48"
          alt="Git"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
        />
      </div>
    </div>
  );
};
