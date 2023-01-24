const dogs = {
    raining: true,
    noise: 'Woof!',
    makeNoise: function() { if (this.raining === true) console.log(this.noise); }
}

const cats = {
    raining: false,
    noise: 'Meow!',
    makeNoise: function() { if (this.raining === true) console.log(this.noise); }
}

dogs.makeNoise();
cats.makeNoise();

const massHysteria = (dogs,cats) => {
    if (dogs.raining && cats.raining) { console.log('DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!'); }
}

massHysteria(dogs,cats);