const list = [
  [1, 5],
  [10, 20],
  [1, 6],
  [16, 19],
  [5, 11],
];

function sumIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  return intervals
    .reduce((acc, interval) => {
      const [start, end] = interval;
      if (acc.length === 0 || acc[acc.length - 1][1] < start) {
        acc.push(interval);
      } else {
        acc[acc.length - 1][1] = Math.max(acc[acc.length - 1][1], end);
      }
      return acc;
    }, [])
    .reduce((sum, interval) => sum + interval[1] - interval[0], 0);
}
