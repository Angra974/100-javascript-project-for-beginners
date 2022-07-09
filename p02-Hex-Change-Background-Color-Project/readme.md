# 100 javascripts project for beginner
Project based on https://jsbeginners.com/javascript-projects-for-beginners/

but this is my own javascript code and how i will handle it.

What the goal ?
For me, learn by making this project, make search on solution for element I can't handle as it's a part of a developper to be able to find solution.

I encourage you to see and read too the code source and solution on [jsbegginer.com](https://jsbeginners.com/javascript-projects-for-beginners/)
as you will have another solution.

## Project 2 - Hex Change Background Color Project

[Original live project on jsbegginer.com](https://js-beginners.github.io/hex-color-background-changer/)


### The code
As you can see, the code is exactly the same as the project one.
We just show the generated color in the element with id color ( "#color" ) by using [textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent).

```Javascript
    <script>
      const btn = document
        .querySelector("button")
        .addEventListener("click", () => {
const 		newColor = `#${Math.floor(Math.random() * "0xffffff")
            .toString("16")
            .padEnd(6, "0")}`;

          document.body.style.background = newColor;
          document.getElementById("color").textContent = newColor;
        });
    </script>
```
