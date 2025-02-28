var istatus = document.querySelector("h5")

var addFriend = document.querySelector("#add")

var button = document.querySelector("button")

var flag = 0 

addFriend.addEventListener("click", function(){
    if(flag == 0){
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        flag = 1
        button.innerHTML = "Remove Friend"
    }
    else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        flag = 0
        button.innerHTML = "Add Friend"
    }
})

