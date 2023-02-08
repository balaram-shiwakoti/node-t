const http = require('http')

const server=http.createServer((req,res)=>{
    if(req.url === '/'){
     return  res.end('"hello world"');
    }
 if (req.url==='/hi'){
return res.end('HI this is not the route in nodejs');
}

res.end(`
<h1>Oops!</h1>
 <p>No page in the location</p>
<a href="/">GO back</a>
`)
})
server.listen(5000)