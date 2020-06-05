const express = require('express');
const bodyParser = require('body-parser').json();
const app = express();

let serverArr = [];

const randomString = (length, chars) => {
  let result = '';
  for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

const getServerBody = (body) => {
  if (body.name && body.ip && body.diskspace && body.ram && body.port) {
    return {
      server: body,
      message: ''
    };
  } else {
    return {
      server: null,
      message: 'NOT ALL Params'
    };
  }
};

app.listen(4100, () => {
  console.log('====Started Server on port 4100====');
});

app.get('/list', (req, res) => {
  res.send(serverArr);
});

app.post('/add', bodyParser, (req, res) => {
  let newServer = getServerBody(req.body || {});
  if (newServer.server) {
    newServer.server.id = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    serverArr.push(newServer.server);
    res.send('POST Success');
  } else {
    res.send('POST Error: ', newServer.message);
  }
});

app.put('/edit/:id', bodyParser, (req, res) => {
  let id = ((req || {}).params || {}).id;
  let thisServerIndex = serverArr.findIndex(item => item.id === id);
  if (thisServerIndex) {
    let newServer = getServerBody(req.body || {});
    if (newServer.server) {
      newServer.server.id = serverArr[thisServerIndex].id;
      serverArr[thisServerIndex] = newServer.server;
      res.send('PUT Success for server ' + id + ' at index ' + thisServerIndex);
    } else {
      res.send('PUT Error: ', newServer.message);
    }
  } else {
    res.send('PUT Error: NO server found with id ', id);
  }
});

app.delete('/delete/:id', bodyParser, (req, res) => {
  let id = ((req || {}).params || {}).id;
  let thisServerIndex = serverArr.findIndex(item => item.id === id);
  if (thisServerIndex) {
    serverArr.splice(thisServerIndex, 1);
    res.send('DELETE Success for server ' + id + ' at index ' + thisServerIndex);
  } else {
    res.send('DELETE Error: NO server found with id ', id);
  }
});