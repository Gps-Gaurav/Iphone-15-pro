import React from 'react'
import { cameraImg } from '../utils'

const Image = () => {
    return (
        <section className="common-padding">
            <div className="screen-max-width">
                <div className="flex flex-col items-center">
                    <h2 className="hiw-title">
                        A camera that captures your wildest imagination.
                    </h2>

                    <p className="hiw-subtitle">
                        From dramatic framing flexibility to next-generation portraits, see what you can do with our most powerful iPhone camera system.
                    </p>
                </div>
                <div id="chip" className="flex-center w-full my-20">
                    <img src={cameraImg} alt="chip" width={1180} height={180} />
                </div>
                <span>A green iguana, captured by the 48MP Main camera</span>
            </div>
        </section>
    )
}
export default Image