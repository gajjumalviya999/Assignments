const fetchCountry = async (alpha3Code) => {
    try {
        const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

const fetchNe = async () => {
    const India = fetchCountry("ind");
    const nc = await India.borders.map((border) => fetchCountry(border));
    console.log(nc);
}

fetchNe();
