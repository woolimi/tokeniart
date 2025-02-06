// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const Art42Module = buildModule("Art42Module", (m) => {
  const art42 = m.contract("Art42");

  return { art42 };
});

export default Art42Module;
