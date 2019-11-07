
function main() {
    const inputNumber = process.argv.slice(2)[0]
    if (!inputNumber || isNaN(inputNumber) || inputNumber < 0) {
        console.log("Missing argument.");
        return
    }

    fitEightNumbers(inputNumber)
}

function fitEightNumbers(inputNumber) {
    const multiple = Math.floor(inputNumber / 8)
    const relatedSideCount = 2

    const isMinimum = multiple - relatedSideCount < 0
    const startIndex = isMinimum ? 0 : multiple - relatedSideCount

    const eightNumbers = Array(relatedSideCount * 2 + 1).fill().map((_, i) => (startIndex + i) * 8);
    console.log(eightNumbers.join(' '))
}

main()
