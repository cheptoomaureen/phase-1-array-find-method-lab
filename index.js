// code your solution here
function superbowlWin(record) {
    // Use Array.prototype.find() to find the first entry with result 'W'
    const winningEntry = record.find(entry => entry.result === 'W');
  
    return winningEntry ? winningEntry.year : undefined;
  }
  