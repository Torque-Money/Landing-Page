export default function Article({ side }: { side: "left" | "right" }) {
    return (
        <article class="w-4/5 mx-auto flex xl:flex-row flex-col xl:items-start items-center justify-evenly xl:space-x-32 xl:space-y-0 space-y-24">
            {side === "left" ? (
                <>
                    <div class="flex flex-col items-start space-y-12 xl:pt-24" style="min-width: 400px">
                        <div class="pb-6 border-b-2 border-b-neutral-400 border-opacity-5">
                            <h3 class="text-white font-bold text-3xl">
                                <slot name="heading" />
                            </h3>
                            <slot name="text" />
                        </div>
                        <slot name="cta" />
                    </div>
                    <slot name="image" />
                </>
            ) : (
                <>
                    <slot name="image" />
                    <div class="flex flex-col items-end space-y-12 xl:pt-24" style="min-width: 400px">
                        <div class="text-right pb-6 border-b-2 border-b-neutral-400 border-opacity-5">
                            <h3 class="text-white font-bold text-3xl">
                                <slot name="heading" />
                            </h3>
                            <slot name="text" />
                        </div>
                        <slot name="cta" />
                    </div>
                </>
            )}
        </article>
    );
}