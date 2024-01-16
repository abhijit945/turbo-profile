import Image from 'next/image';

export const Experience = () => {
    return <div className="flex flex-col space-y-6 my-6 py-3">
    <p className="text-center shadow p-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-xl font-semibold text-3xl my-3 snap-always snap-center">
      Experience
    </p>
    <div className="flex flex-wrap place-content-center">
      <div className="m-4 flex items-center shadow rounded-2xl flex-col bg-white hover:bg-gradient-to-r from-red-400/30 via-pink-500/30 to-purple-500/30 min-w-80 transition ease-in-out duration-500 hover:scale-105">
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
      <div className="m-4 flex items-center shadow rounded-2xl flex-col bg-white hover:bg-gradient-to-r from-red-400/30 via-pink-500/30 to-purple-500/30 min-w-80 transition ease-in-out duration-500 hover:scale-105">
        <p className="m-3 font-bold text-xl text-black align-top">Cerner</p>
        <Image
          className="rounded-full m-12"
          width="150"
          height="150"
          alt="Cerner"
          src="/img/intro/cerner-logo-1.png"
        />
      </div>
      <div className="m-4 flex items-center shadow rounded-2xl flex-col bg-white hover:bg-gradient-to-r from-red-400/30 via-pink-500/30 to-purple-500/30 min-w-80 transition ease-in-out duration-500 hover:scale-105">
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
}