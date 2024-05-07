let playlist = ["Hey Jude by the Beatles", "Like a rolling stone by Bob Dylan", "I'm a believer by Smash Mouth", "Johnny B. Goode by Chuck Berry", "I want to break free by Queen", "What's going on by Marvin Gaye", "Get your freak on by Dire Straits", "Smells like teen spirit by Nirvana", "Innuendo by Stan Getz", "I'm still standing by Elton John", "Respect by Aretha Franklin", "Good Vibrations by The Beach Boys", "What'd I Say by Ray Charles", "Imagine by John Lennon", "Billie Jean by Michael Jackson", "Sweet Child O' Mine by Guns N' Roses"];

for (let i = 0; i < playlist.length; i++) {
  if (playlist[i].includes("e")) {
    console.log(playlist[i]);
  }
}