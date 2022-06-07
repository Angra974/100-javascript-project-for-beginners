const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
let currentIndex = 0;
const customerCard = document.querySelector('customer-card');
const customerImg = document.querySelector('#customer-img');
const userName = document.querySelector('#customer-name');
const userText = document.querySelector('#customer-text');


const    Customers = [
	[
		'John',
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?'
	],
	[
		'Sandy',
		'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock'
	],
	[
		'Amy',
		'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'
	],
	[
		'Tyrell',
		'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'
	],
	[
		'Wanda',
		'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
	]
];

prevBtn.addEventListener('click', function() {
	currentIndex = currentIndex === 0 ? Customers.length -1 : currentIndex-1;
	showTestimon(currentIndex);
})

nextBtn.addEventListener('click', function() {
	currentIndex = currentIndex ===  Customers.length  -1 ? 0 : currentIndex + 1;
	showTestimon(currentIndex);
	})

// show a testimonial, by default 0;
function showTestimon(index = 0) {
	customerImg.src = `img/customer-${index}.jpg`;
	userName.textContent = Customers[index][0];
	userText.textContent = Customers[index][1];
}

window.addEventListener('DOMContentLoaded', showTestimon(0));
