var Userific = function() {}
Userific.prototype = {
  register: function(data, cb) {
    return cb({
      message: 'Each userific backend must implement the prototype.register function themselves',
      error: 'abstract register function not implemented',
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
  resetPassword: function(data, cb) {
    return cb({
      message: 'Each userific backend must implement the prototype.resetPassword function themselves',
      error: 'abstract resetPassword function not implemented',
      stack: new Error().stack
    })
  },
  confirmEmail: function(data, cb) {
    return cb({
      message: 'Each userific backend must implement the prototype.confirmEmail function themselves',
      error: 'abstract confirmEmail function not implemented',
      stack: new Error().stack
    })
  }
}

module.exports = Userific
