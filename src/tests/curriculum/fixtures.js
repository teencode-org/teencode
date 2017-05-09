import faker from 'faker';

export default {
  knownCurriculum: () => {
    return [
      {
        title: "First Session",
        description: 'This is the description of the first session in the curriculum',
        objective: {
          title: "At the end of the week, the students should:",
          notes: [
            {description: "Be excited about learning how to code."},
            {description: "Be inspired to learn coding."},
            {description: "Be enlightened about the opportunities out there for coding."},
            {description: "Be able to use scratch to animate their names."}
          ]
        },
        resource: {
          title: "Inspirational videos about CS",
          notes: [
            {
              description: "Computer Science 101",
              href: "https://www.youtube.com/watch?v=z-OxzIC6pic"
            },
            {
              description: "Computer Science for kids",
              href: "https://www.youtube.com/watch?v=ljmfzjSW1Ew"
            }
          ]
        },
        project: {
          title: "Introduction to Scratch I",
          notes: [
            {description: "Animate your name."}
          ]
        }
      }
    ]
  },

  randomCurriculi: (times) => {
    const  result = [];
    [...new Array(times)].map((value, index) => {
      result[index] = {
        title: faker.lorem.words(),
        description: faker.lorem.sentences(),
        objective: {
          title: faker.lorem.text(),
          notes: [...new Array(2)].map(() => faker.lorem.sentence())
        },
        resource: {
          title: faker.lorem.text(),
          notes: [...new Array(2)].map(() => faker.lorem.sentence())
        },
        project: {
          title: faker.lorem.text(),
          notes: [...new Array(2)].map(() => faker.lorem.sentence())
        }
      }
    });
    return result;
  }
}