/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.post('auth', 'AuthController.store').validator('Auth');
Route.post('register', 'UserController.store').validator('UserStore');

Route.get('files/:path', 'FileController.show');

Route.group(() => {
  Route.get('me', 'UserController.show');
  Route.put('me', 'UserController.update').validator('UserUpdate');

  Route.post('files', 'FileController.store').validator('FileStore');

  // Meetups
  Route.resource('meetups', 'MeetupController').validator(
    new Map([['meetups.store', 'MeetupStore']])
  );
  // Route.post('meetups', 'MeetupController.store').validator('MeetupStore');
}).middleware(['auth']);
