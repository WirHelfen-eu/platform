import { getSession } from 'next-auth/client'

export default async (req, res) => {
    const session = await getSession({ req });
    const axios = require('axios');

    if (session) {

        axios.get(`${process.env.BACKEND_URL}/requests`)
        .then(function (response) {
            console.log(response.data);
            res.send({
                content: response.data,
            })
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    } else {
        res.send({
            error: "you need to be signed in"
        })
    }
}