const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;

    const localHostURL = `http://localhost:8080${url}`;

    
    const myURL = new URL(localHostURL);

    const year = myURL.searchParams.get('year');

    const month = myURL.searchParams.get('month');

    const date = myURL.searchParams.get('date');

    const username = myURL.searchParams.get('name');


    if (url === `/age?year=${year}&month=${month}&date=${date}&name=${username}`) {

        const currentYear = new Date().getFullYear();

        const age = currentYear - year;

        res.writeHead(200, { 'content-type': 'text/html' });

        res.write(`<p>Hello ${username}</p>`);
        res.write(`<p>You are currently ${age} years old</p>`);

        res.end();

    }
});

const PORT = 8080;

server.listen(PORT, () => {
    console.log(`server listening at ${PORT}`);
});