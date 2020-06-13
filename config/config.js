let config =  {
    qa:{
        "mongoURL": "mongodb://localhost:27017",
        "collectionName": "indegene"
    },
    local: {
        "mongoURL": "mongodb://localhost:27017",
        "collectionName": "indegene"
    }
}

module.exports = config[process.env.NODE_ENV];