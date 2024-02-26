const names = ["Ashiush", "Sam", "Dhiraj", "Sagar"]

        let ulNames = document.getElementById("namelist")

        for (let name of names) {
            let liName = document.createElement('li')
            liName.textContent = name
            ulNames.appendChild(liName)
        }


        let a = 43
        let b = 65
        const sum = a + b
        console.log(sum)
        let h1Sum = document.getElementById('sum')
        h1Sum.textContent = sum
