
const func = async () => {
    const res = await fetch('https://restcountries.eu/rest/v2/alpha/in');
    const india = await res.json();
    console.log(india);
}

func();