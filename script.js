
const spans = document.querySelector(".check");


const check = () => {

    const pass = document.getElementById("password").value;
    const confirmPass = document.getElementById("confirmPass").value;
    const form = document.getElementById("forms");

    if (pass.length > 0) {
        if (pass != confirmPass) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
            })

            spans.style.backgroundColor = "red";
            spans.style.fontSize = "15px";
            spans.style.color = "white";
            spans.innerHTML = "Password do not match!";
        } else {
            form.addEventListener('submit', (e) => {
                e.stopPropagation();
            })

            spans.style.backgroundColor = "green";
            spans.innerHTML = "Password matched!"
            
            
        }
    }
}

