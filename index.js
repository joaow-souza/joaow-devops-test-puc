import Fastify from "fastify"

const fastify = Fastify({
    logger: true
});

fastify.get('/', function (req, res) {
    res.send({ message: 'Brasilll' });
});

fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
});