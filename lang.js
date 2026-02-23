// lang.js
window.LANG = {
  ui: {
    title: "PixelQuest — National Artists",
    subtitle: "Retro RPG • Quiz battles",
    btnAction: "Action",
    btnMenu: "Menu",
    levelUpTitle: "Level Up!",
    levelUpPrompt: "Choose +1 Max HP or +1 Damage"
  },

  artists: [
    { id: "bernal", name: "Ishmael Bernal", short: "Director; Himala (1982)." },
    { id: "roces", name: "Alejandro Roces", short: "Writer; My Brother’s Peculiar Chicken." },
    { id: "romero", name: "Eddie S. Romero", short: "Filmmaker; Ganito Kami Noon." },
    { id: "joya", name: "Jose Joya", short: "Pioneer of abstract expressionism." }
  ],

  // QUESTION BANK
  // kind: 'tf' | 'mcq' | 'id'
  // For 'id', answer can be string or array of acceptable answers (all lowercase is recommended).
  questions: [
    // Ishmael Bernal
    { id: "q_b1", artist: "bernal", kind: "tf", text: "Ishmael Bernal directed Himala.", answer: true },
    { id: "q_b2", artist: "bernal", kind: "mcq", text: "Which film gave Ishmael Bernal international recognition?", choices: ["Himala", "Aguila", "Ganito Kami Noon", "Granadean Arabesque"], answer: "Himala" },
    { id: "q_b3", artist: "bernal", kind: "id", text: "Name a famous film by Ishmael Bernal.", answer: ["himala"] },

    // Alejandro Roces
    { id: "q_r1", artist: "roces", kind: "tf", text: "Alejandro Roces wrote comic stories celebrating Filipino fiestas.", answer: true },
    { id: "q_r2", artist: "roces", kind: "mcq", text: "Which is a work by Alejandro Roces?", choices: ["My Brother’s Peculiar Chicken", "Himala", "Aguila", "Granadean Arabesque"], answer: "My Brother’s Peculiar Chicken" },
    { id: "q_r3", artist: "roces", kind: "id", text: "Give a title by Alejandro Roces.", answer: ["my brother’s peculiar chicken", "brother"] },

    // Eddie S. Romero
    { id: "q_e1", artist: "romero", kind: "tf", text: "Eddie S. Romero was named a National Artist for Cinema.", answer: true },
    { id: "q_e2", artist: "romero", kind: "mcq", text: "Which role did Eddie Romero commonly have?", choices: ["Director", "Painter", "Poet", "Composer"], answer: "Director" },
    { id: "q_e3", artist: "romero", kind: "id", text: "Name a movie by Eddie S. Romero.", answer: ["aguila", "ganito", "aguila"] },

    // Jose Joya
    { id: "q_j1", artist: "joya", kind: "tf", text: "Jose Joya was a pioneer of abstract expressionism in the Philippines.", answer: true },
    { id: "q_j2", artist: "joya", kind: "mcq", text: "Which is a painting by Jose Joya?", choices: ["Granadean Arabesque", "Himala", "Pinulot Ka Lang Sa Lupa", "My Brother’s Peculiar Chicken"], answer: "Granadean Arabesque" },
    { id: "q_j3", artist: "joya", kind: "id", text: "Name one famous work by Jose Joya.", answer: ["granadean", "granadean arabesque"] }
  ]
};
