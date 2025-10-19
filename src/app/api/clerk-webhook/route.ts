import { NextResponse, NextRequest } from "next/server";

import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, email_addresses, first_name, last_name, image_url } =
      body.data.object;

    const email = email_addresses?.[0]?.email_address || null;
    console.log(body, "✅");

    if (!id || !email) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    await db.user.upsert({
      where: { clerkId: id },
      update: {
        email,
        name: first_name,
        profileImage: image_url,
      },
      create: {
        clerkId: id,
        email,
        name: first_name,
        profileImage: image_url,
      },
    });

    return NextResponse.json(
      { message: "User information updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
