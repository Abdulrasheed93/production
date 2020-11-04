console.log('before');
getUser(1, function(user) {
    getRepositories(user.gitHubUsername,function (repos) {
        getCommits(repos[0], (commits) =>{
            console.log(commits);
        });
    });
});

console.log('after');

//setting aan id
function getUser(id) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('reading from database');
           resolve({id: id, gitHubUsername: 'ade'});
        }, 2000);
    });
    
};

//setting a repo
function getRepositories(username) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('calling api');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });
    
};

function getCommits(repo) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('calling github api..');
            resolve(['commit']);
        }, 2000);
    });
   
};

getUser(2)
.then(user => getRepositories(user.gitHubUsername))
.then(repos => getCommits(repos[0]))
.then(commits => console.log('commits', commits))
.catch(err => console.log('error', err.message));