import { connectToDatabase } from "@/lib/database";
import TestUser from "@/lib/database/models/testuser.model";
// import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // const { userId } = auth();
    // const user = await currentUser();

    await connectToDatabase();
    // const newUser = await TestUser.create({
    //   clerkId: "123456789",
    //   email: "abc@gmail.com",
    //   username: "abc",
    //   photo: "photo",
    //   firstName: "abc",
    //   lastName: "def",
    // });

    // if (newUser) {
    //   console.log("User created", newUser);
    // }
    return NextResponse.json({ message: "Database connected" });

    // return JSON.parse(JSON.stringify(newUser));
    // if (!user) {
    //   return NextResponse.json(
    //     { message: "Not Authenticated" },
    //     { status: 404 }
    //   );
    // }

    // return NextResponse.json(
    //   {
    //     message: "Authenticated",
    //     data: { userId: userId, username: user?.username },
    //   },
    //   { status: 200 }
    // );
  } catch (error) {
    console.log(error);
    throw new Error("Error !");
  }
}
