const { Console } = require('@woowacourse/mission-utils');
const { USER_INPUT_PHRASE, LOTTO_PRICE, GAME_INPUT_ERRORS } = require('./config');

const getLottoBudget = (budgetAction) => {
  Console.readLine(USER_INPUT_PHRASE.REQUEST_PURCHASE_AMOUNT, (budget) => {
    budgetAction(budget);
  });
};

const getTargetNumber = (targetAction) => {
  Console.readLine(USER_INPUT_PHRASE.REQUEST_TARGET_NUMBER, (targetInput) => {
    targetAction(targetInput.split(USER_INPUT_PHRASE.REQUEST_TARGET_DELIMITER));
  });
};

const getBonusNumber = (bonusAction) => {
  Console.readLine(USER_INPUT_PHRASE.REQUEST_BONUS_NUMBER, (bonusInput) => {
    bonusAction(bonusInput);
  });
};

const validateLottoBudget = (budget) => {
  const isNumber = !isNaN(budget);
  const isPositive = budget > 0;
  const isMultiple = budget % LOTTO_PRICE === 0;

  if (!isNumber || !isPositive || !isMultiple) {
    throw Error(GAME_INPUT_ERRORS.INVALID_BUDGET_RANGE);
  }
};
module.exports = { getLottoBudget, getTargetNumber, getBonusNumber };
