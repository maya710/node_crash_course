const os = require('os');

//platform
console.log(os.platform());

//CPU Arch
console.log(os.arch());

//CPU Core Info
console.log(os.cpus());

// free memory
console.log(os.freemem());

// total memory
console.log(os.totalmem());

// home directory
console.log(os.homedir());

//uptime 
console.log(os.uptime());