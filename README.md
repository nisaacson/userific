# Userific
User registration and authentication interface. Any userific backend should follow work with the examples below

# Installation
```bash
npm install -S userfic
```

# Features

Any module that implements the userific interface must support the following

* Registration
* Authentication
* Change Email
* Change Password
* Reset Password
* Confirm Email

## Registration

```javascript
var inspect = require('eyespect').inspector()
var backend = require('userific-mockbackend')
var userData = {
  email: 'foo@example.com',
  password: 'barPassword'
}

backend.register(userData, function(err, userModel) {
  if (err)  {
    inspect(err, 'error registering user')
    return
  }
  inspect(userModel, 'user registered')
})
```

The register function should return an error object as the first parameter of the callback if the registration fails. A user object is passed as the second parameter if the registration succeeds

## Authentication
To authenticate a user follow the code below. For example you could use this in a login route post handler to allow users to login to a website

```javascript
var inspect = require('eyespect').inspector()
var backend = require('userific-mockbackend')
var userData = {
  email: 'foo@example.com',
  password: 'barPassword'
}

backend.authenticate(userData, function(err, userModel) {
  if (err)  {
    inspect(err, 'error registering user')
    return
  }
  inspect(userModel, 'user authenticated')
})
```

## Change Email
To change the email for a user follow the code below. Note that you must pass both `currentEmail` and `newEmail`

```javascript
var inspect = require('eyespect').inspector()
var backend = require('userific-mockbackend')
var userData = {
  currentEmail: 'foo@example.com',
  newEmail: 'bar@example.com'
}

backend.changeEmail(userData, function(err, userModel) {
  if (err)  {
    inspect(err, 'error registering user')
    return
  }
  inspect(userModel, 'user email changed')
})
```

## Change Password
To change the password for a user follow the code below. Note that you must pass both `currentPassword` and `newPassword`

```javascript
var inspect = require('eyespect').inspector()
var backaend = require('userific-mockbackend')
var userData = {
  currentPassword: 'barPassword',
  newPassword: 'fooPassword'
}

backend.changePassword(userData, function(err, userModel) {
  if (err)  {
    inspect(err, 'error registering user')
    return
  }
  inspect(userModel, 'user password changed')
})
```

## Reset Passwrod
To reset the password for a user follow the code below. Note that you must pass a `resetToken` parameter. The resetToken is a pre-generated reset password token that is stored in the datastore of the given backend. When the user requests to reset their password, the `resetToken` should be emailed to the user. Using a `resetToken` this way forces the user to confirm that they own the email address associated with the account before resetting the password.

The `resetPassword` function should return an error if the reset fails, such as when the `resetToken` does not match. If the reset completes correctly, `resetPassword` should return the new raw unhashed password. As a general tip for writing backends, the raw password should never be stored directly in the database. Instead use a slow hashing algorithm such as [nodejs-bcrypt](https://github.com/shaneGirish/bcrypt-nodejs) and store only the hashed password

```javascript
var inspect = require('eyespect').inspector()
var backend = new require('userific-mockbackend')
var userData = {
  resetToken: '60a39ce71e1dbbbc325d791251019cb5'
}

backend.resetPassword(userData, function(err, newRawPassword) {
  if (err)  {
    inspect(err, 'error resetting password user')
    return
  }
  inspect(newRawPassword, 'user password reset to this new password')
})
```

## Confirm Email
To confirm the email for a new user registration follow the code below. Note that you must pass a `confirmToken` value. When a new user registers, the confirmToken field should be randomly generated and stored along with the user object in the backend data-store. When the user supplies this `confirmToken` to the `confirmEmail` function, their account will be confirmed and activated

```javascript
var inspect = require('eyespect').inspector()
var backend = require('userific-mockbackend')
var userData = {
  confirmToken: 'cb9f1ffc457a8b834488e83cad81389a'
}

backend.confirmEmail(userData, function(err, userModel) {
  if (err)  {
    inspect(err, 'error confirming user email')
    return
  }
  inspect(userModel, 'user email confirmed and account activated')
})
```
