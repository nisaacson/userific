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


## Registration

```javascript
var inspect = require('eyespect').inspector()
var userific = require('userific')
var userData = {
  email: 'foo@example.com',
  password: 'barPassword'
}

userific.register(userData, function(err, userModel) {
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
var userific = require('userific')
var userData = {
  email: 'foo@example.com',
  password: 'barPassword'
}

userific.authenticate(userData, function(err, userModel) {
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
var userific = require('userific')
var userData = {
  currentEmail: 'foo@example.com',
  newEmail: 'bar@example.com'
}

userific.changeEmail(userData, function(err, userModel) {
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
var userific = require('userific')
var userData = {
  currentPassword: 'barPassword',
  newPassword: 'fooPassword'
}

userific.changePassword(userData, function(err, userModel) {
  if (err)  {
    inspect(err, 'error registering user')
    return
  }
  inspect(userModel, 'user password changed')
})
```
