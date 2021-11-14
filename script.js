

const paintWall = function (wall, color) {
    console.log('We choose the ' + wall + 'wall')
    console.log('Paint the wall ' + color)
    console.log('The ' + wall + '-wall has been painted ' + color)

};

let color = 'red';
let wall = 'north';

paintWall(wall, color)

color = 'blue'
wall = 'south'

paintWall(wall, color)