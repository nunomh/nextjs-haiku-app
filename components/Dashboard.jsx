import { ObjectId } from "mongodb";
import { getCollection } from "../lib/db";

async function getHaikus(id) {
  const collection = await getCollection("haikus");
  const results = await collection
    .find({ author: ObjectId.createFromHexString(id) })
    .sort()
    .toArray(); // toArray() is necessary when receiving multiple items
  console.log(results);
  return results;
}

export default async function Dashboard(props) {
  const haikus = await getHaikus(props.user.userId);

  return (
    <div>
      <h2 className="text-center text-2xl text-gray-600 mb-5">Your Haikus</h2>
    </div>
  );
}
