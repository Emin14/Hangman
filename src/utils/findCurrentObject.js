// Функция определения и возврата текущего вопроса, ответа, уникальных символов в ответе
const findCurrentObject = (data, gameCount) => {
  const currentObject = data.find((item) => item.id === gameCount);
  const arrayOfcurrentAnswer = currentObject.answer.split('');
  const uniqueValues = [...new Set(arrayOfcurrentAnswer)];
  return {
    ...currentObject,
    uniqueValues,
  };
};

export default findCurrentObject;
