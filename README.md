# Mountebank Sample

Demonstrates how to use Mountebank to setup API stubs.  

Comes with a quick way to configure multiple apis locally.

## Pre-Requisites

* NodeJS v4+

# Setup

Run the below in the root of this repository:

```bash
npm install -g mountebank
npm install
```

# Running Mountebank

Run this command:

```bash
mb
```

Then open http://localhost:2525 in your browser to see it running, alongside the docs.

Running `node index.js` when mb is running will configure it for all stubs in the `./apis/`"` folder.

If you then open http://localhost:4545 you will get a hello world json response.

# API Config

Each file in the `./apis/` folder represents an API, when configured it will run on `localhost:{port-in-config}`.

You can configure the responses the API should return in the "stubs" section of the configuration.  This lets you match on properties of the request and return an appropriate response.

Full docs on the contract can be found here: http://www.mbtest.org/docs/api/contracts

# Advantages of Mountebank

* Cross platform NodeJS tool
* Presents a local rest endpoint for configuring interceptors, easy to integrate with
* Has a host of Client Libraries, including in C# and JS: http://www.mbtest.org/docs/clientLibraries
* Comes with a UI for checking imposters, logs and config
* Fast spin up time (~2 seconds)