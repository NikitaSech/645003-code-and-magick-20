var fireballSize = 22;

function getFireballSpeed (isFairWind) {
  return (isFairWind) ? 5 : 2;
}

var wizardSpeed = 3;

var wizardWidth = 70;
function getWizardHeight () {
  return 1.337 * wizardWidth;
}

function getWizardX (widthWindow) {
  return widthWindow / 2;
}

function getWizardY (heightWindow) {
 return heightWindow / 3;
}
