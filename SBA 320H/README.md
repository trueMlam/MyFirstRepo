# 🔮 GIFstiny.

**Destiny awaits — shake the GIFs of Fate..**

# [🌐 Netlify Live Site](https://dulcet-moonbeam-ef95c3.netlify.app/)

## 🎨 Tech Stack

- **React**: Builds the UI
- **CSS**: Animations (background, ball shake, transitions)
- **Giphy API**: Fetches GIFs
- **JS**: Handles logic (search, animations)
- **HTML**: App structure

## 🛠️ Approach

1. **Placeholders**: Random phrases show on load
2. **GIF Fetching**: 
   - Cleans queries (removes stop words)
   - Defaults to «Yes» or «No» GIFs if none found
3. **Animations**: 
   - Shake effect on «🎱 Shake up Fate»
   - 3D flip-in for GIFs/placeholder, fade-out on update
4. **Responsive**: Desktop-first, partial mobile support

## 📖 Usage

1. Type a question
2. Press «🎱 Shake up Fate» or hit «Enter»
3. Watch your destiny appear in GIF form
4. Click «🎲 Another shot?» for a new GIF!

## 🧐 Issues

1. **Search**: 
   - Only cleans queries; no deep question interpretation
2. **Mobile**: 
   - Placeholder triangle may clip
   - Ball may not fully scale