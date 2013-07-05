var Userific = function() {}
Userific.prototype = {
  register: function(data, cb) {
    return cb({
      message: 'Each userific backend must implement the prototype.register function themselves',
      error: 'abstract register function not implemented',
      stack: new Error().stack
    })
  },
  confirmEmail: function(data, cb) {
    return cb({
      message: 'Each userific backend must implement the prototype.confirmEmail function themselves',
      error: 'abstract confirmEmail function not implemented',
      stack: new Error().stack
    })
  },
  authenticate: function(data, cb) {
    return cb({
      message: 'Each userific backend must implement the prototype.authenticate function themselves',
      error: 'abstract authenticate function not implemented',
      stack: new Error().stack
    })
  },
  changeEmail: function(data, cb) {
    return cb({
      message: 'Each userific backend must implement the prototype.changeEmail function themselves',
      error: 'abstract changeEmail function not implemented',
      stack: new Error().stack
    })
  },
  changePassword: function(data, cb) {
    return cb({
      message: 'Each userific backend must implement the prototype.changePassword function themselves',
      error: 'abstract changePassword function not implemented',
      stack: new Error().stack
    })
  },
  generatePasswordResetToken: function(data, cb) {
    return cb({
      message: 'Each userific backend must implement the prototype.generatePasswordResetToken function themselves',
      error: 'abstract generatePasswordResetToken function not implemented',
      stack: new Error().stack
    })
  },
  resetPassword: function(data, cb) {
    return cb({
      message: 'Each userific backend must implement the prototype.resetPassword function themselves',
      error: 'abstract resetPassword function not implemented',
      stack: new Error().stack
    })
  },
  fetchUserByEmail: function(data, cb) {
    return cb({
      message: 'Each userific backend must implement the prototype.fetchUserByEmail function themselves',
      error: 'abstract fetchUserByEmail function not implemented',
      stack: new Error().stack
    })
  },
  validateAccessToken: function(data, cb) {
    return cb({
      message: 'Each userific backend must implement the prototype.validateAccessToken function themselves',
      error: 'abstract validateAccessToken function not implemented',
      stack: new Error().stack
    })
  },
  validateConfirmToken: function(data, cb) {
    return cb({
      message: 'Each userific backend must implement the prototype.validateConfirmToken function themselves',
      error: 'abstract validateConfirmToken function not implemented',
      stack: new Error().stack
    })
  },
  validateResetToken: function(data, cb) {
    return cb({
      message: 'Each userific backend must implement the prototype.validateResetToken function themselves',
      error: 'abstract validateResetToken function not implemented',
      stack: new Error().stack
    })
  },
  grantAccessTokensForEmail: function(data, cb) {
    return cb({
      message: 'Each userific backend must implement the prototype.grantAccessTokensForEmail function themselves',
      error: 'abstract grantAccessTokensForEmail function not implemented',
      stack: new Error().stack
    })
  }
}
module.exports = Userific
