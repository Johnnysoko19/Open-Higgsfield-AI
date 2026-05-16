'use client';

import { useState } from 'react';

export default function ApiKeyModal({ onSave }) {
  const [keys, setKeys] = useState({
    muapi: '',
    xai: '',
    gptimage2: '',
    nanobanana: '',
  });
  const [error, setError] = useState('');

  const handleChange = (provider, value) => {
    setKeys(prev => ({
      ...prev,
      [provider]: value.trim()
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasAtLeastOneKey = Object.values(keys).some(k => k.length > 0);
    if (!hasAtLeastOneKey) {
      setError('Please enter at least one API key');
      return;
    }
    onSave(keys);
  };

  return (
    <div className="min-h-screen bg-[#030303] flex items-center justify-center px-4 font-inter">
      <div className="w-full max-w-md bg-[#0a0a0a]/40 backdrop-blur-xl border border-white/10 rounded-xl p-10 shadow-2xl">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-14 h-14 bg-[#d9ff00]/5 rounded-2xl flex items-center justify-center border border-[#d9ff00]/10 mb-6 group hover:border-[#d9ff00]/30 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d9ff00" strokeWidth="1.5" className="group-hover:scale-110 transition-transform">
              <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L12 17.25l-4.5-4.5L15.5 7.5z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="text-xl font-bold text-white tracking-tight mb-2">
            Custom Generative AI
          </h1>
          <p className="text-white/40 text-[13px] leading-relaxed px-4">
            Enter your API keys (Muapi + your own accounts)
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {/* Muapi */}
            <div>
              <label className="block text-xs font-bold text-white/30 ml-1 mb-1">Muapi.ai Key</label>
              <input
                type="password"
                value={keys.muapi}
                onChange={(e) => handleChange('muapi', e.target.value)}
                placeholder="sk-..."
                className="w-full bg-white/5 border border-white/[0.03] rounded-md px-5 py-3 text-sm text-white placeholder:text-white/10 focus:outline-none focus:ring-1 focus:ring-[#d9ff00]/30 focus:bg-white/[0.07]"
              />
            </div>

            {/* xAI Grok */}
            <div>
              <label className="block text-xs font-bold text-white/30 ml-1 mb-1">xAI Grok API Key</label>
              <input
                type="password"
                value={keys.xai}
                onChange={(e) => handleChange('xai', e.target.value)}
                placeholder="xai-..."
                className="w-full bg-white/5 border border-white/[0.03] rounded-md px-5 py-3 text-sm text-white placeholder:text-white/10 focus:outline-none focus:ring-1 focus:ring-[#d9ff00]/30 focus:bg-white/[0.07]"
              />
            </div>

            {/* GPTImage2 */}
            <div>
              <label className="block text-xs font-bold text-white/30 ml-1 mb-1">GPTImage2 API Key</label>
              <input
                type="password"
                value={keys.gptimage2}
                onChange={(e) => handleChange('gptimage2', e.target.value)}
                placeholder="your GPTImage2 key"
                className="w-full bg-white/5 border border-white/[0.03] rounded-md px-5 py-3 text-sm text-white placeholder:text-white/10 focus:outline-none focus:ring-1 focus:ring-[#d9ff00]/30 focus:bg-white/[0.07]"
              />
            </div>

            {/* NanoBanana */}
            <div>
              <label className="block text-xs font-bold text-white/30 ml-1 mb-1">NanoBanana API Key</label>
              <input
                type="password"
                value={keys.nanobanana}
                onChange={(e) => handleChange('nanobanana', e.target.value)}
                placeholder="your NanoBanana key"
                className="w-full bg-white/5 border border-white/[0.03] rounded-md px-5 py-3 text-sm text-white placeholder:text-white/10 focus:outline-none focus:ring-1 focus:ring-[#d9ff00]/30 focus:bg-white/[0.07]"
              />
            </div>
          </div>

          {error && <p className="text-red-500/80 text-[13px] font-medium ml-1">{error}</p>}

          <button
            type="submit"
            className="w-full bg-[#d9ff00] text-black font-medium py-3 rounded-md hover:bg-[#e5ff33] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-[#d9ff00]/5"
          >
            Save All Keys
          </button>
        </form>
      </div>
    </div>
  );
}
