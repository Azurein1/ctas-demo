import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Injectable({
  providedIn: 'root'
})
export class ModalDragService {
  private canMove = false;
  private modalX = 0;
  private modalY = 0;
  private mouseDownX = 0;
  private mouseDownY = 0;
  private distX = 0;
  private distY = 0;

  constructor(private rendererFactory2: RendererFactory2) {}

  enableModalDrag(refModal: NzModalRef) {
    const render = this.rendererFactory2.createRenderer(null, null);
    const modalBackground = refModal.getElement();
    const modalElement = modalBackground.querySelector('.ant-modal-content') as HTMLElement;
    const modalTitleElement = this.createModalTitleElement(render, modalElement);
    this.dragListen(render, modalTitleElement, modalElement, modalBackground);
  }

  createModalTitleElement(render: Renderer2, modalElement: Element) {
    const element = document.createElement('div') as any;
    render.setStyle(element, 'width', '100%');
    render.setStyle(element, 'height', '54px');
    render.setStyle(element, 'position', 'absolute');
    render.setStyle(element, 'top', '0');
    render.setStyle(element, 'left', '0');
    render.setStyle(element, 'cursor', 'move');
    render.setStyle(element, '-moz-user-select', 'none');
    render.setStyle(element, '-webkit-user-select', 'none');
    render.setStyle(element, '-ms-user-select', 'none');
    render.setStyle(element, '-khtml-user-select', 'none');
    render.setStyle(element, 'user-select', 'none');
    render.appendChild(modalElement, element);
    return element;
  }

  dragListen(render: Renderer2, modalTitleElement: Element, modalElement: HTMLElement, modalBackground: Element) {
    render.listen(modalTitleElement, 'mousedown', (event: any) => {
      this.mouseDownX = event.clientX;
      this.mouseDownY = event.clientY;
      this.modalX = modalElement.offsetLeft;
      this.modalY = modalElement.offsetTop;
      render.setStyle(modalElement, 'left', `${this.modalX}px`);
      render.setStyle(modalElement, 'top', `${this.modalY}px`);
      this.canMove = true;
    });
    render.listen(modalTitleElement, 'mouseup', event => {
      this.canMove = false;
    });
    // render.listen(modalTitleElement, 'mouseleave', event => {
    //   this.canMove = false;
    // });
    render.listen(modalBackground, 'mousemove', event => {
      if (this.canMove) {
        const moveX = event.clientX - this.mouseDownX;
        const moveY = event.clientY - this.mouseDownY;
        const newModalX = this.modalX + moveX;
        const newModalY = this.modalY + moveY;
        render.setStyle(modalElement, 'left', `${newModalX}px`);
        render.setStyle(modalElement, 'top', `${newModalY}px`);
      }
    });
  }
}
