// Функция определения правильных, неправильных букв,
// соотвествия букв конечному ответу и количества неправильных букв
const letterCounting = (currentObject, chekedletter) => {
  const arrayOfcurrentAnswer = currentObject.answer.split('');
  const correctLetter = chekedletter.filter((item) => arrayOfcurrentAnswer.includes(item));
  const inCorrectLetter = chekedletter.filter((item) => !arrayOfcurrentAnswer.includes(item));
  const correctlyRound = correctLetter.length === currentObject.uniqueValues.length;
  const inCorrectLetterCount = inCorrectLetter.length;
  return {
    correctLetter,
    inCorrectLetter,
    inCorrectLetterCount,
    correctlyRound,
  };
};

export default letterCounting;
