const chairs = document.querySelectorAll("[data-chair]");

class Chair {
  constructor(element) {
    this.element = element;
  }

  get getLetter() {
    return this.element.parentElement.attributes["data-letter"].nodeValue;
  }

  get getNumber() {
    const parentElements = [...this.element.parentElement.children];
    let index = 0;
    parentElements.forEach((item, i) => {
      if (item === this.element) {
        index = i;
      }
    });
    return index;
  }

  addPosition() {
    if (this.element.children.length < 2) {
      const span = document.createElement("span");
      span.innerText = `${this.getLetter}${this.getNumber}`;
      this.element.appendChild(span);
    }
  }

  active() {
    this.element.classList.toggle('active')
    if(this.element.classList.contains('active')){
      this.element.querySelector('img').setAttribute('src', './img/cadeira-green.svg')
    } else {
      this.element.querySelector('img').setAttribute('src', './img/cadeira.svg')
    }
  }
}

chairs.forEach((c) => {
  const chair = new Chair(c);
  chair.addPosition();
  c.addEventListener('click', () =>{
    chair.active()
  })
});
