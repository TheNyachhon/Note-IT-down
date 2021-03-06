const newNote = document.querySelector('#new-note')
newNote.addEventListener('click', () => {
    addNewNote()
})
// Retrieving data from local storage
function retrieveNotes() {
    const retrievedNotes = localStorage.getItem('notesArray')
    const allNotes = JSON.parse(retrievedNotes)
    if (allNotes) {
        allNotes.forEach(note => {
            addNewNote(note.title, note.note)
        })
    }
}
retrieveNotes()
// Adding a new note
function addNewNote(title = '', notes = '') {
    const main = document.querySelector('main')
    const noteCard = document.createElement('div');
    noteCard.classList.add('note-card')
    noteCard.innerHTML = `
    <div class="header">
        <i class="fas fa-edit" onclick="edit(this)"></i>
        <i class="fas fa-times" onclick="deleteNote(this)"></i>
    </div>
    <div class="title-area">
        <div class="title">${title}</div>
        <input type="text" class="hidden" placeholder="Enter Title">
    </div>
    <div class="note-area">
        <div class="note">${notes}</div>
        <textarea class="hidden" placeholder="Enter note here"></textarea>
    </div>`
    main.appendChild(noteCard)
    saveNotes()
}
// Deleting note
function deleteNote(e) {
    const confirmDel = confirm("Delete note?")
    if (confirmDel) {
        const noteCard = e.parentElement.parentElement;
        noteCard.remove()
    }
    saveNotes()
}
// Editing note
function edit(e) {
    const noteCard = e.parentElement.parentElement;
    const textarea = noteCard.querySelector('textarea');
    const note = noteCard.querySelector('.note');
    const title = noteCard.querySelector('.title');
    const input = noteCard.querySelector('input');
    title.classList.toggle('hidden')
    note.classList.toggle('hidden')
    if (e.classList.contains('save-note')) {
        note.innerText = textarea.value
        title.innerText = input.value
    } else {
        textarea.value = note.innerText
        input.value = title.innerText
    }
    saveNotes()
    e.classList.toggle('fa-edit')
    e.classList.toggle('fa-save')
    e.classList.toggle('save-note')
    textarea.classList.toggle('hidden')
    input.classList.toggle('hidden')
}
// Local storage
function saveNotes() {
    const allNotes = document.querySelectorAll('.note-card')
    const notesArray = []
    allNotes.forEach(note => {
        const title = note.querySelector('.title').innerText
        const noteText = note.querySelector('.note').innerText
        notesArray.push({
            title: title,
            note: noteText
        })
    })
    localStorage.setItem('notesArray', JSON.stringify(notesArray))
}

//Github
const icon = document.querySelector('.fa-github')
const profile = document.querySelector('#github>p')
icon.addEventListener('mouseenter', () => {
    profile.classList.toggle('profile-hide')
})
icon.addEventListener('mouseleave', () => {
    profile.classList.toggle('profile-hide')
})

// Help
const helpIcon = document.querySelector('.fa-question-circle')
const helpText = document.querySelector('#help>p')
helpIcon.addEventListener('mouseenter', () => {
    helpText.classList.toggle('profile-hide')
})
helpIcon.addEventListener('mouseleave', () => {
    helpText.classList.toggle('profile-hide')
})
//Help container
const helpBox = document.querySelectorAll('.help-container')
helpIcon.addEventListener('click', () => {
    if (helpBox[0].classList.contains('hidden')) {
        console.log()
        //rotate icon
        helpIcon.classList.toggle('open')
        //open container
        helpBox[1].classList.toggle('help-hidden')
        console.log(helpBox[0].classList)
        setTimeout(() => {
            helpBox[0].classList.toggle('hidden')
            helpBox[1].classList.toggle('hidden')
        }, 400);
    }else{
        //rotate icon
        helpIcon.classList.toggle('open')
        //close container
        helpBox[1].classList.toggle('hidden')
        helpBox[0].classList.toggle('hidden')
        setTimeout(() => {
            helpBox[1].classList.toggle('help-hidden')    
        }, 1);
    }
})