export default function changeValueOfUniform4f(initialValue, targetValue) {
  if (initialValue.toFixed(1) > targetValue.toFixed(1))
    return initialValue - 0.01;
  else if (initialValue.toFixed(1) < targetValue.toFixed(1))
    return initialValue + 0.01;
  else return initialValue;
}
