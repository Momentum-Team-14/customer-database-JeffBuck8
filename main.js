const container = document.querySelector(".container")
console.log(customers);
function showCustomerName(customerArray) {
    for (let customer of customerArray){
        let customerDiv = document.createElement("div");
        customerDiv.classList.add("customer")

        let nameDiv = document.createElement("div")
        nameDiv.classList.add("name")
        nameDiv.innerText = `${customer.name.first} ${customer.name.last}`
        
        let imageDiv = document.createElement("img")
        imageDiv.classList.add("image")
        imageDiv.src = `${customer.picture.large}`
        
        let picImg = document.createElement('img')
        picImg.classList.add('pic')
        picImg.src = `${customer.picture.large}`
        customerDiv.appendChild(imageDiv)
        customerDiv.appendChild(nameDiv)
        
        customerDiv.appendChild(nameDiv)
        container.appendChild(customerDiv)
        let emailDiv = document.createElement("div")
        emailDiv.classList.add("email")
        emailDiv.innerText = `${customer.email}`
        customerDiv.appendChild(emailDiv)

        let streetDiv = document.createElement("div")
        streetDiv.classList.add("street")
        streetDiv.innerText = `${customer.location.street.number} ${customer.location.street.name}`
        customerDiv.appendChild(streetDiv)

        let stateAbbrev = nameToAbbr (`${customer.location.state}`)
        let stateDiv = document.createElement("div")
        stateDiv.classList.add("state")
        stateDiv.innerText = `${customer.location.city} ${stateAbbrev} ${customer.location.postcode}`
        customerDiv.appendChild(stateDiv)
        customerDiv.appendChild(streetDiv)
        customerDiv.appendChild(stateDiv)

        let birthDate = new Date(`${customer.dob.date}`).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})
        
        let dobDiv = document.createElement('div')
        dobDiv.innerText = `DOB: ${birthDate}`
        customerDiv.appendChild(stateDiv)
        customerDiv.appendChild(dobDiv)

        let signUpDate = new Date(`${customer.registered.date}`).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})
        let signUpDiv = document.createElement("div")
        signUpDiv.classList.add("signUpDiv")
        signUpDiv.innerText = `Customer since: ${signUpDate}`
        customerDiv.appendChild(signUpDiv)
        customerDiv.appendChild(dobDiv)
    }

}

showCustomerName(customers);