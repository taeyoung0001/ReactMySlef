//여러가지의 meals를 출력하는 컴포넌트
import MealItem from "./meal-item";
import classes from "./meals-gird.module.css";

const MealsGrid = ({ meals }) => {
  console.log(meals);
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => {
        return (
          <li key={meal.id}>
            <MealItem {...meal} />
          </li>
        );
      })}
    </ul>
  );
};

export default MealsGrid;

// 왜 스프레드 연산자를 썼는지 gpt에게 물어봄
// 스프레드 연산자({...meals})는 meals 객체의 모든 속성을 MealItem 컴포넌트의 개별적인 props로 전달하기 위해 사용됩니다.
// 이렇게 하면 각 속성에 대해 일일이 props를 전달하지 않고, meals 객체의 속성을 한 번에 처리할 수 있습니다.
