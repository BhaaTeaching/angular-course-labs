const FirstNumber = document.getElementById('first-number') as HTMLInputElement | null;
const SecondNumber = document.getElementById('second-number') as HTMLInputElement | null;
const FinalResult = document.getElementsByClassName('result') as HTMLCollectionOf<Element> | null;
const HistoryData = document.getElementsByClassName('history') as HTMLCollectionOf<Element> | null;
const Footer = document.getElementById('footer-style') as HTMLInputElement | null;
let historyOperation : string[] = [];

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
  DisplayHistory(historyOperation);
}

const Add = () => {
  const first: string = FirstNumber?.value || '0';
  const second: string = SecondNumber?.value || '0';
  console.log('first = ', first, 'second', second)
  const result = parseInt(first) + parseInt(second);
  saveHistory(first, '+', second, result);
  return result;
}

const Sub = () => {
  const first: string = FirstNumber?.value || '0';
  const second: string = SecondNumber?.value || '0';
  const result = parseInt(first) - parseInt(second);
  saveHistory(first, '-', second, result);
  return result;
}

const Multi = () => {
  const first: string = FirstNumber?.value || '0';
  const second: string = SecondNumber?.value || '0';
  const result = parseInt(first) * parseInt(second);
  saveHistory(first, '*', second, result);
  return result;
}

const Div = () => {
  const first: string = FirstNumber?.value || '0';
  const second: string = SecondNumber?.value || '0';
  const result = parseInt(first) / parseInt(second);
  saveHistory(first, '/', second, result);
  return result;
}

const DisplayResult = (result: number) => {
  const newLocal = FinalResult?.item(0) || null;
  if (newLocal !== null) {
    newLocal.innerHTML = result.toString();
  }
}

const DisplayHistory = (result: string[]) => {
  const newLocal = HistoryData?.item(0) || null;
  console.log('newLocal == : result', newLocal, result)
  if (newLocal !== null) {
    console.log('newLocal : ', newLocal)
    newLocal.innerHTML = result.toString();
    console.log('here : ', newLocal.innerHTML)
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

const saveHistory = (firstNumber, sign, secondNumber, result) => {
historyOperation.push(`${firstNumber} ${sign} ${secondNumber} = ${result}    `);
console.log('history arry: ', historyOperation)
}