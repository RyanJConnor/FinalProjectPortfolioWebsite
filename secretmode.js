     const konamiCode = [
            "ArrowUp", "ArrowUp",
            "ArrowDown", "ArrowDown",
            "ArrowLeft", "ArrowRight",
            "ArrowLeft", "ArrowRight",
            "b", "a"
        ];

        let userInput = [];
        let secretActive = false;

        const message = document.getElementById("secret-message");

        document.addEventListener("keydown", function (e) {

            if (!secretActive) {
                // Track input for Konami Code
                userInput.push(e.key);

                if (userInput.length > konamiCode.length) {
                    userInput.shift();
                }

                if (JSON.stringify(userInput).toLowerCase() === JSON.stringify(konamiCode).toLowerCase()) {
                    // Activate Easter egg
                    document.body.classList.add("secret-mode");
                    message.classList.add("show");
                    secretActive = true;

                    // Automatically remove popup after animation
                    setTimeout(() => {
                        message.classList.remove("show");
                    }, 2500);
                }

            } else {
                // Secret mode is active → pressing any key exits it
                document.body.classList.remove("secret-mode");
                message.classList.remove("show");
                secretActive = false;
                userInput = []; // reset input
            }
        });