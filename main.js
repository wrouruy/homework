console.error('task 12:')
function calcDiscrim(a, b, c) {
    let discriminant = b * b - 4 * a * c;
    return discriminant;
}

let a = 2;
let b = 6;
let c = 4;
let discriminant = calcDiscrim(a, b, c);
console.log(`дискримінант дорівнює: ${discriminant}`);


console.error('task 13:')
function letQuadratic(a, b, c) {
    let D = b * b - 4 * a * c;
  
    if (D > 0) {
      let x1 = (- b + Math.sqrt(D)) / (2 * a);
      let x2 = (- b - Math.sqrt(D)) / (2 * a);
      return ( x1, x2 );
    } else if (D === 0) {
      let x = -b / (2 * a);
      return ( x );
    }
  }
  console.log('чесно, я не знаю як вона робить, і чи повина вона робити вот-так, ну але по коді все має бути логічно')
  let result = letQuadratic(-5, 6, 9);
  console.log(result);
  



function button(){
    window.location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0';
}