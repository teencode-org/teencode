const curriculumList = {
  firstSession: {
    title: 'First Session',
    description: "This session is essential for students to learn how to identify various tools for programming.",
    objectives: {
      title: "At the end of the week, the students should:",
      values: [
        "Be excited about learning how to code.",
        "Be inspired to learn coding.",
        "Be enlightened about the opportunities out there for coding.",
        "Be able to use scratch to animate their names."
      ]
    },
    resources: {
      title: "Inspirational videos about CS",
      values: [
        {
          name: "Computer Science 101",
          href: "https://www.youtube.com/watch?v=z-OxzIC6pic"
        },
        {
          name: "Computer Science for kids",
          href: "https://www.youtube.com/watch?v=ljmfzjSW1Ew"
        }
      ]
    },
    projects: {
      title: "Introduction to Scratch I",
      values: [
        "Animate your name."
      ]
    }
  },
  secondSession: {
    title: 'Second Session',
    description: "In this session, students learn how to use the greatest tool of computing and networking, the internet.",
    objectives: {
      title: "At the end of the week, the students should:",
      values: [
        "Be able to describe how internet and its parts.",
        "Deliver a simple pong game built using Scratch."
      ]
    },
    resources: {
      title: "Videos about the Internet",
      values: [
        {
          name: "What is the internet?",
          href: "https://www.youtube.com/watch?v=Dxcc6ycZ73M&list=PLzdnOPI1IJNfMRZm5DDxco3UdsFegvuB7"
        },
        {
          name: "An example of how the internet works when you visit a webpage",
          href: "http://thekidshouldseethis.com/post/26674356049"
        },
        {
          name: "More detailed explanation of how the internet works",
          href: "http://theshulers.com/whitepapers/internet_whitepaper"
        },
        {
          name: "Ping Pong Game: Step-by-Step Tutorial",
          href: "http://coderdojowestcork.files.wordpress.com/2012/05/ping-pong-game_tutorial.pdf"
        }
      ]
    },
    projects: {
      title: "Introduction to Scratch II",
      values: [
        "Create a Pong Game"
      ]
    }
  }
}

export default curriculumList;