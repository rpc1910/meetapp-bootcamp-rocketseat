/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const User = use('App/Models/User');
const Hash = use('Hash');

/**
 * Resourceful controller for interacting with users
 */
class UserController {
  /**
   * Create/save a new user.
   * POST users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request }) {
    const data = request.only(['name', 'email', 'password']);

    const user = await User.create(data);

    return user;
  }

  /**
   * Display a single user.
   * GET users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ auth }) {
    return auth.user;
  }

  /**
   * Update user details.
   * PUT or PATCH users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ request, response, auth }) {
    const data = request.only(['name', 'email', 'password']);

    const checkPassword = await Hash.verify(
      request.input('old_password'),
      auth.user.password
    );

    if (!checkPassword) {
      return response.status(400).json({
        status: 'error',
        message: 'Current password could not be verified! Please try again.',
      });
    }

    auth.user.merge(data);
    await auth.user.save();

    return auth.user;
  }
}

module.exports = UserController;
