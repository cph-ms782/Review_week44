//Add imports here
let URLChuck = "https://api.chucknorris.io/jokes/random";
let URLJokes = "https://icanhazdadjoke.com/api";

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

const jokesFacade = () => {

  const getDadJokes = async () => {
    const data = await fetch(URLJokes).then(handleHttpErrors);
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