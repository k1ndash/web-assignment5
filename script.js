const userProfile = {
    name: "Tolendi Meiirzhan",
    birthYear: 2007,
    isDeveloper: true,
    hobbies: ["Gaming", "Music", "Movies"]
};

function displayProfile() {
    const currentYear = new Date().getFullYear();
    const age = currentYear - userProfile.birthYear;
    const hobbyCount = userProfile.hobbies.length;

    document.getElementById("profileName").textContent = userProfile.name;
    document.getElementById("profileBirthYear").textContent = userProfile.birthYear;
    document.getElementById("profileDeveloper").textContent = userProfile.isDeveloper ? "Yes" : "No";
    document.getElementById("profileAge").textContent = age;
    document.getElementById("hobbyCount").textContent = hobbyCount;

    console.log("User profile:", userProfile);
    console.log("Age:", age);
    console.log("Number of hobbies:", hobbyCount);
}

const hobbyList = document.getElementById("hobbyList");

for (let i = 0; i < userProfile.hobbies.length; i++) {
    const li = document.createElement("li");
    li.textContent = userProfile.hobbies[i];
    hobbyList.appendChild(li);
}

document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const birthYear = Number(document.getElementById("birthYear").value);
    const profileMessage = document.getElementById("profileMessage");

    if (username === "" || birthYear < 1900 || birthYear > new Date().getFullYear()) {
        profileMessage.textContent = "Please enter a valid name and birth year.";
        profileMessage.style.color = "#c44747";
        return;
    }

    userProfile.name = username;
    userProfile.birthYear = birthYear;
    displayProfile();

    profileMessage.textContent = "Profile updated successfully!";
    profileMessage.style.color = "#24643d";
});

document.getElementById("addButton").addEventListener("click", function() {
    const hobbyInput = document.getElementById("newHobby");
    const newHobby = hobbyInput.value.trim();
    const hobbyMessage = document.getElementById("hobbyMessage");

    if (newHobby === "") {
        hobbyMessage.textContent = "Please enter a hobby first.";
        return;
    }

    const li = document.createElement("li");
    li.textContent = newHobby;
    hobbyList.appendChild(li);
    userProfile.hobbies.push(newHobby);

    hobbyInput.value = "";
    hobbyMessage.textContent = "Hobby added.";
    displayProfile();
});

document.getElementById("removeButton").addEventListener("click", function() {
    const hobbyMessage = document.getElementById("hobbyMessage");

    if (hobbyList.lastElementChild) {
        hobbyList.removeChild(hobbyList.lastElementChild);
        userProfile.hobbies.pop();
        hobbyMessage.textContent = "Last hobby removed.";
        displayProfile();
    } else {
        hobbyMessage.textContent = "The list is empty.";
    }
});

displayProfile();
