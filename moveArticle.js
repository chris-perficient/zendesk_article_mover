/* Copyright (c) 2021 Perficient, Inc. - All Rights Reserved.
 *
 *  Unauthorized copying of this file, via any medium is strictly prohibited.
 *  Proprietary and confidential.
 */

"use strict";
require("dotenv").config();
const axios = require("axios");
const token = process.env.ZENDESK_TOKEN;
const encoded = Buffer.from(
  "christopher.mcardle@perficient.com/token:" + token
).toString("base64");

const { articleToBeMoved, toSection, fromSection } = require("./main");

const twilioFlexIds = [
  "360007827413",
  "360007771634",
  "360008115314",
  "360008206973",
  "360008436753",
  "360007828213",
  "360008582593",
  "360002747613",
  "360002747593",
  "4408234374163",
  "360008209893",
  "360008040594",
  "360008029154",
  "360008028994",
  "360007924234",
  "360008661193",
  "360008482613",
  "360011720573",
];
const amazonConnectIds = [
  "360007827433",
  "360007827453",
  "360008339674",
  "360008339694",
  "360008362394",
  "360008339654",
  "360008436553",
  "360008436533",
  "360008339714",
  "360008436633",
  "360008182373",
  "360007828273",
  "360009366793",
  "360007828253",
  "4406974986643",
  "4406974986643",
  "4405384322835",
  "4416889490195",
  "1500001355681",
  "360010640954",
  "360011767213",
  "4405824645651",
  "4405824643603",
  "4405816123411",
  "4405824105363",
  "4405824547091",
  "4405816428691",
  "4405816422547",
  "4405816425875",
  "4405824583443",
  "1500001755702",
  "4551331293843",
  "4410663138195",
  "4408191519123",
  "4564958881171",
];
const msoIds = [
  "360005657173",
  "360005657753",
  "360006113333",
  "360007615973",
  "360007645993",
  "360008315934",
  "360008935693",
  "360011045213",
  "360010523174",
  "1500000633701",
  "1500000746761",
  "360011720593",
  "360010600454",
  "360011745553",
  "1500000751421",
  "4404373597715",
  "4416429291923",
  "360010600434",
  "360010585854",
  "360008291414",
  "1500000774282",
  "360004915093",
  "1500000746781",
  "360011704913",
  "360011720413",
];
const clarityConnectIds = [
  "360008920733",
  "360005262593",
  "360005224994",
  "360005224974",
  "360005262573",
  "360005262553",
  "360005224954",
  "360005262533",
  "360005224934",
  "360005262493",
  "360005262473",
  "360005262453",
  "360005224914",
  "360005262433",
  "360005262413",
  "360005262393",
  "360005224834",
  "360005224814",
  "360005225034",
  "360005225014",
  "360005262513",
  "360005224854",
];
const convergeIds = [
  "1500002395662",
  "360005223334",
  "360005261253",
  "360005261233",
  "360005223314",
  "360005223294",
  "360005223274",
  "360005223254",
];

// Fetches the article to be moved
async function getArticle() {
  let domainName;
  if (twilioFlexIds.includes(fromSection)) {
    domainName = "perficient";
  } else if (amazonConnectIds.includes(fromSection)) {
    domainName = "prftamazonconnect";
  } else if (clarityConnectIds.includes(fromSection)) {
    domainName = "prft-cconnect";
  } else if (convergeIds.includes(fromSection)) {
    domainName = "prft-converge";
  } else if (msoIds.includes(fromSection)) {
    domainName = "prft-mso";
  } else {
    console.log("COULDNT FIND A MATCH. PLEASE ENSURE YOUR IDS ARE ACCURATE");
    return;
  }
  axios
    .get(
      `https://${domainName}.zendesk.com/api/v2/help_center/en-us/articles/${articleToBeMoved}`,
      { headers: { Authorization: `Basic ${encoded}` } }
    )
    .then((res) => {
      moveArticle(res.data);
      return;
    })
    .catch((err) => console.log("ERROR", err.message));
}
// Creates the article in new location
async function moveArticle(args) {
  // console.log("ARGSSSS", args);
  const {
    author_id,
    title,
    label_names,
    body,
    permission_group_id,
    user_segment_id,
    locale,
  } = args.article;

  const article = {
    body: body,
    locale: locale,
    permission_group_id: permission_group_id,
    title: title,
    user_segment_id: user_segment_id,
    draft: true,
    author_id: author_id,
    label_names: label_names,
  };
  let domainName;
  if (twilioFlexIds.includes(toSection)) {
    domainName = "perficient";
  } else if (amazonConnectIds.includes(toSection)) {
    domainName = "prftamazonconnect";
  } else if (clarityConnectIds.includes(toSection)) {
    domainName = "prft-cconnect";
  } else if (convergeIds.includes(toSection)) {
    domainName = "prft-converge";
  } else if (msoIds.includes(toSection)) {
    domainName = "prft-mso";
  } else return null;

  try {
    await axios.post(
      `https://${domainName}.zendesk.com/api/v2/help_center/sections/${toSection}/articles.json`,
      { article },
      { headers: { Authorization: `Basic ${encoded}` } }
    );
    console.log("FINISHED!!")
    // .then((res) => {
    //   // Add delete article
    //   console.log("FINISHED", res);
    // });
  } catch (error) {
    console.log(
      "Original author no longer exists. Setting Lara as Author",
      error.response.status
    );
    if (error.response.status == 404) {
      article.author_id = "1509276256102";
      await axios.post(
        `https://${domainName}.zendesk.com/api/v2/help_center/sections/${toSection}/articles.json`,
        { article },
        { headers: { Authorization: `Basic ${encoded}` } }
      )
      .catch((err) => console.log("ERROR", err.message));
      // .then((res) => {
      //   // Add delete article
      //   console.log("FINISHED");
      // });
    } else return;
    console.log("FINISHED!");
  }
}

// Deletes the original article once new one is created
async function deleteArticle(data) {
  let domainName;
  if (twilioFlexIds.includes(fromSection)) {
    domainName = "perficient";
  } else if (amazonConnectIds.includes(fromSection)) {
    domainName = "prftamazonconnect";
  } else if (msoIds.includes(fromSection)) {
    domainName = "prft-mso";
  } else {
    console.log("COULDNT FIND ANYTHING");
    return null;
  }
  const id = data.article.id;
  await axios
    .delete(
      `https://${domainName}.zendesk.com/api/v2/help_center/articles/${id}.json`,
      { headers: { Authorization: `Basic ${encoded}` } }
    )
    .catch((error) => console.log("ERROR", error));
}

getArticle();

// Changes author and adds labels
// async function updateArticle(args, data, domainName) {
//     const { author_id, label_names } = args.article;
//     const id = data.article.id;
//     const article = {
//         "author_id": author_id,
//         "label_names": label_names
//     };
//     axios
//     .put(
//       `https://${domainName}.zendesk.com/api/v2/help_center/en-us/articles/${id}`,
//       {article},
//       { headers: { Authorization: `Basic ${encoded}` } }
//     )
//     .then((res) => console.log("RESSSSSSS2", res))
//     .catch((error) => console.log("DUMMYYYYYYYY2", error));
// }
