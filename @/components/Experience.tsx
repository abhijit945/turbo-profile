import Image from 'next/image';
import { Card, CardContent, CardHeader } from './ui/card';
import { useState } from 'react';

const CONTENT = [
  {
    title: 'SparkCognition',
    description: (
      <p className="text-black dark:text-white">
        As a Staff Software Engineer at SparkCognition from 2020 to the present,
        I have demonstrated expertise in managing the roadmap for the Industrial
        AI Suite (IAS). My responsibilities included steering the strategic
        direction of IAS, ensuring on-time deliveries, and overseeing the
        development of key components. I took ownership of the IAS Portal and
        IAS Container, hosting parallel-developed Microfrontends. Notably, I
        designed and developed AI generative customizable dashboards with a
        sophisticated Layout Engine, empowering users to position widgets and
        link data from InfluxDB for enhanced data visualization. Additionally, I
        engineered an advanced Digital Twin module using ThreeJS, WebGL, and
        PaperJS, providing dynamic 3D or 2D representations of customer assets
        for efficient navigation and asset analysis. In terms of project
        management, I maintained internal tooling for developer productivity,
        including template generation and scripts for npm dependency updates via
        Jenkins. I also led offshore contractor teams from FiveRivers
        Technologies and Codvo.ai, showcasing strong technical skills and
        effective project management in achieving excellence and operational
        efficiency. Furthermore, I led Frontend development initiatives for
        Manufacturing Suite and Oil & Gas Maintenance Advisor, developing a Task
        Workflow system to enhance NLP capabilities within PDFs. I implemented a
        Table Extraction feature to process unstructured documents, streamlining
        document uploads for Banks. Collaborating closely with Product Managers
        and Directors, I adopted a fail-fast and rapid prototyping approach. I
        successfully delivered Proof of Concepts (POCs) utilizing existing Data
        Science and Machine Learning, showcasing capabilities to major clients
        such as BP, Boeing, and Murphy, contributing significantly to securing
        additional contracts. Lastly, I automated deployment processes in
        Jenkins and TravisCI, streamlining build, testing, and deployment using
        TypeScript. Overall, my role has been characterized by technical
        excellence, effective project management, and successful collaboration
        with cross-functional teams.
      </p>
    ),
    image: '/img/intro/sparkcognition_logo.jpeg',
  },
  {
    title: 'Cerner',
    description: (
      <p className="text-black dark:text-white">
        As a Senior Software Engineer at Cerner Corporation from 2014 to 2020,
        my role encompassed various responsibilities and contributions to
        software development and project management. I played a key role in the
        development of a clinical graphing library widely used across the client
        base. Additionally, I created a responsive public website for Fusion,
        hosted on S3 with a server running on an AWS EC2 instance. The
        development stack included TypeScript for the source language, Webpack
        for generating static pages, and an Apache server for serving them.
        Collaboration was a central aspect of my role, as I worked closely with
        stakeholders to communicate customer needs, adjust requirements based on
        technical feedback, and manage and prioritize project requirements. I
        developed detailed product stories and requirements in an agile
        environment to ensure product delivery consistency with target personas.
        In a mentoring capacity, I coached, supervised, and mentored new
        associates on solutions within Cerner and JS projects. I created a
        vanilla JS Date-time picker library named Sol, a framework-agnostic
        library consumable by any JS framework. Additionally, I maintained a
        React responsive framework, Fusion, using mithril.js. My experience
        extended to building web applications compliant with WCAG 2.0 and
        section 508 guidelines. I actively participated in maintaining,
        building, and implementing Cerner&apos;s Powerchart Solution alongside
        clients. I developed components and services for a web-based platform
        (MPages) using ES6 JavaScript, Less CSS, Webpack, ESLint, and Node.js.
        In terms of technical skills, I created a Chrome extension to download
        solution-specific configuration options and executables from the cloud,
        executing them on Windows OS. I demonstrated proficiency in
        Agile/Scrum/Lean Development Methodology and collaborated with technical
        writers for client release documentation. Overall, my tenure at Cerner
        Corporation showcased a versatile skill set, from hands-on software
        development and mentoring to collaboration with stakeholders and
        adherence to industry guidelines.
      </p>
    ),
    image: '/img/intro/cerner-logo-1.png',
  },
  {
    title: 'TradeStation',
    description: (
      <p className="text-black dark:text-white">
        During my internship at TradeStation Technologies as a WebTrading intern
        from 2013 to 2014, I played a significant role in contributing to the
        core products and services of WebTrading, a multi-million-dollar product
        designed for ordering/placing stocks and configuring portfolios. This
        Real-Time single-page JavaScript application (SPA) catered to Wall
        Street day traders and investors. I initially worked full-time as part
        of a cohort of 16 interns during the summer of 2013, and I continued as
        one of two part-time interns through 2013-2014. My responsibilities
        included developing features for WebTrading and actively participating
        in the enhancement of this critical financial platform. One notable
        contribution was the development of a feedback system within WebTrading,
        aimed at gathering valuable information from customers to improve user
        experience and meet their needs effectively. My internship experience
        also involved testing the application using Selenium, Selenium Grid, and
        Vagrant. This hands-on testing approach ensured the reliability and
        quality of WebTrading, crucial for its real-time functionality in the
        fast-paced world of Wall Street trading. In addition, I implemented a
        system for gathering analytics and usage data within WebTrading. This
        system tracked the number of orders placed and collated information into
        analytics platforms such as NewRelic and MixPanel. I utilized APIs
        within both NewRelic and MixPanel to publish usage data, providing
        valuable insights into user behavior. Overall, my internship at
        TradeStation Technologies equipped me with practical experience in
        developing and improving financial software, testing methodologies, and
        implementing analytics solutions to enhance user experience and platform
        performance.
      </p>
    ),
    image: '/img/intro/TS-Logo-Mark.png',
  },
];

export const Experience = () => {
  const [hoverId, setHoverId] = useState(null);
  return (
    <section
      style={{
        backdropFilter: 'blur(10px)',
      }}
      className="my-6 flex flex-col space-y-6 py-3">
      <p className="mx-48 my-3 select-none snap-center snap-always rounded-full bg-gradient-to-r from-cyan-300 via-purple-500 to-red-500 p-8 text-center text-2xl font-semibold text-white shadow">
        Experience
      </p>
      <div className="mx-8 flex flex-col flex-wrap">
        {CONTENT.map(c => (
          <Card
            key={c.title}
            style={{
              backdropFilter: 'blur(10px)',
            }}
            onMouseOver={() => {
              setHoverId(c.title);
            }}
            onMouseLeave={() => {
              setHoverId(null);
            }}
            className="duration-600 z-2 m-4 flex min-w-80 flex-col items-center rounded-2xl bg-transparent from-red-400/30 via-pink-500/30 to-purple-500/30 shadow-lg transition ease-linear hover:scale-y-105 hover:bg-gradient-to-r dark:bg-gray-800">
            <CardHeader className="m-3 align-top text-xl font-bold text-black dark:text-white">
              {c.title}
            </CardHeader>
            <CardContent>
              {hoverId === c.title ? (
                c.description
              ) : (
                <Image
                  className="rounded-full"
                  width="96"
                  height="96"
                  alt={c.title}
                  src={c.image}
                />
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
