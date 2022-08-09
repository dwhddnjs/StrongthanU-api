// import Ranker from "../models/ranker";
const Ranker = require("../models/ranker");
// import { getMultiple } from "../util";
const { getMultiple } = require("../util");

const resolver = {
  Query: {
    async allRankers() {
      return await Ranker.find();
    },

    async manRankers() {
      return await (
        await Ranker.find()
      )
        .filter((el) => el.gender === "남자")
        .sort((a, b) => {
          const aTotalWeight = a.bench + a.dead + a.squat;
          const bTotalWeight = b.bench + b.dead + b.squat;
          return (
            getMultiple(bTotalWeight, b.body) -
            getMultiple(aTotalWeight, a.body)
          );
        });
    },

    async womanRankers() {
      return await (
        await Ranker.find()
      )
        .filter((el) => el.gender === "여자")
        .sort((a, b) => {
          const aTotalWeight = a.bench + a.dead + a.squat;
          const bTotalWeight = b.bench + b.dead + b.squat;
          return (
            getMultiple(bTotalWeight, b.body) -
            getMultiple(aTotalWeight, a.body)
          );
        });
    },
  },

  Mutation: {
    async addRanker(
      _,
      { rankerInput: { nickname, gender, body, squat, bench, dead } }
    ) {
      const newRanker = new Ranker({
        nickname: nickname,
        gender: gender,
        body: body,
        squat: squat,
        bench: bench,
        dead: dead,
      });

      const res = await newRanker.save();

      return {
        id: res.id,
        ...res._doc,
      };
    },
  },
};

// export default resolver;
module.exports = resolver;
