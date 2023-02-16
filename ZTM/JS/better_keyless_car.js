var age = Number(prompt('What is your age?'))

function checkDriverAge() {
  if (age < 18) {
    alert('Sorry, you are too young to drive this car. Powering off')
  } else if (age > 18) {
    alert('Powering On. Enjoy the ride!')
  } else if (age == 18) {
    alert('Congratulations on your first year of driving. Enjoy the ride!')
  }
}

checkDriverAge()

var checkDriverAge2 = function (num) {
  if (num < 18) {
    console.log('Sorry, you are too young to drive this car. Powering off')
  } else if (num > 18) {
    console.log('Powering On. Enjoy the ride!')
  } else if (num == 18) {
    console.log(
      'Congratulations on your first year of driving. Enjoy the ride!'
    )
  }
}
