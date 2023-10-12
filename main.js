function updateCountry() {
    s = document.getElementById("country-selector")
    i = document.getElementById("plot")
    country = s.value
    if(country === "Select Country"){
        i.src = null
    } else {
        i.src = "./data/plots/" + country + ".html"
        document.getElementById("plot").src = document.getElementById("plot").src
    }

}