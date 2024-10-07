const btn = document.querySelector('#btn');

btn.addEventListener('click' , () =>{
        window.scrollTo({
            top : 0,
            left:0,
            behavior: 'smooth'
        })
})


//counter-section
const coolproject = 1375; // replace this part with the your numbers
const teammembers = 2456;  // replace this part with the your numbers
const totalawards = 1498; // replace this part with the your numbers
const foodspecialities = 1745;  // replace this part with the your numbers

// this will make the counter to animate
function animateCounter(id, finalCount) {
    let currentCount = 0;
    const counterElement = document.getElementById(id);
     const increment = Math.ceil(finalCount / 100);   //here you can add the speed at which you want it to move with
    
    const timer = setInterval(() => {
        currentCount += increment;
        counterElement.textContent = currentCount;
        if (currentCount >= finalCount) {
            clearInterval(timer);
            counterElement.textContent = finalCount;
        }
    }, 20); // you can adjust the interval
}

// this will make it that when you load or reload the page the counter starts counting
document.addEventListener('DOMContentLoaded', () => {
    animateCounter('cool-project', coolproject);
    animateCounter('team-members', teammembers);
    animateCounter('total-awards', totalawards);
    animateCounter('food-specialities', foodspecialities);
});