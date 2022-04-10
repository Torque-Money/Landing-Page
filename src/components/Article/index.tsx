export default function Article({ side, children }: { side: "left" | "right"; children: any }) {
    return <article class="w-4/5 mx-auto flex xl:flex-row flex-col xl:items-start items-center justify-evenly xl:space-x-32 xl:space-y-0 space-y-24">{}</article>;
}
