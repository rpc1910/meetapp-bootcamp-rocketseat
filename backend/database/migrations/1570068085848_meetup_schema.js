/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class MeetupSchema extends Schema {
  up() {
    this.create('meetups', table => {
      table.increments();
      table.string('name').notNullable();
      table.text('description').notNullable();
      table.string('location').notNullable();
      table.float('latitude');
      table.float('longitude');
      table.dateTime('date').notNullable();
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .notNullable();
      table
        .integer('file_id')
        .unsigned()
        .references('id')
        .inTable('files');
      table.timestamps();
    });
  }

  down() {
    this.drop('meetups');
  }
}

module.exports = MeetupSchema;
