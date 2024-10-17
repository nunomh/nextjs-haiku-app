"use server"

import { redirect } from "next/navigation";
import { getUserFromCookie } from "../lib/getUser"
import { ObjectId } from "mongodb";

async function sharedHaikuLogic(formData, user)
{
    const errors = {}

    const ourHaiku = {
        line1: formData.get("line1"),
        line2: formData.get("line2"),
        line3: formData.get("line3"),
        author: ObjectId.createFromHexString(user.userId)
    }

    return { message: "Congrats" }
}

export const createHaiku = async function (prevState, formData)
{
    const user = await getUserFromCookie();

    if (!user)
    {
        return redirect("/");
    }

    const results = await sharedHaikuLogic(formData, user);

}