const button = document.getElementById("btn") as HTMLButtonElement;
const input1 = document.getElementById("firstInput") as HTMLInputElement;
const input2 = document.getElementById("secondInput") as HTMLInputElement;

button!.addEventListener("click", function () {
    console.log(prepend(input1!.value, input2!.value));
});

function prepend(numSpaces: number | string, inputString: string) {
    let i = 0;
    while (i < numSpaces){
      inputString = " " + inputString;
      i++;
    }
    return inputString;
  }
