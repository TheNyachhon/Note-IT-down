const newNote = document.querySelector('#new-note')
newNote.addEventListener('click', () => {
    addNewNote()
})
function addNewNote() {
    const main = document.querySelector('main')
    const noteCard = document.createElement('div');
    noteCard.classList.add('note-card')
    noteCard.innerHTML = `
    <div class="header">
        <i class="fas fa-edit" onclick="edit(this)"></i>
        <i class="fas fa-times" onclick="deleteNote(this)"></i>
    </div>
    <div class="title-area">
        <div class="title"></div>
        <input type="text" class="hidden" placeholder="Enter Title">
    </div>
    <div class="note-area">
        <div class="note"></div>
        <textarea class="hidden" placeholder="Enter note here"></textarea>
    </div>`
    main.appendChild(noteCard)
}
function deleteNote(e){
    const noteCard = e.parentElement.parentElement;
    noteCard.remove()  
}
function edit(e) {
    const noteCard = e.parentElement.parentElement;
    const textarea = noteCard.querySelector('textarea');
    const note = noteCard.querySelector('.note');
    const title = noteCard.querySelector('.title');
    const input = noteCard.querySelector('input');
    title.classList.toggle('hidden')
    note.classList.toggle('hidden')
    if(e.classList.contains('save-note')){
        note.innerText = textarea.value
        title.innerText = input.value
    }else{
        textarea.value = note.innerText    
        input.value = title.innerText    
    }
    e.classList.toggle('fa-edit')
    e.classList.toggle('fa-save')
    e.classList.toggle('save-note')
    textarea.classList.toggle('hidden')
    input.classList.toggle('hidden')
}
