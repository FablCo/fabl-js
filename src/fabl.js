import loadScripts from "./loadScripts";
import tracking from "./tracking";
import VERSION from "./version";

// NOTE: using module.exports directly instead of `export default`
// to ensure Fabl is consistently exported for both Bower and NPM
module.exports = {
  loadScripts,
  tracking,
  VERSION
};
