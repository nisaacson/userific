var inspect = require('eyespect').inspector()
var should = require('should')
var Userific = require('../')
describe('Abstract Userific Interface', function () {
  var userData = {
    email: 'foo@example.com',
    password: 'barPassword'
  }

  it('should give error when calling abstract register function', function (done) {
    var userific = new Userific()
    userific.register(userData, function (err, user) {
      should.exist(err)
      err.error.should.eql('abstract register function not implemented')
      done()
    })
  })

  it('should give error when calling abstract authenticate function', function (done) {
    var userific = new Userific()
    userific.authenticate(userData, function (err, user) {
      should.exist(err)
      err.error.should.eql('abstract authenticate function not implemented')
      done()
    })
  })

  it('should give error when calling abstract changeEmail function', function (done) {
    var userific = new Userific()
    userific.changeEmail(userData, function (err, user) {
      should.exist(err)
      err.error.should.eql('abstract changeEmail function not implemented')
      done()
    })
  })

  it('should give error when calling abstract changePassword function', function (done) {
    var userific = new Userific()
    userific.changePassword(userData, function (err, user) {
      should.exist(err)
      err.error.should.eql('abstract changePassword function not implemented')
      done()
    })
  })

  it('should give error when calling abstract resetPassword function', function (done) {
    var userific = new Userific()
    userific.resetPassword(userData, function (err, user) {
      should.exist(err)
      err.error.should.eql('abstract resetPassword function not implemented')
      done()
    })
  })

  it('should give error when calling abstract confirmEmail function', function (done) {
    var userific = new Userific()
    userific.confirmEmail(userData, function (err, user) {
      should.exist(err)
      err.error.should.eql('abstract confirmEmail function not implemented')
      done()
    })
  })
})
