import * as cheerio from 'cheerio';

export default class MyFitnessPalExtractor {

    getMacros() {
        const macros = {
            dailyGoal: new Map(),
            dailyRemaining: new Map(),
            dailyTotal: new Map(),
        };

        const url = 'https://www.myfitnesspal.com/food/diary/aaronjbergman?date=2021-05-02';

        fetch(url, {
            method: 'get'
        }).then(res => {
            return res.json();
        })
        .then(data => console.log(data))
        .catch(error => console.log('error'));
    }
}