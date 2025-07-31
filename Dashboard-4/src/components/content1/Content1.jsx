import React from 'react'
import './Content1.css'
import completed from '../../assets/completed.png'
import review from '../../assets/review.png'
import hand from '../../assets/hand.png'
import approval from '../../assets/approval.png'
import signature from '../../assets/signature.png'

const Content1 = () => {
  return (
    <>
    <div className='container'>
        <div className="item">
            <div className='itemimg'>
             <img src={completed} alt="" />
             </div>
         <div className="completed">
             <span>322</span> 
             <br />
             <span>Completed</span>
         </div>
        </div>
        <div className="item">
            <div className="itemimg">
                <div className="itemimg">
             <img src={review} alt="" />
             </div>
             </div>
         <div className="completed">
             <span>322</span> 
             <br />
             <span>Active</span>
         </div>
        </div>
        <div className="item">
            <div className="itemimg">
             <img src={hand} alt="" />
             </div>
         <div className="completed">
             <span>322</span> 
             <br />
             <span>Review</span>
         </div>
        </div>
        <div className="item">
            <div className="itemimg">
             <img src={approval} alt="" />
             </div>
         <div className="completed">
             <span>322</span> 
             <br />
             <span>Approval</span>
         </div>
        </div>
        <div className="item">
            <div className="itemimg">
             <img src={signature} alt="" />
             </div>
         <div className="completed">
             <span>322</span> 
             <br />
             <span>Completed</span>
         </div>
        </div>
    </div>
    
    </>
  )
}

export default Content1
