import Image from 'next/image';
import RopesSection from '@/components/RopesSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <header className="text-center mb-10">
        <Image src="/eipici-logo.png" alt="EIPICI" width={120} height={120} priority />
        <h1 className="text-4xl font-bold mb-2">Host Intent Hub – Live Demo</h1>
        <p className="text-gray-400 text-xl">Harmony, Intent, Authenticity – Exponentially Epic</p>
      </header>

      {/* Top Metrics */}
      <div className="flex justify-center gap-12 mb-8">
        <div className="text-center">
          <div className="w-32 h-32 rounded-full border-4 border-cyan-400 flex items-center justify-center text-3xl font-bold">98%</div>
          <p className="mt-2 text-cyan-400">Harmony</p>
        </div>
        <div className="text-center">
          <div className="w-32 h-32 rounded-full border-4 border-cyan-400 flex items-center justify-center text-3xl font-bold">98%</div>
          <p className="mt-2 text-cyan-400">Authenticity</p>
        </div>
        <div className="text-center">
          <div className="w-32 h-32 rounded-full border-4 border-cyan-400 flex items-center justify-center text-3xl font-bold">88%</div>
          <p className="mt-2 text-cyan-400">Resonance</p>
        </div>
        <button className="self-center bg-blue-600 px-6 py-4 rounded-lg font-semibold hover:bg-blue-700">Refresh</button>
      </div>

      {/* Chaos Reduction + Ripple Alert */}
      <div className="bg-gradient-to-r from-teal-600 to-green-600 rounded-lg p-4 mb-8 text-center">
        <p className="text-xl font-bold">Chaos Reduction: 95% vs 92% target • Above - signal strong</p>
      </div>

      <div className="bg-orange-700 rounded-lg p-4 mb-8 text-center flex items-center justify-center gap-4">
        <p className="text-lg font-semibold">Exponential Ripple Alert ⚠️: This harmony peak could reach 130x+ users (tens of millions in AI/space abundance play)!</p>
        <button className="bg-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-600">Propagate Ripple</button>
      </div>

      <RopesSection />

      <p className="text-center text-2xl mt-12">More features loading... 🚀</p>
    </div>
  );
}