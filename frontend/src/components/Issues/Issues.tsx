import React, { useEffect, FC } from 'react';
import { Checkbox } from '@atlaskit/checkbox';
import EditorRemoveIcon from '@atlaskit/icon/glyph/editor/remove';
import { IssueType } from '../../redux/Types';

type PropsType = {
  issues: Array<IssueType>
  toggleCompleteStatus: (id: number, iscomplete: boolean) => void
  getState: () => void
  deleteIssue: (id: number) => void
}
const Issues: FC<PropsType>= ({issues, toggleCompleteStatus, getState, deleteIssue}) => {

  useEffect(() => {
    getState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (<>
    {issues.map(issue => (
      <div key={'div' + issue.id} className={issue.iscomplete ? 'issue__item complete' : "issue__item"}>
        <Checkbox
          value={issue.title}
          label={issue.title}
          isChecked={issue.iscomplete}
          onChange={() => toggleCompleteStatus(issue.id, !issue.iscomplete)}
          name="checkbox-basic"
          testId="cb-basic"
        />
        <div className="issue__del_icon"
            onClick={() => deleteIssue(issue.id)}>
          <EditorRemoveIcon label ="" primaryColor="red"/>
        </div>
      </div>
    ))}
  </>
  )
}

export default Issues;