let button = document.querySelectorAll(".boxcomp");

        const DisableButton = () => {
            button.forEach((box) => {
                if (box.innerText == "") {
                    box.disabled = true;
                }
            })
        }

        const EnableButton = () => {
            button.forEach((box) => {
                if (box.innerText == "X") {
                    box.disabled = false;
                }
            })
        }

        const clickGame=(element)=>{
            const randomNumber = Math.floor(Math.random() * 64)+1;
                const buttonbyId = document.getElementById(randomNumber);
                buttonbyId.innerText = "X";
                element.innerText = "";
                DisableButton();
                EnableButton();
        }

        // disableing the button
        DisableButton();

        // main function
        button.forEach((element) => {
            element.addEventListener("click", () => {
                clickGame(element);
            });

        });