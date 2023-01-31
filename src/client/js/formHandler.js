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
            document.getElementById('polarity').innerHTML = 'Polarity: '+polarityChecker(data.score_tag);
            document.getElementById("agreement").innerHTML = `Agreement: ${data.agreement}`;
            document.getElementById("subjectivity").innerHTML = `Subjectivity: ${data.subjectivity}`;
            document.getElementById("confidence").innerHTML = `Confidence: ${data.confidence}`;
            document.getElementById("irony").innerHTML = `Irony: ${data.irony}`;
        })

    } else{
        alert('Enter another URL!')
    }
}

const polarityChecker = (score) => {
    let display;
    switch (score){
        case 'P+':
            display = 'strong positive';
            break;
        case 'P':
            display = 'positive';
            break;
        case 'NEW':
            display = 'neutral';
            break;
        case 'N':
            display = 'negative';
            break;
        case 'N+':
            display = 'strong negative';
            break;
        case 'NONE':
            display = 'no sentiment';
    }
    return display.toUpperCase();
}

export { handleSubmit }
export { polarityChecker }
