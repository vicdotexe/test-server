const path = require('path');

const inViews = function(filePath){
    return path.join(__dirname, `./views/${filePath}`);
}

const init = function(server){
    server.get('/', (req,res)=>{
        res.sendFile(inViews('index.html'));
    })
    server.get('/about', (req, res)=>{
        res.sendFile(inViews('about.html'));
    })
}

module.exports = {
    init
}