// CommonJs, every file is a module by default
// modules - encapsulated code (only shares the minimum)
const names = require("./names");
const sayHi = require("./utils");
const data = require("./alternative-flavour");
require("./mind-grenade");

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
