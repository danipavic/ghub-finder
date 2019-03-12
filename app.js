//init github
const github = new Github;

//init UI
const ui = new UI;
//search input
const searchUser = document.getElementById('searchUser');

//search input event
searchUser.addEventListener('keyup', (e) => {
    //get input text
    const userText = e.target.value;
    if (userText !== ''){
        //make http call
        github.getUser(userText)
            .then(data => {
                // console.log(data.name); MOJ NACIN
                /* if(data.message === 'Not Found') {
                    //Show alert
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    //Show profile
                   
                    ui.showProfile(data);
                } */
                if(data.profile.message === 'Not Found') {
                    //Show alert
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    //Show profile                  
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        //Clear profile
        ui.clearProfile();
    }
});