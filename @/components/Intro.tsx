import Image from 'next/image';
import { Contact } from './Contact';
import { Experience } from './Experience';
import { Skills } from './Skills';
import { Separator } from './ui/separator';

export const Intro = () => (
  <div className="flex flex-col space-y-4 snap-y snap-mandatory scroll-smooth">
    <div
      style={{
        backdropFilter: 'blur(10px)',
      }}
      className="flex items-center justify-center">
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
      <section
        style={{
          backdropFilter: 'blur(10px)',
        }}
        className="flex flex-col p-8 rounded-lg gap-4">
        <p className="font-medium text-gray-700 dark:text-white leading-7 [&:not(:first-child)]:mt-6">
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
        <p className="leading-7 [&:not(:first-child)]:mt-6 font-medium text-gray-700 dark:text-white">
          At the University of Texas at Dallas, I earned a Master of Science in
          Computer Science between 2012 and 2014. I define and document vision,
          scope, functional requirements, and risk analysis using solution
          management tools and processes, and I also define functional
          requirements, use case models, use case specifications, activity
          diagrams, and other artifacts defined in the requirements workflow of
          the methodology.
        </p>
      </section>
    </div>
    <Separator />
    <Skills />
    <Separator />
    <Experience />
    <Separator />
    <Contact />
  </div>
);
