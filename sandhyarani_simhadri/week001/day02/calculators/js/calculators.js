function squareNumber(num)
{
  const squaredNum =  Math.ceil(num * num) ;
  console.log("the result of squaring the " + num + " is " + squaredNum);
  return squaredNum;
};
squareNumber(3);
squareNumber(2.5);
squareNumber(9);
squareNumber(15.6);

 function halfNumber(num)
{
  const half = Math.ceil(num / 2);
  console.log(`Half of ${num} is ${half}`);
  return half;
};
halfNumber(5);
halfNumber(6);
halfNumber(6.5);

function percentOf(num1, num2)
{
  const percent = Math.ceil((num1 / num2) * 100);
  console.log(`${num1} is ${percent}% of ${num2}`);
  return percent;
};
percentOf(4,2);
percentOf(6,12);
percentOf(47,52);

 function areaOfCircle(radius)
 {
   const area = Math.ceil(3.142 * radius * radius);
   console.log(`the area of the circle with radius ${radius} is ${area}`);
   return area;
 };
 areaOfCircle(4);
 areaOfCircle(5.7);
 areaOfCircle(9);

function toggleAround(num)
{
  let half = halfNumber(num);
  let square = squareNumber(half * half);
  let area = areaOfCircle(Math.ceil(3.142 * square * square));
  let result = percentOf(square, area);
}
toggleAround(5);
