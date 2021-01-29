# Full stack challenge for VATION GmbH

Welcome to the our Fullstack challenge!!!

First of all thanks for taking your time doing this test, you will find detailed instructions and exercises to perform this test but any feedback that you think can help us to improve the test will be more than welcome.

## Overview

In this test we will evaluate your knowledge about Frontend, Backend and a bit of infrastructure (Doker), this will be an applicable case of a task that you will perform in a normal task at *VATION*. 

You will find a list of **users** in our *Backend project* to get started and a pre-setup **create react app** in the *Frontend*, this tech is not enforced but is what we use in our company. We try to give you some context about how we do things. Also the docker compose file in the project is able to start the FE service so you will also have some guidance about how it works.

## Setup

You will need to have setup this tools:

* [docker](https://docs.docker.com/engine/install/) and [docker-compose](https://docs.docker.com/compose/install/),in Linux this are two different packages in Mac and Windows you can start with [Docker desktop](https://www.docker.com/products/docker-desktop)
* [nodejs](https://nodejs.org/en/)
* [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

## Project structure

├── backend # Backend project
│   ├── Dockerfile
│   ├── db.json # File to adapt the backend endpoints
│   ├── package.json
│   └── yarn.lock
├── docker-compose.yml
└── frontend # Frontend project
    ├── README.md
    ├── package.json
    ├── src # Files to create and adapt the Frontend project
    ├── tsconfig.json
    └── yarn.lock

## Initialization

### Frontend
If you installed yarn and node you just need to follow two steps:

Enter in the frontend path

```
cd frontend
```

Install dependencies:

```
yarn
```

Start development server

```
yarn start
```


### Backend
If you installed yarn and node you just need to follow two steps:

Enter in the backend path

```
cd backend
```

Install dependencies:

```
yarn
```

Start server

```
yarn start
```

### Container
If you installed docker and docker-compose

From the root-path of this project

```
docker-compose up
```

## Tasks

1. Create a homepage in the frontend project that display the list of user and have a search filter by name (in memory doesn't need to perform backend rest calls in every search)
2. Add a list of exercises assigned to every user in the backend project with the structure `{"title": "string", "descriptio": "string", "duration": number}`.
3. Add a Dockerfile and adjust the docker-compose.yml file to build and host a production version of the frontend connected to the backend container.
4. Create a private project to github with the solution and invite the indicated user in the email.
