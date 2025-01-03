import { Data } from "@/data/data";
import { NextRequest, NextResponse } from "next/server";

interface Content {
    params: {
        id: string;
    };
}

export function GET(request:NextRequest,content : Content){

    const detail = Data.filter(item => item.id == content.params.id)
    return NextResponse.json(detail.length==0?{result:"No data found"}:{result:detail});
}