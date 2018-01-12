function getArea(sides) {
	if(sides.length === 2) {
		if(Number.isInteger(sides[0]) && Number.isInteger(sides[1])) {
			if(sides[0] >= 0 && sides[1] >= 0) {
				return sides[0] * sides[1];
			}
			else {
				return -1;
			}
		}
		else {
			return -1;
		}
	}
	else {
		return -1;
	}
}

module.exports = getArea;
