import axios from "axios"

const URL = "http://localhost:3000"

//JOURNALS
export async function getJournals() {
    const res = await axios.get(`${URL}/journals`)

    if (res.status === 200) {
        return res.data
    }
    else {
        return
    }

}

export async function getJournal(id) {
    const res = await axios.get(`${URL}/journals/${id}`)

    if (res.status === 200) {
        return res.data
    }
    else {
        return
    }

}

export async function createJournal(journal) {

    const res = await axios.post(`${URL}/journals`, journal)
    return res

}

export async function updateJournal(id, journal) {
    const res = await axios.post(`${URL}/journals/${id}`, journal)
    return res

}

export async function deleteJournal(id) {
    const res = await axios.delete(`${URL}/journals/${id}`)
    return res


}

//USERS
export async function getUser(id) {
    const res = await axios.get(`${URL}/users/${id}`)

    if (res.status === 200) {
        return res.data
    }
    else {
        return
    }

}

export async function createUser(user) {

    const res = await axios.post(`${URL}/users`, user)
    return res

}

export async function updateUser(id, user) {
    const res = await axios.post(`${URL}/users/${id}`, user)
    return res

}

export async function deleteUser(id) {
    const res = await axios.delete(`${URL}/users/${id}`)
    return res


}


export async function verifyUser(user) {
    const res = await axios.post(`${URL}/users/login`, user)
    if (res.data.success) {
        return res.data.token
    }
    else {
        throw new Error(res.statusText)
    }
}


//AFFIRMATIONS
export async function updateAffirmation(id, affirmation) {
    const res = await axios.post(`${URL}/affirmations/${id}`, affirmation)
    return res

}
