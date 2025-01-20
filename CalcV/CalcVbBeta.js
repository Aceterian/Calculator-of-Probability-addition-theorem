//ТЕОРЕМА СЛОЖЕНИЯ ВЕОЯТНОЕСТЕ - P(A+B) = P(A) + P(B)
const a = 1/3;
const b = 1/3;

function calculateProbability(eventA, eventB) {
    // Функция вычисляет вероятность 
    // eventA: Вероятность события A 
    // eventB: Вероятность события B 

    if (eventA < 0 || eventA > 1 || eventB < 0 || eventB > 1) {
        throw new Error("Вероятности должны быть значениями от 0 до 1.");
    }

    return eventA + eventB;
}

function roundToHundredThousandths(value) {
    // Функция округляет значение
    return parseFloat(value.toFixed(4));
}

const probabilityA = a;
const probabilityB = b;

const totalProbability = calculateProbability(probabilityA, probabilityB);
const roundedProbability = roundToHundredThousandths(totalProbability);
console.log(`Суммарная вероятность появления одного из двух событий: ${roundedProbability}`);