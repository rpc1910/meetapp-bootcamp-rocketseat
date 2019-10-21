/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserSubscriptionSchema extends Schema {
  up() {
    this.create('users_subscriptions', table => {
      table.increments();
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .notNullable();
      table
        .integer('meetup_id')
        .unsigned()
        .references('id')
        .inTable('meetups')
        .notNullable();
      table.dateTime('date').defaultTo(this.fn.now());
      table.timestamps();
    });
  }

  down() {
    this.drop('users_subscriptions');
  }
}

module.exports = UserSubscriptionSchema;
