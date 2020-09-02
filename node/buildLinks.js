const fs = require('fs');
const path = require( 'path' );

let directory = '../pages',
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
    links: [
      {name: 'home', link: '/'}
    ],
    metadata: {
      updatedOn: new Date()
    }
  };


  files.forEach(file => {
    const splitFilename = file.split("pages")[1]
    const splitDetails = splitFilename.split('/')

    let name = splitDetails[1].split('.vue')[0].replace('_', '')

    if(!obj.links.find(x => x.name === name) && name !== 'index'){
      obj.links.push({name, link: `/${name}`})
    }

  })

  // outputs to /static/ dir
  fs.writeFile('./static/JSON/links.json', JSON.stringify(obj, null, 4), 'utf8', () => {
    console.log("JSON built.")
  });  
}

