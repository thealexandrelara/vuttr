# VUTTR

VUTTR (acronym for "Very Useful Tools To Remember") is an application that acts as a simple repository to store tools and their names, links, descriptions and tags.

## Getting Started

These instructions will get you a copy of the frontend of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You can install and execute the frontend of this project by using Docker (easiest and recommended way) or manually.

If you decide to go with Docker, you're going to need:

```
Docker (engine version 18.09.2 or up)
Docker Compose (engine version 1.23.2 or up)
```

If you prefer to install it manually, then you'll need:

```
Node (version 10 or up)
```

### Installing

First, clone the project:

```
git clone https://github.com/thealexandrelara/vuttr
```

Access the created folder and execute the project

```
cd vuttr/frontend

# if you're using Docker
docker build -t vuttr-frontend . && docker run -it vuttr-frontend

# if you're installing manually
yarn # or npm install
yarn start # or npm run dev
```

After the installation is finished, you can access the React application through: http://localhost:3001/

## Authors

- **Alexandre Lara**

See also the list of [contributors](https://github.com/thealexandrelara/vuttr/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
