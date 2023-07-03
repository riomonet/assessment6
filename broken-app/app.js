const express = require('express');
let axios = require('axios');
const app = express();

app.use(express.json())


app.post('/', (req, res, next) => {

    let urls = req.body.developers.map(dev => `https://api.github.com/users/${dev}`)
    const requests = urls.map(url => axios.get(url))
	 
    Promise.all(requests)
	.then(responses => {
	    let out = responses.map(r => {
		return { name: r.data.name, bio: r.data.bio }
	    })
	    return res.send(JSON.stringify(out));
	})
	.catch(error => res.send("ERROR: bad input"))
})
     
app.listen(3000);
    
