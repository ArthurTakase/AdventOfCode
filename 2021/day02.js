function day02_part01(input) {
    var y = 0,
        x = 0

    for (var i in input) {
        i = parseInt(i)
        var data = input[i].split(" ")
        var value = parseInt(data[1])

        switch (data[0]) {
            case "forward":
                x += value
                break
            case "up":
                y -= value
                break
            case "down":
                y += value
                break
        }
    }

    console.log(`Part 1: X: ${x}, Y: ${y}, Result: ${x * y}`)
}

function day02_part02(input) {
    var y = 0,
        x = 0,
        aim = 0

    for (var i in input) {
        i = parseInt(i)
        var data = input[i].split(" ")
        var value = parseInt(data[1])

        switch (data[0]) {
            case "forward":
                x += value;
                y += aim * value
                break
            case "up":
                aim -= value;
                break
            case "down":
                aim += value;
                break
        }
    }

    console.log(`Part 2: X: ${x}, Y: ${y}, Result: ${x * y}`)
}

fetch("./docs/day02.json")
    .then(response => { return response.json(); })
    .then(data => {
        day02_part01(data)
        day02_part02(data)
    });