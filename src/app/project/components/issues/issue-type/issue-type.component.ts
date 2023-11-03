import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IssueType, JIssue } from '@jira-clone/interface/issue';
import { IssueTypeWithIcon } from '@jira-clone/interface/issue-type-icon';
import { ProjectService } from '@jira-clone/project/state/project/project.service';
import { IssueUtil } from '@jira-clone/project/utils/issue';
import { ProjectConst } from '@jira-clone/project/config/const';

@Component({
  selector: 'issue-type',
  templateUrl: './issue-type.component.html',
  styleUrls: ['./issue-type.component.scss']
})
export class IssueTypeComponent implements OnInit, OnChanges {
  @Input() issue: JIssue;

  get selectedIssueTypeIcon(): string {
    return IssueUtil.getIssueTypeIcon(this.issue.type);
  }

  issueTypes: IssueTypeWithIcon[];

  constructor(private _projectService: ProjectService) {
    this.issueTypes = ProjectConst.IssueTypesWithIcon;
  }

  ngOnInit() {}

  ngOnChanges(): void {}

  updateIssue(issueType: IssueType) {
    this._projectService.updateIssue({
      ...this.issue,
      type: issueType
    });
  }

  isTypeSelected(type: IssueType) {
    return this.issue.type === type;
  }
}
