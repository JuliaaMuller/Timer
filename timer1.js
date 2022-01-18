const args = process.argv.slice(2);
console.log(args);

  const simpleTimer = function (times) {
    for(let i = 0; i < times.length; i++ ){
      newTime = times[i] * 1000;
      if(times[i]>0) {
      setTimeout(() => {
        process.stdout.write('\x07')
        process.stdout.write('bip');
      },newTime);
     }
    };
  };
  simpleTimer(args);
  




