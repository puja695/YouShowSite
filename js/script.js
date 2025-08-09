function startExperience() {
    const music = document.getElementById("bgMusic");
    music.volume = 0.3;
    music.play().catch(() => {
        alert("Click anywhere to enable sound");
    });
    login();
}

function login() {
    const username = document.getElementById("username").value;
    if (username.trim() === "") {
        alert("Enter your name...");
        return;
    }
    window.location.href = "home.html";
}

document.getElementById("bgUpload")?.addEventListener("change", function() {
    const reader = new FileReader();
    reader.onload = function(e) {
        document.body.style.backgroundImage = `url('${e.target.result}')`;
        document.body.style.backgroundSize = "cover";
    };
    reader.readAsDataURL(this.files[0]);
});
