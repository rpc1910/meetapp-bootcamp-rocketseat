class MeetupStore {
  get rules() {
    return {
      name: 'required',
      description: 'required',
      location: 'required',
      date: `date|after:${new Date()}`,
    };
  }
}

module.exports = MeetupStore;
