function love(array) {
		var hold = [],
				result,
				newArray;
		if (array.length > 2) {
				newArray = array.map(function(item, index, array) {
					console.log("current item + array[index + 1] " + item + array[index + 1]);
						return item + array[index + 1];
				});
				newArray.forEach(function(item) {
						if (typeof item === "number" && !isNaN(item)) {
								if (item < 10) {
										hold.push(item);
								} else if (item > 9) {
										console.log('Splitting' + item + " into " + item.toString()[0] + " and " + item.toString()[1]);
										hold.push(parseInt(item.toString()[0]));
										hold.push(parseInt(item.toString()[1]));
								}
						} else {
								console.log("failed number check: " + item);
						}
				});
				love(hold);
		} else {
				
				console.log("current array : " + array);
				document.getElementById('result').textContent = array[0] + "" + array[1] + "%";
				result = array[0] + "" + array[1] + "%";
				return result;
		}
}

function calculate() {
		var inputs = document.getElementsByName('names'),
				loves = ["l", "o", "v", "e", "s"],
				countArray = [],
				count,
				names,
				jointNames;
		document.getElementById('warning').textContent = "";
		if (!inputs[0].value || !inputs[1].value) {
				document.getElementById('warning').textContent = "Please enter both names.";
		} else {
				names = "" + inputs[0].value + "" + inputs[1].value + "";
				console.log("current name : " + names);
				jointNames = names.toLowerCase();
				console.log("current jointNames : " + jointNames);
				countArray = loves.map(function(item) {
						count = 0;
						for (var i = 0; i < jointNames.length; i += 1) {
								if (item === jointNames[i]) {
										count += 1;
								}
						}
						console.log("current count : " + count);
						return count;
						

				});
				console.log("current countArray : " + countArray);
				love(countArray);
		}
}

document.getElementById('submit').addEventListener('click', function(e) {
		e.preventDefault();
		calculate();
}, false);