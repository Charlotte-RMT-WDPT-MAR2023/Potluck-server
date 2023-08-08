### API Documentation

We will start our project by first documenting all of the routes and data models for our API. Following best practices we will use _verbs_ to specify the type of operation being done and _nouns_ when naming endpoints.

#### Routes

##### Event routes

| HTTP verb | URL                        | Request body | Action                        |
| --------- | -------------------------- | ------------ | ----------------------------- |
| GET       | `/api/events`              | (empty)      | Returns all the events        |
| POST      | `/api/events`              | JSON         | Adds a new event              |
| GET       | `/api/events/:eventId`     | (empty)      | Returns the specified event   |
| PUT       | `/api/events/:eventId`     | JSON         | Edits the specified event     |
| DELETE    | `/api/events/:eventId`     | (empty)      | Deletes the specified event   |

##### Guest routes

| HTTP verb | URL                       | Request body | Action                       |
| --------- | ------------------------- | ------------ | ---------------------------- |
| POST      | `/api/guests`             | JSON         | Adds a new guest             |
| GET       | `/api/guests/:guestsId`   | (empty)      | Returns the specified guest  |
| PUT       | `/api/guests/:guestsId`   | JSON         | Edits the specified guest    |
| DELETE    | `/api/guests/:guestsId`   | (empty)      | Deletes the specified guest  |



##### Auth routes

| HTTP verb | URL            | Request Headers                 | Request Body              |
| --------- | -------------- | ------------------------------- | ------------------------- |
| POST      | `/auth/signup` | --                              | { email, password, name } |
| POST      | `/auth/login`  | --                              | { email, password }       |
| GET       | `/auth/verify` | Authorization: Bearer \< JWT \> | --                        |



<hr>

#### Models

##### Event Model

```js
{
date: Date,
time: String,
location: String,
description: String
}

```

##### Guest Model

```js
{
  name: String,
  plusOne: String,
  allergyInfo: String,
  dietaryInfo: String,
  event: { type: Schema.Types.ObjectId, ref: 'Event' }
}
```

##### User Model

```js
{
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
}
```

