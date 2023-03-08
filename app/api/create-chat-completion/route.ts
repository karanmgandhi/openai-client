import { NextResponse } from "next/server";
import { OpenAI } from "../../../utils/openai";

export const CREATE_CHAT_COMPLETION_ROUTE = "/api/create-chat-completion";

export async function POST(request: Request) {
    const { content, history } = await request.json();

    console.log(666, history);

    const response = await OpenAI.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            ...history,
            {
                role: "user",
                content,
            },
        ],
    });

    /*
        TypeScript Warning: Although Response.json() is valid, native TypeScript types
        currently shows an error, you can use NextResponse.json() for typed responses instead.
        Source: https://beta.nextjs.org/docs/routing/route-handlers
    */

    return NextResponse.json(response.data);
}
