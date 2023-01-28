async function createAdviceGenerator (){
    const url = "https://api.adviceslip.com/advice"
    const response = await fetch(url)
    return await response.json()
}

async function generateAdvice(slip_id){
    const url = `https://api.adviceslip.com/advice/${slip_id}`
    const response = await fetch(url)
    return await response.json()
}

async function generateARandomAdvice(){
    const generator = await createAdviceGenerator()
    const advice = await generateAdvice(generator.slip.id)
    const textAdvice = advice.slip.advice
    const idAdvice= advice.slip.id
    const title = document.getElementById('title')
    const showAdvice= document.getElementById('advice')
    showAdvice.textContent = textAdvice
    title.textContent = `ADVICE # ${idAdvice}`
    
}


// tirarUmaCartaAleatoriaEmbaralhada ()

 const button = document.getElementById('button')

button.addEventListener('click', function(){
    generateARandomAdvice();
 })

 
 