/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */

const session = process.env.SESSION || "";

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'Kanambo';
const packname = process.env.PACKNAME || 'Kanlia md2 🤖';
const dev = process.env.DEV || '254114148625';
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || 'KANAMBO';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const cookies = JSON.parse(process.env.COOKIE || '[]');
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'false';
const autobio = process.env.AUTOBIO || 'false';

// **Antilink Feature**
const antilink = process.env.ANTILINK || 'true'; // Default is enabled

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  cookies,
  autobio,
  mode,
  autolike,
  prefix,
  mycode,
  author,
  packname,
  dev,
  DevDreaded,
  gcpresence,
  antionce,
  session,
  antitag,
  antidelete,
  antilink // Added antilink to exports
};
