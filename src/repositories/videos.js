import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND_TOP}/videos`;


function postAllVideo(objectVideo) {
    return fetch(`${URL_VIDEOS}?_embed=videos`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(objectVideo),
    })
    .then(async (answerServer) => {
        if(answerServer.ok) {
            const answer = await answerServer.json();
            return answer;
        }

        throw new Error('Não foi possível cadastrar os dados:');
    });
}

export default {
    postAllVideo,
};