# Userific

[![Build Status](https://travis-ci.org/nisaacson/userific.png)](https://travis-ci.org/nisaacson/userific)
[![Dependency Status](https://david-dm.org/nisaacson/userific.png)](https://david-dm.org/nisaacson/userific)

User registration and authentication interface. Any userific backend should follow work with the examples below


# Installation
```bash
npm install -S userfic
```

# Features

Any module that implements the userific interface must implement the following abstract functions

* `register`
* `confirmEmail`
* `authenticate`
* `changeEmail`
* `changePassword`
* `generateResetPasswordToken`
* `resetPassword`
* `fetchUserByEmail`
* `validateAccessToken`
* `validateConfirmToken`
* `validateResetToken`
* `grantAccessTokensForEmail`


## Register

The register function should return an error object as the first parameter of the callback if the registration fails. A user object is passed as the second parameter if the registration succeeds

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

## Authenticate
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
## Generate Reset Password token

Generate a new random token that can be used to validate reset password requests. A reset password token requires users to confirm themselves to the system. For example a user management server could generate a reset password token and then email the token to the user. This way the user has to verify that they control the email address associated with the account before they can reset the password

```javascript
var inspect = require('eyespect').inspector()
var backend = new require('userific-mockbackend')
var userData = {
  email: 'foo@example.com'
}

backend.generatePasswordResetToken(userData, function(err, resetToken) {
  if (err)  {
    inspect(err, 'error generating password reset token for email')
    return
  }
  inspect(resetToken, 'generated password reset token')
})
```


## Reset Password
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

## Fetch User By Email

Sometimes the backend needs to be able to lookup a user in the data-store by their email address

```javascript
var inspect = require('eyespect').inspector()
var backend = new require('userific-mockbackend')
var email = 'foo@example.com'
backend.fetchUserByEamil(email, function(err, user) {
  if (err)  {
    inspect(err, 'error looking up user by email')
    return
  }
  inspect(user, 'user found by email')
})
```

## Validate Access Token

For sites in beta launch, the backend might need to restrict registrations to users that were invited by someone else and thus have a valid access token. The backend should implement a way to validate these access tokens

```javascript
var inspect = require('eyespect').inspector()
var backend = new require('userific-mockbackend')
var accessToken = 'f47ac10b-58cc-4372-a567-0e02b2c3d479'
backend.validateAccessToken(accessToken, function(err) {
  if (err)  {
    inspect(err, 'access token validation failed')
    return
  }
  inspect('access token is valid')
})
```

## Validate Reset Token

When a user requests a password reset, they get a password reset token. Before the password is reset however this reset token must be validated

```javascript
var inspect = require('eyespect').inspector()
var backend = new require('userific-mockbackend')
var resetToken = 'f47ac10b-58cc-4372-a567-0e02b2c3d479'
backend.validateResetToken(accessToken, function(err) {
  if (err)  {
    inspect(err, 'password reset token is not valid')
    return
  }
  inspect('password reset token is valid, go ahead a reset password now')
})
```

## Grant Access Tokens for Email

Sometimes you might want to restrict new registrations to only invited users. When a user registers with a valid access token, that user should then be allowed to invite others to join. Therefore the backend should implement a functio to grant a given number of access tokens to the newly registered user

```javascript
var inspect = require('eyespect').inspector()
var backend = new require('userific-mockbackend')
var numTokens = 5
var email = 'foo@example.com'
backend.grantAccessTokensForEmail(email, numTokens, function(err, reply) {
  if (err)  {
    inspect(err, 'failed to grant access tokens for email')
    return
  }
  inspect(reply, 'granted access tokens for email correctly')
})
```


