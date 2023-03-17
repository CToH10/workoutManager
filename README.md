# WORKOUT MANAGER

## Description

This API provides a way to carefully document and manage your workouts.

## Base Url

This is the base Url to be used before endpoints:<br>
http://workoutmanager.com

## Endpoints: Users

### Register user - POST /users <br>

Email is unique<br>
User must contain:<br>

```json
{
  "email": "email@email.com",
  "password": "email",
  "name": "Test Name",
  "trainingExp": "beg"
}
```

<br>
Standard answer:<br>

```json
{
  "id": 3,
  "name": "Test Name",
  "email": "email@email.com",
  "trainingExp": "beg",
  "admin": false,
  "createdAt": "2023-03-16T17:05:39.095Z",
  "updatedAt": "2023-03-16T17:05:39.095Z",
  "deletedAt": null
}
```

### Update profile - PATCH /users/`${id}` <br>

Must provide access token<br>
Only admins can update `admin` and `trainingExp`<br>
Admin can updated any user<br>
Standard answer with edited info:<br>

```json
{
  "name": "Não admin",
  "email": "luised@mail.com",
  "trainingExp": "beg",
  "admin": false,
  "id": 3,
  "createdAt": "2023-03-16T17:05:39.095Z",
  "updatedAt": "2023-03-16T17:05:39.095Z",
  "deletedAt": null
}
```

### Delete user - DELETE /users/`${id}` <br>

Must provide access token<br>
Information is kept, user is disabled<br>
User can only delete themselves, admin can delete any user<br>

Standard answer returns no body and status `204` <br>

### Access user profile - GET /users/`${id}` <br>

Must provide access token<br>
User can only access own profile, admin can access any user<br>
Standard answer:<br>

```json
{
  "name": "Test Name",
  "email": "emailEdited@mail.com",
  "trainingExp": "beg",
  "admin": false,
  "id": 3,
  "createdAt": "2023-03-16T17:05:39.095Z",
  "updatedAt": "2023-03-16T17:05:39.095Z",
  "deletedAt": null
}
```

### List all users - GET /users <br>

Must provide access token<br>
Users only have access to other active users<br>
Standard answer:<br>

```json
[
  {
    "name": "Test Name",
    "email": "testing@mail.com",
    "trainingExp": "int",
    "admin": false,
    "id": 2,
    "createdAt": "2023-03-15T13:36:33.430Z",
    "updatedAt": "2023-03-15T13:36:33.430Z",
    "deletedAt": null
  },
  {
    "name": "Test Name 2",
    "email": "admin@mail.com",
    "trainingExp": "int",
    "admin": true,
    "id": 1,
    "createdAt": "2023-03-15T12:49:50.075Z",
    "updatedAt": "2023-03-15T12:49:50.075Z",
    "deletedAt": null
  },
  {
    "name": "Test Name 3",
    "email": "emailEdited@mail.com",
    "trainingExp": "beg",
    "admin": false,
    "id": 3,
    "createdAt": "2023-03-16T17:05:39.095Z",
    "updatedAt": "2023-03-16T17:05:39.095Z",
    "deletedAt": null
  }
]
```

<br>

## Endpoint: Admin <br>

### Create admin - POST /admin <br>

Email is unique<br>
Admin must contain `admin`:<br>

```json
{
  "email": "adminEmail@email.com",
  "password": "admin",
  "name": "Test Admin",
  "trainingExp": "pro",
  "admin": false
}
```

<br>
Standard answer:<br>

```json
{
  "id": 4,
  "email": "adminEmail@email.com",
  "name": "Test Admin",
  "trainingExp": "pro",
  "admin": true,
  "createdAt": "2023-03-16T17:05:39.095Z",
  "updatedAt": "2023-03-16T17:05:39.095Z",
  "deletedAt": null
}
```

<br>

## Endpoint: Login <br>

### Login - POST /login <br>

Must provide email and password<br>
Standard answer:<br>

```json
{
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1aXNAbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjc4OTg2ODMzLCJleHAiOjE2Nzg5OTA0MzMsInN1YiI6IjEifQ.HXHZ8IpQXR1MPIosVr71qhq4I2aiyullup8P6skv3wM"
}
```

## Endpoint: Muscle Groups <br>

All routes need access token<br>
Only admins can access `/muscles`<br>

### Create Muscle Group - POST /muscles <br>

Must provide name<br>

```json
{
  "name": "pectoral",
  "keyToBeIgnored": "bigGains"
}
```

<br>

Standard answer:<br>

```json
{
  "name": "pectoral",
  "id": 1
}
```

<br>

### Update muscle group - PATCH /muscles/`${id}` <br>

Standard answer:<br>

```json
{
  "name": "Pectoral",
  "id": 1
}
```

<br>

### List all muscle groups - GET /muscles <br>

Will list all exercises registered to that muscle group<br>
Standard answer:<br>

```json
[
  {
    "name": "Pectoral",
    "id": 1,
    "exercises": [
      {
        "id": 1,
        "name": "Fly",
        "description": null,
        "muscleId": 1
      },
      {
        "id": 4,
        "name": "Bench press",
        "description": null,
        "muscleId": 1
      }
    ]
  },
  {
    "name": "Delts",
    "id": 2,
    "exercises": []
  }
]
```

### Delete muscle group - DELETE /muscles <br>

Standard answer returns no body and status `204` <br>

## Endpoint: Exercises <br>

All routes need access token<br>
Only admins can access `/exercises`<br>

### Create exercise - POST /exercise <br>

Must provide `muscleId` and `name`<br>
Can provide `description`<br>

Standard answer:<br>

```json
{
  "name": "Bench press",
  "description": null,
  "id": 4,
  "muscle": {
    "name": "Pectoral"
  }
}
```

<br>

### List all exercises - GET /exercises <br>

Standard answer:<br>

```json
[
  {
    "name": "Fly",
    "description": null,
    "id": 1,
    "muscle": {
      "name": "Pectoral"
    }
  },
  {
    "name": "Lateral raise",
    "description": null,
    "id": 2,
    "muscle": {
      "name": "Delts"
    }
  },
  {
    "name": "Military press",
    "description": null,
    "id": 3,
    "muscle": {
      "name": "Delts"
    }
  },
  {
    "name": "Bench press",
    "description": null,
    "id": 4,
    "muscle": {
      "name": "Pectoral"
    }
  }
]
```

<br>

### List exercises by muscle group - GET /exercises/`${muscleId}` <br>

Standard answer:<br>

```json
[
  {
    "name": "Lateral raise",
    "description": null,
    "id": 2
  },
  {
    "name": "Military press",
    "description": null,
    "id": 3
  }
]
```

<br>

### Update exercise - PATCH /exercises <br>

Can update `name`, `description` and `muscleId`<br>

```json
{
  "name": "Lateral raises",
  "description": null,
  "id": 2,
  "muscle": {
    "name": "Delts"
  }
}
```

### Delete exercise - DELETE /exercises/`${id}` <br>

Standard answer returns no body and status `204`. <br>

<br>

## Endpoints: Daily Workout <br>

All routes must provide access token<br>

### Create daily workout - POST /workout <br>

Standard answer:<br>

```json
{
  "id": 1,
  "date": "2023-03-16T17:46:59.500Z",
  "daily_exercise": [],
  "user": {
    "name": "Test Name"
  }
}
```

<br>

### Populate daily exercises - POST /workout/`${id}` <br>

Must provide `exerciseId`, `weight`, `series`, `reps`<br>
Standard answer:<br>

```json
{
  "id": 1,
  "date": "2023-03-16T12:55:02.924Z",
  "daily_exercise": [
    {
      "weight": 6,
      "series": 3,
      "reps": 15,
      "id": 1,
      "exercise": {
        "name": "Lateral raises"
      },
      "totalLoad": 270
    },
    {
      "weight": 25,
      "series": 3,
      "reps": 15,
      "id": 2,
      "exercise": {
        "name": "Fly"
      },
      "totalLoad": 1125
    }
  ],
  "user": {
    "name": "Test Name"
  }
}
```

<br>

### Get workout by id - GET /workout/`${id}` <br>

Standard answer:<br>

```json
{
  "id": 2,
  "date": "2023-03-16T13:07:06.249Z",
  "daily_exercise": [],
  "user": {
    "name": "Test Name"
  }
}
```

<br>

### Get all workouts by user - GET /workout/user/`${userId}` <br>

Standard answer:<br>

```json
{
  "name": "Test Name",
  "email": "emailEdited@mail.com",
  "trainingExp": "beg",
  "admin": false,
  "id": 1,
  "createdAt": "2023-03-15T12:49:50.075Z",
  "updatedAt": "2023-03-15T12:49:50.075Z",
  "deletedAt": null,
  "dailyWorkout": [
    {
      "date": "2023-03-16T12:55:02.924Z",
      "id": 1
    },
    {
      "date": "2023-03-16T13:07:06.249Z",
      "id": 2
    }
  ]
}
```
