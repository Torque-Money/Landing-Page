import React from "react";

export default function Paragraph({ side, children }: { side: "left" | "right"; children: any }) {
    if (side === "left") return <p className="text-xl text-neutral-400 font-medium mt-5 w-11/12 mr-auto">{children}</p>;
    else return <p className="text-xl text-neutral-400 font-medium mt-5 w-11/12 ml-auto">{children}</p>;
}
