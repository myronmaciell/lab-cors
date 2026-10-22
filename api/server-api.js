const http = require('http');
const PORTA = 8080;

const servidor = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/dados') {
        res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': 'https://symmetrical-space-fortnight-wr666rxpj57429vq5-3000.app.github.dev'
        });

        res.end(JSON.stringify({
            matricula: '2026108550',
            status: 'dados_sensiveis'
        }));
        return;
    }

    res.writeHead(404, {
        'Content-Type': 'application/json; charset=utf-8'
    });
    res.end(JSON.stringify({ erro: 'Nao encontrado' }));
});

servidor.listen(PORTA, '0.0.0.0', () => {
    console.log(`[API] Servidor ativo na porta ${PORTA}`);
});