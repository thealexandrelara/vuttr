# VUTTR

VUTTR (acronym for "Very Useful Tools To Remember") is an application that acts as a simple repository to store tools and their names, links, descriptions and tags.

## Getting Started

These instructions will get you a copy of the backend of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You can install and execute the backend of this project by using Docker (easiest and recommended way) or manually.

If you decide to go with Docker, you're going to need:

```
MongoDB (version 4 or up)
Docker (engine version 18.09.2 or up)
Docker Compose (engine version 1.23.2 or up)
```

If you prefer to install it manually, then you'll need:

```
Node (version 10 or up)
MongoDB (version 4 or up)
```

### Installing

First, clone the project:

```
git clone https://github.com/thealexandrelara/vuttr
```

Access the created folder and create a `.env` file following the same structure as the `.env.example` located on the folder.

```
cd vuttr/backend
cp .env.example .env
```

Execute the application:

```
# if you're using Docker (make sure that you have a mongodb instance already up and running)
docker build -t vuttr-backend . && docker run -it vuttr-backend

# if you're installing manually
yarn # or npm install
yarn dev # or npm run dev
```

After the installation is finished, you can access the React application through: http://localhost:3000/

### Running tests

You can run the tests with the following command

```
yarn test # or npm run test
```

## Docs

After starting the application, you can access the documentation containing all available resources on the API by accessing: http://localhost:3000/docs

You can also read the OpenAPI schema located in src/swagger.json.

## Authors

- **Alexandre Lara**

See also the list of [contributors](https://github.com/thealexandrelara/vuttr/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
