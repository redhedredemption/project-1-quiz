// Define an array containing all the questions, organized by category
const allQuestions = [
    {
      category: "musicians", // Category of the question
      question: "Which artist recorded the album 'Back to Black'?", // The question text
      answers: [ // An array of possible answers with a correct flag
        { text: "Amy Winehouse", correct: true }, // Correct answer
        { text: "Adele", correct: false },
        { text: "Taylor Swift", correct: false },
        { text: "Beyoncé", correct: false }
      ]
    },
    {
      category: "musicians",
      question: "Who is known as the 'Queen of Soul'?",
      answers: [
        { text: "Aretha Franklin", correct: true },
        { text: "Whitney Houston", correct: false },
        { text: "Diana Ross", correct: false },
        { text: "Etta James", correct: false }
      ]
    },
    {
      category: "musicians",
      question: "Which legendary guitarist played with the bands Cream and The Yardbirds?",
      answers: [
        { text: "Eric Clapton", correct: true },
        { text: "Jimmy Page", correct: false },
        { text: "Jimi Hendrix", correct: false },
        { text: "Keith Richards", correct: false }
      ]
    },
    {
      category: "music",
      question: "What song is often associated with Queen's lead singer Freddie Mercury's vocal range?",
      answers: [
        { text: "'Bohemian Rhapsody'", correct: true },
        { text: "'We Will Rock You'", correct: false },
        { text: "'Another One Bites the Dust'", correct: false },
        { text: "'Don't Stop Me Now'", correct: false }
      ]
    },
    {
      category: "musicians",
      question: "Who was the lead singer of the band The Doors?",
      answers: [
        { text: "Jim Morrison", correct: true },
        { text: "David Bowie", correct: false },
        { text: "Mick Jagger", correct: false },
        { text: "Roger Daltrey", correct: false }
      ]
    },
    {
      category: "musicians",
      question: "Which artist recorded the album 'Thriller'?",
      answers: [
        { text: "Michael Jackson", correct: true },
        { text: "Prince", correct: false },
        { text: "Stevie Wonder", correct: false },
        { text: "David Bowie", correct: false }
      ]
    },
    {
      category: "musicians",
      question: "What is the real name of rapper Eminem?",
      answers: [
        { text: "Marshall Mathers", correct: true },
        { text: "Christopher Wallace", correct: false },
        { text: "Curtis Jackson", correct: false },
        { text: "Shawn Carter", correct: false }
      ]
    },
    {
      category: "musicians",
      question: "Who was the lead guitarist for the band Nirvana?",
      answers: [
        { text: "Kurt Cobain", correct: false },
        { text: "Dave Grohl", correct: false },
        { text: "Krist Novoselic", correct: true },
        { text: "Pat Smear", correct: false }
      ]
    },
    {
      category: "music",
      question: "What was the first music video played on MTV?",
      answers: [
        { text: "'Video Killed the Radio Star' by The Buggles", correct: true },
        { text: "'Thriller' by Michael Jackson", correct: false },
        { text: "'Billie Jean' by Michael Jackson", correct: false },
        { text: "'Money for Nothing' by Dire Straits", correct: false }
      ]
    },
    {
      category: "musicians",
      question: "Which artist sang 'I Will Always Love You'?",
      answers: [
        { text: "Whitney Houston", correct: true },
        { text: "Celine Dion", correct: false },
        { text: "Mariah Carey", correct: false },
        { text: "Dolly Parton", correct: false }
      ]
    },
    {
      category: "musicians",
      question: "Who was the drummer for the band The Beatles?",
      answers: [
        { text: "Ringo Starr", correct: true },
        { text: "Charlie Watts", correct: false },
        { text: "Keith Moon", correct: false },
        { text: "John Bonham", correct: false }
      ]
    },
    {
      category: "musicians",
      question: "Which female artist won the most Grammy Awards in a single night?",
      answers: [
        { text: "Beyoncé", correct: true },
        { text: "Adele", correct: false },
        { text: "Taylor Swift", correct: false },
        { text: "Mariah Carey", correct: false }
      ]
    },
    {
      category: "music",
      question: "What band sang the song 'Wonderwall'?",
      answers: [
        { text: "Oasis", correct: true },
        { text: "Blur", correct: false },
        { text: "Radiohead", correct: false },
        { text: "Coldplay", correct: false }
      ]
    },
    {
      category: "music",
      question: "What artist recorded the album 'The Wall'?",
      answers: [
        { text: "Pink Floyd", correct: true },
        { text: "Led Zeppelin", correct: false },
        { text: "The Who", correct: false },
        { text: "The Rolling Stones", correct: false }
      ]
    },
    {
      category: "musicians",
      question: "Who was known as the 'Godfather of Soul'?",
      answers: [
        { text: "James Brown", correct: true },
        { text: "Ray Charles", correct: false },
        { text: "Otis Redding", correct: false },
        { text: "Sam Cooke", correct: false }
      ]
    },
    {
      category: "music",
      question: "What was the first music video to air on MTV?",
      answers: [
        { text: "'Video Killed the Radio Star' by The Buggles", correct: true },
        { text: "'Thriller' by Michael Jackson", correct: false },
        { text: "'Billie Jean' by Michael Jackson", correct: false },
        { text: "'Money for Nothing' by Dire Straits", correct: false }
      ]
    },
    {
      category: "musicians",
      question: "Who was the lead singer of the band The Who?",
      answers: [
        { text: "Roger Daltrey", correct: true },
        { text: "Pete Townshend", correct: false },
        { text: "John Entwistle", correct: false },
        { text: "Keith Moon", correct: false }
      ]
    },
    {
      category: "musicians",
      question: "What was Elvis Presley's middle name?",
      answers: [
        { text: "Aaron", correct: true },
        { text: "John", correct: false },
        { text: "Michael", correct: false },
        { text: "David", correct: false }
      ]
    },
    {
      category: "musicians",
      question: "Who was the lead singer of the band Queen?",
      answers: [
        { text: "Freddie Mercury", correct: true },
        { text: "David Bowie", correct: false },
        { text: "Robert Plant", correct: false },
        { text: "Roger Taylor", correct: false }
      ]
    },
    {
      category: "musicians",
      question: "What is the name of the lead vocalist for the band U2?",
      answers: [
        { text: "Bono", correct: true },
        { text: "The Edge", correct: false },
        { text: "Adam Clayton", correct: false },
        { text: "Larry Mullen Jr.", correct: false }
      ]
    },
    {
      category: "musicians",
      question: "Who was the lead singer of the band The Rolling Stones?",
      answers: [
        { text: "Mick Jagger", correct: true },
        { text: "Keith Richards", correct: false },
        { text: "Charlie Watts", correct: false },
        { text: "Brian Jones", correct: false }
      ]
    },
    {
      category: "music",
      question: "What band was formed by brothers Angus and Malcolm Young in 1973?",
      answers: [
        { text: "AC/DC", correct: true },
        { text: "Led Zeppelin", correct: false },
        { text: "Pink Floyd", correct: false },
        { text: "The Rolling Stones", correct: false }
      ]
    },
    {
      category: "musicians",
      question: "What is the real name of rapper Snoop Dogg?",
      answers: [
        { text: "Calvin Cordozar Broadus Jr.", correct: true },
        { text: "Marshall Mathers", correct: false },
        { text: "Andre Romelle Young", correct: false },
        { text: "Shawn Corey Carter", correct: false }
      ]
    },
    {
      category: "musicians",
      question: "What was the name of the lead singer for the band Nirvana?",
      answers: [
        { text: "Kurt Cobain", correct: true },
        { text: "Dave Grohl", correct: false },
        { text: "Krist Novoselic", correct: false },
        { text: "Pat Smear", correct: false }
      ]
    },
    {
      category: "music",
      question: "What song is often associated with Prince's guitar solo?",
      answers: [
        { text: "'Purple Rain'", correct: true },
        { text: "'When Doves Cry'", correct: false },
        { text: "'Kiss'", correct: false },
        { text: "'1999'", correct: false }
      ]
    },
    {
      category: "musicians",
      question: "Who was the drummer for the band Nirvana?",
      answers: [
        { text: "Dave Grohl", correct: true },
        { text: "Chad Channing", correct: false },
        { text: "Taylor Hawkins", correct: false },
        { text: "Krist Novoselic", correct: false }
      ]
    },
    {
      category: "music",
      question: "Which artist recorded the album 'The Dark Side of the Moon'?",
      answers: [
        { text: "Pink Floyd", correct: true },
        { text: "The Beatles", correct: false },
        { text: "Led Zeppelin", correct: false },
        { text: "The Rolling Stones", correct: false }
      ]
    },
    {
      category: "music",
      question: "What band was Jimi Hendrix best known for?",
      answers: [
        { text: "The Jimi Hendrix Experience", correct: true },
        { text: "Led Zeppelin", correct: false },
        { text: "The Rolling Stones", correct: false },
        { text: "The Doors", correct: false }
      ]
    },
    {
      category: "musicians",
      question: "What is the real name of rapper Jay-Z?",
      answers: [
        { text: "Shawn Carter", correct: true },
        { text: "Calvin Cordozar Broadus Jr.", correct: false },
        { text: "Marshall Mathers", correct: false },
        { text: "Andre Romelle Young", correct: false }
      ]
    },
    {
      category: "musicians",
      question: "Who sang the hit song 'Purple Haze'?",
      answers: [
        { text: "Jimi Hendrix", correct: true },
        { text: "The Rolling Stones", correct: false },
        { text: "The Beatles", correct: false },
        { text: "Led Zeppelin", correct: false }
      ]
    },
    {
      category: "music",
      question: "What band sang the song 'Smoke on the Water'?",
      answers: [
        { text: "Deep Purple", correct: true },
        { text: "Led Zeppelin", correct: false },
        { text: "Black Sabbath", correct: false },
        { text: "Pink Floyd", correct: false }
      ]
    },
    {
      category: "music",
      question: "What song is often associated with Elvis Presley's hip movements?",
      answers: [
        { text: "'Hound Dog'", correct: true },
        { text: "'Jailhouse Rock'", correct: false },
        { text: "'Heartbreak Hotel'", correct: false },
        { text: "'Love Me Tender'", correct: false }
      ]
    },
    {
      category: "music",
      question: "What band sang the hit song 'Stairway to Heaven'?",
      answers: [
        { text: "Led Zeppelin", correct: true },
        { text: "Pink Floyd", correct: false },
        { text: "The Rolling Stones", correct: false },
        { text: "The Beatles", correct: false }
      ]
    },
    {
      category: "music",
      question: "What song is often associated with David Bowie's alter ego Ziggy Stardust?",
      answers: [
        { text: "'Starman'", correct: true },
        { text: "'Space Oddity'", correct: false },
        { text: "'Heroes'", correct: false },
        { text: "'Let's Dance'", correct: false }
      ]
    },
    {
      category: "musicians",
      question: "Who sang the hit song 'Billie Jean'?",
      answers: [
        { text: "Michael Jackson", correct: true },
        { text: "Prince", correct: false },
        { text: "David Bowie", correct: false },
        { text: "Elvis Presley", correct: false }
      ]
    },
    {
      category: "music",
      question: "What was the first album released by The Beatles?",
      answers: [
        { text: "'Please Please Me'", correct: true },
        { text: "'Revolver'", correct: false },
        { text: "'Rubber Soul'", correct: false },
        { text: "'Abbey Road'", correct: false }
      ]
    },
    {
      category: "musicians",
      question: "Who was the lead singer of the band The Smiths?",
      answers: [
        { text: "Morrissey", correct: true },
        { text: "Johnny Marr", correct: false },
        { text: "Andy Rourke", correct: false },
        { text: "Mike Joyce", correct: false }
      ]
    },
    {
      category: "music",
      question: "What band recorded the album 'Led Zeppelin IV'?",
      answers: [
        { text: "Led Zeppelin", correct: true },
        { text: "The Rolling Stones", correct: false },
        { text: "The Beatles", correct: false },
        { text: "Pink Floyd", correct: false }
      ]
    },
    {
      category: "musicians",
      question: "Who sang the hit song 'I Wanna Dance with Somebody'?",
      answers: [
        { text: "Whitney Houston", correct: true },
        { text: "Mariah Carey", correct: false },
        { text: "Celine Dion", correct: false },
        { text: "Adele", correct: false }
      ]
    },
    {
      category: "music",
      question: "What band sang the song 'Comfortably Numb'?",
      answers: [
        { text: "Pink Floyd", correct: true },
        { text: "The Rolling Stones", correct: false },
        { text: "The Who", correct: false },
        { text: "Led Zeppelin", correct: false }
      ]
    }
  ];