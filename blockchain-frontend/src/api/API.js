const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3000/api'

const headers = {
    'Accept': 'application/json'
};

export const newcandidate = (payload) =>
    fetch(`${api}/Candidate`, {
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
    fetch(`${api}/Company`, {
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
    fetch(`${api}/EduInstitution`, {
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
    fetch(`${api}/DrugTestCenter`, {
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

export const newdept = (payload) =>
    fetch(`${api}/PoliceVerification`, {
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

export const newcertificate = (payload) =>
    fetch(`${api}/Certification`, {
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

/*
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
*/

export const newjob = (payload) =>
    fetch(`${api}/JobProfile`, {
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

        export const addPoliceReport = (payload) =>
            fetch(`${api}/PoliceverificationReport`, {
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



        export const addCertificate = (payload) =>
            fetch(`${api}/Certificate`, {
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

        export const addDrugReport = (payload) =>
            fetch(`${api}/DrugTestReport`, {
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

        export const addEduReport = (payload) =>
            fetch(`${api}/EducationRecord`, {
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
