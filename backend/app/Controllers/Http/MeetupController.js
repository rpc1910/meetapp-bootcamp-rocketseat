/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Meetup = use('App/Models/Meetup');

/**
 * Resourceful controller for interacting with meetups
 */
class MeetupController {
  /**
   * Show a list of all meetups.
   * GET meetups
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async index({ params }) {
    const page = params.page || 1;
    return Meetup.query()
      .orderBy('date', 'asc')
      .paginate(page);
  }

  /**
   * Create/save a new meetup.
   * POST meetups
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, auth }) {
    const post = request.only([
      'name',
      'description',
      'location',
      'latitude',
      'longitude',
      'date',
      'file_id',
    ]);

    post.date = new Date(post.date);

    return auth.user.meetups().create(post);
  }

  /**
   * Display a single meetup.
   * GET meetups/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params }) {
    const meetup = await Meetup.findOrFail(params.id);
    await meetup.load('owner.avatar');

    return meetup;
  }

  /**
   * Update meetup details.
   * PUT or PATCH meetups/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a meetup with id.
   * DELETE meetups/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = MeetupController;
