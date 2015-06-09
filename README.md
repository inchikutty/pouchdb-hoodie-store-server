# pouchdb-hoodie-store-server

> tiny server with a front-end store API

## Scope

Serves static assets as well as exposes a subset of CouchDB's REST API,
to create and interact with databases. The goal is to create very simplistic
server for static web applications, that can store, synchronise and share
data only by secure IDs.


## Usage

Start a server

```
pouchdb-hoodie-store-server
# - starts server at http://localhost:8000
# - serves static assets from current directory at /
# - exposes /store.js for the front-end API
# - exposes [HEAD,GET,PUT,DELETE] /store/:dbname and document REST APIs
```

The index.html in the current folder will be served at `http://localhost:8000`.
To load the front-end JavaScript API, add `<script scr="/store/bundle.js"></script>`

The front-end JavaScript API is a pre-configured instance of [pouchdb-hoodie-store](https://github.com/hoodiehq/pouchdb-hoodie-store).


## The plan™

This is work in progress:

1. Create an [ExpressJS](http://expressjs.com/) server for static assets. [#1](https://github.com/hoodiehq/pouchdb-hoodie-store-server/issues/1)
2. Add [express-pouchdb](https://github.com/pouchdb/express-pouchdb/) and expose it at `/store` [#2](https://github.com/hoodiehq/pouchdb-hoodie-store-server/issues/1)
3. Add [pouchdb-hoodie-store](https://github.com/hoodiehq/pouchdb-hoodie-store) and expose it at /store/bundle.js` [#3](https://github.com/hoodiehq/pouchdb-hoodie-store-server/issues/1)
4. Create a simple todo app using pouchdb-hoodie-store-server [#4](https://github.com/hoodiehq/pouchdb-hoodie-store-server/issues/1)


## License

MIT
