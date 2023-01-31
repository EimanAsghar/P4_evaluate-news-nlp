# Evaluate A News Article with Natural Language Processing

The goal of this project is to give practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

## Getting started
Fork the project Github repo, and then clone or download the zip file locally. Remember that once you clone, you will still need to install everything:
`cd` into your new folder and run:
- `npm install`

The used API is MeaningCloud Sentiment Analysis:
You can find the API https://www.meaningcloud.com/developer/sentiment-analysis O
nce you create an account with MeaningCloud, you will be given a license key to start using the API. 

Use npm to install the dotenv package 
- `npm install dotenv`

This will allow us to use environment variables we set in a new file
Create a new .env file in the root of your project.
Fill the .env file with your API keys like this:

- `API_KEY=**************************`

Rub the project:
- `npm run build-prod`
- `npm start`

Then open:
http://localhost:8081/

