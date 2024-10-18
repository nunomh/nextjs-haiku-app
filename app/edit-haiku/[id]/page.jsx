import { getCollection } from "../../../lib/db";
import HaikuForm from "../../../components/HaikuForm";
import { ObjectId } from "mongodb";

async function getDoc(id) {
  const haikusCollection = await getCollection("haikus");
  const result = await haikusCollection.findOne({
    _id: ObjectId.createFromHexString(id),
  });
  return result;
}

export default async function Page(props) {
  const doc = await getDoc(props.params.id);

  return (
    <div>
      <h2 className="text-center text-4xl text-gray-600 mb-5">Edit Post</h2>
      <HaikuForm haiku={doc} action="edit" />
    </div>
  );
}
