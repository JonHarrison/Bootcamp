import inquirer from 'inquirer';
import fs from 'fs';
import util from 'util';

const writeFileAsync = util.promisify(fs.writeFile);

function generateHTML(data)
{
    const { name, location, bio, linkedin, github } = data;

    return `<!DOCTYPE html>
    <html lang="en-gb">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>07-Stu-Mini-Project</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">My name is ${name}</h1>
          <p class="lead">I am from ${location}</p>
          <p>${bio}</p>
          <p>${linkedin}</p>
          <p>${github}</p>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>    </body>
    </html>`;
}

(function promptUser() {
inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'location',
            message: 'What is your location?'
        },
        {
            type: 'input',
            name: 'bio',
            message: 'Please enter your biography'
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'What is your LinkedIn URL?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub URL?'
        }
    ])
    .then((response) => {
        writeFileAsync('index.html', generateHTML(response), (err) => {
            err ? console.error(err) : console.log(response);
        })
    })
    .then(() => console.log("Successfully written to index.html"))
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
            console.log(error);
        }
    });
})();
