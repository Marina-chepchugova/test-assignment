// ==================
// код приложения
class Bird {
	constructor(root, counter) {
 
	  this.root = root;
	  this.counter = counter;
 
	  this.root.addEventListener('click', () => this.clickCounter());
 
	}
 
	clickCounter() {
	  this.counter.clickCounter();
 
	}
 
 }
 
 class Counter {
	constructor() {
	  this.root = document.querySelector('.counter');
	  this.value = 0;
	}
	clickCounter() {
	  this.value += 1;
	  this.root.textContent = this.value;
	}
 
 }
 
 
 // ==================
 // запуск приложения
 class Game {
	constructor() {
	  this.bird = [];
	  this.counter = new Counter();
 
	  this.findbirds()
	  this.bird.addEventListener('click', () => this.clickHandler());
	}
	clickHandler() {
	  this.bird.addEventListener('transitionend', () => {
		 this.ended()
	  })
	  setTimeout(() => this.birdStrikeBack(), 5000);
 
	  let left = this.getRandomCoordinate()
	  if (left > 50) {
		 left = left + 25
 
	  } else {
		 left = left - 25
 
	  }
	  let top = this.getRandomCoordinate()
	  if (top > 50) {
		 top = top + 25
 
	  } else {
		 top = top - 25
 
	  }
	  this.bird.style.left = left + '%';
	  this.bird.style.top = top + '%';
 
 
	}
 
 
	birdStrikeBack() {
	  this.bird.style.left = this.getRandomCoordinate() + '%';
	  this.bird.style.top = this.getRandomCoordinate() + '%';
	}
 
 
 
	getRandomCoordinate() {
	  return Math.floor(Math.random() * 101);
	}
 
	ended() {
 
	  this.bird.removeEventListener('transitionend', () => this.ended())
	}
 
	findbirds() {
 
	  // Находим код всех птичек на сцене
	  const birds = document.querySelectorAll('.bird');
 
	  // для каждой птички создаем инстанс класса
	  birds.forEach(bird => {
		 this.bird.push(new Bird(bird, this.counter));
	  });
	}
 }
 
 new Game();