const path=require('path')

// const name={
// win:'foo\\bar\\baz'.split(path.sep)

// }


// console.log(path.sep)
const filePath=path.join('/subfolder','sample.txt')

const base=path.basename(filePath)


const absolute=path.resolve(__dirname,"subfolder",'sample.txt')

console.log(absolute)