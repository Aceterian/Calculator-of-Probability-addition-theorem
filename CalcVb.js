const a = 1/3;
const b = 1/3;

function calculateProbability(eventA, eventB) {
    if (eventA < 0 || eventA > 1 || eventB < 0 || eventB > 1) {
        throw new Error("Вероятности должны быть значениями от 0 до 1.");
    }

    return eventA + eventB;
}

function roundToHundredThousandths(value) {
    return parseFloat(value.toFixed(4));
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("probabilityForm");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const probabilityA = parseFloat(document.getElementById("eventA").value);
        const probabilityB = parseFloat(document.getElementById("eventB").value);

        try {
            const totalProbability = calculateProbability(probabilityA, probabilityB);
            const roundedProbability = roundToHundredThousandths(totalProbability);
            resultDiv.textContent = `Суммарная вероятность: ${roundedProbability}`;
        } catch (error) {
            resultDiv.textContent = error.message;
        }
    });
});

