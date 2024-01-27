import Image from 'next/image';
import { Card, CardContent, CardHeader } from './ui/card';

export const Experience = () => {
  return (
    <section
      style={{
        backdropFilter: 'blur(10px)',
      }}
      className="flex flex-col space-y-6 my-6 py-3">
      <p className="text-center shadow p-8 mx-48 text-white bg-gradient-to-r from-cyan-300 via-purple-500 to-red-500 rounded-full font-semibold text-2xl my-3 snap-always snap-center">
        Experience
      </p>
      <div className="flex flex-wrap place-content-center">
        <Card
          style={{
            backdropFilter: 'blur(10px)',
          }}
          className="m-4 flex items-center bg-transparent shadow-lg dark:bg-gray-800 rounded-2xl flex-col hover:bg-gradient-to-r from-red-400/30 via-pink-500/30 to-purple-500/30 min-w-80 transition ease-in-out duration-500 hover:scale-105">
          <CardHeader className="m-3 font-bold text-xl text-black dark:text-white align-top">
            SparkCognition
          </CardHeader>
          <CardContent>
            <Image
              className="rounded-full"
              width="96"
              height="96"
              alt="SparkCognition"
              src="/img/intro/sparkcognition_logo.jpeg"
            />
          </CardContent>
        </Card>
        <Card
          style={{
            backdropFilter: 'blur(10px)',
          }}
          className="m-4 flex items-center bg-transparent shadow-lg dark:bg-gray-800 rounded-2xl flex-col hover:bg-gradient-to-r from-red-400/30 via-pink-500/30 to-purple-500/30 min-w-80 transition ease-in-out duration-500 hover:scale-105">
          <CardHeader className="m-3 font-bold text-xl text-black dark:text-white align-top">
            Cerner
          </CardHeader>
          <CardContent>
            <Image
              className="rounded-full"
              width="96"
              height="96"
              alt="Cerner"
              src="/img/intro/cerner-logo-1.png"
            />
          </CardContent>
        </Card>
        <Card
          style={{
            backdropFilter: 'blur(10px)',
          }}
          className="m-4 flex items-center bg-transparent shadow-lg dark:bg-gray-800 rounded-2xl flex-col hover:bg-gradient-to-r from-red-400/30 via-pink-500/30 to-purple-500/30 min-w-80 transition ease-in-out duration-500 hover:scale-105">
          <CardHeader className="m-3 font-bold text-xl text-black dark:text-white align-top">
            TradeStation
          </CardHeader>
          <CardContent>
            <Image
              className="rounded-full"
              width="96"
              height="96"
              alt="TradeStation"
              src="/img/intro/TS-Logo-Mark.png"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
