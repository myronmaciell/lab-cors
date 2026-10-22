if (req.method === 'GET' && req.url === '/dados') {
  res.writeHead(200, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': 'http://localhost:3000'
  });

  res.end(JSON.stringify({
    matricula: 2026108550',
    status: 'dados_sensiveis'
  }));

  return;
}
