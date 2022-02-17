import "./style.css";
import { Elm } from "./src/Main.elm";
import ElmWorker from "./worker?worker";

const root = document.querySelector("#app div");

const worker = new ElmWorker();
const app = Elm.Main.init({ node: root });

app.ports.increment.subscribe((int) =>
  worker.postMessage({
    type: "increment",
    value: int,
  })
);

app.ports.decrement.subscribe((int) =>
  worker.postMessage({
    type: "decrement",
    value: int,
  })
);

worker.onmessage = function ({ data }) {
  app.ports.receiveCount.send(data);
};
