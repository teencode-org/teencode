import faker from 'faker';

export default {
  knownCurriculum: () => {
    return {
      'firstSession': {
        title: "First Session",
        description: 'This is the description of the first session in the curriculum',
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
      }
    }
  },

  randomCurriculi: (times) => {
    const  result = {};
    [...new Array(times)].map(() => {
      result[`${faker.random.word()}Session`] = {
        title: faker.lorem.words(),
        description: faker.lorem.sentences(),
        objectives: {
          title: faker.lorem.text(),
          values: [...new Array(2)].map(() => faker.lorem.sentence())
        },
        resources: {
          title: faker.lorem.text(),
          values: [...new Array(2)].map(() => faker.lorem.sentence())
        },
        projects: {
          title: faker.lorem.text(),
          values: [...new Array(2)].map(() => faker.lorem.sentence())
        }
      }
    });
    return result;
  }
}