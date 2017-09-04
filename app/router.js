'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/admin/login', app.controller.user.login);
};
