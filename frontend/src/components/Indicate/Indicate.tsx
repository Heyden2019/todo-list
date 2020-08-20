import React, { FC } from 'react';

type PropsType = {
    completedIssueNum: number
    totalIssues: number
}
const Indicate: FC<PropsType> = ({completedIssueNum, totalIssues}) => {
  return (
    <div className="indicate">
      <div className='indicate__line'>
        <div className="indicate__complete" style={{width: completedIssueNum / totalIssues * 100 + "%"}}/>
      </div>
      <div>
        {completedIssueNum}/{totalIssues}
      </div>
    </div>
  )
}

export default Indicate;