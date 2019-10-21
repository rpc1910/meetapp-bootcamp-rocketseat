class FileStore {
  get rules() {
    return {
      file: 'required|file|file_size:2mb|file_types:image',
      type: 'required',
    };
  }
}

module.exports = FileStore;
