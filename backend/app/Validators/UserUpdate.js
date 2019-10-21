class UserUpdate {
  get rules() {
    const userId = this.ctx.auth.user.id;

    return {
      name: 'required',
      email: `required|email|unique:users,email,id,${userId}`,
      password: 'confirmed',
      old_password: 'required',
    };
  }
}

module.exports = UserUpdate;
