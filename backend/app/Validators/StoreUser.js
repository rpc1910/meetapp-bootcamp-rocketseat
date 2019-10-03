class StoreUser {
  get rules() {
    return {
      name: 'required',
      email: 'required|email|unique:users,email',
      password: 'required',
    };
  }
}

module.exports = StoreUser;
