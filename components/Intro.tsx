import Image from 'next/image';
import Link from 'next/link';

export const Intro = () => (
  <div className="flex flex-col space-y-4 snap-y snap-mandatory scroll-smooth">
    <div className="flex items-center justify-center">
      <Image
        className="rounded-3xl shadow-xl"
        width="300"
        height="300"
        src="/img/Profile.png"
        alt="Profile image"
      />
    </div>
    <div className="items-center justify-center space-y-3 my-6 py-3">
      <p className="text-center p-12 font-semibold text-5xl my-3 animate-bounce text-cyan-500">
        Hi there!
      </p>
      <div className="flex flex-col shadow-lg p-4 rounded-lg gap-4">
        <p className="font-medium text-gray-700">
          I am a Staff Software Engineer at SparkCognition. I am responsible for
          driving the development of our <strong>Manufacturing Suite </strong>
          and<strong> Oil & Gas Maintenance Advisor</strong> as the Tech Lead. I
          am experienced in designing simple workflows for complex problems, and
          as a Product Owner for DeepNLP, I am responsible for defining,
          refining, and negotiating the roadmap to deliver the product&apos;s
          features. I work closely with multiple Product Managers and Directors
          to realize their vision, adopting a fail-fast and quick prototyping
          approach. I am proud to have successfully delivered POCs using
          existing Data Science technologies and ML, showcasing demos to
          existing and potential customers like Pemex, Boeing, and Murphy,
          helping to gain more contracts for our company. WCAG 2.0 and section
          508 guidelines compliant, and I have automated deployment jobs in
          Jenkins and TravisCI using TypeScript.
        </p>
        <p className="font-medium text-gray-700">
          At the University of Texas at Dallas, I earned a Master of Science in
          Computer Science between 2012 and 2014. I define and document vision,
          scope, functional requirements, and risk analysis using solution
          management tools and processes, and I also define functional
          requirements, use case models, use case specifications, activity
          diagrams, and other artifacts defined in the requirements workflow of
          the methodology.
        </p>
      </div>
    </div>
    <div className="flex flex-col space-y-6 my-6 py-3">
      <p className="text-center shadow p-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-xl font-semibold text-3xl my-3 snap-always snap-center">
        Ask me about
      </p>
      <div className="flex flex-row flex-wrap space-x-6 items-center justify-center gap-3">
        <Image
          className="rounded-2xl bg-gray-500"
          width="48"
          height="48"
          alt="React"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
        />
        <Image
          className="rounded-2xl bg-gray-500"
          width="48"
          height="48"
          alt="NextJS"
          src="https://raw.githubusercontent.com/github/explore/28b02bbc9ad9f7a503c43775aebeb515dc2da5fc/topics/nextjs/nextjs.png"
        />
        <Image
          className="rounded-2xl bg-gray-500"
          width="48"
          height="48"
          alt="TypeScript"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
        />
        <Image
          className="rounded-2xl bg-gray-500"
          width="48"
          height="48"
          alt="Express"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png"
        />
        <Image
          className="rounded-2xl bg-gray-500"
          width="48"
          height="48"
          alt="JavaScript"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
        />
        <Image
          className="rounded-2xl bg-gray-500"
          width="48"
          height="48"
          alt="Node"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
        />
        <Image
          className="rounded-2xl bg-gray-500"
          width="48"
          height="48"
          alt="Storybook"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/storybook/storybook.png"
        />
        <Image
          className="rounded-2xl bg-gray-500"
          width="48"
          height="48"
          alt="Webpack"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/webpack/webpack.png"
        />
        <Image
          className="rounded-2xl bg-gray-500"
          width="48"
          height="48"
          alt="Git"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
        />
      </div>
    </div>
    <div className="flex flex-col space-y-6 my-6 py-3">
      <p className="text-center shadow p-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-xl font-semibold text-3xl my-3 snap-always snap-center">
        Experience
      </p>
      <div className="flex flex-wrap place-content-center">
        <div className="m-4 flex items-center shadow rounded-2xl flex-col hover:bg-gradient-to-r from-red-400/30 via-pink-500/30 to-purple-500/30 min-w-80 transition ease-in-out duration-500 hover:scale-105">
          <p className="m-3 font-bold text-xl text-black align-top">
            SparkCognition
          </p>
          <Image
            className="rounded-full m-12"
            width="150"
            height="150"
            alt="SparkCognition"
            src="/img/intro/sparkcognition_logo.jpeg"
          />
        </div>
        <div className="m-4 flex items-center shadow rounded-2xl flex-col hover:bg-gradient-to-r from-red-400/30 via-pink-500/30 to-purple-500/30 min-w-80 transition ease-in-out duration-500 hover:scale-105">
          <p className="m-3 font-bold text-xl text-black align-top">Cerner</p>
          <Image
            className="rounded-full m-12"
            width="150"
            height="150"
            alt="Cerner"
            src="/img/intro/cerner-logo-1.png"
          />
        </div>
        <div className="m-4 flex items-center shadow rounded-2xl flex-col hover:bg-gradient-to-r from-red-400/30 via-pink-500/30 to-purple-500/30 min-w-80 transition ease-in-out duration-500 hover:scale-105">
          <p className="m-3 font-bold text-xl text-black align-top">
            TradeStation
          </p>
          <Image
            className="rounded-full m-12"
            width="150"
            height="150"
            alt="TradeStation"
            src="/img/intro/TS-Logo-Mark.png"
          />
        </div>
      </div>
    </div>
    <div className="flex flex-col space-x-6 my-6 py-3">
      <p className="text-center shadow p-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-xl my-3 font-semibold text-3xl snap-always snap-center">
        Get in touch
      </p>
      <ul className="grid grid-cols-4 auto-cols-fr items-center  justify-center">
        <Link
          target="_blank"
          referrerPolicy="no-referrer"
          href="mailto:abhijit945.work@gmail.com">
          <li className="p-6 m-4 flex items-center justify-center flex-wrap shadow rounded-xl hover:bg-gradient-to-r from-red-400/30 via-pink-500/30 to-purple-500/30 transition ease-in-out duration-500 hover:scale-110">
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
          <li className="p-6 m-4 flex items-center justify-center flex-wrap shadow rounded-xl hover:bg-gradient-to-r from-red-400/30 via-pink-500/30 to-purple-500/30 transition ease-in-out duration-500 hover:scale-110">
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
          <li className="p-6 m-4 flex items-center justify-center flex-wrap shadow rounded-xl hover:bg-gradient-to-r from-red-400/30 via-pink-500/30 to-purple-500/30 transition ease-in-out duration-500 hover:scale-110">
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
          <li className="p-6 m-4 flex items-center justify-center flex-wrap shadow rounded-xl hover:bg-gradient-to-r from-red-400/30 via-pink-500/30 to-purple-500/30 transition ease-in-out duration-500 hover:scale-110">
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
  </div>
);
