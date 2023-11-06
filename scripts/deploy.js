

const hre = Require("hardhat");


async function main() {
  const ToDoList = await hre.ethers.getContractFactory("ToDolist");
  const toDoList = await ToDoList.deploy();
  await toDoList

  console.log("ToDoList deployed to:", toDoList.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});