import React from 'react'
import { lapImg} from '../utils'

const Gigablast =()=>{
    return (
        <section className="common-padding">
            <div className="screen-max-width">
                <div className="flex flex-col items-center">
                    <h2 className="hiw-title">
                    Gigablast
                    your gigabits.
                    </h2>

                </div>
                <div id="chip" className="flex-center w-full my-5">
                    <img src={lapImg} alt="chip" width={1180} height={180} />
                </div>
                </div>
  
        </section>
    )
}
export default Gigablast