import store from '../reducers';

class NoteModel {
  // fields = {
  //   id,
  //   title,
  //   subtitle,
  //   content,
  //   createdAt,
  //   updatedAt,
  //   deletedAt
  // };
  constructor() {}
  getNotes = () => {
    store.subscribe(() => {
      // When state will be updated(in our case, when items will be fetched),
      // we will update local component state and force component to rerender
      // with new data.
      return store.getState().data;
    });
  }
}

export default new NoteModel();