/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

const Env = use('Env');

class File extends Model {
  static get computed() {
    return ['url'];
  }

  static get hidden() {
    return ['path', 'created_at', 'updated_at'];
  }

  getUrl({ path }) {
    return `${Env.get('APP_URL')}/files/${path}`;
  }
}

module.exports = File;
