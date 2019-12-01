import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { cloneDeep } from 'lodash';
import { Observable } from 'rxjs';

import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { UiDialogFormComponent } from '../components/ui-dialog-form.component';
import { UiDialogProgressComponent } from '../components/ui-dialog-progress.component';

interface SiteDialogFormParams {
  handler?: (data) => Observable<any>;
  fields: FormlyFieldConfig[];
  model?: any;
  title?: string;
}

@Injectable({ providedIn: 'root' })
export class UiService {
  constructor(private modalService: BsModalService, private toastr: ToastrService, private router: Router) {}

  openForm({ model, title, handler, fields }: SiteDialogFormParams) {
    this.modalService.show(UiDialogFormComponent, {
      initialState: {
        model: cloneDeep(model),
        fields: cloneDeep(fields),
        title,
        handler,
      },
    });
  }

  openProgress() {
    return this.modalService.show(UiDialogProgressComponent, {
      initialState: {
        title: 'Loading...',
      },
    });
  }

  toastSuccess(message = 'OK :)', title?: string) {
    return this.toastr.success(message, title);
  }

  toastError(message = 'Something went wrong :(', title?: string) {
    return this.toastr.error(message, title);
  }

  isRouteActive(url: string, exact = false): boolean {
    return this.router.isActive(url, exact);
  }
}
