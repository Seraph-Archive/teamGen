const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern')
const makePage = require('./src/makePage')

const squad = []


const spawnManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Manager?'
        },
        {
            type: 'input',
            name: 'ID',
            message: 'What is the ID of the Manager?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the Manager?'
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is the office number of the Manager?'
        },
    ])
    .then((managerInfo) => {
    const { name, ID, email, office } = managerInfo;
    const newManager = new Manager(name, ID, email, office);
    console.log(newManager);
    squad.push(newManager);
})
};

const spawnEmployee = async () => {
    await inquirer.prompt([
        {
            type: 'list',
            name: 'select',
            message: 'What type of Employee would you like to add?',
            choices: [{ name: 'Engineer', value: 0 }, { name: 'Intern', value: 1 }]
        }
    ])
    .then((responses) => {
    if (responses.select === 0) {
        spawnEngineer = async () => {
            return await inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the name of the Engineer?'
                },
                {
                    type: 'input',
                    name: 'ID',
                    message: 'What is the ID of the Engineer?'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is the email of the Engineer?'
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is the Github username of the Engineer?'
                },
            ])
                .then((engineerInfo) => {
                    const { name, ID, email, github } = engineerInfo;
                    const newEngineer = new Engineer(name, ID, email, github);
                    console.log(newEngineer);
                    squad.push(newEngineer);
                });
        };
    } else if (responses.select === 1) {
        spawnIntern = async () => {
            const internInfo = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the name of the Intern?'
                },
                {
                    type: 'input',
                    name: 'ID',
                    message: 'What is the ID of the Intern?'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is the email of the Intern?'
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'What school does the Intern go to?'
                },
            ]);
            const { name: name_1, ID: ID_1, email: email_1, school } = internInfo;
            const newIntern = new Intern(name_1, ID_1, email_1, school);
            console.log(newIntern);
            squad.push(newIntern);
        };
    }
})
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'rerun',
            message: 'Add another employee?'
        }
    ])
        .then((confirm) => {
            if (confirm.rerun) {
                spawnEmployee();
            }
        });
    
    }

const writePage = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your team has been manifested into existence.')
        }
    })
}
spawnManager()
    .then(spawnEmployee)
    .then(squad => {
        return makePage(squad)
    })
    .then(page => {
        return writePage(page)
    })
