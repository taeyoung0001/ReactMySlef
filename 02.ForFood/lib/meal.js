import sql from "better-sqlite3";
const db = sql("meals.db");

//run 은 주입
//all 은 가져오는거
//열만 가져올때는 get

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}
