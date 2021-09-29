const timePeriods = document.querySelectorAll(".timePeriod")
const timers = document.querySelectorAll(".timers__time")

document.addEventListener('onload', changeData('daily'))

for(let i = 0; i < timePeriods.length; i++) {
    timePeriods[i].addEventListener('click', (node)=> {
        if(node.target === timePeriods[0]) {
            changeData('daily');
            timePeriods[0].classList.add("textSelect");
            timePeriods[1].classList.remove("textSelect");
            timePeriods[2].classList.remove("textSelect");
        } else if(node.target === timePeriods[1]) {
            changeData('weekly');
            timePeriods[0].classList.remove("textSelect");
            timePeriods[1].classList.add("textSelect");
            timePeriods[2].classList.remove("textSelect");
        } else if(node.target === timePeriods[2]) {
            changeData('monthly');
            timePeriods[0].classList.remove("textSelect");
            timePeriods[1].classList.remove("textSelect");
            timePeriods[2].classList.add("textSelect");
        }
    })
}

function changeData(time) {
    const timef = time;
    for(let i = 0; i < timers.length; i++) {
        const description = timers[i].childNodes[1].id
        
        const descriptionInfo = getDescription(description);

        if(timef === 'daily') {
            timers[i].childNodes[1].textContent = descriptionInfo.daily.current + 'hrs';
            timers[i].childNodes[3].textContent = `Last Week - ${descriptionInfo.daily.previous} hrs`;
        } else if(timef === 'weekly') {
            timers[i].childNodes[1].textContent = descriptionInfo.weekly.current + 'hrs';
            timers[i].childNodes[3].textContent = `Last Week - ${descriptionInfo.weekly.previous} hrs`;
        } else if(timef === 'monthly') {
            timers[i].childNodes[1].textContent = descriptionInfo.monthly.current + 'hrs';
            timers[i].childNodes[3].textContent = `Last Week - ${descriptionInfo.monthly.previous} hrs`;
        }
    };
};

function getDescription(description) {
    let descriptionInfo;
    switch (description) {
        case 'dWork':
            descriptionInfo = work;
            break;
        case 'dPlay':
            descriptionInfo = play;
            break;
        case 'dStudy':
            descriptionInfo = study;
            break;
        case 'dExercise':
            descriptionInfo = exercise;
            break;
        case 'dSocial':
            descriptionInfo = social;
            break;
        case 'dSelf':
            descriptionInfo = selfCare;
            break;
        default:
            break;
    }
    return descriptionInfo;
}