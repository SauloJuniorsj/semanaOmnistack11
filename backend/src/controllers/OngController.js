const crypto = require('crypto');
const connection = require('../database/connection');  //importando, consigo fazer as operações com banco de dados

module.exports = {
    async index(request, response) {      // consulta de ongs
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf

        });

        // return response.json({
        //     evento: 'Semana OmniStack 11.0',       a resposta que o server gera quando recebe pelo
        //     aluno: 'Saulo Juuuunior'
        // });

        return response.json({ id });
    }
}