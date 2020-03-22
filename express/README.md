# How to run our early Prototype

## Prerequisits
- [Passbase Account](https://passbase.com/)
- [NodeJS](https://nodejs.org/en/).
- [MongoDB](https://www.mongodb.com/de)

For macOS, we recommend using homebrew.
Use your favorite search engine to find out how to install
the above packages with brew!

## Install and run

1. Use your terminal to navigate into this directory
2. Rename `config-example.json` to `config.json` and fill in your secret key, paste your public key in `/express/views/register.ejs` in `const apiKey = "YOUR_KEY"`
3. `npm install`
4. `npm start`
5. http://localhost:3000
