import { Data } from "@/data/data";
import { NextRequest, NextResponse } from "next/server";

interface Content {
    params: {
        id: number;
    };
}

export function GET(){
    const detail = Data;
    return NextResponse.json(detail,{status:200})
}