const likes = names => {

    const options = [
        'no one likes this',
        `${names[0]} likes this`,
        `${names[0]} and ${names[1]} like this`,
        `${names[0]}, ${names[1]} and ${names[2]} like this`,
        `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    ]

    return options[Math.min(4, names.length)]
}

/* const likes = names => {
    switch (names.length) {
        case 0:
            return 'no one likes this'
        case 1:
            return `${names[0]} likes this`
        case 2:
            return `${names[0]} and ${names[1]} like this`
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`
        default:
            return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
}
 */

// const result = likes(['Fer', 'Flyser', 'Walcho', 'Jabricio', 'Lión'])
const result = likes([])

console.log(result)