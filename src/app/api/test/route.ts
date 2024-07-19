import { connectToDatabase } from "@/lib/database";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const { userId } = auth();
    const user = await currentUser();

    await connectToDatabase();

    if (!user) {
      return NextResponse.json(
        { message: "Not Authenticated" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Authenticated",
        data: { userId: userId, username: user?.username },
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    throw new Error("Error !");
  }
};
