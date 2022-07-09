# 100 javascripts project for beginner
Project based on https://jsbeginners.com/javascript-projects-for-beginners/

but this is my own javascript code and how i will handle it.

What the goal ?
For me, learn by making this project, make search on solution for element I can't handle as it's a part of a developper to be able to find solution.

I encourage you to see and read too the code source and solution on [jsbegginer.com](https://jsbeginners.com/javascript-projects-for-beginners/)
as you will have another solution.

## Project 1 - Change background color

For this project, i've added the code directly in the html file and call it with the script tag.

What the code do:
    1. add and event listener on the button when we click on it
    2. Create a random color with the Math.random() function and use it as a multiplier for the base color "0xffffff"
    2. convert the result in to a hexadeximal base with [toString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)(16)
    3. If the hexadeximal value is less than 6 characters length, add the missing character with [padEnd](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd) and fill with '0'.
    4. Change the background color with the new formatted color.

```Javascript
<script>
      document
        .querySelector("button")
        .addEventListener("click", () => {
          const newColor = `#${Math.floor(Math.random() * "0xffffff")
            .toString("16")
            .padEnd(6, "0")}`;

          document.body.style.background = newColor;
        });
    </script>

```
