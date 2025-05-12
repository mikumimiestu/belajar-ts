function ambilItemPertama<T>(items: T[]): T {
  return items[0];
}

console.log(ambilItemPertama<string>(["apel", "jeruk", "mangga"])); // apel
console.log(ambilItemPertama<number>([10, 20, 30])); // 10

// Aman banget, karena T[] otomatis kasih tahu kalau hasil return juga T