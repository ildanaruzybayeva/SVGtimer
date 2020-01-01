const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log('timer started');
  },

  onComplete() {
    console.log('done');
  },

  onTick() {
    console.log('ticking');
  }
});
