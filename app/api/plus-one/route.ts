import { NextResponse, NextRequest } from "next/server";
import connectMongo from "@/libs/mongoose";
import plusOne from "@/models/plusOne";

// This route is used to store the leads that are generated from the landing page.
// The API call is initiated by <ButtonLead /> component
// Duplicate emails just return 200 OK
export async function POST(req: NextRequest, res: any) {
  await connectMongo();
  console.log(req);
  //const body = await req.json();
  console.log("After req.json call hello" + req.method);
  try {
    if (req.method === 'POST') {
    const result = await plusOne.findOneAndUpdate(
      { _id: 'globalCounter' },
      { $inc: { sequence_value: 1 } },
      { new: true, upsert: true }
    )

    return NextResponse.json({ sequence_value: result.sequence_value }, {status: 200});
    //res.status(200).json({ sequence_value: result.sequence_value });
  } else if (req.method === 'GET') {
    console.log("After req.method GET call");
    const counter = await plusOne.findById('globalCounter');

    res.status(200).json({ sequence_value: counter ? counter.sequence_value : 0 });
    //return NextResponse.json({ sequence_value: counter ? counter.sequence_value : 1 }, {status: 200});
    //res.status(200).json({ sequence_value: counter ? counter.sequence_value : 1 });
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(404).end(`Method ${req.method} Not Allowed`);
  }
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
