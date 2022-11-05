const helpers = {
    upperCase(content){
        return content.toUpperCase()
    },
    formataData(data){
        return data.split('-').reverse().join('/')
    }

}

module.exports = helpers
