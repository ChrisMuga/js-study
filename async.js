const echoDetails = (person) => {
    return new Promise(resolve => {
        console.log("computing...")
        setTimeout(()=>{
            resolve(person)
        }, 2000)
    })
}

async function displayDetails(personDetails){
    const details = await echoDetails(personDetails)
    console.log(details)
}

const personDetails = {
    name: "Kendrick Lamar",
    location: "Compton"
}
displayDetails(personDetails)