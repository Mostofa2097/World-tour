fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayCountry(data))



const displayCountry = country => {
    const div = document.getElementById('country');
    for (let i = 0; i < country.length; i++) {
        const countryName = country[i];

        const Div = document.createElement('div');
        Div.className = 'country';


        const countryInfo = `
     <h1 class='country-name'>${countryName.name} </h1>
     <p>${countryName.capital}</p>
    `
        Div.innerHTML = countryInfo;
        div.appendChild(Div);



    //    const h3 = document.createElement('h2');
    //    h3.innerText = countryName.name;
    //    const p = document.createElement('p');
    //    p.innerText= countryName.capital;

    //    countriesDiv.appendChild(h3);
    //    countriesDiv.appendChild(p);

    //    div.appendChild(countriesDiv);



       


       
   }
}
