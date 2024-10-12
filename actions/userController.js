"use server"

function isAlphaNumeric(x)
{
    const regex = /^[a-zA-Z0-9]*$/
    return regex.test(x)
}

export const register = async function (prevState, formData)
{
    const errors = {};

    const ourUser = {
        username: formData.get("username"),
        password: formData.get("password"),
    }

    if (typeof ourUser.username != "string") ourUser.username = "";
    if (typeof ourUser.password != "string") ourUser.password = "";

    ourUser.username = ourUser.username.trim();
    ourUser.password = ourUser.password.trim();

    if (ourUser.username.length < 3) errors.username = "Username must be at least 3 characters"
    if (ourUser.username.length > 30) errors.username = "Username must be at most 30 characters"
    if (!isAlphaNumeric(ourUser.username)) errors.username = "Username can only contain letters and numbers";


    if (errors.username || errors.password)
    {
        return { errors: errors, success: false };
    }

    // storing a new user in the database

    // log the user in by giving them a cookie

}