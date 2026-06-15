const jgeometry = {
  area: {
    eqtriangle: function (side) {
      return (Math.sqrt(3) / 4) * Math.pow(side, 2);
    },
    isostriangle: function (side, base) {
      return (base / 4) * Math.sqrt(4 * Math.pow(side, 2) - Math.pow(base, 2));
    },
    scaletriangle: function (a, b, c) {
      const s = (a + b + c) / 2;
      return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    },
    square: function (side) {
      return Math.pow(side, 2);
    },
    rectangle: function (length, width) {
      return length * width;
    },
    circle: function (radius) {
      return Math.PI * Math.pow(radius, 2);
    },
    parallelogram: function (base, height) {
      return base * height;
    },
    trapezoid: function (base1, base2, height) {
      return ((base1 + base2) / 2) * height;
    },
    rhombus: function (diagonal1, diagonal2) {
      return (diagonal1 * diagonal2) / 2;
    },
    ellipse: function (semiMajorAxis, semiMinorAxis) {
      return Math.PI * semiMajorAxis * semiMinorAxis;
    },
    regularPolygon: function (sides, length) {
      return (sides * Math.pow(length, 2)) / (4 * Math.tan(Math.PI / sides));
    }
  },

  perimeter: {
    eqtriangle: function (side) {
      return 3 * side;
    },
    isostriangle: function (side, base) {
      return (2 * side) + base;
    },
    scaletriangle: function (a, b, c) {
      return a + b + c;
    },
    square: function (side) {
      return 4 * side;
    },
    rectangle: function (length, width) {
      return 2 * (length + width);
    },
    circle: function (radius) {
      return 2 * Math.PI * radius;
    },
    parallelogram: function (sideA, sideB) {
      return 2 * (sideA + sideB);
    },
    trapezoid: function (a, b, c, d) {
      return a + b + c + d;
    },
    rhombus: function (side) {
      return 4 * side;
    }
  },

  volume: {
    cube: function (side) {
      return Math.pow(side, 3);
    },
    cuboid: function (length, width, height) {
      return length * width * height;
    },
    cylinder: function (radius, height) {
      return Math.PI * Math.pow(radius, 2) * height;
    },
    sphere: function (radius) {
      return (4 / 3) * Math.PI * Math.pow(radius, 3);
    },
    cone: function (radius, height) {
      return (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
    },
    pyramid: function (baseArea, height) {
      return (1 / 3) * baseArea * height;
    }
  },

  surfaceArea: {
    cube: function (side) {
      return 6 * Math.pow(side, 2);
    },
    cuboid: function (length, width, height) {
      return 2 * (length * width + width * height + height * length);
    },
    cylinder: function (radius, height) {
      return 2 * Math.PI * radius * (radius + height);
    },
    sphere: function (radius) {
      return 4 * Math.PI * Math.pow(radius, 2);
    },
    cone: function (radius, slantHeight) {
      return Math.PI * radius * (radius + slantHeight);
    }
  }
};

module.exports = jgeometry;