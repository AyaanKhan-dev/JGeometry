export function cube(side) {
  return Math.pow(side, 3);
}

export function cuboid(length, width, height) {
  return length * width * height;
}

export function cylinder(radius, height) {
  return Math.PI * Math.pow(radius, 2) * height;
}

export function sphere(radius) {
  return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

export function cone(radius, height) {
  return (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
}

export function pyramid(baseArea, height) {
  return (1 / 3) * baseArea * height;
}

export function hemisphere(radius) {
  return (2 / 3) * Math.PI * Math.pow(radius, 3);
}

export function ellipsoid(a, b, c) {
  return (4 / 3) * Math.PI * a * b * c;
}

export function triangularPrism(base, triangleHeight, prismHeight) {
  return 0.5 * base * triangleHeight * prismHeight;
}

export function hexagonalPrism(side, height) {
  return ((3 * Math.sqrt(3)) / 2) * Math.pow(side, 2) * height;
}

export function pentagonalPrism(side, height) {
  return 0.25 * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * Math.pow(side, 2) * height;
}

export function octagonalPrism(side, height) {
  return 2 * (1 + Math.sqrt(2)) * Math.pow(side, 2) * height;
}

export function torus(majorRadius, minorRadius) {
  return 2 * Math.pow(Math.PI, 2) * majorRadius * Math.pow(minorRadius, 2);
}

export function coneFrustum(radius1, radius2, height) {
  return (1 / 3) * Math.PI * height * (Math.pow(radius1, 2) + Math.pow(radius2, 2) + (radius1 * radius2));
}

export function pyramidFrustum(baseArea1, baseArea2, height) {
  return (1 / 3) * height * (baseArea1 + baseArea2 + Math.sqrt(baseArea1 * baseArea2));
}

export function sphericalCap(radius, height) {
  return (Math.PI * Math.pow(height, 2) * (3 * radius - height)) / 3;
}

export function sphericalSector(radius, height) {
  return (2 / 3) * Math.PI * Math.pow(radius, 2) * height;
}

export function capsule(radius, cylinderHeight) {
  return Math.PI * Math.pow(radius, 2) * ((4 / 3) * radius + cylinderHeight);
}

export function obelisk(length1, width1, length2, width2, height) {
  return (height / 6) * ((2 * length1 + length2) * width1 + (2 * length2 + length1) * width2);
}

export function wedge(length, width, height, slantHeight) {
  return (1 / 6) * width * height * (2 * length + slantHeight);
}