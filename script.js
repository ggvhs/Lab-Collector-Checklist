let counts = {
    uds: 0,
    blood: 0,
    pcr: 0,
    covid: 0
  };

  function updateCount(type, action) {
    if (action === 'increment') {
      counts[type]++;
    } else if (action === 'decrement' && counts[type] > 0) {
      counts[type]--;
    }

    document.getElementById(`${type}Count`).value = counts[type];
}
