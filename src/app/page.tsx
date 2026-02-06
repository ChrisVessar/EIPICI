'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function HostIntentHub() {
  const initialRopes = [
    { id: 1, label: 'Pure Hype & Congrats', percentOfTotal: 43, flavor: 'Energetic & Bullish', score: '99/95%', postCount: 1118 },
    { id: 2, label: 'Meme/Visual Drops', percentOfTotal: 27, flavor: 'Fun & Visual', score: '99/98%', postCount: 702 },
    { id: 3, label: 'Abundance Vision Forward', percentOfTotal: 14, flavor: 'Motivational & Inspirational', score: '95/96%', postCount: 364 },
    { id: 4, label: 'Merger Humor/Logic', percentOfTotal: 8, flavor: 'Energetic & Playful', score: '95/87%', postCount: 208 },
    { id: 5, label: 'Timeline/Fate Awe', percentOfTotal: 4, flavor: 'Thoughtful & Reflective', score: '88/90%', postCount: 104 },
    { id: 6, label: 'Next Merge Calls', percentOfTotal: 3, flavor: 'Community-Building', score: '87/90%', postCount: 78 },
    { id: 7, label: 'Personal Gratitude', percentOfTotal: 1, flavor: 'Warm & Encouraging', score: '96/95%', postCount: 26 },
  ];

  const totalReplies = initialRopes.reduce((sum, rope) => sum + rope.postCount, 0);

  const [ropes] = useState(initialRopes);

  const [propagateUnifiers, setPropagateUnifiers] = useState([
    { handle: 'Gnaval', classifier: 'fresh abundance amplifier', flavor: 'Relentless optimist threading abundance into every interaction with high energy.', replyCount: 68, inviteStatus: 'none' },
    { handle: 'blexfridian', classifier: 'fresh abundance amplifier', flavor: 'Meme-savvy connector who amplifies positive-sum vibes and viral hooks.', replyCount: 142, inviteStatus: 'sent' },
    { handle: 'ptfarxxis', classifier: 'fresh abundance amplifier', flavor: 'Visionary builder pulling in exponential reach with authentic enthusiasm.', replyCount: 19, inviteStatus: 'already' },
    { handle: 'gannagpto', classifier: 'fresh abundance amplifier', flavor: 'Warm encourager creating gratitude loops and sustained engagement.', replyCount: 91, inviteStatus: 'none' },
    { handle: 'jdoeogn', classifier: 'fresh abundance amplifier', flavor: 'Deep-signal thinker bridging tech, philosophy, and abundance narratives.', replyCount: 7, inviteStatus: 'sent' },
  ]);

  const [superUnifiers] = useState([
    { handle: 'Anett', extra: '@PeterDiamandis' },
    { handle: 'Genius', extra: '@wholeMarsBlog' },
    { handle: 'Tosiac', extra: '@teslaeconomics' },
    { handle: 'Kristtt', extra: '@Kristennetten' },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [generatedInvite, setGeneratedInvite] = useState('');
  const [selectedRope, setSelectedRope] = useState(null);
  const [showRaw, setShowRaw] = useState(false);

  const generateUniqueInvite = (user) => {
    const base = `Hey @${user.handle},\n\nI've been quietly admiring how you ${user.flavor.toLowerCase().split(' who ')[0].replace(/threading|amplifies|pulling|creating|bridging/g, 'weave')} abundance themes in your posts — it resonates deeply with the harmony we're building in this merger thread.\n\nThere's a strong positive-sum ripple forming around SpaceX/xAI visions (95%+ signal strength, exponential potential). Your voice and energy would add serious lightning here — no pressure, just genuine appreciation if you'd like to jump in.\n\nThread: https://x.com/spacex/status/...\n\nGrateful either way 🚀`;
    
    const endings = [
      "All positive-sum — grateful for what you bring to the timeline.",
      "Excited to see where the abundance flows.",
      "Harmony over hype — your take would elevate it."
    ];
    
    return base + `\n\n${endings[Math.floor(Math.random() * endings.length)]}`;
  };

  const handleGenerateInvite = (user) => {
    const text = generateUniqueInvite(user);
    setGeneratedInvite(text);
    setSelectedUser(user);
    setShowRaw(false);
    setPropagateUnifiers(prev => prev.map(u => 
      u.handle === user.handle ? { ...u, inviteStatus: 'drafted' } : u
    ));
  };

  const handleSendInvite = () => {
    if (selectedUser) {
      navigator.clipboard.writeText(showRaw ? generatedInvite : generatedInvite);
      setPropagateUnifiers(prev => prev.map(u => 
        u.handle === selectedUser.handle ? { ...u, inviteStatus: 'sent' } : u
      ));
      setSelectedUser(null);
      setGeneratedInvite('');
      setShowRaw(false);
    }
  };

  const getReplyCircleStyle = (count) => {
    if (count === 0) return 'bg-gray-600';
    if (count > 100) return 'bg-orange-500';
    if (count > 50) return 'bg-orange-600';
    return 'bg-blue-600';
  };

  const getReplyText = (count) => {
    if (count > 100) return `${count > 999 ? '999+' : count} 🔥`;
    if (count > 99) return '99+';
    return count;
  };

  const getStatusBadge = (status) => {
    if (status === 'sent') return <span className="text-green-500 text-xs font-semibold">✓ Sent</span>;
    if (status === 'already') return <span className="text-gray-500 text-xs font-semibold">✓ Already Invited</span>;
    if (status === 'drafted') return <span className="text-yellow-500 text-xs font-semibold">✎ Drafted</span>;
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 relative overflow-hidden">
      {/* Watermark */}
      <div className="fixed bottom-6 right-6 pointer-events-none z-10 opacity-20">
        <Image src="/eipici-logo.png" alt="EIPICI" width={200} height={200} />
      </div>
      <div className="fixed bottom-4 right-20 pointer-events-none text-gray-600 text-sm font-semibold z-10">
        EIPICI Powered
      </div>

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

      {/* Condense Rope */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Condense Rope – 7 Precision Clusters ({totalReplies.toLocaleString()} total replies)</h2>
        <div className="space-y-3">
          {ropes.map(rope => (
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
      </section>

      {/* Nexus Propagate */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center justify-between">
          Nexus Propagate (X-Wide Unifiers)
          <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Refresh</button>
        </h2>
        <div className="space-y-4">
          {propagateUnifiers.map(user => (
            <div key={user.handle} className="bg-gray-700 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-4">
                  <a href={`https://x.com/${user.handle}`} className="font-bold text-xl">@{user.handle}</a>
                  <span className="text-cyan-400 text-sm">{user.classifier}</span>
                  {getStatusBadge(user.inviteStatus)}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${getReplyCircleStyle(user.replyCount)}`}>
                    {getReplyText(user.replyCount)}
                  </div>
                </div>
                <button
                  onClick={() => handleGenerateInvite(user)}
                  className="bg-purple-600 px-4 py-2 rounded text-sm hover:bg-purple-700 disabled:opacity-50"
                  disabled={user.inviteStatus === 'sent' || user.inviteStatus === 'already'}
                >
                  Craft Unique Invite
                </button>
              </div>
              <p className="text-gray-300 italic text-sm">{user.flavor}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Super Unifiers */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Super Unifiers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {superUnifiers.map(user => (
            <div key={user.handle} className="bg-gray-700 rounded-lg p-5 shadow-md text-center">
              <a href={`https://x.com/${user.handle}`} className="font-bold text-xl block mb-2">@{user.handle}</a>
              <p className="text-gray-400 text-sm mb-4">{user.extra}</p>
              <button className="bg-blue-600 px-4 py-2 rounded w-full hover:bg-blue-700">Send Invite</button>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Invite Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl p-8 max-w-4xl w-full mx-4 shadow-2xl overflow-y-auto">
            <h3 className="text-2xl font-bold mb-4 text-center">Unique Invite for @{selectedUser.handle}</h3>
            <p className="text-sm text-gray-400 mb-6 text-center">Soft, EIPICI-tuned • Respectful • Positive-sum</p>

            {/* Score Bar */}
            <div className="flex justify-center gap-8 mb-8 text-center">
              <div>
                <div className="text-3xl font-bold text-green-400">98%</div>
                <p>Intent Match</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">95%</div>
                <p>Authenticity</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">96%</div>
                <p>Harmony Fit</p>
              </div>
            </div>

            {/* Dual Pane */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-lg font-semibold mb-2 text-center">Your Original Voice</p>
                <textarea className="w-full h-64 bg-gray-900 text-white p-4 rounded-lg font-mono text-sm" value={generatedInvite} readOnly />
              </div>
              <div>
                <p className="text-lg font-semibold mb-2 text-center">What They'll Love Hearing ❤️</p>
                <p className="text-sm text-gray-400 mb-2 text-center">With your intent & authenticity intact</p>
                <textarea className="w-full h-64 bg-gray-900 text-white p-4 rounded-lg font-mono text-sm" value={generatedInvite} readOnly />
              </div>
            </div>

            {/* Raw Toggle */}
            <div className="text-center mb-6">
              <button onClick={() => setShowRaw(!showRaw)} className="text-cyan-400 hover:underline">
                {showRaw ? 'Show Resonance Version' : 'Show Raw Original'}
              </button>
            </div>

            {/* Subtle Note */}
            <p className="text-center text-gray-400 italic mb-8">
              We get you. We understand them. Harmony at the heart—bridging your message perfectly.
            </p>

            {/* Actions */}
            <div className="flex justify-end gap-4">
              <button
                onClick={() => {
                  setSelectedUser(null);
                  setGeneratedInvite('');
                  setShowRaw(false);
                }}
                className="bg-gray-600 px-6 py-3 rounded hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleSendInvite}
                className="bg-green-600 px-6 py-3 rounded hover:bg-green-700 flex items-center gap-2"
              >
                Copy Resonance Version & Mark Sent ✓
              </button>
            </div>
          </div>
        </div>
      )}

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
    </div>
  );
}