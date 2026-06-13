let score = Number(localStorage.getItem("score")) || 0;

function answer(points, next){
  score += points;
  localStorage.setItem("score", score);
  window.location.href = next;
}

function finish(points){
  score += points;
  localStorage.setItem("score", score);
  window.location.href = "result.html";
}
