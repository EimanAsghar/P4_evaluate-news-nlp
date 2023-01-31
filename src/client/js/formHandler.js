const post = async(url = '', data= {}) =>{
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try{
        return await response.json()
    } catch(error){
        console.log(error)
    }
}

const handleSubmit = async() => {
    let url  = document.getElementById('url').value
    if(Client.checkURL(url)){
        post('http://localhost:8081/sendData', {url: url}).then(data =>{
            document.getElementById('polarity').innerHTML =  `Polarity: ${data.score_tag}`;
            document.getElementById("agreement").innerHTML = `Agreement: ${data.agreement}`;
            document.getElementById("subjectivity").innerHTML = `Subjectivity: ${data.subjectivity}`;
            document.getElementById("confidence").innerHTML = `Confidence: ${data.confidence}`;
            document.getElementById("irony").innerHTML = `Irony: ${data.irony}`;
        })

    } else{
        alert('Enter another URL!')
    }
}

export { handleSubmit }
