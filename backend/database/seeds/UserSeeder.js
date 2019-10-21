/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

class UserSeeder {
  async run() {
    await User.create({
      name: 'Rodrigo Passos',
      email: 'rodrigo.passos25@gmail.com',
      password: '12345',
    });
  }
}

module.exports = UserSeeder;
