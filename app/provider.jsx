"use client";

import { NavBar, Footer } from "../Components";
import { CrowdFundingProvider } from "../context/CroudFunding";

export default function AppProviders({ children }) {
  return <CrowdFundingProvider>{children}</CrowdFundingProvider>;
}
