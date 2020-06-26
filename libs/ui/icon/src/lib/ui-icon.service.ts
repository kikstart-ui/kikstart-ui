import { Injectable } from '@angular/core'
import { FaIconLibrary } from '@fortawesome/angular-fontawesome'

import { faArrowDown } from '@fortawesome/free-solid-svg-icons/faArrowDown'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp'
import { faBug } from '@fortawesome/free-solid-svg-icons/faBug'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp'
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons/faCircleNotch'
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog'
import { faCogs } from '@fortawesome/free-solid-svg-icons/faCogs'
import { faComment } from '@fortawesome/free-solid-svg-icons/faComment'
import { faCube } from '@fortawesome/free-solid-svg-icons/faCube'
import { faCubes } from '@fortawesome/free-solid-svg-icons/faCubes'
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit'
import { faExclamation } from '@fortawesome/free-solid-svg-icons/faExclamation'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle'
import { faFile } from '@fortawesome/free-solid-svg-icons/faFile'
import { faFileAudio } from '@fortawesome/free-solid-svg-icons/faFileAudio'
import { faFileImage } from '@fortawesome/free-solid-svg-icons/faFileImage'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons/faFilePdf'
import { faFileVideo } from '@fortawesome/free-solid-svg-icons/faFileVideo'
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart'
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons/faPencilAlt'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner'
import { faSync } from '@fortawesome/free-solid-svg-icons/faSync'
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons/faTachometerAlt'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons/faThumbsDown'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons/faThumbsUp'
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'

import { faUniversity } from '@fortawesome/free-solid-svg-icons/faUniversity'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers'
import { faWrench } from '@fortawesome/free-solid-svg-icons/faWrench'

@Injectable()
export class UiIconService {
  public readonly icons = [
    faArrowDown,
    faArrowLeft,
    faArrowRight,
    faArrowUp,
    faBug,
    faCheck,
    faChevronDown,
    faChevronLeft,
    faChevronRight,
    faChevronUp,
    faCircle,
    faCircleNotch,
    faComment,
    faCog,
    faCogs,
    faCube,
    faCubes,
    faEdit,
    faExclamation,
    faExclamationCircle,
    faExclamationTriangle,
    faFile,
    faFileAudio,
    faFileImage,
    faFilePdf,
    faFileVideo,
    faGlobe,
    faHeart,
    faLock,
    faPlus,
    faPencilAlt,
    faSpinner,
    faSync,
    faTachometerAlt,
    faThumbsDown,
    faThumbsUp,
    faTimes,
    faTrash,
    faUniversity,
    faUser,
    faUsers,
    faWrench,
  ]
  constructor(private readonly library: FaIconLibrary) {
    this.setup()
  }

  setup() {
    this.icons.forEach((icon) => this.library.addIcons(icon))
  }
}
