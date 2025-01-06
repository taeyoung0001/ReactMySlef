import Link from "next/link";
import { Suspense } from "react";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-gird";
import { getMeals } from "@/lib/meal";

//데이터 불러오기
const Meals = async () => {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
};

const MealsPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}> Loading ...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};
export default MealsPage;

//initdb.js 를 만들고 better sqlite3 설치하고 파일 만들고 그걸 node initdb.js로 실행함
//그럼 meals.db가 만들어짐짐
