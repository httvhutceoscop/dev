import NoteModel from '../models/NoteModel';

class NoteController {
  constructor() {

  }

  countNotes = () => {
    try {
      let notes = NoteModel.getNotes();
      let count = 0;
      if (notes) {
        console.log('notes2',notes);
        notes.map((note) => {
          if (note.deletedAt == null) {
            count++
          }
        });
      }
      return count
    } catch (e) {
      console.log(e.messages);
    }
}

}

export default new NoteController();

