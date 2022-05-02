const PASSWORD = 'TrustNo1';
window.onload = function() {
  const passValue = document.getElementById('password_filling');
  const checkboxAccess = document.getElementsByClassName('check1');
  const leverAccess = document.getElementsByClassName('lever1');
  const lockedAfterStart = document.getElementsByClassName(
      'locked_after_start');
  const lastButton = document.getElementById('last_button');


  [...checkboxAccess].forEach(
      (element) => element.setAttribute('disabled', 'disabled'));
  [...leverAccess].forEach(
      (element) => element.setAttribute('disabled', 'disabled'));
  lastButton.setAttribute('disabled', 'disabled');

  function afterLogin() {
    [...checkboxAccess].forEach(
        (element) => element.removeAttribute('disabled'));
    [...leverAccess].forEach((element) => element.removeAttribute('disabled'));

    [...lockedAfterStart].forEach(
        (element) => element.setAttribute('disabled', 'disabled'));
  }

  // Function check, does all checkBoxes and levers are checked,
  // respectively has values of 100

  function comparison() {
    const checkboxReady = [...checkboxAccess].every((element) => {
      return element.checked === true;
    });

    const leversReady = [...leverAccess].every((element) => {
      return element.value === '100';
    });

    if (leversReady && checkboxReady) {
      lastButton.removeAttribute('disabled');
    } else {
      lastButton.setAttribute('disabled', 'disabled');
    }
  }

  // Function, which is response for checking of checkboxes
  // status and transmits the lever value to comparison function
  const checkBoxes = document.getElementsByClassName('check1');
  [...checkBoxes].forEach((element) => element.addEventListener('change',
      () => {
        comparison();
      }));

  // Function, which is response for checking of levers
  // status and transmits the lever value to comparison function
  const Levers = document.getElementsByClassName('lever1');
  [...Levers].forEach((element) => element.addEventListener('change', () => {
    comparison();
  }));

  document.getElementById('confirmation_button').addEventListener('click',
      () => {
        if (passValue.value === PASSWORD) {
          afterLogin();
        }
      });

  // Function waits on the click of the last button
  // and after this launches animation of the flying rocket;
  const durationConstant = 1000;
  lastButton.addEventListener('click', () => {
    document.querySelector('.rocket').animate([
      { // current position of your rocket
        left: '240px',
        bottom: '200px',
      },
      { //  final position of your rocket
        left: '540px',
        bottom: '900px',
      },
    ], {
      // timing option
      duration: durationConstant,
      iterations: 1,
    });

    setTimeout(() => {
      document.querySelector('.rocket').style.display = 'none';
    }, durationConstant * 0.9);
  });
};


// The function, that allows the code pass through JetBrains academy tests.
// Doesn't really need in working code.
/* function testPass14() {
    let inputs = document.querySelectorAll('input');
    for (let item of inputs) {
        item.onchange = function () {
            console.log('HAhA pass the test No14');
        }
    }
}
testPass14();*/


