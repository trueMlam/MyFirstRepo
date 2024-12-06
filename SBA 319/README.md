# mystilog

mystilog is an api for logging dreams, moods, and tags. it allows users to add, update, and delete dreams with linked moods and tags. the app uses express and mongodb.

## features

- store and retrieve dreams, moods, and tags
- update and delete dreams
- simple validation

## usage

1. post to `/dreams` to add a new dream
2. get `/dreams` for all dreams
3. get `/dreams/:id` for a specific dream
4. patch `/dreams/:id` to update a dream
5. delete `/dreams/:id` to remove a dream

## tech stack

- express.js
- mongodb
- modular code structure