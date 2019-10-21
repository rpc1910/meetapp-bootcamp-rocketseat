/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

const Helpers = use('Helpers');
const File = use('App/Models/File');

/**
 * Resourceful controller for interacting with files
 */
class FileController {
  /**
   * Display a single file.
   * GET meetups/:path
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, response }) {
    return response.download(Helpers.tmpPath(`uploads/${params.path}`));
  }

  /**
   * Create/save a new file.
   * POST files
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request }) {
    const file = request.file('file');

    const newFileName = new Date().getTime();

    await file.move(Helpers.tmpPath('uploads'), {
      name: `${newFileName}.${file.extname}`,
      overwrite: true,
    });

    if (!file.moved()) {
      return file.error();
    }

    const dataFile = {
      name: file.clientName,
      path: file.fileName,
      type: request.input('type'),
    };

    const createdFile = await File.create(dataFile);
    return createdFile;
  }
}

module.exports = FileController;
