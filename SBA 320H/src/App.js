import React, { useState, useEffect } from 'react';

const key = 'PCJfzhMoCYdV6UcrFhl9L96xVyTm2qNg';
const stopWords = [
  'what', "is", "are", "i", "you", "he", "she", "it",
  'we', 'they', 'should', 'could', 'would', 'will', 'the',
  'a', 'an', 'of', 'in', 'on', 'at', 'to', 'and', 'but',
  "or", "so", "if", "then", "that", "this", "these", "those"
];
const phText = [
  "Any question in mind? 🌠",
  "Your turn, ask away! 🤔",
  "Type your question now! 🔥",
  "I’m ready, shoot! 🎯",
  "What’s on your mind now? 🍀",
  "Just waiting for your question! 🦋",
  "Ask me anything, I’m here 💬",
  "Your move, my friend 🚀",
  "Still waiting for your question.. 👀",
  "Waiting on your question.. 🌀",
  "Got something on your mind? 💡",
  "Let’s see what you ask.. 🌈"
];

function App() {
  const [q, setQ] = useState('');
  const [gif, setGif] = useState('');
  const [shake, setShake] = useState(false);
  const [fade, setFade] = useState(false);
  const [ph, setPh] = useState('');
  const [type, setType] = useState('ph');

  useEffect(() => setPh(phText[Math.floor(Math.random() * phText.length)]), []);

  const clean = (txt) => txt.toLowerCase().split(" ").filter(w => !stopWords.includes(w)).join(' ');

  const fetchGif = async (query) => {
    const cleanQ = clean(query);
    let g = '';
    try {
      const r = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${encodeURIComponent(cleanQ)}&limit=1&offset=${Math.floor(Math.random() * 50)}`);
      const d = await r.json();
      if (d.data.length > 0) g = d.data[0].images.original.url;
      else {
        const fb = Math.random() > 0.5 ? 'yes' : 'no';
        const rf = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${key}&tag=${fb}&random_id=${Date.now()}`);
        const df = await rf.json();
        g = df.data.images.original.url;
      }
    } catch (e) {
      console.error("GIF error", e);
    }
    setGif(g);
  };

  const anim = (t) => {
    setFade(true);
    setTimeout(() => {
      setFade(false);
      if (t === 'gif') {
        fetchGif(q);
        setType('gif');
      } else {
        setPh(phText[Math.floor(Math.random() * phText.length)]);
        setType('ph');
      }
    }, 1400);
  };

  const shakeHandler = () => {
    if (!q.trim()) return;
    setShake(true);
    anim('gif');
    setTimeout(() => setShake(false), 1400);
  };

  return (
    <div className="app">
      <h1>🔮 GIFstiny.</h1>
      <p>Destiny awaits — shake the GIFs of Fate..</p>
      <input
        type="text"
        placeholder="✍️ Cast a request, see GIFs do their best.."
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && shakeHandler()}
        disabled={shake || fade}
      />
      <button
        className="sh-button"
        onClick={shakeHandler}
        disabled={shake || fade || !q.trim()}
      >
        🎱 Shake up Fate
      </button>
      <div className={`ball ${shake ? 'shake' : ''}`}>
        <div className="ball-in-2">
          <div className="ball-in">
            {type === 'gif' && gif ? (
              <img src={gif} alt="Prediction" className={fade ? 'fade-out' : 'flip-in'} />
            ) : (
              <div className={`ph-triangle ${fade ? 'fade-out' : 'flip-in'}`}>
                <p>{ph}</p>
              </div>
            )}
          </div>
        </div>
        {gif && (
          <button className="ta-button" onClick={() => anim('gif')}>
            🎲 Another shot?
          </button>
        )}
      </div>
    </div>
  );
}

export default App;