console.log('Welcome from Class Json');

//A clas is useful to create a base plate to generate multiple objects of the same type

var bicicle = {
    color: 'red',
    model: 'bmx',
    brakes: 'disc',
    maxSpeed: '50km/h',
    changeColor: function(newColor) {
        bicicle.color = newColor;
        //this.color = newColor;
        console.log(this);
    }
};

console.log(bicicle);
bicicle.changeColor('blue');