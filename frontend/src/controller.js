import axios from "axios"

const URL = "http://localhost:3000"

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
