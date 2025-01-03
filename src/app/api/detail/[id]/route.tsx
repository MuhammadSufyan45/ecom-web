import { Data } from "@/data/data";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const detail = Data.filter(item => item.id == params.id);
    return NextResponse.json(detail.length == 0 ? { result: "No data found" } : { result: detail });
}
