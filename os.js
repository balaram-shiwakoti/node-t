const os=require('os')
// info about current user
const v=os.userInfo()
console.log(v.username)
// method to return uptime of pc
console.log(`The system up time is ${os.uptime} second`)

const currentOs={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
    version:os.version(),
    hostname:os.hostname(),
    Eol:os.EOL,
    platform:os.platform()
}
console.log(currentOs)