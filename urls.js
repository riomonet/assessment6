//get filename from command line
//read contents of file
//each line of the file is a url
//execute a get request for each url
//save the results of each request into a file that is named for the hostname that was called
//errorhandling for bad filename
//errorahandling for bad url

const fs = require('fs')
const axios = require('axios')


let path = process.argv[2];


function read (path) {
    fs.readFile (path, 'utf8', (err, data) => {
	if (err) {
	    console.log(err)
	    process.kill(1)
	}
	makeRequests(data)
    })
}

function makeRequests(data) {

    data.split(/\r?\n/).map(url => webRequest(url))
}

function webRequest(url) {
    axios.get(url)
	.then(res => {
	    let u  = new URL(url)
	    write(u.hostname, res.data,'w')
	})
	.catch (error => console.log(`Couldn't download: ${url}`))
}


function write (file, data, flag) {
    
    fs.writeFile(file, data, {encoding: 'utf8', flag: flag}, (err) => {
	if (err) {
	    console.log("error writing file")
	}
	console.log(`Wrote to ${file}`)
    })
}



read(path)


