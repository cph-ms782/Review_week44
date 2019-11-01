//Add imports here
let URLCountries = "http://localhost:3333/countries";
let URLLabels = "http://localhost:3333/labels";

function makeOptions(method, body) {
  var opts = {
    method: method,
    headers: {
      "Content-type": "application/json"
    }
  };
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
}

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

const countryFacade = () => {

  const getLabels = async () => {
    const data = await fetch(URLLabels).then(handleHttpErrors);
    return data;
  }

  const getCountries = async () => {
    const data = await fetch(URLCountries).then(handleHttpErrors);
    return data;
  }

  return {
    getLabels,
    getCountries
  }
}

export default countryFacade();