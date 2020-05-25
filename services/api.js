import axios from 'axios'

import API_URL from './api.config'

async function apiPost(data) {
    const config = {
        method: 'post',
        url: API_URL,
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: data
    }

    const urlCall = API_URL

    try {
        const response = await axios.post(urlCall, config)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

const api = {

}

api.sendContactMessage = data => {
    return apiPost(data)
}

export default api