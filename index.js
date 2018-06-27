// Below is a quick wrapper that makes a mock API for each config file in the "/stubs" folder.
// It does this by posting the JSON to the Mountebank http://localhost:2525/imposters endpoint
// There are client libraries available if you don't want to use the Rest API: http://www.mbtest.org/docs/clientLibraries


const proxyHost = "http://localhost:2525"
const impostersEndpoint = `${proxyHost}/imposters`
const stubConfigFolder = "./stubs"

const fs = require("fs")
const path = require('path')
const request = require("request")

// Clear all current stubs
request({
  method: "DELETE",
  uri: impostersEndpoint
})

// Configure all stubs in the "./stubs" folder
fs.readdir(stubConfigFolder, (err, files) => {
  files.forEach(file => {
    let filePath = "./" + path.join(stubConfigFolder, file).replace("\\", "/")
    let stubConfig = require(filePath)

    request({
      method: "POST",
      uri: impostersEndpoint,
      json: stubConfig
    }, (err, response, body) => console.log(body))
  })
})

