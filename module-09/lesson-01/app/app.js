// console.log("Notes");

//! App store
const store = {
  notes: [
    // { id: 1, name: "Mango", body: "Mango is cute" },
    // { id: 2, name: "Ajax", body: "Ajax is awesome" },
    // { id: 3, name: "Poly", body: "Poly is nice" },
  ],
  appTheme: "light",
};

//! Generate Id instance
const g = new GenerateId();

const STORAGE_KEY = { notes: "notes", appTheme: "app-theme" };

//! Elements
const notesList = document.querySelector(".js-notes-list");
const card = document.querySelector(".js-card");
const form = document.querySelector(".js-form");
const btnDelete = document.querySelector(".js-delete-btn");

//! Listeners
form.addEventListener("submit", onFormSubmit);
notesList.addEventListener("click", onBtnDeleteClick);

const notesData = loadLS(STORAGE_KEY.notes);
if (notesData !== undefined) {
  store.notes = [...notesData];
  renderNotes(notesData);
}

//! Functions
function onFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const noteData = {
    id: g.generate(10),
    ...Object.fromEntries(new FormData(form)),
  };
  store.notes = [...store.notes, noteData];
  saveLS(STORAGE_KEY.notes, store.notes);

  //! Incert markup in list
  notesList.insertAdjacentHTML("beforeend", createNote(noteData));
  form.reset();
}

function renderNotes(notes = []) {
  if (notes === undefined) {
    return;
  }
  const markup = notes.map(createNote).join("");
  notesList.innerHTML = markup;
}

function createNote({ id, name, body }) {
  return `
      <li class="card js-card">
        <h5 class="card-header">${name}</h5>
          <div class="card-body">
            <p class="card-text">${body}</p>
                <button
                  class="btn btn-primary js-delete-btn"
                  type="button"
                  data-noteid="${id}">Delete
                  </button>
          </div>
      </li>`;
}

//! Local storage service

function saveLS(key, value) {
  try {
    const serialisedState = JSON.stringify(value);
    localStorage.setItem(key, serialisedState);
  } catch (error) {
    console.log(error.message);
  }
}

function loadLS(key) {
  try {
    const serialisedState = localStorage.getItem(key);
    if (serialisedState === null) {
      return undefined;
    }
    return JSON.parse(serialisedState);
  } catch (error) {
    console.log(error.message);
  }
}

function onBtnDeleteClick(event) {
  const currentEl = event.target;
  if (!currentEl.classList.contains("js-delete-btn")) {
    return;
  }
  const noteId = currentEl.dataset.noteid;
  const filteredNotes = store.notes.filter(note => {
    return note.id !== noteId;
  });
  store.notes = [...filteredNotes];
  saveLS(STORAGE_KEY.notes, store.notes);
  renderNotes(store.notes);
}
