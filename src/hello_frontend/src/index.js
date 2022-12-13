import { hello_backend } from "../../declarations/hello_backend";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with hello actor, calling the greet method
  const greeting = await hello_backend.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
