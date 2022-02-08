const getBread = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hämtat bröd');
    }, 1000);
});

const toastBread = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Bröd rostat');
    }, 2000);
});

const butterBread = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Bröd smörat');
    }, 1500);
});

const applyCheese = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Osten är slut');
    }, 1000);
});

// getBread.then((value) => {
//     console.log(value);
// }).catch(() => {});

async function makeToast() {
    try {
        const bread = await getBread;
        console.log(bread);
        const breadToasted = await toastBread;
        console.log(breadToasted);
        const breadButtered = await butterBread;
        console.log(breadButtered);
        const cheeseApplied = await applyCheese;
        console.log(cheeseApplied);
    } catch (error) {
        console.log(error);
    }
}

makeToast();

