import Fastify from "fastify";
import { translateHandler } from "./translate";


const fastify = Fastify({ logger: true });


fastify.post("/api/translate", async (request, reply) => {
const body = request.body as any;
if (!body || !body.text) {
return reply.status(400).send({ error: "Campo 'text' é obrigatório." });
}
const result = translateHandler(body.text);
return result;
});


const start = async () => {
try {
await fastify.listen({ port: 3001, host: "0.0.0.0" });
console.log("Backend rodando em http://localhost:3001");
} catch (err) {
fastify.log.error(err);
process.exit(1);
}
};
start();
