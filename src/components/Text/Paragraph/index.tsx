export default function Paragraph({ side, children }: { side: "left" | "right"; children: any }) {
    if (side === "left") return <p class="text-xl text-neutral-400 font-medium mt-5 w-11/12 mr-auto">{children}</p>;
    else return <p class="text-xl text-neutral-400 font-medium mt-5 w-11/12 ml-auto">{children}</p>;
}
