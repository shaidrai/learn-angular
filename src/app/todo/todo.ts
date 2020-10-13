import { Component, OnInit } from '@angular/core';
import NotesService from "../services/notes.service"

@Component({
    selector: 'todo',
    templateUrl: './todo.html',
})
export class Todo implements OnInit {
    notes = []
    id = 1000

    async ngOnInit() {
        try {
            this.notes = await NotesService.getNotes()
        }
        catch {

        }

    }

    onclick() {
        this.id++
        const data = { title: this.input, completed: false }
        this.notes.unshift(data)
        NotesService.postNote(data)
        this.input = ''
    }

    onKey(e) {
        this.input = e.target.value
    }
    input = ""

    onDelete(note: number) {
        this.notes.splice(note, 1)
    }



}
