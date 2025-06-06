// bodaFareCalculator
const readline = require('readline');

function calculateBodaFare() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Unafika wapi Mkubwa? Kilometer ngapi?: ", (answer) => {
        const distanceInKm = parseFloat(answer.trim());

        if (isNaN(distanceInKm) || distanceInKm < 0) {
            console.log("Tafadhali ingiza nambari sahihi ya kilomita.");
            rl.close();
            return;
        }

        // Calculate fare
        const baseFare = 50;
        const chargePerKm = 15;
        const distanceCharge = distanceInKm * chargePerKm;
        const totalFare = baseFare + distanceCharge;

        // Display results
        console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
        console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
        console.log(`Mpaka Uko: KES ${distanceCharge}`);
        console.log(`Total: KES ${totalFare}\n`);
        console.log("Panda Pikipiki!");

        rl.close();
    });
}

// Call the function to execute
calculateBodaFare();