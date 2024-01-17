const path = require("path");
switch (process.argv[2]) {
  case "body":
    console.log(`${
      process.argv[3]
    }
    <script src="/e/emoji-assets/emoji-js/lib/emoji.js"></script>
    <link href="/e/emoji-assets/emoji-js/lib/emoji.css" rel="stylesheet" type="text/css" />
    <script defer src="/e/emoji/emoji.js"></script>`);
return;
}
