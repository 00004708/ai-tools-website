async function generateText() {
    let input = prompt("Enter a topic:");
    if (!input) return;

    let response = await fetch(`https://api.openai.com/v1/completions`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer YOUR_API_KEY"
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: input,
            max_tokens: 50
        })
    });

    let data = await response.json();
    alert("AI Response: " + data.choices[0].text);
}
