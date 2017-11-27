const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3000/api'

const headers = {
    'Accept': 'application/json'
};

export const newcompany = (payload) =>
    fetch(`${api}/Employer`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res=>res.json())
    .then(res => {
        return res;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });


        export const allcompanies = (payload) =>
            fetch(`${api}/Employer`, {
                method: 'GET',
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            }).then(res=>res.json())
            .then(res => {
                return res;
            })
                .catch(error => {
                    console.log("This is error");
                    return error;
                });
