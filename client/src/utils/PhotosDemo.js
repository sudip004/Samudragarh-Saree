


export const ChoosePhoto = function ChoosePhoto() {
    const randomNumber = function getRandomNumber() {
        return Math.floor(Math.random() * 21);
    }
   const number = randomNumber();

    switch(number) {
        case 0:
            return 'url0.jpg';
        case 1:
            return 'url1.jpg';
        case 2:
            return 'url2.jpg';
        case 3:
            return 'url3.jpg';
        case 4:
            return 'url4.jpg';
        case 5:
            return 'url5.jpg';
        case 6:
            return 'url6.jpg';
        case 7:
            return 'url7.jpg';
        case 8:
            return 'url8.jpg';
        case 9:
            return 'url9.jpg';
        case 10:
            return 'url10.jpg';
        case 11:
            return 'url11.jpg';
        case 12:
            return 'url12.jpg';
        case 13:
            return 'url13.jpg';
        case 14:
            return 'url14.jpg';
        case 15:
            return 'url15.jpg';
        case 16:
            return 'url16.jpg';
        case 17:
            return 'url17.jpg';
        case 18:
            return 'url18.jpg';
        case 19:
            return 'url19.jpg';
        case 20:
            return 'url20.jpg';
        default:
            return 'default.jpg';
    }
}



