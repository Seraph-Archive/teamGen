const fs = require('fs');

const managerCard = function (manager) {
    return `
    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header">Manager: ${manager.name}</div>
  <div class="card-body">
    <h5 class="id">ID: ${manager.id}</h5>
    <p class="email">Email: ${manager.email}</p>
    <p class="office-num">Office Number: ${manager.officeNum}</p>
  </div>
</div>`
};

const engineerCard = function (engineer) {
    return `
    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header">Engineer: ${engineer.name}</div>
  <div class="card-body">
    <h5 class="id">ID: ${engineer.id}</h5>
    <p class="email">Email: ${engineer.email}</p>
    <p class="github">Github: ${engineer.github}</p>
  </div>
</div>`
};

const internCard = function (intern) {
    return `
    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header">Intern: ${intern.name}</div>
  <div class="card-body">
    <h5 class="id">ID: ${intern.id}</h5>
    <p class="email">Email: ${intern.email}</p>
    <p class="school">School: ${intern.school}</p>
  </div>
</div>`
};

const defaultPage = function(innerHtml) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coder Squad</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  </head>

  <body>
      <main>
          <div class="container">
              <div class="row justify-content-center">
                  ${innerHtml}
              </div>
          </div>
      </main>
      <script
src="https://code.jquery.com/jquery-3.6.0.js"
integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  </body>
  </html>`
};



makePage = (squad) => {
    squadArray = [];
    console.log(squad)

    for (let i = 0; i < squad.length; i++) {
        const employee = squad[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const newManagerCard = managerCard(employee);
            squadArray.push(newManagerCard);
        } else if (role === 'Engineer') {
            const newEngineerCard = engineerCard(employee);
            squadArray.push(newEngineerCard);
        } else if (role === 'Intern') {
            const newInternCard = internCard(employee);
            squadArray.push(newInternCard);
        }
    }
    const squadFull = squadArray.join('')
    const finalPage = defaultPage(squadFull)
    fs.writeFile('./dist/index.html', finalPage, err => {
      if (err) {
          console.log(err);
          return;
      } else {
          console.log('Your team has been manifested into existence.')
      }
  })
}



module.exports = makePage;