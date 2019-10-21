/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/auth/src/Schemes/Session')} AuthSession */

/**
 * Resourceful controller for interacting with auths
 */
class AuthController {
  /**
   * Create/save a new auth.
   * POST auths
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {AuthSession} ctx.auth
   */
  async store({ request, auth }) {
    const { email, password } = request.all();
    const token = auth.attempt(email, password);

    return token;
  }
}

module.exports = AuthController;
