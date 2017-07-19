import { NodeService } from './../node-service.component';
import { templateSourceUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TreeModule, TreeNode } from 'primeng/primeng';
import { selector } from 'rxjs/operator/publish';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html'
  // styleUrls: ["./../../../node_modules/font-awesome/css/font-awesome.min.css",
  // "./../../../node_modules/primeng/resources/primeng.min.css",
  // "./../../../node_modules/primeng/resources/themes/omega/theme.css"]
})
export class TreeViewComponent implements OnInit {
  files: TreeNode[];
  selectedFiles: TreeNode[];

  constructor(private nodeService: NodeService) {}
  ngOnInit() {
      this.nodeService.getFiles().then(files => this.files = files);
  }
}
