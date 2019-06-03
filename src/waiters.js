const EC = protractor.ExpectedConditions;

const messageBuilder = require("./constants_and_utils/messageBuilder");
const utils = require("./constants_and_utils/utils");

const waitForElementPresence = function(
  htmlElement = utils.requiredParam(waitForElementPresence),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds,
  errorMessage = messageBuilder.getDefaultIsNotPresentMessage(htmlElement)
) {
  utils.warnRemoveErrorMessage(
    "waitForElementPresence",
    errorMessage,
    messageBuilder.getDefaultIsNotPresentMessage(htmlElement)
  );
  browser.wait(EC.presenceOf(htmlElement), timeoutInMilliseconds, errorMessage);
};

const waitForElementNotToBePresent = function(
  htmlElement = utils.requiredParam(waitForElementNotToBePresent),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds,
  errorMessage = messageBuilder.getDefaultIsStillPresentMessage(htmlElement)
) {
  utils.warnRemoveErrorMessage(
    "waitForElementNotToBePresent",
    errorMessage,
    messageBuilder.getDefaultIsStillPresentMessage(htmlElement)
  );
  browser.wait(EC.stalenessOf(htmlElement), timeoutInMilliseconds, errorMessage);
};

const waitForElementVisibility = function(
  htmlElement = utils.requiredParam(waitForElementVisibility),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds,
  errorMessage = messageBuilder.getDefaultIsNotVisibleMessage(htmlElement)
) {
  utils.warnRemoveErrorMessage(
    "waitForElementVisibility",
    errorMessage,
    messageBuilder.getDefaultIsNotVisibleMessage(htmlElement)
  );
  browser.wait(EC.visibilityOf(htmlElement), timeoutInMilliseconds, errorMessage);
};

const waitForElementNotToBeVisible = function(
  htmlElement = utils.requiredParam(waitForElementNotToBeVisible),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds,
  errorMessage = messageBuilder.getDefaultIsStillVisibleMessage(htmlElement)
) {
  utils.warnRemoveErrorMessage(
    "waitForElementNotToBeVisible",
    errorMessage,
    messageBuilder.getDefaultIsStillVisibleMessage(htmlElement)
  );
  browser.wait(EC.invisibilityOf(htmlElement), timeoutInMilliseconds, errorMessage);
};

const waitForTextToBePresentInElement = function(
  htmlElement = utils.requiredParam(waitForTextToBePresentInElement),
  text = utils.requiredParam(waitForTextToBePresentInElement, "text"),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds,
  errorMessage = messageBuilder.getDefaultTextTextNotPresentOnElementMessage(htmlElement, text)
) {
  utils.warnRemoveErrorMessage(
    "waitForTextToBePresentInElement",
    errorMessage,
    messageBuilder.getDefaultTextTextNotPresentOnElementMessage(htmlElement, text)
  );
  browser.wait(EC.textToBePresentInElement(htmlElement, text), timeoutInMilliseconds, errorMessage);
};

const waitForTextNotToBePresentInElement = function(
  htmlElement = utils.requiredParam(waitForTextNotToBePresentInElement),
  text = utils.requiredParam(waitForTextNotToBePresentInElement, "text"),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds,
  errorMessage = messageBuilder.getDeafultTextTextIsStillPresentOnElementMessage(htmlElement, text)
) {
  utils.warnRemoveErrorMessage(
    "waitForTextNotToBePresentInElement",
    errorMessage,
    messageBuilder.getDeafultTextTextIsStillPresentOnElementMessage(htmlElement, text)
  );
  browser.wait(EC.not(EC.textToBePresentInElement(htmlElement, text)), timeoutInMilliseconds, errorMessage);
};

const waitForUrlToBeEqualToExpectedUrl = function(
  expectedUrl = utils.requiredParam(waitForUrlToBeEqualToExpectedUrl, "expectedUrl"),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds,
  errorMessage = messageBuilder.getDefaultCurrentUrlIsDifferentThanExpectedUrlMessage(expectedUrl)
) {
  utils.warnRemoveErrorMessage(
    "waitForUrlToBeEqualToExpectedUrl",
    errorMessage,
    messageBuilder.getDefaultCurrentUrlIsDifferentThanExpectedUrlMessage(expectedUrl)
  );
  browser.wait(EC.urlIs(expectedUrl), timeoutInMilliseconds, errorMessage);
};

const waitForUrlNotToBeEqualToExpectedUrl = function(
  expectedUrl = utils.requiredParam(waitForUrlNotToBeEqualToExpectedUrl, "expectedUrl"),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds,
  errorMessage = messageBuilder.getDefaultCurrentUrlIsEqualToExpectedUrlMessage(expectedUrl)
) {
  utils.warnRemoveErrorMessage(
    "waitForUrlNotToBeEqualToExpectedUrl",
    errorMessage,
    messageBuilder.getDefaultCurrentUrlIsEqualToExpectedUrlMessage(expectedUrl)
  );
  browser.wait(EC.not(EC.urlIs(expectedUrl)), timeoutInMilliseconds, errorMessage);
};

const waitForUrlToContainString = function(
  string = utils.requiredParam(waitForUrlToContainString, "string"),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds,
  errorMessage = messageBuilder.getDefaultCurrentUrlDoesNotContainStringMessage(string)
) {
  utils.warnRemoveErrorMessage(
    "waitForUrlToContainString",
    errorMessage,
    messageBuilder.getDefaultCurrentUrlDoesNotContainStringMessage(string)
  );
  browser.wait(EC.urlContains(string), timeoutInMilliseconds, errorMessage);
};

const waitForUrlNotToContainString = function(
  string = utils.requiredParam(waitForUrlNotToContainString, "string"),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds,
  errorMessage = messageBuilder.getDefaultCurrentUrlContainsTheString(string)
) {
  utils.warnRemoveErrorMessage(
    "waitForUrlNotToContainString",
    errorMessage,
    messageBuilder.getDefaultCurrentUrlContainsTheString(string)
  );
  browser.wait(EC.not(EC.urlContains(string)), timeoutInMilliseconds, errorMessage);
};

module.exports = {
  waitForElementPresence,
  waitForElementNotToBePresent,
  waitForElementVisibility,
  waitForElementNotToBeVisible,
  waitForTextToBePresentInElement,
  waitForTextNotToBePresentInElement,
  waitForUrlToBeEqualToExpectedUrl,
  waitForUrlNotToBeEqualToExpectedUrl,
  waitForUrlToContainString,
  waitForUrlNotToContainString
};