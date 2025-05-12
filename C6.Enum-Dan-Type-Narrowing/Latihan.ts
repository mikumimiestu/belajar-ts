enum Level {
  Easy = "Mudah",
  Medium = "Sedang",
  Hard = "Sulit"
}

function tampilLevel(level: Level): void {
  console.log(`Level permainan: ${level}`);
}

tampilLevel(Level.Hard);
