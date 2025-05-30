# User Registration API Documentation

## Endpoint

`POST /user/register`

## Description

This endpoint allows a new user to register by providing their first name, last name, email, and password. On successful registration, the endpoint returns a JWT token and the created user object.

---

## Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

### Field Requirements

- `fullname.firstname` (string, required): Minimum 3 characters.
- `fullname.lastname` (string, optional): Minimum 3 characters if provided.
- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.

---

## Responses

### Success

- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
  }
  ```

### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "First name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      }
      // ...other errors
    ]
  }
  ```

---

## Example Request

```bash
curl -X POST http://localhost:3000/user/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }'
```

---

## Notes

- The password is securely hashed before storage.
- The email must be unique.
- The JWT token can be used for authenticated requests.

---

# User Login API Documentation

## Endpoint

`POST /user/login`

## Description

This endpoint allows an existing user to log in using their email and password. On successful authentication, it returns a JWT token and the user object.

---

## Request Body

Send a JSON object with the following structure:

```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

### Field Requirements

- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.

---

## Responses

### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
  }
  ```

### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "invalid Email",
        "param": "email",
        "location": "body"
      }
      // ...other errors
    ]
  }
  ```

### Authentication Error

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "invalid email or password"
  }
  ```

---

## Example Request

```bash
curl -X POST http://localhost:3000/user/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }'
```

---

## Notes

- The JWT token can be used for authenticated requests.
- Ensure the email and password are correct to receive a valid token.

---

# User Profile API Documentation

## Endpoint

`GET /user/profile`

## Description

This endpoint returns the profile information of the authenticated user.

## Authentication

Requires a valid JWT token in the Authorization header:

```
Authorization: Bearer <jwt_token>
```

## Responses

### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
  ```

### Authentication Error

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Authentication required"
  }
  ```

## Example Request

```bash
curl -X GET http://localhost:3000/user/profile \
  -H "Authorization: Bearer <jwt_token>"
```

---

# User Logout API Documentation

## Endpoint

`GET /user/logout`

## Description

This endpoint logs out the current user by clearing their authentication cookie and blacklisting the current JWT token.

## Authentication

Requires a valid JWT token in the Authorization header:

```
Authorization: Bearer <jwt_token>
```

## Responses

### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "message": "logged out"
  }
  ```

### Authentication Error

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Authentication required"
  }
  ```

## Example Request

```bash
curl -X GET http://localhost:3000/user/logout \
  -H "Authorization: Bearer <jwt_token>"
```

## Notes

- The JWT token will be blacklisted and can't be used for future requests
- The authentication cookie will be cleared from the client

---

# Captain API Documentation

---

## Captain Registration

### Endpoint

`POST /captain/register`

### Description

Register a new captain by providing full name, email, password, and vehicle details. Returns a JWT token and the created captain object.

### Request Body

```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Smith"
  },
  "email": "jane.smith@example.com",
  "password": "yourpassword",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Field Requirements

- `fullname.firstname` (string, required): Minimum 3 characters.
- `fullname.lastname` (string, optional).
- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.
- `vehicle.color` (string, required): Minimum 3 characters.
- `vehicle.plate` (string, required): Minimum 3 characters.
- `vehicle.capacity` (number, required).
- `vehicle.vehicleType` (string, required).

### Responses

#### Success

- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "captain": {
      "_id": "captain_id",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Smith"
      },
      "email": "jane.smith@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

#### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "firstname must be al least 3 charactors long",
        "param": "fullname.firstname",
        "location": "body"
      }
      // ...other errors
    ]
  }
  ```

#### Duplicate Email Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "message": "Captain already exists"
  }
  ```

### Example Request

```bash
curl -X POST http://localhost:3000/captain/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": { "firstname": "Jane", "lastname": "Smith" },
    "email": "jane.smith@example.com",
    "password": "yourpassword",
    "vehicle": {
      "color": "Red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }'
```

---

## Captain Login

### Endpoint

`POST /captain/login`

### Description

Authenticate a captain using email and password. Returns a JWT token and the captain object.

### Request Body

```json
{
  "email": "jane.smith@example.com",
  "password": "yourpassword"
}
```

#### Field Requirements

- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.

### Responses

#### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "captain": {
      "_id": "captain_id",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Smith"
      },
      "email": "jane.smith@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

#### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid email",
        "param": "email",
        "location": "body"
      }
      // ...other errors
    ]
  }
  ```

#### Authentication Error

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Invalid Email Or Password"
  }
  ```

### Example Request

```bash
curl -X POST http://localhost:3000/captain/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "jane.smith@example.com",
    "password": "yourpassword"
  }'
```

---

## Captain Profile

### Endpoint

`GET /captain/profile`

### Description

Returns the profile information of the authenticated captain.

### Authentication

Requires a valid JWT token in the Authorization header:

```
Authorization: Bearer <jwt_token>
```

### Responses

#### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "captain": {
      "_id": "captain_id",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Smith"
      },
      "email": "jane.smith@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

#### Authentication Error

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

### Example Request

```bash
curl -X GET http://localhost:3000/captain/profile \
  -H "Authorization: Bearer <jwt_token>"
```

---

## Captain Logout

### Endpoint

`GET /captain/logout`

### Description

Logs out the current captain by blacklisting the current JWT token and clearing the authentication cookie.

### Authentication

Requires a valid JWT token in the Authorization header:

```
Authorization: Bearer <jwt_token>
```

### Responses

#### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

#### Authentication Error

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

### Example Request

```bash
curl -X GET http://localhost:3000/captain/logout \
  -H "Authorization: Bearer <jwt_token>"
```

---

## Notes

- The password is securely hashed before storage.
- The email must be unique.
- The JWT token can be used for authenticated requests.
- On logout, the JWT token is blacklisted and cannot be used again.
