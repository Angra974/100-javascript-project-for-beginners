 const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];
  
  
  const btnLeft = document.querySelector('.btn-left');
  const btnRight = document.querySelector('.btn-right');
  const imgContainer = document.querySelector('.img-container');
  
  
  let current = 0;
  let max = pictures.length -1;
  btnLeft.addEventListener('click',() => {
	 if(current === 0)
     {
		current = max;
	 } else {
		current--;
	 }	 
	 	changeBackground();
  });

  btnRight.addEventListener('click',() => {
	if(current === max)
    {
		current = 0;
	} else {
		current++;
	}
	changeBackground();
  });  
  
  function changeBackground() {
	  imgContainer.style.backgroundImage = "url(img/contBcg-" + current + ".jpeg)";
  }