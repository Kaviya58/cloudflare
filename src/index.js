const base = 'https://example.com';
const statusCode = 301;

async function handleRequest(request) {
    console.log(`${request.url}`);
    const url = new URL(request.url); 
    console.log(url);
    const { pathname, search } = url;
    console.log(pathname , search);
    const destinationURL = base + pathname + search;
    console.log(destinationURL);
    return Response.redirect(destinationURL, statusCode);
}

addEventListener('fetch', async event => {
    try{
        event.respondWith(handleRequest(event.request));
    } catch (err){
        throw new Error(err);
    }
});

// addEventListener('fetch', function (event) {
//     event.respondWith(handleRequest(event.request));
// });
// async function handleRequest(request) {
//     console.log(request.method);
//     if (request.method !== 'GET') return MethodNotAllowed(request);
//     return fetch(`https://example.com`);
// }
// function MethodNotAllowed(request) {
//     return new Response(`Method ${request.method} not allowed.`, { status: 405, headers: { Allow: 'GET', }, });
// }

