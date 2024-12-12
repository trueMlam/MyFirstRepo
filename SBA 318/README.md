# gamecue

gamecue is a simple web application for gaming enthusiasts. it helps users search for games via the rawg api and maintain a backlog. the app uses javascript, html, css, and express with modular code structure and ejs for rendering.

## features

- search for games using the rawg api
- add games to your personal backlog
- edit game titles directly from your backlog
- remove games from the list with the 🗑️ delete button
- real-time filtering of games in the backlog using a search bar
- animated typewriter effect (just for fun)

## usage

1. use the search bar at the top to search for games via the rawg api
2. click the ➕ add button under each search result to save it to your backlog
3. edit any game title directly from your backlog using the ✏️ edit button
4. remove games from the backlog using the 🗑️ delete button
5. filter your backlog by entering text in the search bar under «your backlog»

## tech stack

- html, css, javascript
- express.js and ejs for server-side rendering
- modular code structure with custom middleware for validation and error handling
- fetch api for async requests
- rawg api for game data