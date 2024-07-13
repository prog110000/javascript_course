console.log("Before");

/*function getRepository(user) {
    getRepositories(user.gitHubUsername, Displayrepo)
}

function Displayrepo(repos) {
    console.log("repos", repos);
}*/
/*const p = getUser(1)
p.then(user => console.log(user));*/
getUser(1)
    // .then(user => console.log(user))
    .then(user => getRepositories(user.gitHubUsername))
    .then(repos => console.log(repos));

console.log("After");

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Reading a user from a database...");
            resolve({id:id, gitHubUsername: "mosh"});
        }, 2000)
    })
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Calling Github API...");
            resolve(['repo1','repo2','repo3']);
        }, 2000);
    })
    
}