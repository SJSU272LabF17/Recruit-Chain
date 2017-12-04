const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3000/api'

const headers = {
    'Accept': 'application/json'
};

export const getWork = (payload) =>
    fetch(`${api}/`, {
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

export const getLab = (payload) =>
    fetch(`${api}/`, {
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

        export const changeEmployment = (payload) =>
              fetch(`${api}/ChangeEmployment`, {
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

                                export const changeDrugTestReport = (payload) =>
                                    fetch(`${api}/ChangeDrugTestReport`, {
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

                                        export const changeEducationRecords = (payload) =>
                                            fetch(`${api}/ChangeEducationRecords`, {
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


export const updateCompanyHistory = (payload) =>
fetch(`http://localhost:3000/api/queries/selectJobHistory?candidateID=resource%3Aorg.acme.workvalid.Candidate%23`+payload.candidateID+`&companyId=resource%3Aorg.acme.workvalid.Company%23`+payload.companyId, {
  method: 'GET',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  }
  }).then(res=>res.json())
  .then(res => {
    return res;
  })
  .catch(error => {
    console.log("This is error");
    return error;
  });

export const updateEducationHistory = (payload) =>
fetch(`${api}/queries/selectEducational_Qualification?candidateID=resource%3Aorg.acme.workvalid.Candidate%23`+payload.candidateID+`&education_instituteID=resource%3Aorg.acme.workvalid.EduInstitution%23`+payload.education_instituteID, {
  method: 'GET',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  }
}).then(res=>res.json())
.then(res => {
    return res;
  })
  .catch(error => {
    console.log("This is error");
    return error;
  });

export const updateLabHistory = (payload) =>
fetch(`${api}/queries/selectDrugTestReport?candidateID=resource%3Aorg.acme.workvalid.Candidate%23`+payload.candidateID+`&dtcId=resource%3Aorg.acme.workvalid.DrugTestCenter%23`+payload.dtcId, {
  method: 'GET',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  }
}).then(res=>res.json())
.then(res => {
  return res;
})
.catch(error => {
  console.log("This is error");
  return error;
});

export const viewJobHistory = (payload) =>
fetch(`${api}/queries/viewJobHistory?candidateID=resource%3Aorg.acme.workvalid.Candidate%23`+payload.candidateID, {
  method: 'GET',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  }
}).then(res=>res.json())
.then(res => {
  return res;
})
.catch(error => {
  console.log("This is error");
  return error;
});

export const viewEdHistory = (payload) =>
fetch(`${api}/queries/viewEdHistory?candidateID=resource%3Aorg.acme.workvalid.Candidate%23`+payload.candidateID, {
  method: 'GET',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  }
}).then(res=>res.json())
.then(res => {
  return res;
})
.catch(error => {
  console.log("This is error");
  return error;
});

export const viewDrugTestReports = (payload) =>
fetch(`${api}/queries/viewDrugTestReports?candidateID=resource%3Aorg.acme.workvalid.Candidate%23`+payload.candidateID, {
  method: 'GET',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  }
}).then(res=>res.json())
.then(res => {
  return res;
})
.catch(error => {
  console.log("This is error");
  return error;
});

export const updateJobProfile = (payload) =>
    fetch(`${api}/ChangeEmployment`, {
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

        export const updateEduRecord = (payload) =>
            fetch(`${api}/ChangeEducationRecords`, {
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

        export const updateTestRecord = (payload) =>
            fetch(`${api}/ChangeDrugTestReport`, {
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
