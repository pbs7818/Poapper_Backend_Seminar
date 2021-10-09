// P2. json 형식의 파일을 생성하는 함수

const fs = require('fs');
const bookInformation = { 
    course_use : "Probability and Statistics",
    title : 'Probability and Statistics for Engineers and Scientists',
    edition_number : '9th',
    edition_country : 'Global',
    author : [
        'Ronald E. Walpole',
        'Raymond H. Myers',
        'Sharon L. Myers',
        'Keying Ye'
    ],
    publisher : 'Pearson',
    publication_date : '2016',
    ISBN_13 :  '9781292161365'
}
const bookInformationJSON = JSON.stringify(bookInformation, null, '\t');

fs.writeFileSync('./textbook.json', bookInformationJSON,'utf8');