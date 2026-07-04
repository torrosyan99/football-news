import {createServer} from 'http';

const server = createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({
    success:true,
    message: 'Server started'
  }))
})


server.listen(8000, () => {
  console.log('listening on 8000')
});