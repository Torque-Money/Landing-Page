import React from "react";

export default function Article({ side, heading, text, cta, image }: { side: "left" | "right"; heading: any; text: any; cta: any; image: any }) {
    return (
        <article className="w-4/5 mx-auto flex xl:flex-row flex-col xl:items-start items-center justify-evenly xl:space-x-32 xl:space-y-0 space-y-24">
            {side === "left" ? (
                <>
                    <div className="flex flex-col items-start space-y-12 xl:pt-24" style={{ minWidth: 400 }}>
                        <div className="pb-6 border-b-2 border-b-neutral-400 border-opacity-5">
                            {/* <h3 className="text-white font-bold text-3xl"><slot name="heading" /></h3> */}
                            <h3 className="text-white font-bold text-3xl">
                                <heading />
                            </h3>
                            {/* <slot name="text" /> */}
                            <text />
                        </div>
                        <cta />
                        {/* <slot name="cta" /> */}
                    </div>
                    {/* <slot name="image" /> */}
                    <image />
                </>
            ) : (
                <>
                    {/* <slot name="image" /> */}
                    <image />
                    <div className="flex flex-col items-end space-y-12 xl:pt-24" style={{ minWidth: 400 }}>
                        <div className="text-right pb-6 border-b-2 border-b-neutral-400 border-opacity-5">
                            {/* <h3 className="text-white font-bold text-3xl"><slot name="heading" /></h3> */}
                            <h3 className="text-white font-bold text-3xl">
                                <heading />
                            </h3>
                            {/* <slot name="text" /> */}
                            <text />
                        </div>
                        {/* <slot name="cta" /> */}
                        <cta />
                    </div>
                </>
            )}
        </article>
    );
}
