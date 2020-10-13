import axios from 'axios'
import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})

export default class NotesService {
    static notes = []
    static async getNotes() {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
        return (
            data
        )
    }

    static async postNote(data) {
        try {
            await axios.post('https://jsonplaceholder.typicode.com/todos', data)
        }
        catch (e) { console.log(e) }
    }
}