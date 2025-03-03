Deno.serve({ port: 5500 }, (req) => {
  return new Response("Hello World\n");
});