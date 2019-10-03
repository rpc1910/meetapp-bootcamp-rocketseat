class UserRegister {
  get rules() {
    return {
      name: 'required',
      email: 'required|email|unique:users,email',
      password: '',
    };
  }
}

module.exports = UserRegister;
