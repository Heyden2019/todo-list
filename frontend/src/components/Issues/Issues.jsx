import React, { useEffect } from 'react';
import { Checkbox } from '@atlaskit/checkbox';
import EditorRemoveIcon from '@atlaskit/icon/glyph/editor/remove';

const Issues = (props) => {

  useEffect(() => {
    props.getState("ZZZ");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleStatus = (id, iscomplete) => {
    props.toggleCompleteStatus(id, iscomplete, props.jiraIssueKey)
  }

  const deleteIssue = (id) => {
    props.deleteIssue(id, props.jiraIssueKey)
  }

  return (<>    
    {props.issues.map(issue => (
      <div key={'div' + issue.id} className={issue.iscomplete ? 'issue__item complete' : "issue__item"}>
        <Checkbox
          value={issue.title}
          label={issue.title}
          isChecked={issue.iscomplete}
          onChange={() => toggleStatus(issue.id, !issue.iscomplete)}
          name="checkbox-basic"
          testId="cb-basic"
        />
        <div className="issue__del_icon"
            onClick={() => deleteIssue(issue.id)}>
          <EditorRemoveIcon primaryColor="red"/>
        </div>
      </div>
    ))}
  </>
  )
}

export default Issues;