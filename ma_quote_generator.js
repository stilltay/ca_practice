const beginning = ['The art of living', 'Whatever time you choose', 'When you arise in the morning', 'The only wealth', 'You have power'];

const middle = ['realize this', 'is more like wrestling', 'is the right time', 'not outside events', 'show me I am making a mistake'];

const end = ['against the present.', 'what stands in the way becomes the way.', 'is a perspective, not the truth.', 'the organization of the non-obvious.', 'to breathe, to think, to enjoy, to love.'];

const generateRandomQuote= (start, mid, end) => {
    let phrase1 = start[Math.floor(Math.random() * start.length)];
    let phrase2 = mid[Math.floor(Math.random() * mid.length)];
    let phrase3 = end[Math.floor(Math.random() * end.length)];
    return phrase1 + ' ' + phrase2 + " " + phrase3;
}

console.log(generateRandomQuote(beginning, middle, end));

