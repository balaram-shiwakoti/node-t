//1. sync 
const {readFileSync,writeFileSync}=require('fs')

const first = readFileSync('./content/first.txt','utf-8')

writeFileSync('./content/fourth.txt',`'The first value is ${first}'`,{flag:'a'})
// console.log(first)


//2.async
const {readFile,writeFile}=require('fs')


readFile('./content/first.txt','utf-8', (err,result)=>{
    if(err){
console.log(err)
return
    }
const first=result ;
readFile('./content/second.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const second=result
    writeFile('./content/third.txt',
    `here is the result:${first},${second}`,(err,result)=>{
        if(err){
            console.log(err)
            return
        }
    })
})   
    
})