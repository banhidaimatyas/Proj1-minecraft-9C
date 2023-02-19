// quiz
var quiz = {
  data: [
    {
      q: "Melyik blokkot tudja kitörni az endersárkány?",
      o: ["obszidián", "bedrock", "endkő", "zúzottkő"],
      a: 3,
    },
    {
      q: "Melyik a jobb páncél, az arany vagy a lánc?",
      o: ["arany", "lánc", "ugyanolyanok", "nem tudom"],
      a: 1,
    },
    {
      q: "Mi nem kell a napelem kraftolásához?",
      o: ["vöröskő", "kvarc", "üveg", "fadeszka lap"],
      a: 0,
    },
    {
      q: "Körülbelül havonta hány millióan játszák a játékot?",
      o: ["60", "300", "50", "100"],
      a: 3,
    },
    {
      q: "A játék kezdeti szakaszában hogyan hívták a játékot?",
      o: ["Minecraft", "Infinimer", "Cave Game", "Block World"],
      a: 2,
    },
    {
      q: "Hány biom van a játékban?",
      o: ["60", "79", "98", "67"],
      a: 1,
    },
    {
      q: "Mitől félnek a creeperek?",
      o: ["ocelotok", "kutyák", "papagájok", "csontvázak"],
      a: 0,
    },
    {
      q: "Mikor adták ki a játékot?",
      o: ["2010", "2008", "2011", "2012"],
      a: 2,
    },
    {
      q: "Melyik az a tárgy, amely a legtöbb barkácsolási recepthez kell?",
      o: ["vas", "zúzottkő", "vöröskő", "fadeszka"],
      a: 0,
    },
    {
      q: "Mennyi tapasztalattal jár az endersárkány megölése?",
      o: ["3000", "5000", "300", "12000"],
      a: 3,
    },
    {
      q: "Melyik a legritkább blokk a játékban?",
      o: ["endportál", "netherite", "sárkánytojás", "elytra"],
      a: 2,
    },
    {
      q: "Melyik koordináta alatt található gyémánt?",
      o: ["y=9", "y=15", "y=20", "y=11"],
      a: 1,
    },
  ],

  hWrap: null,
  hQn: null,
  hAns: null,

  now: 0,
  score: 0,

  init: () => {
    quiz.hWrap = document.getElementById("quizWrap");

    quiz.hQn = document.createElement("div");
    quiz.hQn.id = "quizQn";
    quiz.hWrap.appendChild(quiz.hQn);

    quiz.hAns = document.createElement("div");
    quiz.hAns.id = "quizAns";
    quiz.hWrap.appendChild(quiz.hAns);

    quiz.draw();
  },

  draw: () => {
    quiz.hQn.innerHTML = quiz.data[quiz.now].q;

    quiz.hAns.innerHTML = "";
    for (let i in quiz.data[quiz.now].o) {
      let radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "quiz";
      radio.id = "quizo" + i;
      quiz.hAns.appendChild(radio);
      let label = document.createElement("label");
      label.innerHTML = quiz.data[quiz.now].o[i];
      label.setAttribute("for", "quizo" + i);
      label.dataset.idx = i;
      label.addEventListener("click", () => {
        quiz.select(label);
      });
      quiz.hAns.appendChild(label);
    }
  },

  select: (option) => {
    let all = quiz.hAns.getElementsByTagName("label");
    for (let label of all) {
      label.removeEventListener("click", quiz.select);
    }

    let correct = option.dataset.idx == quiz.data[quiz.now].a;
    if (correct) {
      quiz.score++;
      option.classList.add("correct");
    } else {
      option.classList.add("wrong");
    }

    quiz.now++;
    setTimeout(() => {
      if (quiz.now < quiz.data.length) {
        quiz.draw();
      } else {
        quiz.hQn.innerHTML = `${quiz.score} jó válaszod született a ${quiz.data.length} kérdésből.`;
        quiz.hAns.innerHTML = "";
      }
    }, 1000);
  },

  reset: () => {
    quiz.now = 0;
    quiz.score = 0;
    quiz.draw();
  },
};
window.addEventListener("load", quiz.init);
