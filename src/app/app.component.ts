import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sebastian-app';

  toggleFullScreen() {
    const isFullscreen = document['fullscreen'] || document['webkitIsFullScreen'] || document['mozFullScreen'] || false;

    if (isFullscreen) {
      this.closeFullscreen();
    } else {
      this.openFullscreen();
    }
  }

  openFullscreen() {
    const elem = document.documentElement;
    const methodToBeInvoked = elem.requestFullscreen ||
                              elem['webkitRequestFullScreen'] ||
                              elem['mozRequestFullscreen'] ||
                              elem['msRequestFullscreen'];
    if (methodToBeInvoked) { methodToBeInvoked.call(elem); }
  }

  /* Close fullscreen */
  closeFullscreen() {
    const elem = document;
    const methodToBeInvoked = elem.exitFullscreen ||
      elem['webkitExitFullscreen'] ||
      elem['mozCancelFullScreen'] ||
      elem['msExitFullscreen'];
    if (methodToBeInvoked) { methodToBeInvoked.call(elem); }
  }
}
