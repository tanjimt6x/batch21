function remove(arr) {
  return [...new Set(arr)];
}

console.log(remove([100, 200, 400, 300, 600, 200]));