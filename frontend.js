document.getElementById("emailForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const theme = document.getElementById("theme").value;
    const receiver = document.getElementById("receiver").value;

    try {
        const response = await fetch("/generate-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ theme, receiver }),
        });
        const { email } = await response.json();
        document.getElementById("generatedEmail").textContent = email;
    } catch (error) {
        console.error("Error:", error);
    }
});
