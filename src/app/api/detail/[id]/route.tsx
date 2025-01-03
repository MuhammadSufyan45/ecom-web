import { Data } from "@/data/data";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params; 
  const detail = Data.filter(item => item.id === id);
  return NextResponse.json(detail.length === 0 ? { result: "No data found" } : { result: detail });
}
