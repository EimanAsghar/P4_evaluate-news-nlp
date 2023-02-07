
const post = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    try {

        return await response.json()

    } catch (error) {

        console.log(error)
    }
}

function handleSubmit(event) {

    event.preventDefault()

    let url = document.getElementById('url').value
    if (Client.checkURL(url)) {
        post('http://localhost:8080/sendData', { url: url })

        .then(data => {
            console.log(data)
             console.log("TEST")
            document.getElementById('polarity').innerHTML = data.score_tag;
            document.getElementById("confidence").innerHTML = data.confidence;
            document.getElementById("irony").innerHTML = data.irony;
            document.getElementById("subjectivity").innerHTML = data.subjectivity;
        })
        console.log("sent to html")
    } else {
        alert('Enter another URL!')
    }
}

export { handleSubmit }

