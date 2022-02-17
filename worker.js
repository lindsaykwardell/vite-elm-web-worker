import app from './elm-worker/elm-worker.es.js'

onmessage = function ({ data }) {
  const { type, value } = data;

  if (type === "increment") {
    app.ports.increment.send(value);
  }

  if (type === "decrement") {
    app.ports.decrement.send(value);
  }
};

app.ports.sendCount.subscribe(function (int) {
  console.log(int);
  postMessage(int);
});
