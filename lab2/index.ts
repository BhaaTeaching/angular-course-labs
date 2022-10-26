const FirstNumber = document.getElementById('first-number') as HTMLInputElement | null;
const SecondNumber = document.getElementById('second-number') as HTMLInputElement | null;
const FinalResult = document.getElementsByClassName('result') as HTMLCollectionOf<Element> | null;
const Footer = document.getElementById('footer-style') as HTMLInputElement | null;

const OnSignChoose = (sign: string) => {
  console.log("sign = ", sign);
  let result: number;
  switch (sign) {
    case '+':
      result = Add();
      break;
    case '-':
      result = Sub();
      break;
    case '*':
      result = Multi();
      break;
    case '/':
      result = Div();
      break;
    default:
      result = 0;
      break;
  }
  DisplayResult(result);
}

const Add = () => {
  const first: string = FirstNumber?.value || '0';
  const second: string = SecondNumber?.value || '0';
  console.log('first = ', first, 'second', second)
  return parseInt(first) + parseInt(second);
}

const Sub = () => {
  const first: string = FirstNumber?.value || '0';
  const second: string = SecondNumber?.value || '0';
  return parseInt(first) - parseInt(second);
}

const Multi = () => {
  const first: string = FirstNumber?.value || '0';
  const second: string = SecondNumber?.value || '0';
  return parseInt(first) * parseInt(second);
}

const Div = () => {
  const first: string = FirstNumber?.value || '0';
  const second: string = SecondNumber?.value || '0';
  return parseInt(first) / parseInt(second);
}

const DisplayResult = (result: number) => {
  const newLocal = FinalResult?.item(0) || null;
  if (newLocal !== null) {
    newLocal.innerHTML = result.toString();
  }
}

const setFoter = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();
  const formattedToday = dd + '/' + mm + '/' + yyyy;
  if (Footer !== null) {
    Footer.innerText = 'Bhaa Rizik @ ' + formattedToday;
  }
}