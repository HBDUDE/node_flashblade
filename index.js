const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: "http://host.docker.internal:9200" });

async function getArrayListInfo() {
  const { arrayList } = await client.get({
    index: "flashblade",
    id: "array_list",
  });

  console.log("arrayList: ");
  console.log(`Array name: ${arrayList.name}`);
  console.log(`Array version: ${arrayList.version}`);
  console.log("------------------------------------");
}

async function getArrayS3Info() {
  const { arrayS3 } = await client.get({
    index: "flashblade",
    id: "array_s3_performance",
  });

  console.log(`arrayS3: ${arrayS3}`);
  console.log("------------------------------------");
}

async function getArraySpace() {
  const { arraySpace } = await client.get({
    index: "flashblade",
    id: "arrays_space",
  });

  console.log("arraySpace: ");
  console.log(`Capacity: ${arraySpace.capacity}`);
  console.log(`Total physical space: ${arraySpace.total_physical}`);
  console.log(`Remaining space: ${arraySpace.total_physical - arraySpace.capacity}`)
  console.log("------------------------------------");
}

console.log("######################################");
getArrayListInfo().catch(console.log);
getArrayS3Info().catch(console.log);
getArraySpace().catch(console.log);
console.log("######################################");