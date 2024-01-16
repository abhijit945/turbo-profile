import { Avatar, AvatarImage } from './ui/avatar';

export const Skills = () => {
  return (
    <section
      style={{
        backdropFilter: 'blur(10px)',
      }}
      className="flex flex-col space-y-12 my-6 py-3">
      <p className="text-center shadow p-8 mx-48 text-white bg-gradient-to-r from-cyan-300 via-purple-500 to-red-500 rounded-full font-semibold text-2xl my-3 snap-always snap-center">
        Ask me about
      </p>
      <div className="flex flex-row flex-wrap space-x-12 items-center justify-center gap-3">
        <Avatar>
          <AvatarImage
            alt="React"
            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
          />
        </Avatar>
        <Avatar>
          <AvatarImage
            alt="NextJS"
            src="https://raw.githubusercontent.com/github/explore/28b02bbc9ad9f7a503c43775aebeb515dc2da5fc/topics/nextjs/nextjs.png"
          />
        </Avatar>
        <Avatar>
          <AvatarImage
            alt="TypeScript"
            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
          />
        </Avatar>
        <Avatar>
          <AvatarImage
            alt="Express"
            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png"
          />
        </Avatar>
        <Avatar>
          <AvatarImage
            alt="JavaScript"
            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
          />
        </Avatar>
        <Avatar>
          <AvatarImage
            alt="Node"
            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
          />
        </Avatar>
        <Avatar>
          <AvatarImage
            alt="Storybook"
            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/storybook/storybook.png"
          />
        </Avatar>
        <Avatar>
          <AvatarImage
            alt="Webpack"
            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/webpack/webpack.png"
          />
        </Avatar>
        <Avatar>
          <AvatarImage
            alt="Git"
            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
          />
        </Avatar>
      </div>
    </section>
  );
};
