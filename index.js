// Below is a quick wrapper that makes a mock API for each config file in the "/stubs" folder.
// It does this by posting the JSON to the Mountebank http://localhost:2525/imposters endpoint
// There are client libraries available if you don't want to use the Rest API: http://www.mbtest.org/docs/clientLibraries


const proxyHost = "http://localhost:2525"
const impostersEndpoint = `${proxyHost}/imposters`
const apiConfigFolder = "./apis"

const fs = require("fs")
const path = require('path')
const request = require("request")

// Clear all current api configs from the server
request({
  method: "DELETE",
  uri: impostersEndpoint
})

// Configure all apis in the "./apis" folder
fs.readdir(apiConfigFolder, (err, files) => {
  files.forEach(file => {
    let filePath = "./" + path.join(apiConfigFolder, file).replace("\\", "/")
    let apiConfig = require(filePath)

    request({
      method: "POST",
      uri: impostersEndpoint,
      json: apiConfig
    }, (err, response, body) => console.log(body))
  })
})

