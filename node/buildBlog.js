const fs = require('fs');
const path = require( 'path' );

let directory = '../pages/_blog',
    walkPath = path.join(__dirname, directory),
    listOfFiles = [];

let walk = function (dir, done) {
    fs.readdir(dir, function (error, list) {
        if (error) {
          return done(error);
        }

        let i = 0;

        (function next () {
            let file = list[i++];

            if (!file) {
              return done(null);
            }
            
            file = dir + '/' + file;
            
            fs.stat(file, function (error, stat) {
                if (stat && stat.isDirectory()) {
                  walk(file, function (error) {
                      next();
                  });
                } else {
                  // do stuff to file here
                  listOfFiles.push(file)
                  next();
                }
            });
        })();
    });
};

// optional command line params
//      source for walk path
process.argv.forEach(function (val, index, array) {
    if (val.indexOf('source') !== -1) {
        walkPath = val.split('=')[1];
    }
});


walk(walkPath, function(error) {
    if (error) {
      throw error;
    } else {
      processFileNames(listOfFiles)
    }
});

const processFileNames = (files) => {

  // create object
  let obj = {
    entries: [
      
    ],
    metadata: {
      updatedOn: new Date()
    }
  };


  files.forEach(file => {
    const splitFilename = file.split("_blog")[1]
    const splitDetails = splitFilename.split('/')
    if(splitDetails.length > 2){
      let year = splitDetails[1],
          month = splitDetails[2],
          day = splitDetails[3],
          title = splitDetails[4].split('.vue')[0];
      
      obj.entries.push({year, month, day, title, url: `blog/${year}/${month}/${day}/${title}`})
    }
  })

  // outputs to /static/ dir
  fs.writeFile('./static/JSON/blog.json', JSON.stringify(obj, null, 4), 'utf8', () => {
    console.log("JSON built.")
  });  
}

