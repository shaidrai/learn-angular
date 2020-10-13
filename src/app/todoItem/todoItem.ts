import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'todoItem',
    templateUrl: './todoItem.html',
    styleUrls: ['./todo.css']
})
export class todoItem {
    @Input() note: any
    @Output() remove = new EventEmitter()

    setClasses() {
        return { done: this.note.completed }
    }

    onDelete() {
        this.remove.emit()
    }
}   