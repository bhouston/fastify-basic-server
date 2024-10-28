# Bug Reproduction

```sh
npm install
npm run dev
```

Open up these links in a browser:

http://localhost:3000/collector.js
http://localhost:3000/collector-iframe.html
http://localhost:3000/MarkdownTest.md

All of them will display a Cache-Control header of ```Cache-Control: public, max-age=0``` for some reason even though I am explicit setting it to something else.

