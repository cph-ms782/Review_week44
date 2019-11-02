//Add imports here
let URLChuck = "https://api.chucknorris.io/jokes/random";
let URLJokes = "https://icanhazdadjoke.com";

function makeOptions(method, body) {
  var opts = {
    method: method,
    headers: {
      Accept: 'application/json'
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

const jokesFacade = () => {

  const getDadJokes = async () => {
    const options = makeOptions("GET"); // also insert relevant header
    const data = await fetch(URLJokes, options).then(handleHttpErrors);
    return data;
  }

  const getChuckFacts = async () => {
    const data = await fetch(URLChuck).then(handleHttpErrors);
    return data;
  }

  return {
    getDadJokes,
    getChuckFacts
  }
}

export default jokesFacade();