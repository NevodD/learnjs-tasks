let schedule = {
  user: 'Ilya',
};

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

console.log(isEmpty(schedule));