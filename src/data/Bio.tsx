
export function BioContent(age: number, codingDuration: number){
  return [
    {
      title: 'A bit about me',
      paragraphs: [
        "Hey 👋🏽 I'm Alex, a " +
          age +
          " year old Web Developer living in London. I moved to London in 2023 to expose myself to better opportunites and I love it here, I'm definitely more of a city person. My favourite thing about London is that you can meet people from all walks of life, just walking down a busy street you hear so many different accents!",
        "In my free time, I enjoy going to the gym four days a week, watching anime, reading (particularly Sci-Fi; Isaac Asimov is my favourite author), listening to music, playing Magic the Gathering (and other board and computer games), and honing my coding skills.",
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
        "Recently my career has taken me down the path of Full-Stack development. Being able to work on both the client and server sides gives me a broader perspective and allows me to create more cohesive applications. I find it incredibly rewarding to see how the different parts of a project come together to form a complete product.",
        "My drive is always improving on myself, finding ways that I can be a better and more efficient developer. As part of my introduction to Full-Stack development, I've been diving into containerisation with Docker and learning Linux command line to better understand server environments. As well as exploring cloud services like AWS to enhance my deployment skills. It's an exciting journey, and I'm eager to see where it takes me next!",
      ],
    },
  ];
} 