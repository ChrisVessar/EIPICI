'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Rope {
  id: number;
  label: string;
  percentOfTotal: number;
  flavor: string;
  score: string;
  postCount: number;
}

const initialRopes: Rope[] = [
  { id: 1, label: 'Pure Hype & Congrats', percentOfTotal: 43, flavor: 'Energetic & Bullish', score: '99/95%', postCount: 1118 },
  { id: 2, label: 'Meme/Visual Drops', percentOfTotal: 27, flavor: 'Fun & Visual', score: '99/98%', postCount: 702 },
  { id: 3, label: 'Abundance Vision Forward', percentOfTotal: 14, flavor: 'Motivational & Inspirational', score: '95/96%', postCount: 364 },
  { id: 4, label: 'Merger Humor/Logic', percentOfTotal: 8, flavor: 'Energetic & Playful', score: '95/87%', postCount: 208 },
  { id: 5, label: 'Timeline/Fate Awe', percentOfTotal: 4, flavor: 'Thoughtful & Reflective', score: '88/90%', postCount: 104 },
  { id: 6, label: 'Next Merge Calls', percentOfTotal: 3, flavor: 'Community-Building', score: '87/90%', postCount: 78 },
  { id: 7, label: 'Personal Gratitude', percentOfTotal: 1, flavor: 'Warm & Encouraging', score: '96/95%', postCount: 26 },
];

const totalReplies = initialRopes.reduce((sum, rope) => sum + rope.postCount, 0);

export default function RopesSection() {
  const [selectedRope, setSelectedRope] = useState<Rope | null>(null);

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Condense Rope – 7 Precision Clusters ({totalReplies.toLocaleString()} total replies)</h2>
      <div className="space-y-3">
        {initialRopes.map(rope => (
          <div key={rope.id} className={`py-4 px-6 bg-gray-800 rounded-lg ${rope.percentOfTotal < 5 ? 'opacity-70' : ''} relative`}>
            <div className="flex items-center justify-between">
              <div>
                <span className="font-bold text-lg">{rope.id}. {rope.label}</span>
                <span className="text-cyan-400 ml-3">(+{rope.percentOfTotal}% – {rope.postCount.toLocaleString()} posts)</span>
                <span className="text-gray-400 ml-4">– {rope.flavor} – {rope.score}</span>
              </div>
              <div className="flex items-center gap-4">
                <button className="text-blue-400 hover:underline font-semibold">Condense & Reply</button>
                <button onClick={() => setSelectedRope(rope)} className="hover:scale-110 transition-transform">
                  <Image src="/eipici-logo.png" alt="H" width={48} height={48} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Harmony Preview Modal */}
      {selectedRope && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl p-8 max-w-lg w-full mx-4 shadow-2xl text-center">
            <Image src="/eipici-logo.png" alt="EIPICI" width={100} height={100} />
            <h3 className="text-2xl font-bold mb-4">EIPICI Harmony Preview</h3>
            <p className="text-center text-gray-300 mb-6">Cluster: {selectedRope.label}</p>
            <div className="grid grid-cols-3 gap-4 text-center mb-8">
              <div>
                <div className="text-3xl font-bold text-cyan-400">98%</div>
                <p>Intent Match</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">95%</div>
                <p>Authenticity</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">96%</div>
                <p>Harmony Fit</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 text-center italic mb-6">
              Simulated adaptation preserves host intent while maximizing resonance with this cluster's flavor: {selectedRope.flavor}
            </p>
            <button
              onClick={() => setSelectedRope(null)}
              className="w-full bg-blue-600 px-6 py-3 rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}