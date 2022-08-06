// ==================
// код приложения
class Bird {
	constructor(bird) {
	  this.bird = bird;
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
 }
 
 
 
 
 
 
 // ==================
 // запуск приложения
 
 // Находим код всех птичек на сцене
 const birds = document.querySelectorAll('.bird');
 
 // для каждой птички создаем инстанс класса
 birds.forEach((bird) => {
	new Bird(bird);
 });
 