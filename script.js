const text = document.getElementById('text')

const answer = document.getElementById('answer')

const riddleanswer = document.getElementById('riddleanswer')

const factbtn = document.getElementById('factbtn')


// facts
const getFacts = async () =>{

    text.innerHTML ='updating...';
    const response = await fetch("https://api.api-ninjas.com/v1/facts?limit=1",
    {
        method :"GET",
        headers : {
            "X-Api-key" : "p0HPB+kb9eFgXr6GoRFFvQ==rwyXK6HBD53l0ZdQ"
        }
    })

    const factData = await response.json()
    console.log(factData)

    text.innerHTML = factData[0].fact
    answer.style.cssText ="display : none; "
    riddleanswer.style.display = "none"
}

getFacts();


// quotes

const getQuotes = async () =>{
    text.innerHTML ='updating...';
    const quotesResponse =  await fetch("https://api.api-ninjas.com/v1/quotes?category=" , {
        method : "GET",
        headers : {
            "X-Api-key" : "p0HPB+kb9eFgXr6GoRFFvQ==rwyXK6HBD53l0ZdQ"
        }
    })
    const quotesData = await quotesResponse.json()
    console.log(quotesData)
    text.innerHTML =quotesData[0].quote
    answer.style.cssText ="display : none; "
    riddleanswer.style.display = "none"


}
getQuotes();

// jokes

const getJokes = async () =>{
    text.innerHTML ='updating...';

    const jokesRepsonse = await fetch("https://api.api-ninjas.com/v1/jokes?limit=" , {
        method:"GET",
        headers: {
            "X-Api-key" : "p0HPB+kb9eFgXr6GoRFFvQ==rwyXK6HBD53l0ZdQ"
        }
    })
    const jokesData =await jokesRepsonse.json()
    console.log(jokesData)
    text.innerHTML =jokesData[0].joke
    answer.style.cssText ="display : none; "
    riddleanswer.style.display = "none"
}

getJokes();


// RIDDLES 

const getRiddles = async () =>{
    text.innerHTML ='updating...';

    const riddleResponse = await fetch("https://api.api-ninjas.com/v1/riddles",{
        method:"GET",
        headers: {
            "X-Api-key" : "p0HPB+kb9eFgXr6GoRFFvQ==rwyXK6HBD53l0ZdQ"
        }
    })
    const riddleData = await riddleResponse.json()
    console.log(riddleData);
    text.innerHTML = riddleData[0].question
    answer.style.cssText ="display : block;"
    //riddleanswer.style.display = "none"
    getAnswer(riddleData);
    return riddleData
} 

const getAnswer = (riddleData1) =>{
    
    riddleanswer.innerHTML = riddleData1[0].answer
}
getRiddles()

const getAnsData = () =>{
        riddleanswer.style.display = "block"
}
