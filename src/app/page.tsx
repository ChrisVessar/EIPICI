import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <Image src="/eipici-logo.png" alt="EIPICI" width={200} height={200} priority />
      <h1 className="text-5xl font-bold mt-8 text-center">EIPICI Hub Live!</h1>
      <p className="text-2xl mt-4 text-cyan-400 text-center">Harmony, Intent, Authenticity – Exponentially Epic</p>
      <p className="text-xl mt-8 text-center">Core demo building... 🚀</p>
    </div>
  );
}