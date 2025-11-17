
export function BioContent(age: number, codingDuration: number){
  return [
    {
      title: 'A bit about me',
      paragraphs: [
        "Hey 👋🏽 I'm Alex, a " +
          age +
          " year old Web Developer living in London. I moved to London in 2023 to expose myself to better opportunites and I love it here, I'm definitely more of a city person. My favourite thing about London is that you can meet people from all walks of life, just walking down a busy street you hear so many different accents!",
        "In my free time, I enjoy going to the gym four days a week, watching anime (currently One Piece), reading (particularly Sci-Fi; Isaac Asimov is my favourite author), listening to music, and honing my coding skills (I'm currently learning Gleam).",
      ],
    },
    {
      title: 'How it all started',
      paragraphs: [
        "I've always been fascinated by tech. When I was 14, my brother and I built my first computer together. Before that, you'd catch me gaming on my Netbook, playing World of Warcraft or Runescape. I also spent a lot of time playing Call of Duty on my Xbox. What really got me hooked was how tech allowed me to connect with people from all over.",
        "But I.T. never interested me at school, I feel like if I'd have known about coding back then things would have gone differently. I payed close attention to my affinity for designing and making things. So, I figured I'd go into Architecture. Turns out, that wasn't quite my thing. After university, armed with a Bachelor's in Architecture and no clue about what's next, I decided to dive into tech. Taught myself how to code, and well, the rest is history.",
      ],
    },
    {
      title: "Where I'm at now",
      paragraphs: [
        "I've been coding for " +
          codingDuration +
          " years now and I love it, especially Front-End development because it scratches the design and making itch that I've always had. One of my favourite aspects of coding is being able to step back and admire the work you've done, It's a very important part of my making process.",
        'Over these ' +
          codingDuration +
          " years I've been writing websites mainly using LAMP or JAM stacks. I've dipped my toes into the world of headless CMS and have been having a long bathe in the waters of WordPress. I much prefer learning new ways to make web applications, React being one of my latest endeavours.",
        "My drive is always improving on myself, finding ways that I can be a better and more efficient developer. Recently I've taken on the role of Release Manager at my company. As a release manager, I see the role as crucial for establishing and maintaining efficient processes. This responsibility not only ensures smooth releases but also facilitates my growth as a developer by mastering project lifecycle management and enhancing our team's workflow.",
      ],
    },
  ];
} 