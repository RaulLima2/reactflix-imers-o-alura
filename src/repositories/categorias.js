import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

function getAll() {
    return fetch(`${URL_CATEGORIES}`)
    .then(async (answerServer) => {
        if(answerServer.ok) {
            const answer = await answerServer.json();
            return answer;
        }

        throw new Error('Não foi possível pegar os dados:');
    });
}

function getAllWithVideo() {
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (answerServer) => {
        if(answerServer.ok) {
            const answer = await answerServer.json();
            return answer;
        }

        throw new Error('Não foi possível pegar os dados:');
    });
}

export default {
    getAllWithVideo,
    getAll,
};