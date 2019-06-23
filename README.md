# VUTTR

VUTTR (acronym for "Very Useful Tools To Remember") is an application that acts as a simple repository to store tools and their names, links, descriptions and tags.

## Getting Started

The project is divided in two folders: **backend** and **frontend**. This README provides an overview of the project and an installation guide using Docker. You can find additional information and instructions about how to install and execute each project's piece (backend or frontend) separately by accessing its folder.

### Prerequisites

It's recommended to have Docker with engine version 18.09.2 or higher and Docker Compose 1.23.2 or higher to install and run this project

### Installing

After installing Docker and Docker Compose on your machine, you can then continue to install this project:

First, clone the project:

```
git clone https://github.com/thealexandrelara/vuttr
```

Access the created folder and execute the project

```
cd vuttr
docker-compose up --build -d
```

After the installation is finished, you can access the React application through: http://localhost:3001/

## Built With

- [Node.js](https://nodejs.org/) - Framework used in this project
- [Express](https://expressjs.com/) - Web framework for Node.js
- [MongoDB](https://www.mongodb.com/) - A general purpose, document-based and distributed database
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Docker](https://www.docker.com/) - A tool designed to make it easier to create, deploy, and run applications by using containers

## Authors

- **Alexandre Lara**

See also the list of [contributors](https://github.com/thealexandrelara/vuttr/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
