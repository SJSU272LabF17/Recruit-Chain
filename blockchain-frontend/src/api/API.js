const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3000/api'

const headers = {
    'Accept': 'application/json'
};

export const newcandidate = (payload) =>
    fetch(`${api}/newcandidate`, {
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

export const newcompany = (payload) =>
    fetch(`${api}/newcompany`, {
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

export const newedu = (payload) =>
    fetch(`${api}/newedu`, {
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

export const newlab = (payload) =>
    fetch(`${api}/newlab`, {
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

export const newpolice = (payload) =>
    fetch(`${api}/newpolice`, {
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

export const newcertification = (payload) =>
    fetch(`${api}/newcertification`, {
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
