const howManyLetters = () => {
  const sentence = "Hi, Sudharshan! How are you doing?";

  // note: using "for in" loop it prints out index number
  //   for (const letters in sentence) {
  //     console.log(letters);
  //     }

  for (const letters in sentence) {
    console.log(Number(letters) + 1);
  }

  // note: using "for of" loop it prints out letters
  for (const letters of sentence) {
    console.log(letters);
  }
};

howManyLetters();
