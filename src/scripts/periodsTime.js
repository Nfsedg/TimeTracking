class TimeFrames {
    constructor() {
        this.daily = {
            current: 0,
            previous: 0
        };
        this.weekly = {
            current: 0,
            previous: 0
        };
        this.monthly = {
            current: 0,
            previous: 0
        };
    };
    addTime(data, {current, previous = 0}) {
        if(typeof current === 'number' && typeof previous === 'number')
        switch (data) {
            case "daily":
                this.daily.current = current;
                this.daily.previous = previous;
                break;
            case "weekly":
                this.weekly.current = current;
                this.weekly.previous = previous;
                break;
            case "monthly":
                this.monthly.current = current;
                this.monthly.previous = previous;
                break;
            default:
                console.warn("Time no allowed. (daily, weekly, monthly)")
                break;
        } else {
            console.warn("Only numbers as parameter")
        }
    };
    setTime({
        dCur,
        dPrev,
        wCur,
        wPrev,
        mCur,
        mPrev
    }) {
        this.addTime("daily", { current: dCur, previous: dPrev });
        this.addTime("weekly", { current: wCur, previous: wPrev });
        this.addTime("monthly", { current: mCur, previous: mPrev });
    };
};

const work = new TimeFrames()
work.setTime({
    dCur: 5,
    dPrev: 7,
    wCur: 32,
    wPrev: 36,
    mCur: 103,
    mPrev: 128
})


const play = new TimeFrames();
play.setTime({
    dCur: 1,
    dPrev: 2,
    wCur: 10,
    wPrev: 8,
    mCur: 23,
    mPrev: 29
})

const study = new TimeFrames()
study.setTime({
    dCur: 0,
    dPrev: 1,
    wCur: 4,
    wPrev: 7,
    mCur: 13,
    mPrev: 19
});
const exercise = new TimeFrames()
exercise.setTime({
    dCur: 1,
    dPrev: 1,
    wCur: 4,
    wPrev: 5,
    mCur: 11,
    mPrev: 18
});

const social = new TimeFrames()
social.setTime({
    dCur: 1,
    dPrev: 3,
    wCur: 5,
    wPrev: 10,
    mCur: 21,
    mPrev: 23
});
const selfCare = new TimeFrames()
selfCare.setTime({
    dCur: 0,
    dPrev: 1,
    wCur: 2,
    wPrev: 2,
    mCur: 7,
    mPrev: 11
});