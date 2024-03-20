import { AiResponse } from "@/components/DiffView/context/diffcontext";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
    const response = await fetch('http://localhost:8080/getDiff', {
        method: 'POST',
        body: JSON.stringify(await request.json()),
        headers: {
            "Content-Type": "application/json",
        },
        mode: 'cors',
        cache: 'no-store'
    })
    const body = await response.json() as Promise<AiResponse>
    return new NextResponse(JSON.stringify(body) )
    } catch(e) {
        return new NextResponse(JSON.stringify({}))
    }
    // console.log(body);
    
}