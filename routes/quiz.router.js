const express = require('express');
const router = express.Router();

const allQuizzes = [
  {
    id: "ebdd93a2-97a3-4ef5-b8db-0e50e2831977",
    name: "I don't play the odds, I play the man",
    coverImageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81DPd3NRq0L._RI_.jpg",
    totalScore: 50,
    questions: [
      {
        id: "0200aa14-5d75-4a66-8b1b-85d516e504ce",
        question:
          "Harvey Specter is considered one of New York's most brilliant corporate litigation lawyers, but what's his unusual middle name?",
        points: 10,
        negativePoints: 5,
        options: [
          {
            id: "f098b3d8-0080-40d0-bb34-7be85310a06f",
            content: `Michael`,
            isAnswer: false,
          },
          {
            id: "9f4d88cf-6bf1-45d9-a75d-442f882310cd",
            content: `Reginald`,
            isAnswer: true,
          },
          {
            id: "9f4d88cf-6bf1-45d9-a75d-442f882318cd",
            content: `Brandon`,
            isAnswer: false,
          },
        ],
      },
      {
        id: "590f528f-d485-49d1-b009-cd899cbe83c0",
        question: "Which partner loves mudding and had a cat named Bruno?",
        points: 10,
        negativePoints: 5,
        options: [
          {
            id: "b73e3c48-cd6f-48c8-a0d5-2a98b83afe58",
            content: `Harvey Specter`,
            isAnswer: false,
          },
          {
            id: "4b5231dd-4e84-4d2a-bb8c-3cc88474fb07",
            content: `Jessica Pearson`,
            isAnswer: false,
          },
          {
            id: "f55774b0-c50b-4ea5-b610-5578845fd6b3",
            content: `Louis Litt`,
            isAnswer: true,
          },
        ],
      },
      {
        id: "2bb770b4-fc78-4d42-aa0c-924c7f17d02e",
        question: "Which English lawyer described Donna Paulsen as having \"a body like Elizabeth Hurley and the sass of a Maggie Thatcher\" in season 3?",
        points: 10,
        negativePoints: 5,
        options: [
          {
            id: "6550799e-232a-4d64-8a6d-22f5665e0409",
            content: `Michael Ross`,
            isAnswer: false,
          },
          {
            id: "cb5b38ca-8036-48e1-8ebd-58be67a11521",
            content: `Harvey Specter`,
            isAnswer: false,
          },
          {
            id: "30d6b3ac-09e4-4be8-b1c5-bdb3df7b4e58",
            content: `Stephen Huntley`,
            isAnswer: true,
          },
        ],
      },
      {
        id: "75ed805c-1849-49ba-9a47-5de5a8418d26",
        question:
          "Where did Harvey Specter work before he became an associate at Pearson Hardman?",
        points: 10,
        negativePoints: 5,
        options: [
          {
            id: "acd08455-898c-4a35-8b10-5f633ebbf79a",
            content: `New York District Attorney's Office`,
            isAnswer: true,
          },
          {
            id: "61c7fb9a-993c-4e3a-acfb-df6372f15d7f",
            content: `Bratton Gould`,
            isAnswer: false,
          },
          {
            id: "e33f56cd-7c54-464a-bc9d-78f65578d2bc",
            content: `Darby International`,
            isAnswer: false,
          },
        ],
      },
      {
        id: "eadc854f-5d80-4f7b-a3f2-44f39deab200",
        question:
          "Jessica Pearson and Daniel Hardman ousted three named partners in order to create Pearson Hardman. What was the firm called before the ousting?",
        points: 10,
        negativePoints: 5,
        options: [
          {
            id: "9278cb36-320b-48c8-963f-7d7a3e036db4",
            content: `Specter Zane Litt`,
            isAnswer: false,
          },
          {
            id: "605524ec-00b4-4101-acca-900c87c09a25",
            content: `Gordon Schmidt Van Dyke`,
            isAnswer: true,
          },
          {
            id: "7dd74db4-b71e-4404-87e8-eec35685d3b4",
            content: `Pearson Hardman`,
            isAnswer: false,
          },
        ],
      },
    ],
  },
  {
    id: "fffa23a7-4d8c-4f09-8a63-5e1bc63ee7ec",
    name: "Make world a better place",
    coverImageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81u1lvnc74L._RI_.jpg",
    totalScore: 50,
    questions: [
      {
        id: "04c98537-9d22-4bec-83b7-ad4784162b1a",
        question: "Gavin Belson originally offered how much to buy Pied Piper?",
        points: 10,
        negativePoints: 5,
        options: [
          {
            id: "b829351e-9f55-4abd-a1d7-aa7a35404ce9",
            content: `$1,000,000`,
            isAnswer: false,
          },
          {
            id: "b45aa490-5a5f-41a3-8177-cca8b64b172e",
            content: `$600,000`,
            isAnswer: true,
          },
          {
            id: "a2b0c1d2-4f4f-4eef-9279-1a2ac7549700",
            content: `$100,000`,
            isAnswer: false,
          },
        ],
      },
      {
        id: "bee89d5a-8f2f-43b9-b879-02f1cdb8937d",
        question: "At TechCrunch Disrupt, Jared was on what drug?",
        points: 10,
        negativePoints: 5,
        options: [
          {
            id: "abef93aa-d1b8-4eeb-9694-26129a44eef5",
            content: `Adderall`,
            isAnswer: true,
          },
          {
            id: "fb380e5f-9d81-4f85-bf05-060f47b31b49",
            content: `Opiates`,
            isAnswer: false,
          },
          {
            id: "34cdb860-60e1-44de-b0ad-43d7a3ebfed8",
            content: `Weed`,
            isAnswer: false,
          },
        ],
      },
      {
        id: "2722ecd0-2d54-4836-8284-76fde5abe7d0",
        question: "Where did Richard first meet Peter Gregory?",
        points: 10,
        negativePoints: 5,
        options: [
          {
            id: "6377d841-c842-444a-b473-352578228ea7",
            content: `At a coffee shop`,
            isAnswer: false,
          },
          {
            id: "046e10c2-bca0-4f1e-940a-e5f225d0d374",
            content: `At a tech start-up competition`,
            isAnswer: false,
          },
          {
            id: "7108c1aa-3398-48c5-be3c-d7fda8b80444",
            content: `Outside a TED talk`,
            isAnswer: true,
          },
        ],
      },
      {
        id: "2a15eafe-8c11-40f1-89ab-3b8f55104e7a",
        question:
          "What is the name of the test that measures the performance of lossless compression software?",
        points: 10,
        negativePoints: 5,
        options: [
          {
            id: "d793b38e-9bc8-4421-be70-6fa2ded81933",
            content: `TechCrunch Test`,
            isAnswer: false,
          },
          {
            id: "289c2daa-469e-4f19-b27b-df6aa000f30e",
            content: `Compression Score`,
            isAnswer: false,
          },
          {
            id: "4ac36f5c-2bdd-4d1c-a2b2-60842f62ebd9",
            content: `Weissman Score`,
            isAnswer: true,
          },
        ],
      },
      {
        id: "1af0ab03-c699-4043-9967-7bbf930a9e39",
        question:
          "Which middle-out compression company tricked Pied Piper into revealing their algorithms?",
        points: 10,
        negativePoints: 5,
        options: [
          {
            id: "16bad4f8-d48f-41b5-a165-9aa6f5eff54e",
            content: `Endframe`,
            isAnswer: true,
          },
          {
            id: "2143d30a-0066-4f98-ae4f-bfc740171ef9",
            content: `Hooli`,
            isAnswer: false,
          },
          {
            id: "3003f123-7994-4994-ae8f-79630d91761a",
            content: `Google`,
            isAnswer: false,
          },
        ],
      },
    ],
  },
];

router.route('/')
  .get(async (req, res) => {
    res.json({ success: true, allQuizzes });
  })

module.exports = router;