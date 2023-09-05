import sendRequest from './send-request';

const BASE_URL = '/api/notes';

export function createNote(newNote){
    console.log(newNote,"++++")
    return sendRequest(`${BASE_URL}/create`,'POST',newNote);
}

export function getAllNotes() {
    return sendRequest(`${BASE_URL}`)
}