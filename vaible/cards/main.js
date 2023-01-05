window.onload = () => {
    const countriesSelectEl = document.getElementById('countries-select');
    const contentEl = document.getElementById('content');
    const countriesApiUrl = 'https://restcountries.eu/rest/v2/all';
    let countriesList = [];
    
    fetch(countriesApiUrl)
      .then(res => res.json())
      .then(data => {
        countriesList = data;
        data.forEach(country => {
          const option = document.createElement('option');
          option.value = country.alpha2Code;
          option.innerText = country.name;
          countriesSelectEl.appendChild(option);
        });
      });
    
    countriesSelectEl.addEventListener('change', e => {
      const countryCode = e.target.value;
      const selectedCountry = countriesList.find(c => c.alpha2Code === countryCode);
      if (selectedCountry) {
        const content = `
          <img src="${selectedCountry.flag}" class="card front" />
          <div class="card back padding">
            <p><u>Capital:</u> ${selectedCountry.capital}</p>
            <p><u>Population:</u> ${selectedCountry.population}</p>
            <p><u>Domain:</u> ${selectedCountry.topLevelDomain}</p>
            <p><u>Phone code:</u> +${selectedCountry.callingCodes[0]}</p>
          </div>
        `;
        contentEl.innerHTML = content;
      }
    });
  }