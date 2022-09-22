import inquirer from 'inquirer';


const chosenNumbers: number[] = [];
const randomNumbers: number[] = [];
const correctNumbers: number[] = [];

const startApp = async (): Promise<void> => {
  do {
    const result = await inquirer.prompt([{
      name: 'number',
      type: 'input',
      message: 'Podaj liczbę...'
    }]);

    if (validateInput(result.number)) {
      chosenNumbers.push(parseInt(result.number));
    }
  } while (chosenNumbers.length < 6);

  printResult();
};

const validateInput = (input: string): boolean => {
  const number = parseInt(input);
  if (number < 1 || number > 49) {
    console.log('Choose number from 1 to 49');
    return false;
  } else if (chosenNumbers.includes(number)) {
    console.log('You have already chosen that number');
    return false;
  }
  return true;
};

const randomNewNumber = (): number => {
    return Math.floor(Math.random() * 49) + 1;
};

const validateRandomNumber = (number: number): boolean => {
  if (randomNumbers.includes(number)) {
    return false;
  } else return true;
};

do {
    const number: number = randomNewNumber();
    if (validateRandomNumber(number)) {
        randomNumbers.push(number);
    }
} while (randomNumbers.length < 6);

const checkTheSameNumbers = () => {
  let result:number = 0;
  for (let i = 0; i < randomNumbers.length; i++) {
    if (chosenNumbers.includes(randomNumbers[i])) {
      correctNumbers.push(randomNumbers[i]);
      result++;
    }
  }
  return result;
};

const printResult = (): void => {
  console.log(`You have ${checkTheSameNumbers()} correct ${correctNumbers.length < 1 ? 'number' : 'numbers'} ${correctNumbers.length === 0 ? '' : `=> ${correctNumbers}`}`);
};

startApp();