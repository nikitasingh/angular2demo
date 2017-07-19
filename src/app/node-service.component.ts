import { TreeNode } from 'primeng/primeng';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NodeService {
    results: string[];
    constructor(private http: Http) {}

    getFiles() {
        return this.http.get('assets/resources/data/files.json')
                        .toPromise()
                        .then(res => <TreeNode[]> res.json().data);
    }
}
