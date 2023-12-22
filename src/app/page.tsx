import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Image
          className="rounded-full"
          width="500"
          height="500"
          src="/assets/Profile.png"
          alt="Profile image"
        />
        <div>
          <div>
            Hi there! I am a Senior Software Engineer at SparkCognition, where I
            am responsible for driving the development of our
            &quot;Manufacturing Suite&quot; and &quot;Oil & Gas Maintenance
            Advisor&quot; as the Tech Lead. I am experienced in architecting
            simple workflows for complex problems, and as a Product Owner for
            DeepNLP, I am responsible for defining, refining, and negotiating
            the roadmap to deliver the product&apos;s features. I work closely
            with multiple Product Managers and Directors to realize their
            vision, adopting a fail-fast and quick prototyping approach.
            Additionally, I manage two offshore contractor teams. I am proud to
            have successfully delivered POCs using existing Data Science
            technologies and ML, showcasing demos to existing and potential
            customers like Pemex, Boeing, and Murphy, helping to gain more
            contracts for our company. are WCAG 2.0 and section 508 guidelines
            compliant, and I have automated deployment jobs in Jenkins and
            TravisCI using TypeScript. At the University of Texas at Dallas, I
            earned a Master of Science in Computer Science between 2012 and
            2014. I define and document vision, scope, functional requirements,
            and risk analysis using solution management tools and processes, and
            I also define functional requirements, use case models, use case
            specifications, activity diagrams, and other artifacts defined in
            the requirements workflow of the methodology.
          </div>
        </div>
        <div>
          <h1>Ask me about</h1>
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>Material UI</li>
            <li>D3</li>
            <li>Building a PC</li>
            <div>
              <code>
                <Image
                  className="rounded-full"
                  width="500"
                  height="500"
                  alt="React"
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                />
              </code>
              <code>
                <Image
                  className="rounded-full"
                  width="500"
                  height="500"
                  alt="TypeScript"
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
                />
              </code>
              <code>
                <Image
                  className="rounded-full"
                  width="500"
                  height="500"
                  alt="Express"
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png"
                />
              </code>
              <code>
                <Image
                  className="rounded-full"
                  width="500"
                  height="500"
                  alt="Azure"
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/azure/azure.png"
                />
              </code>
              <code>
                <Image
                  className="rounded-full"
                  width="500"
                  height="500"
                  alt="JavaScript"
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                />
              </code>
              <code>
                <Image
                  className="rounded-full"
                  width="500"
                  height="500"
                  alt="Node"
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
                />
              </code>
              <code>
                <Image
                  className="rounded-full"
                  width="500"
                  height="500"
                  alt="Storybook"
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/storybook/storybook.png"
                />
              </code>
              <code>
                <Image
                  className="rounded-full"
                  width="500"
                  height="500"
                  alt="Webpack"
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/webpack/webpack.png"
                />
              </code>
              <code>
                <Image
                  className="rounded-full"
                  width="500"
                  height="500"
                  alt="Git"
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                />
              </code>
            </div>
          </ul>
          <div>
            <ul>
              <li>
                <Link href="https://twitter.com/AbhijitRao_">
                  Twitter [@AbhijitRao_]
                </Link>
              </li>
              <li>
                <Link href="https://github.com/abhijit945">
                  GitHub [@abhijit945]
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com/abhijit945">
                  Instagram [@abhijit945]
                </Link>
              </li>
              <li>
                <Link href="mailto:abhijit945@duck.com">Email</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
