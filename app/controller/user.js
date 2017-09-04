'use strict';

/**
 * @param {any} ctx this
 */
exports.login = function* (ctx) {
  const user = yield ctx.model.User.find({});
  console.log(user);
  ctx.body = {
    success: true,
    user,
  };
};
