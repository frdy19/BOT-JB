const fs = require("fs");
const chalk = require("chalk");
// EDIT DISINI
global.owner = ["62823504965329"]; // no own
global.packname = "© sticker by"; // nama pack sticker
global.author = "FerdyStore"; // nama author
global.pic = "https://telegra.ph/file/46e83a8168715e3074fc3.jpg"; // url foto

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`));
  delete require.cache[file];
  require(file);
});
