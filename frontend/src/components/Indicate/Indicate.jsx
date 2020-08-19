import React from 'react';

const Indicate = (props) => {
  // todo а зачем вот эти штуки <> в этом случае? тут у нас и так всего один "корневой" тег <div className="indicate">
  // в других местах по коду тоже видел такую штуку
  return (
    <div className="indicate">
      <div className='indicate__line'>
        <div className="indicate__complete" style={{ width: props.completedIssueNum / props.totalIssues * 100 + "%" }}></div>
      </div>
      <div>
        {props.completedIssueNum}/{props.totalIssues}
      </div>
    </div>
  )
}

export default Indicate;