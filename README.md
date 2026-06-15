jGeometry

How to Install it-->

Pop open your terminal and run:

npm install jgeometry

How to Use it

It’s designed to be super easy to read. Just import it and call what you need:

const jgeometry = require('jgeometry');

const equilateralTriangleArea = jgeometry.area.eqtriangle(3);
console.log(equilateralTriangleArea); 

const circleArea = jgeometry.area.circle(5);
console.log(circleArea); 

const rectanglePerimeter = jgeometry.perimeter.rectangle(10, 5);
console.log(rectanglePerimeter); 

const cylinderVolume = jgeometry.volume.cylinder(3, 7);
console.log(cylinderVolume);

const sphereSurfaceArea = jgeometry.surfaceArea.sphere(4);
console.log(sphereSurfaceArea);

What it can do right now:

Area Calculations
jgeometry.area.eqtriangle(side) - Area of an equilateral triangle.
jgeometry.area.isostriangle(side, base) - Area of an isosceles triangle.
jgeometry.area.scaletriangle(a, b, c) - Area of a scalene triangle using Heron's formula.
jgeometry.area.square(side) - Area of a square.
jgeometry.area.rectangle(length, width) - Area of a rectangle.
jgeometry.area.circle(radius) - Area of a circle.
jgeometry.area.parallelogram(base, height) - Area of a parallelogram.
jgeometry.area.trapezoid(base1, base2, height) - Area of a trapezoid.
jgeometry.area.rhombus(diagonal1, diagonal2) - Area of a rhombus.
jgeometry.area.ellipse(semiMajorAxis, semiMinorAxis) - Area of an ellipse.
jgeometry.area.regularPolygon(sides, length) - Area of any regular polygon.

Perimeter Calculations
jgeometry.perimeter.eqtriangle(side) - Perimeter of an equilateral triangle.
jgeometry.perimeter.isostriangle(side, base) - Perimeter of an isosceles triangle.
jgeometry.perimeter.scaletriangle(a, b, c) - Perimeter of a scalene triangle.
jgeometry.perimeter.square(side) - Perimeter of a square.
jgeometry.perimeter.rectangle(length, width) - Perimeter of a rectangle.
jgeometry.perimeter.circle(radius) - Circumference of a circle.
jgeometry.perimeter.parallelogram(sideA, sideB) - Perimeter of a parallelogram.
jgeometry.perimeter.trapezoid(a, b, c, d) - Perimeter of a trapezoid.
jgeometry.perimeter.rhombus(side) - Perimeter of a rhombus.

Volume Calculations
jgeometry.volume.cube(side) - Volume of a cube.
jgeometry.volume.cuboid(length, width, height) - Volume of a cuboid.
jgeometry.volume.cylinder(radius, height) - Volume of a cylinder.
jgeometry.volume.sphere(radius) - Volume of a sphere.
jgeometry.volume.cone(radius, height) - Volume of a cone.
jgeometry.volume.pyramid(baseArea, height) - Volume of a pyramid.

Surface Area Calculations
jgeometry.surfaceArea.cube(side) - Total surface area of a cube.
jgeometry.surfaceArea.cuboid(length, width, height) - Total surface area of a cuboid.
jgeometry.surfaceArea.cylinder(radius, height) - Total surface area of a cylinder.
jgeometry.surfaceArea.sphere(radius) - Total surface area of a sphere.
jgeometry.surfaceArea.cone(radius, slantHeight) - Total surface area of a cone.

License
MIT — Feel free to use it in any of your projects!