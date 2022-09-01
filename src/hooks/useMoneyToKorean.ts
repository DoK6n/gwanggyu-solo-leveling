export const useMoneyToKorean = (money: number = 0) => {
  let result = 0;
  if (money < 10000 && money > 0) {
    result = money * 0.01;
    return result < 10 ? result + '백' : result * 0.1 + '천';
  } else if (money > 10000) {
    result = money * 0.0001;
    return result + '억';
  } else {
    return result;
  }
};
