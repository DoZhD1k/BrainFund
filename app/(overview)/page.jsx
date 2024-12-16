"use client";

import React, { useEffect, useContext, useState } from "react";
import { CrowdFundingContext } from "@/context/CroudFunding";
import Hero from "@/components/custom/Hero";
import Card from "@/components/custom/Card";
import PupUp from "@/components/custom/PupUp";

export default function Home() {
  const {
    titleData,
    getCampaigns,
    createCampaign,
    donate,
    getUserCampaigns,
    getDonations,
    gasLimit,
    currentAccount,
  } = useContext(CrowdFundingContext);

  const [allcampaign, setAllcampaign] = useState();
  const [usercampaign, setUsercampaign] = useState();

  useEffect(() => {
    const getCampaignsData = getCampaigns();
    const userCampaignsData = getUserCampaigns();
    return async () => {
      const allData = await getCampaignsData;
      const userData = await userCampaignsData;
      setAllcampaign(allData);
      setUsercampaign(userData);
    };
  }, [currentAccount]);

  //DONATE POPUP MODEL
  const [openModel, setOpenModel] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState();

  console.log(donateCampaign);
  return (
    <div>
      <Hero titleData={titleData} createCampaign={createCampaign} />

      <Card
        title="All Listed Campaign"
        allcampaign={allcampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />

      <Card
        title="Your Created Compaign"
        allcampaign={usercampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />

      {/* {openModel && (
        <PupUp
          setOpenModel={setOpenModel}
          getDonations={getDonations}
          donate={donateCampaign}
          donateFunction={donate}
        />
      )} */}
    </div>
  );
}
