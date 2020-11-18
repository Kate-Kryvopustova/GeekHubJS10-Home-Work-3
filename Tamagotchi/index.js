class Tamagotchi {
  constructor(){
    this.counter = 0;
    this.milk = 100;
    this.sleep = 100;
    this.happy = 100;
    this.startGame = document.getElementById('start');
    this.namePet = document.getElementById('inputName');
    this.name = document.getElementById('name-pet');
    this.inputTime = document.getElementById('timeForLive');
    this.dayLife = document.getElementById('day');
    this.infoField = document.getElementById('content__info');
    this.newGame = document.getElementById('restart');
    this.addTimeForLife = document.getElementById('feedPet');
    this.addDaysLife = document.getElementById('addFood');
    this.drinkMilk = document.getElementById('drink');
    this.playPet = document.getElementById('play');
    this.spleepWithPet = document.getElementById('sleep');
    this.strokePet = document.getElementById('stroke');
    this.infoHappy = document.getElementById('content__info__happy');
    this.songPet = document.getElementById('song');
    this.infoMilk = document.getElementById('content__info__milk');
    this.milkForPet = document.getElementById('milk');
    this.infoSleep = document.getElementById('content__info__sleep');
    this.petSleep = document.getElementById('sleep_pet');
    this.petHappy = document.getElementById('happy_pet');

    this.game = this.game.bind(this);
    this.addLifePet = this.addLifePet.bind(this);
    this.givePetMilk = this.givePetMilk.bind(this);
    this.playWithPet = this.playWithPet.bind(this);
    this.giveSleepPet = this.giveSleepPet.bind(this);
    this.petAPet = this.petAPet.bind(this);
    this.songForPet = this.songForPet.bind(this);

    // this.bindEvents();
  }

  bindEvents() {
    this.startGame.addEventListener('click', this.game);
    this.newGame.addEventListener('click', () => {
      window.location.reload();
    });
    this.addDaysLife.addEventListener('click', this.addLifePet);
    this.inputTime.addEventListener('input', (Event) => {
      if(this.counter === 0) {
        this.dayLife.innerHTML = Event.target.value;
      }
    });
    this.drinkMilk.addEventListener('click', this.givePetMilk);
    this.playPet.addEventListener('click', this.playWithPet);
    this.spleepWithPet.addEventListener('click', this.giveSleepPet);
    this.strokePet.addEventListener('click', this.petAPet);
    this.songPet.addEventListener('click', this.songForPet);
  }

  renderDayLife() {
    this.info = '';

    if(this.counter === 0) {
      this.info = 'You pet is dead, sorry';
      this.stop();
    } else if(this.counter < this.smallLife) {
      this.info = 'I feel myself bad';
    } else if(this.counter < this.midleLife) {
      this.info = 'I am hungry';
    }
    this.dayLife.innerHTML = this.counter;
    this.infoField.innerHTML = this.info;
    this.counter--;
  } 
  renderMilkPet() {
    this.info = '';

    if(this.milk < 20) {
      this.info = 'Your pet died because you are greedy and did not give him milk ...';
      this.stop();
    }
      
    this.milkForPet.innerHTML = this.milk;
    this.infoMilk.innerHTML = this.info;
    this.milk--;
  }
  renderSleepPet() {
    this.info = '';

    if(this.sleep < 20) {
      this.info = 'Your pet has died of overwork...';
      this.stop();
    }

    this.petSleep.innerHTML = this.sleep;
    this.infoSleep.innerHTML = this.info;
    this.sleep--
  }
  renderHappyPet() {
    this.info = '';

    if(this.happy < 20) {
      this.info = 'Your pet died unhappy! You can t do this with him!';
      this.stop();   
    }

    this.petHappy.innerHTML = this.happy;
    this.infoHappy.innerHTML = this.info;
    this.happy--;
  }
  stop() {
    clearInterval(this.timerDay);
    clearInterval(this.timerMilk);
    clearInterval(this.timerHappy);
    clearInterval(this.timerSleep);
  }

  game() {
    this.warningMessage = document.getElementById('warning');
    this.name.innerHTML = this.namePet.value;
    this.dayLife.innerHTML = this.inputTime.value;
    this.fullLife = this.inputTime.value;
    this.counter = Number(this.fullLife);
    this.midleLife = Math.round(this.fullLife * 50 / 100);
    this.smallLife = Math.round(this.fullLife * 20 / 100 );
    

    if(Number(this.fullLife) === 0) {
      return this.warningMessage.innerHTML = 'You need to set the number of days of the pets life';
    }

    if(this.warningMessage.style.display !== 'none') {
      this.warningMessage.style.display = 'none';
    }

    this.renderDayLife();
    this.timerDay = setInterval(() => this.renderDayLife(), 2500);  

    this.renderMilkPet();
    this.timerMilk = setInterval(() => this.renderMilkPet(), 2500);  

    this.renderSleepPet();
    this.timerSleep = setInterval(() => this.renderSleepPet(), 2500);  

    this.renderHappyPet();
    this.timerHappy = setInterval(() => this.renderHappyPet(), 2500);  
  }

  addLifePet() {
    this.addTime = Number(this.addTimeForLife.value);
    this.counter += this.addTime;
  }

  givePetMilk() {
    if(this.milk < 98 ) {
      this.infoMilk.innerHTML = 'Yummy milk ^_^';
    } else {
      return this.infoMilk.innerHTML = 'Nope! I dont want to drink!';
    }

    this.milk += 3;
  } 

  playWithPet() {
    if(this.happy < 100) {
      this.infoHappy.innerHTML = 'I like to play with you )';
    } else {
      return this.infoHappy.innerHTML = 'I ve played enough )';
    }

    this.sleep--;
    this.happy++;
  }

  giveSleepPet() {
    if(this.sleep < 100) {
      this.infoSleep.innerHTML = 'Mrr-mrr-mrrr';
    } else {
      return this.infoSleep.innerHTML = `I've slept enough!`;
    }

    this.sleep += 2;
  }

  petAPet() {
    if(this.happy < 100) {
      this.infoHappy.innerHTML = 'Mrr-mrr-mrrr';
    } else {
      return this.infoHappy.innerHTML = 'I am completely happy';
    }

    this.happy++;
  }

  songForPet() {
    this.happy -= 15;
    this.infoHappy.innerHTML = 'You sing terribly! I beg you to stop.';
  }
} 
const pet = new Tamagotchi();
pet.bindEvents();


