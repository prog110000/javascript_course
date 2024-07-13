console.log("Before");


getUser(1, getRepository);

function getRepository(user) {
    getRepositories(user.gitHubUsername, Displayrepo)
}

function Displayrepo(repos) {
    console.log("repos", repos);
}

console.log("After");

function getUser(id, callback) {
    setTimeout(() => {
        console.log("Reading a user from a database...");
        callback({id:id, gitHubUsername: "mosh"});
    }, 2000)
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log("Calling Github API...");
        callback(['repo1','repo2','repo3']);
    }, 2000);
}